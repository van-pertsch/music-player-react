import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, currentSong, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
