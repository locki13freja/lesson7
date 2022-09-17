let min = 1,
  max = 6;
let randomNumber1 = min + Math.floor(Math.random() * (max - min + 1));
let randomNumber3 = min + Math.floor(Math.random() * (max - min + 1));
let result1;
let result2;
alert("Грає перший гравець");
let userAnswer1 = parseInt(
  prompt(
    `Ваш результат-${randomNumber1}.Бажаєте зробити другий кидок?\n 1-так \n 2-ні `
  )
);
if (userAnswer1 == 1) {
  let randomNumber2 = min + Math.floor(Math.random() * (max - min + 1));
  if (randomNumber2 % 2 === 0) {
    result1 = randomNumber1 + randomNumber2;
  } else {
    result1 = randomNumber1 - randomNumber2;
  }
}
alert("Грає другий гравець");
let userAnswer2 = parseInt(
  prompt(
    `Ваш результат=${randomNumber3}.Бажаєте зробити другий кидок?\n 1-так \n 2-ні`
  )
);
if (userAnswer1 == 1) {
  let randomNumber4 = min + Math.floor(Math.random() * (max - min + 1));
  if (randomNumber3 % 2 === 0) {
    result2 = randomNumber3 + randomNumber4;
  } else {
    result2 = randomNumber3 - randomNumber4;
  }
  if (result1 > result2) {
    document.write(
      `Виграв гравець 1 <br> (Кількість балів 1 гравця=${result1} <br> Кількість балів 2 гравця=${result2})`
    );
  } else if (result1 < result2) {
    document.write(
      `Виграв гравець 2 <br> (Кількість балів 1 гравця=${result1} <br> Кількість балів 2 гравця=${result2})`
    );
  } else {
    document.write(
      `Нічия <br> (Кількість балів 1 гравця=${result1} <br> Кількість балів 2 гравця=${result2})`
    );
  }
}
