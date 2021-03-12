function parseCount(number) {
   if (isNaN(number)) {
    throw new Error(`Невалидное значение`);
   }
    return Number.parseInt(number)
}

function validateCount(number) {
    try {
        return parseCount(number)
    } catch(e) {
        return e;
    }
}



class Triangle {
    constructor(a, b, c) {
        if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
            throw new Error(`Треугольник с такими сторонами не существует`);
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {

        return this.a + this.b + this.c

    }

    getArea() {

        const P = this.getPerimeter() * 0.5;

        return parseFloat((Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c))).toFixed(3))

    }
}

function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c)
    } catch(e) {
        return{
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует",
        }
    }
    
    
    
}