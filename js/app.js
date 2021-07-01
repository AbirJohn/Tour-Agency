let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-container');


let FromBtn = document.querySelector('#loging-btn');
let logingfrom = document.querySelector('.loginig-form-container');
let FromClose = document.querySelector('#form-close');



let Menu = document.querySelector('#menu-bar');
let Navbar = document.querySelector('.navbar');


let VideoBtn = document.querySelectorAll('.vi-btn');




window.onscroll = () =>{
    Menu .classList.remove('fa-times');
    Navbar.classList.remove('active');
    logingfrom.classList.remove('active');
}

Menu.addEventListener ('click',()=>{
    Menu .classList.toggle('fa-times');
    Navbar.classList.toggle('active');
});

searchBtn.addEventListener ('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

FromBtn.addEventListener ('click',()=>{
    logingfrom.classList.add('active');
});

FromClose.addEventListener ('click',()=>{
    logingfrom.classList.remove('active');
});



VideoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.control .active ').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


var swiper = new Swiper(".review-slider", {

    speceBetween: 20,
    loop:true,
    autoplay:{
        dely:2500,
        disableOnInteraction:false,
    },
    breakpoint:{
        640:{
            sliderPreview:2,
        },
        768:{
            sliderPreview:3,
        },
        1024:{
            sliderPreview:4,
        },
    },

});


var swiper = new Swiper(".brand-slider", {
    speceBetween: 20,
    loop:true,
    autoplay:{
        dely:2500,
        disableOnInteraction:false,
    },

    breakpoint:{
        450:{
            slidesPreview:2,
            
        },
        768:{
            slidesPreview:3,
            
        },

        991:{
            slidesPreview:4,
            
        },

        1200:{
            slidesPreview:5,
          
        },
    },

});



