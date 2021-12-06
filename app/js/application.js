$('.application__form').submit(function(e) {
	var empty = $(this).parent().find("input").filter(function() {
	return this.value === "";
	});
	if (!empty.length) {
		let input = document.querySelectorAll(".form__input");
		for (i = 0; i < input.length; i++) {
			input[i].value = "";
		}
		alert('Заявка отправлена!');
		e.preventDefault();
	}
});
