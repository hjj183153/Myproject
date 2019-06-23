//查找要绑定事件的元素
//绑定时间
//查找要修改的元素
//修改元素
/*点击那个点，就显示对应颜色的手机图片 取出link-img值*/
/*获取父元素，让子元素继承父元素的事件*/
var $ul_dot=$("ul.item_style_dot_ul");
$ul_dot.click(function(e){
  /*防止冒泡到父元素*/
  e.stopPropagation();
  var $dot=$(e.target);
  var $img_big=$dot.attr("link-img");
  $dot.parent().prev().attr("src",`${$img_big}`);
  $dot.css("border","1px double #999");
})
//设置轮播图
/*主要控制ul的margin-left来控制图片滚动，
  实现点击 第1个小圆点，下标为0，出现前4个li    margin-left:0px;       下标*-1240 px
          第2个小圆点，下标为1，出现中间4个li               -1240px
          第3个小圆点，下标为2，出现最后4个li               -2480px
*/
var liWidth=1240;
//为小圆点列表绑定时间
$("ul.flex_control_nav li").click(function(){
  //e.stopPropagation();
  var $flex_nav=$(this);
  var i=$flex_nav.index();
  console.log(i);
  //设置ul的margin-left的值移动
  $("ul.recommend_slider_wrap").attr("margin-left",`parseFloat(${-i}*${liWidth})`);
  //后面的值要能够自动计算
})
