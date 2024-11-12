 <script>
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
var searchBtn = document.querySelector('#search-btn');
var searchBar = document.querySelector('.search-bar-container');
var formBtn = document.querySelector('#login-btn');
var loginForm = document.querySelector('.login-form-container');
var formClose = document.querySelector('#form-close');
var menu = document.querySelector('#menu-bar');
var navbar = document.querySelector('.navbar');
var videoBtn =document.querySelectorAll('.vid-btn');


window.onscroll = function () {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', function () {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', function () {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', function () {
    loginForm.classList.remove('active');
});

videoBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        var src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
     });
  });
});
 </script>