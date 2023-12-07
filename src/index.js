import "./stylesheets/styles.css";
import initializeCursor from "./modules/cursor";
import navFollower from "./modules/navFollower";
import mobileNav from "./modules/mobileNav";

document.addEventListener("DOMContentLoaded", () => {
  initializeCursor();
  navFollower();
  mobileNav();
});
