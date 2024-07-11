const transactions1 = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]

const w = transactions1
  .filter((transaction) => {
    return (
      transaction.amount >= 5000 &&
      transaction.category == "Business" &&
      transaction.date.startsWith("2023")
    );
  })
  .map((transaction) => {
    return `Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date}`;
  });

console.log(w);

//task2

//   Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.
// Data:
const departments1 = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];
// Expected Output:
// [{ "Engineering": 170000 }, { "Marketing": 125000 }]

const res = departments1.map((department) => {
  const sum_sal = department.employees.reduce((acc, employee) => {
    return acc + employee.salary;
  }, 0);
  return { [department.name]: sum_sal };
});
console.log(res);

// Data: Array of departments with employees and their salaries
//task-3
// Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order
//of temperature and restructure the data into an object with dates as keys and temperatures as
// values.
// Data:
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];
// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

// const y=
//     weatherData.sort((a,b)=>b.temperature-a.temperature)

// console.log(y.reduce((acc,{date,temperature})=>{
//     acc[date]=[temperature]
//     return acc

// },{}
const transformedData = weatherData
  .sort((a, b) => b.temperature - a.temperature)
  .reduce((acc, { date, temperature }) => {
    acc[date] = temperature;
    return acc;
  }, {});

console.log(transformedData);

//   Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category with more than
// 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];
// Expected Output:
// 199.99 // Assuming only one product meets the criteria

const ep = products.filter(
  (product) =>
    (product.category =
      "Electronics" && product.reviews > 50 && product.rating >= 4.5)
);
const t =
  ep.reduce((acc, product) => {
    return acc + product.price;
  }, 0) / ep.length;

console.log(t);

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects
// that includes each user's name and their corresponding
// order details.
//Data:
const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];
// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

// const arr=[...users,...orders]
// const b=arr.filter((user)=>user.name )

// console.log(b.filter((order)=>order.orderDetails))

// var tmp=[];
// users.map(user=>{

//     let abc={}
//     abc=orders.filter((value)=>value.userId==user.userId )
//     console.log(abc)
//     // abc.push(user.name)
//     tmp.push(abc.orderDetails)
//     tmp.push(user.name)

// }

// )
// console.log(tmp)

let tmp = [];
users.map((user) => {
  let order = orders.filter((value) => value.userId == user.userId)[0]
    .orderDetails;
  tmp.push(user.name, order);
});
console.log(tmp);

// Q1. Implement getUserAge function
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  const age = userData?.user?.profile?.age || "Age not provided";
  return age;
}

console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided
//2

// Q2. Write a function that returns a new array with an additional skill for each employee
// Clue
// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     position: "Developer",
//     skills: ["JavaScript", "React"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     position: "Manager",
//     skills: ["Leadership", "Communication"],
//   },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
// ];

// console.log(addSkill(employees, "Problem Solving"));
// Should print:
// [
//   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
//   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// ]

// Q3. Find the total price of all products using arrow functions and
// array methods - Implement getTotalPrice
const products1 = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

function getTotalPrice(products1) {
  return products1.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(getTotalPrice(products1)); // Should print: 2200
//4
// Write a function that extracts the user's name and theme,
// providing default values if they are missing
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

function getUserSettings(userProfile) {
  let b = userProfile?.name ?? "unknown";
  let u = userProfile?.settings?.theme ?? "light";

  return `${b} prefers the ${u} theme`;
}

console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the lig

//using destructuring
// const getPersonInfo3=({
//   age: personAge,
//   name: { first: firstName, last: lastName },
//   favoriteColors:[primaryColor, secondaryColor]
// }) =>
const getUsersettings = (userProfile) => {
  const {
    name,
    setting: { theme },
  } = userProfile;
  console.log(settings);
  return `${name} prefers the dark theme`;
};
//5
//Write a function that takes a user object and
//returns a message indicating if the user is active or not
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

function getUserStatus(user) {
  let h = user.active == false ? "inactive" : "active";
  return `${name} is currently ${h}`;
}

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

//6
// Q6: Write a function that returns the user's age if available, or
//  a default message if not, using nullish coalescing and optional chaining
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

function getUserAge(user2) {
  return user2?.profile?.age || "Age not provided";
}
console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

//7
//Q7: Write a function that generates a summary string for the top scorer
// using template literals and array methods

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];

function getTopScorer(scores) {
  let new1 = scores.reduce((acc, curr) => {
    return acc.score > curr.score ? acc : curr;
  });
  return `${new1.name} is the top scorer with a score of ${new1.score}`;
}

console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

///Q8: Create a function that returns a greeting message based on the time of day
// Clue
// Use Date methods
// Ex26 - Create a function that returns a greeting message based on the time of day
function greet(name) {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)

//9
// Q9: Write a function that returns the name of a user's first friend using nested destructuring

// function getPersonInfo2({
//   age: personAge,
//   name: { first: firstName, last: lastName },
//   favoriteColors: [primaryColor, secondaryColor],
// }) {
//   //const [primaryColor, secondaryColor] = p.favoriteColors;

//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }
// console.log(getPersonInfo2(person2));
const users1 = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];
function getFirstFriendName(id) {
  let searchuser = users1.find((user) => user.id == id);

  if (searchuser) {
    return searchuser.friends[0]?.name ?? `${searchuser.name} has no friends`;
  } else {
    return "user not found";
  }
}

console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲
