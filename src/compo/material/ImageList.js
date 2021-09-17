import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
    border: '3px solid red',
  },
}));

let itemData = [
  {
    img: 'https://source.unsplash.com/random/800x300',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/random/500x300',
    title: 'Image',
    author: 'author',
    cols: 6,
  },
  {
    img: 'https://source.unsplash.com/random/800x300',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/random/800x300',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/random/800x300',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];
export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
