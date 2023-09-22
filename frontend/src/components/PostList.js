import React from 'react'
import {useNavigate} from 'react-router-dom'
import {getToken} from '../helpers'
import axios from 'axios'
import { Container, Typography, Link, Button } from '@mui/material';
const PostList = ({ post, fetchPost }) => {
    const config = {
        headers:{
          authorization: `Bearer ${getToken()}`
        }
      }
    const deletePost = id => {
        axios.delete(`${process.env.REACT_APP_API}/posts/${id}`,config).then(response => {
            fetchPost();
        }).catch(error => alert('Error deleting post'));
        
    }
    const deleteConfirm = id =>{
        let answer = window.confirm("Are you sure you want to delete this post?");
        if (answer){
            deletePost(id);
        }
    }
    return (
        <>
        <Container maxWidth="lg" sx={{mb:'2rem'}}>
            <Link href={`/posts/${post.id}`} underline="hover">
            <Typography variant="h1" gutterBottom sx={{ color: 'red' }} component="h2">
                {post.title}
            </Typography>
            </Link>

            <Typography variant="body1" sx={{mb:'2rem'}}>{post.content}</Typography>
            <Link href={`/posts/edit/${post.id}`}>
            <Button  variant="contained" color="primary">Edit</Button>
            </Link>
            
            <Button  onClick={()=>deleteConfirm(post.id)} variant="contained" color="error" className="ms-3">Delete</Button>
            
        </Container >
        </>
    )
}

export default PostList