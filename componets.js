function showResult(result){
    document.getElementById("result").value = result;
}

function applyAddition(){
    let x = Number(document.getElementById("numberA").value);
    let y = Number(document.getElementById("numberB").value);
    showResult(x + y);
}

function applySubtraction(){
    let x = Number(document.getElementById("numberA").value);
    let y = Number(document.getElementById("numberB").value);
    showResult(x - y);
}

function applyMultiplication(){
    let x = Number(document.getElementById("numberA").value);
    let y = Number(document.getElementById("numberB").value);
    showResult(x * y);
}

function applyDivision(){
    let x = Number(document.getElementById("numberA").value);
    let y = Number(document.getElementById("numberB").value);
    showResult(x / y);
}

function applyExponentiation(){
    let x = Number(document.getElementById("numberA").value);
    let y = Number(document.getElementById("numberB").value);
    let powResult = Math.pow(x, y);
    showResult(powResult);
}

function applySquareRoot(){
    let y = Number(document.getElementById("numberB").value);
    let squareRoot = Math.sqrt(y);
    showResult(squareRoot);
}

function getAbsoluteValue(){
    let y = Number(document.getElementById("numberB").value);
    let absoluteValue = Math.abs(y);
    showResult(absoluteValue);
}

function getRandom(){
    let x = Number(document.getElementById("numberA").value);
    let y = Number(document.getElementById("numberB").value) + 1;
    let resultRandom = Math.floor(Math.random() * (y - x) + x);
    showResult(resultRandom);
}

function applyRound(){
    let result = Number(document.getElementById("result").value);
    showResult(Math.round(result));
}

function applyRoundFloor(){
    let result = Number(document.getElementById("result").value);
    showResult(Math.floor(result));
}

function applyRoundCeil(){
    let result = Number(document.getElementById("result").value);
    showResult(Math.ceil(result));
}

function userAlert(){
    let msj = "This calculator allows all basic operations. Enjoy;)";
    alert(msj);
}