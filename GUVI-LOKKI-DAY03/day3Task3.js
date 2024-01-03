//DAY3 
//TASK-3 Use The Rest Countries Api Url -> Https://Restcountries.Com/V3.1/All 
// And Display All The Country Flag In The Console

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload = function()
{
    // var result = JSON.parse(request.response);
    // console.log(result);
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);  
}
}

//OUTPUT:

// Afghanistan
// Asia
// Southern Asia
// 40218234