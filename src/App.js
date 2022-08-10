import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search defaultCity="Chicago" />
          </div>
        </div>
        <span className="footer">
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
