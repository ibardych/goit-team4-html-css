(() => {
    const navLinks = document.querySelectorAll('[data-nav-link]');

    function scrollToSection(element) {
        const elementToNavigate = document.querySelector(`#${element.target.dataset.navLink}`);

        scrollTo(0, elementToNavigate.offsetTop - 100);
    } 

    navLinks.forEach((navLink) => navLink.addEventListener('click', scrollToSection));
})();