const apiKey = "5170c451957c95a0f930945cac5280f3";


async function getWeather() {


    let city = document.getElementById("city").value;
    city = city.toLowerCase();
    const temp = document.getElementById("temperature").textContent;
    const feelsLike = document.getElementById("feelsLike").textContent;
    const windSpeed = document.getElementById("windSpeed").textContent;
    const windDeg = document.getElementById("windDeg").textContent;


    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await result.json();
    console.log(city)

}