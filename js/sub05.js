$(document).ready(function(){
    $(".event_tab>li").click(function(){
        let s_list=$(this).index();
        $(".event_tab>li").removeClass("e_tab_on");
        $(".event_tab>li").eq(s_list).addClass("e_tab_on");

        $(".boxes").removeClass("box_on");
        $(".boxes").eq(s_list).addClass("box_on");

    });
});