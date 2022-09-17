let letters = ["A","B","C","D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
    let shift= 3;
    let userString=prompt("Введіть велику букву англійського алфавіту");    
let character=userString;
let letterIndex=letters.indexOf(character);
let newIndex=(letterIndex+shift) % 26;
let newCharacter=letters[newIndex];
document.write(`Результат-${newCharacter}`)