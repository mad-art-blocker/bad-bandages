//
//  ---

//  ---
//
document.addEventListener("DOMContentLoaded", () => {
  // WEBSITE TITLES/INTERFACE PROPERTIES:
  const bandagesKeys = {
    webSiteTitle: "bad.bandages",
    subTitle: "Malas Vendas",
    "role Token": "Beto Vector",
  };

  // Website Title Name
  const injectTitle = document.querySelectorAll(".siteTitleJS");
  for (let it = 0; it < injectTitle.length; it++) {
    injectTitle[it].textContent = `${bandagesKeys.webSiteTitle.toUpperCase()}`;
  }

  // Author, Title,  or Token:
  document.querySelector(".authorTokenJS").textContent =
    bandagesKeys["role Token"];

  // Sub-title or Token:
  document.querySelector(".subTitlesJS").textContent = bandagesKeys.subTitle;

  // MOBILE MENU
  const hamburgerButton = document.querySelector(".hamburger-iconJS");
  const menuMobile = document.querySelector(".mobile-menuJS");
  hamburgerButton.addEventListener(
    "click",
    () => menuMobile.classList.toggle("open-menuJS"),
  );

  // Footer Date:
  const serveYear = new Date();
  document.querySelector(".thisYearJS").textContent = serveYear.getFullYear();
});
