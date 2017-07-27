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


//부킹 메뉴바
$('.bookbox div').click(function(){
$(this).children('ul').toggle();

$(this).find('li').click(function(){
  txt = $(this).text();
  $(this).parent('ul').parent('div').find('span').text(txt).css('color','#fff');
  $(this).parent('ul').parent('div').find('strong').css('background-color','rgba(0,0,0,.15)');
});

$(this).siblings('div').find('ul').hide();
$(this).siblings('div').find('.table').hide();
});

$('.bookbox div').click(function(){
$(this).children('.table').toggle();

$(this).find('td').click(function(){
  txt = $(this).text();
  $(this).parents('.table').parent('div').find('strong').find('span').text(txt).css('color','#fff');
  $(this).parents('.table').parent('div').find('strong').css('background-color','rgba(0,0,0,.15)');
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
  $(this).parent('ul').parent('div').find('strong').css('background-color','rgba(0,200,100,0.1)');
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


$('#writterbox').load('comments.html #comments_box');

// $('.comments .reviewname02').click(function(e){
//   e.preventDefault();
//   $('#writterbox').children('#comments_box').remove();
//   $('#writterbox').load('inqueries.html #inqueries_box');
// });
// $('.inqueries .inqname01').click(function(e){
//   e.preventDefault();
//   $('#writterbox').children('#inqueries_box').remove();
//   $('#writterbox').load('inqueries.html #inqueries_box');
// });


});

var map;
function initMap() {
  // Create the map with no initial style specified.
  // It therefore has default styling.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.86, lng: 151.209},
    zoom: 13,
    mapTypeControl: false
  });

  // Add a style-selector control to the map.
  var styleControl = document.getElementById('style-selector-control');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

  // Set the map's style to the initial value of the selector.
  var styleSelector = document.getElementById('style-selector');
  map.setOptions({styles: styles[styleSelector.value]});

  // Apply new JSON when the user selects a different style.
  styleSelector.addEventListener('change', function() {
    map.setOptions({styles: styles[styleSelector.value]});
  });
};

var styles = {
  default: null,

  retro: [
    {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{color: '#c9b2a6'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [{color: '#dcd2be'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ae9e90'}]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#93817c'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{color: '#a5b076'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#447530'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#f5f1e6'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#fdfcf8'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#f8c967'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#e9bc62'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{color: '#e98d58'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [{color: '#db8555'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#806b63'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [{color: '#8f7d77'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#ebe3cd'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{color: '#b9d3c2'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#92998d'}]
    }
  ],

};
