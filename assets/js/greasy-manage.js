$(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		var string = "<li class='span2 liste'><div class='thumb'><span class='imgnum'>#" + (i + 1) + "</span></div></li>";
		$("ul#sortable").append(string);
	}
});
