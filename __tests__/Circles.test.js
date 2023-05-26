const Circle = require("../lib/Circle");

test("The Circle render() method should return the correct SVG file and shape color", () => {

    
    const expected = `<circle cx="150" cy="100" r="80" fill="white" />
    <text x="150" y="110" font-size="60" text-anchor="middle"`
   
    
    const shapeColor = "white";
    const shape = new Circle("ABA",shapeColor,"blue");
    expect(shape.render()).toEqual(expected);
  })