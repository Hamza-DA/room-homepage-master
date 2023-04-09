const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
let state = 0;
const data = [
    {
        title: 'Discover innovative ways to decorate',
        description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        image: './images/desktop-image-hero-1.jpg'
    },
    {
        title: 'We are available all across the globe',
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: './images/desktop-image-hero-2.jpg'
    }
    ,
    {
        title: 'Manufactured with the best materials',
        description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        image: './images/desktop-image-hero-3.jpg'
    }
]

const displayTitle = document.querySelector('#display-title');
const displayDescription = document.querySelector('#display-description');
const displayImage = document.querySelector('#display-image');
const shopButton = document.querySelector('#shop-button');
const navbarOpenButton = document.querySelector('#navbar-open-button');
const navbarCloseButton = document.querySelector('#navbar-close-button');
const nextInfo = () => {
    if (state < data.length - 1) {
        anime.timeline({
            easing: 'easeOutCubic',
            duration: 200
        })
            .add({
                targets: '#display-image',
                opacity: 0,

            })
            .add({
                targets: '#display-title',
                opacity: 0,
                translateX: '10%'
            })
            .add({
                targets: '#display-description',
                opacity: 0, translateX: '10%'
            }).add({
                targets: '#shop-button',
                opacity: 0, translateY: '10%'
            })
            .add({
                begin: function () {
                    state++;
                    displayTitle.textContent = data[state].title;
                    displayDescription.textContent = data[state].description;
                    displayImage.src = data[state].image;
                }
            })
            .add({
                targets: '#display-image',
                opacity: 1,

            })
            .add({
                targets: '#display-title',
                opacity: 1,
                translateX: ['-10%', '0%']
            })
            .add({
                targets: '#display-description',
                opacity: 1,
                translateX: ['-10%', '0%']
            }).add({
                targets: '#shop-button',
                opacity: 1, translateY: ['-10%', '0%']
            })
    }
}

nextButton.addEventListener('click', nextInfo);

const prevInfo = () => {
    if (state > 0) {
        anime.timeline({
            easing: 'easeOutCubic',
            duration: 200
        })
            .add({
                targets: '#display-image',
                opacity: 0,

            })
            .add({
                targets: '#display-title',
                opacity: 0,
                translateX: '-10%'
            })
            .add({
                targets: '#display-description',
                opacity: 0, translateX: '-10%'
            })
            .add({
                targets: '#shop-button',
                opacity: 0, translateY: '-10%'
            })
            .add({
                begin: function () {
                    state--;
                    displayTitle.textContent = data[state].title;
                    displayDescription.textContent = data[state].description;
                    displayImage.src = data[state].image;
                }
            })
            .add({
                targets: '#display-image',
                opacity: 1,

            })
            .add({
                targets: '#display-title',
                opacity: 1,
                translateX: ['10%', '0%']
            })
            .add({
                targets: '#display-description',
                opacity: 1,
                translateX: ['10%', '0%']
            }).add({
                targets: '#shop-button',
                opacity: 1, translateY: ['-10%', '0%']
            })
    }
}
prevButton.addEventListener('click', prevInfo);

window.onload = () => {
    anime.timeline({
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 500
    }).add({
        targets: '#navbar',
        translateY: ['-100%', '0%']
        , opacity: [0, 1]
    })

        .add({
            targets: 'img',
            scale: ['1.6', '1'],
            ease: 'cubicBezier(.37,.02,.22,1.11)'
        })
        .add({
            targets: '.overlay',
            height: 0,
            delay: anime.stagger(100, { easing: 'cubicBezier(.37,.02,.22,1.11)' }) // increase delay by 100ms for each elements.
        }, '-=1000');
}
navbarCloseButton.addEventListener('click', () => {
    anime.timeline({
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 500
    }).add({
        targets: '#mobile-menu',
        translateY: ['0%', '-100%']
        , opacity: [1, 0]
    })
})
navbarOpenButton.addEventListener('click', () => {
    anime.timeline({
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 500
    }).add({
        targets: '#mobile-menu',
        translateY: ['-100%', '0%']
        , opacity: [0, 1]
    })
})