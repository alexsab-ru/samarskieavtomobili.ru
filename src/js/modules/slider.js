import Swiper, {Lazy, Pagination, Navigation, Autoplay} from 'swiper';

Swiper.use([Lazy, Pagination, Navigation, Autoplay]);

let bannerSlider;
let loop = false;

const initSlider = (num = 0, loop) => {
	bannerSlider = new Swiper('.banner-slider', {
		loop: loop,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		speed: 500,
		preloadImages: false,
		lazy: true,
		watchSlidesProgress: true,
		initialSlide: num,
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
}

const slides = document.querySelectorAll('.banner-slide');

if (slides.length > 1) loop = true;

initSlider(0, loop);


// const bannerSlider = new Swiper('.banner-slider', {
// 	loop: true,
// 	slidesPerView: 1,
// 	speed: 600,
// 	preloadImages: false,
// 	lazy: true,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 			type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
// 			clickable: true,
// 	},
// 	breakpoints: {

// 		}
// })