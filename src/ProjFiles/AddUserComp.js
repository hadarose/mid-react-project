import React, {Component} from 'react';
import "./Proj.css";

class AddUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {name: "", email: ""}
    }

    getName = (e) =>
    {
        this.setState({name: e.target.value})
    }

    getEmail = (e) =>
    {
        this.setState({email: e.target.value})
    }

    sendUser = () =>
    {
        this.props.callbackAddUser(this.state.name, this.state.email)
    }

    render()
    {
        
        return (
       <div style = { {float: "right"} }> 
            Add New User
            <br/> 
                <div className = "todosComp" style = {{height: "100px"}}>
                    Name: <input type = "text" onChange = {this.getName}/>
                    <br></br>
                    Email: <input type = "text" onChange = {this.getEmail}/>
                    <br></br>

                    <input type = "button"  className = "yellowButton" style = {{float: "right"}} 
                                            value = "Add" onClick = {this.sendUser} /> &nbsp;
                

                    <input type = "button"  className = "yellowButton" style = {{float: "right"}} 
                                            value = "Cancel" onClick = {this.goBack} />
                </div>
            
        </div>    
        )
    }
}

export default AddUser;