import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Pizza from './components/Pizza';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';

////////// INITIAL STATES //////////
////////// INITIAL STATES //////////
////////// INITIAL STATES //////////
const initialFormValue = {
  name: '',
  size: '',
  pepperoni: false,
  pepperoncini: false,
  extraCheese: false,
  spinnach: false,
  special: ''
}
const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: false,
  pepperoncini: false,
  extraCheese: false,
  spinnach: false,
  special: '' 
}
const initialOrder = [];
const initialDisabled = true;

const App = () => {
  const [ order, setOrder ] = useState(initialOrder);
  const [ formValues, setFormValues ] = useState(initialFormValue);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);
  console.log(order)
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////

  const getOrders = () => {
    axios.get(`https://reqres.in/api/orders`)
         .then(res => setOrder(res.data.data))
         .catch(err => console.log(err))
  }

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/orders`, newOrder)
         .then(res => setOrder([res.data, ...order]))
         .catch(err => console.log(err)) 
    setFormValues(initialFormValue);
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////

  const inputChange = (name, value) => {
    yup.reach(formSchema, name).validate(value)
        .then(()=>{
            setFormErrors({...formErrors, [name]: ''})
        })
        .catch(err =>{
            setFormErrors({...formErrors, [name]: err.errors[0]})
        })
    setFormValues({
        ...formValues,
        [name]: value
    })
}

const formSubmit = evt => {
  const newOrder = {
      name: formValues.name,
      size: formValues.size,
      toppings: [`pepperoni`, `pepperoncini`, `extraCheese`, `spinnach`].filter(topping => formValues[topping]),
      special: formValues.special
  }
  postNewOrder(newOrder);
}

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////

useEffect(()=>{
  getOrders();
}, [])

useEffect(()=>{
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div>
      <Switch>
       
          {
            order.map(orderInfo => {
              return (
                <Route path='/components/Pizza'>
                  <Pizza key={orderInfo.size} details={orderInfo} />
                </Route>
              )
            })
          }
          
        <Route path='/components/PizzaForm'>
          <PizzaForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
