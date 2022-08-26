

$(function(){    
    $('.slider__list').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        centerMode: true,
        centerPadding:'25%',
        arrows:true,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 768, // 399px以下のサイズに適用
              settings: {
                slidesToShow: 1,
                arrows:false,
              },
            },
          ],
    });
});

$(function(){    
    $('.slider__list02').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:400000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        centerMode: false,
        
        arrows:true,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 768, // 399px以下のサイズに適用
              settings: {
                slidesToShow: 1,
                arrows:false,
                centerMode: true,
        centerPadding:'27.3%',
              },
            },
          ],
    });
});


$(function(){    
  if (window.matchMedia('(min-width:769px)').matches) { 
		/* ウィンドウサイズ769以上の処理を記述 */

    $('.ranking__list').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        centerMode: true,
        centerPadding:'25%',
        arrows:true,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 768, // 399px以下のサイズに適用
              settings: {
                slidesToShow: 1,
                arrows:false,
              },
            },
          ],
    });
  }
  
});

/* 商品詳細ページsp */
$(function(){    
  $('.productd-details__img__list').slick({
      autoplay:true,//自動再生する
      autoplaySpeed:4000,//自動再生するスピード 4秒
      dots:false,//ドット部分を表示する
      centerMode: true,
      centerPadding:'25%',
      arrows:true,
      slidesToShow: 2,
      responsive: [
          {
            breakpoint: 768, // 399px以下のサイズに適用
            settings: {
              slidesToShow: 1,
              arrows:false,
            },
          },
        ],
  });
});

/* 商品詳細ページpc */
$(function() {

  $('#slider').slick({
     /* asNavFor:"#thumbs", */
 
     
     dots: false,
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 1000,
      infinite: true, 
     slidesToShow: 1,
     arrows: false,
     
 });
 });

/* 商品詳細ページpic-up*/
$(function(){    
  

    $('.pickup__list').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:false,//ドット部分を表示する
        centerMode: true,
        centerPadding:'25%',
        arrows:true,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 768, // 399px以下のサイズに適用
              settings: {
                slidesToShow: 1,
                arrows:false,
              },
            },
          ],
    });
  
  
});