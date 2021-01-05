
import React, { useState } from "react";

//Import Styles
import "./styles/app.scss";

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library.js";
import Nav from "./components/Nav.js";

import data from "./util";

function App() {
  //State
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
