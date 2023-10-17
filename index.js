var loader = document.getElementById('preloader');
var leftwing = document.getElementById('leftwing');
var rightwing = document.getElementById('rightwing');
var homelogo = document.getElementById('home-logo');
var heading = document.getElementById('heading');
var headPara = document.getElementById('head-para');
var subpara = document.getElementById('sub-para');
var heroDetails = document.getElementById('hero-details');
var Motivational = document.getElementById('hero-details').getElementsByTagName('span')[0];
var Technical = document.getElementById('hero-details').getElementsByTagName('span')[1];
var Spiritual = document.getElementById('hero-details').getElementsByTagName('span')[2];
var Cultural = document.getElementById('hero-details').getElementsByTagName('span')[3];
var Social = document.getElementById('hero-details').getElementsByTagName('span')[4];

loader.style.backgroundSize = "20rem";
loader.style.opacity = "0.8";
setInterval(async() => {
    loader.style.opacity = "0.2";
}, 1000);    
setTimeout(() => {
    loader.style.display = 'none';
}, 3500);

setInterval(() => {
    homelogo.style.opacity = "1";
    heading.style.opacity = "1";
}, 3500);

setInterval(() => {
    headPara.style.opacity = "1";
}, 4000);

setInterval(() => {
    subpara.style.opacity = "1";
}, 4500);

setInterval(() => {
    heroDetails.style.opacity = "1";
}, 5000);

setInterval(() => {
    Motivational.style.opacity = "1";
}, 5500);
setInterval(() => {
    Technical.style.opacity = "1";
}, 5700);
setInterval(() => {
    Spiritual.style.opacity = "1";
}, 5900);
setInterval(() => {
    Cultural.style.opacity = "1";
}, 6100);
setInterval(() => {
    Social.style.opacity = "1";
}, 6300);


const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');

navIcon.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  navIcon.style.display = "none";
  navClose.style.display = "block";
});

navClose.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    navClose.style.display = "none";
    navIcon.style.display = "block";
});