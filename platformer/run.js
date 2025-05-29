const background = new Sprites({
    position: {
        x: 0,
        y: 0,
    },
    imagesrc: "pictures/tempback.png"
})

const floor = new Array2d({x: 32, array1D: maps[0]})
const floorcollisions2D = floor.findArray()
const allcollision = new groupcollision({blockSize: {
    height: 90,
    width: 90,
}, floorcollisions2D: floorcollisions2D, type: 1})
allcollision.createcollisionblock()
const allplat = new groupcollision({blockSize: {
    height: 90,
    width: 90,
}, floorcollisions2D: floorcollisions2D, type: 2})
allplat.createcollisionblock()
const alltele = new groupcollision({blockSize: {
    height: 90,
    width: 90,
}, floorcollisions2D: floorcollisions2D, type: 3})
alltele.createcollisionblock()

const one = new player({position: {x: 200, y: 0,}, velocity: {x: 0, y: 0,}, gravity: {y: .5, x: 0}, size: {height: 128, width: 64}, drag: 1.1, imagesrc: "pictures/char1.png", collision: allcollision.createcollisionblock()});

function animate() {
    window.requestAnimationFrame(animate)
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.save()
    canvasContext.scale(scale, scale)
    canvasContext.translate(0, (canvas.height/scale) - background.image.height)
    background.draw()
    allcollision.update()
    allplat.update()
    alltele.update()
    one.update()
    canvasContext.restore()
}



animate()