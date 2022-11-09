/*메뉴 버튼 모양 변형*/
const menuTrigger = document.querySelector('.rightButton');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
});
    
    
/*메뉴창 슬라이드*/   
$(function(){
    $(".rightButton").click(function(){
        if($("#menu").hasClass('on')){
          $("#menu").removeClass('on');
        } else{
          $("#menu").addClass('on');
        }
    });
}); 

    
    
/*메뉴 텍스트 페이드업*/
 $(function(){
    $(".rightButton").click(function(){
        if($("#menu").hasClass('on')){
          $(".menuTxt div").addClass('on');
        } else{
          $(".menuTxt div").removeClass('on');
        }
    });
});   
    
   
/*텍스트 스크롤 이동*/
$(document).on('scroll', function(){
            $('.title01').css("right", Math.max(54 - 0.05*window.scrollY, 27) + "%");
            $('.title02').css("left", Math.max(52 - 0.05*window.scrollY, 26) + "%");
            $('.title03').css("right", Math.max(57.5 - 0.05*window.scrollY, 28) + "%");
        })
    

/*프로그레스바*/    
window.onscroll = function() {myFunction()};
    
function myFunction() {

    var winScroll = document.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 310;
    document.getElementById("myBar").style.width = scrolled + "%";
    document.getElementById("myBar2").style.width = scrolled + "%";
    document.getElementById("myBar3").style.left = scrolled + "%";
    document.getElementById("myBar4").style.left = scrolled + "%";
}

    
/*가로스크롤*/    
"use strict"

document.addEventListener('scroll', horizontalScroll);

let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

function horizontalScroll(){
    
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    }
}    
    
    
/*스크롤 애니메이션*/    
$(window).scroll(function(){
    var scroll_top = $(this).scrollTop();
    
    /*어바웃 페이지 시작*/
    if(scroll_top>= $('#about .innerBox > .left').offset().top-$('#about .innerBox > .left').height()){
       $('#about .innerBox > .left').addClass('ani');
    }else{
        $('#about .innerBox > .left').removeClass('ani');
    }
    if(scroll_top>= $('#about .innerBox > .left').offset().top-$('#about .innerBox > .left').height()){
       $('#about .innerBox > .right').addClass('ani');
    }else{
        $('#about .innerBox > .right').removeClass('ani');
    }
    /*어바웃 페이지 끝*/
    
    /*작업물 페이지 시작*/
    if(scroll_top>= $('.sticky-parent').offset().top-$('.bgTitle_line').height()){
       $('.bgTitle_line').addClass('ani');
    }else{
        $('.bgTitle_line').removeClass('ani');
    }
    if(scroll_top>= $('.sticky-parent').offset().top-$('.bgTitle_line').height()){
       $('.bgTitle p').addClass('ani');
    }else{
        $('.bgTitle p').removeClass('ani');
    }
    if(scroll_top>= $('.sticky-parent').offset().top-$('.bgTitle_line').height()){
       $('.horizontal').addClass('ani');
    }else{
        $('.horizontal').removeClass('ani');
    }
    /*작업물 페이지 끝*/
  
    /*포스터 페이지 시작*/
    if(scroll_top>= $('#poster .mainTxt').offset().top-$('#poster .mainTxt li p').height()){
       $('#poster .mainTxt li p').addClass('ani');
    }else{
        $('#poster .mainTxt li p').removeClass('ani');
    }
    if(scroll_top>= $('#poster .mainTxt').offset().top-$('#poster .mainTxt li p').height()){
       $('#poster .subTxt li p').addClass('ani');
    }else{
        $('#poster .subTxt li p').removeClass('ani');
    }
    if(scroll_top>= $('#poster .mainTxt').offset().top-$('#poster .mainTxt li p').height()){
       $('.cont .contTxt').addClass('ani');
    }else{
        $('.cont .contTxt').removeClass('ani');
    }
    /*포스터 페이지 끝*/
    
    /*컨택트 시작*/
    if(scroll_top>= $('.halfCircle').offset().top-$('.halfCircle div p').height()){
       $('.halfCircle div p').addClass('ani');
    }else{
        $('.halfCircle div p').removeClass('ani');
    }
    /*컨택트 끝*/
});    
    
    
/*포스터 */
$(document).ready(function(){
    	$(".poster01_txt").hover(function(){
    		$(".poster01 img").css("display", "block");
            $(".poster01 img").addClass('ani');
            $(".poster01 img").removeClass('ani2');
    	}, function(){
    		$(".poster01 img").css("display", "block");
            $(".poster01 img").addClass('ani2');
            $(".poster01 img").removeClass('ani');
    	});

        $(".poster02_txt").hover(function(){
    		$(".poster02 img").css("display", "block");
            $(".poster02 img").addClass('ani');
            $(".poster02 img").removeClass('ani2');
    	}, function(){
    		$(".poster02 img").css("display", "block");
            $(".poster02 img").addClass('ani2');
            $(".poster02 img").removeClass('ani');
    	});
    
        $(".poster03_txt").hover(function(){
    		$(".poster03 img").css("display", "block");
            $(".poster03 img").addClass('ani');
            $(".poster03 img").removeClass('ani2');
    	}, function(){
    		$(".poster03 img").css("display", "block");
            $(".poster03 img").addClass('ani2');
            $(".poster03 img").removeClass('ani');
    	});
    
        $(".poster04_txt").hover(function(){
    		$(".poster04 img").css("display", "block");
            $(".poster04 img").addClass('ani');
            $(".poster04 img").removeClass('ani2');
    	}, function(){
    		$(".poster04 img").css("display", "block");
            $(".poster04 img").addClass('ani2');
            $(".poster04 img").removeClass('ani');
    	});
 });
    
    
