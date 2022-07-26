const items = [1, 3, 2, 3, 5, 1, 3];

const rpta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rpta);

// Ejemplo

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
];

const rpta2 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
    
console.log(rpta2);

// Taller

const numbers = [1, 2, 4, 3, 1, 1, 8, 9, 10, 4, 6, 7, 10, 9, 3, 5, 4, 6];
const result = numbers.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5'] ++
  } else if (item <= 8) {
    obj['6-8'] ++
  } else {
    obj['9-10'] ++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
});

console.log(result);