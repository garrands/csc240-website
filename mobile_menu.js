// Toggle to the hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  const mobileBuger = document.getElementById('burgerMenu');
  const burgerLinks = document.getElementById('burgerLinks');

  mobileBuger.addEventListener('click', function() {
    burgerLinks.classList.toggle('open');
  });
});
