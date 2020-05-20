// Validation
// ==========

function hex(bits, hex) {
  if (typeof hex !== "string" || !/^0x[a-fA-F0-9]*$/.test(hex)) {
    return null;
  };
  while ((hex.length - 2) * 4 < bits) {
    hex = "0x0" + hex.slice(2);
  };
  if ((hex.length - 2) * 4 > bits) {
    hex = hex.slice(0, Math.floor(bits / 4) + 2);
  }
  return hex;
};

function nam(name) {
  if (typeof name !== "string" || !/^[a-zA-Z0-9.]*$/.test(name)) {
    return null;
  } else {
    return name;
  }
};

function num(val) {
  try {
    var num = parseInt(val, 10);
    if (isNaN(num)) {
      return null;
    } else {
      return num;
    }
  } catch (e) {
    return null;
  }
};

function hex_to_num(hex) {
  return parseInt(hex.slice(-52), 16);
};

function get_post_blocks(post) {
  var blocks = [{ctor:"text", text:""}];
  var inside_code = false;
  for (var i = 0; i < post.body.length; ++i) {
    if (i >= 1 && !inside_code && post.body[i-1] === "@" && (i === 1 || post.body[i-2] === "\n")) {
      inside_code = true;
      blocks.push({ctor:"code", code:""});
    }
    if (inside_code && post.body[i-1] === "\n" && post.body[i-2] === "\n") {
      inside_code = false;
      blocks.push({ctor:"text", text:""});
    }
    if (inside_code) {
      blocks[blocks.length - 1].code += post.body[i];
    } else {
      blocks[blocks.length - 1].text += post.body[i];
    };
  };
  return blocks;
};

// Returns the code portions of a post
function get_post_code(post) {
  var blocks = get_post_blocks(post);
  var code = "";
  for (var block of blocks) {
    if (block.ctor === "code") {
      code += block.code;
    }
  };
  return code;
};

module.exports = {
  hex, nam, num, hex_to_num, get_post_code, get_post_blocks,
};
