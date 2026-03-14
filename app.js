
const APIKEY = "a8c7bf42ef154437b2b110856261303";

async function callapi(city)
{
   try
   {
   let url = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}`;
   let res = await fetch(url);
   let data = await res.json();
   return data;
   }
   catch(e)
   {
    console.log("Error Found" , e);
   }
}


let btn = document.querySelector("button");

btn.addEventListener("click" , async () => {

    let container = document.querySelector(".container");
    container.style.display = "none"
    
    

    const city = document.querySelector("#in").value;
    let data = await callapi(city); // API CALL
    console.log(data);

    // Location Setting
    let location = document.querySelector(".details .loc");
    location.innerHTML = `
    <i class="fa fa-map-marker"></i>
    <b>
    ${data.location.name} , ${data.location.region} , ${data.location.country}</b>`;
    
    console.log(data);

    // Celcius Setting
    let celcius = document.querySelector(".cel");
    celcius.innerHTML = `${data.current.temp_c} &#8451;`

    //feel like Setting
    let feel = document.querySelector(".feel");
    feel.innerHTML = `<b>${data.current.feelslike_c}  &#8451</b>`;
    
    // Humidity
    let Humidity = document.querySelector(".hum");
    Humidity.innerHTML = `<b>${data.current.humidity}  &#8451 </b>`

    //Setting Cloud Deatails
    let cloudinfo = document.querySelector(".cloud");
    cloudinfo.innerHTML = `<b>${data.current.condition.text}</b>`;
    
    //image setting
    let img = document.querySelector("img");
    let link = "https:" + data.current.condition.icon;
    img.setAttribute("src" , link);

    //wind Setting
    let speed = document.querySelector(".wind-speed");
    speed.innerHTML = `${data.current.wind_kph} KPH`;

    //UV SEETING
    let uv = document.querySelector(".uv");
    uv.innerHTML = `${data.current.uv}`;

    //Set timezoe
    let timezone = document.querySelector(".time-zone");
    timezone.innerHTML = `<b>Time Zone${data.location.tz_id}</b>`
})