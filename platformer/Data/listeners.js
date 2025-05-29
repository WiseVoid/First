const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

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