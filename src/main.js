import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import Goods from './components/Goods.jsx';
import Product from './components/Product.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/home' component={HomePage} />
        <Route path='/goods' component={Goods}>
            <Route path='/goods/products/:productId' component={Product} />
        </Route>
      </Route>
    </Router>,
    document.getElementById('mount-point')
);
