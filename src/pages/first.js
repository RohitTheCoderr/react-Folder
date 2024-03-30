import React from "react";
function Mydata(props)
{
    return(
        <>
            <p> your name:{props.name}</p>
            <p> your email:{props.email}</p>
            <p> your city:{props.city}</p>
        </>
    )
}
export default Mydata;