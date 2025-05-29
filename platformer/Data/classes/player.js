//makes a player with position, velocity, gravity, height, width, drag, and imagesrc
class player {
    constructor({position, velocity, gravity, size, drag, imagesrc, collision}) {
        this.position = position
        this.velocity = velocity
        this.gravity = gravity
        this.size = size
        this.drag = drag
        this.imagesrc = imagesrc
        this.collision = collision
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

    checkVerticalCollision() {
        for (let i = 0; i < this.collision.length; i++) {
            const collisionBlock = this.collision[i]
            if(collision({object1: this, object2: collisionBlock})) {
                if(this.velocity.y > 0) {
                this.velocity.y = 0
                this.position.y = collisionBlock.position.y - this.size.height -0.01
                break
                }
                if(this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.size.height + 0.01
                    break
                }
            }
        }
    }

    applyGravityy() {
        this.position.y += this.velocity.y
        this.velocity.y += this.gravity.y
    }

    applyGravityx() {
        this.position.x += this.velocity.x
        this.velocity.x += this.gravity.x;
    }

    checkHorizontalCollision() {
        for (let i = 0; i < this.collision.length; i++) {
            const collisionBlock = this.collision[i]
            if(collision({object1: this, object2: collisionBlock})) {
                if(this.velocity.x > 0) {
                this.velocity.x = 0
                this.position.x = collisionBlock.position.x - this.size.width -0.01
                break
                }
                if(this.velocity.x < 0) {
                    this.velocity.x = 0
                    this.position.x = collisionBlock.position.x + collisionBlock.size.width + 0.01
                    break
                }
            }
        }
    }

    update() {
        this.draw()
        this.applyGravityx()
        this.checkHorizontalCollision()
        this.applyGravityy()
        this.checkVerticalCollision()
        this.velocity.x /= this.drag
        if (keys.a.pressed) {
            this.velocity.x = -5
        }
        if (keys.d.pressed) {
            this.velocity.x = 5
        }
    }
}