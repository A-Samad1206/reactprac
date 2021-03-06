import React from 'react';
import BookLists from './components/BookLists';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import AddBook from './components/AddBook';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookLists />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
