const { Typed } = require("./typed");

let ham = document.getElementById("hamburger");
let items = document.getElementsByClassName("items")[0];
let nav_link = document.getElementsByClassName("nav_link")[0];
let hamburger = document.getElementById("ham");
let first = document.getElementsByClassName("first")[0]
// let audio = new Audio("songs/black_and_gold_ent.mp3");
// audio.volume = 0.1
// audio.play();

// setTimeout(() => {
//   audio.volume = 0.05
// }, 1000);


ham.addEventListener('click', (f) => {
  console.log(f);
  items.classList.toggle("in");
  if (items.classList.contains("in")) {
    hamburger.style.display = "none";
    first.style.margin = "55px 42px 52px 42px";

    // margin: 42px 42px 52px 42px;
  }
  else {
    hamburger.style.display = "block";

  }


})


