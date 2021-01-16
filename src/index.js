import React from "react";
import ReactDOM from "react-dom";
import getURL from "./urls";

var title = "Favourites";
ReactDOM.render(
  <div>
    <h1 className="heading">{title}</h1>
    <div>
      <img src={getURL(1)} alt="Banana" />
      <img src={getURL(2)} alt="Cut Banana" />
      <img src={getURL(3)} alt="Dolphin Banana" />
    </div>
  </div>,
  document.getElementById("root")
);
