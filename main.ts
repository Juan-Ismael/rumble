input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
