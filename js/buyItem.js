/**
 * Created by Administrator on 2015/12/20.
 */
$(window).load(function() {

	//鼠标移入，移出图片，mask和bigPic显示和隐藏
	$(".posa").hover(function(){
		$(".mask").show();
		$(".bigPic").show();
	},function(){
		$(".mask").hide();
		$(".bigPic").hide();
	});

	//鼠标移动事件
	$(".posa").mousemove(function(e){
		var left = $(this).offset().left;
		var top = $(this).offset().top;
		var x = e.pageX - left - $(".mask").width()/2;
		var y = e.pageY - top - $(".mask").height()/2 ;
		
		if(x <= 0) {
			x=0;
		}

		if(x >= $(this).width() - $(".mask").width()) {
			x = $(this).width() - $(".mask").width();
		}
		if(y <= 0) {
			y=0;
		}

		if(y >= $(this).height() - $(".mask").height()) {
			y = $(this).height() - $(".mask").height();
		}
		
		$(".mask").css({
			"left" : x+"px",
			"top" : y+"px"
		})		
		
		var salsex= ($(".bigPic > img").width()-$(".bigPic").width()) / ($(this).width()-$(".mask").width());
		var salsey= ($(".bigPic > img").height()-$(".bigPic").height()) / ($(this).height()-$(".mask").height());
		salsex = salsex.toFixed(2);
		salsey = salsey.toFixed(2);
		$(".bigPic > img").css({
			"left" : -salsex *  x +"px",
			"top" : -salsey * y +"px"
		})


	})

});
	