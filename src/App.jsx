import React from 'react';
import Header from './components/header/header';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Users from './pages/users';
import Posts from './pages/posts';
import UserSingle from './pages/user-single';


function App() {
  return(
    <div className='App container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserSingle />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App;
