//SECTION -  logical OR

//NOTE - falsy values (8) ->  false,0,null,undefined,NaN,""(empty string),

//ANCHOR - use any data-type, return any data-type, short-circuiting

console.log(3 || "Balaji");
console.log("" || "Balaji");
console.log(undefined || null);
console.log(true || 0);

//return the first turthy values
console.log(undefined || null || NaN || "Balaji123" || "" || 0);

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

//NOTE - when guests =0 , it becomes falsy value ,in both the cases , can rewrite if else statements
// restaurant.guests = 0;
restaurant.guests = 23;

//when 0 guest1 is 10 not 0;
const guest1 = restaurant.guests ? restaurant.guests : 10;
console.log("guest1 :", guest1);

//when 0 guest2 is 10 not 0;
const guest2 = restaurant.guests || 10;
console.log("guest2:", guest2);

//............AND...........................
console.log("...........AND...........");
//SECTION - AND , if false return falsey value ,if true retruns second value
console.log(0 && "Balaji");
console.log(7 && "Balaji123");

//return the first falsy value
console.log("hello" && 45 && null && "Balaji");

if (restaurant.OrderPizza) {
  restaurant.OrderPizza("onion", "garlic");
}

//NOTE - cna rewrit it without if-else statements
restaurant.OrderPizza && restaurant.OrderPizza("tomatoes", "bread");

//REVIEW -  OR - return first turthy values of all operands or simply last value if all of them are falsy
//REVIEW -  AND - returns first falsy vlaues of all operands or simply last vlaue if all of then are turthy

//SECTION - nullish coalescing operator ??
//NOTE - only nullish values - null and undefined (falsy values), 0 and "" -> turthy values

//even if 0 then it shows  0 not 10 because ??-> considers 0 as truthy not flasy vlaue
const guestsCorrect = restaurant.guests ?? 10;
console.log(guestsCorrect);
