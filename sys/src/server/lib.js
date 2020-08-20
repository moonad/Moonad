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

function put_hex_on_array(hex, arr) {
  for (var i = 0; i < (hex.length-2)/2; ++i) {
    var b0 = parseInt(hex[2+i*2+0],16);
    var b1 = parseInt(hex[2+i*2+1],16);
    arr.push((b0<<4)|b1);
  };
};

function get_file_msge(file) {
  return file.code;
};

function get_file_auth(file) {
  return sig.signerAddress(sig.keccak(get_file_msge(file)), file.sign).toLowerCase();
};

function sign_file(file, pkey) {
  return {
    ...file,
    sign: file.sign || sig.signMessage(sig.keccak(get_file_msge(file)), pkey),
  };
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

function hex_to_bits(hex) {
  var bits = "0b";
  for (var i = 2; i < hex.length; ++i) {
    switch (hex[i].toLowerCase()) {
      case "0": bits += "0000"; break;
      case "1": bits += "0001"; break;
      case "2": bits += "0010"; break;
      case "3": bits += "0011"; break;
      case "4": bits += "0100"; break;
      case "5": bits += "0101"; break;
      case "6": bits += "0110"; break;
      case "7": bits += "0111"; break;
      case "8": bits += "1000"; break;
      case "9": bits += "1001"; break;
      case "a": bits += "1010"; break;
      case "b": bits += "1011"; break;
      case "c": bits += "1100"; break;
      case "d": bits += "1101"; break;
      case "e": bits += "1110"; break;
      case "f": bits += "1111"; break;
    }
  }
  return bits;
}

function bits_to_hex(bits) {
  var hex = "0x";
  for (var i = 2; i < bits.length; i += 4) {
    switch (bits.slice(i, i+4)) {
      case "0000": hex += "0"; break;
      case "0001": hex += "1"; break;
      case "0010": hex += "2"; break;
      case "0011": hex += "3"; break;
      case "0100": hex += "4"; break;
      case "0101": hex += "5"; break;
      case "0110": hex += "6"; break;
      case "0111": hex += "7"; break;
      case "1000": hex += "8"; break;
      case "1001": hex += "9"; break;
      case "1010": hex += "a"; break;
      case "1011": hex += "b"; break;
      case "1100": hex += "c"; break;
      case "1101": hex += "d"; break;
      case "1110": hex += "e"; break;
      case "1111": hex += "f"; break;
    }
  }
  return hex;
}

function bits_to_fmword(bits) {
  var fmword = {_:"Word.nil"};
  for (var i = 2; i < bits.length; ++i) {
    fmword = {_:bits[i]==="0"?"Word.0":"Word.1",pred:fmword};
  }
  return fmword;
}

function fmword_to_bits(fmword) {
  var bits = "";
  while (fmword._ !== "Word.nil") {
    bits = (fmword._ === "Word.0" ? "0" : "1") + bits;
    fmword = fmword.pred;
  }
  return "0b"+bits;
}

function hex_to_fmword(hex) {
  return bits_to_fmword(hex_to_bits(hex));
}

function fmword_to_hex(fmword) {
  return bits_to_hex(fmword_to_bits(fmword));
}

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
  get_file_msge,
  get_file_auth,
  sign_file,
  split_hex_in_chunks,
  get_hex_from_bytes,
  hex_to_hex64s,
  bytes_concat,
  bits_to_hex,
  hex_to_bits,
  hex_to_fmword,
  fmword_to_hex,
};
