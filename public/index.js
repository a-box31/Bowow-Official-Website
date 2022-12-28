const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const playButton = document.getElementById('play-music')


if (toggleButton){
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
}

if( playButton ){
    playButton.addEventListener('click', () => {
        
    })
}