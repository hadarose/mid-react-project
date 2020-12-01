import React, { Component } from "react";
import "../Proj.css";

class Todos extends Component {
  constructor(props) {
    super();
  }

  markTaskComplete = () => {
    this.props.callbackComplete(this.props.userId, this.props.taskId);
  };

  render() {
    let markComplete;

    if (this.props.status === "False") {
      markComplete = (
        <input
          type="button"
          className="yellowButton"
          value="Mark Completed"
          onClick={this.markTaskComplete}
        />
      );
    }

    return (
      <div className="todo-item">
        <div className="todo-item-info">
          <b>Title:&nbsp;</b> {this.props.title}
        </div>
        <div className="todo-item-info">
          <div>
            <b>Completed:&nbsp;</b>
          </div>
          <div>{this.props.status}</div>
        </div>
        <div style={{ textAlign: "right" }}>{markComplete}</div>
      </div>
    );
  }
}

export default Todos;
