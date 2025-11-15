//SECTION - spread operator (making new array and passing multiple vlaues to function) and objects also
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
};

//NOTE - make a new array / expand the array
const arr = [6, 7, 8];
const badnewarr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log("badarr", badnewarr);

const newArr = [1, 2, 3, ...arr];
console.log("newArray:", newArr);

//log individual elememts in array
console.log(...newArr);

//NOTE - smiliar to destructing but spread operator takes all elemnets in array  but doesnot create new variables
const newMenu = [...restaurant.mainMenu, "BalajiFood"];
console.log("newMenu:", newMenu);

//NOTE - creates a shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//NOTE - join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("menu:", menu);

/**iterables are arrays,maps,sets and striings**/
//building an array or passing values to function
//NOTE - strings also
const str = "Balaji";
const letters = [...str, "", "G"];
console.log(letters);
// individual Elements
console.log(...letters);

//error can only done while passing values to function
// console.log(`${...str} balaji`)

//NOTE - passing values to functiond using spread operatoe
const ingredients = [
  //   prompt("Let's make pasta! ingredients 1:"),
  //   prompt("ingrdients2:"),
  //   prompt("ingredients3:"),
  "dosa",
  "cheese",
  "bread",
];

console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //better way

//NOTE - Es 2018 spread operator also work on objects
//REVIEW - for objects also
const newRest = { foundedIn: 2025, ...restaurant, founder: "Balaji" };
console.log(newRest);

//shallow copy
const restcpoy = { ...restaurant };
restcpoy.name = "Vivek";
console.log(restcpoy.name);
console.log(restaurant.name);
