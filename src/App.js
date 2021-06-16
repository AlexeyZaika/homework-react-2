import React from 'react';
import './App.css';
import Article from './components/Article';
import Article2 from './components/Article2';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Task №1</h1>
        <Article />
        <h2 className="title">Task №2</h2>
        <Article2 />
      </div>
    </div>
  );
}

export default App;
