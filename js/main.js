// banner slider
$('.banner_slider').owlCarousel({
    loop: true,
    nav: true,
    navText: ['Back', 'Next'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// product slider
$('.product_wrapper').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['Back', 'Next'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
})