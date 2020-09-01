import React, {Component} from 'react';
import "./Proj.css";

class Todos extends Component
{
    constructor(props)
    {
        super(props);
    }

    markTaskComplete = () =>
    {
        this.props.callbackComplete(this.props.userId, this.props.taskId);
    }
    
    render()
    {
        let markComplete;

        if (this.props.status === "False")
        {
            markComplete = <input type = "button" style = { {float: "right"} } 
                            className = "yellowButton" value = "Mark Completed" onClick = {this.markTaskComplete} />
        }
      
        return (
        
        <div className = "purpleBorderComp">
            <b>Title:</b> {this.props.title}
            <br/>
            <b>Completed:</b> {this.props.status}
            {markComplete}
        </div>  
        )
    }
}

export default Todos;