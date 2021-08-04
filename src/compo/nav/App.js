import React, { Fragment } from "react";
import Navbar from "./Navbar.js";
function App() {
  return (
    <Fragment>
      <Navbar />
      <div style={{ overflowY: "scroll", height: "800px" }}></div>
    </Fragment>
  );
}

export default App;
