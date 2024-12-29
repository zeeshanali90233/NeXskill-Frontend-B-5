async function getWeather() {
  const inputRef = document.querySelector(".cityName");
  const resultDiv = document.querySelector(".result");
  const res = await fetch(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${inputRef.value}`,
    {
      method: "GET",
    }
  );
  const weather = await res.json();
  const currentTemperature = weather.current.temp_c;
  resultDiv.innerHTML = currentTemperature;
}
