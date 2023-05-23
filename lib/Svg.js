class SVG {
    constructor(shape){
        this.shape = shape
    }
    renderSVG(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shape.render()}
            fill="${this.shape.textColor}">${this.shape.characters}</text>
          </svg>`
    }
}

module.exports = SVG