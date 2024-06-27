import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addPost, updatePost, getPostById } from '../../utils/mockApi';
import './index.css';

const AddEditPost = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [state, setState] = useState({
    title: '',
    author: '',
    content: '',
    publicationDate: '',
  });

  useEffect(() => {
    if (id) {
      const post = getPostById(id);
      if (post) {
        setState({
          title: post.title,
          author: post.author,
          content: post.content,
          publicationDate: post.publicationDate,
        });
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, content, publicationDate } = state;

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

    history.push('/');
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { title, author, content, publicationDate } = state;

  return (
    <div className="addedit-post-list">
     <form className="add-edit-form" onSubmit={handleSubmit}>
      <h1 className='head'>Fill The Details</h1>
      <label>Enter Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
        required
      /> <br/>
      <label>Enter Name</label>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={author}
        onChange={handleChange}
        required
      /> <br/>
      <label>Enter the comment</label>
      <textarea
      rows={5} cols={31}
        name="content"
        placeholder="Content"
        value={content}
        onChange={handleChange}
        required
      /><br/>
      <label>Select Date</label>
      <input
        type="date"
        name="publicationDate"
        value={publicationDate}
        onChange={handleChange}
        required
      /><br/>
      <button  className='newblog-btn' type="submit">{id ? 'Update Post' : 'Add Post'}</button>
    </form>
    </div>
    
  );
};

export default AddEditPost;