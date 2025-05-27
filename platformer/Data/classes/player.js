//makes a player with position, velocity, gravity, height, width, drag, and imagesrc
class player {
    constructor({position, velocity, gravity, size, drag, imagesrc}) {
        this.position = position
        this.velocity = velocity
        this.gravity = gravity
        this.size = size
        this.drag = drag
        this.imagesrc = imagesrc
    }

    draw() {
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        const char = new Sprites({position: {x: this.position.x, y: this.position.y}, imagesrc: this.imagesrc,})
        char.draw()
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
        if (this.position.y + this.size.height + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity.y
        } else {
            this.velocity.y = 0
        }
        this.velocity.x += this.gravity.x;
        if (keys.a.pressed) {
            this.velocity.x = -5
        }
        if (keys.d.pressed) {
            this.velocity.x = 5
        }
    }
}