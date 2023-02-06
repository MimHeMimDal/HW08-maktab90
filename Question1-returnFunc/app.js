"use strict";

const user = {};

/////////////////// edit user without this

// function setterGenerator(key) {
//   return (value) => {
//     user[key] = value;
//     return user;
//   };
// }
// const nameSetter = setterGenerator("name");
// nameSetter("jack");
// console.log(user); // {name: ‘jack’}

////////////// edit user with this

function useThis([key, value]) {
  this[key] = value;
}

function setterGenerator(key) {
  return (value) => {
    useThis.call(user, [key, value]);
    return user;
  };
}
const nameSetter = setterGenerator("name");
nameSetter("jack");
console.log(user); // {name: ‘jack’}
