import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <div>PageOne</div>
      <Link to="/pagetwo">Go to Page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <div>PageTwo</div>
      <Link to="/">Go back to Page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
