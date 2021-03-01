/* Min API Key dWzZWJW6v4s6mdpvB49DzO6iF7eeM4wRw7ZFsQZf */
document.getElementById("notificationsFromNasa").onclick = function (){
  fetch ("https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=dWzZWJW6v4s6mdpvB49DzO6iF7eeM4wRw7ZFsQZf")
 
  .then(response => {
    return response.json();
  })

  .then(notifications =>{
    console.log(notifications);
  });
  
  let imgUrl = obj.hdurl;
  let imgExplanation = obj.explanation
  document.getElementById("spacePics").src = imgUrl;
  document.getElementById("picExplanation").innerText = imgExplanation;
};


document.getElementById("dailyPicture").onclick = async function () {
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

  let imgUrl = obj.hdurl;
  let imgExplanation = obj.explanation;

  document.getElementById("spacePics").src = imgUrl;
  document.getElementById("picExplanation").innerText = imgExplanation;
}; 
 
 /*let xhr = new XMLHttpRequest();
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