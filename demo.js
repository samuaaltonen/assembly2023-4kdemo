// prettier-ignore
//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
zzfxM = (n, f, t, e = 125) => {
  let l, o, z, r, g, h, x, a, u, c, d, i, m, p, G, M = 0,
    R = [],
    b = [],
    j = [],
    k = 0,
    q = 0,
    s = 1,
    v = {},
    w = zzfxR / e * 60 >> 2;
  for (; s; k++) R = [s = a = d = m = 0], t.map((e, d) => {
    for (x = f[e][k] || [0, 0, 0], s |= !!f[e][k], G = m + (f[e][0].length - 2 - !a) * w, p = d == t.length - 1, o = 2, r = m; o < x.length + p; a = ++o) {
      for (g = x[o], u = o == x.length + p - 1 && p || c != (x[0] || 0) | g | 0, z = 0; z < w && a; z++ > w - 99 && u ? i += (i < 1) / 99 : 0) h = (1 - i) * R[M++] / 2 || 0, b[r] = (b[r] || 0) - h * q + h, j[r] = (j[r++] || 0) + h * q + h;
      g && (i = g % 1, q = x[1] || 0, (g |= 0) && (R = v[[c = x[M = 0] || 0, g]] = v[[c, g]] || (l = [...n[c]], l[2] *= 2 ** ((g - 12) / 12), g > 0 ? zzfxG(...l) : [])))
    }
    m = G
  });
  return [b, j]
}

// prettier-ignore
zzfx = (...t) => zzfxP(zzfxG(...t))

// prettier-ignore
// zzfxP() - the sound player -- returns a AudioBufferSourceNode
zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),f=zzfxX.createBuffer(t.length,t[0].length,zzfxR);t.map((d,i)=>f.getChannelData(i).set(d)),e.buffer=f,e.connect(zzfxX.destination),e.start();return e}

// prettier-ignore
// zzfxG() - the sound generator -- returns an array of sample data
zzfxG=(q=1,k=.05,c=220,e=0,t=0,u=.1,r=0,F=1,v=0,z=0,w=0,A=0,l=0,B=0,x=0,G=0,d=0,y=1,m=0,C=0)=>{let b=2*Math.PI,H=v*=500*b/zzfxR**2,I=(0<x?1:-1)*b/4,D=c*=(1+2*k*Math.random()-k)*b/zzfxR,Z=[],g=0,E=0,a=0,n=1,J=0,K=0,f=0,p,h;e=99+zzfxR*e;m*=zzfxR;t*=zzfxR;u*=zzfxR;d*=zzfxR;z*=500*b/zzfxR**3;x*=b/zzfxR;w*=b/zzfxR;A*=zzfxR;l=zzfxR*l|0;for(h=e+m+t+u+d|0;a<h;Z[a++]=f)++K%(100*G|0)||(f=r?1<r?2<r?3<r?Math.sin((g%b)**3):Math.max(Math.min(Math.tan(g),1),-1):1-(2*g/b%2+2)%2:1-4*Math.abs(Math.round(g/b)-g/b):Math.sin(g),f=(l?1-C+C*Math.sin(2*Math.PI*a/l):1)*(0<f?1:-1)*Math.abs(f)**F*q*zzfxV*(a<e?a/e:a<e+m?1-(a-e)/m*(1-y):a<e+m+t?y:a<h-d?(h-a-d)/u*y:0),f=d?f/2+(d>a?0:(a<h-d?1:(h-a)/d)*Z[a-d|0]/2):f),p=(c+=v+=z)*Math.sin(E*x-I),g+=p-p*B*(1-1E9*(Math.sin(a)+1)%2),E+=p-p*B*(1-1E9*(Math.sin(a)**2+1)%2),n&&++n>A&&(c+=w,D+=w,n=0),!l||++J%l||(c=D,v=H,n=n||1);return Z}

// zzfxV - global volume
zzfxV = 0.3;

