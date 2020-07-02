import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Index from './components/cruds/Index.js'

function App() {
  return (
    <div className="App">
      <Login />
      <Index />
    </div>
  );
}

export default App;
