import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPost from './components/BlogPost/BlogPost';
import AddEditPost from './components/AddEditPost/AddEditPost';
import './App.css';

const App = () => (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={BlogPostList} />
          <Route exact path="/post/:id" component={BlogPost} />
          <Route exact path="/add" component={AddEditPost} />
          <Route exact path="/edit/:id" component={AddEditPost} />
        </Routes>
      </BrowserRouter>
    </div>
  )

export default App;
