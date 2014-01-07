// Shape
// -----

function Shape(){}
Shape.prototype.area = function(){};

// Rectangle
// ---------

function Rectangle(){}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.setHeight = function(height){
  this.height = height;
};

Rectangle.prototype.setWidth = function(width){
  this.width = width;
};

Rectangle.prototype.area = function(){
  return this.height * this.width;
};

// Square
// ------

function Square(){}
Square.prototype = Object.create(Shape.prototype);

Square.prototype.setSize = function(size){
  this.height = size;
  this.width = size;
};

// Test
// ----

describe("area of a rectangle", function(){
  var rectangle = new Rectangle();
  rectangle.setHeight(4);
  rectangle.setWidth(5);

  it("should be length, squared", function(){
    expect(rectangle.area()).toBe(20);
  });
});

describe("area of a square", function(){
  var square = new Square();
  square.setSize(5);

  it("should be size, squared", function(){
    expect(square.area()).toBe(25);
  });
});
