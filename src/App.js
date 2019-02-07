import React, { Component } from 'react';
import './App.css';
import List from './Components/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Список товаров</h1>
        </header>
        <div className="container">
          <p>Huanheeeeey!!!</p>
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
