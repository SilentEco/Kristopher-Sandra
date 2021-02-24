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

    console.log(sol);
    console.log("atmospheric temperature, degrees Celsius");
    console.log(obj[sol].AT.av);
    console.log(obj[sol].PRE.av);
    console.log(obj[sol].HWS.av);
    console.log(obj[sol].WD.most_common.ct);
    console.log(obj[sol].Season);
    console.log(obj[sol].First_UTC);
    console.log(obj[sol].Last_UTC);

    /*
    ●JSO[sol].AT.av - atmospheric temperature, degrees Celsius
    ●JSO[sol].PRE.av - atmospheric pressure, Pascals
    ●JSO[sol].HWS.av - horizontal wind speed, metres per second
*/
  }
};
