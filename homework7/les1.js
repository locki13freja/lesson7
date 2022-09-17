document.write(` <ol>
     <li>Веселий</li>
     <li>Сумний</li>
     <li>Обурений</li>
     `);
let a = parseInt(prompt("Введіть число"));
switch (a) {
  case 1:
    document.write(
      `<img src="https://www.iphones.ru/wp-content/uploads/2017/02/AA-1.png" alt="Веселий">`
    );
    break;
  case 2:
    document.write(
      `<img src="https://www.iphones.ru/wp-content/uploads/2017/02/AA-38.png" alt="Сумний">`
    );
    break;
  case 3:
    document.write(
      `<img src="https://www.iphones.ru/wp-content/uploads/2017/02/AA-44.png" alt="Обурений">`
    );
}
