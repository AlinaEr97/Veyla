new Swiper (".kitchen-slider", {
	loop: true,
	slidesPerView: 2,
	centeredSlides: true,
	initialSlide: 1,
	simulateTouch: false,
	spaceBetween: 15,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".kitchen-slider",
	},
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		400: {
			slidesPerView: 2,
		},
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
});