"use strict";

const getNumber1Field = document.getElementById("number1");
const getNumber2Field = document.getElementById("number2");
const resultMultiplyField = document.getElementById("resultMultiply");
const multiplyBtn = document.getElementById("multiplyNumberBtn");

multiplyBtn.addEventListener("click", () => {
  const number1 = Number(getNumber1Field.value);
  const number2 = Number(getNumber2Field.value);
  const result = number1 * number2;
  resultMultiplyField.value = result;
});

const getNumber3Field = document.getElementById("number3");
const getNumber4Field = document.getElementById("number4");
const resultSubstractionField = document.getElementById("resultSubstraction");
const divideBtn = document.getElementById("divideNumbersBtn");

divideBtn.addEventListener("click", () => {
  const number3 = Number(getNumber3Field.value);
  const number4 = Number(getNumber4Field.value);
  const result = number3 / number4;
  resultSubstractionField.value = result;
});
