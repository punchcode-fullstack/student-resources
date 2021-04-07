import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListView from './ListView'
import DetailView from './DetailView'
import RequestExample from './RequestExample'
import Broken from './broken/Broken'
import Component from './Component'
import ComplexComponent from './ComplexComponent'
import Nav from './Nav'

const NotFound = () => <h2>not found</h2>

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Link to="/async">Go to RequestExample</Link> */}
        <Switch>
          <Route exact path="/" component={ListView}></Route>
          <Route path="/product/:id" component={DetailView}></Route>
          <Route path="/async" component={RequestExample}></Route> 
          <Route path="/broken" component={Broken}></Route> 
          <Route path="/component" component={Component}></Route> 
          <Route path="/complex" component={ComplexComponent}></Route> 
          <Route path="/other-way/:id">
            <Component />
          </Route> 
          <Route path="*" component={NotFound}></Route> 
        </Switch>
      </div>
    </Router>
  );
}