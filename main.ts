let disiance_to_distance = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Target)
basic.pause(500)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    disiance_to_distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(disiance_to_distance)
    if (disiance_to_distance < 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    } else if (disiance_to_distance == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (disiance_to_distance == 2) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (disiance_to_distance == 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (disiance_to_distance < 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    }
})
