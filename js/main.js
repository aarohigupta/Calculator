let doc = document;
const numbers = doc.querySelectorAll(".number");
const calcScreen = doc.querySelector(".calculator-screen");
const operators = doc.querySelectorAll(".operator");
const clearBtn = doc.querySelector(".all-clear");
const equalSign = doc.querySelector(".equal-sign");

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const inputNumber=(number)=>{
   if(currentInput==='0'){
       currentInput=number;
   }else{
       currentInput+=number;
   }
}

const inputOperator = (operator)=>{
    prevInput=currentInput;
    currentInput='0';
    calculationOperator=operator;
}


const updateScreen = (number)=>{
    calcScreen.value = number;
};

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
       inputNumber(event.target.value);
       if(calculationOperator!=''){
           updateScreen(prevInput+calculationOperator+currentInput);
       }else{
            updateScreen(currentInput);
       }       
    });
});

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
        if(prevInput!='0'){
            updateScreen(prevInput+calculationOperator);
        }
    })
})

const calculate = ()=>{
    let result = 0;
    switch(calculationOperator){
        case '+':
            result=parseFloat(prevInput)+parseFloat(currentInput);
            break;
        case '-':
            result=parseFloat(prevInput)-parseFloat(currentInput);
            break;
        case '/':
            result=parseFloat(prevInput)/parseFloat(currentInput);
            break;
        case '*':
            result=parseFloat(prevInput)*parseFloat(currentInput);
            break; 
    }
    currentInput=result.toString();
    calculationOperator='';
};

const clearAll = ()=>{
    prevInput='0';
    calculationOperator='';
    currentInput='0';
}

clearBtn.addEventListener("click",()=>{
    clearAll();
    updateScreen(currentInput);
})

equalSign.addEventListener("click",()=>{
    calculate();
    updateScreen(currentInput);
})