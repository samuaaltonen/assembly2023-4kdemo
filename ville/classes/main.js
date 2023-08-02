class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  subtract(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  normalize() {
    let length = this.length();
    return new Vector(this.x / length, this.y / length);
  }
}

class Ray {
  constructor(pos, dir) {
    this.pos = pos;
    this.dir = dir;
  }

  cast(wall) {
    // Check for intersection using dot product
    let t =
      ((wall.a.x - this.pos.x) * (wall.b.y - wall.a.y) -
        (wall.a.y - this.pos.y) * (wall.b.x - wall.a.x)) /
      (this.dir.x * (wall.b.y - wall.a.y) - this.dir.y * (wall.b.x - wall.a.x));

    let u = -(
      (this.pos.x * this.dir.y -
        this.pos.y * this.dir.x -
        wall.a.x * this.dir.y +
        wall.a.y * this.dir.x) /
      (this.dir.x * (wall.b.y - wall.a.y) - this.dir.y * (wall.b.x - wall.a.x))
    );

    if (t > 0 && u >= 0 && u <= 1) {
      return new Vector(
        this.pos.x + t * this.dir.x,
        this.pos.y + t * this.dir.y
      );
    } else {
      return null;
    }
  }
}

class Wall {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Player {
  constructor(pos, fov) {
    this.pos = pos;
    this.fov = fov;
    this.rays = [];
    for (let i = -fov / 2; i < fov / 2; i += 1) {
      this.rays.push(
        new Ray(
          this.pos,
          new Vector(1, Math.tan((i * Math.PI) / 180)).normalize()
        )
      );
    }
  }
  rotate(angle) {
    for (let i = 0; i < this.rays.length; i++) {
      let angleOffset =
        ((this.fov / 2 - (i * this.fov) / this.rays.length) * Math.PI) / 180;
      this.rays[i].dir = new Vector(
        Math.cos(angle + angleOffset),
        Math.sin(angle + angleOffset)
      );
    }
  }

  // New function to move the player
  move(dx) {
    this.pos.x += dx;
  }
  look(walls, ctx) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        let point = ray.cast(wall);
        if (point) {
          let distance = this.pos.subtract(point).length();
          if (distance < record) {
            record = distance;
            closest = point;
          }
        }
      }

      if (closest) {
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(closest.x, closest.y);
        ctx.stroke();
      }
    }
  }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let walls = [
  new Wall(new Vector(100, 100), new Vector(200, 100)),
  new Wall(new Vector(200, 100), new Vector(200, 200)),
  new Wall(new Vector(200, 200), new Vector(100, 200)),
  new Wall(new Vector(100, 200), new Vector(100, 100)),
];

let player = new Player(new Vector(300, 300), 60);

let angle = 0;
let dx = 1;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let wall of walls) {
    ctx.beginPath();
    ctx.moveTo(wall.a.x, wall.a.y);
    ctx.lineTo(wall.b.x, wall.b.y);
    ctx.stroke();
  }

  // Rotate and move player
  player.rotate(angle);
  player.move(dx);

  player.look(walls, ctx);

  // Reverse direction if player hits canvas bounds
  if (player.pos.x >= canvas.width || player.pos.x <= 0) {
    dx = -dx;
  }

  angle += 0.01;

  requestAnimationFrame(draw);
}

draw();
