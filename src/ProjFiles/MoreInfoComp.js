import React, {Component} from 'react';
import "./Proj.css";

class MoreInfoComp extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
        <div className = "todosComp">
            <div className = "more-info-header">
                <div className = "more-info-header-title">
                    {this.props.title}
                </div>
                    
                <div className = "more-info-header-buttons">
                    <input type = "button" className = "yellowButton" value = "Add" onClick = {this.props.onClick} />
                </div>
            </div> 

            <div className="more-info-header-content">
                    {this.props.children}
            </div>

      </div>)
    }
}

export default MoreInfoComp