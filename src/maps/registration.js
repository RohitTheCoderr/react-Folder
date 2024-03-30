import { Button } from "bootstrap";
import React from "react";

function UserData() {
    return(
        <>
        <div>
            <ata/>
            <form action="" onSubmit="">
                Your ID: <input className="id" type="text" />
                Name:<input className="name" type="text" placeholder="Enter your name"/>
                City: <input type="text" className="city"/>
                <button type="submit">submit</button>
            </form>
        </div>
        </>
    )
}

export default UserData;