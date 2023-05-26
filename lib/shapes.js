class Shape {
    constructor(characters,shapeColor,textColor) {
     this.characters = characters;
     this.shapeColor = shapeColor;
     this.textColor = textColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    render() {
        throw new Error("You need a render class!")
    }
}



module.exports = Shape;