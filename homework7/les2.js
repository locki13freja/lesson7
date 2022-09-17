let z=parseInt(prompt("Введіть число від 1 до 100"))
let min=1,max=100;
let start= min + Math.floor(Math.random() * (max - min + 1));
let end= min + Math.floor(Math.random() * (max - min + 1));
let temp  
if (start>end) {
    temp=start;
    start=end;
end=temp
}
if (z == (start-10) && z == (end+10)) 
    document.write(`Ви виграли. <br>`)
 else [
    document.write(`Ви програли. <br>`)
]
document.write(`Початок-${start} <br> Кінець-${end}`)
