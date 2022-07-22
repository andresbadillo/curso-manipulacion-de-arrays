const letters = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
};

const newArray2 = letters.map(item => item + '+++');

console.log('original', letters);
console.log('new', newArray);
console.log('map', newArray2);

// Ejercicio clse 5

const solution = [2, 4, 5, 6];
const array = solution.map(item => item * 2);
console.log(array);