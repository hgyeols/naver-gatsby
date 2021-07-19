import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const AudioWrapper = styled('div')`
  height: 58px;
  width: 372px;
  background: #fafafa;
  margin-bottom: 2px;
  margin-top: 16px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;

  font-family: 'SF Pro Text';
  color: #424242;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  display: flex;

  .controls {
    padding: 0 14px;
    display: grid;
    grid-template-columns: 32px 102px 168px 42px;

    > * {
      align-items: center;
      display: flex;
    }

    .play-container {
      justify-content: center;
    }

    .timeline {
      background: #e2e2e2;
      border-radius: 4px;
      width: 168px;
      height: 4px;
      display: flex;
      justify-content: flex-start !important;
      position: relative;
      cursor: pointer;
      align-self: center;
      .progress {
        background: #424242;
        border-radius: 4px;
        width: 0%;
        height: 100%;
        transition: 0.25s;
      }
    }

    .toggle-play {
      cursor: pointer;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;

      .play-button {
        display: block;
        padding: 2px 0 0 1px;
      }

      .pause-button {
        display: none;
        padding: 2px 0 0 0;
      }
    }

    .toggle-play:hover {
      background-color: #f1f1f1;
      border-radius: 50%;
    }

    .time {
      display: flex;
      padding-left: 10px;

      > * {
        padding: 2px;
      }
    }
    .volume-container {
      cursor: pointer;
      padding-left: 10px;

      .volume-button {
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .volume-button:hover {
        background-color: #f1f1f1;
        border-radius: 50%;
      }

      .volume-button-mute {
        padding-top: 1px;
        display: none;
      }

      .volume-button-on {
        padding-top: 1px;
        display: block;
      }

      position: relative;
      z-index: 2;

      .volume-slider {
        position: absolute;
        left: -3px;
        top: 18px;
        z-index: -1;
        width: 0;
        height: 16px;
        background: #e2e2e2;
        transition: 0.25s;
        border: 6px solid #414141;
        border-radius: 10px;

        .volume-percentage {
          background: #414141;
          height: 100%;
          width: 75%;
        }
      }
      &:hover {
        .volume-slider {
          left: -90px;
          width: 80px;
        }
      }
    }
  }
`;

const SoundEmbed = (props) => {
  useEffect(() => {
    const audioPlayer = document.getElementById(props.id ? 'audio' + props.id : 'audio0');
    const audio = new Audio(props.link);

    if (audioPlayer !== null) {
      audio.addEventListener(
        'loadeddata',
        () => {
          audioPlayer.querySelector('.time .length').textContent = getTimeCodeFromNum(
            audio.duration
          );
          audio.volume = 0.75;
        },
        false
      );

      const timeline = audioPlayer.querySelector('.timeline');
      timeline.addEventListener(
        'click',
        (e) => {
          const timelineWidth = window.getComputedStyle(timeline).width;
          const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
          audio.currentTime = timeToSeek;
        },
        false
      );

      // const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
      // volumeSlider.addEventListener('click', e => {
      //   const sliderWidth = window.getComputedStyle(volumeSlider).width;
      //   const newVolume = e.offsetX / parseInt(sliderWidth);
      //   audio.volume = newVolume;
      //   audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
      // }, false)

      setInterval(() => {
        const progressBar = audioPlayer.querySelector('.progress');
        progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
        audioPlayer.querySelector('.time .current').textContent = getTimeCodeFromNum(
          audio.currentTime
        );
      }, 500);

      const playBtn = audioPlayer.querySelector('.controls .toggle-play');
      playBtn.addEventListener(
        'click',
        () => {
          const playButton = audioPlayer.querySelector('.toggle-play .play-button');
          const pauseButton = audioPlayer.querySelector('.toggle-play .pause-button');
          if (audio.paused) {
            pauseButton.style.display = 'block';
            playButton.style.display = 'none';
            audio.play();
          } else {
            pauseButton.style.display = 'none';
            playButton.style.display = 'block';
            audio.pause();
          }
        },
        false
      );

      audioPlayer.querySelector('.volume-button').addEventListener('click', () => {
        const volumeOn = audioPlayer.querySelector('.volume-container .volume-button-on');
        const volumeMute = audioPlayer.querySelector('.volume-container .volume-button-mute');
        audio.muted = !audio.muted;
        if (audio.muted) {
          volumeOn.style.display = 'none';
          volumeMute.style.display = 'block';
        } else {
          volumeOn.style.display = 'block';
          volumeMute.style.display = 'none';
        }
      });
    }
  }, []);

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  }

  return (
    <AudioWrapper id={props.id ? 'audio' + props.id : 'audio0'}>
      <div className="controls">
        <div className="play-container">
          <div className="toggle-play">
            <div className="play-button">
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.25 0.0396729V10.0397L8.9105 5.03917L0.25 0.0396729Z"
                  fill="#131313"
                />
              </svg>
            </div>
            <div className="pause-button">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.10175 10.5H5.10175V1.5H2.10175V10.5Z"
                  fill="#131313"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.10168 10.5H10.1017V1.5H7.10168V10.5Z"
                  fill="#131313"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="time">
          <div className="current">0:00</div>
          <div className="divider">/</div>
          <div className="length"></div>
        </div>
        <div className="timeline">
          <div className="progress"></div>
        </div>
        <div className="volume-container">
          <div className="volume-button">
            <div className="volume-button-on">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5834 6.16728C11.5834 4.64028 10.6519 3.25578 9.25189 2.67053V3.49953C10.2129 4.02753 10.8334 5.05028 10.8334 6.16728C10.8334 7.28378 10.2129 8.30628 9.25189 8.83478V9.66378C10.6519 9.07803 11.5834 7.69353 11.5834 6.16728Z"
                  fill="#131313"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.25183 5.28517C9.03958 4.88767 8.69033 4.56717 8.25183 4.40417V5.24892C8.54308 5.45817 8.72683 5.79792 8.72683 6.16717C8.72683 6.53617 8.54308 6.87567 8.25183 7.08467V7.92967C8.69033 7.76692 9.03958 7.44642 9.25183 7.04917C9.39433 6.78192 9.47683 6.48142 9.47683 6.16717C9.47683 5.85292 9.39433 5.55192 9.25183 5.28517Z"
                  fill="#131313"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.50177 0.845581L3.03602 3.34533H0.50177V8.84533H3.03602L7.50177 11.3458V0.845581Z"
                  fill="#131313"
                />
              </svg>
            </div>
            <div className="volume-button-mute">
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.51837 0.595825L3.05262 3.34583H0.518372V9.09583H1.54837L7.51837 3.12583V0.595825Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.51842 5.0021L10.5269 1.95835L9.99667 1.4281L7.62717 3.79785V3.7961L2.36467 9.05885H2.36642L0.834167 10.5909L1.09917 10.8559L1.36442 11.1211L3.33042 9.1551L7.51842 11.5959V5.0021Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          {/* <div className="volume-slider">
            <div className="volume-percentage"></div>
          </div> */}
        </div>
      </div>
    </AudioWrapper>
  );
};

export default SoundEmbed;
