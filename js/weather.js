// navigator.geoloation.getCurrentPosition() 을 사용
//getCurrentPosition(  성공할경우  , 실패할 경우)

// 성공할 경우

const API_KEY = "ad4be890c70a3d43fcf896515d0a9db2";

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log(lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather= document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
// 실패할 경우
const onGeoError = () => {
    alert("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);