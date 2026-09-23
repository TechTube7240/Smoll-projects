const apiKey = "5170c451957c95a0f930945cac5280f3";


async function getWeather() {
    const temp = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const windSpeed = document.getElementById("windSpeed");
    const windDeg = document.getElementById("windDeg");
    const weatherImg = document.getElementById("weatherImg")
    const weatherDescription = document.getElementById("weatherDescription")

    let city = document.getElementById("city").value;
    city = city.toLowerCase();

    try {
        const result= await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        const data = await result.json();
        console.log(data);

        if (!result.ok){
            throw new Error("City not found");
        }
        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherImg.classList.add("img");
        weatherDescription.textContent = `${data.weather[0].description}`;
        temp.textContent = `${data.main.temp}°C`;
        feelsLike.textContent = `Feels like ${data.main.feels_like}°C`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} ms⁻¹`;
        windDeg.textContent = `Wind Deg: ${data.wind.deg}°`
    }
    catch (error){
        alert(error);
        console.log(error);
    }



}