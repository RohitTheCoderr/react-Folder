import React from "react";

const data=React.createContext();
function Settest()
{
    return(
        <>
        <data.Provider value={"onetick techonlogy"}>
            <Gettest />
        </data.Provider>
        </>
    )
}
function Gettest()
{
    return(
        <> 
         <data.Consumer >
            {value=><div> this is answer: {value}</div>}
         </data.Consumer>
        </>
    )
}
export default Settest;