import React from "react";
import "./style.scss";
import fallbackimg from "../../assets/fallbackimg.png";
import playbutton from "../../assets/play.png";
const index = ({ moviedetail, showTrailer, id }) => {
  const onError = (ev) => {
    ev.target.src = fallbackimg;
  };

  return (
    <div onClick={() => showTrailer(id)} id={id} className="moviecard">
      <img
        src={moviedetail.EventImageUrl}
        onError={(e) => onError(e)}
        alt={moviedetail.EventTitle}
        className="cover"
      />
      <img src={playbutton} className="playbutton" alt="play" />
      {moviedetail.EventTitle}
    </div>
  );
};

export default index;
