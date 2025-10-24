"use strict";

const body = document.body;

function updateBackground() {
  const width = window.innerWidth;
  if (width < 480) {
    body.style.background = "pink";
  } else if (width < 760) {
    body.style.background = "orange";
  } else if (width < 960) {
    body.style.background = "lightblue";
  } else if (width < 1024) {
    body.style.background = "purple";
  } else if (width < 1200) {
    body.style.background = "red";
  } else {
    body.style.background = "lightpink";
  }
}
// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);
