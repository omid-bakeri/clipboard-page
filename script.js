"use strict";

const state = document.querySelector(".change-state");
const body = document.getElementsByName("body");
const icon_state = document.querySelector(".icons-change-state");
const footer = document.getElementById("footer");
state.addEventListener("click", () => {
  console.log("hello");
  document.body.style.backgroundColor = "#0f172a";
  state.style.backgroundColor = "#334155";
  icon_state.classList.remove("ph-moon");
  icon_state.classList.add("ph-sun");
  footer.style.backgroundColor = "#1f2937";
});
