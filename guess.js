"use strict";

let randomNumber = Math.trunc(Math.random()*10+1);
let chances=5;

const messages = function(message) {
   document.querySelector(".message").textContent= message;
};

document.querySelector("#match_value").addEventListener('click',function(){
const userNumber=Number(document.querySelector(".guess").value);
// console.log(userNumber,typeof userNumber);

if(userNumber)
{
if(chances >= 1){
    if(userNumber > randomNumber) {
        messages("guess lower!!");
        chances--;
    }
    else if(userNumber < randomNumber) {
        messages("guess higher!!");
        chances--;
    }
    else{
        messages("🥳YOU WIN🥳");
        chances--;
        document.querySelector(".msg-score").textContent="Good job";
        document.querySelector(".number").innerHTML=randomNumber;   
        
        document.body.style.background="green";
    }

    document.querySelector(".score").textContent= chances;
}
else{
    messages("😟YOU LOST😟");

}
} else{
    message("😠No value😠");
}
});

document.querySelector("#again").addEventListener('click',function(){
 chances = 5;
randomNumber = Math.trunc(Math.random()*10+1);
messages("Let's Start");
document.querySelector(".score").textContent = chances;
document.querySelector(".number").textContent = "??";
document.querySelector(".guess").value = '';
});