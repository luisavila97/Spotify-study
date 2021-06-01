import React from 'react';
import ItemPlaylist from './ItemPlaylist.jsx';
import Musics from './Musics.js';

const PlaylistSongs = () => {
  const musicList = Musics.map(
    ({ id, imgAlbum, musicName, singerName, albumName, timestamp }) => (
      <ItemPlaylist
        key={id}
        imgAlbum={imgAlbum}
        musicName={musicName}
        singerName={singerName}
        albumName={albumName}
        timestamp={timestamp}
      />
    )
  );

  return <ol> {musicList} </ol>;
};

export default PlaylistSongs;
