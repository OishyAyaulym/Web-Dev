//3.1
function hello(name) {
  let phrase = `Hello, ${name}!`;
  debugger;  // <-- the debugger stops here
  say(phrase);
}
//3.2
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
   //... <- no extra nesting level
}
//3.3
// This code will do this thing (...) and that thing (...)
// ...and who knows what else...
very;
complex;
code;
//3.4
// taken from a well-known javascript library
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
//3.5
describe("pow", function() {
  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });
});
//3.6
// before running the transpiler
height = height ?? 100;
// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;