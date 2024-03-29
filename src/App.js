import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path = '/home'>
          <Home />
        </Route>
        <Route path = '/dashboard'>
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
