import React from "react";

export function Myfun() {
    return(
        <>
        <h4>hello rohit </h4>
        </>
    )
}
 
class Test extends React.Component
{
    constructor(){
        super();
    }
    render(){
        return (
            <>
            <div id="clsDiv">
            <h1 className="mycls">Hello</h1>
            <h1>class components</h1>
            </div>
            <Myfun/>
            </>

        )
    }
}
export default Test;




