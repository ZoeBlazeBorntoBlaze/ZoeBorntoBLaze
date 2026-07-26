const button = document.getElementById("openButton");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    // Start the music
    music.play().catch(() => {
        console.log("Music playback requires user interaction.");
    });

    // Button animation
    button.innerHTML = "Opening... 💌";
    button.disabled = true;

    // Fade out the page
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = "0";

    // Open your Canva invitation
    setTimeout(() => {
        window.location.href = "https://zoeblaze.my.canva.site/borntoblaze";
    }, 1800);

});
