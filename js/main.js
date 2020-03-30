let doc = document;
const numbers = doc.querySelectorAll(".number");
const calcScreen = doc.querySelector(".calculator-screen");
const operator = doc.querySelectorAll(".operator");
const clearBtn = doc.querySelector(".all-clear");
const equalSign = doc.querySelector(".equal-sign");

const updateScreen = (number)=>{
    calcScreen.value = number;
};

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
       updateScreen(event.target.value);
    });
});