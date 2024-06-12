const buttons = document.querySelectorAll('.social-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

const video = document.getElementById("myVideo");
const soundsButton = document.getElementById("soundsButton");
let isMuted = true;

soundsButton.addEventListener("click", function() {
    if (isMuted) {
        video.muted = false;
        isMuted = false;
        soundsButton.textContent = "Mute";
    } else {
        video.muted = true;
        isMuted = true;
        soundsButton.textContent = "UnMute";
    }
});