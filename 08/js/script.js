"use strict";

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("bounce");
//     setTimeout(()=>this.classList.remove("bounce"),600);
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("shake");
//     setTimeout(()=>this.classList.remove("shake"),400);
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("spin");
//     setTimeout(()=>this.classList.remove("spin"),600);
// });

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("shake");
  setTimeout(() => this.classList.remove("shake"), 600);
});

const getWordElem2 = document.getElementById("word2");

getWordElem2.addEventListener("click", function () {
  this.classList.add("spin");
  setTimeout(() => this.classList.remove("spin"), 800);
});
