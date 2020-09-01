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
        
        <div className = "purpleBorderComp">
            <b>Title:</b> {this.props.title}
            <br/>
            <b>Body:</b> {this.props.body}
        </div>  
        )
    }
}

export default Posts;