import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Create from './components/cruds/Create.js'

function App() {
  return (
    <div className="App">
      <Login />
      <Create />
    </div>
  );
}

export default App;
