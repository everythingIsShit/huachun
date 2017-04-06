/**
 * Created by Administrator on 2017/3/26.
 */
var app = angular.module('majiang',['ng','ngRoute']);

app.config(function ($routeProvider) {
//  添加路由
    $routeProvider
        .when('/start',{
            templateUrl:'tpl/start.html',
            controller:'startCtrl'
        })
        .when('/news',{
            templateUrl:'tpl/news.html',
            controller:'newsCtrl'
        })
        .when('/skill',{
            templateUrl:'tpl/skill.html',
            controller:'skillCtrl'
        })
        .when('/forum',{
            templateUrl:'tpl/forum.html',
            controller:'forumCtrl'
        })
        .otherwise({redirectTo:'/start'});
});

app.controller('parentCtrl',['$scope','$location', function ($scope,$location){
        $scope.jump = function (arg) {
            $location.path(arg);
        };
        $('.head_nav .main_nav li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    }]);

app.controller('startCtrl',['$scope','$routeParams','$http',function ($scope,$routeParams,$http) {
    $(function(){
        $('.head_nav .main_nav li.start').addClass('active').siblings().removeClass('active');
        //判断浏览器是否支持video，不支持的话就用img代替
        var hasVideo = !!(document.createElement('video').canPlayType);
        if(!hasVideo){
            $(".video-box").css({'height':'1083px','background-size':'1920px'});
        }else{//支持的话就让父元素高度随着video高度改变而改变
            setMainBgHeight();
            window.onresize=function(){
                setMainBgHeight();
            };
        }
        function setMainBgHeight(){
            var mh=$('video').css("height");
            $('.video-box').css("height",mh);
        }
    });
            //var did = $routeParams.id;
            //$http.get('data/dish_getbyid.php?id='+did).success(function (data) {
            //        $scope.dish = data[0];
            // })
        }]);
app.controller('skillCtrl',['$scope','$routeParams','$http',function ($scope,$routeParams,$http) {
    $('.head_nav .main_nav li.skill').addClass('active').siblings().removeClass('active');
}]);

app.controller('newsCtrl',['$scope','$location',function($scope,$location){
    $('.head_nav .main_nav li.news').addClass('active').siblings().removeClass('active');
}]);
app.controller('forumCtrl',['$scope','$location',function($scope,$location){
    $('.head_nav .main_nav li.forum').addClass('active').siblings().removeClass('active');
}]);