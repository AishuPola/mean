// const oranges=[3,7,8,9];
// oranges.push(10);

// console.log(oranges);//address of the 1st value doesnot cchange.
// //it wil allow to change the array.
// //only value changed, adrres not chnaged. so
// oranges[0]=8;//no error

// oranges=[7,8]
// //here ADDRESS WILL CHANGE

// const arr=[1,2,3,4,5]
// arr.reverse()
//it modifies the orginal array.
//it doesnot copy
//it mutates the arrays--->changes the orginal .

//map
const a = [5, 9, 10, 11];
a.map((x) => x * 2);
console.log(a);

let x2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < x2.length; i++) {
  x2[i] = x2[i] * 2;
}
console.log(x2);

// for(let idx in marks){//in-->index
//     console.log("index:",idx,"marks:",marks[idx]);
// }
// //readable and cleaner
// for(let mar of marks){
//     console.log("mark:",mar);
// }

let x3 = [1, 2, 3, 4, 5, 6, 7];
let x1 = [...x3];

for (let i in x3) {
  x1[i] = x1[i] * 2;
}
console.log(x3);
console.log(x1);

const chikus = [1, 2, 3, 4, 5, 6, 7, 8];
function doublechikus(chikus) {
  for (chiku of chikus) {
    doublechikus.push(chik * 2);
  }

  return doublechikus();
}
console.log(doublechikus);
console.log(chikus);

//map function
// console.log(chikus.map((chiku)=> chiku*2))
// console.log(chikus)

// [5,6,7,8].map((b)=>b*2)
const doublingchiku = (chiku) => chiku * 2;
[5, 6, 7, 9].map(doublingchiku);
// function is getting called with the argument
//fuction go to item

//what code,implementation is done inside the map

let arr = [5, 6, 9, 10];

let x = [];
function Ownmap(fn, arr) {
  for (let i of arr) {
    x.push(fn(i));
  }

  console.log(arr);
  console.log(x);
}

Ownmap((chiku) => chiku * 2, arr);
Ownmap((chiku) => chiku - 2, arr);

//task-2
// let v=[5,6,9,10].map((x,i)=>x*2 +i);
// console.log(v)

let z = [5, 6, 9, 10];
let z2 = [];
function Ownmap1(fn1, z) {
  for (let p in z) {
    z2.push(fn1(z[p]) + z.indexOf(arr[p]));
  }

  console.log(z);
  console.log(z2);
}
Ownmap1((chiku) => chiku * 2, arr);

///length
const avengers = [
  "Hulk",

  "Iron man",

  "Black widow",

  "Captain america",

  "Spider man",

  "Thor",
];
console.log(avengers.map((count) => count.length));

//letter count should be more than 10.
const avengerss = [
  "Hulk",

  "Iron man",

  "Black widow",

  "Captain america",

  "Spider man",

  "Thor",
];
console.log(avengers.filter((count) => count.length > 10));

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

console.log(
  books.filter((book) => book.rating >= 4.7).map((book) => book.title).sort()
);

// Rating 4.7 or more

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
const products = [
    { category: 'Electronics', price: 199.99, reviews: 120, rating: 4.5 },
    { category: 'Electronics', price: 89.99, reviews: 80, rating: 3.9 },
    { category: 'Home', price: 49.99, reviews: 30, rating: 4.2 },
    // more products...
    ];
    Expected Output:
    199.99 // Assuming only one product meets the criteria
    Task 5: Merging User and Order Data
    Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects that includes each user's name and their corresponding
    order details.
    Data:
    const users = [
    { userId: 'U1', name: 'Alice' },
    { userId: 'U2', name: 'Bob' },
    // more users...
    ];
    const orders = [
    { userId: 'U1', orderDetails: 'Order 1 Details' },
    { userId: 'U2', orderDetails: 'Order 2 Details' },
    // more orders...
    ];
    Expected Output:
    [
    { name: 'Alice', orderDetails: 'Order 1 Details' },
    { name: 'Bob', orderDetails: 'Order 2 Details' }
    ]