'use strict';

/*****news��������������¼�****/
$(function(){

    $('.news-nav a').hover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var target = $('.news-nav a').index(this);
        $('.news-nav-box div.news-com').css("display", "none");
        $(".news-nav-box div.news-com:eq(" + target + ")").css("display", "block");
    });
    //判断浏览器是否支持video，不支持的话就用img代替
    var hasVideo = !!(document.createElement('video').canPlayType);
    if(!hasVideo){
        //.css({'height':'1083px','background-size':'1920px',"background",'url("/images/niuniu_images/niuniubanner.jpg") no-repeat'});
        $(".main-bg").css({
            'background':'url("/images/niuniu_images/niuniubanner.jpg") no-repeat center top',
            'height':'524px'
        });
    }else{
        //如果是用手机打开本页面的
        if(!IsPC()){
            $('video').css('display','none');
        }
    }

});
//检测是否为pc
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

//loadNewsPage();
function loadNewsPage() {
    $.ajax({
        type: 'get',
        url: 'data/1_select_news.php',
        success: function success(result) {
            var ggHtml = '';
            var glHtml = '';
            var hdHtml = '';
            var zxHtml = '';
            var ggHtmlPage = 1,
                glHtmlPage = 1,
                hdHtmlPage = 1,
                zxHtmlpage = 1;
            for (var i = result.length - 1; i >= 0; i--) {
                var time = Number(result[i].birthday);
                var newTime = new Date(time);
                var y = newTime.getFullYear();
                var m = newTime.getMonth() + 1;
                var d = newTime.getDate();
                m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
                if (zxHtmlpage > 5) {} else if (zxHtmlpage === 1) {
                    zxHtml += '<li class="first">\n<a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                    zxHtmlpage++;
                } else {
                    zxHtml += '<li>\n<a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                    zxHtmlpage++;
                }
                switch (result[i].categoryId) {
                    case "10":
                        if (ggHtmlPage > 5) {
                            break;
                        } else if (ggHtmlPage === 1) {
                            ggHtml += '<li class="first">\n<a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                            ggHtmlPage++;
                        } else {
                            ggHtml += '<li>\n <a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                            ggHtmlPage++;
                        }
                        break;
                    case "20":
                        if (glHtmlPage > 5) {
                            break;
                        } else if (glHtmlPage === 1) {
                            glHtml += '<li class="first">\n <a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                            glHtmlPage++;
                        } else {
                            glHtml += '<li>\n<a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                            glHtmlPage++;
                        }
                        break;
                    case "30":
                        if (hdHtmlPage > 5) {
                            break;
                        } else if (hdHtmlPage === 1) {
                            hdHtml += '<li class="first">\n<a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                            hdHtmlPage++;
                        } else {
                            hdHtml += '<li>\n<a href="news/niuniu_news.html?tid=' + result[i].tid + '">\n  <span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                            hdHtmlPage++;
                        }
                        break;
                }
            }
            $('.news-nav-box .news-com:nth-child(1) ul').html(zxHtml);
            $('.news-nav-box .news-com:nth-child(2) ul').html(ggHtml);
            $('.news-nav-box .news-com:nth-child(3) ul').html(glHtml);
            $('.news-nav-box .news-com:nth-child(4) ul').html(hdHtml);
        }
    });
}
