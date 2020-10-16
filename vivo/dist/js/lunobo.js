//轮播
// var index=0;
// var nextIndex=0;
// var timer;

// autoPlay();

// function animationPlay(){
// 	$(".banner img").eq(index).stop().fadeOut(0);
// 	$(".banner img").eq(nextIndex).stop().fadeIn(0);
// 	$(".banner ul li").eq(nextIndex).addClass("list-one").siblings().removeClass("list-one");    
// }

// function autoPlay(){
// 	timer = setInterval(function(){
// 		if(nextIndex >= 2){
// 			nextIndex = 0;
// 		}else{
// 			nextIndex++;
// 		}
// 		animationPlay();
// 		index = nextIndex;
// 	},4000);
// }

// $('.banner').mouseenter(function(){
// 	clearInterval(timer);
// 	$('.bannerArr').css('display','block');
// }).mouseleave(function(){ 
// 	$('.bannerArr').css('display','none');
// 	timer = setInterval(function(){
// 		nextIndex++;
// 		autoPlay();
// 	},4000)
// });
// $(".prev").click(function(){
// 		nextIndex--;
// 		autoPlay();
// 	})
// $(".next").click(function(){
// 		nextIndex++;
// 		autoPlay();
// 	})

// $(".banner ul").on('click','li',function(){
// 	clearInterval(timer);
// 	nextIndex = $(this).index();
// 	animationPlay();
// 	index = nextIndex;
// },function(){
// 	autoPlay();
// });



function bannerTab(){
	var iNow = 0;
	var aImgs = null;
	var aBtns = null;
	var timer = null;
	
	timer = setInterval(function(){
		iNow++;
		tab();
	},4000)

	function tab(){
		if(!aImgs){
			aImgs = $('.banner').find('img');
		}
		if(!aBtns){
			aBtns = $('.banner ul').find('li');
		}
		if(iNow == 5){
			iNow = 0;
		}
		if(iNow == -1){
			iNow = 4;
		}
		aImgs.hide().css('opacity',0.2).eq(iNow).show().animate({opacity:1}, 500);
		aBtns.removeClass('list-one').eq(iNow).addClass('list-one');
	}

	$('.banner').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function () { 
		timer = setInterval(function(){
			iNow++;
			tab();
		},4000)

	});

	$('.banner ul').on('click','li',function(){
		iNow = $(this).index();
		tab();
	})
}