const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rpta = totals.reduce((sum, element) => sum + element, 0);
console.log('Rpta:', rpta);

// Reto clase 11

const nums1 = [1, 1, 1];
const nums2 = [2, 4, 8];

const sum1 = nums1.reduce((sum, element) => sum + element, 0);
console.log('Sum 1:', sum1);

const sum2 = nums2.reduce((sum, element) => sum + element, 0);
console.log('Sum 2:', sum2);