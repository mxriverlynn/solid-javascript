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

function testIt(rect){
  describe("area of a rectangle", function(){
    rect.setHeight(4);
    rect.setWidth(5);

    it("should be length, squared", function(){
      expect(rect.area()).toBe(20);
    });
  });
}

var rectangle = new Rectangle();
testIt(rectangle);
