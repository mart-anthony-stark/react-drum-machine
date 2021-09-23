import React, { useState, useEffect } from 'react';

export default function Tile({ name, keyTrigger, keyCode, url }) {
  function playSound() {
    const audioTag = document.getElementById(keyTrigger);
    audioTag.currentTime = 0;
    audioTag.play();
    console.log(keyTrigger);
  }
  return (
    <div className="drum-pad" id={name} onClick={playSound}>
      <audio src={url} id={keyTrigger} className="clip" />
      <h4 className="name">{name}</h4>
      <p className="key-trigger">{keyTrigger}</p>
    </div>
  );
}
