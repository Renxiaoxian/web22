$(function(){
	$('.top-el').on("click",function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
})
