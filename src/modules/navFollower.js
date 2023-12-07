export default function navFollower() {
  // function to change active class
  function changeActive(selectedItem) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => item.classList.remove("active"));
    selectedItem.classList.add("active");
  }

  // Function to change active class based on scroll position
  function changeActiveByScroll() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      const navItem = document.querySelector(`[href="#${section.id}"] li`);

      // Adjust for section padding
      const paddingTop = parseInt(getComputedStyle(section).paddingTop, 10);
      const paddingBottom = parseInt(
        getComputedStyle(section).paddingBottom,
        10,
      );

      if (
        navItem &&
        scrollPosition >= sectionTop - paddingTop &&
        scrollPosition <= sectionBottom - paddingBottom
      ) {
        changeActive(navItem);
      }
    });
  }

  // Event listener for scroll events
  document.addEventListener("scroll", () => {
    changeActiveByScroll();
  });

  // Event listener for navigation items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      changeActive(item);
    });
  });
}