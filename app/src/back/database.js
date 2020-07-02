var fs = require("fs-extra");
var path = require("path");
var DB = {};

function key_path(file = "") {
  return path.join(__dirname, "..", "..", "data", file).toLowerCase();
};

// String -> Promise(Buffer)
async function get(key) {
  if (!DB[key]) {
    try {
      DB[key] = await fs.readFile(key_path(key));
    } catch (e) {
      return null;
    };
  };
  return DB[key];
};

// String -> Buffer -> Promise(Bool)
async function set(key, buf) {
  try {
    if (buf instanceof Buffer) {
      await fs.writeFile(key_path(key), buf);
      DB[key] = buf;
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  };
};

// Key -> Buffer -> Promise(Unit)
async function con(key, buf) {
  try {
    if (buf instanceof Buffer) {
      var val = await get(key, buf);
      await fs.appendFile(key_path(key), buf);
      if (val) {
        DB[key] = Buffer.concat([val, buf]); // TODO: improve performance
      } else {
        DB[key] = buf;
      }
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

// Key -> Promise(Bool)
async function exists(key) {
  try {
    await fs.access(key_path(key), fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = {
  get,
  set,
  con,
  exists,
};

//function bytes_to_post(buf) {
  //return {
    //date: lib.hex_to_uint48(lib.get_hex_from_bytes(0, 64, buf)),
    //cite: lib.get_hex_from_bytes(64, 128, buf),
    //auth: lib.get_hex_from_bytes(128, 288, buf),
    //head: lib.hex_to_string(lib.get_hex_from_bytes(288, 928, buf)).replace(/\0/g,""),
    //body: lib.hex_to_string(lib.get_hex_from_bytes(928, buf.length*8, buf)),
  //};
//};

//var fs = require("fs");
//var lib = require("./lib.js");
//var files = fs.readdirSync("data");
//for (var file of files) {
  //switch (file.slice(-5)) {
    //case ".post":
      //var post = bytes_to_post(fs.readFileSync("data/"+file));
      //post.body = "# " + post.head + "\n\n" + post.body;
      //fs.writeFileSync("data/"+file, Buffer.from(lib.post_to_bytes(post)));
      //break;
    ////case ".cite":
      ////var buff = fs.readFileSync("data/"+file);
      ////var json = lib.hex_to_hex64s(lib.bytes_to_hex(buff));
      ////break;
    ////case ".addr":
    ////case ".name":
      ////var json = fs.readFileSync("data/"+file, "utf8");
      ////break;
  //}
//};

