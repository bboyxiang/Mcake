/**
 * Created by gaopeng on 15/12/20.
 */
$(function(){
    $("#Vanlla").mouseover(function(){
        $("#Vanlla").css("background","url(images/pro_cp_01.png)no-repeat center").html("")
        //$("#Vanlla >a").find("img").hide();
        //$("#Vanlla >a").find("span").hide();
    });
    $("#Vanlla").mouseout(function(){
        //$("#Vanlla >a").find("img").show();
        //$("#Vanlla >a").find("span").show();
        $("#Vanlla").css("background","").html("<a href='#xc'><img src='images/vanilla_wz_01.png' alt=''/><span>经典香草拿破仑</span></a>")
    })

    $("#Blueberry").mouseover(function(){
        $("#Blueberry").css("background","url(images/pro_cp_02.png)no-repeat center").html("");
    });
    $("#Blueberry").mouseout(function(){
        $("#Blueberry").css("background","").html(" <a href=''#nm'><img src='images/blueberry_wz_01.png' alt=''/><span>蓝莓轻乳拿破仑</span></a>")
    });

    $("#npl1893").mouseover(function(){
        $("#npl1893").css("background","url(images/pro_cp_03.png)no-repeat center").html("");
    })
    $("#npl1893").mouseout(function(){
        $("#npl1893").css("background","").html("<a href='#m1893'><img src='images/npl1893_wz_01.png' alt=''/><span>拿破仑1983</span></a>")
    });

    $(".npl4094").click(function(){
        //$("html,body").animate({scrollTop:1000}, 100);
        $("body").animate({scrollTop:2000},500)
    })
})
//box1-----------------
$(function () {
    $("#j_box2 .box22").click(function () {
        $("#j_box2 .box2_img").slideUp(1000);
        $(this).slideUp(500);
    })
    $("#j_box3 .box22").click(function () {
        $("#j_box3 .box2_img").slideUp(1000);
        $(this).slideUp(500);
    })
    $("#j_box4 .box22").click(function () {
        $("#j_box4 .box2_img").slideUp(1000);
        $(this).slideUp(500);
    })
});

//foot----------------
$(function(){
    $(".box5 #foot11").slideUp(100)
    $(".box5 .foot1").mouseover(function(){
        $(".box5 #foot11").stop().slideDown(200)
    });
    $(".box5 .foot1").mouseout(function(){
        $("#foot11").stop().slideUp(200)
    });

    $("#foot22").slideUp(100);
    $(".box5 .foot2").mouseover(function(){
        $("#foot22").stop().slideDown(200);
    });
    $(".box5 .foot2").mouseout(function(){
        $("#foot22").stop().slideUp(200)
    });

    $("#foot33").slideUp(100);
    $(".box5 .foot3").mouseover(function(){
        $("#foot33").stop().slideDown(200)
    });
    $(".box5 .foot3").mouseout(function(){
        $("#foot33").stop().slideUp(200);
    })
})