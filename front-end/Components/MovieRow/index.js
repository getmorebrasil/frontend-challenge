// #region Global Imports
import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row__arrow-leff" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movie-row__arrow-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movie-row__listarea">
        <div
          className="movie-row__list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movie-row__item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
//export { MovieRow };
