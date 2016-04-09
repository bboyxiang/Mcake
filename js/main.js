// JavaScript Document
$(function () {

	//获取浏览器当前窗口可视区域宽度和高度 
	var w_width = $(window).width();
	var w_height = $(window).height();
	var otTime = 0;
	var index = 0;
	var new_width=(1920-w_width)/2;
	var new_height = w_height -290;
	//console.log(w_height);
	
	//console.log(w_width,w_height);
	$("#container").animate({left: '-'+new_width}, 1);
	$(".page05").css({ width: w_width});


	/** Event handler for mouse wheel event.
		 *鼠标滚动事件
		 */
		var wheel = function(event) {
			var delta = 0;
			if (!event) /* For IE. */
				event = window.event;
			if (event.wheelDelta) { /* IE/Opera. */
				delta = event.wheelDelta / 120;
			} else if (event.detail) {
				
				delta = -event.detail / 3;
			}
			if (delta)
				handle(delta);
			/** Prevent default actions caused by mouse wheel.
			 * That might be ugly, but we handle scrolls somehow
			 * anyway, so don't bother here..
			 */
			if (event.preventDefault)
				event.preventDefault();
			event.returnValue = false;
		}

		/** Initialization code. 
		 * If you use your own event management code, change it as required.
		 */
		if (window.addEventListener) {
			/** DOMMouseScroll is for mozilla. */
			window.addEventListener('DOMMouseScroll', wheel, false);
		}
		/** IE/Opera. */
		//window.onmousewheel = document.onmousewheel = wheel;
		
		
		document.onmousewheel = wheel;
		/** This is high-level function.
		 * It must react to delta being more/less than zero.
		 */


		var obj = {
			"0": fn0,
			"1": fn1,
			"2": fn2,
			"3": fn3,
			"4": fn4
			
		}
		
		function setotTime(time,step,speed){
			if(time>0){
				otTime = time;
			}
			// console.log(otTime)
			if(otTime>0&&step&&speed){
				otTime = otTime -step;
				setTimeout(function(){setotTime(0,step,speed)},speed)
			}
		}
		
		/*function fn(width,speed){
			var new_width=(1920-w_width)/2;
			var new_width=new_width+width;
			//console.log(new_width);
			var new_width1=(new_width-w_width)/2;
			//console.log(new_width1);
			$("#container").animate({left: '-'+new_width,top:0}, speed);
		}*/
		
		function fn(width,top_num,speed){
			var new_width=(1920-w_width)/2;
			var new_width=new_width+width;
			var foot_top = top_num+680;
			
			
			var new_width1=(new_width-w_width)/2;
			
			$("#container").animate({left: '-'+new_width,top:'-'+top_num}, speed);
			
			$(".page05").css({"top":"740px"})
			
		}
		
		function fn0(speed){
			fn(0,0,speed)
		}
		function fn1(speed){
			fn(1360,0,speed)
			//console.log(1);
		}

		function fn2(speed){
			//console.log(w_width);
			fn(2720,0,speed)
			//console.log(2);
		}

		function fn3(speed){
			//console.log(w_width);
			fn(3940,0,speed)
			//console.log(3);
		}
		function fn4(speed){
			//fn(3800,981,speed);
			
			var new_width=(1920-w_width)/2;
			var new_width=new_width+3940;
			var new_height=(981-w_height);
            //var new_height=new_height-260;
			
			var new_width1=(new_width-w_width)/2;
			//$("#container").animate({left: '-'+new_width,top:'-'+new_height}, speed);
			
			//判断浏览器高度，来判断页脚的显示情况
			/*if(w_height>1000){

				setTimeout(function(){$(".page05").css({"top":740})},1000)
			}else if(w_height<999 && w_height>950){
				setTimeout(function(){$(".page05").css({"top":720})},1000)
			}else if(w_height<949 &&w_height>900){
				setTimeout(function(){$(".page05").css({"top":670})},1000)
			}else if(w_height<899 && w_height>850){
				setTimeout(function(){$(".page05").css({"top":620})},1000)
			}else if(w_height<849 && w_height>800){
				setTimeout(function(){$(".page05").css({"top":570})},1000)
			}else if(w_height<799 && w_height>750){
				setTimeout(function(){$(".page05").css({"top":520})},1000)
			}else if(w_height<749 && w_height>680){
				setTimeout(function(){$(".page05").css({"top":470})},1000)
			}else{
				//alert(2);
				var new_height2=(680-280);

				setTimeout(function(){
					$(".page05").css({"top":new_height2})

					},1000)
			}*/
			//console.log(4);
		}
		
		
		
		var handle = function(delta) {
			
			if(otTime <=0){
				var curindex = index;
				//delta<0 滚轮向下滚动   delta>0  滚轮向上滚动
				if (delta < 0) {
					index =index<4? index +1:4
				} else {
					index =index>0? index -1:0 
				}
				if(curindex != index){
					setotTime(2000,1000,1000);
					obj[index](1000);
				}
				//console.log(index);
				return;
			}
			
			
		}

		$(".go2page2").click(function(){

       		setotTime(3000,1000,1000);
			obj[1](1000);
			index = 2;
    	});
    	$(".go2page3").click(function(){

       		setotTime(3000,1000,1000);
			obj[2](1000);
			 index = 3;
    	})

    	$(".go2page4").click(function(){

       		setotTime(3000,1000,1000);
			obj[3](1000);
			 index = 4;
    	})



})

// var name = '111'

// function fn(){
// 	name = 222
// }
// fn();
// console.log(name)
