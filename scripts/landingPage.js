const hamburgerIcon = document.getElementById('hamburgerIcon');
const headerNav = document.querySelector('#headerNav');

const computerComponents = document.getElementById('computerComponents');
const computerComponentsNav = document.getElementById('computerComponentsNav');

const periferialDevices = document.getElementById('periferialDevices');
const periferialDevicesNav = document.getElementById('periferialDevicesNav');

const smartphones = document.getElementById('smartphones');
const smartphonesNav = document.getElementById('smartphonesNav');

const desktops = document.getElementById('desktops');
const desktopsNav = document.getElementById('desktopsNav');

const tv = document.getElementById('tv');
const tvNav = document.getElementById('tvNav');

const accesories = document.getElementById('accesories');
const accesoriesNav = document.getElementById('accesoriesNav');

hamburgerIcon.addEventListener('click', () => {
    headerNav.classList.toggle('header__list--visible');
    computerComponentsNav.classList.remove('navigation--visible');
    periferialDevicesNav.classList.remove('navigation--visible');
    smartphonesNav.classList.remove('navigation--visible');
    desktopsNav.classList.remove('navigation--visible');
    tvNav.classList.remove('navigation--visible');
    accesoriesNav.classList.remove('navigation--visible');
});

computerComponents.addEventListener('click', () => {
    computerComponentsNav.classList.toggle('navigation--visible');
})

periferialDevices.addEventListener('click', () => {
    periferialDevicesNav.classList.toggle('navigation--visible');
});

smartphones.addEventListener('click', () => {
    smartphonesNav.classList.toggle('navigation--visible');
});

desktops.addEventListener('click', () => {
    desktopsNav.classList.toggle('navigation--visible');
});

tv.addEventListener('click', () => {
    tvNav.classList.toggle('navigation--visible');
});

accesories.addEventListener('click', () => {
    accesoriesNav.classList.toggle('navigation--visible');
});