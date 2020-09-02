import React, {Component} from 'react';
import "./Proj.css";

class AddTaskComp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {title: "", body: "", isAdded: false};
    }

    getTitle = (e) =>
    {
        this.setState({title: e.target.value})
    }

    getBody = (e) =>
    {
        this.setState({body: e.target.value})
    }

    sendPost = () =>
    {
        this.props.callbackAddPost(this.props.id, this.state.title, this.state.body)
        this.setState({isAdded: !this.state.isAdded})
    }

    goBack = () =>
    {
        this.props.callbackGoBack();
    }

    goToAddPost = () =>
    {
        this.setState({isAdded: !this.state.isAdded});
    }

    render()
    {
        if (this.state.isAdded)
        {
            return  <div className = "todosComp" style = {{height: "100px"}}>
                        Post Was Added Successfully
                        <input type = "button" className = "yellowButton" 
                                            style = {{float: "right"}} 
                                            value = "Back" onClick = {this.goToAddPost}
                                             />
                    </div>
        }

     
        return (
       <div style = { {float: "right"} }> 
            New Post - User {this.props.id}  
            <br/> 
                <div className = "todosComp" style = {{height: "100px"}}>
                    Title: <input type = "text" onChange = {this.getTitle}/>
                    <br></br>

                    Body: <input type = "text" onChange = {this.getBody}/>
                    <br></br>
                    <input type = "button"  className = "yellowButton" style = {{float: "right"}} 
                                            value = "Add" onClick = {this.sendPost} /> &nbsp;
                

                    <input type = "button"  className = "yellowButton" style = {{float: "right"}} 
                                            value = "Cancel" onClick = {this.goBack} />
                </div>
            
        </div>    
        )
    }
}

export default AddTaskComp;