import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomExcuse(excuse){
  let minimun = 0;
  let maximun = excuse.length - 1;
  let rand = getRandNum(minimun, maximun);
  return excuse[rand];
}


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = randomExcuse(who) + " " + randomExcuse(action) + " " + randomExcuse(what) + " " + randomExcuse(when) + " ";
};