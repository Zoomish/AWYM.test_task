
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$('body').scrollspy({
    target: '.navbar-fixed-top'
})
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var SelectOptions = document.querySelectorAll('.selected');

SelectOptions.forEach(function(element, index) {
    element.addEventListener('click', switchCase);
});

function switchCase (event) {
    var targetElement = event.target;

    SelectOptions.forEach(function(element, index) {
        element.classList.remove('active','disableed');
    });

    targetElement.classList.add('active','disableed');
}

var Selectpos = document.querySelectorAll('.position');

Selectpos.forEach(function(element, index) {
    element.addEventListener('mouseenter', ShowContact);
    element.addEventListener('mouseleave', HideContact);
});

function ShowContact (event) {
    var targetElement = event.target;
    targetElement.classList.add('mouse_over');
    var Contact_us=targetElement.querySelector('.contact_us');
    Contact_us.classList.add('contact_us_show');
}
function HideContact (event) {
    var targetElement = event.target;
    targetElement.classList.remove('mouse_over');
    var Contact_us=targetElement.querySelector('.contact_us');
    Contact_us.classList.remove('contact_us_show');
    
}

var Selectpos1 = document.querySelectorAll('.service-item');

Selectpos1.forEach(function(element, index) {
    element.addEventListener('mouseenter', ShowContact);
    element.addEventListener('mouseleave', HideContact);
});

window.addEventListener('load',slide_show_1);


var imgd = ["/scroll_down/1.png", "/scroll_down/2.png", "/scroll_down/3.png", "/scroll_down/4.png", "/scroll_down/5.png" ]; 
var post = 0;
var tmd = setInterval("slide_show_1()", 300);
function slide_show_1() {
    if(post  >= imgd.length)
        post = 0;
    document.getElementById("TV_1").src = imgd[post];
    post++;
}





window.addEventListener('load',slide_show);





var img = ["/about_us/1.png", "/about_us/2.png", "/about_us/3.png", "/about_us/4.png", "/about_us/5.png" ]; 
var pos = 0;
var tm = setInterval("slide_show()", 1000);
function slide_show() {
    if(pos  >= img.length)
        pos = 0;
    document.getElementById("TV").src = img[pos];
    pos++;
}







var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        237.5: {
            slidesPerView: 2,
        },
        475: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
});














let item = document.querySelectorAll('.item');
const itemLength = item.length;
// console.log(itemLength);

let slider = [];
for (let i = 0; i<itemLength; i++) {
    slider[i] = item[i];
  // console.log(slider[i]);
    item[i].remove();
}
let step = 0;
let offset = 0;

function burgerSlider() {
    let div = document.createElement('div');
    div = slider[1];
    div.classList.add('item');
    div.style.top = -100 + 'px';
    document.querySelector('.items').appendChild(div); 
    
    
    div = slider[step];
    div.classList.add('item');
    div.style.top = offset*100 + 'px';
    // console.log(div);
    document.querySelector('.items').appendChild(div); 
    div = slider[step+1];
    div.classList.add('item');
    div.style.top = offset*100 + 100 + 'px';
    // console.log(div);
    document.querySelector('.items').appendChild(div); 
    offset = 1;
    
}

function burgerSliderR() {
    if (step == 0) {
        step = (slider.length-2);
    } else {
        if (step == 1) {
            step = (slider.length-1);
        } else {
            step = (step -2);
        }
    }
    let offset = -1;
    let div = document.createElement('div');
    div = slider[step];
    div.classList.add('item');
    div.style.top = offset*992 + 'px';
    document.querySelector('.items').insertBefore(div, items.firstElementChild);
    if (step == (slider.length-1)) {
        step = 0;
    } else {
        step = (step+1);
    }
    offset = 1;
}

function right() {
    rclick = null;
    let slider2 = document.querySelectorAll('.item');
    let offset2 = (slider2.length-1);
    for (let i = (slider2.length-1); i>=0; i--) {
    slider2[i].style.top = offset2*992 + 'px';
    offset2 --;
    }
    setTimeout(function() {
        slider2[(slider2.length-1)].remove();
        burgerSliderR();
        rclick = right;
}, 600);
}

function wait_slider(){
    setTimeout(right, 0);
    setInterval(right, 3000)
}

burgerSlider();
step = 0;




function getParentId(el) {
    const Boxes = document.querySelectorAll('.portfolio-box');
    const id = el.id;
    console.log(id)
    for (let i = 0; i < Boxes.length; i++) {
        const element = Boxes[i];
        console.log(element)
        if (i==id) {
            element.classList.add('showed');
            element.classList.remove('hidden');
        }else{
            element.classList.remove('showed');
            element.classList.add('hidden');
        }
    }
}

let btns = document.querySelectorAll('.selected');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        getParentId(btn);
    });
});
