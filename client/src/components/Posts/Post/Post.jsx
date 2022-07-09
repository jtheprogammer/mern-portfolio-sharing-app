import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { ThumbUpAlt, Clear, MoreHoriz } from "@mui/icons-material";
import moment from "moment";
import { useDispatch } from "react-redux"
import { deletePost } from '../../../api';

import useStyles from "./styles"

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    <div className={classes.overlay}>
      <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
    </div>

    <div className={classes.overlay2}>
      <Button size="small" onClick={() => setCurrentId(post._id)}>
        <MoreHoriz htmlColor="white" fontSize="large" />
      </Button>
    </div>
    <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">
        {post.tags.map((tag) => `#${tag} `)}
      </Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
    <Typography className={classes.title} variant="h5" gutterBottom>
      {post.title}
    </Typography>
    <CardContent>
      <Typography 
        variant="body2" color="textSecondary" component="p">
          {post.message}
      </Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" onClick={() => {}}><ThumbUpAlt fontSize="small" /> Like {post.likeCount} </Button>
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><Clear fontSize="small" /> Delete</Button>
    </CardActions>
  </Card>
  )
}

export default Post