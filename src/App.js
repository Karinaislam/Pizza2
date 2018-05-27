import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Components/Home/Home';
import OrderSummary from "./Components/OrderSummary/OrderSummary";


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Router>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/orderSummary" component={OrderSummary}></Route>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
