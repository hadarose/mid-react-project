import React, {Component} from 'react';
import "./Proj.css";

class Address extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isAddress: true}
    }

    render()
    {

        return (
               
        <div className = "blackBorderComp">
            Street: <input className = "inputText" type = "text" defaultValue = {this.props.address.street} />
            <br/>
            City: <input className = "inputText" type = "text" defaultValue = {this.props.address.city} />
            <br/>
            Zipcode: <input className = "inputText" type = "text"  defaultValue = {this.props.address.zipcode} /> 
            <br></br>
        </div>
            
        )
    }
}

export default Address;