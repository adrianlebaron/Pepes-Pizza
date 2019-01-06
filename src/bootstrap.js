import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
// import Order from './components/order';
import About from './components/about';
import Home from './components/home';
import CheckoutForm from './components/app'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
          <div className="nav-bar">
            <Link to="/">HOME</Link>
            <Link to="/signin">LOGIN</Link>
            <Link to="/signup">SIGNUP</Link>
            {/* <Link to="/order">Order</Link> */}
            <Link to="/about">ABOUT</Link>
            <Link to="/Checkout"><i class="fas fa-shopping-cart"></i></Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/order" component={Order} /> */}
          <Route path="/about" component={About} />
          <Route path="/Checkout" component={CheckoutForm} />
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
