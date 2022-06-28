"use strict";

let video = document.querySelector("#video");
let playPause = document.querySelector("#playPause");

let stop = document.querySelector("#stop");
let mute = document.querySelector("#mute");

let volup = document.querySelector("#volup");
let voldown = document.querySelector("#voldown");
let progress = document.querySelector("#progress");
let progressBar = document.querySelector("#progress__bar");

const startStop = () => {
  let videoState = playPause.getAttribute("data-video-state");

  if (videoState === "pause") {
    video.play();
    playPause.setAttribute("data-video-state", "play");
  } else {
    video.pause();
    playPause.setAttribute("data-video-state", "pause");
  }
};

playPause.addEventListener("click", startStop);

video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});

video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
  progressBar.style.width = Math.floor(
    (video.currentTime / video.duration) * 100
  ) + "%";
});

progress.addEventListener("click", function (event) {

  let pos =
    (event.pageX -
      (this.offsetLeft +
        this.offsetParent.offsetLeft +
        this.offsetParent.offsetLeft)) /
    this.offsetWidth;
  video.currentTime = pos * video.duration;
});
