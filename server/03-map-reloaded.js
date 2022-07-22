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
];

console.log('original', orders);

const rpta = orders.map(item => item.total);
console.log('rpta', rpta);

// Mutable:

// const rpta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });
// console.log('rpta2', rpta2);

// Inmutable:

const rpta3 = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    };
});
console.log('rpta3', rpta3);
console.log('original', orders);

// Reto clase 7

const products = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    {
        name: "Product 3",
        price: 3000,
        stock: 30
      },
  ];

const products2 = products.map(item => {
    return {
        ...item,
        taxes: 0.19 * item.price,
    };
});

console.log('products', products);
console.log('products 2', products2);