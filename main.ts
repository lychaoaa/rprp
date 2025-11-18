radio.setGroup(73)
radio.sendNumber(1)
basic.forever(function () {
    radio.sendString("Hello")
    basic.pause(2000)
})
