$(document).ready(function() {
	var imgPath = "../assets/img/presentation_images/";
	$("ul#sortable1").append("<span class='pres-title'>Introduction</span>");
	for (var i = 0; i < 2; i++) {
		var string = "<li class='span2 liste'><div class='thumb' style=\"background-image: url('" + imgPath + "justin-00" + (i + 1) + ".png')\"><span class='imgnum'>#" + (i + 1) + "</span></div></li>";
		$("ul#sortable1").append(string);
	}
	$("ul#sortable2").append("<span class='pres-title'>Presentation Flow</span>");
	for (var i = 0; i < 2; i++) {
		var string = "<li class='span2 liste'><div class='thumb' style=\"background-image: url('" + imgPath + "nate-00" + (i + 1) + ".png')\"><span class='imgnum'>#" + (i + 1) + "</span></div></li>";
		$("ul#sortable2").append(string);
	}
	$("ul#sortable3").append("<span class='pres-title'>PPT --> PNG</span>");
	for (var i = 0; i < 2; i++) {
		var string = "<li class='span2 liste'><div class='thumb' style=\"background-image: url('" + imgPath + "grey-00" + (i + 1) + ".png')\"><span class='imgnum'>#" + (i + 1) + "</span></div></li>";
		$("ul#sortable3").append(string);
	}
	$("ul#sortable4").append("<span class='pres-title'>Database</span>");
	for (var i = 0; i < 2; i++) {
		var string = "<li class='span2 liste'><div class='thumb' style=\"background-image: url('" + imgPath + "raghav-00" + (i + 1) + ".png')\"><span class='imgnum'>#" + (i + 1) + "</span></div></li>";
		$("ul#sortable4").append(string);
	}
});
