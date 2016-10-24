/**
 * Created by M on 2016/9/15.
 */
angular.module("myapp").controller("index_view",function ($scope,$interval){
    var banner=document.getElementById('banner').getElementsByTagName('img');
    var oDot=document.getElementById('dot').getElementsByTagName('li');
    (function (obj,control) {
        var num=0;
        var timer=null;
        for (var i=0; i<oDot.length;i++){
            obj[i].index=i;
            obj[i].onclick=function() {
                for (var i=0;i<obj.length;i++){
                    obj[i].className='';
                    control[i].className='banner_img_hide';
                }
                this.className='ac';
                control[this.index].className='banner_img_show';
            }
        }
        clearInterval(timer);
        setInterval(function () {
            num++;
            if(num>=5){num=0};
                for (var i=0;i<control.length;i++){
                    control[i].className='banner_img_hide';
                    obj[i].className='';
                }
            control[num].className='banner_img_show';
            obj[num].className='ac';
        },3000);
    })(oDot,banner);
});