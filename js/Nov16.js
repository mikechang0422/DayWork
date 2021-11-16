// eslint-disable-next-line no-unused-vars
let swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:5,
    slidesPerGroup:2,
    spaceBetween:20,
    speed:2000,
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})