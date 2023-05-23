class Shape {
    constructor(characters,shapeColor,textColor) {
     this.characters = characters;
     this.shapeColor = shapeColor;
     this.textColor = textColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
        shapeColor = "";
    }
    setTextColor(textColor) {
        this.textColor = textColor;
        this.shapeColor = "";
    }
    render() {
        throw new Error("You need a render class!")
    }
}



module.exports = Shape;