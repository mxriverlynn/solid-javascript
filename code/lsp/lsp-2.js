// Square
// ------

var Square = function(){};
Square.prototype = Object.create(Rectangle);

Square.prototype.setHeight = function(height){
  this.setSize(height);
};

Square.prototype.setWidth = function(width){
  this.setSize(width);
};

Square.prototype.setSize = function(size){
  this.height = size;
  this.width = size;
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

var square = new Square();
testIt(square);
