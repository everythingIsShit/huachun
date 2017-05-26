
$('#news_nav').on('click', 'li', function (e) {
    var target = $('#news_nav li').index(e.target);
    headClick(target);
});

function headClick(target){
    $('#news_nav li:eq(' + target + ')').addClass('active').siblings().removeClass('active');
    $('.cont .wrap').css('display', "none");
    $('.cont .wrap:eq(' + target + ')').css('display', "block");
    if (target === 0) {} else {
        $('.main_nav li:eq(' + target + ') a').addClass('hover').parent().siblings().children('a').removeClass('hover');
    }
    pageNum = 1;
    //loadNewsList(pageNum, target);
}

$('.main_nav li a').click(function () {
    $(this).addClass('hover').parent().siblings().children('a').removeClass('hover');
    var target = $('.main_nav li').index($(this).parent());
    navClick(target);
    pageNum = 1;
    //loadNewsList(pageNum,target);
});

function navClick(target){
    if (target > 0) {
        $('#news_nav li:eq(' + target + ')').addClass('active').siblings().removeClass('active');
        $('.cont .wrap').css('display', "none");
        $('.cont .wrap:eq(' + target + ')').css('display', "block");
    }
}

var pageNum = 1;
//loadNewsList(pageNum);
//index 是判断加载哪一类新闻
function loadNewsList(pageNum,index) {
    var categoryId;
    //如果是第一次加载或点击最新就加载所有新闻
    if (!index || index === 0) {
        categoryId = 'all';
    } else {
        categoryId = index * 10;
    }
    $.ajax({
        type: 'get',
        url: '../data/3_selectBy_categoryId.php',
        data: { pageNum: pageNum, categoryId: categoryId },
        success: function success(result) {
            var zxHtml = '';
            for (var i = result.data.length - 1; i >= 0; i--) {
                var time = Number(result.data[i].birthday);
                var newTime = new Date(time);
                var y = newTime.getFullYear();
                var m = newTime.getMonth() + 1;
                var d = newTime.getDate();
                m >= 10 ? m = m : m = "0" + m;d >= 10 ? d = d : d = "0" + d;
                zxHtml += '<li>\n' + '<p class="info">\n<span>\u5F00\u5FC3\u725B\u725B\u8FD0\u8425\u56E2\u961F</span>\n' + '<span>' + y + '-' + m + '-' + d + '</span>\n                        </p>\n                        <a href="niuniu_news.html?tid=' + result.data[i].tid + '" class="title">\n                            <span>[' + result.data[i].tcategory + ']' + result.data[i].tname + '</span>\n                        </a>\n                    </li>';
            }
            if (!index) {
                $('.cont .wrap:eq(0) .news_list').html(zxHtml);
            } else {
                $('.cont .wrap:eq(' + index + ') .news_list').html(zxHtml);
            }
            //判断上下页箭头显示隐藏
            if (pageNum == 1 && result.pageCount > 1) {
                $('.page_btn .page_syy').css('display', 'none');
                $('.page_btn .page_xyy').css('display', 'inline-block');
            } else if (pageNum == 1 && result.pageCount === 1) {
                $('.page_btn .page_syy').css('display', 'none');
                $('.page_btn .page_xyy').css('display', 'none');
            } else if (pageNum >= result.pageCount) {
                $('.page_btn .page_syy').css('display', 'inline-block');
                $('.page_btn .page_xyy').css('display', 'none');
            } else if (pageNum > 1 && pageNum < result.pageCount) {
                $('.page_btn .page_syy').css('display', 'inline-block');
                $('.page_btn .page_xyy').css('display', 'inline-block');
            }
        }
    });
}
//下一页
function nextPage(index) {
    pageNum++;
    loadNewsList(pageNum, index);
}
//上一页
function prevPage(index) {
    pageNum--;
    loadNewsList(pageNum, index);
}



var parm1=getParam('categoryId');
var index=parm1/10;
headClick(index);
navClick(index);
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