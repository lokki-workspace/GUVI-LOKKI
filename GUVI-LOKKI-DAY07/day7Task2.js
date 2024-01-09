//DAY 07
//TASK 02 

// B. Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
    let out = result .filter((element)=>{
        return element.population<200000;
    })
console.log(out);
}

// OUTPUT :

// 0: {name: 'Åland Islands', topLevelDomain: Array(1), alpha2Code: 'AX', alpha3Code: 'ALA', callingCodes: Array(1), …}
// 1: {name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
// 2: {name: 'Andorra', topLevelDomain: Array(1), alpha2Code: 'AD', alpha3Code: 'AND', callingCodes: Array(1), …}