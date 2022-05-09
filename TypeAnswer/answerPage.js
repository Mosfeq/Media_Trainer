const txt1 = document.getElementById("userAnswer");
const btn1 = document.getElementById("btn");
const out1 = document.getElementById("outputAnswer");

function fun1(){
    out1.innerHTML = txt1.value;
}

btn1.addEventListener("click", fun1);