// DOM Queries
const playerContainer = document.querySelector(".player-container");
const audio = document.querySelector("#audio");
const currentTime = document.querySelector("#current-time");
const audioLength = document.querySelector("#audio-length");
const playButton = document.querySelector("#play");
const playButtonSVG = document.querySelector("#play > img");
const rewindButton = document.querySelector("#rewind");
const forwardButton = document.querySelector("#forward");
const speedButton = document.querySelector("#speed");
const progressBar = document.querySelector(".progress-bar");
const progressBackground = document.querySelector(".progress-background");

// Helper Functions
const loadSong = () => {
  audioLength.innerHTML = convertTime(audio.duration);
};

const convertTime = (time) => {
  let minutes = Math.floor(time / 60);
  if (minutes < 10) {
    minutes = `${minutes}`;
  }

  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${String(minutes)}:${String(seconds)}`;
};

const pauseAudio = () => {
  console.log("pausing audio");

  playerContainer.classList.remove("playing");
  playButtonSVG.src = `images/play.svg`;
  audio.pause();
};

const playAudio = () => {
  console.log("playing audio");

  playerContainer.classList.add("playing");
  playButtonSVG.src = `images/pause.svg`;
  audio.play();
};

const windAudio = (interval) => {
  console.log(`winding playback by ${interval} seconds`);
  audio.currentTime += Number(interval);
};

const updateProgress = (e) => {
  const { currentTime: time, duration } = e.srcElement;
  const progressBarWidth = (time / duration) * 100;
  progressBar.style.width = `${progressBarWidth}%`;
  currentTime.innerHTML = convertTime(time);

  if (time === duration) {
    playButtonSVG.src = `images/play.svg`;
  }
};

const setProgress = (e) => {
  const width = progressBackground.offsetWidth;
  const clickedPosition = e.offsetX;

  audio.currentTime = (clickedPosition / width) * audio.duration;
};

const setSpeed = () => {
  const currentSpeed = Number(speedButton.innerHTML.split("x")[0]);

  switch (currentSpeed) {
    case 1:
      console.log("CHANGING SPEED TO 2X");
      speedButton.innerHTML = "2x";
      audio.playbackRate = 2;
      return;
    case 2:
      console.log("CHANGING SPEED TO 2X");
      speedButton.innerHTML = "0.5x";
      audio.playbackRate = 0.5;
      return;
    default:
      speedButton.innerHTML = "1x";
      audio.playbackRate = 1;
  }
};

// Event Listeners
playButton.addEventListener("click", () => {
  const isPlaying = playerContainer.classList.contains("playing");

  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

speedButton.addEventListener("click", setSpeed);

forwardButton.addEventListener("click", () => windAudio(15));

rewindButton.addEventListener("click", () => windAudio(-15));

audio.addEventListener("timeupdate", updateProgress);
progressBackground.addEventListener("click", setProgress);

// load song
loadSong();
