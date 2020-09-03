import React, {Component} from 'react';
import "./Proj.css";

class Posts extends Component
{
    constructor(props)
    {
        super(props);
    }

    
    render()
    {

        return (

            <div className = "todo-item">
                    <div className = "todo-item-info"><b>Title:&nbsp;</b> {this.props.title}</div>
                    <div className = "todo-item-info"><div><b>Body:&nbsp;</b></div><div>{this.props.body}</div></div>
            </div>    
        )
        
    }
}

export default Posts;