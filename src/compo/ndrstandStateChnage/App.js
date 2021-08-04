import { useState } from "react";

function App() {
  // const [string, setString] = useState();
  let [num, setNum] = useState(0);
  // const [obj, setObj] = useState({
  //   name: "Abdus Samad",
  //   count:0
  // });
  console.log("Render");
  const inc = () => {
    for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
        setNum(num + 1); //Except this all three below work same and right.
        // setNum(num++);
        // setNum(++num);
        // setNum((prev) => prev + 1);
      }
      // num % 2 !== 0 && setNum(num++);
    } // setNum()
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>State:-</h2>
      <h3>{num}</h3>
      <button onClick={inc}>Increment</button>
      <hr />
    </div>
  );
}

export default App;
