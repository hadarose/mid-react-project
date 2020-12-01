import React, { Component } from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";
import MoreInfo from "../Users/MoreInfo";
import "../Proj.css";

class PostsWrap extends Component {
  constructor(props) {
    super(props);
    this.state = { isAddPost: false };
  }

  AddPost = () => {
    this.setState({ isAddPost: !this.state.AddPost });
  };

  goBack = () => {
    this.setState({ isAddPost: !this.state.isAddPost });
  };

  render() {
    let posts = this.props.posts.map((post, index) => {
      return (
        <Posts
          key={index}
          userId={this.props.id}
          taskId={post.id}
          title={post.title}
          body={post.body}
        />
      );
    });

    if (this.state.isAddPost) {
      return (
        <AddPost
          id={this.props.id}
          callbackAddPost={this.props.callbackAddNewPost}
          callbackGoBack={() => this.goBack()}
        />
      );
    }

    return (
      <MoreInfo title={`Posts - User ${this.props.id}`} onClick={this.AddPost}>
        {posts}
      </MoreInfo>
    );
  }
}

export default PostsWrap;
