var menuToggled = false;
var slideOrderToggled = false;
var imgPath = "../assets/img/presentation_images/";
var order = new Array();

var presentations = new Array();
presentations.push(new Presentation("Introduction", "justin", 2));
presentations.push(new Presentation("Flow", "nate", 2));
presentations.push(new Presentation("PPT --> PNG", "grey", 2));
presentations.push(new Presentation("Database", "raghav", 2));

function Presentation (title, name, slides) {
	this.title = title;
	this.name = name;
	this.slides = slides;
}

$(document).keydown(function(event) {
	if (event.which == 37) {
		$('.carousel').carousel('prev')
	} else if (event.which == 39 || event.which == 32 || event.which == 13) {
		$('.carousel').carousel('next')
	}
});

$(document).ready(function() {

	$('.carousel').carousel('pause');

	for (var i = 0; i < 4; i++) {
		var string = "<li id='" + presentations[i].name + "' class='ui-state-default'><img src='" + imgPath + "" + presentations[i].name + "-001.png' />";
		string += "<span>Presentation " + (i + 1) + "</span></li>";
		$('ul#sortable').append(string);

		// Add Transition Slide
		string = "<div id='" + presentations[i].name + "' class='item";
		if (i == 0) string += " active";
		string += "'><div class='transition-box'><span class='transition-next'>Next Up:</span>";
		string += "<span class='transition-title'>" + presentations[i].title + "</span>";
		string += "<span class='transition-author'>" + presentations[i].name + "</span>";
		string += "</div></div>";
		$('div.carousel-inner').append(string);

		for (var j = 1; j <= presentations[i].slides; j++) {
			var number = "" + j;
			if (j < 10) number = "0" + number;
			if (j < 100) number = "0" + number;
			var name = presentations[i].name + "-" + number;

			string = "<div id='" + presentations[i].name + "' class='item";
			if (j == presentations[i].slides) string += " last";
			string += "'><img src='" + imgPath + name + ".png' />";
			string += "</div>";
			$('div.carousel-inner').append(string);
		}
	}

	$( "#sortable" ).sortable({
		update: function(event, ui) {
			var info = $(this).sortable('toArray');
			for (var i = 0; i < info.length; i++) {
				order[info[i]] = i;
			}

			var myList = $('div.carousel-inner');
			var listItems = myList.children('div').get();
			listItems.sort(function(a,b){
				var nameA = $(a).attr('id');
				var nameB = $(b).attr('id');
				return order[nameA] <= order[nameB];
			});

			$(myList).append(listItems);
		}
	});

	$( "#sortable" ).disableSelection();

	$('#myCarousel').bind('slid', function() {
		var object = $(".item.active");
		if (object.hasClass('last')) {
			var nextID = object.next().attr('id');
			if (nextID)
				showNotification(nextID);
		}
	});
});

function showNotification(name) {
	$("div.notification").html("<span>Get Ready " + name + "!</span>");
	$("div.notification").fadeIn(400).delay(2500).fadeOut(400);
}

$("#menu-handle").click(function() {
	if (!slideOrderToggled) {
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

