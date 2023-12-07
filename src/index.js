import "./stylesheets/styles.css";
import initializeCursor from "./modules/cursor";
import navFollower from "./modules/navFollower";

document.addEventListener("DOMContentLoaded", () => {
  initializeCursor();
  navFollower()
});
