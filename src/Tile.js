import React from 'react';

export default function Tile({ name, keyTrigger, keyCode }) {
  return (
    <div className="drum-pad" id={name}>
      <h4 className="name">{name}</h4>
      <p className="key-trigger">{keyTrigger}</p>
    </div>
  );
}
