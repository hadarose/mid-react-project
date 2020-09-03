import React, {Component} from 'react';
import "./Proj.css";
import Todos from "./TodosComp";
import AddTaskComp from "./AddTaskComp";
import MoreInfoComp from './MoreInfoComp';

class TodosWrap extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isAddTask: false}
    }

    AddTask = () =>
    {
        this.setState({isAddTask: !this.state.AddTask});
    }

    goBack = () =>
    {
        this.setState({isAddTask: !this.state.isAddTask});
    }

    render()
    {
        let todos = this.props.todos.map((todo, index) =>
        {
            return <Todos key = {index} userId = {this.props.id} 
                                        taskId = {todo.id}
                                        title = {todo.title} 
                                        status = {todo.completed ? "True" : "False"}
                                        callbackComplete = {this.props.callbackComplete} />
        })

        if (this.state.isAddTask)
        {
            return <AddTaskComp id = {this.props.id} 
                                callbackAddTask = {this.props.callbackAddTodo}
                                callbackGoBack = {() => this.goBack()} />
        }

        return  (
                    <MoreInfoComp title = {`Todos - User ${this.props.id}`} onClick={this.AddTask}>
                        {todos}
                    </MoreInfoComp>
                )
    }
}

export default TodosWrap;