// Mở đèn sau 2 giây
window.onload = () => {
  setTimeout(() => {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");
  }, 2000);
};
setTimeout(() => {
  document.body.classList.add("party-mode");
}, 3000);
const bgMusic = document.getElementById("bg-music");

document.addEventListener('click', () => {
  bgMusic.play();
}, { once: true }); // chỉ gọi 1 lần
document.addEventListener('click', () => {
  bgMusic.muted = false;
  bgMusic.play();
}, { once: true });

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  for (let i = 0; i < 100; i++) {
    particles.push({
      x,
      y,
      radius: Math.random() * 2 + 1,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 1,
      color,
      alpha: 1
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.01;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  particles = particles.filter(p => p.alpha > 0);
  requestAnimationFrame(updateParticles);
}

setInterval(createFirework, 800);
updateParticles();
