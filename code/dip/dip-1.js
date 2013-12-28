function MyType(){
  this.someThing = new SomeThing();
}

MyType.prototype.doStuff = function(someValue){
  var foo = "bar";
  var baz = this.someThing.doThat(foo);
  return baz - someValue;
};

var myObj = new MyType();
myObj.doStuff();
