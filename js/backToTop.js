// Back to top button

const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});