$(function() {
	windowInnerHeight = window.innerHeight;
	$(window).resize(function() {
		if(window.innerHeight < windowInnerHeight) {
			$(".save_btn").css("position", "static");
		} else {
			$(".save_btn").css("position", "absolute");
			window.scrollTo(0, 0);
		}
	});
});