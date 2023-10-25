let kanamemadokaiskawaii = `EF9595,봄웜톤,화사한 봄웜톤 중 브라이트 스프링의 당신! 피부가 매끄러워 보이는 것이 특징이에요. 선명하고 가벼운 색이 잘 어울리겠네요.
FACBEA,봄웜톤,화사한 봄웜톤 중 라이트 스프링의 당신! 벚꽃처럼 부드럽고 화사한 인상이에요. 선명하고 가벼운 색이 잘 어울리겠네요.
D755A5,봄웜톤,따뜻한 봄웜톤 중 라이트 스프링의 당신! 영변에 약산 진달래꽃 아름 따다 가실 길에 뿌려드리오리다~ 선명하고 가벼운 색이 잘 어울리겠어요.
35A29F,봄웜톤,화사한 봄웜톤 중 트루 스프링의 당신! 트루 스프링은 봄웜톤 계열 중에서도 사랑스럽고 귀여운 이미지에요. 과한 음영과 그라데이션이 안어울리니 주의해주세요.
008170,여름쿨톤,시원한 여름쿨톤 중 트루 섬머인 당신! 여름쿨톤은 정숙하고 차분한 인상을 줘요. 차가운 파스텔 색이 잘 어울리니 참고해주세요!
068FFF,여름쿨톤,시원한 여름쿨톤 중 뮤트 섬머인 당신! 청량하면서도 깨끗한 느낌의 분위기와 청순한 이미지의 색이에요. 너무 밝은 색보다 약간 탁한 그레이 톤이 잘 어울리겠어요.
00FFF6,여름쿨톤,시원한 여름쿨톤 중 라이트 섬머인 당신! 산뜻한 분위기를 가지고 있네요. 선명한 파스텔 톤과 잘 어울리고 흰색 악세서리가 코디를 잘 살려줘요.
08FFC8,여름쿨톤,시원한 여름쿨톤 중 라이트 섬머인 당신! 차갑고 밝은 색이 잘 어울려요. 라이트 섬머는 여름쿨톤 중에서도 특히 밝고 화사한 인상이에요.
D25380,가을웜톤,따뜻한 가을웜톤 중 소프트 어텀인 당신! 가을 타입은 봄타입보다 따뜻하고 깊은 색을 가지고 있는데요. 이 톤의 사람들은 가장 어울리는 색의 스펙트럼이 넓어요.
E08E6D,가을웜톤,따뜻한 가을웜톤 중 소프트 어텀인 당신! 성숙하고 세련된 이미지네요. 따뜻한 분위기와 감성이 잘 어울리는 색이에요. 스타일보다 분위기에 중심을 두는 코디가 좋아요.
D83F31,가을웜톤,따뜻한 가을웜톤 중 트루 어텀인 당신! 가을 웜톤 중 소화할 수 있는 색이 가장 많은 스타일이네요. 이외에도 와인색이나 짙은 브라운색과 잘 어울려요.
FC4F00,가을웜톤,따뜻한 가을웜톤 중 딥 어텀인 당신! 조금 더 어둡고 깊은 컬러가 잘 어울려요. 멋지게 코디하면 이번 가을은 당신의 계절!
FBF0B2,겨울쿨톤,시크한 겨울쿨톤 중 브라이트 윈터인 당신! 밝고 생생한 네온 색과 원색이 잘 어울리는 분이시네요. 블랙&화이트 스타일링은 어떨까요?
CAEDFF,겨울쿨톤,시크한 겨울쿨톤 중 트루 윈터인 당신! 선명하면서도 눈에 띄는 색을 잘 받아요. 채도가 낮은 색은 어울리지 않으니 주의해주세요!
662549,겨울쿨톤,시크한 겨울쿨톤 중 트루 윈터인 당신! 차가운 느낌의 쿨 채도 컬러라면 넓게 커버할 수 있어요. 시크한 이미지를 파란색·회색·검은색 코디로 살려보세요.
65451F,겨울쿨톤,시크한 겨울쿨톤 중 다크 윈터인 당신! 밝은 색과 어두운 색의 대비가 큰 스타일링이 잘 어울려요. 채도가 높고 안정감이 있는 색을 잘 소화해요.`
let colordescriptionlist = kanamemadokaiskawaii.split('\n');
let colorlist = 'EF9595,FACBEA,D755A5,35A29F,008170,068FFF,00FFF6,08FFC8,D25380,E08E6D,D83F31,FC4F00,FBF0B2,CAEDFF,662549,65451F'.split(',');
const urlParams = new URL(location.href).searchParams;
const userpersonalcolort = urlParams.get('color');
const username = urlParams.get('name');
let colorclass = document.getElementsByClassName("color");
let boxclass = document.getElementsByClassName("white-bg");
let userpersonalcolor = "#" + userpersonalcolort;


let resultnum = colorlist.indexOf(userpersonalcolort);
if(resultnum == -1){
	resultnum = 1;
}
let akemihomura = colordescriptionlist[resultnum];
let akemihomura1 = akemihomura.split(",");
const des = akemihomura1[2];
const ton = akemihomura1[1];

let figureimagelist = "일론 머스크,이재용,수지,루피,호시노 아이,마동석,로버트 다우니 주니어,장원영,아이유,유재석,손흥민,이강인,가우르 구라,김광규,공유,콜트".split(",");
const figurename = figureimagelist[resultnum];

window.onload=function(){
    for (let i = 0; i < colorclass.length; i++) {
        colorclass[i].style.color = userpersonalcolor;
    }
	
    for (let i = 0; i < boxclass.length; i++) {
        boxclass[i].style.backgroundColor = userpersonalcolor;
    }
    
    document.getElementById("resulttxt").innerHTML = userpersonalcolor;
    document.getElementById("figurename").innerHTML = figurename;
	document.getElementById("figureimg").innerHTML = '<a class="material-ripple" data-color="' + userpersonalcolort + '"><img src="images/' + resultnum + '.png" alt="img"/></a>';
    document.getElementById("figuredes").innerHTML = username + " 님의 퍼스널컬러와 같은 퍼스널컬러를 가진 사람은 " + figurename + "입니다! 다른 친구들과 비교해보세요.";
    document.getElementById("resultdes").innerHTML = des;
    document.getElementById("resultname").innerHTML = username;
    document.getElementById("resultcolor").style.backgroundColor = userpersonalcolor;
    document.getElementById("resultcolor").style.boxShadow = "0px 0px 15px 15px " + userpersonalcolor;/*
    document.getElementById("resultcolor2").style.backgroundColor = userpersonalcolor;
    document.getElementById("resultcolor2").style.boxShadow = "0px 0px 15px 15px " + userpersonalcolor;
    document.getElementById("resultcolor3").style.backgroundColor = userpersonalcolor;
    document.getElementById("resultcolor3").style.boxShadow = "0px 0px 15px 15px " + userpersonalcolor;*/
	
    
  
}



/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	
	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});