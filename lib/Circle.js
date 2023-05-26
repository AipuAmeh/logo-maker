const Shape = require("./shapes");

class Circle extends Shape {
  constructor(characters, shapeColor, textColor) {
    super(characters, shapeColor, textColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="110" font-size="60" text-anchor="middle"`;
  }
}

module.exports = Circle;
