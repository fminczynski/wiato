input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        spinningAnimation()
    } else {
        basic.clearScreen()
    }
})

function spinningAnimation() {
    const frames = [
        `
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `,
        `
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `,
        `
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `,
        `
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `,
        `
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `,
        `
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `
    ]
    
    for (let i = 0; i < frames.length; i++) {
        basic.showLeds(frames[i])
        basic.pause(100)
    }
}

let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 104)
