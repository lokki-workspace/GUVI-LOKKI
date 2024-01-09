//DAY 07
//TASK 01 - Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// A. Get all the countries from Asia continent /region using Filter function.

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

// OUTPUT :

// 0: {name: 'Afghanistan', topLevelDomain: Array(1), alpha2Code: 'AF', alpha3Code: 'AFG', callingCodes: Array(1), …}
// 1: {name: 'Åland Islands', topLevelDomain: Array(1), alpha2Code: 'AX', alpha3Code: 'ALA', callingCodes: Array(1), …}
// 2: {name: 'Albania', topLevelDomain: Array(1), alpha2Code: 'AL', alpha3Code: 'ALB', callingCodes: Array(1), …}
// 3: {name: 'Algeria', topLevelDomain: Array(1), alpha2Code: 'DZ', alpha3Code: 'DZA', callingCodes: Array(1), …}
// 4: {name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}



