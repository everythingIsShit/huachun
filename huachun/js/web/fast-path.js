document.write('<div id="fast-path" style="height:41px;background: #fff;border-bottom:1px solid #aaa;position:relative;z-index: 100000">');
document.write('<ul style="list-style-type: none;margin:0 auto;width:1000px;height:40px;padding:0;position: relative">');
document.write('<li class="path_logo" style="background:url(\'/images/niuniu_images/path-logo.png\') center center no-repeat;float:left;height:42px;width:200px;"></li>');
document.write(' <li style="float: left;height:42px;width:150px;background: url(\'/images/niuniu_images/path-niuniu.png\') center 1px no-repeat;overflow:hidden">');
document.write('<i style="float:left;height:30px;width:1px;background: #aaa;margin-top:6px;"></i>');
document.write(' <a href="niuniu_index.html" target="_blank" style="float:left;width:149px;height:42px;">');
document.write(' <div style="height:172px;vertical-align:bottom;display:none;position:absolute;left:0;top:-1px;border:1px">');
document.write('<img src="/images/niuniu_images/path-niuniu-bg.png" alt=""/>');
document.write('<div style="position: relative;width:824px;height:128px;top:-132px;border:1px solid #aaa;border-top:none;z-index: 2"></div>');
document.write('</div></a> </li>');
document.write(' <li style="float: left;height:42px;width:150px;background: url(\'/images/majiang_images/path-majiang.png\') center 1px no-repeat;background-size:auto 40px;">');
document.write(' <i style="float:left;height:30px;width:1px;background: #aaa;margin-top:6px;"></i>');
document.write(' <a href="index.html" target="_blank" style="float:left;width:149px;height:42px;">');
document.write('<div style="height:172px;vertical-align:bottom;display:none;position:absolute;left:0;">');
document.write('<img src="/images/majiang_images/path-majiang-bg.png" alt=""/>');
document.write('<div style="position: relative;width:824px;height:128px;top:-132px;border:1px solid #aaa;border-top:none;z-index: 2"></div>');
document.write('</div></a></li></ul>');
//document.write('<span data-info style="float:right;margin:-30px 20px 0 0;font-size:13px; color: #aaa;"><a href="purchase.html" style="color:#fff;background: #e4393c;padding:1px 3px;">在线充值</a>&nbsp;&nbsp;&nbsp;<a href="logon.html" style="color:#aaa;">登录</a> | <a href="reg.html" style="color:red;">注册</a></span>');
document.write('</div>');

$('#fast-path>ul li a').hover(function () {
    $('#fast-path>ul li:not(.path_logo)').css('background-position', '1000px 1000px').children('i').css('width', 0);
    $(this).children('div').show();
}, function () {
    $('#fast-path>ul li:not(.path-logo)').show();
    $(this).children('div').hide();
    $('#fast-path>ul li:not(.path_logo)').css('background-position', 'center 1px').children('i').css('width', '1px');
});

//$.getJSON("/Web/LoginCodeHandler", { type: 'info' }, function (res) {
//    if (res.result) {
//        var realName = res.data.RealName;
//        $("span[data-info]").empty().html('<a href="javascript:;">您好,' + realName + '</a>');
//    }
//})