// Customise video range slider

let playSlider = document.getElementById("video-play-slider");
let volumeSlider = document.getElementById("video-volume-slider");

playSlider.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
});

volumeSlider.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
})

// Toggle play, volume and fullscreen buttons

let playButton = document.getElementById("play-button");
let volumeButton = document.getElementById("volume-button");
let screenmodeButton = document.getElementById("screenmode-button");

playButton.addEventListener('click', changeIcon);
volumeButton.addEventListener('click', changeIcon);
screenmodeButton.addEventListener('click', changeIcon);

function changeIcon() {
    this.classList.toggle("active");
}

