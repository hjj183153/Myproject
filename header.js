//点击app下载，出现下拉菜单
$("a.meizu_header_link_pro_download").hover(
  function(){
    $("div.download_back_img").css({
      display:"block",
    })
  },
  function(){
    $("div.download_back_img").css({
      display:"none",
    })
  }
)
//点击用户登录小图标，出现下拉菜单
$("div.meizu_header_user_img>img").mouseenter(
  function(){
    $("ul.meizu_header_user_dropdown").css({
      display:"block",
    })
  }
)
//当鼠标移出下拉选项，下拉框隐藏
$("ul.meizu_header_user_dropdown").mouseleave(
  function(){
    $(this).css({
      display:"none",
    })
  }
)
