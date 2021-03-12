function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;

    if (D < 0) {
        return {D: D, roots: []}
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return {D: D, roots: [x1]}
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D, 2)) / (2 * a);
        x2 = (-b - Math.sqrt(D, 2)) / (2 * a);
        return {D: D, roots: [x1, x2]}
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
  
    if (result.D == 0) {
        return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} \nЗначение дискриминанта: ${result.D} \nУравнение не имеет вещественных корней`;
    } else if (result.roots.length == 1) {
        return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} \nЗначение дискриминанта: ${result.D} \nУравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else if (result.roots.length == 2) {
        return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} \nЗначение дискриминанта: ${result.D} \nУравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
}


function getAverageScore(data) {
	let result = {};

	for (let subject in data) {
		result[subject] = getAverageMark(data[subject]);
	}

	if (result == {}) {
        result.average = 0;
    } else {
        result.average = getAverageMark(result);
    }

	return result;
}
function getAverageMark(marks) {
		let total = 0;
		let i = 0;

		for (let mark in marks) {
			total = total + Number(marks[mark]);
			i++;
		}

		if (i == 0) {
            return 0;
        } else {
            return total/i;
        }
    }
    

