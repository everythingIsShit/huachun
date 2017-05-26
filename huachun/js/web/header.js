/**
 * Created by Administrator on 2017/4/14.
 */
document.write('<div class="top">');
document.write('<div class="head_nav">');
document.write('<ul class="main_nav">');
document.write('<li class="start"><a href="index.html">首页</a></li>');
document.write('<li class="skill"><a href="skill.html">麻将技巧</a></li>');
document.write('<li class="news"><a href="news.html">新闻公告</a></li>');
document.write('<li class="forum"><a onclick="unopened()">官方论坛</a></li>');
document.write('</ul>');
document.write('</div>');
document.write('</div>');
function unopened(){
    alert('【暂未开放，敬请期待！】');
}