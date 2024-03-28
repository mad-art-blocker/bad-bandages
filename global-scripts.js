//
//  ---

import siteLogo from '/bad_bandage.png'

//  ---
//
document.addEventListener('DOMContentLoaded', () => {

  // WEBSITE TITLES/INTERFACE PROPERTIES:
  const bandagesKeys = {
    webSiteTitle: 'BAD.BANDAGES',
    subTitle: 'Malas Vendas',
    serveYear: new Date(),
    'role Token': 'Beto Vector'
  };


  const injectTitle = document.querySelectorAll('.siteTitleJS');
  for (let it = 0; it < injectTitle.length; it++) {
    injectTitle[it].innerText = `${bandagesKeys.webSiteTitle}`;
  }

  // Author, Title,  or Token:
  document.querySelector('.authorToken').innerText = bandagesKeys['role Token'];

  // Sub-title or Token:
  document.querySelector('.subTitles').innerText = bandagesKeys.subTitle;

  // Site Logo:
  // <h1 class="util-text-family">${bandagesKeys.webSiteTitle}</h1>
  document.querySelector('.siteLogoJS').innerHTML = `
<a href="/">
  <img class="main-logo" src=${siteLogo} alt="Image logo decoration of a bandage" />
</a>
`

  // MOBILE MENU
  const hamburgerButton = document.querySelector('.hamburger-icon');
  const menuMobile = document.querySelector('.util-mobile-menu');

  hamburgerButton.addEventListener('click', () => menuMobile.classList.toggle('open'));


  // Footer Date:
  // const serveYear = new Date();
  document.querySelector('.thisYear').innerText = bandagesKeys.serveYear.getFullYear();


});
