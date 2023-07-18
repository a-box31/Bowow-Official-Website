const discordLogo = document.getElementById("discord-logo");

discordLogo.onmouseenter = () => {
  discordLogo.classList.add("fa-shake");
};

discordLogo.onmouseleave = () => {
  discordLogo.classList.remove("fa-shake");
};
