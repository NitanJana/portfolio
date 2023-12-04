import "./stylesheets/styles.css";

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
