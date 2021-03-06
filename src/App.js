import React from "react";
import "./App.css";
import { usePlayer } from "./Threekit";

function App() {
  const playerRef = usePlayer({
    assetId: "406bd3c3-f3b4-4af9-9b5f-64e69cfbdd3f",
    authToken: process.env.REACT_APP_THREEKIT_AUTH_TOKEN,
    showAR: true,
    showConfigurator: true,
  });

  return (
    <div className="App">
      <Header />

      <div className="App-main">
        <div className="player-el" ref={playerRef} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="App-header">
      <div>
        <a
          href="https://www.threekit.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="logo"
            className="App-logo"
            src="https://i.imgur.com/zsXaU2U.png"
          />
        </a>
      </div>
      <a
        href="https://github.com/Threekit/Create-React-App"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="docs" src="https://i.imgur.com/v6VIy1K.png" width="25px" />
      </a>
      <a
        href="https://docs.threekit.com/docs/en/player-api"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="docs" src="https://i.imgur.com/jjoaLNA.png" width="25px" />
      </a>
    </div>
  );
}

export default App;
