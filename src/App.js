import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>Coded by Alicia Vuong</small> and open sourced on{" "}
          <a
            href="https://github.com/aleebo/dictionary101"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          and hosted on{" "}
          <a
            href="https://jolly-johnson-c446a0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
