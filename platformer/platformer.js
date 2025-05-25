const canvas = document.querySelector('Canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

const gravity = 1
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

class player {
    constructor(position, velocity, gravityy, gravityx, height, width, drag) {
        this.position = position
        this.velocity = velocity
        this.gravityy = gravityy
        this.gravityx = gravityx
        this.height = height
        this.width = width
        this.drag = drag
    }

    draw() {
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    gety() {
        return this.position.y
    }

    getx() {
        return this.position.y
    }

    sety(y) {
        this.position.y = y
    }

    setx(x) {
        this.position.x = x
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.velocity.x /= this.drag
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravityy
        } else {
            this.velocity.y = 0
        }
        this.velocity.x += this.gravityx;
        if (keys.a.pressed) {
            this.velocity.x = -5
        }
        if (keys.d.pressed) {
            this.velocity.x = 5
        }
    }
}

const one = new player({x: 0, y: 0,}, {x: 0, y: 0,}, .5, 0, 100, 50, 1.1);

function animate() {
    window.requestAnimationFrame(animate)
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    one.update()
}

animate()

window.addEventListener('keydown', () => {
    switch (event.key) {
        case 'w':
            one.velocity.y = -20
        break
        case 'a':
            keys.a.pressed = true
        break
        case 'd':
            keys.d.pressed = true
        break
    }
})

window.addEventListener('keyup', () => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
        break
        case 'd':
            keys.d.pressed = false
        break
    }
})