function MyType(someThing){
  this.someThing = someThing;
}

MyType.prototype.doStuff = function(someValue){
  var foo = "bar";
  var baz = this.someThing.doThat(foo);
  return baz - someValue;
};

var something = new SomeThing("new parameter");
var myObj = new MyType(something);
myObj.doStuff(3.1415926);
