<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<div class="top">
    <div class="head_nav">
        <ul class="main_nav">
            <li class="start"><a href="index.html">首页</a></li>
            <li class="skill"><a href="skill.html">麻将技巧</a></li>
            <li class="news"><a href="news.html">新闻公告</a></li>
            <li class="forum"><a onclick="unopened()">官方论坛</a></li>
        </ul>
    </div>
</div>
<script>
function unopened(){
    alert('【暂未开放，敬请期待！】');
}
</script>