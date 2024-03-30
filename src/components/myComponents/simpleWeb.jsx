import React from "react";

 export function MySimpleweb(params) {
return (
    <>
    <div className="firstdiv">
    <nav className="navbar">
        <div className="logo">strikingly</div>
        <div className="login">
            <li className="log">Login
            <div class="dropdown">
            <a href="#">Login</a>
            <a href="#">Sign-Up</a>
          </div>  
            </li>
            <li className="lan">
         Language
          <div class="dropdown">
            <a href="#">Hin</a>
            <a href="#">Eng</a>
            <a href="#">Urdu</a>
          </div>
        </li>
        </div>
    </nav>
    <div className="main">
        <h1>Make a website in <span className="stylespan">minutes</span></h1>
        <p>Build your brand. Conquer the World.</p>
        <p>Zero code or design skills required.</p>
    </div>
    <div className="formdiv">
        <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Create password" />
        </form>
        <div className="getstart">Get's Start For Create a Website</div>
    </div>
    </div>
    </>
)    
}
