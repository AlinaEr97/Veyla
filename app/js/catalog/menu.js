// Показать-скрыть меню в мобильной версии

let burger_button = $(".menu-burger");
let menu = $(".menu");

burger_button.on("click", function () {
	menu.fadeToggle();
	$(".menu-burger__line").each(function() {
		$(this).toggleClass("menu-burger__line_active");
	});
});

$(document).mouseup(function (e) {
	if ( !burger_button.is(e.target) && burger_button.has(e.target).length === 0 && !menu.is(e.target) && menu.has(e.target).length === 0) {
		menu.fadeOut();
		$(".menu-burger__line").each(function() {
			$(this).removeClass("menu-burger__line_active");
		});
	};
});