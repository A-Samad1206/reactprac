import React, { useState } from 'react';
import { storage, db } from './firebase';
import data from './data';
const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  console.log('data', data[1]);
  const handleChange = async (e) => {
    console.log('r', e.target.files);
    if (e.target.files[0]) {
      // const blob = await e.target.files[0].blob();
      // console.log('object', blob);
      setImage(e.target.files[0]);
    }
  };

  // const handleUpload = () => {
  //   console.log('Image', image);
  // };
  const handleUploaddd = () => {
    // Add a new document with a generated id.
    db.collection('products')
      .add(data[index])
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };
  const productRef = db.collection('products');
  const createProduct = async () =>
    productRef
      .add(data[index])
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        return docRef.id;
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  const handleUpload = async () => {
    let proId = await createProduct();

    const createdProductRef = productRef.doc(proId);
    const task = storage.ref(`product/${proId}`).put(image);
    const taskProgress = (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    };
    const taskError = (error) => {
      console.log(error);
    };
    const taskCompleted = () => {
      storage
        .ref('product')
        .child(proId)
        .getDownloadURL()
        .then((url) => {
          setUrl(url);
          createdProductRef
            .update({
              img: url,
            })
            .then(() => {
              console.log('Ok created');
            });
        });
    };
    task.on('state_changed', taskProgress, taskError, taskCompleted);
  };
  // const uploadImage = async () => {
  //   try {
  //     const childPath = `post/${'vckjhnerfvnrefvierfviohneiof'}/${Math.random().toString(
  //       36
  //     )}`;

  //     const response = await fetch(uri);

  //     const blob = await response.blob();

  //     const task = firebase.storage().ref().child(childPath).put(blob);
  //     const taskProgress = (snapshot) =>
  //       console.log(`transferred: ${snapshot.bytesTransferred}`);

  //     const taskCompleted = async () => {
  //       const url = await task.snapshot.ref.getDownloadURL();
  //       savePost(url);
  //     };

  //     const taskError = (snapshot) =>
  //       console.log('Snapshot error', snapshot, 'snapshot error');

  //     task.on('state_changed', taskProgress, taskError, taskCompleted);
  //   } catch (err) {
  //     console.log('Unable to save image', err);
  //     //   props.navigation.popToTop();
  //   }
  // };

  // console.log('image: ', image);

  return (
    <div>
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter index......."
        value={index}
        onChange={(e) => setIndex(e.target.value)}
      />
      <br />
      <br />
      <input type="file" onChange={handleChange} multiple />
      <button onClick={() => image && handleUpload()}>Upload</button>
      <br />
      {url}
      <br />
      <img src={url || 'http://via.placeholder.com/300'} alt="firebase-image" />
    </div>
  );
};
export default ReactFirebaseFileUpload;
