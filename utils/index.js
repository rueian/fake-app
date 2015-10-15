'use strict';

const co = require('co');

function random (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function* looper (cb) {
  let queue = [];
  let loop = random(10, 100);
  for (let i = 0; i < loop; i++) {
    queue.push(cb());
  }

  return yield queue;
}

module.exports = {
  random: random,
  shuffle: shuffle,
  looper: co.wrap(looper)
}
