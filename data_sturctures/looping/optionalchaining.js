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
  OrderPizza: function (...others) {
    // console.log("main ingredient", main);
    console.log("others ingredients", others);
  },
};

// console.log(restaurant.openingHours.mon);
// undefined

// console.log(restaurant.openingHours.mon.open);
//error- TypeError: Cannot read properties of undefined (reading 'open') stops the execustion

//NOTE - solution using if
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//NOTE - for deeply nested it become otof hand for checking at every point usin if
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//SECTION - we use optional chaining - if certain prperty doesnot exists it retuns undefined

console.log(restaurant.openingHours?.mon?.open); //undefined

const days = ["mon", "tue", "wed", "thru", "fri", "sat"];

for (const day of days) {
  //NOTE - want to use variable name as property name then use []-notation not . notation
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open} `);
}

//NOTE - 2.methods
console.log(
  restaurant.OrderPizza23?.("onion", "garlic") ?? "Method doesnot exits"
);

//NOTE - on arrays also

const user = [{ name: "balaji", email: "balaji@gmail.com" }];

console.log(user[1]?.name ?? "user doesnot exists"); //REVIEW - easy code donot require for if else
//if user=[]
// if (user.length > 0) console.log(user[0].name);
// else console.log("user array is emoty");
