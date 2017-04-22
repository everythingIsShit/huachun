/*广告图片数组*/
var imgs=[
    {"i":0,"img":"../majiang_images/carousel01.jpg"},
    {"i":1,"img":"../majiang_images/carousel02.jpg"}
];
var adv={
    LIWIDTH:0,//每个li的宽度
    $ulImgs:null,//#imgs的ul
    INTERVAL:1000,//动画的时间间隔
    WAIT:3000,//自动轮播之间的等待
    timer:null,//自动轮播定时器的序号
    init(){
        this.LIWIDTH=parseFloat(
            $("#slider").css("width")
        );
        this.$ulImgs=$("#imgs");
        this.updateView();
        $("#indexs").on("mouseover","li",(e)=>{
            var target=$("#indexs>li").index(e.target);
            var old=imgs[0].i;
            this.move(target-old);
        });
        this.autoMove();
    },
    autoMove(){
        this.timer=setTimeout(
            ()=>this.move(1),this.WAIT
        );
    },
    movePrev(n){
        n*=-1;
        imgs=imgs.splice(-n,n).concat(imgs);
        this.updateView();
        this.$ulImgs.css("left",
            parseFloat(this.$ulImgs.css("left"))
            -n*this.LIWIDTH
        );
    },
    move(n){
        clearTimeout(this.timer);
        if(n<0){
            this.movePrev(n);
            this.$ulImgs.stop(true).animate(
                {left:0},
                this.INTERVAL,
                ()=>this.autoMove()
            );
        }else{
            this.$ulImgs.stop(true).animate(
                {left:-n*this.LIWIDTH},
                this.INTERVAL,
                ()=>this.moveCallback(n)
            );
        }
    },
    moveCallback(n){
        imgs=imgs.concat(imgs.splice(0,n));
        this.updateView();
        this.$ulImgs.css("left",0);
        this.autoMove();
    },
    updateView(){
        for(var i=0,lis="",idxs="";
            i<imgs.length;
            i++){
            lis+=`<li><img src="${imgs[i].img}"></li>`;
            idxs+="<li></li>"
        }
        console.log(idxs);
        this.$ulImgs.html(lis).css("width",imgs.length*this.LIWIDTH);
        //$("#indexs").html(idxs).children(`li:eq(0)`) .addClass("hover");

    }
};
adv.init();
