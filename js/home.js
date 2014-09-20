"use strict";
(function() {

var screenwidth = window.innerWidth;
var screenheight = window.innerHeight;
console.log(screenwidth);
console.log(screenheight);

var mf = {
  x: screenwidth /320,
  y: screenheight /480
};

var frame = document.getElementById("breakout");
var canvas = document.createElement("canvas");
canvas.id = "homecanvas";
canvas.height = screenheight;
canvas.width = screenwidth;
canvas.style.position = "absolute";
canvas.style.bottom = "0px";
canvas.padding = "0px";
canvas.style.margin = "0px";
canvas.style.background = "#000000";

frame.appendChild(canvas);

var home = new Home(canvas, mf);
home.init();

home.canvas.addEventListener("touchstart", function(event) {
  var x = event.changedTouches[0].clientX;
  var y = event.changedTouches[0].clientY;
  var playBrick = home.choice[0].brick;

  if (x >= playBrick.x && x <= playBrick.x+playBrick.w &&
      y >= playBrick.y && y <= playBrick.y+playBrick.w) {
    home.createHome();
  }
}, false);

}());
