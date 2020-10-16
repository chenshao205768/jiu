define(["jquery"],function($){
    function download(){
        //数据下载
        $.ajax({
            url: "../data/nav.json",
            success: function(result){
                //第一部分，实现轮播图效果
                var bannerArr = result.banner;
                for(var i = 0; i < bannerArr.length; i++){
                    $(`<a href="#">
                        <img class = 'swiper-lazy swiper-lazy-loaded' src = '../images/banner/${bannerArr[i].img}' alt=""/>
                    </a>`).appendTo("#J_homeSwiper .swiper-slide");
                    var node = $(` <a href="#" class = 'swiper-pagination-bullet'></a>`);
                    if(i == 0){
                        node.addClass("swiper-pagination-bullet-active");
                    }
                    node.appendTo("#J_homeSwiper .swiper-pagination");
                }
            },
            error: function(msg){
                console.log(msg);
                
            }
        })
        topNavDownload();
        leftNavDownload();
    }
    function topNavDownload(){
        $.ajax({
            url: "../data/nav.json",
            success:function(data){
                var topNavArr = data.topNav;
                topNavArr.push({title:"商城"},{title:"服务"});
                for(var i =0;i<topNavArr.length;i++){
                   $(`<li data-index="${i}" class="nav-top"><a href="">${topNavArr[i].title}</a></li>`).appendTo(".nav-c .nav-list ul");
                var node = $(`<ul class = "menu-ul" style = "display: ${i == 0 ? 'block' : 'none'}">
                    </ul>`);
                    node.appendTo(".menu-c")
                    //取出所有的子菜单选项
                    if(topNavArr[i].childs){
                        var childsArr = topNavArr[i].childs;
                        for(var j = 0; j < childsArr.length; j++){
                            $(`<li><img src="${childsArr[j].img}" alt="">   
                            <a href="">${childsArr[j].a}</a>
                            </li>`).appendTo(node);
                        }
                 }    
                }
                $(`<li class="xinxi"><a href=""><span class="iconfont icon-xinxi"></span></a> </li>`).appendTo(".nav-c .nav-list ul");
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //顶部导航添加移入移出效果
    function topNavTab(){
        $(".nav-list ul").on("mouseenter","li",function(){
            var index =  $(this).index()
            if(index>=0&&index<=7){
                $(".menu").css({display:"block"});
                $(".menu-c").find("ul").eq(index).css("display","block").siblings("ul").css("display","none");
            }
        })
        $(".menu").on("mouseleave",function(){
            $(".menu").css({display:"none"});
        })
    }

    function leftNavDownload(){
        $.ajax({
            url: "../data/nav.json",
            success: function(data){
                //第二部分，实现侧边导航栏
                var sideArr = data.sideNav;
                for(var i = 0; i < sideArr.length; i++){
                    var node = $(`<div class="banner-list1"><a href=""><span class="span-list1">${sideArr[i].title}</span><span class="span-list2">></span></a>
                     <div class="aside-lists">
                     <ul class="lists-ul">

                     </ul>
                        </div>
                </div>`);
                    node.appendTo(".banner-list");
                    
                    //取出其中的子节点
                    var childArr = sideArr[i].child;
                    for(var j = 0; j < childArr.length; j++){
                            
                        
                        $(`<li class="lists-li">
                        
                        <img src="${childArr[j].img}" alt="">
                        <span>${childArr[j].title}</span>
                    </li>`).appendTo($(".banner-list").find(node.find('ul')));
                    }
                }
                leftNavTab()
            }
        })
    }
    function leftNavTab(){
        var menulist = $(".banner-list").find(".banner-list1")
        console.log(menulist)
        var menulist2 = $(".banner-list").find(".aside-lists")
        console.log(menulist2)
        // console.log(menulist2)
      menulist.each(function(index,ietm){
        
          // console.log(ietm1)
        ietm.onmouseenter=function(){
            $(menulist2[index]).show();
            
        }
         $(menulist2[index]).onmouseenter=function(){
              $(menulist2[index]).show();
              
            }
        ietm.onmouseleave=function(){
         
            $(menulist2[index]).hide();
      }
    
      })
      }

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
                aImgs = $('.banner').find(' .ba-img');
                console.log(aImgs)
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

    return {
        topNavDownload: topNavDownload,
        download: download,
        topNavTab: topNavTab,
        leftNavDownload:leftNavDownload,
        leftNavTab:leftNavTab,
        bannerTab:bannerTab
    }
})
