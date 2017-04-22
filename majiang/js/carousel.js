"use strict";

/**
 * Created by Administrator on 2017/4/13.
 */
var imgs = [{ "i": 0, "img": "/majiang/images/majiang_images/001.jpg" }, { "i": 1, "img": "/majiang/images/majiang_images/002.jpg" }, { "i": 2, "img": "/majiang/images/majiang_images/003.jpg" }];
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
            lis += "<li><img src=\"" + imgs[i].img + "\"></li>";
            idxs += "<li></li>";
        }
        this.$ulImgs.html(lis).css("width", imgs.length * this.LIWIDTH);
        $("#indexs").html(idxs).children("li:eq(" + imgs[0].i + ")").addClass("hover");
    }
};
adv.init();