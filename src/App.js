import React, { Component } from 'react';
import './app.css';
import List from './Components/list';

const baseState = [{
  name:'Плюмбус', 
  color:'Синий',
  price:'$10.00', 
  check: false
},
{
  name:'Портальная пушка', 
  color:'Зелёный',
  price:'$666.00', 
  check: false
},
{
  name:'Степлер', 
  color:'Чёрный',
  price:'$1.00', 
  check: false
},
{
  name:'Чипсы', 
  color:'Жёлтый',
  price:'$15.00', 
  check: false
}]
class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1 className='title'>Список товаров</h1>
        </header>
        <div className='app_container'>
          <List data={baseState}/>
        </div>
      </div>
    );
  }
}

export default App;
