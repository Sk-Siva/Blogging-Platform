import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPost from './components/BlogPost/BlogPost';
import AddEditPost from './components/AddEditPost/AddEditPost';
import './App.css';

const App = () => (
  <div>
    <Router basename="Blogging-Platform">
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/add" element={<AddEditPost />} />
        <Route path="/edit/:id" element={<AddEditPost />} />
      </Routes>
    </Router>
  </div>
)

export default App;