// import "./styles.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function App() {
  const [data, setData] = useState([]);

  const page = React.useRef(0);
  const load = React.useRef(false);

  const setLoad = (val) => (load.current = val);

  const loadData = async () => {
    setLoad(true);
    let newRecord = await fetchData(page.current + 1);
    if (newRecord) page.current++;
    setLoad(false);
    setData((pre) => [...pre, ...newRecord]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      {/* <button onClick={() => setPage((pev) => pev + 1)}> */}
      <button disabled={load.current} onClick={loadData}>
        {page.current === 1 ? 'Fetch' : 'Load More...'}
      </button>
      {data?.map((d) => {
        console.log('object');
        return <Line d={d} key={d.phone} />;
      })}
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

const Line = React.memo(({ d }) => {
  console.log('Line ', d.phone);
  return (
    <React.Fragment>
      <div>{`${d.phone}`}</div>
      {/* <div>{`${d.name.title} ${d.name.first} ${d.name.last}`}</div> */}
      <hr />
    </React.Fragment>
  );
});
