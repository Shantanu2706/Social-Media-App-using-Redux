import React from 'react';
import { BrowserRouter, Route, Outlet, Routes } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

import { Navbar } from './app/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={
          <React.Fragment>
            <AddPostForm/>
            <PostsList />
          </React.Fragment>
        } />
          <Route exact path="/posts/:postId" element={<SinglePostPage />} />
          <Route exact path="/editPost/:postId" element={ <EditPostForm/>} />
        </Routes>
        
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
