/**
 * Created by mingjiao on 2015/12/19.
 */
$(function(){
    // 表头和尾部
    $("#j_city i").click(function(){
        $(this).next().css("display","none").siblings("#j_city a").css("display","block");
    });
    $("#j_top_nav li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
    $("#j_footer_wx_a").mouseenter(function(){
        $(this).children("span").show();
    }).mouseleave(function(){
        $(this).children("span").hide();
    });
    // 登录背景的隐藏和显现
    $(".login-btn").hover(function(){
        $(this).css("background","#8D6A54")
    },function(){
        $(this).css("background","#B0916A")
    })
    //  正则表达式，账号和密码输出部分
    $("#celphe").focus(function(){
        $(this).next().next().hide()
    })
    $("#celphe").blur(function(){
        if(this.value == "") {
            $(this).next().next().show()
        }
        if (/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{5}$/.test(this.value) || /^\D{5,}$/
                .test(this.value)) {
            $(this).next().html("格式正确").css("color", "#3CB035").removeClass().addClass("right")
        }
        else {
            $(this).next().html("请输入您的有效账号哦").css("color","#ED846F").removeClass().addClass("wrong")
        }
    })
    $("#paswrd").focus(function(){
        $(this).next().next().hide()
    })
    $("#paswrd").blur(function(){
        if(this.value == "") {
            $(this).next().next().show();
        };
        if (/^[a-zA-Z0-9_-]{6,18}$/
                .test(this.value)) {
            $(this).next().html("格式正确").css("color", "#3CB035").removeClass().addClass("right")
        }
        else {
            $(this).next().html("格式不正确哦").css("color","#ED846F").removeClass().addClass("wrong")
        }
    })

});
