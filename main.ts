basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    basic.pause(500)
})
