/**
 * Created by Administrator on 2017/5/26.
 */
$(function(){
    //Ϊ��ҳ��ͷ�����hover class
    $('#nav li.xinwen a').addClass('active');
    //��������б����¼�
    $('.newnav ul li a').click(function(){
        var index=$('.newnav ul li').index($(this).parent());
        $(this).parent().addClass('on').siblings().removeClass('on');
        //$('.bt_r span').html($(this).html());
        $('.nlist .tab-panel:eq('+index+') ').show().siblings().hide();
    });
});