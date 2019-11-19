import React from "react";
import { MemoryRouter, Route, Link } from "react-router-dom";

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
      <MemoryRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </MemoryRouter>
    </div>
  );
};

export default App;
