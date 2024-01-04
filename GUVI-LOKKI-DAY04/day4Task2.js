//DAY 04
//TASK-2 Do the below programs in arrow functions

// A. Print odd numbers in an array

let num= [11,22,33,44,55,77,88,99];

let odd=num.filter((x) => {

return x % 2 !== 0;
});

console.log(odd);

// OUTPUT:
// [11, 33, 55, 77, 99]

//-----------------------------------------------------------------------------------------------------------------

// B. Convert all the strings to title caps in a string array

let str2 = ['mY','naME','iS','LokESh'];

let Caps = str2.map((item) => {

   return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( Caps.join(' '));

// OUTPUT:
// My Name Is Lokesh

//-----------------------------------------------------------------------------------------------------------------

// C. Sum of all numbers in an array

var arr=[1,2,3,4,5,6];
const add=arr.reduce((a,b)=>a+b);
console.log([add]);

// OUTPUT:
// 21

//-----------------------------------------------------------------------------------------------------------------

// E. Return all the prime numbers in an array

let prime1 = (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime1([1,2,3,4,5,6,7,8,9,10]));

// OUTPUT:
// [2, 3, 5, 7]

//-----------------------------------------------------------------------------------------------------------------

// F. Return all the palindromes in an array

var arr =["radar", "noon", "soon", "wan", "wow"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);

// OUTPUT:
// ['radar', 'noon', 'wow']


//---------------------------------------------- TASK 2 END ----------------------------------------------------