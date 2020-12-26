// TODO WIP

require("isomorphic-fetch");

function save(code) {
  return fetch("http://localhost:1337/save", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({code}),
  });
};

var a = `
Bool.true : Bool = #P #true #false true;
Bool.false : Bool = #P #true #false false;
Bool : * = %Bool.Self(P:@(:Bool) *) @(true:(P Bool.true)) @(false:(P Bool.false)) (P Bool.Self);
`;

var b = `
id : @(x: *) * = #x x;
`;

var c = `
ex0 : Bool = (id Bool.true);
`;

var code = b.slice(1,-1);

(async () => {
  var result = await (await save(code)).json();
  console.log(result._);
  console.log(result.value);
})();
