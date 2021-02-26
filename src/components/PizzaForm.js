import React, { useState, useEffect } from 'react';
import formSchema from '../validation/formSchema';
import * as yup from 'yup';

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

export default function PizzaForm(props){
    const [ order, setOrder ] = useState(initialOrder);
    const [ formValues, setFormValues ] = useState(initialFormValue);
    const [ formErrors, setFormErrors ] = useState(initialFormErrors);
    const [ disabled, setDisabled ] = useState(initialDisabled);

    const change = (name, value) => {
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

    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const formSubmit = () => {
        const newOrder = {
            name: formValues.name,
            size: formValues.size,
            toppings: [`pepperoni`, `pepperoncini`, `extraCheese`, `spinnach`].filter(topping => formValues[topping]),
            special: formValues.special
        }
        setOrder(newOrder)
    }

    useEffect(()=>{
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return (
        <div>
            <div className='nav-section'>
                <h3>Lambda Eats</h3>
                <nav>
                    <a href="/">Home</a>
                    <a href="null">About</a>
                </nav>
            </div>
            <div>
                <h3>Build your own pizza</h3>
                <img/>
            </div>

            <div>
                <h2>Build your own Pizza</h2>
            </div>

            <label>enter your Name
                <input value={formValues.name} onChange={onChange} name='name' type='text' />
            </label>

            <label>Choose a size
                <select onChange={onChange} value={formValues.size} name='size'>
                    <option value=''>Select</option>
                    <option value='small'>small</option>
                    <option value='medium'>medium</option>
                    <option value='large'>large</option>
                    <option value='extraLarge'>extra large</option>
                </select>
            </label>

            <div className='checkboxes'>
                <h4>add toppings</h4>

                <label>pepperoni
                    <input type='checkbox' name='pepperoni' onChange={onChange} checked={formValues.pepperoni} />
                </label>
                <label>pepperoncini
                    <input type='checkbox' name='pepperoncini' onChange={onChange} checked={formValues.pepperoncini} />
                </label>
                <label>extraCheese
                    <input type='checkbox' name='extraCheese' onChange={onChange} checked={formValues.extraCheese} />
                </label>
                <label>spinnach
                    <input type='checkbox' name='spinnach' onChange={onChange} checked={formValues.spinnach} />
                </label>
            </div>

            <label>special instructions
                <input type='text' name='special' value={formValues.special} onChange={onChange} />
            </label>

        </div>
    )
}