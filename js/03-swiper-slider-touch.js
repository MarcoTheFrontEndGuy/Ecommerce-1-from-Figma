





const swiper = new Swiper('.swiper', {
// Default parameters
slidesPerView: 4,
spaceBetween: 40,
// Responsive breakpoints
breakpoints: {
    // when window width is >= 120px
    0: {
    slidesPerView: 2,
    spaceBetween: 10
    },
    // when window width is >= 320px
    320: {
    slidesPerView: 2,
    spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
    slidesPerView: 2,
    spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
    slidesPerView: 3,
    spaceBetween: 20
    },

    822: {
    slidesPerView: 3,
    spaceBetween: 20
    },

    823: {
    slidesPerView: 4,
    spaceBetween: 20
    },


},
// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

//   Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

})
