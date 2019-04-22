/*rem适配*/
(function(deviceWidth) {
	var root = document.documentElement;
	var w = root.clientWidth;
	root.style.fontSize = (w > 960 ? 960 : w < 320 ? 320 : w) / deviceWidth * 100 + "px";
})(750);