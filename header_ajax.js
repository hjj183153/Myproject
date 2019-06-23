$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
      //console.log(result);
      $(result).replaceAll("header");
      $(`<link rel="stylesheet" href="css/header.css">
        `).appendTo("head");
      // $(`<script src="js/header.js></script>`).appendTo("body");
    }
  })
})
