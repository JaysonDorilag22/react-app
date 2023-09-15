import React from 'react'
import { Container, Typography, Link } from '@mui/material';
const PostList = ({ post }) => {

    return (
        <Container maxWidth="sm">
            <Link href={`/posts/${post.id}`} underline="hover">
            <Typography variant="h1" gutterBottom sx={{ color: 'red' }} component="h2">
                {post.title}
            </Typography>
            </Link>

            <Typography variant="body1">{post.content}</Typography>


        </Container>
    )
}

export default PostList