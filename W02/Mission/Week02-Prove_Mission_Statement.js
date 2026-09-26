
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector("footer img").src ="Week02-Prove_Mission_Statement_image/byui-logo-black.png";
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector("footer img").src ="Week02-Prove_Mission_Statement_image/byui-logo-blue.webp";
    }
}           

