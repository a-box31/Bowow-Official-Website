// -----------------------------------------------------------------------------
// NAVIGATION SCRIPT
// -----------------------------------------------------------------------------
const nav = document.getElementById('navbar');
const wrapper = document.getElementsByClassName('wrapper')[0]


wrapper.onscroll = function(){
    if( wrapper.scrollTop > 50 ){
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.93)'
    }else{
        nav.style.backgroundColor = 'transparent'
    }
}


const hamburger = document.getElementsByClassName('hamburger')[0]

hamburger.addEventListener("click", () => {
    hamburger.classList.contains('is-active') ? hamburger.classList.remove('is-active') : hamburger.classList.add('is-active');
})

