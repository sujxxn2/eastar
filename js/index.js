$(document).ready(function(){

  let allContsbg = $(".main .all_conts_bg");

  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    
    if(scroll > 937){
      $(".inner_wrap").addClass("current");
    }else{
      $(".inner_wrap").removeClass("current");
    }
  });

  // inner_wrap gnb
  $(".gnb>li").mouseenter(function(){
    $(".inner_wrap").stop().animate({"height":"500px"},100);
    $(".gnb>li .sub").show();
  });
  $(".inner_wrap").mouseleave(function(){
    $(".inner_wrap").stop().animate({"height":"120px"},0);
    $(".gnb>li .sub").hide();
  });

  // main tab
  $(".tab>li").click(function(){
    let tab_conts = $(this).index();
    $(".tab>li").removeClass("tabOn");
    $(".tab>li").eq(tab_conts).addClass("tabOn");
    $(".tab_conts>li").removeClass("tab_contsOn");
    $(".tab_conts>li").eq(tab_conts).addClass("tab_contsOn");
  });


  // main panel calender01
  $(function(){
    let today = new Date();
    let date = new Date();           

    // $("input[name=preMon]").click(function() { // 이전달
    $(".preMon").click(function() { // 이전달
        $("#calendar01 > tbody > td").remove();
        $("#calendar01 > tbody > tr").remove();
        today = new Date ( today.getFullYear(), today.getMonth()-1, today.getDate());
        buildCalendar();
    })
    
    // $("input[name=nextMon]").click(function(){ //다음달
    $(".nextMon").click(function(){ //다음달
        $("#calendar01 > tbody > td").remove();
        $("#calendar01 > tbody > tr").remove();
        today = new Date ( today.getFullYear(), today.getMonth()+1, today.getDate());
        buildCalendar();
    })


    function buildCalendar() {
        nowYear = today.getFullYear();
        nowMonth = today.getMonth();
        firstDate = new Date(nowYear,nowMonth,1).getDate();
        firstDay = new Date(nowYear,nowMonth,1).getDay(); //1st의 요일
        lastDate = new Date(nowYear,nowMonth+1,0).getDate();

        if((nowYear%4===0 && nowYear % 100 !==0) || nowYear%400===0) { //윤년 적용
            lastDate[1]=29;
        }

        $(".year_mon").text(nowYear+"년 "+(nowMonth+1)+"월");

        for (i=0; i<firstDay; i++) { //첫번째 줄 빈칸
            $("#calendar01 tbody:last").append("<td></td>");
        }
        for (i=1; i <=lastDate; i++){ // 날짜 채우기
            plusDate = new Date(nowYear,nowMonth,i).getDay();
            if (plusDate==0) {
                $("#calendar01 tbody:last").append("<tr></tr>");
            }
            $("#calendar01 tbody:last").append("<td class='date'>"+ i +"</td>");
        }
        if($("#calendar01 > tbody > td").length%7!=0) { //마지막 줄 빈칸
            for(i=1; i<= $("#calendar01 > tbody > td").length%7; i++) {
                $("#calendar01 tbody:last").append("<td></td>");
            }
        }
        $(".date").each(function(index){ // 오늘 날짜 표시
            if(nowYear==date.getFullYear() && nowMonth==date.getMonth() && $(".date").eq(index).text()==date.getDate()) {
                $(".date").eq(index).addClass('colToday');
            }
        }) 
    }
    buildCalendar();

});



  // main panel1 widget_item
  $(".panel1 .widget_item>li").click(function(){
    let widget = $(this).index();
    $(".panel1 .widget_item>li").removeClass("itemOn");
    $(".panel1 .widget_item>li").eq(widget).addClass("itemOn");
  });

  $(".panel1 .widget_item>li").eq(1).click(function(){
    $(".widget_conts").show();
    $(".widget_conts .reserve").stop().fadeIn(200);
  });

  $(".closebtn").click(function(){
    $(".widget_conts").hide();
    $(".widget_conts .reserve").stop().fadeOut(200);
  });

  $(".logintap>li").click(function(){
    let login = $(this).index();
    $(".logintap>li").removeClass("loginOn");
    $(".logintap>li").eq(login).addClass("loginOn");
    $(".loginconts>li").removeClass("logincontsOn");
    $(".loginconts>li").eq(login).addClass("logincontsOn");
  });

  // main panel1 quick_tab
  $(".panel1 .quick_tab>li").click(function(){
    let quicktab = $(this).index();
    $(".panel1 .quick_tab>li").removeClass("quick_tabOn");
    $(".panel1 .quick_tab>li").eq(quicktab).addClass("quick_tabOn");
    $(".panel1 .quick_tab_conts_wrap>ul").removeClass("quick_tab_contsOn");
    $(".panel1 .quick_tab_conts_wrap>ul").eq(quicktab).addClass("quick_tab_contsOn");
  });

  // main panel1 rotate
  $(".panel1 .rotate>li").click(function(){
    let rotateConts = $(this).index();
    let rotateContsOn = $(".main .rotate_conts>li");

    $(".panel1 .rotate>li").removeClass("rotaOn");
    $(".panel1 .rotate>li").eq(rotateConts).addClass("rotaOn");
    rotateContsOn.hide();
    rotateContsOn.eq(rotateConts).show();
    allContsbg.show();
    
    allContsbg.click(function(){
      rotateContsOn.hide();
    });

  });

  // main panel1 cal
  $(".panel1 .cal").find("a").click(function(e){
    e.preventDefault();
    $(".main .cal_bottom").show();
    allContsbg.show();
    allContsbg.click(function(){
      $(".main .cal_bottom").hide();
      allContsbg.hide();
    });
  });





  // main panel2 cal
  $(".panel2 .cal").find("a").click(function(e){
    e.preventDefault();
    $(".main .cal_bottom").show();
    allContsbg.show();
    allContsbg.click(function(){
      $(".main .cal_bottom").hide();
      allContsbg.hide();
    });
  });







  // main panel4 cal
  $(".panel4 .cal").find("a").click(function(e){
    e.preventDefault();
    $(".main .cal_bottom").show();
    allContsbg.show();
    allContsbg.click(function(){
      $(".main .cal_bottom").hide();
      allContsbg.hide();
    });
  });

  // main panel4 quick_tab
  $(".panel4 .quick_tab>li").click(function(){
    let quicktab2 = $(this).index();
    $(".panel4 .quick_tab>li").removeClass("quick_tabOn");
    $(".panel4 .quick_tab>li").eq(quicktab2).addClass("quick_tabOn");
    $(".panel4 .quick_tab_conts_wrap>ul").removeClass("quick_tab_contsOn");
    $(".panel4 .quick_tab_conts_wrap>ul").eq(quicktab2).addClass("quick_tab_contsOn");
  });

  // main panel4 widegt_item
  $(".panel4 .widget_item>li").click(function(){
    let widget = $(this).index();
    $(".panel4 .widget_item>li").removeClass("itemOn");
    $(".panel4 .widget_item>li").eq(widget).addClass("itemOn");
  });
  // main panel4 rotate
  $(".panel4 .rotate>li").click(function(){
    let rotateConts = $(this).index();
    let rotateContsOn = $(".main .rotate_conts>li");

    $(".panel4 .rotate>li").removeClass("rotaOn");
    $(".panel4 .rotate>li").eq(rotateConts).addClass("rotaOn");
    rotateContsOn.hide();
    rotateContsOn.eq(rotateConts).show();
    allContsbg.show();
    
    allContsbg.click(function(){
      rotateContsOn.hide();
    });

  });



  // main panel5 help_tab
  $(".help_tab>p.ss_right").click(function(){

    $(".help_conts2").stop().animate({"margin-left":"-145px"},function(){
      $(".help_conts2>li").first().appendTo(".help_conts2");
      $(".help_conts2").css({"margin-left":"100px"});
    });
    $(".help_conts2>li").removeClass("help_contsOn");
    $(".help_conts2>li").eq(1).addClass("help_contsOn");
    $(".help_conts2>li>h3").css({"opacity":"0"});
    $(".help_conts2>li>h3").eq(1).css({"opacity":"1"});
  });






  // m_low //
  $(".top>ul>li").click(function () {
    let cou = $(this).index();
    $(".low").removeClass("name");
    $(".low").eq(cou).addClass("name");

    $(".photos").removeClass("on");
    $(".photos").eq(cou).addClass("on");
  });

  // -------------------아동동반-------------------------------
  $(".p01>.l_arrow").click(function(){
      $(".p01>.back").stop().animate({"margin-left":"-175px"},function(){
          $(".p01>.back>li").last().prependTo(".p01>.back");
          $(".p01>.back").css({"margin-left":"-615px"});
      });
  });
  $(".p01>.r_arrow").click(function(){
      $(".p01>.back").stop().animate({"margin-left":"-1055px"},function(){
          $(".p01>.back>li").first().appendTo(".p01>.back");
          $(".p01>.back").css({"margin-left":"-615px"});
      });
  });

  // -----------------효도여행-------------------------
  $(".p02>.l_arrow").click(function(){
    $(".p02>.back").stop().animate({"margin-left":"-175px"},function(){
        $(".p02>.back>li").last().prependTo(".p02>.back");
        $(".p02>.back").css({"margin-left":"-615px"});
    });
  });
  $(".p02>.r_arrow").click(function(){
    $(".p02>.back").stop().animate({"margin-left":"-1055px"},function(){
      $(".p02>.back>li").first().appendTo(".p02>.back");
      $(".p02>.back").css({"margin-left":"-615px"});
    });
  });

  // --------------------연인 여행------------------------------
  $(".p03>.l_arrow").click(function(){
    $(".p03>.back").stop().animate({"margin-left":"-175px"},function(){
      $(".p03>.back>li").last().prependTo(".p03>.back");
      $(".p03>.back").css({"margin-left":"-615px"});
    });
  });

  $(".p03>.r_arrow").click(function(){
    $(".p03>.back").stop().animate({"margin-left":"-1055px"},function(){
      $(".p03>.back>li").first().appendTo(".p03>.back");
      $(".p03>.back").css({"margin-left":"-615px"});
    });
  });

  // --------------------혼자여행-----------------------------
  $(".p04>.l_arrow").click(function(){
    $(".p04>.back").stop().animate({"margin-left":"-175px"},function(){
      $(".p04>.back>li").last().prependTo(".p04>.back");
      $(".p04>.back").css({"margin-left":"-615px"});
    });
  });
  $(".p04>.r_arrow").click(function(){
    $(".p04>.back").stop().animate({"margin-left":"-1055px"},function(){
      $(".p04>.back>li").first().appendTo(".p04>.back");
      $(".p04>.back").css({"margin-left":"-615px"});
    });
  });



  // event_bottom

  function updateTimer() {
    const future = Date.parse('2024/03/31 24:00:00');
    const now = new Date();
    const diff = future - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / (1000));

    const d = String(days).padStart(2,"0");
    const h = String(hours - days * 24).padStart(2,"0");
    const m = String(mins - hours * 60).padStart(2,"0");
    const s = String(secs - mins * 60).padStart(2,"0");

    document.getElementById('timer').innerHTML =
      '<div class="cc">' +
      d +
      '<span>&nbsp;일</span></div>' +
      '&nbsp;'+
      '<div class="aa">' +
      h +
      '<span>&nbsp;:</span></div>' +

      '<div class="aa">' +
      m +
      '<span>&nbsp;:</span></div>' +
      
      '<div class="aa">' +
      s +
      '<span></span></div>'+
      '&nbsp;'+
      '<div>' +
      '<span>남았습니다.</span>';
  }

  setInterval(updateTimer, 1000);


  $(".s_left").click(function(){
    $(".cut").stop().animate({"margin-left":"0px"},function(){
        $(".cut>div").last().prependTo(".cut");
        $(".cut").css({"margin-left":"-560px"});
    });
  });
  $(".s_right").click(function(){
    $(".cut").stop().animate({"margin-left":"-1120px"},function(){
      $(".cut>div").first().appendTo(".cut");
      $(".cut").css({"margin-left":"-560px"});
    });
  });







});