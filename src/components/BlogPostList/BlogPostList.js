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
      <Link to="/" className='bloglist'>
      <div className="blog-post-list">
        <h1>Blog Posts Application</h1>
        <Link to="/add" className="add-new-link">
        <button className='newblog-btn'>Add New Blog</button>
        </Link>
        <h2>Recent Blogs</h2>
        <ul className='list-container'>
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="bloglist" to={`/post/${post.id}`}>
              <div className='list'><h2>
                {post.title}
              </h2>
              <p>{post.summary}</p>
              <p>{post.author} - {post.publicationDate}</p>
              <button className='delete-btn' onClick={() => this.handleDelete(post.id)}>Delete</button></div>
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
      </Link>
      </>
    )
  }
}

export default BlogPostList;