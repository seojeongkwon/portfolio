$(function(){

function blind(){
  $('body').append('<div class="blind"></div>  ');
  $('.blind').fadeTo(500,1);
};

$('.loginbtn').click(function(e){
  e.preventDefault();
  blind();
  $('.loginpop').fadeTo(200,1);
});
  // 닫기
$('.loginbutton').click(function(){
  $('.blind').remove();
  $('.loginpop').fadeOut(200,0);
});
  //닫기 버튼
$('.closebtn').click(function(){
  $('.blind').remove();
  $('.loginpop').fadeOut(200,0);
});


$('.signupbtn').click(function(e){
  e.preventDefault();
  blind();
  $('.loginpop').fadeOut(200,0);
  $('.signuppop').fadeTo(200,1);
});
  // 닫기
$('.joinbutton').click(function(){
  $('.blind').remove();
  $('.signuppop').hide();
});
$('.closebtn').click(function(){
  $('.blind').remove();
  $('.signuppop').fadeOut(200,0);
});


$('.passwordbtn').click(function(e){
  e.preventDefault();
  $('.loginpop').fadeOut(200,0);
  $('.passwordpop').fadeTo(200,1);
});
  // 닫기
$('.sendbutton').click(function(){
  $('.blind').remove();
  $('.passwordpop').hide();
});
$('.closebtn').click(function(){
  $('.blind').remove();
  $('.passwordpop').fadeOut(200,0);
});

$('.orderbutton').click(function(e){
  e.preventDefault();
  blind();
  $('.orderpop').fadeTo(200,1);
});
  // 닫기
$('.donebutton').click(function(){
  $('.blind').remove();
  $('.orderpop').fadeOut(200,0);
});
  //닫기 버튼
$('.closebtn').click(function(){
  $('.blind').remove();
  $('.orderpop').fadeOut(200,0);
});


//메인 메뉴바
$('.searchbar div').click(function(){
$(this).children('ul').toggle();

$(this).find('li').click(function(){
  txt = $(this).text();
  $(this).parent('ul').parent('div').find('span').text(txt);
  $(this).parent('ul').parent('div').find('strong').css('background-color','rgba(255,0,0,.08)');
});

$(this).siblings('div').find('ul').hide();
$(this).siblings('div').find('.table').hide();
});

$('.searchbar div').click(function(){
$(this).children('.table').toggle();
$(this).find('td').click(function(){
  txt = $(this).text();
  $(this).parents('.table').parent('div').find('strong').find('span').text(txt);
  $(this).parents('.table').parent('div').find('strong').css('background-color','rgba(255,0,0,.08)');
});

$(this).siblings('div').find('ul').hide();
$(this).siblings('div').find('.table').hide();
});



//푸터 메뉴바
$('.lang').find('div').click(function(){
$(this).children('ul').toggle();

$(this).find('span').toggleClass('menu_g_uparrow');

$(this).find('li').click(function(){
  txt = $(this).text();
  $(this).parent('ul').parent('div').find('span').text(txt);
  $(this).parent('ul').parent('div').find('strong').css('background-color','rgba(255,200,100,0.1)');
});

$(this).siblings('div').find('ul').hide();
});


$('.searchbar>div').click(function(){
var i = $(this).index();
resizeHide(i);
});

function resizeHide(idx){
  //console.log(idx);
  if($('html').is('.labtop')){

    switch (idx) {
      case 0:
        $('.searchbar>div').eq(3).toggleClass('on').siblings().removeClass('on');
        break;
      case 1:
        $('.searchbar>div').eq(4).toggleClass('on').siblings().removeClass('on');
        break;
      case 2:
        $('.searchbar>div').eq(5).toggleClass('on').siblings().removeClass('on');
        break;
      case 3:
        $('.searchbar>div').siblings().removeClass('on');
        break;
      case 4:
        $('.searchbar>div').siblings().removeClass('on');
        break;
      case 5:
        $('.searchbar>div').siblings().removeClass('on');
        break;
      default:
    };

  }else if($('html').is('.tablet')){

    $(this).siblings().removeClass('on');
    switch (idx) {
      case 0:
        $('.searchbar>div').eq(2).toggleClass('on').end().eq(4).toggleClass('on');
        $('.searchbar>div').eq(1).removeClass('on').end().eq(3).removeClass('on').end().eq(5).removeClass('on');
        //각자 지정해서 명령하기 힘들면 각자 클래스를 줘서 not이라는 클래스를 줘서 없으면 실행되게 한다.
        break;
      case 1:
        $('.searchbar>div').eq(3).toggleClass('on').end().eq(5).toggleClass('on');
        $('.searchbar>div').eq(2).removeClass('on').end().eq(4).removeClass('on');
        break;
      case 2:
        $('.searchbar>div').eq(4).toggleClass('on');
        $('.searchbar>div').eq(0).removeClass('on').end().eq(1).removeClass('on').end().eq(3).removeClass('on').end().eq(5).removeClass('on');
        break;
      case 3:
        $('.searchbar>div').eq(5).toggleClass('on');
        $('.searchbar>div').eq(0).removeClass('on').end().eq(1).removeClass('on').end().eq(2).removeClass('on').end().eq(4).removeClass('on');
        break;
      case 4:
        $('.searchbar>div').removeClass('on');
        break;
      case 5:
        $('.searchbar>div').removeClass('on');
        break;
      default:
    };

  }else if($('html').is('.mobile')){

        switch (idx){
          case 0:
          console.log(idx);
          $('.searchbar>div').eq(0).css("background-color","rgba(0,0,0,.1");
            break;
          case 1:
          $('.searchbar>div').eq(1).css("background-color","rgba(0,0,0,.1");
            break;
          case 2:
          $('.searchbar>div').eq(2).css("background-color","rgba(0,0,0,.1");
            break;
          case 3:
          $('.searchbar>div').eq(3).css("background-color","rgba(0,0,0,.1");
            break;
          case 4:
          $('.searchbar>div').eq(4).css("background-color","rgba(0,0,0,.1");
            break;
          case 5:
          $('.searchbar>div').eq(5).css("background-color","rgba(0,0,0,.1");
            break;
          default:
        };



  };
};

$(window).resize(function(){

  $('.searchbar>div').find('ul').hide();
  $('.searchbar>div').find('.table').hide();
  $('.searchbar>div').siblings().removeClass('on');

  $('.lang div').find('ul').hide();

var ww = $(this).width();

if($('body').is('.index')){

    if(ww > 660  && ww < 1200 && !$('html').is('.labtop')){
        $('html').removeClass().addClass('labtop');

        console.log("labtop");
    }else if(ww > 480 && ww < 660 && !$('html').is('.tablet')){
        $('html').removeClass().addClass('tablet');

        console.log("tablet");
    }else if(ww < 480 && !$('html').is('.mobile')){
        $('html').removeClass().addClass('mobile');
        //헤더 메뉴바 클릭
        $('.menuboxbtn').click(function(){
            $(this).children('.menubox').toggle().css("top","50px");
            $(this).toggleClass('menu_uparrow');
        });
        console.log("mobile");
    };
}else{

    if(ww > 1024  && ww < 1300 && !$('html').is('.labtop')){
        $('html').removeClass().addClass('labtop');

        console.log("labtop");
    }else if(ww > 480 && ww < 1024 && !$('html').is('.tablet')){
        $('html').removeClass().addClass('tablet');

        console.log("tablet");
    }else if(ww < 480 && !$('html').is('.mobile')){
        $('html').removeClass().addClass('mobile');
        console.log("mobile");
        //헤더 메뉴바 클릭
        $('.menuboxbtn').click(function(){
            $(this).children('.menubox').toggle().css("top","50px");
            $(this).toggleClass('menu_uparrow');
        });
    };
};




});

$(window).trigger("resize");





});
