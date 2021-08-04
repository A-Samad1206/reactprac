import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People.js';
import './index.css';
import { QueryClient, QueryClientProvider, useIsFetching } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const client = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex) => {
        console.log('attemptIndex', attemptIndex);
        const delay = Math.min(1000 * 2 ** attemptIndex, 30000);
        console.log('delay', delay);
        return delay;
      },
    },
  },
});
function App() {
  let [page, setPage] = useState('planets');
  // const isFetching = useIsFetching();

  return (
    <QueryClientProvider client={client}>
      {/* {isFetching ? <div>Queries are fetching in the background...</div> : null} */}
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
