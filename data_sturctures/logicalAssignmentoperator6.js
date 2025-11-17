//SECTION - logical assignment operator

const rest1 = {
  name: "Ladoo",
  //   numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "Jalebi",
  owner: "Balaji",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//NOTE - logical OR assignment operator

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//or - 0 is fasly value if numberofGuests =0; then result is 10
//NOTE - nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//change the owner name to anonimous if exists

// rest1.owner = rest1.owner && "<Annoymous>";
// rest2.owner = rest2.owner && "<Annoymous>";
//{ name: 'Ladoo', numGuests: 0, owner: undefined } { name: 'Jalebi', owner: '<Annoymous>', numGuests: 10 }
//NOTE - AND assignment operator
rest1.owner &&= "<Annymous>"; // in this there is no undefined object remains the same
rest2.owner &&= "<Annymous>";
//REVIEW - assigns  a value to a variable if it is currently truthy
// { name: 'Ladoo', numGuests: 0 } { name: 'Jalebi', owner: '<Annymous>', numGuests: 10 }
console.log(rest1, rest2);
