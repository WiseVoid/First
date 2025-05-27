class collisionblock {
    constructor({position, size}) {
        this.position = position
        this.size = size
    }

    draw() {
        canvasContext.fillStyle = 'rgb(255, 0, 0)'
        canvasContext.fillRect(this.position.x, this.position.y, this.size.width , this.size.height)
    }
}