import React, {Component} from 'react';
import "./Proj.css";

class AddTaskComp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {title: "", isAdded: false, isGoBack: false};
    }

    getTitle = (e) =>
    {
        this.setState({title: e.target.value})
    }

    sendTask = () =>
    {
        this.props.callbackAddTask(this.props.id, this.state.title)
        this.setState({isAdded: !this.state.isAdded})
    }

    goToAddTask = () =>
    {
        this.setState({isAdded: !this.state.isAdded});
    }

    goBack = () =>
    {
        this.props.callbackGoBack();
    }

    render()
    {
        if (this.state.isAdded)
        {
            return  <div className = "todosComp" style = {{height: "100px"}}>
                        Task Was Added Successfully
                        <input type = "button"  className = "yellowButton" value = "Back" 
                                                style = { {float: "right"}} onClick = {this.goToAddTask} />
                    </div>
        }

     
        return (
       <div> 
            New Todo - User {this.props.id}  
            <br/> 
                <div className = "todosComp" style = {{height: "100px"}}>
                    Title: <input type = "text" onChange = {this.getTitle}/>
                    <br></br>
                  
                        <input type = "button"  className = "yellowButton" value = "Add" 
                                                style = {{float: "right"}} onClick = {this.sendTask} /> 
                        <input type = "button"  className = "yellowButton" value = "Cancel" 
                                                style = {{float: "right"}} onClick = {this.goBack} />
                 
                </div>
            
        </div>    
        )
    }
}

export default AddTaskComp;