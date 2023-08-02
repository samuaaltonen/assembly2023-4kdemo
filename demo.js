// prettier-ignore
//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
let zzfxM = (n, f, t, e = 125) => { let l, o, z, r, g, h, x, a, u, c, d, i, m, p, G, M = 0, R = [], b = [], j = [], k = 0, q = 0, s = 1, v = {}, w = zzfxR / e * 60 >> 2; for (; s; k++)R = [s = a = d = m = 0], t.map((e, d) => { for (x = f[e][k] || [0, 0, 0], s |= !!f[e][k], G = m + (f[e][0].length - 2 - !a) * w, p = d == t.length - 1, o = 2, r = m; o < x.length + p; a = ++o) { for (g = x[o], u = o == x.length + p - 1 && p || c != (x[0] || 0) | g | 0, z = 0; z < w && a; z++ > w - 99 && u ? i += (i < 1) / 99 : 0)h = (1 - i) * R[M++] / 2 || 0, b[r] = (b[r] || 0) - h * q + h, j[r] = (j[r++] || 0) + h * q + h; g && (i = g % 1, q = x[1] || 0, (g |= 0) && (R = v[[c = x[M = 0] || 0, g]] = v[[c, g]] || (l = [...n[c]], l[2] *= 2 ** ((g - 12) / 12), g > 0 ? zzfxG(...l) : []))) } m = G }); return [b, j] }
const zzfx = (...z) => zzfxP(zzfxG(...z)); // generate and play sound
const zzfxV = 0.3; // volume
const zzfxR = 44100; // sample rate
const zzfxX = new (window.AudioContext || webkitAudioContext)(); // audio context
const zzfxP = (
    ...samples // play samples
) => {
    // create buffer and source
    let buffer = zzfxX.createBuffer(samples.length, samples[0].length, zzfxR),
        source = zzfxX.createBufferSource();

    // copy samples to buffer and play
    samples.map((d, i) => buffer.getChannelData(i).set(d));
    source.buffer = buffer;
    source.connect(zzfxX.destination);
    source.start();
    return source;
};
const zzfxG = // generate samples
    (
        // parameters
        volume = 1,
        randomness = 0.05,
        frequency = 220,
        attack = 0,
        sustain = 0,
        release = 0.1,
        shape = 0,
        shapeCurve = 1,
        slide = 0,
        deltaSlide = 0,
        pitchJump = 0,
        pitchJumpTime = 0,
        repeatTime = 0,
        noise = 0,
        modulation = 0,
        bitCrush = 0,
        delay = 0,
        sustainVolume = 1,
        decay = 0,
        tremolo = 0
    ) => {
        // init parameters
        let PI2 = Math.PI * 2,
            sign = (v) => (v > 0 ? 1 : -1),
            startSlide = (slide *= (500 * PI2) / zzfxR / zzfxR),
            startFrequency = (frequency *=
                ((1 + randomness * 2 * Math.random() - randomness) * PI2) / zzfxR),
            b = [],
            t = 0,
            tm = 0,
            i = 0,
            j = 1,
            r = 0,
            c = 0,
            s = 0,
            f,
            length;

        // scale by sample rate
        attack = attack * zzfxR + 9; // minimum attack to prevent pop
        decay *= zzfxR;
        sustain *= zzfxR;
        release *= zzfxR;
        delay *= zzfxR;
        deltaSlide *= (500 * PI2) / zzfxR ** 3;
        modulation *= PI2 / zzfxR;
        pitchJump *= PI2 / zzfxR;
        pitchJumpTime *= zzfxR;
        repeatTime = (repeatTime * zzfxR) | 0;

        // generate waveform
        for (
            length = (attack + decay + sustain + release + delay) | 0;
            i < length;
            b[i++] = s
        ) {
            if (!(++c % ((bitCrush * 100) | 0))) {
                // bit crush
                s = shape
                    ? shape > 1
                        ? shape > 2
                            ? shape > 3 // wave shape
                                ? Math.sin((t % PI2) ** 3) // 4 noise
                                : Math.max(Math.min(Math.tan(t), 1), -1) // 3 tan
                            : 1 - (((((2 * t) / PI2) % 2) + 2) % 2) // 2 saw
                        : 1 - 4 * Math.abs(Math.round(t / PI2) - t / PI2) // 1 triangle
                    : Math.sin(t); // 0 sin

                s =
                    (repeatTime
                        ? 1 - tremolo + tremolo * Math.sin((PI2 * i) / repeatTime) // tremolo
                        : 1) *
                    sign(s) *
                    Math.abs(s) ** shapeCurve * // curve 0=square, 2=pointy
                    volume *
                    zzfxV * // envelope
                    (i < attack
                        ? i / attack // attack
                        : i < attack + decay // decay
                            ? 1 - ((i - attack) / decay) * (1 - sustainVolume) // decay falloff
                            : i < attack + decay + sustain // sustain
                                ? sustainVolume // sustain volume
                                : i < length - delay // release
                                    ? ((length - i - delay) / release) * // release falloff
                                    sustainVolume // release volume
                                    : 0); // post release

                s = delay
                    ? s / 2 +
                    (delay > i
                        ? 0 // delay
                        : ((i < length - delay ? 1 : (length - i) / delay) * // release delay
                            b[(i - delay) | 0]) /
                        2)
                    : s; // sample delay
            }

            f =
                (frequency += slide += deltaSlide) * // frequency
                Math.cos(modulation * tm++); // modulation
            t += f - f * noise * (1 - (((Math.sin(i) + 1) * 1e9) % 2)); // noise

            if (j && ++j > pitchJumpTime) {
                // pitch jump
                frequency += pitchJump; // apply pitch jump
                startFrequency += pitchJump; // also apply to start
                j = 0; // reset pitch jump time
            }

            if (repeatTime && !(++r % repeatTime)) {
                // repeat
                frequency = startFrequency; // reset frequency
                slide = startSlide; // reset slide
                j = j || 1; // reset pitch jump time
            }
        }

        return b;
    };

