//slick
$('.sec3-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed:1500,
    autoplay: true,
    autoplaySpeed: 1000,
})

//rolly
const r = rolly({
    view: document.querySelector('.main'),
    native: true,
    // other options
})
r.init()

//aos
AOS.init({
    duration: 1500 //global duration
})