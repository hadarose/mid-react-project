import React, {Component} from 'react';
import "./Proj.css";
import Posts from "./PostsComp";
import AddPostComp from "./AddPostComp";

class TodosWrap extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isAddPost: false}
    }

    AddPost = () =>
    {
        this.setState({isAddPost: !this.state.AddPost});
    }

    render()
    {
        let posts = this.props.posts.map((post, index) =>
        {
            return <Posts key = {index} userId = {this.props.id} 
                                        taskId = {post.id}
                                        title = {post.title} 
                                        body = {post.body} />
        })

        if (this.state.isAddPost)
        {
            return <AddPostComp id = {this.props.id} 
                                callbackAddPost = {this.props.callbackAddNewPost} />
        }

        return (
        <div className = "todosComp">
            
            Posts - User {this.props.id}
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <input type = "button" className = "yellowButton" value = "Add" onClick = {this.AddPost} />
            <br/>
           {posts}
        </div>

            
        )
    }
}

export default TodosWrap;