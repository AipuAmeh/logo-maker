const Shape = require("../lib/shapes")

test('The Shape class setTextColor changes the property textColor', () => {
    const newShape = new Shape()
    newShape.setTextColor("blue")
    expect(newShape.textColor).toBe("blue");
  });


  test('The Shape class returns an error when you call render', () => {
    const newShape = new Shape()
    function renderShape() {
        newShape.render();
      }
    
    expect(renderShape).toThrow(new Error('You need a render class!'));
  });