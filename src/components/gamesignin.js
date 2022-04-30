import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
// import './moviesignin.css';
import './gamelogin.css';

const GameSignin = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const GameSignup = async e => {

    try {
      e.preventDefault();

      const body = { username, email, password };
      const response = await fetch("https://mymovie123.herokuapp.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.status == 500) {
        alert("Server Error.");
      }
      else {
        window.location = "/";
      }

    } catch (err) {
      console.error(err.response.data);
    }
  }


  return (
    <Fragment>
      <style> {document.body.style.backgroundColor = "#454545"} </style>

      <div class="panels">
        <div class="panel">
          <img class="home-icon-image" src="https://i.pinimg.com/736x/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.jpg" />
        </div>
        <div class="panel">




          <form className="login-form" onSubmit={GameSignup}>
            <img src="https://github.com/cwang5336/myGame/blob/main/Screen%20Shot%202022-04-27%20at%2012.54.26%20PM.png?raw=true" />
            <h1>Register Here</h1>

            <h2>Username</h2>
            <input placeholder="Username" type="text" class="input-style" value={username} onChange={e => setUsername(e.target.value)} />
            <h2>Email</h2>
            <input placeholder="Email" type="text" class="input-style" value={email} onChange={e => setEmail(e.target.value)} />
            <h2>Password</h2>
            <input placeholder="Password" class="input-style" type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button type="submit" class="login-btn"> Register </button>

            <h3>Return to Login  <Link to="/" >
              Click Here
            </Link></h3>


          </form>

        </div>
      </div>
    </Fragment>

  )

}
export default GameSignin;
