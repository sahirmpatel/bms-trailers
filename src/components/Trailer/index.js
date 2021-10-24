import React from "react";
import "./style.scss";

export const Trailer = ({ trailerdata }) => {
  let source = "";

  if (trailerdata.TrailerURL.indexOf(".com") !== -1) {
    source = trailerdata.TrailerURL.split("=")[1].split("&")[0];
  } else {
    source = trailerdata.split("/").reverse()[0];
  }

  return (
    <div
      className="trailerbackground"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${source}/1.jpg)`,
      }}
    >
      <div className="Trailer">
        <div className="Trailer__youtubevid">
          <iframe
            src={`https://www.youtube.com/embed/${source}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="Trailer__info">
          <h3>{trailerdata.EventTitle}</h3>
          <h5>{trailerdata.EventLanguage}</h5>
          {trailerdata.EventGenre.split("|").map((genre) => {
            return <span>{genre}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
