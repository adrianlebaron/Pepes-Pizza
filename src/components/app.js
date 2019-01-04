import React, { Component } from 'react';
import Home from './chelsi-home';
// import About from './about';
import SignIn from './auth/signin';
import SignUp from './auth/signup';

export default class App extends Component {
  render() {
    return (
      <div className='layout-grid'>
      <h1> </h1>
      <div>
        <SignIn />
      </div>
      <div>
        <SignUp />
      </div>
       
      </div>
    );
  }
}
