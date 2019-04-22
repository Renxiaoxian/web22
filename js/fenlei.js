$(function() {
	$(".jifen_left ul li").click(function() {
		$(this).addClass('jifen_left_active').siblings().removeClass('jifen_left_active');
		var fare_table_id = $(this).index();
		$(".jifen_icons_block").find(".jifen_icons").each(function() {
			var table_index = $(this).index();
			if(table_index == fare_table_id) {
				$(this).siblings().hide().end().show();
			}
		});
	});
});