/**
 * Created by Administrator on 2017/5/17.
 */

$(function(){
    //为此看页面顶部导航栏添加hover class
    $('#nav li.shouye a').addClass('active');

    //新闻列表导航栏
    $('.news_swap .hd li').hover(function(){
            $(this).addClass('on').siblings().removeClass('on');
            var target = $('.news_swap .hd li').index(this);
            $(".news_swap .bd>div:eq(" + target + ")").show().siblings().hide();
        }
    );
    //首页大图
    window.onload=window.onresize=function(){

        $('.product-img .imgs li').css("height",$(document).width()/1920*520+"px");
        $('.bg-wrap').css("zoom",$(document).width()/1920);
    };
    function unopened(){
        alert("【暂未开放，敬请接待！】");
    }
//    悬浮框隐藏效果
//    设置开始的状态为展开状态
    var opend=1;
    $('.m-slide-trigger').click(function(){
        if(opend){
            $('.m-slide').stop(true).animate(
                { right: -135+"px" }, 1000, function () {
                    $('.m-slide-trigger').children('span').html('展开').siblings('i').css("background-position","-3px -43px");
                    opend=0;
                });
        }else{
            $('.m-slide').stop(true).animate(
                { right: -0+"px" }, 1000, function () {
                    $('.m-slide-trigger').children('span').html('收起').siblings('i').css("background-position","-3px 0");
                    opend=1;
                });
        }

    });

});
