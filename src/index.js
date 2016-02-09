import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Buttons from './components/button';

class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
      </div>

    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
