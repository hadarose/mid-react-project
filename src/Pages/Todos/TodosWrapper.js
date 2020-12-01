import React, { Component } from "react";
import Todos from "./Todos";
import AddTask from "./AddTask";
import MoreInfo from "../Users/MoreInfo";
import "../Proj.css";

class TodosWrap extends Component {
  constructor(props) {
    super();
    this.state = { isAddTask: false };
  }

  AddTask = () => {
    this.setState({ isAddTask: !this.state.AddTask });
  };

  goBack = () => {
    this.setState({ isAddTask: !this.state.isAddTask });
  };

  render() {
    let todos = this.props.todos.map((todo, index) => {
      return (
        <Todos
          key={index}
          userId={this.props.id}
          taskId={todo.id}
          title={todo.title}
          status={todo.completed ? "True" : "False"}
          callbackComplete={this.props.callbackComplete}
        />
      );
    });

    if (this.state.isAddTask) {
      return (
        <AddTask
          id={this.props.id}
          callbackAddTask={this.props.callbackAddTodo}
          callbackGoBack={() => this.goBack()}
        />
      );
    }

    return (
      <MoreInfo title={`Todos - User ${this.props.id}`} onClick={this.AddTask}>
        {todos}
      </MoreInfo>
    );
  }
}

export default TodosWrap;
