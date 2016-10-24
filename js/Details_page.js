/**
 * Created by hxsd on 2016/9/13.
 */
$(function () {
    var $mainimgpic=$("#min");
    var $s_box=$("#s_box");
    var $max=$("#max");
    var $max_img=$max.find("img");
    var $model=$("#model");
    var $landing=$("#landing");
    var $close=$("#close");
    var $close_sign=$("#close_sign");
    var $content_dd=$("#content_dd").find('.item');
    var $model_sign_btn=$("#model_sign_btn");
    var $model_sign=$("#model_sign");
    var $atLanding=$("#atLanding");
    var $inlike=$("#inlike");
    var $inlikeNam=$("#inlikeNam");
    var $likenumbrt=0;
    var $WrapInput=$("#WrapInput");
    var $WrapInput_next=$WrapInput.find("a").eq(1);
    var $WrapInput_input_num=$WrapInput.find("input");
    var carNumber=0;
    //发表评论切换
    $("#comment_btn").on("click",function () {
        $("#input_box").slideToggle();
    });
    //放大镜
    $mainimgpic.on("mouseover",function () {
        $max.show();
        $s_box.show()
    }).on("mouseout",function () {
        $max.hide();
        $s_box.hide()
    }).on("mousemove",function (ev){
        var l = ev.clientX - $mainimgpic.offset().left - $s_box.width() / 2;
        var t = ev.clientY - $mainimgpic.offset().top - $s_box.height() / 2 +$(window).scrollTop();
        if (l <= 0) {
            l = 0;
        }
        if (l >= $mainimgpic.height() - $s_box.height()){
            l = $mainimgpic.height() - $s_box.height()
        }
        if (t <= 0) {
            t = 0;
        }
        if (t >= $mainimgpic.width()  - $s_box.width()){
            t = $mainimgpic.width()  - $s_box.width()
        }
        $s_box.css("top",t+"px").css("left",l+"px");
        var l_rate = l / ($mainimgpic.width() - $s_box.width());
        var t_rate = t / ($mainimgpic.height() - $s_box.height());
        var move_left=-($max_img.width() - $mainimgpic.width()) * l_rate;
        var move_top=-($max_img.height() - $mainimgpic.height()) * t_rate;

        $max_img.css("left", move_left + 'px').css("top",move_top + 'px');
    });//放大镜结束

    //登录按钮
    $landing.on("click",function (){
        model_center($model)
    });
    //点击切换成注册页
    $model_sign_btn.click(function (){
        model_center($model_sign);
        $model.slideToggle();
    });
    //点击切换成登录页
    $atLanding.click(function (){
        model_center($model_sign);
        $model.slideToggle();
    });
    //点击关闭登录页
    $close.on("click",function (){
        $model.slideToggle();
    });
    //点击关闭注册页
    $close_sign.on("click",function (){
        $model_sign.slideToggle();
    });
    //点击选择颜色切换样式页
    $content_dd.each(function (){
        $(this).click(function (){
            $(this).addClass("item item_ac").siblings().removeClass("item_ac");
        })
    });
    //点赞
    $inlikeNam.text($likenumbrt);
    $inlike.click(function (){
        $likenumbrt++;
        $inlikeNam.text($likenumbrt);
    });
    //购物车数量
    $WrapInput_input_num.val(carNumber);
    $WrapInput_next.click(function () {

    });
    //居中显示函数
    function model_center(obj) {
        var l=($(document).width()-obj.innerWidth())/2;
        var t=($(window).height()-obj.innerHeight())/2 + $(window).scrollTop();
        obj.css({
            "left":l+"px",
            "top":t+"px"
        });
        obj.slideToggle();
    }
});

    










