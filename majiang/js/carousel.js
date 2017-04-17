"use strict";

/**
 * Created by Administrator on 2017/4/13.
 */
var imgs = [{ "i": 0, "img": "img/001.jpg" }, { "i": 1, "img": "img/002.jpg" }, { "i": 2, "img": "img/003.jpg" }];
var adv = {
    LIWIDTH: 0, //ÿ��li�Ŀ��
    $ulImgs: null, //#imgs��ul
    INTERVAL: 1000, //������ʱ����
    WAIT: 3000, //�Զ��ֲ�֮��ĵȴ�
    timer: null, //�Զ��ֲ���ʱ�������
    init: function init() {
        var _this = this;

        this.LIWIDTH = parseFloat($("#slider").css("width"));
        this.$ulImgs = $("#imgs");
        this.updateView(); //����ҳ��
        $("#indexs").on("mouseover", "li", function (e) {
            var target = $("#indexs>li").index(e.target);
            $(e.target).addClass('hover').siblings().removeClass('hover');
            var old = imgs[0].i;
            _this.move(target - old); //����moveLeft
        });
        this.autoMove(); //�����Զ��ֲ�
    },
    autoMove: function autoMove() {
        var _this2 = this;

        //�����Զ��ֲ�
        //����һ���Զ�ʱ��,�ȴ�WAIT��,ִ��move(1),����ű�����timer��
        this.timer = setTimeout(function () {
            return _this2.move(1);
        }, this.WAIT);
    },
    movePrev: function movePrev(n) {
        //����ǰ��׼��
        n *= -1; //��n*-1
        //ɾ��imgs��β��n��Ԫ��ƴ����ͷ
        imgs = imgs.splice(-n, n).concat(imgs);
        this.updateView(); //���½���
        //�޸�$ulImgs��leftΪleft-n*LIWIDTH
        this.$ulImgs.css("left", parseFloat(this.$ulImgs.css("left")) - n * this.LIWIDTH);
    },
    move: function move(n) {
        var _this3 = this;

        clearTimeout(this.timer); //ֹͣһ���Զ�ʱ��
        if (n < 0) {
            //�������:
            this.movePrev(n); //��׼��
            this.$ulImgs.stop(true).animate( //���ƶ�
                { left: 0 }, this.INTERVAL, function () {
                    return _this3.autoMove();
                });
        } else {
            //ֹͣ$ulImgs��һ�ж���
            //��$ulImgs��left��INTERVALʱ���ڱ䵽-n*LIWIDTH,�������պ�ִ��moveLeftCallback
            this.$ulImgs.stop(true).animate( //���ƶ�
                { left: -n * this.LIWIDTH }, this.INTERVAL, function () {
                    return _this3.moveCallback(n);
                } //���޸�
            );
        }
    },
    moveCallback: function moveCallback(n) {
        //���ƽ����Ļص�����
        //ɾ�����鿪ͷ��n��Ԫ��ƴ�ӵ���β
        imgs = imgs.concat(imgs.splice(0, n));
        this.updateView(); //����ҳ��
        //��$ulImgs��left��0
        this.$ulImgs.css("left", 0);
        this.autoMove(); //�����Զ��ֲ�
    },
    updateView: function updateView() {
        //��imgs�����е����ݸ��µ�ҳ��
        //����imgs����,ͬʱ�������ַ���lis,idxs
        for (var i = 0, lis = "", idxs = ""; i < imgs.length; i++) {
            lis += "<li><img src=\"" + imgs[i].img + "\"></li>";
            idxs += "<li></li>";
        }
        this.$ulImgs.html(lis).css("width", imgs.length * this.LIWIDTH);
        $("#indexs").html(idxs).children("li:eq(" + imgs[0].i + ")").addClass("hover");
    }
};
adv.init();