import React, {useEffect, useState}from 'react'
import {useParams} from 'react-router-dom'
import {Container, Typography} from '@mui/material'
import Nav from './Nav'
import axios from 'axios'
const SinglePost = () => {
    var params = useParams();
    var id = params.id;
    const [posts, setPosts] = useState({});
   
      // fetchPosts();
      useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/posts/${id}`).then(response => {
            console.log(response);
            setPosts(response.data);
          })
            .catch(error => {
              alert('Error fetching posts')
              console.log(error)
            });
      }, [id]);
  return (
    <>
    <Nav/>
    <Container>
        
        <Typography variant="h1">{posts.title}</Typography>
        <Typography variant="body1">{posts.content}</Typography>

    </Container>
    </>
  )
}

export default SinglePost