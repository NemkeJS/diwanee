
var init = (function(){

//caching the DOM
var windowWitdh = $(window).width();
var mainHeader = $('.hedear-wrapper'); 
var navHeader = $(mainHeader).find('#nav-icon1');
var jobs = $('#poslovi');
var jobPost = $(jobs).find('.job-post');
var lastJob = $(jobPost).last();
var cloneJob  = $(jobPost).clone();
var moreJobs = $(jobs).find('.more-pos');
var headerText = $('.header-big-desc p');

//binding Events
$(navHeader).on('click', toggleElemnts);
$(document).on('scroll', scrollElements);
$(jobPost).hover(toggleClassElem);
$(moreJobs).on('click', getMoreJobs);
$('nav ul li '+'a[href*=\\#]').on('click', onePageScroll);


function toggleElemnts() {
		$(this).toggleClass('open');
		$('nav').fadeToggle();
  }
function scrollElements() {
if(windowWitdh > 1100) {	
var y  = $(this).scrollTop();
if(y>10) {
$(mainHeader).css({
'background-color':'white',
'border-bottom':'1px solid #eee',

});
}

else {
$(mainHeader).css({
'background-color':'transparent',
'border-bottom':'none',
});
}
}
}
function toggleClassElem() {
$(this).toggleClass('black-post');
}

function getMoreJobs() {
$(lastJob).after(cloneJob);
$(this).disabled = true;
$(this).css('cursor','not-allowed');	
}
function onePageScroll (event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
}

if(windowWitdh < 640) {
$(headerText).text('Digital Media Agency').css('text-transform','uppercase');
} 
})();
