const pryNav =document.querySelector(".nav-bar-items");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', ()=>{
  const visibility = pryNav.getAttribute('data-visible')

  if (visibility === "false") {
    pryNav.setAttribute("data-visible", true);
    navToggle.setAttribute('aria-expanded', true)
  }else if (visibility === "true") {
    pryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});