//SECTION - sets  all vlaues are unique and their order doesnot matter  - addd,delete,clear,has
//NOTE - stores uique values
const orderSet = new Set(["pizza", "pizza", "onion"]);
console.log(orderSet); //Set(2) { 'pizza', 'onion' }

//NOTE - unique characters
const name = new Set("Baljaji");
console.log(name); // Set(5) { 'B', 'a', 'l', 'j', 'i' }
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("milk");
orderSet.add("garlic");
orderSet.delete("garlic");
// orderSet.clear();
console.log(orderSet);

//NOTE - no need to get value oot of a set

//NOTE - like arrays they are iterable
for (const value of orderSet) {
  console.log(value);
}

//exmaple
const staff = [
  "waiter",
  "waiter",
  "garderner",
  "garderner",
  "garderner",
  "maid",
];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["waiter", "waiter", "garderner", "garderner", "garderner", "maid"])
    .size
);
console.log(new Set("balajisdfs").size);
