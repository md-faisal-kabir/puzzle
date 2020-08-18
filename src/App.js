import React from 'react';
import logo from './logo.svg';
import './App.css';
import movieName from './components/movies'

function App() {
  return (
    <main className="container">
      <h1>Hello World</h1>
      <p>{ movieName }  </p>
    </main>
  );
}

export default App;
