function MyType(doer){
  this.doer = doer;
}

MyType.prototype.doStuff = function(someValue){
  var foo = "bar";
  var baz = this.doer.doThat(foo);
  return baz - someValue;
};

var something = new SomeThing("new parameter");
var myObj = new MyType(something);
myObj.doStuff();
