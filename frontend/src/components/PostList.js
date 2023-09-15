import React from 'react'
import { Container, Typography } from '@mui/material';
const PostList = ({ post }) => {

    return (
        <Container maxWidth="sm">

            <Typography variant="h1" gutterBottom sx={{ color: 'red' }} component="h2">
                {post.title}
            </Typography>

            <Typography variant="body1">{post.content}</Typography>


        </Container>
    )
}

export default PostList