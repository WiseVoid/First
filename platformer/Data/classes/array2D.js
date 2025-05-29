class Array2d {
    constructor({array1D, x}) {
        this.array1D = array1D
        this.x = x
    }
    setx(x) {
        this.x = x
    }
    findArray() {
        const floorcollisions2D = []
        for (let i = 0; i < this.array1D.length; i+=this.x) {
                floorcollisions2D.push(this.array1D.slice(i, i+this.x))
        }
        return floorcollisions2D
    }
}