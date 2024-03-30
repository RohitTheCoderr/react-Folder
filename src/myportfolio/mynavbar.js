import React from "react";
import {Link,Outlet} from 'react-router-dom'
function Mynavbar() {
    return(
        <>
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contactus">Contact</Link></li>
            <li><Link to="login">Login</Link></li>
            <li><Link to="project">project</Link></li>
        </ul>
        <Outlet />
        </>
    )
}
export default Mynavbar;

