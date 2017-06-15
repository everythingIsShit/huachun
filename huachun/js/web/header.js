/**
 * Created by Administrator on 2017/4/14.
 */
document.write('<header>');
document.write('<div class="wrap nav">');
document.write('<a href="http://www.hcyx178.com" class="logo">');
document.write('</a>');
document.write('<ul id="nav">');
document.write('<li class="shouye">');
document.write('<a href="/Web/index.html">首页</a>');
document.write('</li>');
document.write('<li class="xinwen">');
document.write('<a href="/Web/newsList.html">华淳新闻</a>');
document.write('</li>');
document.write('<li class="au">');
document.write('<a href="/Web/aboutUs.html">关于我们</a>');
document.write('</li>');
document.write('<li class="sc">');
document.write('<a href="/Web/service.html">客服中心</a>');
document.write('</li>');
document.write('<li class="ge">');
document.write('<a href="/Web/recruit.html">加入我们</a>');
document.write('</li>');
document.write('</ul>');
document.write('<div class="userCenter">');
document.write('<span data-info>');
document.write('<a href="/Web/purchase.html" class="recharge">在线充值</a>');
document.write('<a href="/Web/logon.html" class="login">登录</a> | ');
document.write('<a href="/Web/reg.html" class="register">注册</a>');
document.write('</span>');
document.write('</div>');
document.write('</div>');
document.write('</header>');
function unopened(){
    alert('【暂未开放，敬请期待！】');
}

$.getJSON("/Web/LoginCodeHandler", { type: 'info' }, function (res) {
    if (res.result) {
        var realName = res.data.RealName;
        $("span[data-info]").empty().html('<a href="javascript:;">您好,' + realName + '</a>');
    }
});
