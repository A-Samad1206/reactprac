import axios from 'axios';
import React from 'react';

const wrapPromise = (promise) => {
  // Set Initial status
  let status = 'pending';
  // Store Result
  let result;
  // Wait for promise

  let suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'Error';
      result = err;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

const fetchUser = async () => {
  console.log('Fetching User');
  // const { data } = await axios.get(
  //   'https://jsonplaceholder.typicode.com/users'
  // );
  // return data;

  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
    .catch((err) => console.log('Err From Fetch User', err));
};
const fetchPost = async () => {
  console.log('Fetching Posts');
  // const { data } = await axios.get(
  //   'https://jsonplaceholder.typicode.com/posts'
  // );
  // return data;

  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
    .catch((err) => console.log('Err From Fetch Posts', err));
};
const fetchData = () => {
  const userPromise = fetchUser();
  const poostPromise = fetchPost();
  return {
    user: wrapPromise(userPromise),
    post: wrapPromise(poostPromise),
  };
};

const Api = () => {
  console.log(fetchUser());
  return <div>Api</div>;
};

export default Api;

export { fetchData };
