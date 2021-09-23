import React from 'react';

export default function Tile({ name, handleClick, key }) {
  return (
    <div className="tile">
      <h4 className="name">{name}</h4>
      <p className="key">{key}</p>
    </div>
  );
}
