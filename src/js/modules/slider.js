import Swiper, {Lazy, Pagination, Navigation, EffectFade} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation]);

const bannerSlider = new Swiper('.banner-slider', {
	loop: true,
	slidesPerView: 1,
	speed: 1000,
	preloadImages: false,
	lazy: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
			type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
			clickable: true,
	},
	breakpoints: {
		320: {
			pagination: false
		},
		580: {
			pagination: {
				el: '.swiper-pagination',
					type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
					clickable: true,
				},
			},
		}
})