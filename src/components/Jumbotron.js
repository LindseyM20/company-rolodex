import React from "react";
import "./style.css"

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Rolodex</h1>
        <p className="lead">scroll  ||  search by name  ||  sort by last name</p>
      </div>
    </div>
  );
}

export default Jumbotron;
