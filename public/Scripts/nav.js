// -----------------------------------------------------------------------------
// NAVIGATION SCRIPT
// -----------------------------------------------------------------------------
const nav = document.getElementById("navbar");
const wrapper = document.getElementsByClassName("wrapper")[0];

wrapper.addEventListener("scroll", () => {
  if (nav) {
    wrapper.scrollTop > 50
      ? (nav.style.backgroundColor = "rgba(0, 0, 0, 0.93)")
      : (nav.style.backgroundColor = "transparent");
  }
});

const hamburger = document.getElementsByClassName("hamburger")[0];
const mobileNav = document.getElementById("mobile-nav");
const brand = document.querySelector(".brand-container");
const networkBtn = document.querySelector("#networkBtn");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    mobileNav.classList.remove("mobile-is-active");
  } else {
    hamburger.classList.add("is-active");
    mobileNav.classList.add("mobile-is-active");
  }

  hamburger.classList.contains("is-active")
    ? (brand.style.filter = "drop-shadow(5px 1px 5px orange) invert(90%)")
    : (brand.style.filter = "drop-shadow(5px 1px 5px orange)");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    mobileNav.classList.remove("mobile-is-active");
    hamburger.classList.remove("is-active");
    brand.style.Filter = "drop-shadow(5px 1px 5px orange)";
  }
});

// networkBtn.onclick = () => {
//   mobileNav.classList.remove("mobile-is-active");
//   hamburger.classList.remove("is-active");
//   brand.style.Filter = "drop-shadow(5px 1px 5px orange)";
// };

// console.log(networkBtn);
