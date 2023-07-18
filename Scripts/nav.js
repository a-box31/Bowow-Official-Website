// -----------------------------------------------------------------------------
// NAVIGATION SCRIPT
// -----------------------------------------------------------------------------
const nav = document.getElementById('navbar');

const wrapper = document.getElementsByClassName('wrapper')[0]


wrapper.onscroll = function(){
    ( wrapper.scrollTop > 50 ) ? nav.style.backgroundColor = 'rgba(0, 0, 0, 0.93)': nav.style.backgroundColor = 'transparent';
}


const hamburger = document.getElementsByClassName('hamburger')[0]
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    if( hamburger.classList.contains('is-active') ){
        hamburger.classList.remove("is-active");
        mobileNav.classList.remove("mobile-is-active");
    }else{
        hamburger.classList.add('is-active');
        mobileNav.classList.add("mobile-is-active");
    }
})

