
const mulai = new Date("2023-12-12T00:00:00");

function timer() {
    const sekarang = new Date();
    const selisih = sekarang - mulai;

    const hari = Math.floor(selisih / (1000 * 60 *  60 * 24));
    const jam = Math.floor(
        (selisih / (1000 * 60 * 60)) % 24
    );
    const menit = Math.floor(
        (selisih / (1000 * 60)) % 60
    );
    const detik = Math.floor(
        (selisih / 1000) % 60
    );

    document.getElementById("timer") .innerHTML =
    hari + " Hari " +
    jam + " Jam " +
    menit + " Menit " +
    detik + " detik ";
}

timer();
setInterval(timer, 1000);


function love() {
    const hati = document.createElement("div");
    hati.innerHTML = "❤️";
    hati.style.position = "fixed";
    hati.style.left = Math.random() * 100 + "vw";
    hati.style.top = "80vh";
    hati.style.fontSize = "50px";
    hati.style.animation = "naik 2s ease forwards";
    document.body.appendChild(hati);
    setTimeout(() => hati.remove(), 2000);
};

const darkModeBtn = document.getElementById("darkMode");
const modeIcon = document.getElementById("modeIcon")

// cek saat halaman dimuat
if (localStorage.getItem("darkMode") === "aktif") {
    document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "aktif");
        modeIcon.innerHTML = "☀️";
    } else {
        localStorage.setItem("darkMode", "nonaktif");
        modeIcon.innerHTML = "🌙;"
    }
});

