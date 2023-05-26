const { text } = require("stream/consumers");
const Shape = require("./shapes");

class Square extends Shape {
  constructor(characters, shapeColor, textColor) {
    super(characters, shapeColor, textColor);
  }
  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}" />
    <text x="100" y="110" font-size="60" text-anchor="middle"`;
  }
}

module.exports = Square;
