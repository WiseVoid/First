class groupcollision {
    constructor({blockSize, floorcollisions2D, type}) {
        this.size = blockSize
        this.floorcollisions2D = floorcollisions2D
        this.type = type
    }
    createcollisionblock() {
        this.collisionblocks = []
        this.floorcollisions2D.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol == 1) {
                    this.collisionblocks.push(new collisionblock({
                        position: {
                            x: x * this.size.height,
                            y: y * this.size.width,
                        },
                        size: {
                            height: this.size.height,
                            width: this.size.width,
                        },
                        type: this.type
                  }))
             }
           })
        })
    }
    update() {
        this.collisionblocks.forEach((collisionBlock) => {
            collisionBlock.draw()
        })
    }
}