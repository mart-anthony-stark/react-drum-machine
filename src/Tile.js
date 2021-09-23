import React from 'react';

export default function Tile({ name, key }) {
  return (
    <div className="drum-pad" id={name}>
      <h4 className="name">{name}</h4>
      <p className="key">{key}</p>
    </div>
  );
}
