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
function sendEcho() {
    const text = document.getElementById("🌸🌸🌸").value;
    for (let i = 0; i < 26; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.innerText = text;

      // Acak posisi
      bubble.style.left = `${Math.random() * window.innerWidth}px`;
      bubble.style.top = `${Math.random() * window.innerHeight}px`;

      // Acak ukuran & warna
      bubble.style.fontSize = `${14 + Math.random() * 20}px`;
      bubble.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

      document.body.appendChild(bubble);

      // Hapus bubble setelah selesai animasi
      setTimeout(() => {
        bubble.remove();
      }, 5000);
    }

    document.getElementById("textInput").value = "";
  }
