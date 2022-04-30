import React from "react";
import './nav.css';

function Nav() {

return(
<div className="nav-home">
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
<div className="container-fluid">
<img id ="logoHomeScreen" src = "https://github.com/cwang5336/myGame/blob/main/Screen%20Shot%202022-04-27%20at%2012.54.26%20PM.png?raw=true"/>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="mynavbar">
<ul  className="navbar-nav me-auto">
  <li className="nav-item"> 
    <h5> <a className="nav-link" href="/home">Home</a> </h5>
  </li>
  <li className="nav-item">
    <h5> <a className="nav-link" href="/trailers">Trailers/Videos</a> </h5>
  </li>
  <li className="nav-item">
   <h5>  <a className="nav-link" href="/">Logout</a> </h5>
  </li>
</ul>

</div>
</div>
</nav>
</div>


)};

export default Nav;