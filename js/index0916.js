// JavaScript Document
$(function () {

	$(".poundsbtn").click(function(){
		//alert(1);
        $(".pounds").hide();
        $(this).children(".pounds").toggle();
        $(".number").hide();
        return false;
    });
    
    $(".numbersbtn").click(function(){
        $(".number").hide();
        $(this).children(".numbers").toggle();
        $(".pounds").hide();
        return false;
    });

    $(".page04").click(function(){
        $(".pounds").hide();
        $(".numbers").hide();
    });


    /*
    *磅数
    */  
    $(".pounds dt").click(function(){
        $(this).parents(".poundsbtn").find("i").text($(this).html());
        if($.trim($(this).html())=="1磅"){
            $(this).parents(".goods").find(".price span").html("188");
        }else if($.trim($(this).html())=="2磅"){
            $(this).parents(".goods").find(".price span").html("288");
        }else if($.trim($(this).html())=="3磅"){
            $(this).parents(".goods").find(".price span").html("398");
        }else if($.trim($(this).html())=="5磅"){
            $(this).parents(".goods").find(".price span").html("668");
        }else if($.trim($(this).html())=="10磅"){
            $(this).parents(".goods").find(".price span").html("2200");
        }
        $(".pounds").hide();
        return false;
    });

    /*
    *数量
    */
    $(".numbersbtn dt").click(function(){
        $(this).parents(".numbersbtn").find("i").text($(this).text());
        $(".numbers").hide();
        return false;
    });



     /*通用弹框*/
    $.Dialog_09 = function (msg) {

        try {
            $("div[class='tc-con_09']").remove();
            $("div[class='tc-cover_09']").remove();
            $cover = $("<div class='tc-cover_09'id='myCover_09'>&nbsp;</div>");
            $main = $("<div class=\"tc-con_09\" id='maximPanel_09'></div>");
            $close = $("<a href='javascript:void(0);' class='close_09'>关闭</a>");
            $content = $("<div  class='tc-con-1_09'></div>");
            $content.html(msg);
            $main.append($close);
            $main.append($content);
            $(document.body).append($cover);
            $(document.body).append($main);
            $main.show(400);
            $main.focus();
            $(".tc-con").css({"margin-left":-($(".tc-con_09").innerWidth()/2),"margin-top":-($(".tc-con_9").innerHeight()/2)});

           //document.onmousewheel = null;
            //$cover.height($(document.body).height());
            $close.click(function () {
                $main.hide(300);
                $main.remove();
                $cover.remove();
                //document.onmousewheel = wheel;
            });
        }
        catch (ex) { alert(ex); }
    }

})


$(function(){

    setInterval("sugar()",200);
    setInterval("water()",250);
     setInterval("spoon()",250)
})
var index_1 = 0;
    function sugar(){

        index_1++;
//        $(".page01 .section05 img").attr("src","/shop/theme/xth1/images/activity/2015/guoqing/sugar_0"+index_1+".png");
        $(".page01 .section05 ul li").eq(index_1).show().siblings().hide();
        if (index_1 >5 ){
          index_1=1
        }

        //console.log(index);
    }
    var index_2 = 0;
    function water(){

        index_2++;
       // $(".page02 .section01 img").attr("src","/shop/theme/xth1/images/activity/2015/guoqing/water_"+index_2+".png");
        $(".page02 .section01 ul li").eq(index_2).show().siblings().hide();
        if (index_2 > 6){
          index_2=0
        }
        //console.log(index_2);
    }

    var index_3 = 0;
    function spoon(){

        index_3++;
       // $(".page03 .section02 img").attr("src","/shop/theme/xth1/images/activity/2015/guoqing/spoon_"+index_3+".png");
        $(".page03 .section02 ul li").eq(index_3).show().siblings().hide();
        if (index_3 > 4){
          index_3=0
        }
        //console.log(index_3);
    }
