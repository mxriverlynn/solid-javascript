function MyType(someThing){
  this.someThing = someThing;
}

MyType.prototype.doStuff = function(someValue){
  var foo = "bar";
  var baz = this.someThing.doThat(foo);
  return baz - someValue;
};

var something = new SomeThing();
var myObj = new MyType(something);
myObj.doStuff();
