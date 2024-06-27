import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../../utils/mockApi';
import './index.css'; // Import CSS file for styling

class BlogPostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    const posts = getPosts();
    this.setState({ posts });
  }

  handleDelete = (id) => {
    deletePost(id);
    this.loadPosts();
  };

  render() {
    const { posts } = this.state;

    return (
      <>
      <Link to="/">
      <div className="blog-post-list">
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h2>
              <p>{post.summary}</p>
              <p>{post.author} - {post.publicationDate}</p>
              <button onClick={() => this.handleDelete(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <Link to="/add" className="add-new-link">Add New Post</Link>
      </div>
      </Link>
      </>
    )
  }
}

export default BlogPostList;