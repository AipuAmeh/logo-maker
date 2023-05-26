const Triangle = require("../lib/triangle");

test("The Triangle render() method should return the correct SVG file and shape color", () => {

    
    const expected = `<polygon points="150,30 300,200 5,220" cx="150" cy="100" r="80" fill="white"/>
    <text x="150" y="150" font-size="60" 
    text-anchor="middle"`
   
    
    const shapeColor = "white";
    const shape = new Triangle("ABA",shapeColor,"blue");
    expect(shape.render()).toEqual(expected);
  })