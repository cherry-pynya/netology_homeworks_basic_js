"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;

    if (isNaN(percent)) {
        return `Параметр Процентная ставка содержит неправильное значение ${percent}`
    } else if (isNaN(contribution)) {
        return `Параметр Начальный взнос содержит неправильное значение ${contribution}`
    } else if (isNaN(amount)) {
        return `Параметр Общая стоимость содержит неправильное значение ${amount}`
    }

    let P = (percent.toFixed(1) / 100) / 12;
    const now = new Date();
    let n = date.getMonth() - now.getMonth() + (12 * (date.getFullYear() - now.getFullYear()));
    let body = amount.toFixed(2) - contribution.toFixed(2);
    let montlyPayment = (body*(P + P / (Math.pow((1 + P), n) - 1)));
    let totalAmount= (montlyPayment * n).toFixed(2);

    
    if (n <= 0) {
        return `Минимальный срок кредита один месяц`
    }


    return parseFloat(totalAmount)

}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;

    let greeting;

    if (!name || 0 === name.length) {
        greeting = `Аноним`
    } else {
        greeting = name
    };
        



    return `Привет, мир! Меня зовут ${greeting}.`

}