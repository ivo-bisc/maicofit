// ── VIDEO LOADER ──
// Reemplazá VIDEO_ID con el ID de tu video de YouTube
// Ejemplo: si tu video es https://youtube.com/watch?v=dQw4w9WgXcQ → VIDEO_ID = "dQw4w9WgXcQ"
const VIDEO_ID = "iana6V662i0";

function loadVideo() {
  const wrap = document.getElementById("videoWrap");
  wrap.innerHTML = `<iframe
    src="https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0"
    allow="autoplay; encrypted-media; fullscreen"
    allowfullscreen>
  </iframe>`;
}
