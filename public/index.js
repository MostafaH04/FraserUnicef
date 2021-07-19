if (window.innerWidth < 1320){
    document.documentElement.style.setProperty('--aboutTop', '100px');
    document.documentElement.style.setProperty('--aboutBottom', '133px');
    document.documentElement.style.setProperty('--aboutWidth', '520px');
    document.documentElement.style.setProperty('--aboutinfo', '21px');
    document.documentElement.style.setProperty('--aboutinfoWidth', '522px');

}
else{
    document.documentElement.style.setProperty('--aboutTop', '120px');
    document.documentElement.style.setProperty('--aboutBottom', '160px');
    document.documentElement.style.setProperty('--aboutWidth', '618px');
    document.documentElement.style.setProperty('--aboutinfo', '25px');
    document.documentElement.style.setProperty('--aboutinfoWidth', '620px');

}
if (window.innerWidth > 1119){
    document.documentElement.style.setProperty('--secHeight', String(window.innerHeight - 100) + 'px');

}
else{
    document.documentElement.style.setProperty('--secHeight', 'auto');
    
}

if(window.innerHeight > 770){
    document.documentElement.style.setProperty('--secHeight', String(window.innerHeight - 100) + 'px');
}
else {
    document.documentElement.style.setProperty('--secHeight', 'auto');
}

window.addEventListener('resize', function(event){
    if (window.innerWidth < 1320){
        document.documentElement.style.setProperty('--aboutTop', '100px');
        document.documentElement.style.setProperty('--aboutBottom', '133px');
        document.documentElement.style.setProperty('--aboutWidth', '520px');
        document.documentElement.style.setProperty('--aboutinfo', '21px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '522px');

    }
    else{
        document.documentElement.style.setProperty('--aboutTop', '120px');
        document.documentElement.style.setProperty('--aboutBottom', '160px');
        document.documentElement.style.setProperty('--aboutWidth', '618px');
        document.documentElement.style.setProperty('--aboutinfo', '25px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '620px');

    }
    if (window.innerWidth > 1119){
        document.documentElement.style.setProperty('--secHeight', String(window.innerHeight - 100) + 'px');

    }
    else{
        document.documentElement.style.setProperty('--secHeight', 'auto');

    }
    if(window.innerHeight > 770){
        document.documentElement.style.setProperty('--secHeight', String(window.innerHeight - 100) + 'px');
    }
    else {
        document.documentElement.style.setProperty('--secHeight', 'auto');
    }
});

var aboutSec = $('#about').offset().top;
var eventSec = $('#events').offset().top;
var execSec = $('#executives').offset().top;
var contactSec = $('#contact').offset().top;

var aboutColor = document.getElementById("about-btn");
var eventColor = document.getElementById("event-btn");
var execColor = document.getElementById("exec-btn");
var contactColor = document.getElementById("contact-btn");

const colors = [aboutColor, eventColor, execColor, contactColor];

for (let i = 0; i < colors.length; i++){
    colors[i].style.color = 'white';
}

var scrollPos = $(document).scrollTop();
if (scrollPos >= aboutSec && scrollPos < eventSec){
    aboutColor.style.color = 'orange';
} else if (scrollPos >= eventSec && scrollPos < execSec){
    eventColor.style.color = 'orange';
} else if (scrollPos >= execSec && scrollPos < contactSec){
    execColor.style.color = 'orange';
} else if (scrollPos >= contactSec) {
    contactColor.style.color = 'orange';
}

$(document).scroll(function() {
    var aboutSec = $('#about').offset().top;
    var eventSec = $('#events').offset().top;
    var execSec = $('#executives').offset().top;
    var contactSec = $('#contact').offset().top;
    var scrollPos = $(document).scrollTop();
    for (let i = 0; i < colors.length; i++){
        colors[i].style.color = 'white';
    }
    if (scrollPos >= aboutSec && scrollPos < eventSec){
        aboutColor.style.color = 'orange';
    } else if (scrollPos >= eventSec && scrollPos < execSec){
        eventColor.style.color = 'orange';
    } else if (scrollPos >= execSec && scrollPos < contactSec){
        execColor.style.color = 'orange';
    } else if (scrollPos >= contactSec) {
        contactColor.style.color = 'orange';
    }
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" page", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " page";
}