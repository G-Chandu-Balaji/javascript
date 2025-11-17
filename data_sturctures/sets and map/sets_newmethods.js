const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

//NOTE - intersection
const commonfood = italianFoods.intersection(mexicanFoods);
console.log("intersction:", commonfood);

//NOTE - union
const unionfood = italianFoods.union(mexicanFoods);
console.log("all unqiue food:", unionfood);
//another way
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//NOTE - differemce (oreder matter)
const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log([...uniqueItalianFood]);

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log([...uniqueMexicanFood]);

//NOTE - symmertirc dfiiference opposite of interstion (union-intersection)
const uniqueFood = italianFoods.symmetricDifference(mexicanFoods);
console.log("unique food without intersection :", uniqueFood);

//NOTE - isDisjointFrom -check whether sets are completely different or not
const isDifferent = italianFoods.isDisjointFrom(mexicanFoods);
console.log(isDifferent);
