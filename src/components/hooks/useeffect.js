import React,{useState,useEffect} from "react";
function Mydata1(props)
{
    const[ct,setCt]=useState(0);
    useEffect(()=>
    {
        setTimeout(() => {
            setCt((ct)=>ct+1)
            console.log(ct);
        },props.val*5);
    })
    // setTimeout(() => {
    //     setCt((ct)=>ct+1)
    // },1000);
    return(
        <>
           <h1> your value is {ct}</h1>
        </>
    )
}
export default Mydata1;

