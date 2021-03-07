import React, { Component } from 'react';
import './App.css';

import MainHead from './main/MainHead';
import MainBody from './main/MainBody';
import MainFooter from './main/MainFooter';

class App extends Component {
  render() {
    return (
      <div>
        <MainHead/>
        <MainBody/>
        <MainFooter/>
      </div>
    );
  }
}

export default App;
