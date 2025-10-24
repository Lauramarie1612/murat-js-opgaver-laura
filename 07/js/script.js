"use strict";

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });

const getWordElem = document.getElementById("word");
const getWordElem2 = document.getElementById("word2");

getWordElem.addEventListener("click", function () {
  if (this.textContent == "Når du sulten for sjov") {
    this.innerHTML = "<strong>Kims chips</strong>";
  } else {
    this.innerHTML = "Når du sulten for sjov";
  }
});

getWordElem2.addEventListener("click", function () {
  if (this.textContent == "Have a break") {
    this.innerHTML = "<strong>Have a KitKat</strong>";
  } else {
    this.innerHTML = "Have a break";
  }
});
