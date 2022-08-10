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
              defaultCity="Chicago"
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
