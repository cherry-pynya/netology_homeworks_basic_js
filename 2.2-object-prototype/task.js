//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
    
    let string = this.toLowerCase().replace(/\s/g, '');
  
 
   
    return string === string.split('').reverse().join('')

}



function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark

    

    if (marks.length >= 1) {
        return Math.round((marks.reduce((a, b) => a + b)) / marks.length)
    } else if (marks.length == 0) {
        return 0
    }

}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict

    let now = Number(new Date());
    let bD = Number(new Date(birthday));
    let dif = now - bD;
    let age = dif / 31536000000;
    

    if (age >= 18) {
        return true
    } else if (age < 18) {
        return false
    };

}