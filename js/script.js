$(document).ready(function(){
	$('.sliderClients').bxSlider({
		controls: true,
		pager: false,
		//nextSelector: '#slider-next',
		//prevSelector: '#slider-prev',
		slideWidth: 235,
		minSlides: 1,
		maxSlides: 4,
		slideMargin: 20,
		adaptiveHeight: true,
		responsive: true
	});
    $('.dotstyle a, .callForm, button, #topSearch,.ourServicesList').bind('click', function(e){
         // делаем че надо (если надо)

         // блокируем дефолтное действие (переход по ссылке)
         var e = e || window.event;
         if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
         return false;
        });
   
        /*var map;
        var myLatLng = {lat: 49.992918, lng: 36.22335};
            function initMap() {
              map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 18
                
              });
                
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'We Here!'
            });
                setMarkers(map);
            }
         function setMarkers(map) {
                      // Adds markers to the map.

                      // Marker sizes are expressed as a Size of X,Y where the origin of the image
                      // (0,0) is located in the top left of the image.

                      // Origins, anchor positions and coordinates of the marker increase in the X
                      // direction to the right and in the Y direction down.
                      var image = {
                        url: 'http://aurum-source.com/files/b2b/ts-map-pin.png',
                        // This marker is 20 pixels wide by 32 pixels high.
                        size: new google.maps.Size(49, 71),
                        // The origin for this image is (0, 0).
                        origin: new google.maps.Point(0, 0),
                        // The anchor for this image is the base of the flagpole at (0, 32).
                        anchor: new google.maps.Point(0, 71)
                      };
            };*/
    
         $(function(){
			$.stellar({
				horizontalScrolling: 150,
				verticalOffset: 40
			});
		});
    //$(".hamburger").not('.is-active').find(".hamburger+nav").css( "display", "none" );
    $( ".hamburger" ).click(function() {
        $( this ).toggleClass( "is-active" );
        $("nav#main").toggleClass("block");
        $(".call-us .search").toggleClass( "is-active" );
        $(".navContainer").toggleClass( "is-active" )
    });
    $( ".call-us .search" ).click(function() {
        $( '.top input[type="search"]').css("display","block").toggleClass( "is-active" );
        $( '.top input[type="search"]').focus();
    });
    $(".ourServicesList").click(function(){
        $ ( this ).toggleClass( "openList" ); 
        $ ( ".ourChild" ).toggleClass( "bl1ock" ); 
        $
    });
        $(".ourServicesList").click(function () {
        $('.ourChild').toggle();
    }); 
    $(".dotstyle-scaleup ul li").click(function(){
        $( ".dotstyle-scaleup ul li").toggleClass("current") ;
    });
    
    $(document).click( function(event){
      if( $(event.target).closest(".navContainer.is-active").length ) 
        return;
      
       $(".navContainer.is-active, .hamburger.is-active").removeClass('is-active');
      event.stopPropagation();
    });
          
    
    
   
    
    $('a[href^="#whoWe"]').click(function(){
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
        });
    /*ПОСМОТРИ ПЛИ ЧТО НЕ ТАК форма открывается и закрывается*/
    
    
    // вешаем на каждую ссылку обработчик
/*замена класса*/
    $('.dotstyle li a').bind( 'click', function(){
        var parent = $(this).parents('li');
        if( $(parent).hasClass('current')){
            $(this).removeClass('current');
        } else {
            $('.dotstyle li').removeClass('current');
            $(parent).addClass('current');
        }
    });
    $(".top .get").click(function(){
        $('.top .callForm').toggleClass('block')
        
    });
     $('.ourSuccesses span').viewportChecker({
        classToAdd: 'timer'
     });
    // custom formatting example
      $('#earth').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });

      // start all the timers
      $('.timer').each(count);

            function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      };
    $(window).resize(function (){
        if($(window).width() <='999'){
            $("a[href^='tel']").removeClass("noLink");}
        else{
            $("a[href^='tel']").addClass("noLink")
        }
        
    });
    /*$(window).on("orientationchange",function(){
        $(".newsBrick").masonry( 'reload' );
        alert('dncvj');
    });*/
    /*function inWindow(s){
          var scrollTop = $(window).scrollTop();
          var windowHeight = $(window).height();
          var currentEls = $(s);
          var result = [];
          currentEls.each(function(){
            var el = $(this);
            var offset = el.offset();
            if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
              result.push(this);
          });
          return $(result);
        var boxesInWindow = inWindow("blogNews");
 
// сделаем фон этих элементов красным
    boxesInWindow.css("background-color", "red");
        }*/
    
    
    
});    
$(document).click( function(event){
      if( $(event.target).closest("#2").hasClass('is-active').length ) 
        return;
      $("#2").fadeOut("slow");
      event.stopPropagation();
    });


