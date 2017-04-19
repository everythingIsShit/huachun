'use strict';

/*****news��������������¼�****/
$(function(){
   // $('#copyright').load('data/copyright.php');
    $('.news-nav a').hover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var target = $('.news-nav a').index(this);
        $('.news-nav-box div.news-com').css("display", "none");
        $(".news-nav-box div.news-com:eq(" + target + ")").css("display", "block");
    });
    //判断浏览器是否支持video，不支持的话就用img代替
    var hasVideo = !!(document.createElement('video').canPlayType);
    if(!hasVideo){
        $(".main-bg").css({'height':'1083px','background-size':'1920px'});
    }else{//支持的话就让父元素高度随着video高度改变而改变
        setMainBgHeight();
        window.onresize=function(){
            setMainBgHeight();
        };
    }
    function setMainBgHeight(){
        var mh=$('video').css("height");
        $('.main-bg').css("height",mh);
    }
});

/***游戏特色广告轮播***/
/*var imgs = [{ "i": 0, "img": "/project_niuniu/images/niuniu_images/f1.png" }, { "i": 1, "img": "/project_niuniu/images/niuniu_images/f2.png" }, { "i": 2, "img": "/project_niuniu/images/niuniu_images/f3.png" }, { "i": 3, "img": "/project_niuniu/images/niuniu_images/f4.png" }];
var adv = {
    LIWIDTH: 0,
    $ulImgs: null,
    INTERVAL: 500,
    WAIT: 3000,
    timer: null,
    init: function init() {
        var _this = this;
        this.LIWIDTH = parseFloat($("#slide").css("width"));
        this.$ulImgs = $("#slide-list");
        this.updateView();
        this.autoMove();
        $('.prev').click(function () {
            _this.move(-1);
        });
        $('.next').click(function () {
            _this.move(1);
        });
    },
    autoMove: function autoMove() {
        var _this2 = this;

        this.timer = setTimeout(function () {
            return _this2.move(1);
        }, this.WAIT);
    },
    movePrev: function movePrev(n) {
        n *= -1;
        imgs = imgs.splice(-n, n).concat(imgs);
        this.updateView();
        this.$ulImgs.css("left", parseFloat(this.$ulImgs.css("left")) - n * this.LIWIDTH);
    },
    move: function move(n) {
        var _this3 = this;
        clearTimeout(this.timer);
        if (n < 0) {
            this.movePrev(n);
            this.$ulImgs.stop(true).animate({ left: 0 }, this.INTERVAL, function () {
                return _this3.autoMove();
            });
        } else {
            this.$ulImgs.stop(true).animate({ left: -n * this.LIWIDTH }, this.INTERVAL, function () {
                return _this3.moveCallback(n);
            });
        }
    },
    moveCallback: function moveCallback(n) {
        imgs = imgs.concat(imgs.splice(0, n));
        this.updateView();
        this.$ulImgs.css("left", 0);
        this.autoMove();
    },
    updateView: function updateView() {
        for (var i = 0, lis = ""; i < imgs.length; i++) {
            lis += '<li><img src="' + imgs[i].img + '"></li>';
        }
        this.$ulImgs.html(lis).css("width", imgs.length * this.LIWIDTH);
    }
};
adv.init();*/

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
                    zxHtml += '<li class="first">\n<a href="news/news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                    zxHtmlpage++;
                } else {
                    zxHtml += '<li>\n<a href="news/news.html?tid=' + result[i].tid + '">\n<span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                    zxHtmlpage++;
                }
                switch (result[i].categoryId) {
                    case "10":
                        if (ggHtmlPage > 5) {
                            break;
                        } else if (ggHtmlPage === 1) {
                            ggHtml += '<li class="first">\n<a href="news/news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                            ggHtmlPage++;
                        } else {
                            ggHtml += '<li>\n <a href="news/news.html?tid=' + result[i].tid + '">\n<span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                            ggHtmlPage++;
                        }
                        break;
                    case "20":
                        if (glHtmlPage > 5) {
                            break;
                        } else if (glHtmlPage === 1) {
                            glHtml += '<li class="first">\n <a href="news/news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                            glHtmlPage++;
                        } else {
                            glHtml += '<li>\n<a href="news/news.html?tid=' + result[i].tid + '">\n<span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
                            glHtmlPage++;
                        }
                        break;
                    case "30":
                        if (hdHtmlPage > 5) {
                            break;
                        } else if (hdHtmlPage === 1) {
                            hdHtml += '<li class="first">\n<a href="news/news.html?tid=' + result[i].tid + '">\n<span>\u6700\u65B0</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n</li>';
                            hdHtmlPage++;
                        } else {
                            hdHtml += '<li>\n<a href="news/news.html?tid=' + result[i].tid + '">\n  <span>[' + result[i].tcategory + ']</span>\n<p>&nbsp;&nbsp;' + result[i].tname + '</p>\n</a>\n<i class="time r">[' + y + '-' + m + '-' + d + ']</i>\n</li>';
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
/**暂未开放提示**/
function unopened(){
alert("【暂未开放，敬请期待】");
}