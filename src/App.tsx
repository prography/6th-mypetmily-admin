import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';
import HotelList from './pages/hotels';
import HotelNew from './pages/hotels/new';
import HotelEdit from './pages/hotels/edit';

function App() {
  return (
    <Main>
      <Switch>
        <Route exact path="/" render={() => <h3>Home</h3>} />
        <Route exact path="/users" render={() => <h3>User</h3>} />
        <Route exact path="/hotels" component={HotelList} />
        <Route exact path="/hotels/new" component={HotelNew} />
        <Route exact path="/hotels/edit/:id" component={HotelEdit} />
        {/*<Route exact path="/hotels/:id" component={HotelList} />*/}
      </Switch>
    </Main>
  );
}

export default App;
