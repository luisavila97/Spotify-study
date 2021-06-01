import React from 'react';

import Playlist from './Playlist';

import './App.css';
import './AppScrollbar.css';
import SpotifyLogo from './SpotifyLogo';
import SiderLinks from './SiderLinks';
import PlaylistList from './PlaylistList';
import PlayFooter from './PlayFooter';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="sider-container">
          <div className="sider-content">
            <SpotifyLogo className="spotifylogo" />
            <SiderLinks>Início</SiderLinks>
            <SiderLinks>Buscar</SiderLinks>
            <SiderLinks>Sua Biblioteca</SiderLinks>
            <div className="siderBtns">
              <SiderLinks>Músicas Curtidas</SiderLinks>
            </div>
            <div className="playlists  scrollbar">
              <PlaylistList />
            </div>
          </div>
        </div>
        <div className="playlist-container scrollbar">
          <Playlist />
        </div>
      </div>
      <div className="footer-container">
        <PlayFooter />
      </div>
    </div>
  );
}

export default App;
