function myFunction() {
  let rowRandom = 1 + Math.floor(Math.random() * (2 - 1 + 1));
  let spanRandom = 1 + Math.floor(Math.random() * (2 - 1 + 1));
  if (rowRandom == 1) {
    spanRandom = 2;
  }
  let userTraprow = parseInt(prompt("Введіть номер стовпця(від 1 до 2)"));
  let userTraspan = parseInt(prompt("Введіть номер рядка(від 1 до 2)"));
  if (rowRandom === userTraprow && spanRandom === userTraspan) {
    document.write(`<h1>Ви отримали 100 балів</h1>`);
  } else {
    let userTraprow2 = parseInt(prompt("Введіть номер стовпця(від 1 до 2)"));
    let userTraspan2 = parseInt(prompt("Введіть номер рядка(від 1 до 2)"));
    if (rowRandom === userTraprow2 && spanRandom === userTraspan2) {
      document.write(`<h1>Ви отримали 50 балів</h1>`);
    } else {
      document.write(`<h1>Ви програли</h1>`);
    }
  }
  if (rowRandom == 1 && spanRandom == 2) {
    document.getElementById("colend").innerHTML =
      document.getElementById(`colstart`).innerHTML;
    document.getElementById(`colstart`).innerHTML = "";
  } else {
    if (rowRandom == 2 && spanRandom == 1) {
      document.getElementById("rowenemy").innerHTML =
        document.getElementById(`colstart`).innerHTML;
      document.getElementById(`colstart`).innerHTML = "";
    } else {
      rowRandom == 2 && spanRandom == 2;
      document.getElementById("rowfriend").innerHTML =
        document.getElementById(`colstart`).innerHTML;
      document.getElementById(`colstart`).innerHTML = "";
    }
  }
}
