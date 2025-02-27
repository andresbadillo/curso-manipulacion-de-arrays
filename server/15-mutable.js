const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products:", products);
console.log("myProducts:", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
};

console.log("products:", products);
console.log("myProducts:", myProducts);
console.log("-".repeat(10));

// 

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'Delicious'
    }
};

const productIndex2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndex2] = {
    ...productsV2[productIndex2],
    ...update.changes,
}
console.log(productsV2);