import React, { useState } from 'react';
import ItemPlaylist from './ItemPlaylist';

const ListPlaylist = ({ musics }) => {
  const [inputData, setInputData] = useState([]);

  for (let i = 0; i < musics.length; i++) {
    inputData += (
      <ItemPlaylist
        id={musics[i].id}
        imgAlbum={musics[i].imgAlbum}
        musicName={musics[i].musicName}
        singerName={musics[i].singerName}
        albumName={musics[i].albumName}
        timestamp={musics[i].timestamp}
      />
    );
    setInputData(inputData);
  }
  return inputData;
};

export default ListPlaylist;
