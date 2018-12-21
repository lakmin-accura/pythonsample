jQuery(document).ready(function ($) {
 "use strict";

// 
//----------------------------------
 
//wow js active
//----------------------------------
 new WOW().init();
 
 
//js scrollup
//----------------------------------
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 
// Data images
//----------------------------------
$('.background-image').each(function () {
	var src = $(this).attr('data-src');
	$(this).css({
		'background-image': 'url(' + src + ')'
	});
});
//js popup search box effect
//----------------------------------
$('.btn-search-form-toggle').on('click', function () {
	$("#popup-search-box-area").toggleClass('search-form-show');
});

//google map activation 
//----------------------------------- 
	if ($('#gmap').length > 0) {
		new GMaps({
			div: '#gmap',
			lat: 31.6175419, // //31.6175419,74.2811501
			lng:74.2811501,
			scrollwheel: false,				
			styles: [
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#cfefc2"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#fde391"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ffffff"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				}
			]
		}).addMarker({
			lat: 31.6175419, //31.6175419,74.2811501
			lng:74.2811501,
			infoWindow: {
				content: '<p>Main Bazar, Jia Musa, Near Butt Chowk, Shahdara, Lahore, Pakistan</p>'
			}
			});

	}

//partner logo  
//----------------------------------- 
	$(".partner-logo").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:false,	  
		items : 6,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 
//feature slide  
//----------------------------------- 
	$(".feature-slide").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:false,	  
		items : 4,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
//feature slide  
//----------------------------------- 
	$(".testimonial-slide").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:false,	  
		items : 2,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
	
	$(".testimonial-slide2").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:false,	  
		items : 2,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
//blog slide  
//----------------------------------- 
	$(".home-blog-slide").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:true,	  
		items : 3,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
//team slide  
//----------------------------------- 
	$(".team-member-slide").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:true,	  
		items : 4,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
//related service slide  
//----------------------------------- 
	$(".related-service-slide").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:true,
		navigation:false,	  
		items : 2,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
//location slide  
//----------------------------------- 
	$(".location-slide").owlCarousel({
		autoPlay: true, 
		slideSpeed:1000,
		pagination:false,
		navigation:true,	  
		items : 1,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 


//isotope activation 	
//=================
jQuery( function() {
    // now doc is ready, make selection
    // use another selector, not .isotope,
    // since that is dynamically added in Isotope v1
    var $container = jQuery('#container');
    // use imagesLoaded, instead of window.load
	$container.imagesLoaded(function () {
		// filter items on button click
		$('.filtering-button').on('click', 'a', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		var $grid = $('.grid').isotope({
			// set itemSelector so .grid-sizer is not used in layout
			itemSelector: '.grid-item',
			percentPosition: true,
			animationOptions: {
				duration: 500,
				easing: 'zoom-in'
			},
			masonry: {
				// use element for option
				columnWidth: '.grid-item'
			},
			transitionDuration: '.9s'
		})
	});
});



//Counter up activation 	
//=================
$('.about-counter').counterUp({
	delay: 50,
	time: 3000
});
//nice slect js 	
//=================
$('select').niceSelect();

$('.single-team2').matchHeight({
	minWidth: 500,
	maxHeight: 300,
	equalizeRows: true,
	byRow:true
});

//Circular Bars - Knob 	
//=================
if(typeof($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
		var $this = $(this),
			knobVal = $this.attr('data-rel');   		

		$this.knob({
		'draw' : function () {
			$(this.i).val(this.cv + '%')
		}
		});
		$this.appear(function() {
		$({
			value: 0
		}).animate({
			value: knobVal
		}, {
			duration : 2000,
			easing   : 'swing',
			step     : function () {
			$this.val(Math.ceil(this.value)).trigger('change');
			}
		});
		}, {accX: 0, accY: -150});
	});
}

//team two mesonary 	
//=================
jQuery( function() {
    // now doc is ready, make selection
    // use another selector, not .isotope,
    // since that is dynamically added in Isotope v1
    var $container = jQuery('#list .row');
    // use imagesLoaded, instead of window.load
	$container.imagesLoaded(function () {		
		$container.masonry( { itemSelector: '.item' } );
	});
});


(function () {
    var div = document.createElement("div");
    document.getElementsByTagName('body')[0].appendChild(div);
    div.outerHTML = "<div id='botDiv'><div id='botTitleBar'></div><iframe width='360px' height='400px' src='https://camsoftchat.azurewebsites.net/chatbot.html'></iframe></div>"; 

    document.querySelector('body').addEventListener('click', function (e) {
        e.target.matches = e.target.matches || e.target.msMatchesSelector;
        if (e.target.matches('#botTitleBar')) { 
            var botDiv = document.querySelector('#botDiv'); 
            botDiv.style.height = botDiv.style.height == '400px' ? '38px' : '400px';
        };
    });
}());





	


}); 