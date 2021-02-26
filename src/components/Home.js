import React from 'react';


export default function Home(){
    return (
        <div className='container'>
        <div className='nav-section'>
          <h3>Lambda Eats</h3>
          <nav>
            <a href="/">Home</a>
            <a href="null">About</a>
          </nav>
        </div>
  
        <div className='banner'>
          <img></img>
          <h1>Your favorite food while coding</h1>
          <a href="/components/PizzaForm">Pizza?</a>
        </div>
  
        <div className='stores-section'>
          <h4>Food Delivery in fake city</h4>
          <div className='store-info'>
            <img></img>
            <h5>store</h5>
            <p>Description</p>
          </div>
          <div className='store-info'>
            <img></img>
            <h5>store</h5>
            <p>Description</p>
          </div>
          <div className='store-info'>
            <img></img>
            <h5>store</h5>
            <p>Description</p>
          </div>
          <div className='store-info'>
            <img></img>
            <h5>store</h5>
            <p>Description</p>
          </div>
          <div className='store-info'>
            <img></img>
            <h5>store</h5>
            <p>Description</p>
          </div>
          <div className='store-info'>
            <img></img>
            <h5>store</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    )
}