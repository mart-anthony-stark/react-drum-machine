import React, { useState, useEffect } from 'react';

export default function Tile({ name, keyTrigger, keyCode, url }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == keyCode) playSound();
    });
    return () => {
      document.removeEventListener('keydown', () => (e) => {
        if (e.keyCode == keyCode) playSound();
      });
    };
  }, []);

  function playSound() {
    const audioTag = document.getElementById(keyTrigger);
    const pad = document.getElementById(name);
    audioTag.currentTime = 0;
    audioTag.play();
    setActive(true);
    // setTimeout(setActive(false), 1000);
  }
  return (
    <div
      className={`drum-pad ${active && 'playing'}`}
      id={name}
      onClick={playSound}
    >
      <audio src={url} id={keyTrigger} className="clip" />
      <h4 className="name">{name}</h4>
      <p className="key-trigger">{keyTrigger}</p>
    </div>
  );
}
