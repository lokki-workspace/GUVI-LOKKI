//DAY3 
//TASK-1 How To Compare Two Json Have The Same Properties Without Order ?

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert JSON objects to strings using stringify() method
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

// Compare the two strings
if (str1 === str2) {
  console.log("The String objects are equal.");
} else {
  console.log("The String objects are not equal.");
}



//OUTPUT:
// The String objects are not equal.
