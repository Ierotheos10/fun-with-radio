input.onButtonPressed(Button.A, function () {
    radio.sendString("-_-")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("hi")
})
radio.setGroup(1)
