import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Pizza from './components/Pizza';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm'

////////// INITIAL STATES //////////
////////// INITIAL STATES //////////
////////// INITIAL STATES //////////

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/components/Pizza'>
          <Pizza />
        </Route>
        <Route path='/components/PizzaForm'>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
