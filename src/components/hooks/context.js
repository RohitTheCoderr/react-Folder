import React, { useState } from "react";
function A()
{
    const[data,setData]=useState('onetick technology');
    return(
        <>
        <h2> this is component A</h2>
        <B data={data}/>
        </>
    )

}
function B({data})
{
    return(
        <>
        <h2> this is coponent B</h2>
        <C data={data}/>
        </>
    )
}
function C({data})
{
   return(
    <>
    <h2> this is component c</h2>
    <D data={data}/>
    </>
   )
}
function D({data})
{
    return(
        <>
        <h1> this is d coponent</h1>
        {data}
        </>
    )
}
export default A;