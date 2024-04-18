/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function random(length) {
    let number = Math.floor(Math.random() * length);
    return number;
  }
  let sentence =
    who[random(who.length)] +
    " " +
    action[random(action.length)] +
    " " +
    what[random(what.length)] +
    " " +
    when[random(when.length)];

  const el = document.getElementById("excuse");
  el.innerHTML = sentence;
  el.style.color = "red";
  el.style.backgroundColor = "grey";
  el.style.height = "50px";
  el.style.fontSize = "30px";
};
window.onload();
