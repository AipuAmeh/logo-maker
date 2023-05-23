const Shape = require("./shapes");

class Triangle extends Shape {
  constructor(characters, shapeColor, textColor) {
    super(characters, shapeColor, textColor);
  }
  render() {
    return `
            <polygon points="150,30 300,200 5,220" cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="150" font-size="60" text-anchor="middle" `;
  }
}
module.exports = Triangle;
