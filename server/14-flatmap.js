const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rpta = users.map(user => user.attributes).flat();
console.log('map-flat:', rpta);

const rpta2 = users.flatMap(user => user.attributes);
console.log('flatMap:', rpta2);

// Reto:

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 3",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const rpta3 = Object.values(calendars).flatMap(item => {
    //console.log('item:', item);
    return item.map(date => date.startDate.toString());
});
console.log(rpta3);

// Desafio clase 25

const words = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

const rpta4 = words
.flatMap(item => item.split(' '))
.reduce(sum => sum + 1, 0);
console.log(rpta4);