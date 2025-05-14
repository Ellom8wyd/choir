// Utility: calculate time until next 03:13
function updateCountdown() {
    const now = new Date();
    const next = new Date(now);
    next.setSeconds(0,0);
    next.setMinutes(13);
    next.setHours(now.getHours());
    if (now >= next) next.setHours(next.getHours() + 1);
    const diff = next - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2,'0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
    document.getElementById('timer').textContent = `${h}:${m}:${s}`;
  }
  
  // Initialize countdown and refresh every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // Play button logic
  const audio = document.getElementById('choir-audio');
  const btn = document.getElementById('play-btn');
  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = '⏸️ Pause Chant';
    } else {
      audio.pause();
      btn.textContent = '▶️ Play Chant';
    }
  });
  
  // Optional: auto-play at exactly 03:13
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 3 && now.getMinutes() === 13 && now.getSeconds() < 2) {
      if (audio.paused) audio.play();
    }
  }, 1000);
  