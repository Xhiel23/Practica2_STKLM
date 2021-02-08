'use strict';
var nav = document.querySelector('.nav');
var icon = document.querySelector('.fas.fa-bars');
var menu = document.querySelector('.menu');
icon.addEventListener('click', function () {
    console.log("I got clicked");
    nav.classList.toggle('visible');
    menu.classList.toggle('visible');
});
