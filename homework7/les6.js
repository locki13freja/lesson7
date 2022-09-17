{
  let rowRandom = 1 + Math.floor(Math.random() * (2 - 1 + 1));
  let spanRandom = 1 + Math.floor(Math.random() * (2 - 1 + 1));
  let userTraprow = parseInt(prompt("Введіть номер стовпця(від 1 до 2)"));
  let userTraspan = parseInt(prompt("Введіть номер рядка(від 1 до 2)"));
  if (rowRandom === userTraprow && spanRandom === userTraspan) {
    document.write(`<h1>Ви отримали 100 балів</h1>`);
  } else {
    let rowRandom = 1 + Math.floor(Math.random() * (2 - 1 + 1));
    let spanRandom = 1 + Math.floor(Math.random() * (2 - 1 + 1));
    let userTraprow2 = parseInt(prompt("Введіть номер стовпця(від 1 до 2)"));
    let userTrapspan2 = parseInt(prompt("Введіть номер рядка(від 1 до 2)"));
    if (rowRandom == userTraprow2 && spanRandom == userTrapspan2) {
      document.write(`<h1>Ви отримали 50 балів</h1>`);
    } else {
      document.write(`<h1>Ви програли</h1>`);
    }
  }
}
