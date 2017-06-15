/**
 * Created by Administrator on 2017/6/1.
 */


    document.write('<header>');
    document.write(' <i class="logo">');
    document.write('<img src="/images/index_images/logo.png"/>');
    document.write('</i>');
    document.write('<a href="http://www.hcyx178.com/Web/down.html" class="down-imm">');
    document.write('<img src="/images/index_images/down-imm.png"/>');
    document.write('</a>');
    document.write('<a href="javascript:" class="nav-collapse" id="nav-slide">');
    document.write('<span></span>');
    document.write('<span></span>');
    document.write('<span></span>');
    document.write('</a>');
    document.write('</header>');
    document.write('<section class="collapse">');
    document.write('<ul class="navbar-nav">');
    document.write('<li><a href="m-mobile.html">首页</a></li>');
    document.write('<li><a href="m-newsList.html">华淳新闻</a></li>');
    document.write('<li><a href="m-aboutUs.html">关于我们</a></li>');
    document.write('<li><a href="m-service.html">客服中心</a></li>');
    document.write('<li><a href="m-recruit.html">加入我们</a></li>');
    document.write('</ul>');
    document.write('</section>');

    $(function(){
        var opened=0;
        $('#nav-slide').click(function(){
            if(!opened){
                $('.collapse').addClass('G-open');
                opened=1;
                $(this).addClass('G-close');
            }else{
                $('.collapse').removeClass('G-open');
                opened=0;
                $(this).removeClass('G-close');
            }

        });
    });


















