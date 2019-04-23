import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/product/form';
import ProductList from './components/product/list';
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
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/new-product">New Product</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Route path="/new-product" exact component={ProductForm} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/product/:id" exact component={ProductView} />
            <Route path="/edit/product/:id" exact component={ProductForm} />
        </BrowserRouter>
    );
  }
}

export default App;
