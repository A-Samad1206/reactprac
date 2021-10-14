// import "./styles.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loadData = async () => {
    let data = await fetchData(page);
    // let data = await fetchData(page + 1);

    if (data) setPage((prev) => prev + 1);

    setData((prev) => [...data, ...prev]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="App">
      {/* <button onClick={() => setPage((pev) => pev + 1)}> */}
      <button onClick={loadData}>
        {page === 1 ? 'Fetch' : 'Load More...'}
      </button>
      {data?.map((d) => (
        <React.Fragment key={d.phone}>
          <div>{`${d.name.title} ${d.name.first} ${d.name.last}`}</div>
          <hr />
        </React.Fragment>
      ))}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
const fetchData = async (page) => {
  const url = `https://randomuser.me/api?page=${page}`;
  try {
    const {
      data: { results },
    } = await axios.get(url);
    return results;
  } catch (err) {
    console.error(err);
    return false;
  }
};
