import React from 'react';
import './App.css';
import GameBoard from './MasterMind/GameBoard';
import Rules from './MasterMind/Rules';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MASTERMIND</h1>
      </header>
      <section className="App-container">
        <GameBoard />
        <br /><br /><hr/><br /><br />
        <Rules/>
      </section>
      <footer className="App-footer">
      Create with &hearts; by - <a target="_blank" href="http://www.sandeepchaudhary.com">Sandeep Chaudhary</a>
      </footer>
    </div>
  );
}

export default App;
