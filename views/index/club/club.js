/**
 * Created by M on 2016/9/15.
 */
angular.module("myapp").controller("clubCtrl",function($scope,$http,$interval){
    var url="views/index/club/club.json";

    $http.get(url).success(function(data){
        console.log(data);
        $scope.data=data;
    });
    var products_block_wrap=document.getElementById("products_block_wrap");
    var scroll_products_ul=document.getElementById("scroll_products_ul");
    var scroll_products_ul_Li=document.getElementById("scroll_products_ul").getElementsByTagName("li");
    var l=0;
    $scope.timer=null;
    scroll_products_ul.style.width="4128px";
    var lw=scroll_products_ul.offsetWidth/2;
    function scroll_left(){
         l-=10;
        scroll_products_ul.style.left=l+"px";
        if (l<-lw){l=0}
    }
    scroll_left();
    $scope.timer=$interval(scroll_left,50);
    $scope.cease=function () {
        $interval.cancel($scope.timer);
    };


    
    $scope.toggle_show=true;
    $scope.prev=function(){
        $scope.toggle_show=!$scope.toggle_show;
    };
    $scope.next=function(){
        $scope.toggle_show=!$scope.toggle_show
    };


    var banner_pa=document.getElementById('banner_culb');
    var banner=banner_pa.getElementsByTagName('li');
    var oDot=document.getElementById('dot_culb').getElementsByTagName('li');
    var banner_prev=document.getElementById('banner_prev');
    var banner_next=document.getElementById('banner_next');

   // (function (control,obj) {
        var imgw=banner[0].offsetWidth;
        var imgallw=imgw*5;
        banner_pa.style.width=imgallw+'px';
        var num=0;
        var timer=null;
        for (var i=0; i<oDot.length;i++){
            oDot[i].index=i;
            oDot[i].onclick=function() {
                num=this.index;
                for (var i=0;i<oDot.length;i++){
                    oDot[i].className='';
                }
                this.className='ac';
                console.log(imgw);
                banner_pa.style.left=-num*imgw+'px';
            }
        }
        //clearInterval(timer);
        
        //setInterval(function () {
    banner_next.onclick=function (){
        num++;
        if(num>banner.length-1){num=banner.length-1}
        banner_pa.style.left=-num*imgw+'px';
        for (var i=0; i<banner.length; i++){
            oDot[i].className='';
        }
        oDot[num].className='ac';
    };
    banner_prev.onclick=function (){
        num--;
        if(num<0){num=0};
        banner_pa.style.left=-num*imgw+'px';
        for (var i=0; i<banner.length; i++){
            oDot[i].className='';
        }
        oDot[num].className='ac';
    };

        //},3000);
  /*  function getStyle(obj,styleName){
        var value=obj.currentStyle ? obj.currentStyle[styleName]:getComputedStyle(obj, false)[styleName];
        return styleName=='opacity' ? value=Math.round(parseFloat(value)*100):value=parseInt(value);
    }
    function sportsFrame(elm,moveJson,speed,fn){
        //预定义速度
        var pr_speed={
            "veryfast":300,
            "fast":500,
            "normal":800,
            "slow":1000,
            "veryslow":2000
        };

        //有没有传speed参数
        if(speed){//是否传入了速度值
            if(typeof speed =='string'){ //如果传入的速度值谁文本
                speed=pr_speed[speed];
            }
        }else{
            speed=pr_speed.normal;
        };

        //----------------------------------------------

        //时间分段
        var count=parseInt(speed/30);

        //距离分段
        //{"width":500,"height":600}
        var start={};
        var dis={};

        for(var key in  moveJson){
            start[key]=getStyle(elm, key);
            dis[key]=moveJson[key]-start[key];    //
        }

        var n=0;//计数器

        //------------------------------------------------------
        clearInterval(elm.timer);
        elm.timer=setInterval(function(){
            n++;

            for(var key in moveJson){
                var a=1-n/count;
                //步进长度
                var step_dis=start[key]+ dis[key]*(1-a*a*a);

                //判断透明
                if(key=="opacity"){
                    elm.style.filter='alpha(opacity:'+step_dis+')';//ie8以下
                    elm.style.opacity=step_dis/100;
                }else{
                    elm.style[key]=step_dis+'px';
                }
            };

            //判断运动结束
            if(n==count){
                clearInterval(elm.timer);
                fn && fn();
            }
        },30);
    }*/
});

