import React, {Component} from 'react';
import TodosWrap from "./TodosWrapperComp";

class MoreInfoBox extends Component {
  render() {
    const {title, onClick, children} = this.props;
    return (
      <div className = "todosComp">
        <div className="more-info-header">
          <div className="more-info-header-title">
            {title}
          </div>
          <div className="more-info-header-buttons">
            <input type = "button" className = "yellowButton" value = "Add" onClick = {onClick} />
          </div>
        </div>
        <div className="more-info-header-content">
          {children}
        </div>
      </div>
    )
  }
}

export default MoreInfoBox;