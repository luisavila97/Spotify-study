import React from 'react';
import PlaylistNames from './PlaylistNames.js';
import './PlaylistList.css';

const PlaylistList = () => {
  const PlaylistList = PlaylistNames.map(({ id, name }) => (
    <a key={id} href="#" className="PlaylistNames">
      <li>{name}</li>
    </a>
  ));
  return <ol>{PlaylistList}</ol>;
};

export default PlaylistList;
