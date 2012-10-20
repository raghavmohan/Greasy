var menuToggled = false;
var slideOrderToggled = false;

$(document).keydown(function(event) {
	if (event.which == 37) {
		$('.carousel').carousel('prev')
	} else if (event.which == 39 || event.which == 32 || event.which == 13) {
		$('.carousel').carousel('next')
	}
});

$("#menu-handle").click(function() {
	if (!menuToggled) {
		menuToggled = true;
		$('#menu').animate({left: '+=100'}, 300, function() { 
			$('#menu-handle').animate({opacity: '1.0'}, 200, function() {});
		});
	} else {
		menuToggled = false;
		$('#menu').animate({left: '-=100'}, 300, function() {
			$('#menu-handle').animate({opacity: '0.5'}, 200, function() {});
		});
	}
});

$("#menu-handle").hover(function() {
		if (!menuToggled) {
			$('#menu-handle').animate({opacity: '1.0'}, 200, function() {});
		}
	},
	function() {
		if (!menuToggled) {
			$('#menu-handle').animate({opacity: '0.5'}, 200, function() {});
		}
	}
);

$("button#exit").click(function() {
	window.location = 'userpresentations.html';
});

$("button#slides").click(function() {
	if (!slideOrderToggled) {
		slideOrderToggled = true;
		$("#menu").animate({left: '+=400'}, 300, function() {});
	} else {
		slideOrderToggled = false;
		$("#menu").animate({left: '-=400'}, 300, function() {});
	}
});

