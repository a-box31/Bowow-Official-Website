const discordLogo = document.getElementById("discord-logo");

discordLogo.addEventListener('mouseenter', () => {
  discordLogo.classList.add("fa-shake");
})
discordLogo.addEventListener("mouseleave", () => {
  discordLogo.classList.remove("fa-shake");
})
