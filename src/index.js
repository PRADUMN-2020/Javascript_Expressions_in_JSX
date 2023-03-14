import React from "react";
import ReactDOM from "react-dom";

const fname = "Pradumn";
const lname = "Prasad";
const luckyNumber = "5";

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
