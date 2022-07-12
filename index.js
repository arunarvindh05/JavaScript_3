//there is no json given
var requests = new XMLHttpRequest()// created XMLhttprequest object

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'
//the api url
requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload = function(){
    var data = JSON.parse(requests.response);
    console.log(data);
    //for loop
    for(let i=0;i<data.length;i++){
        console.log('The countries in for loop'+data[i])
    }

    //for in loop
    console.log('The country object in for in loop ')
    for(let i in data[0]){
        console.log(i+': '+data[0][i])
    }

    //for of loop
    console.log('The total countries object in for of loop ')
    for(let i of data){
        console.log(i)
    }

    //forEach loop
    console.log('The total countries object in for Each loop ')
    data.forEach(element => {
        console.log(element)
    });
}
