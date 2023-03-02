import React from "react";

function Navbar() {
  const func =  ()=>{
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div>
      <nav>
        <h2>Postara</h2>
        <ul>
          <li>Home</li>
          <li>Live</li>
          <li>Explore</li>
          <li>Chat</li>
          <li>
            <input type="text" className="search" placeholder="Search" />
          </li>
        </ul>
      </nav>
      <div className="topnav">
        <a href="#home" className="active">
          Postara
        </a>
        <div id="myLinks">
          <a href="#news">Home</a>
          <a href="#contact">Live</a>
          <a href="#about">Explore</a>
          <a href="#about">Chat</a>
        </div>
        <a href="#" className="icon" onClick={func}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
