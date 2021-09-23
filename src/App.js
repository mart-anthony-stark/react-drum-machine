import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [, setMarkdown] = useState([
    {name:'snare', }
  ]);

  return (<div>
    <div id="drum-machine">
      <div id="display">

      </div>
    </div>
  </div>);
}
