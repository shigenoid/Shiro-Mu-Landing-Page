const nav = document.querySelector('.nav-header');
const navButton = document.querySelector('.nav_button');
const navLogo = document.querySelector('.img-logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        nav.classList.add('nav-header-scrolled');
        navButton.classList.add('nav_button-scrolled');
        navButton.classList.remove('nav_button');
        navLogo.classList.add('img-logo-scrolled');
    }
    else if (window.scrollY < 75) {
        nav.classList.remove('nav-header-scrolled');
        navButton.classList.remove('nav_button-scrolled');
        navButton.classList.add('nav_button');
        navLogo.classList.remove('img-logo-scrolled');
    }
})