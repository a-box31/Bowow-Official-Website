// -----------------------------------------------------------------------------
// NAVIGATION SCRIPT
// -----------------------------------------------------------------------------
const nav = document.getElementById('navbar');

const wrapper = document.getElementsByClassName('wrapper')[0]


wrapper.onscroll = function(){
        if( wrapper.scrollTop > 50 ){
            nav.style.backgroundColor = 'black'
        }else{
            nav.style.backgroundColor = 'transparent'
        }
    }



