import React, { Suspense } from 'react';
import Api from './Api';
import { fetchData } from './Api';
const resource = fetchData();
const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading User Datils...</h1>}>
        <ProfileDetails />
      </Suspense>
      <Suspense fallback={<h1>Loading Post Datils...</h1>}>
        <ProfilePost />
      </Suspense>
    </div>
  );
};

const ProfileDetails = () => {
  const user = resource.user.read()[0];
  console.log('user', user);

  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        <li>Username:-{user.username}</li>
        <li>Email:-{user.email}</li>
        {/* <li>City:-{user.address.city}</li> */}
      </ul>
    </div>
  );
};

const ProfilePost = () => {
  const posts = resource.post.read();
  return (
    <ul>
      <li>
        <strong>Latest Posts</strong>
      </li>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default App;
