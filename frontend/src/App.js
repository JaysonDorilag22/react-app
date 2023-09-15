import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Title from './components/Title.js';
import axios from 'axios';

import PostList from './components/PostList';
function App() {
  
  console.log(process.env.REACT_APP_API);
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API}/posts`).then(response => {
      console.log(response);
      setPosts(response.data);
    })
      .catch(error => {
        alert('Error fetching posts')
        console.log(error)
      });
  };
  // fetchPosts();
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  return (

    <div className="App">
      <Nav />
      <Header />
      <Title title="My Post" />
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      {posts.map(post => {
        return (
          <PostList post={post} key={post.id}/>
        )
      })}
      <Footer />
    </div>

  );
}

export default App;
