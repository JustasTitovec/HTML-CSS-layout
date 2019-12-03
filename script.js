
const navbarToggler = document.querySelector('.navbar-toggler'); 
const navbarMenu = document.querySelector('.header ul'); 
const navbarLinks = document.querySelectorAll('.header a'); 

navbarToggler.addEventListener('click', navbarTogglerClick); 

function navbarTogglerClick() {
    navbarToggler.classList.toggle('open-navbar-toggler'); 
    navbarMenu.classList.toggle('open');
    }

    navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick)); 

    function navbarLinkClick(event) {
    smoothScroll(event); 

    if (navbarMenu.classList.contains('open')) {
        navbarToggler.click(); 
    }
    }

    function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href'); 
    window.scrollTo({
        top: targetId === '#' ? 0 : document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    });
}



