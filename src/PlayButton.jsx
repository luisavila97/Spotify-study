import React, { useState } from 'react';
import './PlayButton.css';

const PlayButton = () => {
  const [btn, setBtn] = useState(true);

  return (
    <button className="PlayBtn-button" onClick={() => setBtn(!btn)}>
      <svg height="25" width="25">
        {btn ? (
          <polygon
            className="PlayBtn-rect"
            points="21.57 12 5.98 3 5.98 21 21.57 12"
          ></polygon>
        ) : (
          <>
            <rect
              className="PlayBtn-rect"
              rect
              x="4"
              y="3"
              width="4"
              height="20"
            ></rect>
            <rect
              className="PlayBtn-rect"
              x="15"
              y="3"
              width="4"
              height="20"
            ></rect>
          </>
        )}
      </svg>
    </button>
  );
};

export default PlayButton;
