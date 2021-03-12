class PrintEditionItem { 
    constructor (name, releaseDate, pagesCount, state = 100, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;  
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0 
        } else if (newState > 100) {
            this._state = 100
        } else {
            this._state = newState
        }
    }

    get state() {
      return this._state
    }
     
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}


//задание 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = []; 
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] == value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        const getBook = this.findBookBy(`name`, bookName) 

        if (getBook) {
            this.books.splice(this.books.indexOf(getBook), 1)
            return getBook
        } else {
            return null
        }
    }
        

}

//задание 3

class StudentLog {
    constructor(name) {
        this.name = name
        this.subjects = {}
    }

    getName() {
        return this.name
    }

    addGrade(grade, subject) {
        if (! (subject in this.subjects)) {
            this.subjects[subject] = []
        }

        const gradeInt = Number.parseInt(grade);
        if (!isNaN(gradeInt) && gradeInt > 0 && gradeInt < 6) {
            this.subjects[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }

        return this.subjects[subject].length;

    }

    getAverageBySubject(subject) {
        if (!(subject in this.subjects) || !this.subjects[subject].length) {
            return null
        }
        return this.subjects[subject].reduce((a, b) => a + b) / this.subjects[subject].length
    
    }

    getTotalAverage() {
        let counter = 0;
        let sum = 0;

        for (let subItem in this.subjects) {
            for (let grades of this.subjects[subItem]) {
                sum += grades;
                counter++;
            }
        }

        if (counter == 0) {
            return 0;
        } else {
            return sum / counter;
        }
    }
}

