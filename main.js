import "./style.css";
const slider = document.querySelector(".slider__wraper");
const leftBtn = document.querySelector(".slider__left-btn");
const rightbtn = document.querySelector(".slider__right-btn");

let state = 0; 

rightbtn.addEventListener('click', function (){
    state = (state + 1) % slider.children.length;
})