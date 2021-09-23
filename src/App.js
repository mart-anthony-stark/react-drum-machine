import React, { useState } from 'react';
import Tile from './Tile';
import './style.css';

export default function App() {
  const [, setMarkdown] = useState([{ name: 'snare' }]);

  return (
    <div>
      <div id="drum-machine">
        <div id="display">
          <Tile name="Snare" key="w" />
          <Tile name="Snare" key="w" />
          <Tile name="Snare" key="w" />
          <Tile name="Snare" key="w" />
        </div>
      </div>
    </div>
  );
}
