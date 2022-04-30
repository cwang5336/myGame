
import React, { useState, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom"
import './gamelogin.css';




const GameLogin = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const UserLogin = async e => {
        try {

            e.preventDefault();

            const body = { email, password };
            const response = await fetch("https://mymovie123.herokuapp.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),

            });

            if (response.status == 200) {
                window.location = "/home";
            }
            else if (response.status == 404) {
                alert("User Not Found.");
            }

            else if (response.status == 401) {
                alert("Incorrect Password.");
            }
            else if (response.status == 500) {
                alert("Server Error.");
            }

            document.body.style.backgroundColor = "#222222";
        } catch (err) {
            console.error(err.message);
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




                    <form className="login-form" onSubmit={UserLogin}>
                        <img src="https://github.com/cwang5336/myGame/blob/main/Screen%20Shot%202022-04-27%20at%2012.54.26%20PM.png?raw=true" />
                        <h1>Login</h1>

                        <h2>Username</h2>
                        <input type="text" class="input-style" placeholder="Username" />

                        <h2>Email</h2>
                        <input type="text" class="input-style" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                        <h2>Password</h2>
                        <input placeholder="Password" class="input-style" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                        <button type="submit" class="login-btn"> Login </button>

                        <h3>Don't have an account?  <Link to="/signup" >
                            Click Here
                        </Link></h3>


                    </form>

                </div>
            </div>

        </Fragment >

    )

}
export default GameLogin;
