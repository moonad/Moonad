var fs = require("fs-extra");
var path = require("path");
var DB = {};

function key_path(file = "") {
  return path.join(__dirname, "..", "..", "db", file).toLowerCase();
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

//var lib = require("./../lib.js");
//(async () => {
  //console.log(await con("test4", Buffer.from(lib.string_to_bytes("zzz"))));
  ////console.log(await con("test0", Buffer.from(lib.string_to_bytes("bb"))));
  ////console.log(await con("test0", Buffer.from(lib.string_to_bytes("cc"))));
  ////console.log(await con("test0", Buffer.from(lib.string_to_bytes("dd"))));
  //console.log(lib.bytes_to_string(await get("test4")));
  //console.log((await get("test4")));
//})();
