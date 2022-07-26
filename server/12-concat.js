const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log('for:', newArray);

const rpta = elements.concat(otherElements);
const rpta2 = [...elements, ... otherElements];
const rpta3 = [...elements, 'ramdom'];
console.log('concat:', rpta);
console.log('spread:', rpta2);
console.log('rpta3:', rpta3);

elements.push(...otherElements); // Si quiero modificar el elemento inicial
console.log('elements:', elements);