(function (jQuery) {
    "use strict";
    if (document.querySelectorAll('#total-transactions-chart').length) {
        const options = {
        series: totalTransactions,
        chart: {
        height: 230,
        type: 'radialBar',
        },
        colors: ["#3a57e8", "#4bc7d2", '#c03221'],
        plotOptions: {
        radialBar: {
            hollow: {
                margin: 10,
                size: "50%",
            },
            track: {
                margin: 10,
                strokeWidth: '50%',
            },
            dataLabels: {
                show: false,
            }
        }
        },
        labels: ['Apples', 'Oranges'],
        };
        if(ApexCharts !== undefined) {
        const chart = new ApexCharts(document.querySelector("#total-transactions-chart"), options);
        chart.render();
        document.addEventListener('ColorChange', (e) => {
            const newOpt = {colors: [e.detail.detail2, e.detail.detail1],}
            chart.updateOptions(newOpt)

        })
        }
    }
    if ($('.d-slider1').length > 0) {
        const options = {
            centeredSlides: false,
            loop: false,
            slidesPerView: 4,
            autoplay:false,
            spaceBetween: 32,
            breakpoints: {
                320: { slidesPerView: 1 },
                550: { slidesPerView: 2 },
                991: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
                1500: { slidesPerView: 4 },
            },
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar'
            }
        }
        let swiper = new Swiper('.d-slider1',options);

        document.addEventListener('ChangeMode', (e) => {
            if (e.detail.rtl === 'rtl' || e.detail.rtl === 'ltr') {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('.d-slider1',options);
            }, 500);
            }
        })
    }

  })(jQuery)
