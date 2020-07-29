var lib = require("../src/back/lib.js");
var assert = require('assert');

const case0 = lib.get_post_blocks({body: `
I'm testing identity

user_name.id <A: Type> (x: A) : A
  x

is it right?
`}, "user_name");

const case0_a = lib.get_post_blocks({body: `
user_name.id <A: Type> (x: A) : A
  x
`}, "user_name");

const case0_b = lib.get_post_blocks({body: `user_name.id <A: Type> (x: A) : A
  x
`}, "user_name");

const case0_c = lib.get_post_blocks({body: `


user_name.id <A: Type> (x: A) : A
  x
`}, "user_name");

describe('case0: Single function + text', function() {
  describe('on get_post_blocks', function() {

    it('should a function starts with the username', function() {
      assert.equal(case0[1]["code"].startsWith("user_name.id"), true);
    });

    it("should a function have 'ctor === code'", function(){
      var ctor = case0[1]["ctor"];
      var exp = "code"
      assert.equal(ctor, exp, true);
    });

    it("should a single function in the post works", function(){
      var case_a = case0_a[1]["code"].startsWith("user_name.id") && case0_a[0]["ctor"] === "text";
      var case_b = case0_b[1]["code"].startsWith("user_name.id");
      var case_c = case0_c[1]["code"].startsWith("user_name.id") && case0_c[0]["ctor"] === "text";
      var eval = case_a && case_b && case_c;
      assert.equal(eval, true);
    });

  });
});

const case1 = lib.get_post_blocks({body: `
hey 

T user_name.Bool
| true;
| false;

user_name.Bits: Type
  bits<P: user_name.Bits -> Type> ->
  (be: P(user_name.Bits.nil)) ->
  (b0: (pred: Bits) -> P(user_name.Bits.0(pred))) ->
  (b1: (pred: Bits) -> P(user_name.Bits.1(pred))) ->
  P(bits)

end of codes
`}, "user_name");

const case1_a = lib.get_post_blocks({body: `
T user_name.Bool
| true;
| false;
`}, "user_name");

const case1_b = lib.get_post_blocks({body: `T user_name.Bool
| true;
| false;
`}, "user_name");

const case1_c = lib.get_post_blocks({body: `

T user_name.Bool
| true;
| false;
`}, "user_name");

describe('case1: Define a Type', function() {
  describe('on get_post_blocks', function() {

    it('should a type start with T', function() {
      var code = case1[1]["code"];
      assert.equal(code.startsWith("T user_name"), true);
    });

    it('should have two blocks of code', function() {
      var blocks_of_code = case1.filter(block => block["ctor"] === "code").length;
      assert.equal(blocks_of_code, 2);
    });

    ('should have a text at the beginning', function() {
      assert.equal(case1[1]["ctor"], "text");
    });

    ('should have a text at the end', function() {
      assert.equal(case1[case1.length-1]["ctor"], "text");
    });

    it("should only a Type in the post works", function(){
      var case_a = case1_a[1]["code"].startsWith("T user_name.Bool") && case1_a[0]["ctor"] === "text";
      var case_b = case1_b[1]["code"].startsWith("T user_name.Bool");
      var case_c = case1_c[1]["code"].startsWith("T user_name.Bool") && case1_c[0]["ctor"] === "text";
      var eval = case_a && case_b && case_c;
      assert.equal(eval, true);
    });

  });
});

const case2 = lib.get_post_blocks({body: `
// A single line comment before the code
T user_name.Bool
| true; // inline comment
| false; 

// A multiline
// comment
// about Bits
user_name.Bits: Type
  bits<P: user_name.Bits -> Type> ->
  (be: P(user_name.Bits.nil)) ->
  (b0: (pred: Bits) -> P(user_name.Bits.0(pred))) ->
  (b1: (pred: Bits) -> P(user_name.Bits.1(pred))) ->
  P(bits)

end of codes
`}, "user_name");

describe('case2: Check comments', function() {
  describe('on get_post_blocks', function() {

    it("should single line of comment be a 'text'", function() {
      var comment = case2[0]["text"].startsWith("\n// A single line comment");
      var then_code = case2[1]["code"].startsWith("T user_name.Bool");
      var eval = comment && then_code;
      assert.equal(comment, true);
    });

    it("should a multline comment be a 'text'", function() {
      var comment = case2[2]["text"].startsWith("\n\n// A multiline");
      var then_code = case2[3]["code"].startsWith("user_name.Bits: Type");
      var eval = comment && then_code;
      assert.equal(eval, true);
    });

    it("should have an inline comment as 'code'", function() {
      var text = case2[1]["code"].includes("// inline comment");
      assert.equal(text, true);
    });

  });
});
