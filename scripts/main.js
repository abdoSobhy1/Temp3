const menu = document.querySelector('.other-links-toggle');
const links = document.querySelector('.mega-menu');
const overlay = document.querySelector('.overlay');
let visible = false;
menu.onclick = function(){
    if (!visible) {
        links.classList.add('is-enabled')
        menu.classList.add('is-active')
        overlay.classList.add('is-active')
        setTimeout(() => {links.classList.add('is-active')}, 150)
        visible = true
    } else {
        links.classList.remove('is-active')
        menu.classList.remove('is-active')
        overlay.classList.remove('is-active')
        setTimeout(() => {links.classList.remove('is-enabled')}, 300)
        visible = false
    }
}
overlay.onclick = function(){
    links.classList.toggle('is-active')
    setTimeout(() => {links.classList.toggle('is-enabled')}, 300)
    menu.classList.toggle('is-active')
    overlay.classList.toggle('is-active')
    visible = false
}