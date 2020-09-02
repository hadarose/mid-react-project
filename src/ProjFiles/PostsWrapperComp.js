import React, {Component} from 'react';
import "./Proj.css";
import Posts from "./PostsComp";
import AddPostComp from "./AddPostComp";
import MoreInfoBox from "./MoreInfoBox";

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

    goBack = () =>
    {
        this.setState({isAddPost: !this.state.isAddPost});
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
                                callbackAddPost = {this.props.callbackAddNewPost}
                                callbackGoBack = {() => this.goBack()}  />
        }

        return (
          <MoreInfoBox title={`Posts - User ${this.props.id}`} onClick={this.AddPost}>
              {posts}
          </MoreInfoBox>
        )
    }
}

export default TodosWrap;