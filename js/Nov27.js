let menuToggle = document.querySelector('.toggle')
let navigation = document.querySelector('.navigation')

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

window.onscroll = function() {stickyStyle()}

var header = document.querySelector('.header')
var headerOffsetTop = header.offsetTop

function stickyStyle() {
    if (window.pageYOffset > headerOffsetTop) {
        header.classList.add('bgdark')
    } else {
        header.classList.remove('bgdark')
    }
}