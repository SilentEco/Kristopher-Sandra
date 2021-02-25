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

document.getElementById("marsBtn").onclick = async function () {
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

    console.log(`sol nr: ${sol}`);

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
      document.getElementById("MW-AT").innerText = obj[sol].Last_UTC;
    } else {
      document.getElementById("MW-lastUtc").innerText = "N/A";
      console.log("Last_UTC: NULL");
    }

    /*
    ●JSO[sol].AT.av - atmospheric temperature, degrees Celsius
    ●JSO[sol].PRE.av - atmospheric pressure, Pascals
    ●JSO[sol].HWS.av - horizontal wind speed, metres per second
*/
  }
};
