const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelectorAll(".volume-slider input");

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
});
