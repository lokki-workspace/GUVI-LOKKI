//DAY 07
//TASK 03 

// C. Print the following details name, capital, flag, using forEach function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
   result.forEach(element => {
    console.log("NAME:"+element.name, "CAPITAL:"+element.capital, "FLAG:"+element.flag);
   });
}

// OUTPUT :

// NAME:Afghanistan CAPITAL:Kabul FLAG:https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
// NAME:Åland Islands CAPITAL:Mariehamn FLAG:https://flagcdn.com/ax.svg
