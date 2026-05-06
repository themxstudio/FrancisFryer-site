document.querySelectorAll(".faq__question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(btn.getAttribute("aria-controls"));

    btn.setAttribute("aria-expanded", String(!expanded));
    if (expanded) {
      answer.hidden = true;
    } else {
      answer.hidden = false;
    }
  });
});

const burger = document.querySelector(".site-header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (burger && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  };

  burger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });
}
