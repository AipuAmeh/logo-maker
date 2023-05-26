const Square = require('../lib/square');

test("The Square render() method should return the correct SVG file and shape color", () => {

    
    const expected = `<rect width="200" height="200" fill="white" />
    <text x="100" y="110" font-size="60" text-anchor="middle"`;
   
    const shapeColor = "white";
   
    const shape = new Square("ABA",shapeColor,"blue");
    console.log(expected);
    console.log(shape.render());
    expect(shape.render()).toEqual(expected);
  })