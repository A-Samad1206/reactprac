import React from 'react';
// import App from './components/UseState';
// import App1 from './components/UseReducer/UseReducer';
// import App from './components/Immutable State/ObjectUseState';
// import App from './components/Immutable State/ArrayUseState';
// import App from './components/Immutable State/ObjectUseReducer';
// import App from './components/Immutable State/ArrayUseReducer';
// import App from './components/Parent Child/Parent';

// import App from './components/Optimization/ParentOne';
// import App from './components/Optimization/OptimizedParentOne';
// import App from './components/Optimization/GrandParent';
import App from './components/Optimization/ParentTwo';
// import App from './components/Incorrect Optimization/ParentThree.js.js';
// import App from './components/Incorrect Optimization/ParentFour';
// import { ContextParent } from './components/Context/ContextParent';
// import { ChildA } from './components/Context/ContextChildren';

function index() {
  return (
    <div className="App">
      {/* <UseState /> */}
      <App />
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      {/* <ArrayUseReducer /> */}
      {/* <Parent /> */}
      {/* <ParentOne /> */}
      {/* <OptimizedParentOne>
        <ChildOne />
      </OptimizedParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      {/* <ContextParent /> */}
      {/* <ContextParent>
        <ChildA />
      </ContextParent> */}
    </div>
  );
}

export default index;
