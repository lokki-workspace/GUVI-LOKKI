//DAY 07
//TASK 04 

// D. Print the total population of countries using reduce function


var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    var out = result.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(out);
 
}

// OUTPUT :

// 7759438109