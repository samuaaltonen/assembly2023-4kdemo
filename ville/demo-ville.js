// let particlesArray = [];
// const particlesCount = 400;

// class Particle {
//     constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 5 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//     }

//     update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.size > 0.2) this.size -= 0.1;
//     }

//     draw() {
//         ctx.fillStyle = 'white';
//         ctx.strokeStyle = 'black';
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//         ctx.stroke();
//     }
// }

// function init() {
//     for (let i = 0; i < particlesCount; i++) {
//         particlesArray.push(new Particle());
//     }
// }

// init();

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < particlesArray.length; i++) {
//         particlesArray[i].update();
//         particlesArray[i].draw();

//         if (particlesArray[i].size <= 0.2) {
//             particlesArray.splice(i, 1);
//             i--;
//             particlesArray.push(new Particle());
//         }
//     }
//     requestAnimationFrame(animate);
// }

// animate();

// let increment = 0;

// function draw() {
//   var sinIncrement = 0.05;
//   var cosIncrement = 0.1;
//   var sinSize = 100;
//   var cosSize = 100;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (var x = 0; x < canvas.width; x += 20) {
//     for (var y = 0; y < canvas.height; y += 20) {
//       var xOffset = Math.sin((x+increment)*sinIncrement)*sinSize;
//       var yOffset = Math.cos((y+increment)*cosIncrement)*cosSize;

//       ctx.fillStyle = `rgb(${Math.abs(xOffset)}, ${Math.abs(yOffset)}, 100)`;
//       ctx.fillRect(x + xOffset, y + yOffset, 10, 10);
//     }
//   }

//   increment += 0.07;
//   requestAnimationFrame(draw);
// }

// draw();

// var colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
// var numBands = colors.length * 2;
// var bandHeight;
// var rot = 0;

// function draw() {
//   var centerX = canvas.width / 2;
//   var centerY = canvas.height / 2;
//   var radius = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
//   bandHeight = radius / numBands;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = '#000';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   for (var i = numBands; i > 0; i--) {
//     ctx.fillStyle = colors[i % colors.length];
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, bandHeight * i, rot, rot + Math.PI * 2);
//     ctx.arc(centerX, centerY, bandHeight * (i - 1), rot, rot + Math.PI * 2, true);
//     ctx.fill();
//   }

//   rot += 0.01;
//   requestAnimationFrame(draw);
// }

// draw();

// retro tunnel
const canvas = document.getElementById("canvas");

var colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"];
var numBands = colors.length * 2;
var bandHeight;
var rot = 0;

function draw() {
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  bandHeight = radius / numBands;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = numBands; i > 0; i--) {
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.arc(centerX, centerY, bandHeight * i, rot, rot + Math.PI * 2);
    ctx.arc(
      centerX,
      centerY,
      bandHeight * (i - 1),
      rot,
      rot + Math.PI * 2,
      true
    );
    ctx.fill();
  }

  rot += 0.01;
  requestAnimationFrame(draw);
}

draw();
