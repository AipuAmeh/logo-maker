class mainShapes {
    constructor(characters) {
     this.characters = characters;
     this.shapeColor = "";
     this.textColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    textColor(textColor) {
        this.textColor = textColor;
    }
    render() {
        throw new Error("You need a render class!")
    }
}

module.exports = mainShapes;