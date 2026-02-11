const SHOP_URL = 'https://example-shop.com';

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const nav = document.getElementById('primary-nav');
const toggle = document.querySelector('.menu-toggle');
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const shopFrame = document.getElementById('shop-frame');
const shopLink = document.getElementById('external-shop-link');
if (shopFrame && shopLink) {
  shopFrame.src = SHOP_URL;
  shopLink.href = SHOP_URL;
}
