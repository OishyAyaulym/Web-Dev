//4.1
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
//4.2
let use = { name: 'John' };
let admin = use;
admin.name = 'Pete'; // changed by the "admin" reference
alert(use.name); // 'Pete', changes are seen from the "user" reference
//4.3
// user has a reference to the object
let us = {
  name: "John"
};
let admin = us;
//4.4
let users = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }
};
users.sayHi(); // John
//4.5
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user_ = new User("Jack");
alert(user_.name); // Jack
alert(user_.isAdmin); // false
//4.6
let user__ = {};
alert(user__.address ? user__.address.street : undefined);
//4.7
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
//4.8
// output
alert(obj);
// using object as a property key
anotherObj[obj] = 123;