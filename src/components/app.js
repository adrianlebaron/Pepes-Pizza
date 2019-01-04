import React, { Component } from 'react';
import About from './about';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <About />
      </div>
    );
  }
}
