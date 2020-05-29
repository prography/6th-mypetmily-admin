import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './layouts/Main';
import HotelList from './pages/hotels';

function App() {
  return (
    <Main>
      <Router>
        <Route exact path="/" render={() => <h3>Home</h3>} />
        <Route exact path="/intro" render={() => <h3>소개</h3>} />
        <Route exact path="/hotels" component={HotelList} />
      </Router>
    </Main>
  );
}

export default App;
