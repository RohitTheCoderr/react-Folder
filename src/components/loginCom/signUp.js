import { useState } from "react";
// import LoginData from "./login";


function SignUpData() {
//  const [userName, setUserName]=useState()

const name=useRef('null')
const password=useRef('null')
//  localStorage.setItem('data', data);
    return(
        <>
        <div className="loginDiv"> <h2>Login Page</h2>
        <form >
            <label className="usename">UseName:</label>
            <input type="text" name="name" placeholder="username" ref={name}></input>
            <label className="password">Password:</label>
            <input type="password" name="password" placeholder="password" ref={password}></input>
            <label className="password">Con-Password:</label>
            <input type="password" name="password" placeholder="con-password" ref={password}></input>
            <button type="submit" >Login</button>
            <button type="submit">SignUp</button>
        </form>
        </div>
        </>
    )
}

export default SignUpData;