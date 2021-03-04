document.getElementById("dailyFacts-btn").onclick = async function () {
  /* Återställer */
  document.getElementById("astroidTitle").innerText = "";
  document.getElementById("astroidList").innerText = "";
  document.getElementById("astroidText").innerText = "";
  let url = new URL(
    "https://api.nasa.gov/planetary/apod?api_key=PCIlTkyhqe1nkB34QyF9XmZzzAj0RgkrFySr1uac"
  );

  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.log(error);
    return;
  }
  let obj = await response.json();

  let imgTitle = obj.title;
  let imgUrl = obj.hdurl;
  let imgExplanation = obj.explanation;

  document.getElementById("spacePicsTitle").innerText = imgTitle;
  document.getElementById("spacePics").src = imgUrl;
  document.getElementById("picExplanation").innerText = imgExplanation;
};

async function weatherOnMars() {
  let url = new URL(
    "https://api.nasa.gov/insight_weather/?api_key=PCIlTkyhqe1nkB34QyF9XmZzzAj0RgkrFySr1uac&feedtype=json&ver=1.0"
  );

  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.log(error);
    return;
  }
  let obj = await response.json();

  let sol_keys = obj.sol_keys;

  for (let i = 0; i < sol_keys.length; i++) {
    const sol = sol_keys[i];

    let info;
    function putDataInListItem(data, id) {
      if (data !== undefined) {
        document.getElementById(id).innerText = data += info;
      } else {
        document.getElementById(id).innerText = "N/A";
      }
    }
    info = " °F";
    putDataInListItem(obj[sol].AT?.av, "MW-AT");
    info = " M/S";
    putDataInListItem(obj[sol].PRE?.av, "MW-PRE");
    info = " Pascal";
    putDataInListItem(obj[sol].HWS?.av, "MW-HWS");
    info = "";
    putDataInListItem(obj[sol].WD?.av, "MW-WD");
    putDataInListItem(obj[sol].Season, "MW-season");
  }
}
weatherOnMars();

document.getElementById("asteroidsNeoWs-btn").onclick = async function () {
  /*  Återställer */
  document.getElementById("spacePicsTitle").innerText = "";
  document.getElementById("spacePics").src = "";
  document.getElementById("picExplanation").innerText = "";

  let url = new URL(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=PCIlTkyhqe1nkB34QyF9XmZzzAj0RgkrFySr1uac`
  );
  let response = await fetch(url);
  let obj = await response.json();
  let nearEarth = obj.near_earth_objects[today];

  document.getElementById("");
  document.getElementById("astroidTitle").innerText =
    "Astroids near earth today";
  document.getElementById("astroidText").innerText =
    "Here you see the name and the ID of the astroids near earth today.\n Hazard returns a 'true' or 'false' statement declaring if the astdroid is a potential threat to earth.\n Click the 'Learn more' button to read more about the astroid.";

  const astroidUrl = nearEarth.nasa_jpl_url;

  for (let i = 0; i < nearEarth.length; i++) {
    const astroid = nearEarth[i];

    /* Länkar till astroiden */
    const newLink = document.createElement("a");
    const linkText = document.createTextNode("Learn more");
    newLink.appendChild(linkText);
    newLink.title = "Click to learn more!";
    newLink.href = astroid.nasa_jpl_url;

    /*  Skapar en ny lista med astroid info */
    const newList = document.createElement("LI");
    const newContent = document.createTextNode(
      `NAME: ${astroid.name}\tID: ${astroid.id}\tHazard: ${astroid.is_potentially_hazardous_asteroid} `
    );
    newList.appendChild(newContent);
    document.getElementById("astroidList").appendChild(newList);

    document.getElementById("astroidList").appendChild(newLink);
  }
};

/*  Dagens datum  */
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

//Sandras lilla del

//Detta gör så att när man trycker på knappen så ska infon komma fram.
document.getElementById("earthImagery-btn").onclick = async function () {
  //Här görs en "ny" url för att kunna hämta datan från Nasa

  /* Återställer */
  document.getElementById("astroidTitle").innerText = "";
  document.getElementById("astroidList").innerText = "";
  document.getElementById("astroidText").innerText = "";
  document.getElementById("spacePicsTitle").innerText = "";
  document.getElementById("spacePics").src = "";
  document.getElementById("picExplanation").innerText = "";

  // Sverige 2020-11-08
  let url = new URL(
    "https://api.nasa.gov/planetary/earth/assets?lon=18.64&lat=60.12&date=2020-11-08&&dim=0.10&api_key=dWzZWJW6v4s6mdpvB49DzO6iF7eeM4wRw7ZFsQZf"
  );

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
