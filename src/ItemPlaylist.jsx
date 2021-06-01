import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ItemPlaylist.css';

const ItemPlaylist = ({
  imgAlbum,
  musicName,
  albumName,
  timestamp,
  singerName,
}) => {
  return (
    <Row id="row-hover" aria-selected="false">
      <Col sm={1}>
        <li className="list-musicPlaylist" />
      </Col>
      <Col sm={1} className="g-0 " id="img-collumn">
        <img className="album-img" src={imgAlbum} alt="" />
      </Col>
      <Col sm={5} className="g-0 ms-0 ps-0">
        <Row>
          <Col>
            <h2 className="music-Name music-playlist">{musicName}</h2>
          </Col>
          <Row>
            <Col>
              <h3 className="singerName">
                <a className="a-playlistMusics" href="#">
                  {singerName}
                </a>
              </h3>
            </Col>
          </Row>
        </Row>
      </Col>
      <Col sm={4}>
        <h2 className="music-playlist">
          <a className="a-playlistMusics" href="#">
            {albumName}
          </a>
        </h2>
      </Col>
      <Col sm={1}>
        <h2 className="music-playlist">{timestamp}</h2>
      </Col>
    </Row>
  );
};

export default ItemPlaylist;
