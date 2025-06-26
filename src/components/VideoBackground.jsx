// src/components/VideoBackground.jsx
import React from 'react';
import './VideoBackground.css';

function VideoBackground({ theme }) {
  // Klucz `key={theme}` jest ważny, aby React przeładował komponent <video> 
  // przy zmianie motywu, zamiast tylko próbować zmienić jego źródło.
  return (
    <div className="video-background">
      <video key={theme} autoPlay loop muted playsInline>
        <source src={theme === 'light' ? '/light.mp4' : '/dark.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;