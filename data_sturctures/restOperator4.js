//SECTION - Rest operator same as ...

//ANCHOR - 1.Destructing
//NOTE - spread, because on right side of  =
const arr = [1, 2, ...[3, 4]];
//NOTE - Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = "02:00",
    Address,
  }) {
    console.log(
      `Order Recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${Address} at ${time} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with the ingredients ${ing1},${ing2},${ing3} is ready `);
  },

  //NOTE - can also seperate the parameters
  OrderPizza: function (main, ...others) {
    console.log("main ingredient", main);
    console.log("others ingredients", others);
  },
};

//Example

//NOTE - order matters in arrays while destructing , and also skipped the second element
//NOTE - rest pattern always must be last and it has all the remaining elements without skipping any element
//REVIEW - there can be only one rest element in any destructuring assignment
const [pizza, , Risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, other);

//NOTE - objects

const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

//ANCHOR - 2.passing multiple values into a  functions all at the same time
//NOTE - rest takes multiple values amd pack them into array, opposite of spread operator

const add = function (...numbers) {
  let Sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    Sum += numbers[i];
  }
  console.log("sum:", Sum);
};

add(2, 4);
add(3, 4, 5, 6, 7);
add(1, 3, 5, 7, 9, 7, 5, 3, 4, 6);

//REVIEW - also can do this spread operator and rest operator
const X = [1, 2, 3, 5, 6, 7, 8];
add(...X);

restaurant.OrderPizza("onion", "tomato", "bread");
restaurant.OrderPizza("beans");

//REVIEW - rest is used where we write variable names separated by commas not values
//REVIEW - spread is used to write values separated by commas
