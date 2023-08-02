// HTML:
// <canvas id="canvas"></canvas>

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 5 + 1;
  this.speedX = Math.random() * 3 - 1.5;
  this.speedY = Math.random() * 3 - 1.5;
}

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;

  if (this.size > 0.2) this.size -= 0.1;
};

Particle.prototype.draw = function () {
  ctx.fillStyle = "rgba(173, 216, 230," + this.size + ")";
  ctx.strokeStyle = "rgba(173, 216, 230," + this.size + ")";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.closePath();

  ctx.fill();
  ctx.stroke();
};

function createParticle(e) {
  const xPos = e.x;
  const yPos = e.y;
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(xPos, yPos));
  }
}

canvas.addEventListener("click", createParticle);

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

animateParticles();
