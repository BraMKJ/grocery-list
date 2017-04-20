import React from 'react'
import ShowGroceryList from './containers/ShowGroceryList'
import ShowShoppingCart from './containers/ShowShoppingCart'
import './App.css';

const App = () => (
  <div className="App">
    <ShowGroceryList/>
    <ShowShoppingCart/>
  </div>
)

export default App;
