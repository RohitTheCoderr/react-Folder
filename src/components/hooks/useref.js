
import React,{useRef} from "react";

function Myform() 
{
    const name=useRef('null')
    const email=useRef('null')
    const city=useRef('null')
    const ValData=(e)=>
    {
        e.preventDefault();
        const n=name.current.value;
        const em=email.current.value;
        const ct= city.current.value;
        console.log({n,em,ct})
        // name.current.value=""
        // email.current.value=""
        // city.current.value=""

    }
    
    return(
    <>
    <form>
       <label htmlFor="name"for>name</label>
       <input type="text" name="t1" id="t1" ref={name}/>

       <label htmlFor="email"for>email</label>
       <input type="email" name="email" id="t2" ref={email}/>

       <label htmlFor="city"for>city</label>
       <input type="text" name="city" id="t3" ref={city}/>
        <button onClick={ValData} >clickme</button>
    </form>
    </>
    )
}
export default Myform;




