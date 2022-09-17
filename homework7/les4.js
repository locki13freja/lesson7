let min=1
let max=parseInt(prompt("Введіть кількість квадратів"))
let result=parseInt(prompt("Введіть клітинку де буде знаходитися корабль"))
let result1=result+1;
let result2=result-1;
let result3 = result2 + Math.floor(Math.random() * (result1 - result2 + 1));
let result4=0 + Math.floor(Math.random() * (1 - 0 + 1));;
let computerShot=min + Math.floor(Math.random() * (max - min + 1));;
switch (computerShot) {
    case  result:
        alert(`Корабль уничтожен`)
        break
        case result1:alert(`Корабель повреждён`)
        break
        case result2:alert(`Корабль повреждён`)
        break
        default:alert(`Корабль цел `)
        break
    }
    if (computerShot != result) {
        shift=parseInt(prompt("Корабль зміщується на(вказати кількість клітинок"))
result=computerShot +- max 
    }
    let computerShot2 = min + Math.floor(Math.random() * (max - min + 1));
switch (computerShot2) {
    case  result:
        alert(`Корабль уничтожен`)
        break
case result1:alert(`Корабель повреждён`)
break
        case result2:alert(`Корабль повреждён`)
        break
        default:alert(`Корабль цел`)
        break
}
if (result == 0) {
    result=result2
}
if (result < 0) {
    result=result2
}
if (result > max) {
    result=result1
}
