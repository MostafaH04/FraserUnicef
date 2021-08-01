var menu = document.getElementById("nav-links");
var cover = document.getElementById("cover");
if (window.innerWidth < 830) {
    menu.style.display = "none";
    cover.style.display = "none";
}

if (window.innerWidth < 830){
        document.documentElement.style.setProperty('--aboutTop', '80px');
        document.documentElement.style.setProperty('--aboutBottom', '105px');
        document.documentElement.style.setProperty('--aboutWidth', '415px');
        document.documentElement.style.setProperty('--aboutinfo', '18px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '420px');
        document.documentElement.style.setProperty('--execMarg', '40px');

    }else if (window.innerWidth < 1320){
        document.documentElement.style.setProperty('--aboutTop', '100px');
        document.documentElement.style.setProperty('--aboutBottom', '133px');
        document.documentElement.style.setProperty('--aboutWidth', '520px');
        document.documentElement.style.setProperty('--aboutinfo', '21px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '522px');
        document.documentElement.style.setProperty('--execMarg', '100px');

    }else{
        document.documentElement.style.setProperty('--aboutTop', '120px');
        document.documentElement.style.setProperty('--aboutBottom', '160px');
        document.documentElement.style.setProperty('--aboutWidth', '618px');
        document.documentElement.style.setProperty('--aboutinfo', '25px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '620px');
        document.documentElement.style.setProperty('--execMarg', '100px');

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
    if (window.innerWidth < 830){
        document.documentElement.style.setProperty('--aboutTop', '80px');
        document.documentElement.style.setProperty('--aboutBottom', '105px');
        document.documentElement.style.setProperty('--aboutWidth', '415px');
        document.documentElement.style.setProperty('--aboutinfo', '18px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '420px');
        document.documentElement.style.setProperty('--execMarg', '40px');

    }else if (window.innerWidth < 1320){
        document.documentElement.style.setProperty('--aboutTop', '100px');
        document.documentElement.style.setProperty('--aboutBottom', '133px');
        document.documentElement.style.setProperty('--aboutWidth', '520px');
        document.documentElement.style.setProperty('--aboutinfo', '21px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '522px');
        document.documentElement.style.setProperty('--execMarg', '100px');

    }else{
        document.documentElement.style.setProperty('--aboutTop', '120px');
        document.documentElement.style.setProperty('--aboutBottom', '160px');
        document.documentElement.style.setProperty('--aboutWidth', '618px');
        document.documentElement.style.setProperty('--aboutinfo', '25px');
        document.documentElement.style.setProperty('--aboutinfoWidth', '620px');
        document.documentElement.style.setProperty('--execMarg', '100px');

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
    var x = document.getElementById("cont")
    if (window.innerWidth < 830) {
        menu.style.display = "none";
        cover.style.display = "none";
        if (x.classList.contains("change")){
            x.classList.toggle("change");
        }
        document.getElementById("bod").style.overflow = "visible";
    }
    else {
        if (x.classList.contains("change")){
            x.classList.toggle("change");
        }
        document.getElementById("bod").style.overflow = "visible";
        menu.style.display = "flex";
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

if (window.innerWidth >  830) {
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
    if (window.innerWidth >  830) {
        
        if (scrollPos >= aboutSec && scrollPos < eventSec){
            aboutColor.style.color = 'orange';
        } else if (scrollPos >= eventSec && scrollPos < execSec){
            eventColor.style.color = 'orange';
        } else if (scrollPos >= execSec && scrollPos < contactSec){
            execColor.style.color = 'orange';
        } else if (scrollPos >= contactSec) {
            contactColor.style.color = 'orange';
        }
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


function menuFunc() {
    var x = document.getElementById("cont")
    var menu = document.getElementById("nav-links");
    x.classList.toggle("change");

    if (window.innerWidth < 830) {

        if (menu.style.display === "block"){
            menu.style.display = "none";
            cover.style.display = "none";
            document.getElementById("bod").style.overflow = "visible";
        }else {
            menu.style.display = "block";
            cover.style.display = "block";
            document.getElementById("bod").style.overflow = "hidden";
        }
    }
}