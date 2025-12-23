document.addEventListener("DOMContentLoaded", () => {
  const tracks = document.querySelectorAll(".vertical-track");

  let pos = 0;
  let speed = -0.4; // UP (change to +0.4 for DOWN)

  function animate() {
    tracks.forEach(track => {
      const limit =
        track.scrollHeight - track.parentElement.clientHeight;

      pos += speed;
      if (pos <= -limit || pos >= 0) speed *= -1;

      track.style.transform = `translateY(${pos}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}, { once: true });
