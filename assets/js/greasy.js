$(document).keydown(function(event) {
	if (event.which == 37) {
		$('.carousel').carousel('prev')
	} else if (event.which == 39) {
		$('.carousel').carousel('next')
	}
});
