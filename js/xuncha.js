/**
 * Created by Administrator on 2015/12/19 0019.
 */
$(function () {
    // 点击右箭头下一页面
    $(".nextpage2").on("click", function () {
        $("#js_content").animate({left:-1637},1000);
    })
    $(".nextpage3").on("click", function () {
        $("#js_content").animate({left:-2997},1000);
    })
    $(".nextpage4").on("click", function () {
        $("#js_content").animate({left:-4217},1000);
    })

    // 点击左箭头上一页面
    $(".prevpage1").on("click", function () {
        $("#js_content").animate({left:-277},1000);
    })
    $(".prevpage2").on("click", function () {
        $("#js_content").animate({left:-1637},1000);
    })
    $(".prevpage3").on("click", function () {
        $("#js_content").animate({left:-2997},1000);
    })



    //页面中所有的定时器
    $(function () {
        setInterval(snow,200);
        setInterval(shui,200);
        setInterval(shao,200);
    })

    //第一页面的snow 的动画，
    var snow_index=0;
    function snow(){
        snow_index++
//                console.log(snow_index);
        $(".page01-pic4 ul li").eq(snow_index).show().siblings().hide();
        if(snow_index>6){
            snow_index=1;
        }
    }
    //第二页面的shui 的动画，
    var shui_index=0;
    function shui(){
        shui_index++
//                console.log(shui_index);
        $(".page02-pic3 ul li").eq(shui_index).show().siblings().hide();
        if(shui_index>7){
            shui_index=0;
        }
    }
    //第三页面的 shao 的动画
    var shao_index=0;
    function shao(){
        shao_index++
//                console.log(shui_index);
        $(".page03-pic5 ul li").eq(shui_index).show().siblings().hide();
        if(shui_index>5){
            shui_index=0;
        }
    }
    // 点击188磅数的那个div，
    $("#js_page04-kuang,#js_page05-kuang").click(function () {
        $(this).children("dl").slideToggle(200);
    })

    $("#js_page04-kuang dl dt").click(function () {
        var dt1index = $(this).index();
        console.log(dt1index);
        $(this).parent().prev("i").html(""+(1+dt1index)+"磅");
        $("#jiage1").text((1+dt1index)*188);

    })
    // 点击166磅数的那个div，
    $("#js_page05-kuang dl dt").click(function () {
        var dt2index = $(this).index();
        console.log(dt2index);
        $(this).parent().prev("i").html(""+(1+dt2index)+"磅");
        $("#jiage2").text((1+dt2index)*166);

    })

});
