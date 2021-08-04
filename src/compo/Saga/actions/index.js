import { IMAGES } from '../constants';
const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});
const setError = (err) => ({
  type: IMAGES.LOAD_FAIL,
  error: err,
});
export { loadImages, setImages, setError };
