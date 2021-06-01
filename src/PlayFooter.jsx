import React from 'react';
import './PlayFooter.css';

const PlayFooter = () => {
  return (
    <>
      <div className="footer-album">
        <img
          src="https://i.scdn.co/image/ab67616d00004851969cb7256b7637fb078be23a"
          alt="#"
        />
        <div className="name-album-footer">
          <a className="footer-songName" href="#">
            Final de Semana
          </a>
          <a className="footer-albumName" href="#">
            Papatinho, Seu Jorge, Black Alien
          </a>
        </div>
      </div>
    </>
  );
};

export default PlayFooter;
