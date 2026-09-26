
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark-mode');
        document.body.style.footer.img = "url("
    } else {
        // code for changes to colors and logo
    }
}           

