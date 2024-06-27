import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostById } from '../../utils/mockApi';
import './index.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className='post-background'>
      <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.author} - {post.publicationDate}</p>
      <div>{post.content}</div>
      <Link to={`/edit/${post.id}`} className="edit-link"><button className='btn'>Edit</button></Link>
      <Link to="/" className="back-link"><button className='btn'>Back to List</button></Link>
    </div>
    </div>
  );
};

export default BlogPost;