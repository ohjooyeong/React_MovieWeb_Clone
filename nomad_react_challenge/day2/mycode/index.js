class ArrayUtilities {
    static addZeros = (arr) => arr.map((x) => x * 10);
    static moreThanFifty = (arr) => arr.filter((x) => x > 50);
    static removeFirst = (arr) => arr.filter((x, y) => y > 0);
    static sumAll = (arr) => {
        let a = 0;
        arr.forEach((x) => {
            a = a + x;
        });
        return a;
    };
    static divide = (num) => String(num).split("");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
