import React from "react";
import "./style.scss";
export const MovieGrid = ({ data }) => {
  let newdata = Object.values(data);

  function showTrailer(id) {
    if (document.querySelector(".trailer")) {
      console.log("found trailer,removing");
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

    // console.log("data", newdata);
    let p = document.createElement("div");
    p.classList.add("trailer");
    p.innerText = "SNEED";

    document.getElementById("moviegrid").insertBefore(p, targetElem);
  }

  return (
    <div id="moviegrid" className="moviegrid">
      {newdata.map((detail, idx) => {
        return (
          <div
            id={idx}
            onClick={() => {
              showTrailer(idx);
            }}
            className="moviegrid__card"
          >
            {detail.EventTitle}
          </div>
        );
      })}
    </div>
  );
};
