"use strict";

const numberdiv=Array.from(document.querySelectorAll(".num button"));
const inputField=document.getElementById("search-bar")
const submitButton=document.getElementById("btn-total")
const clearButton=document.getElementById("btn-clr")
//const deleteButon=document.getElementById("btn-del")

submitButton.addEventListener("click",function(){
    evaluate(inputField.innerText);
});

clearButton.addEventListener("click",function(){
    clear();
});

/*deleteButon.addEventListener("click",function(event){
    event.preventDefault();
    deleteFunc(inputField.innerText);
    
});*/

for(var i=0;i<numberdiv.length;i++){
    numberdiv[i].addEventListener("click", function () {
        if(this.textContent=="del"){
            deleteFunc(inputField.textContent)
        }
        else{
            addInput(this.textContent);
        }
        
    });
}

function addInput(value){
    const screenValue=inputField.innerText
    
    if(screenValue.length<16){
        inputField.innerText=screenValue.toString()+value;
    }
}

function evaluate(value){
    var ans=eval(value);
    inputField.innerText=ans;
}

function clear(){
    inputField.innerHTML="";
}

function deleteFunc(value){ 
    if(value.length>0){
        var temp=value.substring(0,value.length-1)
        inputField.innerHTML=temp;
    }
}