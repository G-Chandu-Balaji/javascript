//SECTION - desturcting of arrays

const arr = [1, 2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log("a,b,c:", a, b, c);

const [x, y, z] = arr;
console.log("x,y,z:", x, y, z);
console.log("arr:", arr); //REVIEW - destructing does not effect hte original array

/*NOTE - To skip the middle element just put space */
const [f, , e] = arr;
console.log("skipping the middle element", f, e);

//NOTE - only first element
const [d] = arr;
console.log("first element :", d);

//NOTE - using spred operator for remaing
const [w, , ...t] = arr;
console.log("first and remaing after skipping second", w, t);
