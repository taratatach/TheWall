"use strict";

/**
 * Class Bar
 **/

var Paddle = function(game) {
  this.w = 50*game.mf.x;
  this.h = 10*game.mf.y;
  this.y = game.h-this.h-70*game.mf.y;
  this.x = (game.w/2)-(this.w/2);
  this.prevX = (game.w/2)-(this.w/2);
};

Paddle.prototype = {
  draw : function(context) {
    context.fillStyle = "#99ccff";
    context.fillRect(this.x, this.y, this.w, this.h);
  },

  erase : function(context) {
    context.clearRect(this.x, this.y, this.w, this.h);
  },

  move : function(newX, game) {
    if (newX-this.x <= 30*game.mf.x && newX-this.x >= -30*game.mf.x) {
      this.prevX = this.x;
      this.x = newX;

      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x > game.w-this.w) {
        this.x = game.w-this.w;
      }
    }

  }
};
