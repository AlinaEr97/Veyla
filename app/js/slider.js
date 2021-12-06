new Swiper (".kitchen-slider", {
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	initialSlide: 1,
	simulateTouch: false,
	spaceBetween: 15,
	
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
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
		delay: 2000,
		disableOnInteraction: true,
	},
	speed: 1000,
	breakpoints: {
		750: {
			slidesPerView: 2,
		},
	},
});