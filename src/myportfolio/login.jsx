import React from "react";

function Login() {
    return(
        <>
        <div className="container">
      <div className="login">
        <h1>LOGIN HERE</h1>
        <div className="box">
          <form action="">
            <ul>
              <input type="text" placeholder="Enter Email Id" />
              <input type="text" placeholder="Enter Password" />
              <input type="text" placeholder="Conform Password" />
              <button className="btn" id="sub">Submit</button>
              <button className="btn" id="res">Reset</button>
            </ul>
          </form>

          <div className="link">
            <p>For sign up</p>
            <a href="">Click here</a>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Login;