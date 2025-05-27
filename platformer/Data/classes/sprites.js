//this class constructs and draws sprites from the position and imagesrc or image source
class Sprites {
    constructor({position, imagesrc}) {
        this.position = position
        this.image = new Image()
        this.image.src = imagesrc
    }
    
    draw() {
        if (!this.image) {
            return
        } 
        canvasContext.drawImage(this.image, this.position.x, this.position.y)
    }
}