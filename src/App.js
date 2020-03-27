import React from 'react';
import './App.css';
import GameBoard from './MasterMind/GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MASTERMIND</h1>
      </header>
      <section className="App-container">
        <GameBoard />
      </section>
    </div>
  );
}

export default App;
