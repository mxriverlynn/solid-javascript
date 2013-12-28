// JavaScript has no interface construct ...
// sooooooo..... use inheritance instead? o_O


// Shape
// -----

function Shape(){}
Shape.prototype.area = function(){};

// Rectangle
// ---------

function Rectangle(){}
Rectangle.prototype = Object.create(Shape);

// override the inherited method

Rectangle.prototype.area = function(){
  return this.height * this.width;
};

// add some other methods, too

Rectangle.prototype.setHeight = function(height){
  this.height = height;
};

Rectangle.prototype.setWidth = function(width){
  this.width = width;
};

