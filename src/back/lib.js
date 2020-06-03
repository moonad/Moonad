var sig = require("nano-ethereum-signer");
var fm = require("formality-lang");

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

const hex_char = "0123456789abcdef".split("");

function hex_to_uint48(hex) {
  return parseInt(hex.slice(-48), 16);
};

function uint48_to_hex(num) {
  var hex = "0x";
  for (var i = 0; i < 12; ++i) {
    hex += hex_char[(num / (2**((12-i-1)*4))) & 0xF];
  };
  return hex;
};

function uint32_to_bytes(num) {
  return new Uint8Array(new Uint32Array([num]).buffer);
};

function bytes_to_uint32(buf) {
  return (new Uint32Array(buf.buffer))[0];
};

function bytes_to_hex(buf) {
  var hex = "0x";
  for (var i = 0; i < buf.length; ++i) {
    hex += hex_char[buf[i]>>>4] + hex_char[buf[i]&0xF];
  };
  return hex;
};

function hex_to_bytes(hex) {
  var arr = [];
  for (var i = 0; i < (hex.length-2)/2; ++i) {
    arr.push((parseInt(hex[2+i*2+0],16)<<4)|parseInt(hex[2+i*2+1],16));
  };
  return new Uint8Array(arr);
};

var utf8_encoder = new TextEncoder("utf-8");
function string_to_bytes(str) {
  return utf8_encoder.encode(str);
};

var utf8_decoder = new TextDecoder("utf-8");
function bytes_to_string(buf) {
  return utf8_decoder.decode(buf);
};

function string_to_hex(str) {
  return bytes_to_hex(string_to_bytes(str));
};

function hex_to_string(hex) {
  return bytes_to_string(hex_to_bytes(hex));
};

function get_hex_from_bytes(idx, lim, buf) {
  var bytes = "0x";
  for (var i = idx/8; i < lim/8; ++i) { 
    bytes += hex_char[buf[i]>>>4] + hex_char[buf[i]&0xF];
  };
  return bytes;
};

function bytes_to_post(buf) {
  return {
    date: hex_to_uint48(get_hex_from_bytes(0, 64, buf)),
    cite: get_hex_from_bytes(64, 128, buf),
    sign: get_hex_from_bytes(128, 648, buf),
    head: hex_to_string(get_hex_from_bytes(648, 1024, buf)).replace(/\0/g,""),
    body: hex_to_string(get_hex_from_bytes(1024, buf.length*8, buf)),
  };
};

function put_hex_on_array(hex, arr) {
  for (var i = 0; i < (hex.length-2)/2; ++i) {
    var b0 = parseInt(hex[2+i*2+0],16);
    var b1 = parseInt(hex[2+i*2+1],16);
    arr.push((b0<<4)|b1);
  };
};

function post_to_bytes(post) {
  var arr = [];
  put_hex_on_array(hex(64, uint48_to_hex(post.date)), arr);
  put_hex_on_array(post.cite, arr);
  put_hex_on_array(post.sign, arr);
  put_hex_on_array(hex(376, string_to_hex(post.head)), arr);
  put_hex_on_array(string_to_hex(post.body), arr);
  return new Uint8Array(arr);
};

function hex_to_post(hex) {
  return bytes_to_post(hex_to_bytes(hex));
};

function post_to_hex(post) {
  return bytes_to_hex(post_to_bytes(post));
};

function get_post_blocks(post, author) {
  var blocks = [{ctor:"text", text:""}];
  var inside_code = false;
  for (var i = 0; i < post.body.length; ++i) {
    if (!inside_code                            
      && author
      && (i === 0 || post.body[i-1] === "\n")
      && ( post.body.slice(i, i+author.length+1) === author+"."
        || post.body[i] === "T" && post.body.slice(i+2, i+2+author.length+1) === author+".")) {
      inside_code = true;
      blocks.push({ctor:"code", code:""});
    } else if (inside_code
      && post.body[i] === "\n"
      && post.body[i+1] === "\n") {
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
function get_post_code(post, author) {
  var blocks = get_post_blocks(post, author);
  var code = "";
  for (var block of blocks) {
    if (block.ctor === "code") {
      code += block.code;
    }
  };
  return code;
};

function get_post_msge(post) {
  return post.cite + "\n" + post.head + "\n" + post.body;
};

function get_post_auth(post) {
  if (!post.auth) {
    post.auth = sig.signerAddress(sig.keccak(get_post_msge(post)), post.sign)
  };
  return post.auth;
};

function sign_post(post, pkey) {
  return {
    ...post,
    sign: post.sign || sig.signMessage(sig.keccak(get_post_msge(post)), pkey),
  };
};

function get_term_refs(term, refs = {}) {
  function go(term) {
    switch (term.ctor) {
      case "Var": break;
      case "Ref": refs[term.name] = 1; break;
      case "Typ": break;
      case "All": go(term.bind); go(term.body(fm.synt.Var(""),fm.synt.Var(""))); break;
      case "Lam": go(term.body(fm.synt.Var(""))); break;
      case "App": go(term.func); go(term.argm); break;
      case "Let": go(term.expr); go(term.body(fm.synt.Var(""))); break;
      case "Ann": go(term.expr); go(term.type); break;
      case "Loc": go(term.expr); break;
      case "Hol": break;
    };
  };
  go(term);
  return refs;
};

function split_hex_in_chunks(len, hex) {
  var chunks = [];
  for (var i = 2; i < hex.length; i += len / 4) {
    chunks.push("0x" + hex.slice(i, i + len / 4)); 
  };
  return chunks;
};

function hex_to_hex64s(hex) {
  return split_hex_in_chunks(64, hex);
};

function bytes_concat(bytes) {
  var size = 0;
  for (var arr of bytes) {
    size += arr.length;
  }
  var done = new Uint8Array(size);
  var indx = 0;
  for (var arr of bytes) {
    for (var x of arr) {
      done[indx++] = x
    };
  }
  return done;
};

// Net message codes
const DO_POST = 66;
const DO_WATCH = 67;
const POST = 97;
const CITE = 98;
const NAME = 99;
const ROOM = 100;

module.exports = {
  hex,
  nam,
  num,
  hex_to_uint48,
  uint48_to_hex,
  uint32_to_bytes,
  bytes_to_uint32,
  bytes_to_hex,
  hex_to_bytes,
  string_to_bytes,
  bytes_to_string,
  string_to_hex,
  hex_to_string,
  bytes_to_post,
  post_to_bytes,
  hex_to_post,
  post_to_hex,
  get_term_refs,
  get_post_code,
  get_post_blocks,
  get_post_msge,
  get_post_auth,
  split_hex_in_chunks,
  hex_to_hex64s,
  bytes_concat,
  sign_post,
  DO_POST,
  DO_WATCH,
  POST,
  CITE,
  NAME,
  ROOM,
};
