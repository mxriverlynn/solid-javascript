// Rectangle
// ---------

function Rectangle(){
  this.height = 0;
  this.width = 0;
}

Rectangle.prototype.setHeight = function(height){
  this.height = height;
};

Rectangle.prototype.setWidth = function(width){
  this.width = width;
};

Rectangle.prototype.area = function(){
  return this.height * this.width;
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
