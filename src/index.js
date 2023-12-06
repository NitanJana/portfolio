// main.js

import "./stylesheets/styles.css";
import initializeCursor from "./modules/cursor";

// function to change active class
function changeActive(selectedItem) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => item.classList.remove("active"));
  selectedItem.classList.add("active");
}

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActive(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initializeCursor();
});
