class collisionblock {
    constructor({position, size, type}) {
        this.position = position
        this.size = size
        this.type = type
    }

    draw() {
        canvasContext.fillStyle = 'rgb(255, 0, 0)'
        canvasContext.fillRect(this.position.x, this.position.y, this.size.width , this.size.height)
    }
}