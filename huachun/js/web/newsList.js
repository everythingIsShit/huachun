/**
 * Created by Administrator on 2017/5/26.
 */
$(function(){
    //为本页面头部添加hover class
    $('#nav li.xinwen a').addClass('active');
    //新闻类别列表点击事件
    $('.newnav ul li a').click(function(){
        var index=$('.newnav ul li').index($(this).parent());
        $(this).parent().addClass('on').siblings().removeClass('on');
        //$('.bt_r span').html($(this).html());
        $('.nlist .tab-panel:eq('+index+') ').show().siblings().hide();
    });
});