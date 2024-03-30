import React from "react";
import Employees from "./data";

function Mydata() {
    return(
        <>
        <table border="2px">
            <tr>
                <th>Index</th>
                <th>Emp-Id</th>
                <th>Name</th>
                <th>City</th>
            </tr>
            {Employees.length < 1 ?(
                <tr><td colSpan={4}>No Data Enter yet</td></tr>
            ):(
            
            Employees.map((val, ind)=>{
                return(
                    <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{val.id}</td>
                        <td>{val.Name}</td>
                        <td>{val.city}</td>
                    </tr>
                )
            }))}
        </table>
        </>
    )
}

export default Mydata;