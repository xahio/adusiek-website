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
let isMuted = true; // Zmienna śledząca stan wyciszenia

soundsButton.addEventListener("click", function() {
    if (isMuted) {
        video.muted = false; // Włącz dźwięk
        isMuted = false; // Zaktualizuj stan wyciszenia
        soundsButton.textContent = "Mute"; // Zaktualizuj tekst przycisku
    } else {
        video.muted = true; // Wycisz dźwięk
        isMuted = true; // Zaktualizuj stan wyciszenia
        soundsButton.textContent = "UnMute"; // Zaktualizuj tekst przycisku
    }
});