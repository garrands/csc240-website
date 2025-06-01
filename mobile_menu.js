// Toggle to the hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerMenu');
    const links = document.getElementById('burgerLinks');

    if (burger && links) {
        burger.addEventListener('click', () => {
            links.classList.toggle('open');
        });
    }
});
