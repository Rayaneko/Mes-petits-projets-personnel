import React from 'react';
import './Playlist.css';

// Class Playlist qui permet le contenu Playlist avec un boutton "Save the music "
class Playlist extends React.Component {
    render () {
        return (
            <div class="Playlist">
  <input defaultValue={"New Playlist"}/>
  

{/* <TrackList /> */}
  <button class="Playlist-save">SAVE THE MUSIC</button>
</div>
        )
    }
}

export default Playlist;