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
        <Route exact path="/" element={<BlogPostList />} />
        <Route exact path="/post/:id" element={<BlogPost />} />
        <Route exact path="/add" element={<AddEditPost />} />
        <Route exact path="/edit/:id" element={<AddEditPost />} />
      </Routes>
    </Router>
  </div>
)

export default App;