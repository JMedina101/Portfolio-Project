function toggleDrawer() {
  const drawer = document.querySelector(".drawer");
  const navbarHamburger = document.querySelector(".navbar-hamburger");

  if (drawer.style.display === "block") {
    drawer.style.display = "none";
    navbarHamburger.textContent = "☰"; // Change back to hamburger icon
  } else {
    drawer.style.display = "block";
    navbarHamburger.textContent = "✕"; // Change to X icon
  }
}