// zzfxR - global sample rate
zzfxR = 44100;

// zzfxX - the common audio context
zzfxX = new (window.AudioContext || webkitAudioContext)();

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
const songData = [[[.4,0,4e3,,,.03,2,1.25,,,,,.02,6.8],[,0,655,,,.11,2,1.65,,,,,,3.8,-.1,.1],[2.9,0,52,,,.13,,2.9,-1.1,4,156,15,,4.2],[3.3,0,58,,,.06,,5.9,,,,,,1,,.2,.004],[3.3,0,58,,,.15,,5.9,,,,,,1,,.2,.003],[2.1,0,100,2,1.42,3,,5.9,,,,,,1,20,-.2,.9],[3.3,0,58,,,.18,,5.9,,,,,,1,,.2,.007],[3.3,0,58,,,.08,,9.7,,,,,,1,,.2,.009],[3.3,0,58,,,.14,,8,,,,,,1,,.3,.13],[3.3,0,58,,,,,6.8,,,,,,1,,.2,.005],[3.3,0,58,,,.11,,5,,,,,,1,,.3,.006],[3.3,0,58,,,.14,,12,,,,,,1,,.4,.02],[3.3,0,58,,,.14,,19,,,,,,1,,.3,.004],[3.3,0,58,,,.11,,15.6,,,,,,1,,-.3,.005],[3.3,0,58,,,,,30,,,,,,1,,-.3,.01],[3.3,0,58,,,.12,,6,,,,,,1,,-.4,.006],[.5,0,2001,,,,3,5.3,,,-400,,,2],[3.3,0,58,,,.16,,6,,,,,,1,,-.4,.003],[.7,0,600,,,2.97,4,5,,,60,,.3,4,30,.01,.3,,,1],[3.3,0,58,,,.16,,13,,,,,,1,,-.4,.005],[3.3,0,58,,,.13,,6,,,,,,1,,.6,.13]],[[[,,26,32,34,32,1,18,,,,,24,27,,20,25,,],[5,,1,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,,,,,24,27,,20,25,1],[1,,,,,,32,,,,,,,,32,,,,],[5,,1,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[4,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[4,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[6,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[7,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[8,,23,26,,14,,,11,,23,26,,14,,11,27,,],[1,,32.99,32.9,32.84,32.79,32.74,32.69,32.64,32.58,32.53,32.49,32.44,32.4,32.35,32.3,32.25,32.2]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[9,,20,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[10,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[9,,23,26,,14,,,11,,23,26,,14,,11,27,,],[18,,18,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[10,,23,26,2,14,,,11,,23,26,2,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[11,,23,26,,14,,2,11,,23,26,,14,,11,27,15]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,,,,,],[1,,,,,,32,,,32.6,,32.4,,,32,,32,32],[2,,18,,,,,,18,,,,18,,,,,,],[12,,23,26,2,14,,2,11,2,23,26,2,14,3,11,27,15]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[13,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,],[18,,18,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[15,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[17,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[3,,23,26,,14,,,11,,23,26,,14,,11,27,,],[18,,,,,,1,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[12,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[19,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[14,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,],[1,,32.99,32.9,32.84,32.79,32.74,32.69,32.64,32.58,32.53,32.49,32.44,32.4,32.35,32.3,32.25,32.2]],[[10,,23,26,,14,,,11,,23,26,,14,,11,27,,],[5,,1,,,,,,,,,,,,,,,,],[18,,1,,,,,,,,,,,,,,,,]],[[15,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[20,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[8,,23,26,,14,,,11,,23,26,,14,,11,27,,]]],[0,1,16,2,3,7,4,5,8,6,9,10,11,12,13,14,15,17,18,19,20,21,23,22],,{"title":"arsembley","instruments":["Hihat","Claps","Bass Drum 2","synth","I4","I5","I7","I9","I11","I12","I14","I15","I17","I18","I19","I20","Hihat Open","I22","Dig Dug","I24","I26"],"patterns":["P0","P2","P7","P11","P13","P15","P17","P18","P20","P21","P26","P27","P28","P30","P31","P32","P37","P38","P39","P41","P42","P44","P46","P47"]}];

/**
 * Constants. Calculate width and height so that they can be
 * divided by cellSize evenly.
 */
const cS = 20;
const w = Math.floor(window.innerWidth / cS) * cS;
const h = Math.floor(window.innerHeight / cS) * cS;

const grid = new Vector(Math.floor(w / cS), Math.floor(h / cS));

/**
 * Texts
 */
const texts = [
  '2',
  '0',
  '2',
  '3',
  '2023',
  'ASSEMBLY',
  'ASSEMBLY',
  String.fromCodePoint(0x2764),
];
let cT = 0;

/**
 * Flowfield
 */
let fd = [];
let rot = 0;

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

      if (
        fd[Math.floor(this.pos.y / cS) * grid.x + Math.floor(this.pos.x / cS)]
      ) {
        break;
      }
    }

    this.velocityMultiplier = Math.floor(1 + Math.random() * 4);
    this.curve = (Math.random() * Math.PI) / 10;

    this.trail = [
      {
        ...this.pos,
      },
    ];

    this.trailLen = Math.floor(10 + Math.random() * 20);
    this.angle = rot;
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
    const hue = cT === texts.length ? 0 : (this.angle / (Math.PI * 2)) * 360;

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

    const flow =
      fd[Math.floor(this.pos.y / cS) * grid.x + Math.floor(this.pos.x / cS)];

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

    this.pos.x += Math.cos(this.angle + rot) * this.velocityMultiplier;
    this.pos.y += Math.sin(this.angle + rot) * this.velocityMultiplier;

    this.trail.push({
      ...this.pos,
    });

    while (this.trail.length > this.trailLen) {
      this.trail.shift();
    }
  }
}

let demoStarted = false;

function demo() {
  if (demoStarted) {
    return;
  }

  demoStarted = true;

  /**
   * Play music
   */
  const buffer = zzfxM(...songData);
  zzfxP(...buffer);

  /**
   * Particles
   */
  let particles = [];

  /**
   * Initialize canvas and set to window size
   */
  const canvas = document.createElement('canvas');

  let ctx = canvas.getContext('2d', { willReadFrequently: true });
  canvas.width = w;
  canvas.height = h;

  document.body.appendChild(canvas);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = (2 / 1920) * w;

  const gradient = ctx.createRadialGradient(
    w / 2,
    h / 2,
    h / cS,
    w / 2,
    h / 2,
    w
  );

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

  /**
   * Updates text to next one.
   */
  function updateText() {
    if (cT === texts.length) {
      canvas.classList.add('fade');
      return;
    }

    ctx.fillText(texts[cT], w / 2, h / 2, w);
    cT++;
  }

  /**
   * Calculate flow field vectors so that text affects their value.
   */
  function updateFlowField() {
    let newField = [];

    const data = ctx.getImageData(0, 0, w, h).data;

    for (let y = 0; y < h; y += cS) {
      for (let x = 0; x < w; x += cS) {
        const i = (y * w + x) * 4;
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
        newField.push((gray / 255) * Math.PI * 2);
      }
    }

    fd = newField;
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
      p.update(fd);
      p.draw(ctx);
    });

    /**
     * Add rotation
     */
    rot += Math.PI / 360;

    requestAnimationFrame(play);
  };
  play();
}

const clickTrigger = document.createElement('p');
clickTrigger.textContent = 'Click to start';
clickTrigger.setAttribute(
  'style',
  'color:#FFF;text-align:center;font-size:100px;text-transform:uppercase;font-weight:bold;pointer-events:none;'
);

document.body.addEventListener('click', () => {
  clickTrigger.remove();
  demo();
});
document.body.appendChild(clickTrigger);
