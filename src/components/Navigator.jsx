import React from "react";
import "../App.css";

export default function Navigator() {
  return (
    <div className="navbar">
      <div className="menu-items">
      <img src="" alt="Y" width={"16px"} height={"16px"} />
      <div className="title-and-menu">
        <h3 className="title">Hacker News</h3>
        <ul className="menu">
          <li>new</li>
          <span>{"  |  "}</span>
          <li>past</li>
          <span>{"  |  "}</span>
          <li>comments</li>
          <span>{"  |  "}</span>
          <li>ask</li>
          <span>{"  |  "}</span>
          <li>show</li>
          <span>{"  |  "}</span>
          <li>jobs</li>
          <span>{"  |  "}</span>
          <li>submit</li>
        </ul>
      </div>
      </div>
      <div className="login">login</div>
    </div>
  );
}
