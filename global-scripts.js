
//
// import "/scripts/bandages.js";
document.addEventListener('DOMContentLoaded', () => {

  // Proops Object
  // WEBSITE TITLES/INTERFACE PROPERTIES:
  const bandagesKeys = {
    webSiteTitle: 'BAD\'BANDAGES',
    subTitle: 'Malas Vendas',
    serveYear: new Date(),
    'role Token': 'Beto Vector'
  };

  // console.log(typeof bandagesKeyse)



  const injectTitle = document.querySelectorAll('.siteTitle');
  for (let it = 0; it < injectTitle.length; it++) {
    injectTitle[it].innerText = `${bandagesKeys.webSiteTitle}`;
  }

  // Author, Title,  or Token:
  document.querySelector('.authorToken').innerText = bandagesKeys['role Token'];

  // Special Page:
  document.querySelector('.subTitles').innerText = bandagesKeys.subTitle;

  // Footer Date:
  // const serveYear = new Date();
  document.querySelector('.thisYear').innerText = bandagesKeys.serveYear.getFullYear();



  // MOBILE MENU
  const hamburgerButton = document.querySelector('.hamburger-icon');
  const menuMobile = document.querySelector('.util-mobile-menu');

  hamburgerButton.addEventListener('click', () => menuMobile.classList.toggle('open'))
});
