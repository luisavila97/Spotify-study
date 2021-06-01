import React from 'react';
import './PlaylistHeader.css';

const PlaylistHeader = ({ plName, plUsuario, plCountMusics, plFullTime }) => {
  return (
    <>
      <div className="playlist-divBg"></div>
      <div className="playlist-header">
        <img className="playlist-image" src="https://bit.ly/3fqH3oj" alt="" />
        <div className="playlist-textsContainer">
          <h3 className="playlist-texts">PLAYLIST</h3>
          <h1 className="playlist-texts">{plName}</h1>
          <div>
            <a href="#" className="playlist-link">
              {plUsuario}
            </a>
            <p className="playlist-p">&#9679;</p>
            <h2 className="playlist-texts">
              {plCountMusics} músicas, {plFullTime}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistHeader;
