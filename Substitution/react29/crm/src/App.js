import "./App.css";
import { useState } from "react"
import axios from "axios";

function App() {
  // Varianble Name, Value Overiding Function 
  const [cityName, setCityName] = useState("Lahore")
  const [weatherOfCityName, setWeatherOfCityName] = useState("")
  const [instaPosts, setInstaPosts] = useState([])
  const [celciusTemp, setCelciusTemp] = useState(0)

  const handleChange = (e) => {
    setCityName(e.target.value)
  }

  function getWeather(e) {
    e.preventDefault()
    axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`).then((res) => {
      setWeatherOfCityName(`${res.data.location.name}(${res.data.location.region})`)
      setCelciusTemp(res.data.current.temp_c)
    }).catch((err) => { alert(err.message) })
  }

  const getInstaPosts = () => {
    axios.get("https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts").then((res) => {
      setInstaPosts(res.data.tweets)
    }).catch((err) => { alert(err.message) })
  }

  const saveInstaPost = () => {
    axios.post("https://p2pclouds.up.railway.app/v1/learn/tweet/save", {
      tweetImage: "https://p2pclouds.up.railway.app/"
      , tweetDescription: "This is my new post"
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => { alert(err.message) })
  }


  return (
    <div className="App">
      <div><h1>Practicing State Variables and API Fecthing</h1></div>
      <button onClick={saveInstaPost}>Save Insa Posts</button>
      <button onClick={getInstaPosts}>Get Insa Posts</button>
      Current Weather of {weatherOfCityName} is {celciusTemp} Celcius
      <br />
      <form onSubmit={getWeather}>
        <input type="text" placeholder="Enter City Name" onChange={handleChange} required />
        <br />
        <button type="submit">Get Weather</button>
      </form>
      {instaPosts.map((post) => {
        const postFront = `${post.tweetId}: ${post.tweetDescription}`
        return (<div>{postFront}</div>)
      })}


    </div>
  );
}

export default App;