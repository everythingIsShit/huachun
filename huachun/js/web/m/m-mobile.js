/**
 * Created by Administrator on 2017/6/3.
 */
$(function(){
//    新闻导航栏添加点击事件
    $('.news-swap li').click(function(){
        var index=$('.news-swap li').index(this);
        var left=-(index)*320+"px";
        $(this).addClass('on').siblings().removeClass('on');
        $('.news-swap .bd').stop(true).animate({
            left:left
        },800);
    });

//    异步获取新闻列表
    $.ajax({
        type: 'post',
        data: { "key": "InitData" },
        dataType: 'json',
        url: "http://www.hcyx178.com/Web/GetNewData",
        success: function (res) {
            var totalNews=[];//定义一个存放所有新闻的数组
            for(var key in res){//遍历所有新闻
                res[key]=eval('(' + res[key] + ')');//将每类新闻转化为数组
                for(var i=0;i<res[key].length;i++){//遍历每类新闻
                    //将每类新闻的时间转化为标准时间
                    res[key][i].IssueDate =  new Date(Date.parse(res[key][i].IssueDate));
                    //再讲各个新闻push到总新闻数组里
                    totalNews.push(eval(res[key][i]));
                }
            }
            //将总的新闻按照时间大小排序
            totalNews.sort(compare('IssueDate'));
            //所有新闻取5条最新新闻用于在最新资讯展示
            var zxzx=[];
            for(var c=0;c<5;c++){
                zxzx.push(totalNews[c]);
            }
            setNewsList(zxzx,$('.news-swap .bd .tab-panel:eq(0) ul'));
            setNewsList(res.xwgg,$('.news-swap .bd .tab-panel:eq(1) ul'));
            setNewsList(res.jchd,$('.news-swap .bd .tab-panel:eq(2) ul'));
        },
        error:function(){
            alert('新闻列表加载出错');
        }
    });
    //设置新闻列表
    function setNewsList(newsCate,elem){
        var newsHtml='';
        for(var i=0;i<newsCate.length;i++){
            var t=newsCate[i].IssueDate;
            //获取月份和日
            var m=t.getMonth()+1,d=t.getDate();
            m =(m<10 ? "0"+m:m);
            d =(d<10 ? "0"+d:d);
            var cate='';
            switch (newsCate[i].ClassID){
                case '1':
                    cate='新闻';
                    break;
                case '2':
                    cate='活动';
                    break;
            }
            newsHtml += "<li>\n                                    <a href=\"m-detail.html?NewsID=" + newsCate[i].NewsID + "\">\n                                        <p>\n                                            <span title=\"" + newsCate[i].Subject + "\"><b>\u3010" + cate + "\u3011</b>" + newsCate[i].Subject + "</span>\n                                            <i>" + m + "/" + d + "</i>\n                                    </a>\n                                </li>";

        }
        elem.html(newsHtml);
    }
    //数组内按对象某一属性排序
    function compare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
        }
    }
});
//    暂未开放
function unopened(){
    alert("【暂未开放，敬请期待！】");
}