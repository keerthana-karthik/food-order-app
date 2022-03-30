import React, { Component } from 'react';
import logo from './logo.svg';
import appclasses from './App.css';
import MainContainer from './containers/main-container/MainContainer';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/holistix-kitchen">
        <div>
          <MainContainer></MainContainer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
