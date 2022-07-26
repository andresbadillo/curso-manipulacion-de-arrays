const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [3, 4]]],
    [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for:', newArray);

const rpta = matriz.flat(3); // Hay que decirle hasta que nivel bajar
console.log('flat:', rpta);

const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
console.log(flatten(matriz));