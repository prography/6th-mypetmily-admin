import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <h3>Home</h3>} />
      <Route exact path="/intro" render={() => <h3>소개</h3>} />
    </Router>
  );
}

export default App;
