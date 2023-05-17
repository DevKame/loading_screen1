"use strict";
console.clear();

let chars = document.querySelectorAll(".loader p span");

for(let i = 0 ; i < chars.length ; i++)
  {
    chars[i].style.animation = `chars 1s infinite linear .${i+4}s`;
  }