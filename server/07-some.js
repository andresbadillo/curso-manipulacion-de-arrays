const numbers = [1, 2, 3, 4];

let rpta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 == 0) {
        rpta = true;
        break;
    }
}

console.log('rpta:', rpta);

const rpta2 = numbers.some(item => item % 2 === 0);
console.log('rpta 2:', rpta2);

// Ejercicio

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

const rpta3 = orders.some(item => item.delivered);
console.log('rpta 3:', rpta3);

//Ejercicio 2

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
};

console.log('Is overlap:', isOverlap(newAppointment));

// Desafio clase 14

const numbers1 = [1, 3, 5, 7, 10, 11];
const numbers2 = [1, 3, 5];

const rpta4 = numbers1.some(item => item % 2 === 0);
console.log('rpta 4:', rpta4);

const rpta5 = numbers2.some(item => item % 2 === 0);
console.log('rpta 5:', rpta5);

