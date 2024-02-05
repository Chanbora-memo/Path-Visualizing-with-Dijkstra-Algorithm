import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <footer>Made with love <span role="img" aria-label="heart">💗</span></footer>
    </div>
  );
}

export default App;
