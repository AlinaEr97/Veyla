const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const curentPopup = document.querySelector('.popup__content');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener("click", function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup-open');
		if (popupActive) {
			popupClose (popupActive, false);
		}
		else { 
			bodyLock();
		}
		curentPopup.classList.add('popup-open');
		curentPopup.addEventListener("click", function(e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('popup-open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unclock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++) {
				const el = lockPadding[i];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup-open');
		popupClose(popupActive);
	}
});

(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parrentElement;
			}
			return null;
		};
	}
})();

(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})();

$('.popup__form').submit(function(e) {
	var popup_empty = $(this).parent().find("input").filter(function() {
	return this.value === "";
	});
	if (!popup_empty.length) {
		document.querySelector (".popup2__title").innerHTML = "Спасибо за заявку!"+ "<br>" + "Наш специалист свяжется с вами в ближайшее время!";
		document.querySelector (".popup2__title").style.marginLeft = "30px";
		document.querySelector (".popup2__title").style.paddingTop = "30px";
		document.querySelector (".popup-flex").style.display = "flex";
		document.querySelector (".popup-flex").style.marginLeft = "45px";
		let empty_input = document.querySelectorAll(".popup-form__input");
		for (i = 0; i < empty_input.length; i++) {
			empty_input[i].style.display = "none";
		}
		document.querySelector (".popup-form__button").style.display = "none";
		document.querySelector (".popup2__image").style.display = "block";
		document.querySelector (".popup-form__button2").style.display = "block";
		e.preventDefault();
	}
});

$(function() {
	$('.popup-form__button2').on("click", function () {
		document.querySelector (".popup2__title").innerHTML = "Оставьте заявку на заказ!";
		document.querySelector (".popup2__title").style.marginLeft = "0";
		document.querySelector (".popup2__title").style.paddingTop = "0";
		document.querySelector (".popup-flex").style.marginLeft = "0";
		let empty_input = document.querySelectorAll(".popup-form__input");
		for (i = 0; i < empty_input.length; i++) {
			empty_input[i].style.display = "block";
			empty_input[i].value = "";
		}
		document.querySelector (".popup-form__button").style.display = "block";
		document.querySelector (".popup2__image").style.display = "none";
		document.querySelector (".popup-form__button2").style.display = "none";
		
	});
});