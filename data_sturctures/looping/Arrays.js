//SECTION - for of loop

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
  //NOTE - can used as function parameters and destructer it in any order ,default values

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
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const items of menu) console.log(items);
//NOTE - can still use continue and break keyword;
//NOTE - want index also --use entries()
// console.log([...menu.entries()]);

// for (const items of menu.entries()) {
//   console.log(items);
//   console.log(`${items[0] + 1}: ${items[1]}`);  avois this using destructing
// }

for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1}:${ele}`);
}
