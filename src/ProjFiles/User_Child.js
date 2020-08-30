import React, {Component} from 'react';
import "./Proj.css";

class User extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let styleName = this.props.user.todos.some(item => !item.completed) ? "redBorderComp" : "greenBorderComp";
       
        return (
            <div className = {styleName}>
                ID: &nbsp; {this.props.user.id}<br></br>
                Name: <input className = "inputText" type = "text" defaultValue = {this.props.user.name} />
                <br/>

                Email: <input className = "inputText" type = "text"  defaultValue = {this.props.user.email} /> 
                <br></br>
                <br></br>

                <input type = "button" className = "grayButton" value = "Other Data" />
                &nbsp; &nbsp;
                <input type = "button" className = "yellowButton" value = "Update" />
                &nbsp;&nbsp;
                <input type = "button" className = "yellowButton" value = "Delete" />
            </div>
        )
    }
}

export default User;