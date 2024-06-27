import React, { Component } from 'react';
import { addPost, updatePost, getPostById } from '../../utils/mockApi';
import './index.css';

class AddEditPost extends Component {
  state = {
    title: '',
    author: '',
    content: '',
    publicationDate: '',
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
    const isEditing = Boolean(id);
    if (isEditing) {
      const post = getPostById(id);
      if (post) {
        this.setState({
          title: post.title,
          author: post.author,
          content: post.content,
          publicationDate: post.publicationDate,
        });
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { title, author, content, publicationDate } = this.state;

    const newPost = {
      id: id || Date.now().toString(),
      title,
      author,
      content,
      summary: content.substring(0, 100),
      publicationDate,
    };

    if (id) {
      updatePost(newPost);
    } else {
      addPost(newPost);
    }

    this.props.history.push('/');
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, author, content, publicationDate } = this.state;
    return (
      <form className="add-edit-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={this.handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content}
          onChange={this.handleChange}
          required
        />
        <input
          type="date"
          name="publicationDate"
          value={publicationDate}
          onChange={this.handleChange}
          required
        />
        <button type="submit">{this.props.match.params.id ? 'Update Post' : 'Add Post'}</button>
      </form>
    );
  }
}

export default AddEditPost;