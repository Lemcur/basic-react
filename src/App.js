import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Create from './components/cruds/Create.js'
import Index from './components/cruds/Index.js'

function App() {
  return (
    <div className="App">
      <Login />
      <Create />
      <Index />
    </div>
  );
}

export default App;
