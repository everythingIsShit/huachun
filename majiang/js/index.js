/**
 * Created by Administrator on 2017/3/26.
 */
//异步请求页头页尾

$('.head_nav .main_nav li.start').addClass('active').siblings().removeClass('active');




$('.head_nav .main_nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

    $(function(){
        $('.head_nav .main_nav li.start').addClass('active').siblings().removeClass('active');
        //判断浏览器是否支持video标签，不支持的话就用img代替
        var hasVideo = !!(document.createElement('video').canPlayType);
        if(!hasVideo){
            $(".video-box").css({'height':'1083px','background-size':'1920px'});
        }else{//支持的话就让父元素高度随着video高度改变而改变
            setMainBgHeight();
            window.onresize=function(){
                setMainBgHeight();
            };
        }
        $('.news_swap .hd li').hover(function(){
                $(this).addClass('on').siblings().removeClass('on');
                var target = $('.news_swap .hd li').index(this);
                $(".news_swap .bd>div:eq(" + target + ")").show().siblings().hide();
            }
        );
        //设置video-box的高度
        function setMainBgHeight(){
            var mh=$('video').css("height");
            $('.video-box').css("height",mh);
        }
        //视频也预加载第一帧，1秒后播放
        setTimeout(function(){
            document.getElementById('my-video').play();
        },1000);
        //数组内按对象某一属性排序
        function compare(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value2 - value1;
            }
        }
       /* $.ajax({
            type:'GET',
            url:'data/1_news_getall.php',
            success:function(data){
                var zhArr=[],xwArr=[],hdArr=[],ssArr=[],jqArr=[];
                var zhHtml='',xwHtml='',hdHtml='',ssHtml='',jqHtml='';
                for(var i=0;i<data.length;i++){
                    if(data[i].categoryId!='40'){
                        zhArr.push(data[i]);
                    }
                        //新闻分类
                        switch (data[i].categoryId){
                            case '10':
                                xwArr.push(data[i]);
                                break;
                            case '20':
                                hdArr.push(data[i]);
                                break;
                            case '30':
                                ssArr.push(data[i]);
                                break;
                            case '40':
                                jqArr.push(data[i]);
                                break;
                    }
                }
                zhArr.sort(compare('birthday'));
                xwArr.sort(compare('birthday'));
                hdArr.sort(compare('birthday'));
                ssArr.sort(compare('birthday'));
                jqArr.sort(compare('birthday'));
                //设置每一页显示的新闻数量并设置各类别新闻内容
                function setNewsHtml(html,arr){
                    for(var j=0;j<6&&j<arr.length;j++){
                        var time = Number(arr[j].birthday);
                        var newTime = new Date(time);
                        //var y = newTime.getFullYear();
                        var m = newTime.getMonth() + 1;
                        var d = newTime.getDate();
                        m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
                        html+= "<li>\n<a href=\"detail.html?tid=" + arr[j].tid + "\">\n<p>\n<span title=\"" + arr[j].tname + "\">· &nbsp;" + arr[j].tname + "</span>\n<i>" + m + "/" + d + "</i>\n</p>\n</a>\n</li>";
                    }
                    return html;
                }
                function setSkillHtml(html,arr){
                    for(var j=0;j<6&&j<arr.length;j++){
                        var time = Number(arr[j].birthday);
                        var newTime = new Date(time);
                        //var y = newTime.getFullYear();
                        var m = newTime.getMonth() + 1;
                        var d = newTime.getDate();
                        m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
                        html+= "<li>\n<a href=\"detail.html?tid=" + arr[j].tid + "\">\n<p>\n<span title=\"" + arr[j].tname + "\">【" +arr[j].tcategory+"】"+ arr[j].tname + "</span>\n<i>" + m + "/" + d + "</i>\n</p>\n</a>\n</li>";
                    }
                    return html;
                }
                function setHdHtml(html,arr){
                    for(var j=0;j<8&&j<arr.length;j++){
                        var time = Number(arr[j].birthday);
                        var newTime = new Date(time);
                        //var y = newTime.getFullYear();
                        var m = newTime.getMonth() + 1;
                        var d = newTime.getDate();
                        m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
                        html+= "<li>\n<a href=\"detail.html?tid=" + arr[j].tid + "\">\n<p>\n<span title=\"" + arr[j].tname + "\">· &nbsp;" + arr[j].tname + "</span>\n<i>" + m + "/" + d + "</i>\n</p>\n</a>\n</li>";
                    }
                    return html;
                }
                $('.bd .tab-panel:eq(0) ul').html(setNewsHtml(zhHtml,zhArr));
                $('.bd .tab-panel:eq(1) ul').html(setNewsHtml(xwHtml,xwArr));
                $('.bd .tab-panel:eq(2) ul').html(setNewsHtml(hdHtml,hdArr));
                $('.bd .tab-panel:eq(3) ul').html(setNewsHtml(ssHtml,ssArr));
                $('.jiaox_list ul').html(setSkillHtml(jqHtml,jqArr));
                $('.sais_tab ul').html(setHdHtml(zhHtml,zhArr));
            }
        });*/


    });





