$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环模式选项
	})
	$(".details_tab ul li").click(function() {
		$(this).addClass('details_tab_active').siblings().removeClass('details_tab_active');
		var fare_table_id = $(this).index();
		$(".details_tab_content").find(".details_tab_content_div").each(function() {
			var table_index = $(this).index();
			if(table_index == fare_table_id) {
				$(this).siblings().hide().end().show();
			}
		});
	});
});