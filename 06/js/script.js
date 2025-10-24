"use strict";

const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");

getZoomBtn.addEventListener("click", function () {
  if (this.textContent == "Zoom ind") {
    getWordElem.style.fontSize = "10rem";
    this.textContent = "Zoom ud";
    getWordElem.style.color = "blue";
    getWordElem.style.fontWeight = "bold";
  } else {
    getWordElem.style.fontSize = "3rem";
    this.textContent = "Zoom ind";
    getWordElem.style.color = "pink";
    getWordElem.style.fontWeight = "normal";
  }
});
