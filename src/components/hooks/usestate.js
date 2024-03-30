import {useState} from 'react'
import React from 'react'

function  Mydata()
{
    const [name,setName]=useState('')
    const [city,setCity]=useState('')
    const [dataarray,setDataarray]=useState([])
    const [myobj,setMyobj]=useState({state:"",phone:""})   

   function getdata(e) {
        e.preventDefault()
        const data={name,city}
        console.log(data);
    }
    
    return(
    <>
        <form >
            <label for="name">enter the name</label><br/>
            <input
             type="text"
             name="t1"
             value={name} 
             id="name"
             onChange={(e)=>setName(e.target.value)}
             /><br/>
            <label for="city">enter the name</label><br/>
            <input
             type="text"
             name="t2"
             id="city"
             value={city} 
             onChange={(e)=>setCity(e.target.value)}
             />
             <button onClick={getdata}>clicme</button>

        </form>
    
    </>
    )
}
export default Mydata;