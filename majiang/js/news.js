/**
 * Created by Administrator on 2017/4/10.
 */




var pageNum=1;
$(function(){
        //异步加载头部尾部
        $('#header').load('data/header.php',function(){
            $('.head_nav .main_nav li.news').addClass('active').siblings().removeClass('active');
        });
        $('#footer').load('data/footer.php');
        //新闻类别列表点击事件
        $('.news_list .hd li a').click(function(){
            var index=$('.news_list .hd li').index($(this).parent());
            $(this).parent().addClass('on').siblings().removeClass('on');
            $('.bt_r span').html($(this).html());
            $('.news_list .bd .tab-panel:eq('+index+') ').show().siblings().hide();
            pageNum=1;
            loadNewsList(1,index);
        });
        var parm1=getParam('categoryId');
        if(!parm1){
            loadNewsList(pageNum,1);
        }else{
            setActiveBar(parm1);
            loadNewsList(pageNum,parm1/10);
        }

});
//获得上个页面传的参数
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;
}
//根据参数设置页面的样式
function setActiveBar(target){
    if(!target){
        target=10;
    }
    var index=target/10;
    $('.news_list .hd li:eq('+index+')').addClass('on').siblings().removeClass('on');
    $('.bt_r span').html($('.news_list .hd li:eq('+index+') a').html());
    $('.news_list .bd .tab-panel:eq('+index+') ').show().siblings().hide();
}
//加载新闻列表
function loadNewsList(pageNum,index){
    var categoryId;
    //如果是通过点击最新进入新闻
    if (index===0) {
        categoryId = 'all';
    //如果是通过导航进入新闻
    }else {
        categoryId = index * 10;
    }
    $.ajax({
        type:'GET',
        url:'data/3_selectBy_categoryId.php',
        data: { pageNum: pageNum, categoryId: categoryId },
        success:function(result){
            var data=result.data;
            //按时间排序
            data.sort(compare('birthday'));
            $('.bd .tab-panel:eq('+index+') ul').html(setNewsHtml(data));
            //判断上下页箭头显示隐藏
            if (pageNum == 1 && result.pageCount > 1) {
                $('.page .prev').hide();
                $('.page .next').show();
            } else if (pageNum == 1 && result.pageCount === 1) {
                $('.page .prev').hide();
                $('.page .next').hide();
            } else if (pageNum >= result.pageCount) {
                $('.page .prev').show();
                $('.page .next').hide();
            } else if (pageNum > 1 && pageNum < result.pageCount) {
                $('.page .prev').show();
                $('.page .next').show();
            }
        },
        error:function(msg){
            alert('请求错误，请稍后重试');
        }
    });
}
//对返回的新闻内容按时间大小排序
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}
//设置每一类新闻的数量以及内容
function setNewsHtml(arr){
    var html='';
    for(var j=0;j<10&&j<arr.length;j++){
        var time = Number(arr[j].birthday);
        var newTime = new Date(time);
        var y = newTime.getFullYear();
        var m = newTime.getMonth() + 1;
        var d = newTime.getDate();
        m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
        html += "<li>\n<a href=\"detail.html?tid=" + arr[j].tid + "\">\n<p>【" + arr[j].tcategory + "】" + arr[j].tname + "</p>\n <span>" + y + "-" + m + "-" + d + "</span>\n</a>\n</li>";
    }
    return html;
}
//上一页点击事件
function prev(index){
    pageNum--;
    loadNewsList(pageNum,index);
}
function next(index){
    pageNum++;
    loadNewsList(pageNum,index);
}