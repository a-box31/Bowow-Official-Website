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


const discordLogo = document.getElementById('discord-logo');

discordLogo.onmouseenter = () => {
    discordLogo.classList.add('fa-shake');
}

discordLogo.onmouseleave = () => {
    discordLogo.classList.remove('fa-shake')
}