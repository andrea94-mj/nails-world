'use strict'


// MENU RESPONSIVE

const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener ('click', ()=>{
    headerNav.classList.toggle('isActive')
})


// EFECTO PARALLAX

const headerWrapper = document.querySelector ('.Header-wrapper')
const headerH1 = document.querySelector ('.Header-h1')

const parallax =  () => {
    let scrollPosition = window.scrollY
    headerWrapper.style.backgroundPosition = 'center ' + (-scrollPosition/4) + 'px'
    headerH1.style.marginTop = (scrollPosition/2) + 'px'
    headerH1.style.opacity = 1  - (scrollPosition/100)
}

window.addEventListener ('scroll', () =>{
    parallax()
})
