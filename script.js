'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}
const emlakIlanlari = [
  { id: 1, tur: 'ev', baslik: 'Şehir Merkezinde Müstakil Ev', aciklama: 'Geniş bahçe ve otoparklı', fiyat: '350.000 TL', resim: 'ev1.jpg' },
  { id: 2, tur: 'daire', baslik: 'Merkezi Lokasyonda 2+1 Daire', aciklama: 'Yüksek kat, manzaralı', fiyat: '250.000 TL', resim: 'daire1.jpg' },
  { id: 3, tur: 'villa', baslik: 'Göl Kenarında Lüks Villa', aciklama: 'Havuzlu ve geniş teraslı', fiyat: '1.200.000 TL', resim: 'villa1.jpg' },
  { id: 4, tur: 'daire', baslik: 'Modern Tasarımlı Stüdyo Daire', aciklama: 'Yeni binada, ankastre mutfak', fiyat: '150.000 TL', resim: 'daire2.jpg' },
  { id: 5, tur: 'villa', baslik: 'Doğa İçinde Deniz Manzaralı Villa', aciklama: 'Açık hava alanları ve spor salonu', fiyat: '900.000 TL', resim: 'villa2.jpg' },
];
function ilanlariListele(ilanlar) {
  const ilanListesiDiv = document.getElementById('ilanListesi');
  ilanListesiDiv.innerHTML = '';
  ilanlar.forEach(ilan => {
    const ilanHTML = `
        <div class="ilan">
            <img src="${ilan.resim}" alt="${ilan.baslik}">
            <h3>${ilan.baslik}</h3>
            <p><strong>Açıklama:</strong> ${ilan.aciklama}</p>
            <p><strong>Fiyat:</strong> ${ilan.fiyat}</p>
        </div>
    `;
    ilanListesiDiv.innerHTML += ilanHTML;
});
}
document.getElementById('filterType').addEventListener('change', function() {
  const secilenTur = this.value;
  let filtrelenmisIlanlar = [];

  if (secilenTur === 'hepsi') {
      filtrelenmisIlanlar = emlakIlanlari;
  } else {
      filtrelenmisIlanlar = emlakIlanlari.filter(ilan => ilan.tur === secilenTur);
  }

  ilanlariListele(filtrelenmisIlanlar);
});
window.onload = function() {
  ilanlariListele(emlakIlanlari);
};
/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 