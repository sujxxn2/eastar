$(document).ready(function(){
    $(".btn>li").click(function(){
        let bb = $(this).index();
        $(".btn>li").removeClass("on")
        $(".btn>li").eq(bb).addClass("on")
    });

    $(".btn2").click(function(){
        $("#date").css({"background-color":"#E8E8E8"});
        // $("#date option").css({"display":"none"});
        // $("#date").removeClass("aaa01");
        $("#date").addClass("aaa01");
        $(".aaa01").prop('disabled',true);
    });

    $(".btn1").click(function(){
        $("#date").css({"background-color":"#fff"});
    });
});