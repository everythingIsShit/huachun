/**
 * Created by Administrator on 2017/5/17.
 */

var huachun={
    init:function(){
        //网站头部
        $('#nav li a').hover(function(){
            $('#nav li a').removeClass('active');
            $(this).addClass('active');
        });
        //新闻导航
        $('.news_swap .hd li').hover(function(){
                $(this).addClass('on').siblings().removeClass('on');
                var target = $('.news_swap .hd li').index(this);
                $(".news_swap .bd>div:eq(" + target + ")").show().siblings().hide();
            }
        );

    }
};
huachun.init();
window.onload=window.onresize=function(){
    $('.product-img .imgs li').css("height",$(document).width()/1920*520+"px");
    $('.bg-wrap').css("zoom",$(document).width()/1920);
};


