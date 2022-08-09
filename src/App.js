import "./App.css";
import Header from "./Header";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search />
            <Header
              date="Tuesday, August 2"
              time="2:31 PM"
              city="Chicago"
              temperature={87}
              conditions="Cloudy"
              feelsLike={90}
              windSpeed={5}
              humidity={51}
              highTemp={90}
              lowTmp={82}
            />
          </div>
        </div>
        <span class="footer">
          This app was created by Elizabeth King and is{" "}
          <a
            href="https://github.com/elizabethkatk/react-weather-app"
            target="_blank"
            rel="noreferrer"
            id="code-link"
          >
            open-sourced on GitHub
          </a>
          .
        </span>
      </div>
    </div>
  );
}

export default App;
