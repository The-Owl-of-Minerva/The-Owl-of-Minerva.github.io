// year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu
const btn = document.getElementById("menuBtn");
const nav = document.getElementById("mobileNav");

btn?.addEventListener("click", () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!isOpen));
  nav.hidden = isOpen;
});

// close mobile nav on click
nav?.addEventListener("click", (e) => {
  const t = e.target;
  if (t && t.tagName === "A") {
    nav.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }
});
