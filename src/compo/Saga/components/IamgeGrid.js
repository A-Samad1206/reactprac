import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ImageGrid.css';
import { loadImages } from '../actions';
const url = `https://api.unsplash.com/photos/?client_id=wQ-d2HTqiSpxEw9QwoJqx-1giBxFYPFtJF9f1dKMkig&per_page=30`;
// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
// const url2 = `https://api.unsplash.com/photos/?client_id=${key}&per_page=28`;

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const img = useSelector((state) => state.image);
  console.log('img', img);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadImages());
    fetch(url)
      .then((res) => res.json())
      .then((images) => {
        setImages((pre) => [...pre, ...images]);
      });
  }, [dispatch]);
  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;
