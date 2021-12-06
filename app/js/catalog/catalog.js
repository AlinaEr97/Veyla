let direct = document.querySelectorAll('#direct');
let corner = document.querySelectorAll('#corner');
let bar = document.querySelectorAll('#bar');

$(function() {
	$('#direct-list').on("click", function() {
		for (let d = 0; d < direct.length; d++) {
			direct[d].style.display = 'block';
		}
		for (let b = 0; b < bar.length; b++) {
			bar[b].style.display = 'none';
		}
		for (let c = 0; c < corner.length; c++) {
			corner[c].style.display = 'none';
		}
	});
});

$(function() {
	$('#corner-list').on("click", function () {
		for (let c = 0; c < corner.length; c++) {
			corner[c].style.display = 'block';
		}
		for (let b = 0; b < bar.length; b++) {
			bar[b].style.display = 'none';
		}
		for (let d = 0; d < direct.length; d++) {
			direct[d].style.display = 'none';
		}
	});
});

$(function() {
	$('#bar-list').on("click", function() {
		for (let b = 0; b < bar.length; b++) {
			bar[b].style.display = 'block';
		}
		for (let c = 0; c < corner.length; c++) {
			corner[c].style.display = 'none';
		}
		for (let d = 0; d < direct.length; d++) {
			direct[d].style.display = 'none';
		}
	});
});

let all = document.querySelectorAll('.kitchen-offer');
$(function() {
	$('#all-list').on("click", function() {
		for (let a = 0; a < all.length; a++) {
			all[a].style.display = 'block';
		}
	});
});

