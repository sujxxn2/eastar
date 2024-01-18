$(document).ready(function(){
    let pos1 = $("#box1").offset().top;
    let pos2 = $("#box2").offset().top;
    let pos3 = $("#box3").offset().top;
    let pos4 = $("#box4").offset().top;
    let pos5 = $("#box5").offset().top;
    let pos6 = $("#box6").offset().top;

    $(window).scroll(function(){
        let scroll = $(this).scrollTop();

        $(".number>li>a").removeClass("on")
        if(scroll>=pos1 && scroll<=pos2){
            $(".number>li").eq(0).children("a").addClass("on");
        }else if(scroll>=pos2 && scroll<=pos3){
            $(".number>li").eq(1).find("a").addClass("on");
        }else if(scroll>=pos3 && scroll<=pos4){
            $(".number>li").eq(2).find("a").addClass("on");
        }else if(scroll>=pos4 && scroll<=pos5){
            $(".number>li").eq(3).find("a").addClass("on");
        }else if(scroll>=pos5 && scroll<=pos6){
            $(".number>li").eq(4).find("a").addClass("on");
        }else if(scroll>=pos6){
            $(".number>li").eq(5).find("a").addClass("on");
        }    
    });

    $(".number>li>a").click(function(e){
        e.preventDefault();
        let list = $(this).attr("href"); /*attr: 속성을 찾아주는 method*/
        let distance = $(list).offset().top;

        $("html,body").stop().animate({"scrollTop":distance},400);
    });
});