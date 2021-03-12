"use strict"

function getResult(a,b,c) {
    
    
    let x = [];
    let d = Math.pow(b, 2) - (4 * a * c);

    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a), x[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d == 0) {
        x[0] = (-b / (2 * a));
    }

    return x
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;

   
    

    if (marks.length == 0) {
        return 0;
    } else if (marks.length <= 5) {
        return marks.reduce((a, b) => a + b) / marks.length;
    } else if (marks.length > 5) {
            return marks.splice(0, 5).reduce((a, b) => a + b) / marks.slice(marks.length - 5).length;
    }

    
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;

    
    
    let now = new Date();

    let age = now.getFullYear() - dateOfBirthday.getFullYear()

    if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    } else if (age < 18) {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }



    
}