const words = ['spray', 'limit', 'elite', 'exuberant'];

// Con metodo for
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('Words:', words);
console.log('New Array:', newArray);

// Con metodo filter
const rpta = words.filter(item => item.length >= 6)
console.log('Words:', words);
console.log('Rpta:', rpta);

// Ejemplo

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolasito",
        total: 90,
        delivered: false,
      },
];

const orderDelivered = orders.filter(item => item.delivered);
console.log('Orders:', orders);
console.log('Ordes Delivered:', orderDelivered);

const orderNotDelivered = orders.filter(item => !item.delivered);
console.log('Orders Not Delivered:', orderNotDelivered);

const orderDelivered2 = orders.filter(item => item.delivered && item.total >= 100);
console.log('Ordes Delivered 2:', orderDelivered2);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('Ni'));
console.log(search('Va'));