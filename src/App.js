import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/product/Form';
import ProductList from './components/product/List';
import ProductView from './components/product/View';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink, Switch } from 'react-router-dom';

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
            <Switch>
                <Route path="/new-product" exact component={ProductForm} />
                <Route path="/products" exact component={ProductList} />
                <Route path="/product/:id" exact component={ProductView} />
                <Route path="/edit/product/:id" exact component={ProductForm} />
            <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
