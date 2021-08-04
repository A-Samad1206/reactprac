import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const url = `https://api.unsplash.com/photos/random?client_id=wQ-d2HTqiSpxEw9QwoJqx-1giBxFYPFtJF9f1dKMkig&count=30`;
const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setImages(res.data));
  }, []);
  const pri = () => {
    for (const image in images) {
      console.log('image', image);
    }
  };
  // images && pri();

  console.log('images', images);
  return (
    <div>
      {images.length &&
        images.map((imgs) => {
          return (
            <LazyLoadImage
              effect="blur"
              key={imgs.id}
              alt={imgs.urls._description}
              src={imgs.urls.regular}
              width="200"
              style={{ margin: '20px' }}
            />
          );
        })}
    </div>
  );
};

export default App;
