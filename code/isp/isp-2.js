// JavaScript has no interface construct ...
// sooooooo..... use inheritance instead? o_O

// Rectangle
// ---------

function Rectangle(){}

Rectangle.prototype.area = function(){
  return this.height * this.width;
};

Rectangle.prototype.setHeight = function(height){
  this.height = height;
};

Rectangle.prototype.setWidth = function(width){
  this.width = width;
};

// Square
// ------

function Square(){}

Square.prototype.area = function(){
  return this.size * this.size;
};

Square.prototype.setSize = function(size){
  this.height = size;
  this.width = size;
};
