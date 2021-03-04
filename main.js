"use strict";

/*
Min API Key dWzZWJW6v4s6mdpvB49DzO6iF7eeM4wRw7ZFsQZf 
*/


//Sandras lilla del

//Detta gör så att när man trycker på knappen så ska infon komma fram.
document.getElementById("earthImagery").onclick = async function (){

  //Här görs en "ny" url för att kunna hämta datan från Nasa

  // Sverige 2020-11-08
  let url = new URL("https://api.nasa.gov/planetary/earth/assets?lon=18.64&lat=60.12&date=2020-11-08&&dim=0.10&api_key=dWzZWJW6v4s6mdpvB49DzO6iF7eeM4wRw7ZFsQZf");
  
  let response = await fetch(url);
  let obj = await response.json();
 
  /*
  Här på console. logg så kollade jag i etapper på hur jag skulle få ut en del av infon.
  console.log(obj) så fick man se vad objektet innehöll. står det tex url för att få tag på bilden
  så dubbelkollade jag genom att skriva (obj.url). När det va enbart länken till bilden så gjorde jag en
  "ny" variabel som gjorde att jag fick tag i länken för bilden och kunde göra så att den visades på webbsidan.
  */

  //console.log(obj);

  let image = obj.url;

  // här så gör den så att den visas på webbsidan.
  document.getElementById("spacePics").src = image;
};
