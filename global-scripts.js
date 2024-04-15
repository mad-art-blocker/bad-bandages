//
//  ---

import logoUrl from '/bad_bandage.png'

//  ---
//
document.addEventListener('DOMContentLoaded', () => {

  // WEBSITE TITLES/INTERFACE PROPERTIES:
  const bandagesKeys = {
    webSiteTitle: 'BAD.BANDAGES',
    subTitle: 'Malas Vendas',
    'role Token': 'Beto Vector'
  };


  const injectTitle = document.querySelectorAll('.siteTitleJS');
  for (let it = 0; it < injectTitle.length; it++) {
    injectTitle[it].textContent = `${bandagesKeys.webSiteTitle}`;
  }

  // Author, Title,  or Token:
  document.querySelector('.authorToken').textContent = bandagesKeys['role Token'];

  // Sub-title or Token:
  document.querySelector('.subTitles').textContent = bandagesKeys.subTitle;

  // Site Logo:
  document.querySelector('.siteLogoJS').src = logoUrl;

  // MOBILE MENU
  const hamburgerButton = document.querySelector('.hamburger-icon');
  const menuMobile = document.querySelector('.mobile-menu');
  hamburgerButton.addEventListener('click', () => menuMobile.classList.toggle('open'));


  // Footer Date:
  const serveYear = new Date();
  document.querySelector('.thisYear').textContent = serveYear.getFullYear();


});
