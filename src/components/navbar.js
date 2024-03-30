import { PropTypes } from "prop-types";
import { useState } from "react";
// style on button from matarial ui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Navbar(props) {
  let [num, setnum] = useState(0);
  const [title, setTitle]=useState("")

  const [myStyle, setmyStyle]=useState({
    color:"black",
    backgroundColor:"white"
  })

  const [btnText, setBtnText]=useState("Enable Dark mode")

function ModeHandler(){
  if (myStyle.color==="black") {
    setmyStyle({color:'white',backgroundColor:'black'})
    setBtnText("Disabled Dark mode")
  }
  else{ setmyStyle({color:"black",backgroundColor:"white"})
  setBtnText("Enable Dark mode")
  }
}
 
  return (
    <>
      {props.title}

      <h1>{num}</h1>
      <button onClick={() => {setnum(num + 10); }}> {" "} click me{" "}
      </button>

{/* useState hooks */}
<h2>{title}</h2>
<input type="text" onKeyUp={(event)=>{
  setTitle(event.target.value)
}}/>


        <nav style={myStyle}>
        <ul>       
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
{/* <button onClick={ModeHandler}>{btnText}</button> */}

{/* this style from matarial ui */}
<Stack spacing={2} direction="row">
      <Button variant="btnText" onClick={ModeHandler}>{btnText}</Button>
    </Stack>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps={
  title:"wrong"
}