/**
 * Vector2
 */
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// prettier-ignore
const songData =
    [[[, 0, 77, , , .7, 2, .41, , , , , , , , .06], [, 0, 43, .01, , .3, 2, , , , , , , , , .02, .01], [, 0, 170, .003, , .008, , .97, -35, 53, , , , , , .1], [.8, 0, 270, , , .12, 3, 1.65, -2, , , , , 4.5, , .02], [, 0, 86, , , , , .7, , , , .5, , 6.7, 1, .05], [, 0, 41, , .05, .4, 2, 0, , , 9, .01, , , , .08, .02], [, 0, 2200, , , .04, 3, 2, , , 800, .02, , 4.8, , .01, .1], [.3, 0, 16, , , .3, 3]], [[[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33], [3, 1, 22, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 24, , , , , , , , , , , , , , , , , , , , , , , , 22, , 22, , 22, , , ,], [5, -1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,], [, 1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,]], [[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33], [3, 1, 24, , , , , , , , 27, , , , , , , , , , , , , , , , 27, , , , 24, , , , 24, , , , , , , , 27, , , , , , , , , , , , , , , , 24, , 24, , 24, , , ,], [5, -1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,], [, 1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,], [6, 1, , , 34, 34, 34, , , , , , 34, 34, , , , , 34, , , , 34, 34, , , , , 34, , , , 34, , , , 34, 34, 34, , , , , , 34, , , , , , 34, 34, , , 34, 34, , , , , , , , , 34, 34], [4, 1, , , , , , , 24, , , , , , 24, , 24, , , , 24, , , , 24, , , , , , , , , , , , , , , , 24, , , , , , 24, , 24, , , , 24, , , , 24, , , , , , , , , ,]], [[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 23, 23, 35, 23, 23, 36, 23, 23, 35, 23, 23, 36, 23, 23, 35, 35, 23, 23, 35, 23, 23, 35, 23, 23, 36, 23, 23, 35, 23, 23, 36, 36], [5, -1, 21, , , 19, , , 21, , , , , , , , , , 21, , , 19, , , 17, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [3, 1, 24, , , 24, , , 24, , , , , , , , , , 24, , , 24, , , 24, , , , 24.75, 24.5, 24.26, 24.01, 24.01, 24.01, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25], [4, -1, , , , , , , , , , , , , , , , , , , , , , , , , , , 24.75, 24.5, 24.26, 24.01, 24.01, 24.01, 24.01, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24], [7, -1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 23, , 21, 23, , 35, , 23, , 21, 23, , 35, , 35, , 23, , 21, 23, , 35, , 21, 23, , 35, , 21, 23, , ,], [6, 1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 34, 36, 34, , 33, 34, 34, 36, 31, 36, 34, , 31, 34, 32, , 33, 36, 34, , 31, 34, 34, 36, 33, 36, 33, , 31, , ,]], [[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 29], [4, 1, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, , , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24], [7, -1, 21, , 19, 21, , 33, , 21, , 19, 21, , 33, , 33, , 21, , 19, 21, , 33, , 21, , 19, 21, , 33, , 33, , 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29], [2, 1, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, , , , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, , ,], [6, 1, , , 36, , , , , , 36, , 36, , , , , , , , 36, , , , , , 36, , 36, , , , , , , , 36, , , , , , , , , , , , , , , , 36, , , , , , 36, , 36, , , , , ,], [3, 1, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25, , , , , 25, , , , , 25, , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25]], [[1, -1, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 26, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 29, 19, 19, 31, 19, 19, 31, 19, 19, 31, 19, 19, 31, 19, 19, 31, 31], [4, 1, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 36, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24], [7, -1, 14, , 14, 14, 26, 14, 14, 26, 14, , 14, 14, 26, 14, 14, 26, 14, , 14, 14, 26, 14, 14, 26, 14, , 14, 14, 26, 14, 14, 26, 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29, 19, , 19, 19, 31, 19, 19, 31, 19, , 19, 19, 31, 19, 19, 31], [2, 1, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, , , , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, , ,], [3, 1, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25], [6, 1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 34, , , , , , 34, , 34, , , , , , , , 34, , , , , , 34, , 34, , , , , ,]]], [0, 1, 1, 2, 3, 4, 4], , { "title": "Depp", "Notes": "Unknown author", "instruments": ["Instrument 0", "Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4", "Instrument 5", "Instrument 6", "Instrument 7"], "patterns": ["Pattern 0", "Pattern 1", "Pattern 2", "Pattern 3", "Pattern 4"] }]

const buffer = zzfxM(...songData);
let myAudio = zzfxP(...buffer);

/**
 * Constants. Calculate width and height so that they can be
 * divided by cellSize evenly.
 */
const cellSize = 20;
const w = Math.floor(window.innerWidth / cellSize) * cellSize;
const h = Math.floor(window.innerHeight / cellSize) * cellSize;

const zoom = 0.15;
const curve = 0.8;
const grid = new Vector(Math.floor(w / cellSize), Math.floor(h / cellSize));

const rotateCos = Math.cos(Math.PI / 9000);
const rotateSin = Math.sin(Math.PI / 9000);

/**
 * Flowfield
 */
let field = [];
let rotate = 0;

/**
 * Particle
 */
class Particle {
    constructor() {
        this.reset();
    }

    /**
     * Randomize position and velocity multipliers. Tries to randomize
     * position inside flow field currents 10 times.
     *
     * Initialize trail array (particle position history)
     */
    reset() {
        for (let i = 0; i < 10; i++) {
            this.pos = new Vector(
                Math.floor(Math.random() * w),
                Math.floor(Math.random() * h)
            );

            if (field[
                Math.floor(this.pos.y / cellSize) * grid.x +
                Math.floor(this.pos.x / cellSize)
            ]) {
                break;
            }
        }

        this.velocityMultiplier = Math.floor(1 + Math.random() * 4);
        this.curve = Math.random() * Math.PI / 10;

        this.trail = [
            {
                ...this.pos,
            },
        ];

        this.trailLen = Math.floor(10 + Math.random() * 20);
        this.angle = rotate;
        this.lightness = 12;
    }

    /**
     * Draws the trail
     *
     * @param c - 2D canvas rendering context
     */
    draw(c) {
        /**
         * Set hue to red if last text (heart), otherwise get the hue from the angle.
         */
        const hue = currentText === texts.length ? 0 : (this.angle / (Math.PI * 2)) * 360;

        c.strokeStyle = `hsl(${hue}, 100%, ${this.lightness}%)`;

        for (let i = 1; i < this.trail.length; i++) {
            const p1 = this.trail[i - 1];
            const p2 = this.trail[i];

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
     */
    update() {
        if (this.trail.length === this.trailLen) {
            this.trail.shift();
            this.trailLen--;

            if (this.trailLen === 0) {
                this.reset();
            }
            return;
        }

        const flow = field[
            Math.floor(this.pos.y / cellSize) * grid.x +
            Math.floor(this.pos.x / cellSize)
        ];

        /**
         * Make particle brighter if inside flow current
         */
        this.lightness = flow ? 60 : 12;

        if (this.angle > flow) {
            this.angle -= this.curve;
        } else if (this.angle < flow) {
            this.angle += this.curve;
        } else {
            this.angle = flow;
        }

        this.pos.x += Math.cos(this.angle + rotate) * this.velocityMultiplier;
        this.pos.y += Math.sin(this.angle + rotate) * this.velocityMultiplier;

        this.trail.push({
            ...this.pos,
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
let ctx;

/**
 * Particles
 */
let particles = [];

/**
 * Initialize canvas and set to window size
 */
const canvas = document.createElement('canvas');

ctx = canvas.getContext('2d', { willReadFrequently: true });
canvas.width = w;
canvas.height = h;

document.body.appendChild(canvas);
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;

const gradient = ctx.createRadialGradient(w / 2, h / 2, h / cellSize, w / 2, h / 2, w);

// Add color stops
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.25, 'orange');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(0.75, 'green');
gradient.addColorStop(1, 'blue');

ctx.fillStyle = gradient;
ctx.font = `bold ${h}px Arial`;
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';

const texts = ['2', '0', '2', '3', '2023', 'ASSEMBLY', '❤️'];
let currentText = 0;

/**
 * Updates text to next one.
 */
function updateText() {
    if (currentText === texts.length) {
        return;
    }

    ctx.fillText(texts[currentText], w / 2, h / 2 + h / 10, w);
    currentText++;
}

/**
 * Calculate flow field vectors so that text affects their value.
 */
function updateFlowField() {
    let newField = [];

    const data = ctx.getImageData(0, 0, w, h).data;

    for (let y = 0; y < h; y += cellSize) {
        for (let x = 0; x < w; x += cellSize) {
            const i = (y * w + x) * 4;
            const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
            newField.push(gray / 255 * Math.PI * 2);
        }
    }

    field = newField;
}

updateText();
updateFlowField();

setInterval(() => {
    updateText();
    updateFlowField();
}, 6000);

/**
 * Create 1000 particles
 */
for (let i = 0; i < 1000; i++) {
    particles.push(new Particle());
}

/**
 * Rendering loop
 */
const play = () => {
    /**
     * Clear the canvas
     */
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p) => {
        p.update(field);
        p.draw(ctx);
    });

    /**
     * Add rotation
     */
    rotate += Math.PI / 360;

    requestAnimationFrame(play);
};
play();
