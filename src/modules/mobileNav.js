export default function mobileNav() {
  // Toggle mobile navigation (modal) when hamburger button is clicked
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNavContainer = document.getElementById("mobileNavContainer");
  const closeBtn = document.getElementById("closeBtn");

  closeBtn.addEventListener("click", () => {
    mobileNavContainer.close();
    mobileNavContainer.style.display = "none";
  });

  hamburgerBtn.addEventListener("click", () => {
    if (mobileNavContainer.open) {
      mobileNavContainer.close();
      mobileNavContainer.style.display = "none";
    } else {
      mobileNavContainer.showModal();
      mobileNavContainer.style.display = "grid";
    }
  });

  const navItems = document.querySelectorAll(".mobile-nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (mobileNavContainer.open) {
        mobileNavContainer.close();
        mobileNavContainer.style.display = "none";
      }
    });
  });
}
