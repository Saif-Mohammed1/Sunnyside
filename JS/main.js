let ele = document.querySelector(".but-click");
ele.addEventListener("click", () => {
  ele.classList.toggle("active");

  document
    .querySelector(".container-fluid .navbar-nav")
    .classList.toggle("active");
});
window.addEventListener("resize", () => {
  document
    .querySelector(".container-fluid .navbar-nav")
    .classList.contains("active");

  if (
    window.matchMedia("(max-width: 991px)").matches == false &&
    document
      .querySelector(".container-fluid .navbar-nav")
      .classList.contains("active")
  ) {
    document
      .querySelector(".container-fluid .navbar-nav")
      .classList.remove("active");
    ele.classList.remove("active");
  }
});
