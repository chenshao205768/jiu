console.log("加载成功")

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "xx":"../font_d2jqdxlb194/iconfont",
        "slide": "slide"
    },
    shim: {
        "jquery-cookie": ["jquery"]
    }
})
require(['nav',"slide"],function(nav,slide){
    nav.download();
    nav.topNavTab();
    nav.leftNavTab();
    nav.bannerTab();
    slide.download();
    slide.slideTab()
})