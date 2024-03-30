import React from "react";
class Demo extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:"amar",
            email:"amar@gmail.com",
            city:"delhi"
        }
    }
    update=()=>
    {
        this.setState({name:"abc",email:"abc@gmail.com",city:"mumbai"})
    }
    render()
    {
        return(
            <>
            <p> your name:{this.state.name}</p>
            <p> your email:{this.state.email}</p>
            <p> your city:{this.state.city}</p>
            <button onClick={this.update}>update</button>
              
            </>
        )
    }

}
export default Demo;