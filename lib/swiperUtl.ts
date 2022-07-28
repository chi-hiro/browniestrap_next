export const initialSwiperOption = (model: string, duration: number | undefined, nav: boolean | undefined, pagination: boolean | undefined) => {
    let options: {[key: string]: any} = {
        loop: true,
        speed: 300,
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        grabCursor: true,
        watchOverflow: true,
        preloadImages: false,
        lazy: {
            checkInView: true,
            loadPrevNext: true,
            loadPrevNextAmount: 1
        },
        navigation: false,
        pagination: false
    }

    if (duration) {
        options.autoplay = {
            delay: duration,
            disableOnInteraction: false
        }
    }

    if (nav) {
        options.navigation = true
    }

    if (pagination) {
        options.pagination = true
    }

    switch (model) {
        case 'visual':
            options.speed = 1000
            options.effect = 'fade'
            options.fadeEffect = { crossFade: true }
            options.centeredSlides = true
        break

        case 'slide':
            options = {
                ...options,
                speed: 600,
                slidesPerView: 1.2,
                centeredSlides: true,
                lazy: {
                    ...options.lazy,
                    loadPrevNextAmount: 2
                },
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 1.5
                    }
                }
            }
        break

        case 'lineup':
            options = {
                ...options,
                preloadImages: true,
                slidesPerView: 2.2,
                loop: false,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 4.2,
                        spaceBetween: 40,
                    }
                }
            }
        break
    }

    return options
}