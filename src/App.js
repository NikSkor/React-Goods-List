import React, { Component } from 'react';
import './App.css';
import List from './Components/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='title'>Список товаров</h1>
        </header>
        <div className="container">
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
