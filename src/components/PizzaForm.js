import React, { useState, useEffect } from 'react';

export default function PizzaForm(props){
    const { values, submit, change, disabled, errors } = props;

    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }



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
                <img />
            </div>

            <div>
                <h2>Build your own Pizza</h2>
            </div>
            <form className='form-container' onSubmit={onSubmit} >
                
                <label>enter your Name
                    <input value={values.name} onChange={onChange} name='name' type='text' />
                </label>

                <label>Choose a size
                    <select onChange={onChange} value={values.size} name='size'>
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
                        <input type='checkbox' name='pepperoni' onChange={onChange} checked={values.pepperoni} />
                    </label>
                    <label>pepperoncini
                        <input type='checkbox' name='pepperoncini' onChange={onChange} checked={values.pepperoncini} />
                    </label>
                    <label>extraCheese
                        <input type='checkbox' name='extraCheese' onChange={onChange} checked={values.extraCheese} />
                    </label>
                    <label>spinnach
                        <input type='checkbox' name='spinnach' onChange={onChange} checked={values.spinnach} />
                    </label>
                </div>

                <label>special instructions
                    <input type='text' name='special' value={values.special} onChange={onChange} />
                </label>

                <button disabled={disabled}>submit order</button>
                <a href='/components/Pizza'>Go to your order!</a>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </form>
        </div>
    )
}