import React from "react";
function Member(props)
{
    const isval=props.isval;
    if(isval)
    {
        return <Exits />
    }
    return <Notexits />
}
function Exits()
{
    return(
        <>
        <h1> yes you are the member of onetick</h1>
        </>
    )
}
function Notexits()
{
    return(
        <>
        <h1> you are not member of onetick.</h1>
        </>
    )
}
export default Member;