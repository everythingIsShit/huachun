//小轮播
var curIndex = 0; //当前index
var autoChange = setInterval(function(){
    if(curIndex < $(".imgList li").length-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex);
},2500);


$(".indexList").find("li").each(function(item){
    $(this).hover(function(){
        clearInterval(autoChange);
        changeTo(item);
        curIndex = item;
    },function(){
        autoChange = setInterval(function(){
            if(curIndex < $(".imgList li").length-1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        },2500);
    });
});
function changeTo(num){
    $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn(1000).addClass("imgOn");
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
}






//大轮播
var curIndex2 = 0;
var autoChange2 = setInterval(function(){
    if(curIndex2 < $(".imgList2 li").length-1){
        curIndex2 ++;
    }else{
        curIndex2 = 0;
    }
    //调用变换处理函数
    changeTo2(curIndex2);
},2500);
$(".feature-img>a.next").each(function(){
        $(this).click(function(){
            clearInterval(autoChange2);
            if(curIndex2< $(".imgList2 li").length-1){
                curIndex2 ++;
            }else{
                curIndex2 = 0;
            }
        changeTo2(curIndex2);
        autoChange2 = setInterval(function(){
            if(curIndex2< $(".imgList2 li").length-1){
                curIndex2 ++;
            }else{
                curIndex2 = 0;
            }
            //调用变换处理函数
            changeTo2(curIndex2);
        },2500);
    })
});
$(".feature-img>a.prev").each(function(){
    $(this).click(function(){
        clearInterval(autoChange2);
        if(curIndex2==0){
            curIndex2=$(".imgList2 li").length-1;
        }else{
            curIndex2--;
        }
        changeTo2(curIndex2);
        autoChange2 = setInterval(function(){
            if(curIndex2< $(".imgList2 li").length-1){
                curIndex2 ++;
            }else{
                curIndex2 = 0;
            }
            //调用变换处理函数
            changeTo2(curIndex2);
        },2500);
    })
});
function changeTo2(num){
    $(".imgList2").find("li").removeClass("imgOn").hide().eq(num).fadeIn(1000).addClass("imgOn");
}


