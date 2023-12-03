import "./stylesheets/styles.css";

const element = document.getElementsByTagName("html")[0];
element.style.display = "none";
document.addEventListener("DOMContentLoaded", () => {
  element.style.display = "block";
});
