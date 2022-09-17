{
    let firstProductprice=parseFloat(prompt("Введіть ціну першого товару(грн).Завдання 6"))
    let firstProductmany=parseInt(prompt("Введіть кількість першого товару(шт).Завдання 6"))
    let secondProductprice=parseFloat(prompt("Введіть ціну другого товару(грн).Завдання 6"))
    let secondProductmany=parseInt(prompt("Введіть кількість другого товару(шт).Завдання 6"))
    let thirdProductprice=parseFloat(prompt("Введіть ціну третього товару(грн).Завдання 6"))
    let thirdProductmany=parseInt(prompt("Введіть кількість третього товару(шт).Завдання 6"))
    let firstResult=firstProductprice*firstProductmany
    let secondResult=secondProductprice*secondProductmany
    let thirdResult=thirdProductprice*thirdProductmany
    let finalResult=firstResult+secondResult+thirdResult
    document.write(`<header align="center">Завдання 6</header>
<main>
    <table>
        <tr>
           <td>Перший продукт</td>
           <td>${firstResult}грн</td> 
        </tr>
        <tr>
            <td>Другий продукт</td>
            <td>${secondResult}грн</td>
        </tr>
        <tr>
            <td>Третій продукт</td>
            <td>${thirdResult}грн</td>
        </tr>
</main>
<footer>
    <tr>
        <th>Всього</th>
        <th>${finalResult}грн</th>
    </tr>
</table>
</footer>
    `);
}