document.getElementById("dailyFacts-btn").onclick = async function () {
  let url = new URL(
    "https://api.nasa.gov/planetary/apod?api_key=PCIlTkyhqe1nkB34QyF9XmZzzAj0RgkrFySr1uac"
  );
  /*
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status != 200) {
      alert("ERROR:");
    } else {    
      console.log(xhr.status + " " + xhr.statusText);
      console.log(xhr.response);
    }

    console.log(xhr.response.hdurl);

    let imgUrl = xhr.response.hdurl;
    let imgExplanation = xhr.response.explanation;

    document.getElementById("spacePics").src = imgUrl;
    document.getElementById("picExplanation").innerText = imgExplanation;
  };
  xhr.send();
*/

  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.log(error);
    return;
  }
  let obj = await response.json();

  let imgUrl = obj.hdurl;
  let imgExplanation = obj.explanation;

  document.getElementById("spacePics").src = imgUrl;
  document.getElementById("picExplanation").innerText = imgExplanation;
};

weatherOnMars();

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

  //console.log(obj);
  //console.log(sol_keys);

  for (let i = 0; i < sol_keys.length; i++) {
    const sol = sol_keys[i];

    //console.log(`sol nr: ${sol}`);
    let info;
    function putDataInListItem(data, id) {
      if (data !== undefined) {
        //console.log(data);
        document.getElementById(id).innerText = data += info;
      } else {
        document.getElementById(id).innerText = "N/A";
        //console.log(id + ": NULL");
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
    //putDataInListItem(obj[sol].First_UTC, "MW-firstUtc");
    //putDataInListItem(obj[sol].Last_UTC, "MW-lastUtc");
    /*
    if (obj[sol].AT != undefined) {
      console.log(obj[sol].AT.av);
      document.getElementById("MW-AT").innerText = obj[sol].AT.av;
    } else {
      document.getElementById("MW-AT").innerText = "N/A";
      console.log("AT: NULL");
    }
    if (obj[sol].PRE != undefined) {
      console.log(obj[sol].PRE.av);
      document.getElementById("MW-PRE").innerText = obj[sol].PRE.av;
    } else {
      document.getElementById("MW-PRE").innerText = "N/A";
      console.log("PRE: NULL");
    }
    if (obj[sol].HWS != undefined) {
      console.log(obj[sol].HWS.av);
      document.getElementById("MW-HWS").innerText = obj[sol].HWS.av;
    } else {
      document.getElementById("MW-HWS").innerText = "N/A";
      console.log("HWS: NULL");
    }
    if (obj[sol].WD.most_common != undefined) {
      console.log(obj[sol].WD.most_common.ct);
      document.getElementById("MW-WD").innerText = obj[sol].WD.ct;
    } else {
      document.getElementById("MW-WD").innerText = "N/A";
      console.log("WD: NULL");
    }
    if (obj[sol].Season != undefined) {
      console.log(obj[sol].Season);
      document.getElementById("MW-season").innerText = obj[sol].Season;
    } else {
      document.getElementById("MW-season").innerText = "N/A";
      console.log("Season: NULL");
    }
    if (obj[sol].First_UTC != undefined) {
      console.log(obj[sol].First_UTC);
      document.getElementById("MW-firstUtc").innerText = obj[sol].First_UTC;
    } else {
      document.getElementById("MW-firstUtc").innerText = "N/A";
      console.log("First_UTC: NULL");
    }
    if (obj[sol].Last_UTC != undefined) {
      console.log(obj[sol].Last_UTC);
      document.getElementById("MW-lastUtc").innerText = obj[sol].Last_UTC;
    } else {
      document.getElementById("MW-lastUtc").innerText = "N/A";
      console.log("Last_UTC: NULL");
    }/*

    /*
    ●JSO[sol].AT.av - atmospheric temperature, degrees Celsius
    ●JSO[sol].PRE.av - atmospheric pressure, Pascals
    ●JSO[sol].HWS.av - horizontal wind speed, metres per second
*/
  }
}

document.getElementById("asteroidsNeoWs-btn").onclick = async function () {
  let url = new URL(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=PCIlTkyhqe1nkB34QyF9XmZzzAj0RgkrFySr1uac`
  );

  let response = await fetch(url);
  let obj = await response.json();

  let nearEarth = obj.near_earth_objects[today];

  //newListItem();
  //console.log(obj);
  //console.log(obj.near_earth_objects[today]);

  for (let i = 0; i < nearEarth.length; i++) {
    const astroid = nearEarth[i];

    //console.log(`Name: ${astroid.name}`);
    //console.log(`ID: ${astroid.id}`);
    //console.log(`Hazard: ${astroid.is_potentially_hazardous_asteroid}`);

    const newList = document.createElement("LI");
    const newContent = document.createTextNode(
      `NAME: ${astroid.name}\nID: ${astroid.id}\nHazard: ${astroid.is_potentially_hazardous_asteroid}`
    );
    newList.appendChild(newContent);
    document.getElementById("astroidList").appendChild(newList);
  }
  console.log("vvvvvvvvvvvvvvvvvvvvvvvvvv");
  console.log("NAME: " + obj.near_earth_objects[today][0].name);
  console.log(
    "HAZARDOUS: " +
      obj.near_earth_objects[today][0].is_potentially_hazardous_asteroid
  );
};

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

//function newListItem() {
//  const newList = document.createElement("LI");
//  const newContent = document.createTextNode(
//    `ID: ${astroid.id}\nID: ${astroid.id}\nHazard: ${astroid.is_potentially_hazardous_asteroid}`
//  );
//
//  newList.appendChild(newContent);
//
//  document.getElementById("astroidList").appendChild(newList);
//}
