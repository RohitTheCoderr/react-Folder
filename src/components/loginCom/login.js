import { useState , useRef} from "react";


function LoginData() {
//  const [userName, setUserName]=useState()
//  localStorage.setItem('data', data);
const name=useRef('null')
const password=useRef('null')

function loginMe(e) {
    e.preventDefault();
    const uName= name.current
    const uPassword= password.current
    console.log(uName, uPassword);
    localStorage.setItem(uName, uPassword)
}

    return(
        <>
        <div className="loginDiv"> <h2>Login Page</h2>
        <form >
            <label className="usename">UseName:</label>
            <input type="text" name="name" placeholder="username" ref={name}></input>
            <input type="password" name="password" placeholder="password" ref={password}></input>
            <button type="submit" onClick={loginMe}>Login</button>
        </form>
        </div>
        </>
    )
}

export default LoginData;