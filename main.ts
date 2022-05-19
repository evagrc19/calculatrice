let nombre_1 = 0
let nombre_2 = 0
let resultat = 0
input.onButtonPressed(Button.A, function () {
    nombre_1 += 1
    basic.showNumber(nombre_1)
})
input.onButtonPressed(Button.AB, function () {
    nombre_1 = 0
    nombre_2 = 0
    basic.showString("+")
})
input.onButtonPressed(Button.B, function () {
    nombre_2 += 1
    basic.showNumber(nombre_2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    resultat = nombre_2 + nombre_1
    basic.showNumber(resultat)
})
basic.forever(function () {
	
})
