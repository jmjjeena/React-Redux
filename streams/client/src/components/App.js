import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return (
    <div>
      <div>PageTwo</div>
      <button>Click me!</button>
    </div>
  );
};

const PageThree = () => {
  return (
    <div>
      <div>PageThree</div>
      <button>Save</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={PageOne} />
          <Route path="/page" component={PageTwo} />
          <Route path="/page/3" component={PageThree} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
