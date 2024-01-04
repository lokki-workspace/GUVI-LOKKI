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
        console.log("NAME:"+ result[i].name,"REGION:"+ result[i].region,
        "SUB-REGION:"+ result[i].subregion,"POPULATION:"+result[i].population ); 
}
}

//OUTPUT:

// NAME: Afghanistan REGION: Asia SUB-REGION: Southern Asia POPULATION: 40218234

