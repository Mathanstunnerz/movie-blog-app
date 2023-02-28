import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  Data();

  return (
    <div className="App">
      <Data />
      <Card />
    </div>
  );
}

export default App;

function Data() {
  return (
    <div>
      <div className="main-body ">
        <div className="nav-bar">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/movie-city-logo-png-transparent.png"
            className="logo-img"
          />
          <div className="theme-item">
            <a href="#">Movie</a>
            <a href="#">Tv Show</a>
            <a href="#">Help</a>
          </div>
          {/* <button onClick={clidd} >asuhfguayf</button> */}
          <div className="search-nav">
            <input
              type="text"
              className="input"
              placeholder="Enter movie name"
            />
            <button className="search-button">search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    fetch("https://data-base-six.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => setmovie(data));
  }, []);

  return (
    <div className="container__">
      {movie.map((ele) => (
        <div className="card-header" onClick={(e) => console.log(e)}>
          <div className="card-img">
            <img className="img" src={ele.poster} />

            <div className="rating-align">
              <div className="starrating material-symbols-outlined">
                Star
                <span className="rating">{ele.rating}</span>
              </div>
              <div className="summary">
                <h2>{ele.name}</h2>
                <span>{ele.summary}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
