const numbers = [1, 30, 49, 29, 10, 13];

let rpta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 31) {
        rpta = element;
        break;
    }
}
console.log('Rpta:', rpta);

const rpta2 = numbers.find(item => item === 31);
console.log('Rpta 2:', rpta2);

// Ejemplo

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rpta3 = products.find(item => item.id === '🥞');
console.log('Rpta 3:', rpta3);

const rpta4 = products.findIndex(item => item.id === '🥞');
console.log('Rpta 4:', rpta4);