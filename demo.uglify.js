let zzfxM=(a,i,r,t=125)=>{let n,l,s,h,o,f,z,c,x,M,d,u,m,p,w=0,g=[],y=[],R=[],P=0,S=0,v=1,I={},b=zzfxR/t*60>>2;for(;v;P++)g=[v=c=u=0],r.map((t,e)=>{for(z=i[t][P]||[0,0,0],v|=!!i[t][P],p=u+(i[t][0].length-2-!c)*b,m=e==r.length-1,l=2,h=u;l<z.length+m;c=++l){for(o=z[l],x=l==z.length+m-1&&m||M!=(z[0]||0)|o|0,s=0;s<b&&c;s++>b-99&&x&&(d+=(d<1)/99))f=(1-d)*g[w++]/2||0,y[h]=(y[h]||0)-f*S+f,R[h]=(R[h++]||0)+f*S+f;o&&(d=o%1,S=z[1]||0,o|=0)&&(g=I[[M=z[w=0]||0,o]]=I[[M,o]]||((n=[...a[M]])[2]*=2**((o-12)/12),0<o?zzfxG(...n):[]))}u=p});return[y,R]};const zzfx=(...t)=>zzfxP(zzfxG(...t)),zzfxV=.3,zzfxR=44100,zzfxX=new(window.AudioContext||webkitAudioContext),zzfxP=(...t)=>{let a=zzfxX.createBuffer(t.length,t[0].length,zzfxR),e=zzfxX.createBufferSource();return t.map((t,e)=>a.getChannelData(e).set(t)),e.buffer=a,e.connect(zzfxX.destination),e.start(),e},zzfxG=(t=1,e=.05,a=220,i=0,r=0,n=.1,l=0,s=1,h=0,o=0,f=0,z=0,c=0,x=0,M=0,d=0,u=0,m=1,p=0,w=0)=>{let g=2*Math.PI,y=h*=500*g/zzfxR/zzfxR,R=a*=(1+2*e*Math.random()-e)*g/zzfxR,P=[],S=0,v=0,I=0,b=1,C=0,k=0,A=0,L,V;for(i=i*zzfxR+9,p*=zzfxR,r*=zzfxR,n*=zzfxR,u*=zzfxR,o*=500*g/zzfxR**3,M*=g/zzfxR,f*=g/zzfxR,z*=zzfxR,c=c*zzfxR|0,V=i+p+r+n+u|0;I<V;P[I++]=A)++k%(100*d|0)||(A=l?1<l?2<l?3<l?Math.sin((S%g)**3):Math.max(Math.min(Math.tan(S),1),-1):1-(2*S/g%2+2)%2:1-4*Math.abs(Math.round(S/g)-S/g):Math.sin(S),A=(c?1-w+w*Math.sin(g*I/c):1)*(0<A?1:-1)*Math.abs(A)**s*t*zzfxV*(I<i?I/i:I<i+p?1-(I-i)/p*(1-m):I<i+p+r?m:I<V-u?(V-I-u)/n*m:0),A=u?A/2+(u>I?0:(I<V-u?1:(V-I)/u)*P[I-u|0]/2):A),L=(a+=h+=o)*Math.cos(M*v++),S+=L-L*x*(1-1e9*(Math.sin(I)+1)%2),b&&++b>z&&(a+=f,R+=f,b=0),!c||++C%c||(a=R,h=y,b=b||1);return P};class Vector{constructor(t,e){this.x=t,this.y=e}}const songData=[[[,0,77,,,.7,2,.41,,,,,,,,.06],[,0,43,.01,,.3,2,,,,,,,,,.02,.01],[,0,170,.003,,.008,,.97,-35,53,,,,,,.1],[.8,0,270,,,.12,3,1.65,-2,,,,,4.5,,.02],[,0,86,,,,,.7,,,,.5,,6.7,1,.05],[,0,41,,.05,.4,2,0,,,9,.01,,,,.08,.02],[,0,2200,,,.04,3,2,,,800,.02,,4.8,,.01,.1],[.3,0,16,,,.3,3]],[[[1,-1,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33],[3,1,22,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,24,,,,,,,,,,,,,,,,,,,,,,,,22,,22,,22,,,,],[5,-1,21,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,23,,,,,,,,,,,,,,,,,,,,,,,,24,,23,,21,,,,],[,1,21,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,23,,,,,,,,,,,,,,,,,,,,,,,,24,,23,,21,,,,]],[[1,-1,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33],[3,1,24,,,,,,,,27,,,,,,,,,,,,,,,,27,,,,24,,,,24,,,,,,,,27,,,,,,,,,,,,,,,,24,,24,,24,,,,],[5,-1,21,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,23,,,,,,,,,,,,,,,,,,,,,,,,24,,23,,21,,,,],[,1,21,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,23,,,,,,,,,,,,,,,,,,,,,,,,24,,23,,21,,,,],[6,1,,,34,34,34,,,,,,34,34,,,,,34,,,,34,34,,,,,34,,,,34,,,,34,34,34,,,,,,34,,,,,,34,34,,,34,34,,,,,,,,,34,34],[4,1,,,,,,,24,,,,,,24,,24,,,,24,,,,24,,,,,,,,,,,,,,,,24,,,,,,24,,24,,,,24,,,,24,,,,,,,,,,]],[[1,-1,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,23,23,35,23,23,36,23,23,35,23,23,36,23,23,35,35,23,23,35,23,23,35,23,23,36,23,23,35,23,23,36,36],[5,-1,21,,,19,,,21,,,,,,,,,,21,,,19,,,17,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[3,1,24,,,24,,,24,,,,,,,,,,24,,,24,,,24,,,,24.75,24.5,24.26,24.01,24.01,24.01,,,,,25,,,,,,,,25,,,,,,,,25,,,,,,,,25,25,25,25],[4,-1,,,,,,,,,,,,,,,,,,,,,,,,,,,24.75,24.5,24.26,24.01,24.01,24.01,24.01,24,,24,24,,24,24,24,24,,24,24,,24,,24,24,,24,24,,24,24,24,24,,24,24,,24,24],[7,-1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,23,,21,23,,35,,23,,21,23,,35,,35,,23,,21,23,,35,,21,23,,35,,21,23,,,],[6,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,34,36,34,,33,34,34,36,31,36,34,,31,34,32,,33,36,34,,31,34,34,36,33,36,33,,31,,,]],[[1,-1,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,21,21,33,21,21,33,21,21,33,21,21,33,21,21,33,33,17,17,29,17,17,29,17,17,29,17,17,29,17,17,29,29,17,17,29,17,17,29,17,17,29,17,17,29,17,17,29,29],[4,1,24,24,,24,24,,24,24,24,24,,24,24,,24,,24,24,,24,24,,24,24,24,24,,24,24,,24,24,24,24,,24,24,,24,24,24,,,24,24,,24,,24,24,,24,24,,24,24,24,24,,24,24,,24,24],[7,-1,21,,19,21,,33,,21,,19,21,,33,,33,,21,,19,21,,33,,21,,19,21,,33,,33,,17,,17,17,29,17,17,29,17,,17,17,29,17,17,29,17,,17,17,29,17,17,29,17,,17,17,29,17,17,29],[2,1,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,,,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,34,34,,34,,,],[6,1,,,36,,,,,,36,,36,,,,,,,,36,,,,,,36,,36,,,,,,,,36,,,,,,,,,,,,,,,,36,,,,,,36,,36,,,,,,],[3,1,,,,,25,,,,,,,,25,,,,,,,,25,,,,,,,,25,25,25,25,,,,,25,,,,,25,,,25,,,,,,,,25,,,,,,,,25,25,25,25]],[[1,-1,14,14,26,14,14,26,14,14,26,14,14,26,14,14,26,26,14,14,26,14,14,26,14,14,26,14,14,26,14,14,26,26,17,17,29,17,17,29,17,17,29,17,17,29,17,17,29,29,19,19,31,19,19,31,19,19,31,19,19,31,19,19,31,31],[4,1,24,24,,24,24,,24,24,24,24,,24,24,,24,,24,24,,24,24,,24,24,24,24,,24,24,,24,24,24,24,,24,24,,24,24,24,24,,24,24,,36,,24,24,,24,24,,24,24,24,24,,24,24,,24,24],[7,-1,14,,14,14,26,14,14,26,14,,14,14,26,14,14,26,14,,14,14,26,14,14,26,14,,14,14,26,14,14,26,17,,17,17,29,17,17,29,17,,17,17,29,17,17,29,19,,19,19,31,19,19,31,19,,19,19,31,19,19,31],[2,1,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,,,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,36,36,,36,,,],[3,1,,,,,25,,,,,,,,25,,,,,,,,25,,,,,,,,25,25,25,25,,,,,25,,,,,,,,25,,,,,,,,25,,,,,,,,25,25,25,25],[6,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,34,,,,,,34,,34,,,,,,,,34,,,,,,34,,34,,,,,,]]],[0,1,1,2,3,4,4],,{title:"Depp",Notes:"Unknown author",instruments:["Instrument 0","Instrument 1","Instrument 2","Instrument 3","Instrument 4","Instrument 5","Instrument 6","Instrument 7"],patterns:["Pattern 0","Pattern 1","Pattern 2","Pattern 3","Pattern 4"]}],buffer=zzfxM(...songData);let myAudio=zzfxP(...buffer);const w=window.innerWidth,h=window.innerHeight,cellSize=20,zoom=.15,curve=.8,grid=new Vector(Math.floor(w/cellSize),Math.floor(h/cellSize)),rotateCos=Math.cos(Math.PI/9e3),rotateSin=Math.sin(Math.PI/9e3);class Particle{constructor(){this.reset()}reset(){this.pos=new Vector(Math.floor(Math.random()*w),Math.floor(Math.random()*h)),this.velocityMultiplier=Math.floor(1+4*Math.random()),this.trail=[{...this.pos}],this.trailLen=Math.floor(30+200*Math.random())}draw(e){for(let t=1;t<this.trail.length;t++){var a=this.trail[t-1],i=this.trail[t],r=field[Math.floor(a.y/cellSize)*grid.x+Math.floor(a.x/cellSize)]/(2*Math.PI)*360;e.strokeStyle=`hsl(${r}, 100%, 50%)`,e.lineWidth=2,e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(i.x,i.y),e.stroke()}}update(t){if(this.trail.length===this.trailLen)this.trail.shift(),this.trailLen--,0===this.trailLen&&this.reset();else{t=t[Math.floor(this.pos.y/cellSize)*grid.x+Math.floor(this.pos.x/cellSize)];for(this.pos.x+=Math.cos(t)*this.velocityMultiplier,this.pos.y+=Math.sin(t)*this.velocityMultiplier,this.trail.push({...this.pos});this.trail.length>this.trailLen;)this.trail.shift()}}}let ctx,particles=[],field=[];for(let e=0;e<=grid.y;e++)for(let t=0;t<=grid.x;t++)field.push((Math.cos(t*zoom)+Math.sin(e*zoom))*curve);const canvas=document.createElement("canvas");ctx=canvas.getContext("2d"),canvas.width=w,canvas.height=h,document.body.appendChild(canvas),ctx.strokeStyle="white",ctx.font="90px Comic Sans MS",ctx.lineWidth=2;for(let t=0;t<420;t++)particles.push(new Particle);const play=()=>{ctx.fillStyle="#000000",ctx.fillRect(0,0,w,h),particles.forEach(t=>{t.update(field),t.draw(ctx)}),ctx.fillStyle="hsl(30,100%,50%)",ctx.fillText("Assembly 2023",w/2-300,h/2),field.forEach((t,e)=>{field[e]+=Math.random()*(Math.PI/90)}),requestAnimationFrame(play)};play();