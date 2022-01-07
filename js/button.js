let btns = document.getElementById("btns");
let res = document.getElementById("res");
btns.addEventListener("click", clickHandler);
let display = "";

function clickHandler (event) {
  let id = event.target.id;
  if(id !== "btnClr"){
    if(id !== "btnEql"){
      display = display + (document.getElementById(event.target.id).innerHTML)
      res.innerHTML = display
    }else{
      calculate(display)
      
    }
  }
  else{
    clearDisplay()
  }
}

function clearDisplay () {
  display = "";
  res.innerHTML = display
}

function calculate(value) {
  let calculateedValue;
  if(value.includes("+")){
    newVal = value.split('+');
    val1 = newVal[0];
    val2 = newVal[1]
    calculateedValue = covertToBinary(val1,val2,"+")
    clearDisplay();
  }else if(value.includes("-")){
    newVal = value.split('-');
    val1 = newVal[0];
    val2 = newVal[1]
    calculateedValue = covertToBinary(val1,val2,"-")
    clearDisplay();
  }else if(value.includes("/")){
    newVal = value.split('/');
    val1 = newVal[0];
    val2 = newVal[1]
    calculateedValue = covertToBinary(val1,val2,"/")
    clearDisplay();
  }else if(value.includes("*")){
    newVal = value.split('*');
    val1 = newVal[0];
    val2 = newVal[1]
    calculateedValue = covertToBinary(val1,val2,"*")
    clearDisplay();
  }else{
    display = ""
    return 
  }
  let result  =  convertToBinery(calculateedValue).join("")
  res.innerHTML = result
}


function covertToBinary(num1,num2, operator) {
  num1Temp = getDecimalValue(num1)
  num2Temp = getDecimalValue(num2)
  let value; 
  if (operator === "+"){
    value = num1Temp + num2Temp
  }else if (operator === "-"){
    value = num1Temp - num2Temp
  }else if (operator === "*"){
    value = num1Temp * num2Temp
  }else{
    value = num1Temp / num2Temp
  }
  return value
}

function getDecimalValue(num){
  num = num.split("").reverse();
  let numTemp ;
  num.map((num,index)=>{
    if(num === "1"){
      if(numTemp){
        numTemp = numTemp + Math.pow(2,index)
      }else{
        numTemp = Math.pow(2,index)
      }
    }
  })  
  return numTemp;
}

function convertToBinery(num) {
  let numberTemp = [];
  let newNumber ;
  if(num>1){
    numberTemp.push(Math.floor(num%2));
    newNumber = num/2
      while (newNumber !== 0){
        console.log(newNumber, "newNumber")
        numberTemp.push(Math.floor(newNumber%2));
        newNumber = Math.floor(newNumber/2);
      }   
        // numberTemp.push(num%2);
        //  console.log(num, "num")
        // newNumber = num/2
        // console.log(numberTemp, num, "default")
    }
  numberTemp = numberTemp.reverse();
  console.log(numberTemp,"numberTemp")
  return numberTemp
}
