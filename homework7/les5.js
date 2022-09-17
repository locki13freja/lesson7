function myFunction() {
  let min = 1,
    max = 4;
  let randomNumber = parseInt(prompt("Введіть число"));
  switch (randomNumber) {
    case 1:
      //   document.getElementById("colend").innerHTML =
      //     document.getElementById(`colstart`).innerHTML;
      break;
    case 2:
      document.getElementById("colend").innerHTML =
        document.getElementById(`colstart`).innerHTML;
      document.getElementById(`colstart`).innerHTML = "";
      break;
    case 3:
      document.getElementById("rowenemy").innerHTML =
        document.getElementById(`colstart`).innerHTML;
      document.getElementById(`colstart`).innerHTML = "";

      break;
    case 4:
      document.getElementById("rowfriend").innerHTML =
        document.getElementById(`colstart`).innerHTML;
      document.getElementById(`colstart`).innerHTML = "";

      break;
  }
}
