/**
 * Vector2
 */
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Constants
 */
const w = window.innerWidth;
const h = window.innerHeight;
const cellSize = 20;
const zoom = 0.15;
const curve = 0.8;
const grid = new Vector(Math.floor(w / cellSize), Math.floor(h / cellSize));

const rotateCos = Math.cos(Math.PI / 9000);
const rotateSin = Math.sin(Math.PI / 9000);

/**
 * Particle
 */
class Particle {
    constructor() {
        this.reset();
    }

    /**
     * Randomize position and velocity multipliers
     * 
     * Initialize trail array (particle position history)
     */
    reset() {
        this.pos = new Vector(
            Math.floor(Math.random() * w),
            Math.floor(Math.random() * h),
        );
        this.velocityMultiplier = Math.floor(1 + Math.random() * 4);

        this.trail = [{
            ...this.pos
        }];
        this.trailLen = Math.floor(30 + Math.random() * 200);
    }

    /**
     * Draws the trail
     * 
     * @param c - 2D canvas rendering context
     */
    draw(c) {
        for (let i = 1; i < this.trail.length; i++) {
            const p1 = this.trail[i - 1];
            const p2 = this.trail[i];
            const flowValue = field[Math.floor(p1.y / cellSize) * grid.x + Math.floor(p1.x / cellSize)];

            const hue = (flowValue / (Math.PI * 2)) * 360; // Map flow value to hue
            c.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Set stroke style using HSL
            c.lineWidth = 2; // You can vary this value to change the line thickness

            c.beginPath();
            c.moveTo(p1.x, p1.y);
            c.lineTo(p2.x, p2.y);
            c.stroke();
        }
    }

    /**
     * Gets the flow velocity from the field and updates particle
     * position based on that.
     * 
     * When the trail reaches maximum lenght, start reducing it from the
     * start until there is nothing left, then reset.
     * 
     * @param field - FLowfield to get the flow velocity
     */
    update(field) {
        if (this.trail.length === this.trailLen) {
            this.trail.shift();
            this.trailLen--;

            if (this.trailLen === 0) {
                this.reset();
            }
            return;
        }

        const flow = field[Math.floor(this.pos.y / cellSize) * grid.x + Math.floor(this.pos.x / cellSize)];

        this.pos.x += Math.cos(flow) * this.velocityMultiplier;
        this.pos.y += Math.sin(flow) * this.velocityMultiplier;

        this.trail.push({
            ...this.pos
        });

        while (this.trail.length > this.trailLen) {
            this.trail.shift();
        }
    }
}

/**
 * Canvas context
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */
let c;

/**
 * Particles
 */
let particles = [];

/**
 * Flowfield
 */
let field = [];

/**
 * Create flow field grid
 */
for (let y = 0; y <= grid.y; y++) {
    for (let x = 0; x <= grid.x; x++) {
        field.push((Math.cos(x * zoom) + Math.sin(y * zoom)) * curve);
    }
}

/**
 * Initialize canvas and set to window size
 */
const canvas = document.getElementById('c');
c = canvas.getContext('2d');
canvas.width = w;
canvas.height = h;

c.fillStyle = 'hsl(30,100%,50%)';
c.strokeStyle = 'white';
c.font = "90px Comic Sans MS";
c.lineWidth = 2;

/**
 * Create 420 particles
 */
for (let i = 0; i < 420; i++) {
    particles.push(new Particle);
}

/**
 * Rendering loop
 */
const play = () => {
    /**
     * Clear the canvas
     */
    //c.clearRect(0, 0, w, h);

    c.fillText("Assembly 2023", w / 2 - 300, h / 2);

    particles.forEach(p => {
        p.update(field);
        p.draw(c);
    });

    /**
     * Rotate flow field vectors randomly
     */
    field.forEach((vec, index) => {
        field[index] += Math.random() * (Math.PI / 90);
    });

    requestAnimationFrame(play);
};
play();