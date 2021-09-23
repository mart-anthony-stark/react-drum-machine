import React, { useState, useEffect } from 'react';

export default function Tile({ name, keyTrigger, keyCode, url }) {
  return (
    <div className="drum-pad" id={name}>
      <audio src={url} controls />
      <h4 className="name">{name}</h4>
      <p className="key-trigger">{keyTrigger}</p>
    </div>
  );
}
