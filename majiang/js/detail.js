/**
 * Created by Administrator on 2017/4/10.
 */


 // $(function(){
      //异步加载头部尾部
     // $('#header').load('data/header.php');
     // $('#footer').load('data/footer.php');
      //var tid=getParam('tid');
      //loadnewsContent(tid);
  //});



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
function loadnewsContent(tid){
    $.ajax({
        type:'GET',
        url:'data/2_news_getbyid.php',
        data: { tid:tid},
        success:function(result){
            var time = Number(result[0].birthday);
            var newTime = new Date(time);
            var y = newTime.getFullYear();
            var m = newTime.getMonth() + 1;
            var d = newTime.getDate();
            m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
            //设置大标题
            $('.news_title .bt').html(result[0].tcategory);
            if(result[0].categoryId==='40'){
                $('.news_title .bt_r .tcategory').html(result[0].tcategory).attr('href','skill.html');
            }else{
                $('.news_title .bt_r .tcategory').html(result[0].tcategory).attr('href','news.html?categoryId='+result[0].categoryId);
            }
            $('.news_title .bt_r span').html(result[0].tname);
            $('.news_list_cont .bd>h1').html(result[0].tname);
            $('.news_list_cont .bd>.time').html(y+"-"+m+"-"+d+"/"+result[0].author);
            $('.news_list_cont .bd>.content').html(result[0].content);
        },
        error:function(){
            alert('请求错误，请稍后重试');
        }
});
}