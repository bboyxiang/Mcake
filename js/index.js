/* 
* @Author: xia
* @Date:   2015-12-19 17:37:07
* @Last Modified by:   xia
* @Last Modified time: 2015-12-19 23:38:54
*/

$(function(){

	//产品详情显示效果
	$(".mainMiddlePic").hover(function(){
		$(this).find('.mainMiddlePic_Item').stop().animate({
			"bottom" : 0
		})
	},function(){
		$(this).find('.mainMiddlePic_Item').stop().animate({
			"bottom" : "-56px"
		})
	});

	//sideMenu点击效果
	$(".sideMenu").find("#sideMenuTop").click(function(){
		$(this).addClass('current').siblings('dd').animate({
			"height" : "18px",
			"padding-top" : "4px",
			"padding-bottom" : "4px"
		})
		$("#sideMenuBottom").removeClass('current').siblings('dd').animate({
			"height" : "0px",
			"padding-top" : "0px",
			"padding-bottom" : "0px"
		})
	})
	$(".sideMenu").find("#sideMenuBottom").click(function(){
		$(this).addClass('current').siblings('dd').animate({
			"height" : "18px",
			"padding-top" : "4px",
			"padding-bottom" : "4px"
		})
		$("#sideMenuTop").removeClass('current').siblings('dd').animate({
			"height" : "0px",
			"padding-top" : "0px",
			"padding-bottom" : "0px"
		})
	})
})

// snow start
$(function (e) {
    setInterval(function () {
        var len = Math.ceil(Math.random()*8);
        for(var i=0; i<len;i++){
            var json = {
                left:Math.ceil(Math.random()* ($(document).width())),
                width:Math.ceil(Math.random()*30)
            }
            var snow = $("<div class='snow'><img src='images/snow.png' width='100%'/></div>");
            snow.css(json);
            $("body").append(snow);
            $("div.snow").animate({top:"100%"},10000,function(){
                $(this).remove()
            })
        }
    },500)
});
