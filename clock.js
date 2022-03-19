setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hrotation = htime * 30 + mtime / 2;
  mrotation = mtime * 6;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
});

var myAudio = new Audio("ticktick.mp3");
myAudio.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);
myAudio.play();

var light = document.getElementById("clockCont");

light.addEventListener("click", function (light) {
  light.target.classList.toggle("clock2");
});

function getImage1() {
  // document.getElementById("clockCont").style.background = "url(clock2.png) no-repeat";
  document.getElementById("clockCont").style.background =
    "url(clock1.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function getImage2() {
  document.getElementById("clockCont").style.background =
    "url(clock2.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function getImage3() {
  document.getElementById("clockCont").style.background =
    "url(clock3.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function getImage4() {
  document.getElementById("clockCont").style.background =
    "url(clock4.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function getImage5() {
  document.getElementById("clockCont").style.background =
    "url(clock5.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function getImage6() {
  document.getElementById("clockCont").style.background =
    "url(clock6.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function getImage7() {
  document.getElementById("clockCont").style.background =
    "url(clock7.png) no-repeat";
  document.getElementById("clockCont").style.backgroundSize = "100%";
}
function changeTHeme() {
  document.body.style.background = "rgb(5 34 41)";
}
function changeTHeme1() {
  document.body.style.background = "rgb(212 252 255)";
}
