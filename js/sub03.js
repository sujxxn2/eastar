$(document).ready(function(){
    $(".cate>li").click(function(){
        let aa = $(this).index();
        $(".cate>li").removeClass("on");
        $(".cate>li").eq(aa).addClass("on");

        $(".home>li").removeClass("sos");
        $(".home>li").eq(aa).addClass("sos");

    });

    // $(".airport>li").click(function(e){
    //     e.preventDefault();
    //     let list = $(this).index();

    //     $(".airport>li").removeClass("on");
    //     $(".airport>li").eq(list).addClass("on");

    //     $(".air_detail>li").removeClass("cc");
    //     $(".air_detail>li").eq(list).addClass("cc");
    // });


    $("#s1>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();

        $("#s1>li").removeClass("on");
        $("#s1>li").eq(list).addClass("on");

        $("#t1>li").removeClass("cc");
        $("#t1>li").eq(list).addClass("cc");
    });

    $("#s2>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();
        $("#s2>li").removeClass("on");
        $("#s2>li").eq(list).addClass("on");

        $("#t2>li").removeClass("cc");
        $("#t2>li").eq(list).addClass("cc");
    });
    
    $("#s3>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();

        $("#s3>li").removeClass("on");
        $("#s3>li").eq(list).addClass("on");

        $("#t3>li").removeClass("cc");
        $("#t3>li").eq(list).addClass("cc");
    });

    $("#s4>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();

        $("#s4>li").removeClass("on");
        $("#s4>li").eq(list).addClass("on");

        $("#t4>li").removeClass("cc");
        $("#t4>li").eq(list).addClass("cc");
    });

    $("#s5>li").click(function(e){
        e.preventDefault();
        let list = $(this).index();

        $("#s5>li").removeClass("on");
        $("#s5>li").eq(list).addClass("on");

        $("#t5>li").removeClass("cc");
        $("#t5>li").eq(list).addClass("cc");
    });
    



    // $(".airport>.second").click(function(){
    //     $(".airport>.second").css({"background-color":"white", "border-left":"none", "border-top":"1px solid #6d6e71"});
    //     $(".airport>.second>a").css({"color":"#222"})
    // });
    // $(".airport>.third").click(function(){
    //     $(".aiport>li").css({"background-color":"#a0a1a1", "border":"none"})
    //     $(".aiport>li>a").css({"color":"white"})
    //     $(".airport>.third").css({"background-color":"white", "border-left":"none", "border-top":"1px solid #6d6e71", "border-right":"1px solid #6d6e71"});
    //     $(".airport>.third>a").css({"color":"#222"})
    // });
});