"use strict";

function counterMaker() {
  let counter = 0;
  return function (num) {
    return num ? (counter += num) : counter;
  };
}

const counter = counterMaker();

console.log(counter());
console.log(counter(1));
console.log(counter(2));
console.log(counter(-5));
console.log(counter());
console.log(counter());