$(document).ready(function(){
  $(".logintap>li").click(function(){
    let login = $(this).index();
    $(".logintap>li").removeClass("loginOn");
    $(".logintap>li").eq(login).addClass("loginOn");
    $(".loginconts>li").removeClass("logincontsOn");
    $(".loginconts>li").eq(login).addClass("logincontsOn");
  });
});