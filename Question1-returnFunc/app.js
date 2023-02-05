"use strict";

const user = {};

function setterGenerator(key) {
  return (value) => {
    user[key] = value;
    return user;
  };
}
const nameSetter = setterGenerator("name");
nameSetter("jack");
console.log(user); // {name: ‘jack’}
