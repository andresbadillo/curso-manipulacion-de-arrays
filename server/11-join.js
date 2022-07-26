const elements = ['Fire', 'Air', 'Water'];

let rpta = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rpta = rpta + element + separator;
}
console.log('Rpta:', rpta);

const rpta2 = elements.join('--');
console.log('Rpta2:', rpta2);

// ejemplo

const title = 'Curso de manipulación de arrays';
const url = 'www.platzi.com/' + title.split(' ').join('-').toLowerCase();
console.log(url);

// Desafio clase 21

const a = "La forma de correr Python";
const b = "La API para nunca parar de aprender";
const c = "Curso de arrays";

function solution(title) {
    return title.split(' ').join('-').toLowerCase();
}; 