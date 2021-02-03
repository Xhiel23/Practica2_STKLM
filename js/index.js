const nav = document.querySelector('.nav');
const icon = document.querySelector('.fas.fa-bars')
const menu = document.querySelector('.menu');
icon.addEventListener('click', ()=>{
    console.log("I got clicked");
    nav.classList.toggle('visible');
    menu.classList.toggle('visible');
})