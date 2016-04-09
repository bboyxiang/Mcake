/**
 * Created by mingjiao on 2015/12/19.
 */
    $(function(){

        $("#j_city i").click(function(){
            $(this).next().show().siblings("#j_city a").slideToggle();
        });
        $("#j_city a").click(function(){
                var txt = $(this).text();

               $("#j_city a:eq(0)").text(txt).nextAll().hide();
        });

        $("#j_top_nav li").click(function(){
           $(this).addClass("current").siblings().removeClass("current");
        });


        //var footer_top = document.getElementById("j_footer_top");
        //var footer_top_imgs = footer_top.getElementsByTagName("img");
        //
        //for (var i = 0; i < footer_top_imgs.length; i++) {
        //    footer_top_imgs[i].onmouseover = function() {
        //        this.style.borderColor = "#7B9196";
        //    }
        //    footer_top_imgs[i].onmouseout = function() {
        //        this.style.borderColor = "#D9E8EC";
        //    }
        //}
        //
        //$("#j_footer_wx_a").mouseenter(function(){
        //    $(this).children("span").show();
        //}).mouseleave(function(){
        //    $(this).children("span").hide();
        //});
    });