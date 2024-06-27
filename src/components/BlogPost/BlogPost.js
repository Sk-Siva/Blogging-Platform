import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { getPostById } from '../../utils/mockApi';
import './index.css'; // Import CSS file for styling

class BlogPost extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadData();
    }
  }

  loadData() {
    const { id } = this.props.match.params;
    const post = getPostById(id);
    this.setState({ post });
  }

  render() {
    const { post } = this.state;
    if (!post) {
      return <p>Post not found</p>;
    }

    return (
      <div className="post-container">
        <h1>{post.title}</h1>
        <p>{post.author} - {post.publicationDate}</p>
        <div>{post.content}</div>
        <Link to={`/edit/${post.id}`} className="edit-link">Edit</Link>
        <Link to="/" className="back-link">Back to List</Link>
      </div>
    );
  }
}

export default BlogPost;