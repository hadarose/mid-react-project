import React, {Component} from 'react';
import "./Proj.css";
import Address from "./AddressComp";

class User extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isOtherData: false, newName: "", newEmail: ""}
    }

    showOtherData = () =>
    {
        this.setState({isOtherData: !this.state.isOtherData});
    }

    getInputName = (e) =>
    {
        this.setState({newName: e.target.value})
    }

    getInputEmail = (e) =>
    {
        this.setState({newEmail: e.target.value})
    }

    sendData = () =>
    {
        let obj = {id: this.props.user.id, newName: this.state.newName, newEmail: this.state.newEmail}
        this.props.callbackSave(obj);
    }

    deleteUser = () => 
    {
        this.props.callbackDelete(this.props.user.id);
    }
    render()
    {
        let styleName = this.props.user.todos.some(item => !item.completed) ? "redBorderComp" : "greenBorderComp";
        let addressComp;            
        if (this.state.isOtherData)
        {
            addressComp = <Address address = {this.props.user.address} />
        }

        return (
            <div className = {styleName}>
                ID: &nbsp; {this.props.user.id}<br></br>
                Name: <input className = "inputText" type = "text" defaultValue = {this.props.user.name} onChange = {this.getInputName} />
                <br/>

                Email: <input className = "inputText" type = "text"  defaultValue = {this.props.user.email} onChange = {this.getInputEmail} /> 
                <br></br>
                <br></br>

                <input type = "button" className = "grayButton" value = "Other Data" onClick = {this.showOtherData}/>
                
                  {addressComp}
                
                &nbsp; &nbsp;
                <input type = "button" className = "yellowButton" value = "Update" onClick = {this.sendData} />
                &nbsp;&nbsp;
                <input type = "button" className = "yellowButton" value = "Delete" onClick = {this.deleteUser} />
            </div>
        )
    }
}

export default User;