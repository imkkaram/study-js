const API_KEY = "ad6fb3f6d12d55dd3c7e243a90f77369"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const units = "metric"
    const lang = "kr";
    console.log(`latitude: ${lat}, logitude: ${lon}`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`
    console.log(url);

    fetch(url).then(response => response.json()).then(data => {
        const weatherText = data.weather[0].main;
        const temperature = Math.floor(data.main.temp);
        const city = data.name;
        const weather = document.querySelector("#weather");
        weather.innerText = `${weatherText}(${temperature}°) @ ${city}`;
    });
}

function onGeoError() {
    alert("위치를 가지고 오는데 실패했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
