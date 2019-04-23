import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/product/form';
import ProductView from './components/product/view';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/products">Product</NavLink></li>
                        <li><NavLink to="/new-product">New Product</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Route path="/new-product" exact component={ProductForm} />
            <Route path="/products" exact component={ProductView} />
        </BrowserRouter>
    );
  }
}

export default App;
