//SECTION - order of destructing the object doesnot matters;
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

restaurant.orderDelivery({
  time: "20:30",
  Address: "newYOirk USA",
  starterIndex: 1,
  mainIndex: 2,
});

//NOTE - can give custom name
const { name: RestaurantName, location: Address } = restaurant;
console.log(RestaurantName, ":", Address);

//NOTE - default value also
const { menu = [], openingHours: hours = [] } = restaurant;
console.log(menu, ":", hours);

//NOTE - mutating variable
let a = 100;
let b = 50;
const obj = { a: 1, b: 2 };
({ a, b } = obj);
console.log(a, b);

//NOTE - nested ojbects

// const { fri } = restaurant.openingHours;
// console.log(fri);
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
