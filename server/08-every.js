const numbers = [1, 30, 49, 29, 10, 13];

let rpta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rpta = false;
    }
}
console.log('Rpta:', rpta);

const rpta2 = numbers.every(item => item <= 40);
console.log('Rpta 2:', rpta2);

// Reto clase 15

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
];

const rpta3 = team.every(item => item.age <= 15);
console.log('Team:', rpta3);

// Desafio clase 16

function solution() {
    return numbers.every(item => item % 2 === 0);
}