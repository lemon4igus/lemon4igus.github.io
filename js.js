//alert(" Сайт сделан Специально для Татьяны!");

let msg1 = document.querySelector(".message1");
let btn1 = document.querySelector(".button1");
let msg2 = document.querySelector(".message2");
let btn2 = document.querySelector(".button2");
let btn2b = document.querySelector(".button2_back");
let msg3 = document.querySelector(".message3");
let btn3 = document.querySelector(".button3");
let btn3b = document.querySelector(".button3_back");
let msg4 = document.querySelector(".message4");
let btn4 = document.querySelector(".button4");
let btn4b = document.querySelector(".button4_back");
let msg5 = document.querySelector(".message5");
let btn5 = document.querySelector(".button5");

btn1.addEventListener("click", function(){
   msg1.style.display = "none";
   msg2.style.display = "block"; 
});
btn2.addEventListener("click", function(){
    msg2.style.display = "none";
    msg3.style.display = "block"; 
 });
 btn2b.addEventListener("click", function(){
    msg2.style.display = "none";
    msg1.style.display = "block";
 });
 btn3.addEventListener("click", function(){
    msg3.style.display = "none";
    msg4.style.display = "block";
 });
 btn3b.addEventListener("click", function(){
    msg3.style.display = "none";
    msg2.style.display = "block";
 });
 btn4.addEventListener("click", function(){
    msg4.style.display = "none";
    msg5.style.display = "block";
 });
 btn4b.addEventListener("click", function(){
    msg4.style.display = "none";
    msg3.style.display = "block";
 });
 btn5.addEventListener("click", function(){
    msg5.style.opacity = "0%";
    btn5.style.cursor = "default";
 });

