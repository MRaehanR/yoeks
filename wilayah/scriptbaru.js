window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var kanan = this.document.querySelector(".info");
  var a = document.querySelectorAll(".a");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    kanan.classList.add("scrolled");
    a.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    kanan.classList.remove("scrolled");
    a.classList.remove("scrolled");
  }
});
