import React from "react";
import ReactDOM from "react-dom";
import loader from "../../assets/loader.gif";
import MovieCard from "../MovieCard";
import { Trailer } from "../Trailer";
import "./style.scss";
export const MovieGrid = ({ data }) => {
  let newdata = Object.values(data);

  function showTrailer(id) {
    if (document.querySelector(".trailer")) {
      // console.log("found trailer,removing");
      document.querySelector(".trailer").remove();
    }

    let columns = 6;

    // column changes based on window width
    if (window.innerWidth <= 768) {
      columns = 2;
    } else if (window.innerWidth <= 1024) {
      columns = 4;
    }
    let targetElem = document.getElementById(
      Math.floor(id / columns + 1) * columns
    );

    let trailernode = document.createElement("div");
    trailernode.classList.add("trailer");

    document.getElementById("moviegrid").insertBefore(trailernode, targetElem);

    ReactDOM.render(
      <Trailer trailerdata={newdata[id]} item={id} />,
      trailernode
    );
  }

  return newdata.length ? (
    <div id="moviegrid" className="moviegrid">
      {newdata.map((detail, idx) => {
        return (
          <MovieCard id={idx} showTrailer={showTrailer} moviedetail={detail} />
        );
      })}
    </div>
  ) : (
    <img src={loader} alt="" id="loader" />
  );
};
