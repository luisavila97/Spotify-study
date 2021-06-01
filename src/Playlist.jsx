import React from 'react';

import './Playlist.css';
import PlayButton from './PlayButton';
import PlaylistHeader from './PlaylistHeader';
import PlaylistSongs from './PlaylistSongs';
import Header from './Header.jsx';

const Playlist = () => {
  return (
    <div className="containermax ">
      <PlaylistHeader
        plName="Rap"
        plUsuario="Luis Felipe Silva"
        plCountMusics="4"
        plFullTime="0h 14min"
      />
      <div className="playlist-body">
        <div className="playlist-header2">
          <PlayButton />
        </div>
        <Header className="playlist-HeadSongs playlist-div-HeadSongs">
          <p className="playlist-paragraph-hashtag">#</p>
          <p className="playlist-paragraph-tittle">TÍTULO</p>
          <p className="playlist-paragraph-album">ÁLBUM</p>

          <svg
            className="playlist-time"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
              fill="currentColor"
            ></path>
          </svg>
        </Header>
        <div className="playlist-songs">
          <PlaylistSongs />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
