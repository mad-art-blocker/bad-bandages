// import "/scripts/bandages.js";


// Proops Object
// WEBSITE TITLES/INTERFACE PROPERTIES:
const proops = {
  webSiteTitle: 'BAD\'BANDAGES',
  subTitle: 'Malas Vendas',
  serveYear: new Date(),
  'role Token': 'Beto Vector'
};



// console.log(typeof props)

const injectTitle = document.querySelectorAll('.siteTitle');
for (let it = 0; it < injectTitle.length; it++) {
  injectTitle[it].innerText = `${proops.webSiteTitle}`;
}

// Author, Title,  or Token:
document.querySelector('.authorToken').innerText = proops['role Token'];

// Special Page:
document.querySelector('.subTitles').innerText = proops.subTitle;

// Footer Date:
// const serveYear = new Date();
document.querySelector('.thisYear').innerText = proops.serveYear.getFullYear();



// MOBILE MENU

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-icon');
  const menuMobile = document.querySelector('.util-mobile-menu');

  hamburgerButton.addEventListener('click', () => menuMobile.classList.toggle('open'))
});
