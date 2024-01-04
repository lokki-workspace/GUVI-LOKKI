//DAY 04
//TASK-1 Do the below programs in anonymous function & IIFE

//Print odd numbers in an array - anonymous function

var num1 = function (value){
    var final = [];
  for(var i = 0; i<value.length; i++){
      if(value[i]%2==1){
        final.push(value[i]);      
      }
  } 
console.log(final);    
};

var value = [1,2,3,4,5,6];
num1(value);

// OUTPUT:
// [1, 3, 5]

//Print odd numbers in an array - IIFE

var num2 = [6,7,8,9,10,11];
   var final1 = [];
(function (){
    
     for(var i = 0; i<num2.length; i++){
      if(num2[i]%2==1){
          final1.push(num2[i])
        
      }
  } 
    console.log(final1);
})(num2);

// OUTPUT:
// [7, 9, 11]

//-----------------------------------------------------------------------------------------------------------

//Convert all the strings to title caps in a string array - anonymous function

var cap = function(str1) {
    for (var i=0; i<str1.length; i++){
        str1[i] = str1[i].toLowerCase();
        str1[i] = str1[i].charAt(0).toUpperCase()+ str1[i].slice(1);
    }
    console.log(str1.join(' '));
}

var str1 = ['i', 'aM', 'fULL', 'stACk', 'deveLOPer'];
cap(str1);

// OUTPUT:
// I Am Full Stack Developer

//Convert all the strings to title caps in a string array - IIFE

var str2 = ['caLL', 'mE', 'loKKi'];

(function (){
    for (var i=0; i<str2.length; i++){
        str2[i] = str2[i].toLowerCase();
        str2[i] = str2[i].charAt(0).toUpperCase()+ str2[i].slice(1);
    }
    console.log(str2.join(' '));
})(str2);

// OUTPUT:
// Call Me Lokki

//------------------------------------------------------------------------------------------------------------------

// Sum of all numbers in an array - anonymous function

var add = function(n){
    var sum1 = 0;
    for( var i =0; i<n.length; i ++){
        sum1+=n[i];
    }
    console.log(sum1);
};

var n = [1,2,3,4,5];
add(n);

// OUTPUT:
// 15

// Sum of all numbers in an array - IIFE

var m = [11,22,33,44,55];
(function (){
    var sum2 = 0;
    for(var i=0;i<m.length; i++){
        sum2+=m[i];
    }
    console.log(sum2);
})(m);

// OUTPUT:
// 165

//------------------------------------------------------------------------------------------------------------------

// Return all the prime numbers in an array - anonymous function

var pnum1 = function(a){
    var res1 = [];
    for(var i=0; i<a.length; i++){
        var count1 =0;
        for(var j=1; j<=a[i]; j++){
            if(a[i]%j===0){
                count1++;
            }
        }
        if (count1==2){
            res1.push(a[i]);
        }
    }
    console.log(res1);
}

pnum1([1,2,3,4,5,6,7,8,9,10,11,12]);

// OUTPUT:
// [2, 3, 5, 7, 11]

// Return all the prime numbers in an array - IIFE

(function(b){
     var res2 = [];
     for(var i=0; i<b.length; i++){
        var count2 = 0;
        for(var j=1;j<=b[i];j++){
            if(b[i]%j===0){
                count2++;
            }
        }
        if(count2==2){
            res2.push(b[i]);
        }
     }
     console.log(res2);
})([11,12,13,14,15,16,17,18,19,20]);

// OUTPUT:
// [11, 13, 17, 19]

//------------------------------------------------------------------------------------------------------------------

// Return all the palindromes in an array - anonymous function

var palin = function(aa){
    var res3 = [];
    for (var i=0; i<aa.length;i++){
        var one = aa[i];
        var str3 = one.split('').reverse().join('');
        if(str3==aa[i]){
        res3.push(aa[i]);
        }
    }
    console.log(res3);
}

palin(["mom", "dad", "son", "daughter"]);

// OUTPUT:
// ['mom', 'dad']

// Return all the palindromes in an array - IIFE

(function (bb){
    var res4 = [];
    for (var i=0; i<bb.length;i++){
        var two = bb[i];
        var str4 = two.split('').reverse().join('');
        if(str4==bb[i]){
        res4.push(bb[i]);
        }
    }
    console.log(res4);
})(["day", "noon", "pop", "civic"]);

// OUTPUT:
// ['noon', 'pop', 'civic']

//------------------------------------------------------------------------------------------------------------------

// Return median of two sorted arrays of the same size - anonymous function

var median = function (arr1,arr2){
    var arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    var len = arr.length;
  
    if(len%2!==0){

        var ans = arr[Math.round(len/2)-1];
        var final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [13,12,11,14,15];
var arr2 = [18,16,17,19,10];
median(arr1,arr2);

// OUTPUT:
// 29

// Return median of two sorted arrays of the same size - IIFE

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    var len = arr.length;
  
    if(len%2!==0){

        var ans = arr[Math.round(len/2)-1];
        var final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);

// OUTPUT:
// 11

//------------------------------------------------------------------------------------------------------------------

// Remove duplicates from an array - anonymous function

var dup1 = function(duparr){
    var order = {};
    for ( var i =0; i<duparr.length; i++){
        if(order[duparr[i]]){
            order[duparr[i] = order[duparr[i]] + 1];
        }
        else{
            order[duparr[i]] =1;
        }
    }


var final = [];
for(var x in order){
    if(order[x] === 1){
        final.push(x);
    }
}
console.log(final);
};
dup1([11,22,33,11,44,55,33]);

// OUTPUT:
// ['11', '22', '33', '44', '55']

// Remove duplicates from an array - IIFE

(function(duparr){
    var order = {};
    for ( var i =0; i<duparr.length; i++){
        if(order[duparr[i]]){
            order[duparr[i] = order[duparr[i]] + 1];
        }
        else{
            order[duparr[i]] =1;
        }
    }


var final = [];
for(var x in order){
    if(order[x] === 1){
        final.push(x);
    }
}
console.log(final);
})([100,200,200,500,1000,100,400,300])

// OUTPUT:
// ['100', '200', '300', '400', '500', '1000']

//------------------------------------------------------------------------------------------------------------------

// Rotate an array by k times - anonymous function

var rotate = function (arr,l,t)
{
    var p = 1;
        while (p <= t) {
            var last = arr[0];
            for (var i = 0; i < l - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[l - 1] = last;
            p++;
            
        }
         var out = [];
        for (var i = 0; i < l; i++) {
           out.push(arr[i]); 
        }
        console.log(out);
};

var arr =[4,5,6,1,2,3];
var l = arr.length;
var t = 3;
rotate(arr, l,t);

// OUTPUT:
// [1, 2, 3, 4, 5, 6]

// Rotate an array by k times - IIFE

var arr =[5,6,7,8,1,2,3,4];
var n = arr.length;
var k = 2;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);
            
        }
        console.log(out);  
})(arr,n,k);
  

// OUTPUT:
// [7, 8, 1, 2, 3, 4, 5, 6]


//------------------------------------ TASK 1 END --------------------------------------------------
