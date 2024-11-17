const menuToggle = document.querySelector(
  "nav .container .wrapper-mobile-nav .menu-toggle-mobile input"
);
const mobileNav = document.querySelector(".navigations-mobile");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    mobileNav.style.display = "flex"; // Tampilkan navigasi
  } else {
    mobileNav.style.display = "none"; // Sembunyikan navigasi
  }
});
