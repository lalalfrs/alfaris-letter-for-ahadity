function openEnvelope() {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("message").style.display = "block";
    createFlowers();
}

function playMusic() {
    const music = document.getElementById("background-music");
    music.play();
}

function createFlowers() {
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement("div");
        flower.className = "bunga";
        flower.innerHTML = "🌸"; // Emoji bunga
        document.body.appendChild(flower);
        setTimeout(() => {
            flower.remove();
        }, 5000); // Hapus bunga setelah 5 detik
    }
}