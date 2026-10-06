let menu = document.querySelector('.menu-btn');

menu.addEventListener('click', function(event) {
    document.querySelector('nav').classList.toggle('active');
    menu.classList.toggle('change');
}); 