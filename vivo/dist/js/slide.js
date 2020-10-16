define(["jquery"], function($){
    function download(){
        $.ajax({
            url: "../data/slide.json",
            success: function(data){
                var slideArr = data.data.list.list;
                for(var i = 0; i < slideArr.length; i++){
                    $(`<div class="main-shop">
                    <div class="main-shopt">
                        <a href=""><img src="${slideArr[i].pc_img}" alt="" class="imgbox">
                        <img src="images/wrap1.png" alt="" class="imgbox2">
                    </a>
                    </div>
                    <div class="main-shopb">
                        <p class="main-shop1">${slideArr[i].goods_name}</p>
                        <p class="main-shop2">${slideArr[i].desc}</p>
                        <p class="main-shop3"><span class="text"><dfn>￥</dfn>${slideArr[i].seckill_Price}</span>
                        <span class="text2"><dfn>￥</dfn>${slideArr[i].goods_price}</span>
                        </p>
                    </div>
                </div>`).appendTo(".main-c");
                }
                
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }
    
    
    // function slideTab(){
    //     var aSpans = $(".btns1","btns2");
    //     console.log(aSpans)
    //     var iNow = 0;
    //     var count = Math.ceil(26 / 4);

    //     //启动定时器，让其一开始自己滚动
    //     var timer = setInterval(function(){
    //         iNow++;
    //         tab();
    //         if(iNow == count){
    //             clearInterval(timer);
    //         }
    //     }, 4000);

    //     aSpans.click(function(){
    //         if($(this).index() == 0){
    //             iNow--;
    //             iNow = Math.max(0, iNow);
    //         }else{
    //             iNow++;
    //             iNow = Math.min(count, iNow)
    //         }
    //         tab();
    //     })
    //     function tab(){
    //         var iTarget = iNow == count ? iNow * 1240 - 293 : iNow * -1240;
    //         $(".main-shop").css({
    //             transform: `translate3d(${iTarget}px, 0px, 0px)`,
    //             transitionDuration: "1000ms"
    //         })
    //     }
        
    // }
    return {
        download: download,
        // slideTab: slideTab,
        // countDown: countDown
    }
})