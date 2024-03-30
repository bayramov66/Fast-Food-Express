const searchForm = document.querySelector(".search-form");
const ShoppingCardItems = document.querySelector(".card-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const ShoppingCardIcon = document.querySelector("#shopping-card-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

ShoppingCardIcon.addEventListener("click", function () {
  ShoppingCardItems.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(ShoppingCardIcon) &&
      !e.composedPath().includes(ShoppingCardItems)
    ) {
      ShoppingCardItems.classList.remove("active");
    }
  });
});
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

// Loader Spinner
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
