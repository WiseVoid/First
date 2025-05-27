const one = new player({position: {x: 0, y: 0,}, velocity: {x: 0, y: 0,}, gravity: {y: .5, x: 0}, size: {height: 128, width: 64}, drag: 1.1, imagesrc: "pictures/char1.png"});
const background = new Sprites({
    position: {
        x: 0,
        y: 0,
    },
    imagesrc: "pictures/tempback.png"
})

const floor = new Array2d({x: 32, array1D: maps[0]})
const floorcollisions2D = floor.findArray()
const collisionblocks = []
floorcollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol == 1) {
            collisionblocks.push(new collisionblock({
                position: {
                    x: x * 90,
                    y: y * 90,
                },
                size: {
                    height: 90,
                    width: 90,
                }
            }))
        }
    })
})
console.log(collisionblocks)

function animate() {
    window.requestAnimationFrame(animate)
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.save()
    canvasContext.scale(scale, scale)
    canvasContext.translate(0, (canvas.height/scale) - background.image.height)
    background.draw()
    collisionblocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })
    canvasContext.restore()

    one.update()
}



animate()