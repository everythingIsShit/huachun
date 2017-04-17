"use strict";

/**
 * Created by Administrator on 2017/4/13.
 */
var imgs = [{ "i": 0, "img": "img/001.jpg" }, { "i": 1, "img": "img/002.jpg" }, { "i": 2, "img": "img/003.jpg" }];
var adv = {
    LIWIDTH: 0, //每个li的宽度
    $ulImgs: null, //#imgs的ul
    INTERVAL: 1000, //动画的时间间隔
    WAIT: 3000, //自动轮播之间的等待
    timer: null, //自动轮播定时器的序号
    init: function init() {
        var _this = this;

        this.LIWIDTH = parseFloat($("#slider").css("width"));
        this.$ulImgs = $("#imgs");
        this.updateView(); //更新页面
        $("#indexs").on("mouseover", "li", function (e) {
            var target = $("#indexs>li").index(e.target);
            $(e.target).addClass('hover').siblings().removeClass('hover');
            var old = imgs[0].i;
            _this.move(target - old); //调用moveLeft
        });
        this.autoMove(); //启动自动轮播
    },
    autoMove: function autoMove() {
        var _this2 = this;

        //启动自动轮播
        //启动一次性定时器,等待WAIT后,执行move(1),将序号保存在timer中
        this.timer = setTimeout(function () {
            return _this2.move(1);
        }, this.WAIT);
    },
    movePrev: function movePrev(n) {
        //右移前的准备
        n *= -1; //将n*-1
        //删除imgs结尾的n个元素拼到开头
        imgs = imgs.splice(-n, n).concat(imgs);
        this.updateView(); //更新界面
        //修改$ulImgs的left为left-n*LIWIDTH
        this.$ulImgs.css("left", parseFloat(this.$ulImgs.css("left")) - n * this.LIWIDTH);
    },
    move: function move(n) {
        var _this3 = this;

        clearTimeout(this.timer); //停止一次性定时器
        if (n < 0) {
            //如果右移:
            this.movePrev(n); //先准备
            this.$ulImgs.stop(true).animate( //再移动
                { left: 0 }, this.INTERVAL, function () {
                    return _this3.autoMove();
                });
        } else {
            //停止$ulImgs上一切动画
            //让$ulImgs的left在INTERVAL时间内变到-n*LIWIDTH,动画接收后执行moveLeftCallback
            this.$ulImgs.stop(true).animate( //先移动
                { left: -n * this.LIWIDTH }, this.INTERVAL, function () {
                    return _this3.moveCallback(n);
                } //再修改
            );
        }
    },
    moveCallback: function moveCallback(n) {
        //左移结束的回调函数
        //删除数组开头的n个元素拼接到结尾
        imgs = imgs.concat(imgs.splice(0, n));
        this.updateView(); //更新页面
        //让$ulImgs的left归0
        this.$ulImgs.css("left", 0);
        this.autoMove(); //启动自动轮播
    },
    updateView: function updateView() {
        //将imgs数组中的内容更新到页面
        //遍历imgs数组,同时声明空字符串lis,idxs
        for (var i = 0, lis = "", idxs = ""; i < imgs.length; i++) {
            lis += "<li><img src=\"" + imgs[i].img + "\"></li>";
            idxs += "<li></li>";
        }
        this.$ulImgs.html(lis).css("width", imgs.length * this.LIWIDTH);
        $("#indexs").html(idxs).children("li:eq(" + imgs[0].i + ")").addClass("hover");
    }
};
adv.init();