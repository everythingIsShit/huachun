/**
 * Created by Administrator on 2017/5/17.
 */

$(function(){
    //为此页面顶部导航栏添加hover class
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

//    悬浮框隐藏效果
    var opend=1;// 设置开始的状态为展开状态
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

//    异步获取新闻列表
    $.ajax({
        type: 'post',
        data: { "key": "InitData"},
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
            setNewsList(res.xwgg,$('.news_swap .bd .tab-panel:eq(1) ul'));
            setNewsList(res.jchd,$('.news_swap .bd .tab-panel:eq(2) ul'));
            setNewsList(zxzx,$('.news_swap .bd .tab-panel:eq(0) ul'));
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
            newsHtml += "<li>\n                                    <a href=\"detail.html?NewsID=" + newsCate[i].NewsID + "\">\n                                        <p>\n                                            <span title=\"" + newsCate[i].Subject + "\">\xB7&nbsp;" + newsCate[i].Subject + "</span>\n                                            <i>" + m + "/" + d + "</i>\n                                        </p>\n                                    </a>\n                                </li>";

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
//    游戏特色轮播
    var imgs = [{ "i": 0, "img": "/images/index_images/carousel-1.jpg","href":"detail.html?NewsID=7" }, { "i": 1, "img": "/images/index_images/carousel-2.jpg","href":"detail.html?NewsID=8" }];
    var adv = {
        LIWIDTH: 0,
        $ulImgs: null,
        INTERVAL: 1000,
        WAIT: 3000,
        timer: null,
        init: function init() {
            var _this = this;
            this.LIWIDTH = parseFloat($("#slider").css("width"));
            this.$ulImgs = $("#imgs");
            this.updateView();
            $("#indexs").on("mouseover", "li", function (e) {
                var target = $("#indexs>li").index(e.target);
                $(e.target).addClass('hover').siblings().removeClass('hover');
                var old = imgs[0].i;
                _this.move(target - old);
            });
            this.autoMove();
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
                this.$ulImgs.stop(true).animate(
                    { left: 0 }, this.INTERVAL, function () {
                        return _this3.autoMove();
                    });
            } else {
                this.$ulImgs.stop(true).animate(
                    { left: -n * this.LIWIDTH }, this.INTERVAL, function () {
                        return _this3.moveCallback(n);
                    }
                );
            }
        },
        moveCallback: function moveCallback(n) {
            imgs = imgs.concat(imgs.splice(0, n));
            this.updateView();
            this.$ulImgs.css("left", 0);
            this.autoMove();
        },
        updateView: function updateView() {
            for (var i = 0, lis = "", idxs = ""; i < imgs.length; i++) {
                lis += "<li><a href=\"" + imgs[i].href + "\"><img src=\"" + imgs[i].img + "\"></a></li>";
                idxs += "<li></li>";
            }
            this.$ulImgs.html(lis).css("width", imgs.length * this.LIWIDTH);
            $("#indexs").html(idxs).children("li:eq(" + imgs[0].i + ")").addClass("hover");
        }
    };
    adv.init();

