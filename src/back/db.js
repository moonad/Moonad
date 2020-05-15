// Simple fs database
var fs = require('fs-extra');
var path = require("path");

var get = async (key) => {
  var file_path = path.join("db", key).toLowerCase();
  await fs.ensureFile(file_path);
  return (await fs.readFile(file_path)).toString("hex");
};

var set = async (key, str) => {
  var file_path = path.join("db",key).toLowerCase();
  await fs.ensureFile(file_path);
  await fs.writeFile(file_path, Buffer.from(str, "hex"));
  return true;
};

var push = async (key, str) => {
  var file_path = path.join("db",key).toLowerCase();
  await fs.ensureFile(file_path);
  await fs.appendFile(file_path, Buffer.from(str, "hex"));
  return true;
};

var size = async (key) => {
  try {
    var file_path = path.join("db",key).toLowerCase();
    var stat = await fs.stat(file_path);
    return stat.size;
  } catch (e) {
    return 0;
  }
};

var read = async (key, from, to) => {
  var file_path = path.join("db",key).toLowerCase();
  var file_size = await size(key);
  if (from >= file_size || to >= file_size) {
    throw "Out of bounds.";
  } else {
    return new Promise((resolve, reject) => {
      var stream = fs.createReadStream(file_path, {start: from, end: to});
      var data = "";
      stream.on("data", chunk => {
        data += chunk.toString("hex");
        if (data.length / 2 === to - from + 1) {
          resolve(data);
        };
      });
    });
  };
};

module.exports = {get, set, size, read, push};
