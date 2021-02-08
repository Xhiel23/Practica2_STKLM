'use strict'
const nav = (document.querySelector('.nav') as HTMLElement);
const icon = (document.querySelector('.fas.fa-bars') as HTMLElement);
const menu = (document.querySelector('.menu') as HTMLElement);
icon. addEventListener('click', () : void =>{
    console.log("I got clicked");
    nav.classList.toggle('visible');
    menu.classList.toggle('visible');
})