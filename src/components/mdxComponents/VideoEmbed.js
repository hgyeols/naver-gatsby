import React from 'react';

const VideoEmbed = ({ link }) => {

  const videoClick = () => {
    let player = document.getElementById('player');
    let hider = document.getElementById('hider');
    let btn = document.getElementById('play');

    if (hider.style.display === "none") {
      hider.style.display="block"
    } else {
      hider.style.display="none"
    }

    if (btn.style.display === "none") {
      btn.style.display="block"
    } else {
      btn.style.display="none"
    }

    if (player.style.display === "block") {
      player.style.display="none"
    } else {
      player.style.display="block"
    }

    player.setAttribute('src', `${link}?autoplay=1`)
  }

  return (
    <div className="videoEmbed">
      <div className="videoWrapper" id="hider" />
      <iframe
        id="player"
        width="828"
        title="Youtube"
        height="465.75"
        src={link}
        frameBorder="0"
        allow="accelerometer"
        allowFullScreen
      ></iframe>
      <button id="play" className="play-btn" onClick={videoClick}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#636363"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.5 22.0793V42.0793L41.821 32.0783L24.5 22.0793Z" fill="white"/>
        </svg>

      </button>
    </div>
  );
};

export default VideoEmbed;