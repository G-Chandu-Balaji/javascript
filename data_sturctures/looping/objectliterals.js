//SECTION 3 ways to write object literals ES6 features

//NOTE - 3. can compute property names (dynamically change/assign property name)

const weekDays = ["mon", "tue", "wed", "thru", "fri", "sat"];

const openingHours = {
  [weekDays[3]]: {
    //making property name computing
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24 + 12, //earlier values can be computed
  },
};

console.log(openingHours);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //NOTE - 1. if proerty name is same as variable name donot need to write twice
  //ES6 enhanced object literal
  // openingHours:openingHours
  openingHours,

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

  //NOTE - 2.no need to write function and : for functions in objects
  OrderPizza(main, ...others) {
    console.log("main ingredient", main);
    console.log("others ingredients", others);
  },
};

// console.log(restaurant);
