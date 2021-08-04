import { IMAGES } from '../constants';
import { takeEvery, put } from 'redux-saga/effects';
function* handleImagesLoad() {
  console.log('handleImagesLoad workerSaga');
}
function* handleDang() {
  console.log('handleDang');
}
//watcher sagae
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
  yield takeEvery('DANG', handleDang);
}

export default rootSaga;
