//DAY3 
//TASK-2 Use The Rest Countries Api Url -> Https://Restcountries.Com/V3.1/All 
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
        console.log(result[i].flags); 
}
}


//OUTPUT:
//{svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg', png: 'https://upload.wikimedia.org/wikipedia/commons/thu…the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'}