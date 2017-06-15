/**
 * Created by Administrator on 2017/6/7.
 */
$(function(){
    var NewsID=getParam('NewsID');
    $.ajax({
        type: 'post',
        data: { "key": "GetInfo","id":NewsID },
        dataType: 'json',
        url: "http://www.hcyx178.com/Web/GetNewData",
        success: function (res) {
            var data=eval('(' + res.info + ')');
            $('.news-content-wrap h1').html(data[0].Subject);
            $('.news-content-wrap .middle').html(data[0].Body);
            //    设置新闻内容的图片路径
            var path='http://www.hcyx178.com:88';
            var imgs=$('.news-content-wrap .middle img');
            var reg=/^http:\/\/[\d|.]+/;
            for(var i=0;i<imgs.length;i++){
                imgs[i].src=imgs[i].src.replace(reg,path);
            }
        },
        error:function(){
            alert('新闻列表加载出错');
        }
    });
    //获取上个页面的传参
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
});