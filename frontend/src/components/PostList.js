import React from 'react'
import { Container, Typography, Link, Button } from '@mui/material';
const PostList = ({ post }) => {

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
        </Container >
        </>
    )
}

export default PostList