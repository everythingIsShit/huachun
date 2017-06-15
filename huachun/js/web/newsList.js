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
        $('.nlist .tab-panel:eq('+index+') ').show().siblings().hide();
        loadNewsList(1,index);
    });
});
//默认加载最新资讯第一页
var pageNum=1;
loadNewsList(pageNum,0);
//    异步加载新闻列表
function loadNewsList(pageNum,newsCate){
    $.ajax({
        type: 'post',
        data: {"key":"paging","pageIdx":pageNum,"type":newsCate},
        dataType: 'json',
        url: "http://www.hcyx178.com/Web/GetNewData",
        success: function (res) {
            var data=eval('(' + res.list + ')');
            if(pageNum==1){//当前页数是第一页的话
                if(res.totalPage==1){//如果总页数只有一页，就全部隐藏
                    $('.tab-panel .prev').hide();
                    $('.tab-panel .next').hide();
                }else{//否则隐藏上一页，显示下一页
                    $('.tab-panel .prev').hide();
                    $('.tab-panel .next').show();
                }
            }else{//当前页数不是第一页的话
                if(res.totalPage<=pageNum){//如果当前页数>=总页数，隐藏下一页，显示上一页
                    $('.tab-panel .prev').show();
                    $('.tab-panel .next').hide();
                }else{//当期页数不是第一页，并且也不是最后一页，上一页、下一页都显示
                    $('.tab-panel .prev').show();
                    $('.tab-panel .next').show();
                }
            }
            var html='';
            for(var i=0;i<data.length;i++){
                var t=new Date(Date.parse(data[i].IssueDate));
                var m=t.getMonth()+1,d=t.getDate(),y=t.getFullYear();
                m =(m<10 ? "0"+m:m);
                d =(d<10 ? "0"+d:d);
                var cate='';
                switch (data[i].ClassID){
                    case '1':
                        cate='新闻公告';
                        break;
                    case '2':
                        cate='活动中心';
                        break;
                }
                var pageIndcHtml=pageNum+"/"+res.totalPage;
                html += "\n <li> \n <em>" + y + "/" + m + "/" + d + "</em> \n <a href=\"detail.html?NewsID=" + data[i].NewsID + "\"> \n \u3010" + cate + "\u3011" + data[i].Subject + " \n </a> \n </li>\n";

            }
            $('.nlist .tab-panel:eq('+newsCate+') ul').html(html);
            $('.nlist .tab-panel:eq('+newsCate+') .page-indicator').html(pageIndcHtml);
        },
        error:function(){
            alert('新闻列表加载出错');
        }
    });
}
//     下一页
function next(newsCate){
    pageNum++;
    loadNewsList(pageNum,newsCate);
}
//    上一页
function prev(newsCate){
    pageNum--;
    loadNewsList(pageNum,newsCate);
}





