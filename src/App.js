import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
         {/* Header will be shown on all pages */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
