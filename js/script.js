document.addEventListener('DOMContentLoaded', function() {
    const brandsList = document.querySelector('.block');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const brandItems = document.querySelectorAll('.block__item');
    let initialVisibleItems = 6;

    // Устанавливаем количество видимых элементов в зависимости от ширины экрана
    if (window.innerWidth >= 1120) {
        initialVisibleItems = 8;
    }

    // Скрываем все элементы, кроме первых initialVisibleItems
    brandItems.forEach((item, index) => {
        if (index >= initialVisibleItems) {
            item.style.display = 'none';
        }
    });

    // Обработка клика на кнопку "Показать все"/"Скрыть"
    showMoreBtn.addEventListener('click', function() {
        const btnText = showMoreBtn.querySelector('.show-more-btn__text');
        if (btnText.textContent === 'Показать все') {
            brandItems.forEach(item => item.style.display = 'flex');
            btnText.textContent = 'Скрыть';
        } else {
            brandItems.forEach((item, index) => {
                if (index >= initialVisibleItems) {
                    item.style.display = 'none';
                }
            });
            btnText.textContent = 'Показать все';
        }
    });
});
    

    window.addEventListener('DOMContentLoaded', () => {

        const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
            let swiper;

            breakpoint = window.matchMedia(breakpoint);
            const enableSwiper = function (className, settings) {
                swiper = new Swiper(className, settings);
            }

            const checker = function () {
                if (breakpoint.matches) {
                    return enableSwiper(swiperClass, swiperSettings);
                } else {
                    if (swiper !== undefined) swiper.destroy(true, true);
                    return;
                }
            };

            breakpoint.addEventListener('change', checker);
            checker();
        }

        resizableSwiper(
            '(max-width: 767px)',
            '.swiper',
            {
                slidesPerView: 1.3,
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    400: {
                        spaceBetween: 15,
                        slidesPerView: 1.7,
                    },
                    560: {
                        spaceBetween: 10,
                        slidesPerView: 2.4,
                    }
                },
            }
        );
    });

