/*텍스트 무한 롤링*/
 Zepto(function($) {
  $(window).on('load', function() {
    $.each($(".ezkorry-roller"), function(index, item) {
      const wrapper = $("<div />", { class:"ezkorry-roller-wrapper"});
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);
  
      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while(max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }
      
      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 45000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});
    
    
/*svg 라인 스크롤 효과*/
let ticking = false;
let last_known_scroll_position = 0;
let updatePath = false;

const element = document.querySelector('.vertical svg');
const path = element.querySelector('.vertical path')
let totalLength = 0;

initPath(path)

function initPath(path){
   totalLength = path.getTotalLength();
   path.style.strokeDasharray = `${totalLength}`;
   path.style.strokeDashoffset = totalLength;
}

function handleEntries(entries) {
  console.log(entries)
   entries.forEach(entry => {
    console.log(entry)
    if(entry.isIntersecting) {
      console.log(entry.target)
    }
    
  })
}

let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry);
      updatePath = true;
		} else {
      updatePath = false;
    }
		});
	}, {rootMargin: "0px 0px 0px 0px"});


  observer.observe(element);

function doSomething(scroll_pos) {
  if(!updatePath) {
    return;
  }
  window.requestAnimationFrame(()=>{
    const center = window.innerHeight / 2;
    const boundaries = path.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top ) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path.style.strokeDashoffset = drawLength < totalLength ? totalLength - drawLength : 0;
 
  })

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


/*백그라운드 컬러 변경*/
$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.page');
  
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();
    

/*스크롤에 맞춰 메뉴 활성화*/    
(function (global, $) {

    var $menu     = $('.menuTxt li a'),
        $contents = $('.scroll'),
        $doc      = $('html, body');

    $(window).scroll(function(){

        var scltop = $(window).scrollTop();

        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(0 <= scltop)) {
                $menu.removeClass('on');
            }
        })

    });

}(window, window.jQuery));
    

/*커서 커스텀*/    
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
    
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 5;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {

    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "75px");
      cursor.style.opacity = "0";
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "difference";
    cursorBorder.style.setProperty("--size", "50px");
      cursor.style.opacity = "1";
  });
});    




