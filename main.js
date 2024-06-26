let pianoKeys = document.querySelectorAll(".keys .key");
let audio = new Audio("tunes/a.wav"); //Default Audio is "a"
let allKeys = [];
let volumeControl = document.querySelector(".volume-control input");
let keysCheckbox = document.querySelector(".keys-checkbox input");
let pianoKeysLetters = document.querySelectorAll(".keys .key span");

//Play Tune
const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`); //Get clicked key element
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));

});
document.addEventListener("keydown", function (e) {
    if(allKeys.includes(e.key)) playTune(e.key)
});

volumeControl.addEventListener("input", function (e) {
  audio.volume = e.target.value;
});

keysCheckbox.addEventListener("change", function (e) {
    if (e.target.checked) {
        pianoKeysLetters.forEach((key) => {
        key.style.opacity="1";
      });
    } else {
        pianoKeysLetters.forEach((key) => {
        key.style.opacity="0";
      });
    }
});