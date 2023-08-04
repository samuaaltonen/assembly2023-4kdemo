//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
zzfxM=(t,e,o,i=125)=>{let a,s,h,n,r,l,f,d,c,z,x,M,g,u,p,m=0,w=[],y=[],R=[],S=0,C=0,P=1,T={},b=zzfxR/i*60>>2;for(;P;S++)w=[P=d=x=g=0],o.map(((i,x)=>{for(f=e[i][S]||[0,0,0],P|=!!e[i][S],p=g+(e[i][0].length-2-!d)*b,u=x==o.length-1,s=2,n=g;s<f.length+u;d=++s){for(r=f[s],c=s==f.length+u-1&&u||z!=(f[0]||0)|r|0,h=0;h<b&&d;h++>b-99&&c?M+=(M<1)/99:0)l=(1-M)*w[m++]/2||0,y[n]=(y[n]||0)-l*C+l,R[n]=(R[n++]||0)+l*C+l;r&&(M=r%1,C=f[1]||0,(r|=0)&&(w=T[[z=f[m=0]||0,r]]=T[[z,r]]||(a=[...t[z]],a[2]*=2**((r-12)/12),r>0?zzfxG(...a):[])))}g=p}));return[y,R]},zzfx=(...t)=>zzfxP(zzfxG(...t)),zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),o=zzfxX.createBuffer(t.length,t[0].length,zzfxR);return t.map(((t,e)=>o.getChannelData(e).set(t))),e.buffer=o,e.connect(zzfxX.destination),e.start(),e},zzfxG=(t=1,e=.05,o=220,i=0,a=0,s=.1,h=0,n=1,r=0,l=0,f=0,d=0,c=0,z=0,x=0,M=0,g=0,u=1,p=0,m=0)=>{let w,y,R=2*Math.PI,S=r*=500*R/zzfxR**2,C=(0<x?1:-1)*R/4,P=o*=(1+2*e*Math.random()-e)*R/zzfxR,T=[],b=0,v=0,A=0,L=1,I=0,k=0,E=0;for(i=99+zzfxR*i,p*=zzfxR,a*=zzfxR,s*=zzfxR,g*=zzfxR,l*=500*R/zzfxR**3,x*=R/zzfxR,f*=R/zzfxR,d*=zzfxR,c=zzfxR*c|0,y=i+p+a+s+g|0;A<y;T[A++]=E)++k%(100*M|0)||(E=h?1<h?2<h?3<h?Math.sin((b%R)**3):Math.max(Math.min(Math.tan(b),1),-1):1-(2*b/R%2+2)%2:1-4*Math.abs(Math.round(b/R)-b/R):Math.sin(b),E=(c?1-m+m*Math.sin(2*Math.PI*A/c):1)*(0<E?1:-1)*Math.abs(E)**n*t*zzfxV*(A<i?A/i:A<i+p?1-(A-i)/p*(1-u):A<i+p+a?u:A<y-g?(y-A-g)/s*u:0),E=g?E/2+(g>A?0:(A<y-g?1:(y-A)/g)*T[A-g|0]/2):E),w=(o+=r+=l)*Math.sin(v*x-C),b+=w-w*z*(1-1e9*(Math.sin(A)+1)%2),v+=w-w*z*(1-1e9*(Math.sin(A)**2+1)%2),L&&++L>d&&(o+=f,P+=f,L=0),!c||++I%c||(o=P,r=S,L=L||1);return T},zzfxV=.3,zzfxR=44100,zzfxX=new(window.AudioContext||webkitAudioContext);class Vector{constructor(t,e){this.x=t,this.y=e}}const songData=[[[.4,0,4e3,,,.03,2,1.25,,,,,.02,6.8],[,0,655,,,.11,2,1.65,,,,,,3.8,-.1,.1],[2.9,0,52,,,.13,,2.9,-1.1,4,156,15,,4.2],[3.3,0,58,,,.06,,5.9,,,,,,1,,.2,.004],[3.3,0,58,,,.15,,5.9,,,,,,1,,.2,.003],[2.1,0,100,2,1.42,3,,5.9,,,,,,1,20,-.2,.9],[3.3,0,58,,,.18,,5.9,,,,,,1,,.2,.007],[3.3,0,58,,,.08,,9.7,,,,,,1,,.2,.009],[3.3,0,58,,,.24,,18,,,,,,1,,.2,.009],[3.3,0,58,,,.14,,8,,,,,,1,,.3,.13],[3.3,0,58,,,.11,,5,,,,,,1,,.3,.006],[3.3,0,58,,,.14,,12,,,,,,1,,.4,.02],[3.3,0,58,,,.08,,12,,,,,,1,,.2,.006],[3.3,0,58,,,.14,,19,,,,,,1,,.3,.004],[3.3,0,58,,,.11,,15.6,,,,,,1,,-.3,.005],[3.3,0,58,,,,,30,,,,,,1,,-.3,.01],[3.3,0,58,,,.12,,6,,,,,,1,,-.4,.006],[.5,0,2001,,,,3,5.3,,,-400,,,2],[3.3,0,58,,,.16,,6,,,,,,1,,-.4,.003],[.7,0,600,,,2.97,4,5,,,60,,.3,4,30,.01,.3,,,1],[3.3,0,58,,,.16,,13,,,,,,1,,-.4,.005],[3.3,0,58,,,.15,,12,,,,,,1,,-.4,.005],[3.3,0,58,,,.13,,6,,,,,,1,,.6,.13]],[[[,,17,32,34,32,1,18,,,,,,,,,,,],[,,,,,,,,,,,,,,,,,,],[,,,,,,,,,,,,,,,,,,],[,,,,,,,,,,,,,,,,,,],[19,,,,,,,,,,1,,,,,,,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[3,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[4,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,18,,,,,,],[3,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,,,,,],[2,,18,,,,,,18,18,,,,,,,,,],[4,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[6,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[7,,23,26,,14,,,11,,23,26,,14,,11,27,,],[19,,1,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[8,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[9,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[12,,23,26,2,14,,,11,,23,26,,14,,11,27,15],[1,,32,,32.5,32.3,,32.6,32.4,,32.7,32.5,,32.8,32.6,,32.9,32.7],[5,,1,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[10,,23,26,2,14,,,11,,23,26,2,14,,11,27,,],[1,,,32.95,32.8,,,32.85,,,32.9,,,32.95,,,,,]],[[11,,,26,,14,,2,11,,23,26,,14,,11,27,15]],[[1,,,,,,,,,,32.95,32.9,32.85,32.8,32.7,32.6,32.5,32.3],[13,,23,26,2,14,,2,11,2,23,26,2,14,3,11,27,15]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[15,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[14,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,],[19,,18,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[16,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[18,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[3,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[13,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[20,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[22,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,]],[[13,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[17,,,,24,,,,24,,,,24,,,,24,,],[1,,32.99,32.9,32.84,32.79,32.74,32.69,32.64,32.58,32.53,32.49,32.44,32.4,32.35,32.3,32.25,32.2]],[[21,,23.2,27.2,15.2,23.4,27.4,15.4,23.6,27.6,15.6,23.8,27.8,15.8,23.9,27.9,15.9,23.92],[5,,1,,,,,,,,,,,,,,,,],[19,,1,,,,,,,,,,,,,,,,]],[[21,,27.92,15.93,23.93,27.94,15.94,23.95,27.95,15.96,23.96,27.97,15.97,23.98,27.98,15.99,23.99,,]]],[0,0,0,0,17,3,1,2,1,3,1,4,6,5,7,8,9,10,11,12,14,13,15,16,18,19,20,21,22,23],,{title:"",instruments:["","","","","","","","","","","","","","","","","","","","","","",""],patterns:["","","","","","","","","","","","","","","","","","","","","","","",""]}],s=document.createElement("p"),cS=20,w=20*Math.floor(window.innerWidth/20),h=20*Math.floor(window.innerHeight/20),grid=new Vector(Math.floor(w/20),Math.floor(h/20)),texts=["2","0","2","3","2023","ASSEMBLY","ASSEMBLY",String.fromCodePoint(10084)];let cT=0,fd=[],rot=0;class Particle{constructor(){this.reset()}reset(){for(let t=0;t<10&&(this.pos=new Vector(Math.floor(Math.random()*w),Math.floor(Math.random()*h)),!fd[Math.floor(this.pos.y/20)*grid.x+Math.floor(this.pos.x/20)]);t++);this.velocityMultiplier=Math.floor(1+4*Math.random()),this.curve=Math.random()*Math.PI/10,this.trail=[{...this.pos}],this.trailLen=Math.floor(10+20*Math.random()),this.angle=rot,this.lightness=12}draw(t){const e=cT===texts.length?0:this.angle/(2*Math.PI)*360;t.strokeStyle=`hsl(${e}, 100%, ${this.lightness}%)`;for(let e=1;e<this.trail.length;e++){const o=this.trail[e-1],i=this.trail[e];t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(i.x,i.y),t.stroke()}}update(){if(this.trail.length===this.trailLen)return this.trail.shift(),this.trailLen--,void(0===this.trailLen&&this.reset());const t=fd[Math.floor(this.pos.y/20)*grid.x+Math.floor(this.pos.x/20)];for(this.lightness=t?60:12,this.angle>t?this.angle-=this.curve:this.angle<t?this.angle+=this.curve:this.angle=t,this.pos.x+=Math.cos(this.angle+rot)*this.velocityMultiplier,this.pos.y+=Math.sin(this.angle+rot)*this.velocityMultiplier,this.trail.push({...this.pos});this.trail.length>this.trailLen;)this.trail.shift()}}let demoStarted=!1;function demo(){if(demoStarted)return;demoStarted=!0;const t=zzfxM(...songData);zzfxP(...t);let e=[];const o=document.createElement("canvas");let i=o.getContext("2d",{willReadFrequently:!0});o.width=w,o.height=h,document.body.appendChild(o),i.strokeStyle="white",i.lineWidth=2/1920*w;const a=i.createRadialGradient(w/2,h/2,h/20,w/2,h/2,w);function n(){if(cT===texts.length)return o.classList.add("fade"),s.textContent="THANK YOU",s.setAttribute("style",`display:block;transform:scaleY(${(h/100).toFixed(1)});margin-top:${Math.floor(.35*h)}px`),void cT++;i.fillText(texts[cT],w/2,h/2,w),cT++}function r(){let t=[];const e=i.getImageData(0,0,w,h).data;for(let o=0;o<h;o+=20)for(let i=0;i<w;i+=20){const a=4*(o*w+i),s=(e[a]+e[a+1]+e[a+2])/3;t.push(s/255*Math.PI*2)}fd=t}a.addColorStop(0,"red"),a.addColorStop(.25,"orange"),a.addColorStop(.5,"yellow"),a.addColorStop(.75,"green"),a.addColorStop(1,"blue"),i.fillStyle=a,i.font=`bold ${h}px Arial`,i.textBaseline="middle",i.textAlign="center",n(),r(),setInterval((()=>{n(),r()}),6e3);for(let t=0;t<1e3;t++)e.push(new Particle);const l=()=>{i.clearRect(0,0,w,h),e.forEach((t=>{t.update(fd),t.draw(i)})),rot+=Math.PI/360,requestAnimationFrame(l)};l()}s.textContent="CLICK TO START",document.body.addEventListener("click",(()=>{s.style.display="none",demo()})),document.body.appendChild(s);