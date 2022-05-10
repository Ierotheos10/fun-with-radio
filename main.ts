radio.onReceivedString(function (receivedString) {
    basic.showString("hi")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("-_-")
})
radio.setGroup(1)
