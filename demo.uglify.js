zzfxM=(i,r,a,t=125)=>{let o,h,s,l,n,f,c,d,z,g,x,M,u,P,p=0,m=[],w=[],S=[],I=0,y=0,R=1,v={},C=zzfxR/t*60>>2;for(;R;I++)m=[R=d=M=0],a.map((t,e)=>{for(c=r[t][I]||[0,0,0],R|=!!r[t][I],P=M+(r[t][0].length-2-!d)*C,u=e==a.length-1,h=2,l=M;h<c.length+u;d=++h){for(n=c[h],z=h==c.length+u-1&&u||g!=(c[0]||0)|n|0,s=0;s<C&&d;s++>C-99&&z&&(x+=(x<1)/99))f=(1-x)*m[p++]/2||0,w[l]=(w[l]||0)-f*y+f,S[l]=(S[l++]||0)+f*y+f;n&&(x=n%1,y=c[1]||0,n|=0)&&(m=v[[g=c[p=0]||0,n]]=v[[g,n]]||((o=[...i[g]])[2]*=2**((n-12)/12),0<n?zzfxG(...o):[]))}M=P});return[w,S]},zzfx=(...t)=>zzfxP(zzfxG(...t)),zzfxP=(...t)=>{let e=zzfxX.createBufferSource(),i=zzfxX.createBuffer(t.length,t[0].length,zzfxR);return t.map((t,e)=>i.getChannelData(e).set(t)),e.buffer=i,e.connect(zzfxX.destination),e.start(),e},zzfxG=(t=1,e=.05,i=220,r=0,a=0,o=.1,h=0,s=1,l=0,n=0,f=0,c=0,d=0,z=0,g=0,x=0,M=0,u=1,P=0,p=0)=>{let m=2*Math.PI,w=l*=500*m/zzfxR**2,S=(0<g?1:-1)*m/4,I=i*=(1+2*e*Math.random()-e)*m/zzfxR,y=[],R=0,v=0,C=0,T=1,b=0,k=0,L=0,A,D;for(r=99+zzfxR*r,P*=zzfxR,a*=zzfxR,o*=zzfxR,M*=zzfxR,n*=500*m/zzfxR**3,g*=m/zzfxR,f*=m/zzfxR,c*=zzfxR,d=zzfxR*d|0,D=r+P+a+o+M|0;C<D;y[C++]=L)++k%(100*x|0)||(L=h?1<h?2<h?3<h?Math.sin((R%m)**3):Math.max(Math.min(Math.tan(R),1),-1):1-(2*R/m%2+2)%2:1-4*Math.abs(Math.round(R/m)-R/m):Math.sin(R),L=(d?1-p+p*Math.sin(2*Math.PI*C/d):1)*(0<L?1:-1)*Math.abs(L)**s*t*zzfxV*(C<r?C/r:C<r+P?1-(C-r)/P*(1-u):C<r+P+a?u:C<D-M?(D-C-M)/o*u:0),L=M?L/2+(M>C?0:(C<D-M?1:(D-C)/M)*y[C-M|0]/2):L),A=(i+=l+=n)*Math.sin(v*g-S),R+=A-A*z*(1-1e9*(Math.sin(C)+1)%2),v+=A-A*z*(1-1e9*(Math.sin(C)**2+1)%2),T&&++T>c&&(i+=f,I+=f,T=0),!d||++b%d||(i=I,l=w,T=T||1);return y},zzfxV=.3,zzfxR=44100,zzfxX=new(window.AudioContext||webkitAudioContext);class Vector{constructor(t,e){this.x=t,this.y=e}}const songData=[[[.4,0,4e3,,,.03,2,1.25,,,,,.02,6.8],[,0,655,,,.11,2,1.65,,,,,,3.8,-.1,.1],[2.9,0,52,,,.13,,2.9,-1.1,4,156,15,,4.2],[3.3,0,58,,,.06,,5.9,,,,,,1,,.2,.004],[3.3,0,58,,,.15,,5.9,,,,,,1,,.2,.003],[2.1,0,100,2,1.42,3,,5.9,,,,,,1,20,-.2,.9],[3.3,0,58,,,.18,,5.9,,,,,,1,,.2,.007],[3.3,0,58,,,.08,,9.7,,,,,,1,,.2,.009],[3.3,0,58,,,.14,,8,,,,,,1,,.3,.13],[3.3,0,58,,,,,6.8,,,,,,1,,.2,.005],[3.3,0,58,,,.11,,5,,,,,,1,,.3,.006],[3.3,0,58,,,.14,,12,,,,,,1,,.4,.02],[3.3,0,58,,,.14,,19,,,,,,1,,.3,.004],[3.3,0,58,,,.11,,15.6,,,,,,1,,-.3,.005],[3.3,0,58,,,,,30,,,,,,1,,-.3,.01],[3.3,0,58,,,.12,,6,,,,,,1,,-.4,.006],[.5,0,2001,,,,3,5.3,,,-400,,,2],[3.3,0,58,,,.16,,6,,,,,,1,,-.4,.003],[.7,0,600,,,2.97,4,5,,,60,,.3,4,30,.01,.3,,,1],[3.3,0,58,,,.16,,13,,,,,,1,,-.4,.005],[3.3,0,58,,,.13,,6,,,,,,1,,.6,.13]],[[[,,26,32,34,32,1,18,,,,,24,27,,20,25,,],[5,,1,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,,,,,24,27,,20,25,1],[1,,,,,,32,,,,,,,,32,,,,],[5,,1,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[4,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[4,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[6,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[7,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[8,,23,26,,14,,,11,,23,26,,14,,11,27,,],[1,,32.99,32.9,32.84,32.79,32.74,32.69,32.64,32.58,32.53,32.49,32.44,32.4,32.35,32.3,32.25,32.2]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[9,,20,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[10,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[9,,23,26,,14,,,11,,23,26,,14,,11,27,,],[18,,18,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[10,,23,26,2,14,,,11,,23,26,2,14,,11,27,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[11,,23,26,,14,,2,11,,23,26,,14,,11,27,15]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,,,,,],[1,,,,,,32,,,32.6,,32.4,,,32,,32,32],[2,,18,,,,,,18,,,,18,,,,,,],[12,,23,26,2,14,,2,11,2,23,26,2,14,3,11,27,15]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[13,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,],[18,,18,,,,,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[15,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[17,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,,,,,24,27,,,,,],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,,,,18,18,,,,,,,18,,],[3,,23,26,,14,,,11,,23,26,,14,,11,27,,],[18,,,,,,1,,,,,,,,,,,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,18,,,,,18,18,,,18,,,,18,,],[12,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[,,17,32,34,32,1,18,32,1,27,34,24,27,18,24,18,6],[1,,,,,,32,,,,,,,,32,,,,],[2,,18,,,18,,,,18,,18,18,,,,18,,],[19,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,]],[[14,,23,26,2,14,,2,11,,23,26,2,14,,11,27,15],[16,,,,24,,,,24,,,,24,,,,24,,],[1,,32.99,32.9,32.84,32.79,32.74,32.69,32.64,32.58,32.53,32.49,32.44,32.4,32.35,32.3,32.25,32.2]],[[10,,23,26,,14,,,11,,23,26,,14,,11,27,,],[5,,1,,,,,,,,,,,,,,,,],[18,,1,,,,,,,,,,,,,,,,]],[[15,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[20,,23,26,,14,,,11,,23,26,,14,,11,27,,]],[[8,,23,26,,14,,,11,,23,26,,14,,11,27,,]]],[0,1,16,2,3,7,4,5,8,6,9,10,11,12,13,14,15,17,18,19,20,21,23,22],,{title:"arsembley",instruments:["Hihat","Claps","Bass Drum 2","synth","I4","I5","I7","I9","I11","I12","I14","I15","I17","I18","I19","I20","Hihat Open","I22","Dig Dug","I24","I26"],patterns:["P0","P2","P7","P11","P13","P15","P17","P18","P20","P21","P26","P27","P28","P30","P31","P32","P37","P38","P39","P41","P42","P44","P46","P47"]}],cS=20,w=Math.floor(window.innerWidth/cS)*cS,h=Math.floor(window.innerHeight/cS)*cS,grid=new Vector(Math.floor(w/cS),Math.floor(h/cS)),texts=["2","0","2","3","2023","ASSEMBLY",String.fromCodePoint(10084)];let cT=0,fd=[],rot=0;class Particle{constructor(){this.reset()}reset(){for(let t=0;t<10&&(this.pos=new Vector(Math.floor(Math.random()*w),Math.floor(Math.random()*h)),!fd[Math.floor(this.pos.y/cS)*grid.x+Math.floor(this.pos.x/cS)]);t++);this.velocityMultiplier=Math.floor(1+4*Math.random()),this.curve=Math.random()*Math.PI/10,this.trail=[{...this.pos}],this.trailLen=Math.floor(10+20*Math.random()),this.angle=rot,this.lightness=12}draw(e){var t=cT===texts.length?0:this.angle/(2*Math.PI)*360;e.strokeStyle=`hsl(${t}, 100%, ${this.lightness}%)`;for(let t=1;t<this.trail.length;t++){var i=this.trail[t-1],r=this.trail[t];e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(r.x,r.y),e.stroke()}}update(){if(this.trail.length===this.trailLen)this.trail.shift(),this.trailLen--,0===this.trailLen&&this.reset();else{var t=fd[Math.floor(this.pos.y/cS)*grid.x+Math.floor(this.pos.x/cS)];for(this.lightness=t?60:12,this.angle>t?this.angle-=this.curve:this.angle<t?this.angle+=this.curve:this.angle=t,this.pos.x+=Math.cos(this.angle+rot)*this.velocityMultiplier,this.pos.y+=Math.sin(this.angle+rot)*this.velocityMultiplier,this.trail.push({...this.pos});this.trail.length>this.trailLen;)this.trail.shift()}}}let demoStarted=!1;function demo(){if(!demoStarted){demoStarted=!0;var t=zzfxM(...songData);zzfxP(...t);let e=[];const a=document.getElementById("c");let o=a.getContext("2d",{willReadFrequently:!0});a.width=w,a.height=h,o.strokeStyle="white",o.lineWidth=2/1920*w;t=o.createRadialGradient(w/2,h/2,h/cS,w/2,h/2,w);t.addColorStop(0,"red"),t.addColorStop(.25,"orange"),t.addColorStop(.5,"yellow"),t.addColorStop(.75,"green"),t.addColorStop(1,"blue"),o.fillStyle=t,o.font=`bold ${h}px Arial`,o.textBaseline="middle",o.textAlign="center",i(),r(),setInterval(()=>{i(),r()},6e3);for(let t=0;t<1e3;t++)e.push(new Particle);const s=()=>{o.clearRect(0,0,w,h),e.forEach(t=>{t.update(fd),t.draw(o)}),rot+=Math.PI/360,requestAnimationFrame(s)};function i(){cT===texts.length?a.classList.add("fade"):(o.fillText(texts[cT],w/2,h/2,w),cT++)}function r(){var i=[],r=o.getImageData(0,0,w,h).data;for(let e=0;e<h;e+=cS)for(let t=0;t<w;t+=cS){var a=4*(e*w+t),a=(r[a]+r[1+a]+r[2+a])/3;i.push(a/255*Math.PI*2)}fd=i}s()}}const clickTrigger=document.createElement("p");clickTrigger.textContent="Click to start",clickTrigger.setAttribute("style","color:#FFF;text-align:center;font-size:100px;text-transform:uppercase;font-weight:bold;pointer-events:none;"),document.body.addEventListener("click",()=>{clickTrigger.remove(),demo()}),document.body.appendChild(clickTrigger);