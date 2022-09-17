let min=1,max=10min + Math.floor(Math.random() * (max - min + 1))
let randomNumber=;
let userNumber1=parseInt(prompt("Введіть число від 1 до 10.Користувач 1"))
let userNumber2=parseInt(prompt("Введіть число від 1 до 10.Користувач 2"))
if (userNumber1 == randomNumber) {
    document.write(`Користувач 1 вгадав <br>`)
} else {
    document.write(`Користувач 1 не вгадав <br>`)
}
if (userNumber2 == randomNumber) {
    document.write(`Користувач 2 вгадав <br>`)
} else {
    document.write(`Користувач 2 не вгадав <br>`)
}
let scorePlayer1=Math.abs(randomNumber-userNumber1)
let scorePlayer2=Math.abs(randomNumber-userNumber2)
if (scorePlayer1 < scorePlayer2) {
    document.write(`Переміг користувач 1 <br>`)
}
if (scorePlayer1 == scorePlayer2) {
    document.write(`Нічия`)
}
if (scorePlayer1 > scorePlayer2) {
    document.write(`Переміг користувач 2 <br>`)
}
document.write(`Випадкове число-${randomNumber}`)