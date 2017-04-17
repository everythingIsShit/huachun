/**
 * Created by Administrator on 2017/4/10.
 */


var pageNum=1;
$(function(){
    //异步加载头部尾部
    //$('#header').load('data/header.php',function(){
        $('.head_nav .main_nav li.skill').addClass('active').siblings().removeClass('active');
    //});
    //$('#footer').load('data/footer.php');
   /* loadNewsList(pageNum);*/
    //新闻类别列表点击事件
});
//加载新闻列表
function loadNewsList(pageNum){
    $.ajax({
        type:'GET',
        url:'data/4_select_skillbyid.php',
        data: { pageNum: pageNum},
        success:function(result){
            var data=result.data;
            //按时间排序
            data.sort(compare('birthday'));
            $('.list .list_cont ul').html(setNewsHtml(data));
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
//对返回的新闻内容按时间大小排序
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}