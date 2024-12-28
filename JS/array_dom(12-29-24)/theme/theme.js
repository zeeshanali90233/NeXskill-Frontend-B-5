function toggleTheme() {
  //   Already Black we have to go to light
  const bodyColor = document.body.style.backgroundColor;
  const isDark = bodyColor === "black";
  if (isDark) {
    console.log("I am dark theme");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    console.log("I am light theme");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}

function toggleTheme_LocalStorage() {
  //   Already Black we have to go to light
  const bodyColor = document.body.style.backgroundColor;
  const isDark = bodyColor === "black";
  if (isDark) {
    console.log("I am dark theme");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    console.log("I am light theme");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}

const themeBtnRef = document.getElementById("theme-btn");
themeBtnRef.addEventListener("click", () => {
  toggleTheme();
});

// Set Timeout
// Set Interval

// Continous Executuon after each interval
const intervalId = setInterval(() => {
  console.log("Set Interval called");
  toggleTheme();
}, 5000);

// Only 1 execution after interval
setTimeout(() => {
  console.log("Terminating Set Interval");
  clearInterval(intervalId);
}, 15000);

function saveToDB() {
  alert("Yeah I called");
  document.getElementById("weather-celcius").innerText = "17degree";
  document.getElementById("weather-wind").innerText = "14km/h";
}

// LocalStorage
localStorage.setItem("themeMode", "dark");
localStorage.setItem("themeMode", "light");

console.log(localStorage.getItem("themeMode"));

// Session Storage
sessionStorage.setItem("themeMode", "dark");
sessionStorage.setItem("themeMode", "light");

console.log(sessionStorage.getItem("themeMode"));
