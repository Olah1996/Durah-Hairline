const hamburger= document.querySelector('.hamburger');
const navMenu = document.querySelector ('.menu');

hamburger.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') ==='true';
    hamburger.setAttribute('aria-expanded' , !expanded);
});