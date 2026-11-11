"use strict";
/* Huda Studio studio.js — version 4.4.0 — Multi Editor (admin) */
var STUDIO_JS_VERSION="4.4.0"; /* Semantic Versioning MAJOR.MINOR.PATCH — see CHANGELOG at the end of this file */
var STR={sq:[1,1,'1:1'],p45:[4,5,'4:5'],p34:[3,4,'3:4'],st:[9,16,'9:16'],wd:[16,9,'16:9']};
var STY=[
 {id:'classic',n:['கிளாசிக் சட்டம்','Classic frame'],hy:92,top:205,bot:200,fy:70,mx:.11},
 {id:'clean',n:['சட்டம் இல்லாமல்','No frame'],hy:84,top:195,bot:185,fy:56,mx:.1},
 {id:'icon',n:['ஐகானுடன்','With icon'],hy:300,top:395,bot:200,fy:70,mx:.11},
 {id:'band',n:['மேல் பட்டை','Header band'],hy:62,top:255,bot:215,fy:40,mx:.11},
 {id:'card',n:['கார்டு','Card'],hy:150,top:265,bot:245,fy:92,mx:.17},
 {id:'arch',n:['மிஹ்ராப் வளைவு','Arch'],hy:0,top:0,bot:0,fy:50,mx:.2},
 {id:'corners',n:['மூலை அலங்காரம்','Corners'],hy:112,top:215,bot:200,fy:70,mx:.13},
 {id:'side',n:['பக்கப் பட்டை','Side bar'],hy:104,top:205,bot:185,fy:56,mx:.17},
 {id:'medal',n:['வசன வட்டம்','Medallion'],hy:100,top:205,bot:350,fy:50,mx:.11},
 {id:'poster',n:['போஸ்டர்','Poster'],hy:104,top:235,bot:185,fy:56,mx:.09}
];
function stLum(hex){var h=String(hex||'#000').replace('#','');if(h.length==3)h=h.replace(/./g,'$&$&');var n=parseInt(h,16)||0;return((n>>16&255)*.299+(n>>8&255)*.587+(n&255)*.114)/255}
function stTf(l){return(l=='ta'?(C.ft||"'Noto Sans Tamil'"):l=='si'?(C.fsi||"'Noto Sans Sinhala'"):(C.fe||"'Inter'"))+',sans-serif'}
function stDim(o,vid){var r=STR[o.ratio]||STR.sq,sh=[720,1080,1440,2160][Math.min(o.res||2,stMaxRes())-1],w,h;if(r[0]>=r[1]){h=sh;w=Math.round(sh*r[0]/r[1])}else{w=sh;h=Math.round(sh*r[1]/r[0])}if(vid){w+=w%2;h+=h%2}return[w,h,sh/1080]}
function stTs(){var d0=new Date(),p=function(x){return('0'+x).slice(-2)};return d0.getFullYear()+p(d0.getMonth()+1)+p(d0.getDate())+'-'+p(d0.getHours())+p(d0.getMinutes())+p(d0.getSeconds())+'-'+(++STSEQ)}
function stJ(u){return fetch(API+u).then(function(r){return r.json()}).then(function(j){return j.data})}
function stImg(u,cors){return new Promise(function(ok,no){var i=new Image();if(cors)i.crossOrigin='anonymous';i.onload=function(){ok(i)};i.onerror=no;i.src=u})}
function stStar(c,x,y,r){c.beginPath();for(var k=0;k<16;k++){var a=k*Math.PI/8-Math.PI/2,rr=k%2?r*.62:r;c.lineTo(x+rr*Math.cos(a),y+rr*Math.sin(a))}c.closePath()}
function stRR(c,x,y,w,h,r){r=Math.min(r,w/2,h/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function stUp(x){var f=x.files&&x.files[0];if(!f)return;stLibAdd(f).then(function(id){STO.ph=id;STO.theme='photo';P('sto',STO);stLibUi();var ts=$('[data-ao=theme]');if(ts)ts.value='photo';stPrevSoon()}).catch(function(){toast(t('st_err'))});x.value=''}
function stLibUi(){var el=$('#stlib');if(!el)return;el.innerHTML=stLib().map(function(p){return'<div class="stth'+(STO.ph==p.id?' on':'')+'"><button data-stph="'+p.id+'" style="background-image:url('+p.d+')" aria-label="photo"></button><button class="stx" data-stphd="'+p.id+'" aria-label="delete">'+ic('x')+'</button></div>'}).join('')+'<label class="stad">'+ic('plus')+'<input type="file" accept="image/*" id="stup" hidden></label>'}
function stPhotoImg(o){if(o.theme=='photo'&&o.ph){var u=stPhoto(o.ph);if(u)return stImg(u,0).catch(function(){return null})}return Promise.resolve(null)}
function stDeco(c,W,Hh,u,o,th,reg){var m=Math.round(Math.min(W,Hh)*.035),ac=th.ac,cx=W/2;c.save();c.strokeStyle=ac;c.fillStyle=ac;
 switch(o.style){
 case'classic':c.globalAlpha=.9;c.lineWidth=4*u;c.strokeRect(m,m,W-2*m,Hh-2*m);c.globalAlpha=.45;c.lineWidth=2*u;c.strokeRect(m+14*u,m+14*u,W-2*m-28*u,Hh-2*m-28*u);break;
 case'icon':c.globalAlpha=.6;c.lineWidth=3*u;c.strokeRect(m,m,W-2*m,Hh-2*m);c.globalAlpha=.16;stStar(c,cx,165*u,95*u);c.fill();c.globalAlpha=.85;c.lineWidth=3*u;stStar(c,cx,165*u,95*u);c.stroke();c.beginPath();c.arc(cx,165*u,34*u,0,6.2832);c.stroke();break;
 case'band':c.globalAlpha=.17;c.fillRect(0,0,W,180*u);c.fillRect(0,Hh-160*u,W,160*u);c.globalAlpha=.85;c.fillRect(0,180*u,W,3*u);c.fillRect(0,Hh-160*u-3*u,W,3*u);break;
 case'card':c.globalAlpha=1;c.fillStyle=stLum(th.g[0])>.6?'rgba(255,255,255,.55)':'rgba(0,0,0,.30)';stRR(c,W*.07,60*u,W*.86,Hh-120*u,40*u);c.fill();c.strokeStyle=ac;c.globalAlpha=.75;c.lineWidth=3*u;stRR(c,W*.07,60*u,W*.86,Hh-120*u,40*u);c.stroke();break;
 case'arch':var rad=Math.min(W*.36,Hh*.34),yt=90*u,yc=yt+rad,yb=Hh-175*u;
  var ar=function(off){c.beginPath();c.moveTo(cx-rad+off,yb-off);c.lineTo(cx-rad+off,yc);c.arc(cx,yc,rad-off,Math.PI,0);c.lineTo(cx+rad-off,yb-off);c.closePath()};
  c.globalAlpha=.12;ar(0);c.fill();c.globalAlpha=.9;c.lineWidth=4*u;ar(0);c.stroke();c.globalAlpha=.45;c.lineWidth=2*u;ar(16*u);c.stroke();
  reg.x0=cx-rad*.86;reg.x1=cx+rad*.86;reg.hy=yt+rad*.5;reg.top=yc+30*u;reg.bot=yb-40*u;break;
 case'corners':var L=130*u,o2=m+8*u;[[0,0,1,1],[1,0,-1,1],[0,1,1,-1],[1,1,-1,-1]].forEach(function(q){var x=q[0]?W-o2:o2,y=q[1]?Hh-o2:o2;c.globalAlpha=.9;c.lineWidth=4*u;c.beginPath();c.moveTo(x,y+q[3]*L);c.lineTo(x,y);c.lineTo(x+q[2]*L,y);c.stroke();c.globalAlpha=.85;stStar(c,x+q[2]*28*u,y+q[3]*28*u,15*u);c.fill()});break;
 case'side':c.globalAlpha=.92;c.fillRect(0,0,46*u,Hh);c.globalAlpha=.4;c.fillRect(62*u,0,4*u,Hh);c.globalAlpha=1;c.fillStyle=th.g[0];stStar(c,23*u,150*u,17*u);c.fill();reg.x0=W*.17;reg.x1=W*.93;reg.cx=(reg.x0+reg.x1)/2;break;
 case'medal':c.globalAlpha=.75;c.lineWidth=3*u;c.strokeRect(m,m,W-2*m,Hh-2*m);var my=reg.bot+95*u;c.globalAlpha=.15;stStar(c,cx,my,74*u);c.fill();c.globalAlpha=.9;c.lineWidth=3*u;stStar(c,cx,my,74*u);c.stroke();c.beginPath();c.arc(cx,my,52*u,0,6.2832);c.stroke();reg.medal=my;break;
 case'poster':c.globalAlpha=.07;stStar(c,cx,Hh/2,Math.min(W,Hh)*.47);c.fill();c.globalAlpha=.22;c.beginPath();c.moveTo(0,0);c.lineTo(W*.42,0);c.lineTo(0,Hh*.2);c.closePath();c.fill();c.beginPath();c.moveTo(W,Hh);c.lineTo(W*.58,Hh);c.lineTo(W,Hh*.8);c.closePath();c.fill();break;
 default:break}
 c.restore()}
function stLF(){try{return getComputedStyle($('.lg')).fontFamily||"'Inter',sans-serif"}catch(e){return"'Inter',sans-serif"}}
function stLogo(c,cx,yb,u,th){var sz=19*u,fam=stLF();c.save();c.textAlign='left';c.textBaseline='alphabetic';c.direction='ltr';
 c.font='800 '+sz+'px '+fam;try{c.letterSpacing=(.6*sz/16)+'px'}catch(e){}var w2=c.measureText('Brain').width;
 c.font='300 '+sz+'px '+fam;try{c.letterSpacing='0px'}catch(e){}var w1=c.measureText('Huda').width,w=Math.max(w1,w2,2.875*sz),x0=cx-w/2,bh=.25*sz,yRep=yb-bh-.2*sz,yKn=yRep-1.08*sz;
 c.fillStyle=th.tx;c.fillText('Huda',x0,yKn);c.font='800 '+sz+'px '+fam;try{c.letterSpacing=(.6*sz/16)+'px'}catch(e){}c.fillText('Brain',x0,yRep);try{c.letterSpacing='0px'}catch(e){}
 var bw=2.875*sz,g=c.createLinearGradient(x0,0,x0+bw,0);g.addColorStop(0,'#E3B341');g.addColorStop(1,'#F7DE8E');c.fillStyle=g;stRR(c,x0,yb-bh,bw,bh,bh/2);c.fill();c.restore()}
function stAcc(){return(getComputedStyle(D.documentElement).getPropertyValue('--g')||'').trim()||'#E3B341'}
function stGlass(c,W,Hh,u){c.save();[[.15,.1,.55,'rgba(80,120,255,.55)'],[.9,.35,.5,'rgba(190,80,220,.45)'],[.3,.95,.6,'rgba(20,200,150,.4)']].forEach(function(b){var r=Math.max(W,Hh)*b[2],g=c.createRadialGradient(W*b[0],Hh*b[1],0,W*b[0],Hh*b[1],r);g.addColorStop(0,b[3]);g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,W,Hh)});
 c.fillStyle='rgba(255,255,255,.12)';stRR(c,W*.07,60*u,W*.86,Hh-120*u,44*u);c.fill();c.strokeStyle='rgba(255,255,255,.35)';c.lineWidth=2.5*u;stRR(c,W*.07,60*u,W*.86,Hh-120*u,44*u);c.stroke();
 var hl=c.createLinearGradient(0,60*u,0,260*u);hl.addColorStop(0,'rgba(255,255,255,.22)');hl.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=hl;stRR(c,W*.07,60*u,W*.86,200*u,44*u);c.fill();c.restore()}
function stBase(c,W,Hh,u,o,th,img,hd){var sy=STY.filter(function(x){return x.id==o.style})[0]||STY[0],fam=stFam(o.fo||C.af);
 if(o.theme=='photo'&&img){c.save();if(o.blur>0)c.filter='blur('+Math.round(o.blur*u)+'px)';var s2=Math.max(W/img.width,Hh/img.height)*(o.blur>0?1.08:1),w=img.width*s2,h=img.height*s2;c.drawImage(img,(W-w)/2,(Hh-h)/2,w,h);c.restore();c.fillStyle='rgba(0,0,0,'+(o.dim/100)+')';c.fillRect(0,0,W,Hh)}
 else{var g=c.createLinearGradient(0,0,W*.4,Hh);g.addColorStop(0,th.g[0]);g.addColorStop(1,th.g[1]);c.fillStyle=g;c.fillRect(0,0,W,Hh);if(th.gl)stGlass(c,W,Hh,u);
  if(o.pat&&o.style!='poster'){c.save();c.globalAlpha=.07;c.strokeStyle=th.ac;c.lineWidth=2*u;var gz=Math.round(Math.min(W,Hh)/9);for(var yy=gz/2,r2=0;yy<Hh+gz;yy+=gz,r2++)for(var xx=gz/2+(r2%2?gz/2:0);xx<W+gz;xx+=gz){stStar(c,xx,yy,gz*.42);c.stroke()}c.restore()}}
 var reg={x0:W*sy.mx,x1:W*(1-sy.mx),top:sy.top*u,bot:Hh-sy.bot*u,hy:sy.hy*u,cx:W/2};
 if(!o.hdr&&sy.id!='arch')reg.top=Math.max(80*u,reg.top*.5);
 stDeco(c,W,Hh,u,o,th,reg);
 c.textAlign='center';c.textBaseline='middle';
 if(o.hdr){c.direction='rtl';c.fillStyle=th.ac;c.font=Math.round(58*u)+'px '+fam;c.fillText(hd.name,reg.cx,reg.hy);c.direction='ltr';c.fillStyle=th.sb;c.font=Math.round(26*u)+'px '+(C.fe||"'Inter'")+',sans-serif';c.fillText(hd.sub,reg.cx,reg.hy+54*u)}
 if(reg.medal&&hd.num){c.direction='ltr';c.fillStyle=th.ac;c.font='600 '+Math.round(30*u)+'px '+(C.fe||"'Inter'")+',sans-serif';c.fillText(hd.num,reg.cx,reg.medal)}
 var yb=Hh-sy.fy*u,cl=[];if(hd.tcr)cl.push(hd.tcr);if(hd.src)cl.push(hd.src);
 c.direction='ltr';if(o.br)stLogo(c,reg.cx,yb,u,th);
 var yc=yb-(o.br?62*u:0)-6*u;c.textAlign='center';c.textBaseline='alphabetic';c.fillStyle=th.sb;c.globalAlpha=.85;c.font=Math.round(15*u)+'px '+stLF();
 for(var i=cl.length-1;i>=0;i--){c.fillText(cl[i],reg.cx,yc,(reg.x1-reg.x0)*1.1);yc-=21*u}
 c.globalAlpha=1;return reg}
function stLines(c,tx,mw){var ws=String(tx).split(/\s+/),ls=[],cu='';ws.forEach(function(w){var q=cu?cu+' '+w:w;if(c.measureText(q).width>mw&&cu){ls.push(cu);cu=w}else cu=q});if(cu)ls.push(cu);return ls}
function stFit(c,tx,fam,mw,mh,mx,mn,lh){var sz=mx,ls;for(;sz>=mn;sz-=2){c.font=sz+'px '+fam;ls=stLines(c,tx,mw);if(ls.length*sz*lh<=mh)return{sz:sz,ls:ls,lh:lh,fam:fam}}c.font=mn+'px '+fam;return{sz:mn,ls:stLines(c,tx,mw),lh:lh,fam:fam}}
function stPrep(c,u,o,reg,it,fam,tfam,tl){var tot=reg.bot-reg.top,gap=(o.gp==null?30:o.gp)*.9*u,mw=reg.x1-reg.x0,rtl={ar:1,ur:1,fa:1,ps:1,sd:1,ug:1,he:1}[tl];
 c.direction='rtl';var aF=stFit(c,it.ar,fam,mw,it.tr?tot*.62:tot,Math.round(100*u*o.az/100),Math.round(24*u),1.9*o.lh/100),aH=aF.ls.length*aF.sz*aF.lh,tF=null,tH=0;
 if(it.tr){c.direction=rtl?'rtl':'ltr';tF=stFit(c,it.tr,tfam,mw,Math.max(40*u,tot-aH-gap),Math.round(46*u*o.tz/100),Math.round(18*u),1.55*o.lh/100);tH=tF.ls.length*tF.sz*tF.lh}
 return{aF:aF,tF:tF,aH:aH,tH:tH,gap:it.tr?gap:0,total:aH+(it.tr?gap+tH:0),rtl:!!rtl}}
function stBlock(c,fit,cx,top,col){c.fillStyle=col;c.font=fit.sz+'px '+fit.fam;var y=top+fit.sz*fit.lh/2;fit.ls.forEach(function(l,i){c.fillText(l,cx,y+i*fit.sz*fit.lh)})}
function stDraw(c,pr,reg,th,u,o,alpha){c.save();c.globalAlpha=alpha;if(o.sh){c.shadowColor='rgba(0,0,0,.55)';c.shadowBlur=10*u;c.shadowOffsetY=2*u}
 c.textAlign='center';c.textBaseline='middle';var top=reg.top+Math.max(0,((reg.bot-reg.top)-pr.total)/2)+(o.oy||0)/100*(reg.bot-reg.top);
 c.direction='rtl';stBlock(c,pr.aF,reg.cx,top,th.tx);
 if(pr.tF){var ly=top+pr.aH+pr.gap/2;if(pr.gap>26*u){c.save();c.shadowColor='transparent';c.globalAlpha=alpha*.55;c.strokeStyle=th.ac;c.lineWidth=2*u;c.beginPath();c.moveTo(reg.cx-60*u,ly);c.lineTo(reg.cx+60*u,ly);c.stroke();c.restore()}c.direction=pr.rtl?'rtl':'ltr';stBlock(c,pr.tF,reg.cx,top+pr.aH+pr.gap,th.sb)}
 c.restore()}
function stFonts(fam,tfam,it){var q=[document.fonts.load('48px '+fam,it.ar+'\uFD3F\uFD3E٠١٢٣٤٥٦٧٨٩'),document.fonts.load('300 20px '+stLF(),'Huda'),document.fonts.load('800 20px '+stLF(),'Brain')];if(it.tr)q.push(document.fonts.load('30px '+tfam,it.tr));return Promise.race([Promise.all(q),new Promise(function(r){setTimeout(r,4500)})])}
function stFam(f){return String(f||'').replace(/'QCF[14]',\s*/g,'')}
function stFoUi(cur){cur=stFam(cur)||FKV1;return'<input type="hidden" id="stfo" value="'+esc(cur)+'"><div class="stfl">'+FA.filter(function(f){return!/QCF[14]/.test(f[0])}).map(function(f){return'<button type="button" class="stfc'+(f[0]==cur?' on':'')+'" data-stfo="'+esc(f[0])+'"><small>'+f[1]+'</small><span class="ar" style="font-family:'+f[0]+'">'+SXSM.ar+' '+sxMk(f[0])+'</span></button>'}).join('')+'</div>'}
D.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-stfo]');if(!b)return;var h=$('#stfo');if(!h)return;h.value=b.dataset.stfo;D.querySelectorAll('[data-stfo]').forEach(function(x){x.classList.toggle('on',x===b)});stGather();stSumTxt()});
function stMk(f,n){var fm=(String(f).match(/['"]?([^'",]+)/)||[])[1]||'',d=String(n).replace(/\d/g,function(q){return'٠١٢٣٤٥٦٧٨٩'[q]});return/Hafs V20|Hafs Smart|Doori|Qaloon/.test(fm)?d:'\uFD3F'+d+'\uFD3E'}
function stData(o,vid){
 if(STSRC=='h'&&STH){var tri=o.ht>=0?STH.trs[o.ht]:null;return Promise.resolve({items:[{ar:STH.ar,tr:tri?tri.text:'',num:''}],hd:{name:'الحديث',sub:(STH.book?STH.book+' · ':'')+STH.ref,num:(STH.ref||'').split(' ')[0],tcr:tri&&tri.src?t('st_tcr')+': '+tri.src:'',src:''},tl:tri?tri.lang:'',ays:[]})}
 var own=o.tr=='__own'?String(S('stown','')).split(/\r?\n/):null,eds='quran-uthmani'+(o.tr&&!own&&o.tr!=HUDA_ID?','+o.tr:'');
 return Promise.all([stJ('/surah/'+o.n+'/editions/'+eds),o.tr==HUDA_ID&&!own?hudaLoad():null]).then(function(R){var dt=R[0];if(R[1])dt=[dt[0],hudaEd(dt[0],{n:o.n},R[1])];var ar=dt[0],tr=dt[1],ay=ar.ayahs.slice(o.f-1,o.t),ty=own?ay.map(function(a,i){return{text:(own[i]||'').trim()}}):(tr?tr.ayahs.slice(o.f-1,o.t):[]),multi=ay.length>1,dg=function(x){return String(x).replace(/\d/g,function(q){return'٠١٢٣٤٥٦٧٨٩'[q]})};
  var sl0=stSelOk(o,ay);var A=ay.map(function(a,i){var w=stAyW(a,o),sl=sl0;if(sl)w=w.filter(function(x,wi){return sl.indexOf(a.numberInSurah+'.'+wi)>=0});a.surah={number:o.n};return{ar:w.join(' ')+((o.vn&&w.length)?' '+stMk(o.fo||C.af,a.numberInSurah):''),tr:ty[i]&&ty[i].text?(((o.vn&&multi)?'('+a.numberInSurah+') ':'')+ty[i].text):'',num:a.numberInSurah}});
  var rf=o.n+':'+o.f+(o.t>o.f?'–'+o.t:''),items=vid?A:[{ar:A.map(function(x){return x.ar}).join(' '),tr:A.map(function(x){return x.tr}).join(' ').trim(),num:o.f}];
  return{items:items,ays:ay,tl:own?lang:(tr?tr.edition.language:''),hd:{name:ar.name,sub:ar.englishName+' · '+rf,num:rf,tcr:own?'':(tr&&STOK.indexOf(tr.edition.identifier)<0?t('st_tcr')+': '+(tr.edition.name||tr.edition.englishName):''),src:''}}})}
function stImage(o){var out=$('#stout');if(!out)return;out.innerHTML='<p class="mu">'+t('st_busy')+'</p>';
 stData(o,false).then(function(dt){var fam=stFam(o.fo||C.af),tfam=stTf(dt.tl),it=dt.items[0];
  return Promise.all([stPhotoImg(o),stFonts(fam,tfam,it)]).then(function(rs){var sz=stDim(o,false),W=sz[0],Hh=sz[1],u=sz[2],cv=D.createElement('canvas');cv.width=W;cv.height=Hh;var c=cv.getContext('2d'),th=stTh(o),reg=stBase(c,W,Hh,u,o,th,rs[0],dt.hd),pr=stPrep(c,u,o,reg,it,fam,tfam,dt.tl);stDraw(c,pr,reg,th,u,o,1);stWm(c,W,Hh);
   if(STCV&&STCV!==cv)stCvFree(STCV);STCV=cv;STNM='huda-brain-'+(STSRC=='h'?'hadith':o.n+'-'+o.f+(o.t>o.f?'-'+o.t:''))+'-'+stTs();var o2=$('#stout');if(!o2)return;o2.innerHTML='';cv.className='stcv';o2.appendChild(cv);
   o2.insertAdjacentHTML('beforeend','<div class="two stbt"><button class="btn" data-stdl="1">'+ic('dl')+t('st_dl')+'</button>'+'<button class="btn" data-cysf="img">'+ic('share')+t('st_share')+'</button>'+'</div>')})}).catch(function(){var o3=$('#stout');if(o3)o3.innerHTML='<p class="mu">'+t('st_err')+'</p>'})}
function stSave(b,name,tool){var ty=(b&&b.type)||'',kd=ty.indexOf('image/')==0?'Image':ty.indexOf('video/')==0?'Video':ty.indexOf('audio/')==0?'Audio':'';if(kd)name='Huda Studio - '+(tool?tool+' - ':'')+kd+' - '+name;var a=D.createElement('a');a.href=URL.createObjectURL(b);a.download=name;D.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500)}
function stDl(){if(!STCV)return;var nm=STNM+'.png';STCV.toBlob(function(b){if(b)stSave(b,nm)},'image/png')}
function stShare(){if(!STCV)return;var nm=STNM+'.png';STCV.toBlob(function(b){if(!b)return;var f=new File([b],nm,{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],title:'Huda Brain'}).catch(function(){});else stSave(b,nm)},'image/png')}
function stRcName(rc){if(rc=='custom')return t('st_ca');if(rc.indexOf('qe:')==0)return'QuranEnc.com';if(rc.indexOf('ea:')==0)return(RC.filter(function(x){return x[0]==rc})[0]||[0,'EveryAyah'])[1];var r=RC.filter(function(x){return x[0]==rc})[0]||XL.filter(function(x){return x[0]==rc})[0];return r?r[1]:rc}
function stAudUrls(a,rc){var us=[];if(!/^(qe|ea):/.test(rc))us.push('https://cdn.islamic.app/quran/audio/'+rc+'/'+a.number+'.mp3');us.push(aurl(a,rc));return us.map(function(u){return AUDIO_PROXY?AUDIO_PROXY+encodeURIComponent(u):u})}
function stGetBuf(ac,a,rc){var us=stAudUrls(a,rc),i=0;function nx(){if(i>=us.length)return Promise.resolve(null);var u=us[i++];return fetch(u).then(function(r){if(!r.ok)throw 0;return r.arrayBuffer()}).then(function(ab){return new Promise(function(ok,no){ac.decodeAudioData(ab,ok,no)})}).catch(function(){return nx()})}return nx()}
function stAsk(ac,items){return new Promise(function(res){var out=$('#stout');if(!out){res({bufs:[]});return}
 out.innerHTML='<div class="card"><p>'+t('st_noaud')+'</p><p class="mu">'+t('st_noaud2')+'</p><label class="btn wide stpk">'+ic('audio')+t('st_pickaud')+'<input type="file" id="staf" accept="audio/*" multiple hidden></label><button class="btn wide" id="stsil" style="margin-top:8px">'+t('st_silent')+'</button></div>';
 $('#stsil').onclick=function(){res({bufs:items.map(function(){return null}),dev:0})};
 $('#staf').onchange=function(){var fs=[].slice.call(this.files).sort(function(a,b){return a.name.localeCompare(b.name,undefined,{numeric:true})});if(!fs.length)return;
  Promise.all(fs.map(function(f){return f.arrayBuffer().then(function(ab){return new Promise(function(ok,no){ac.decodeAudioData(ab,ok,no)})}).catch(function(){return null})})).then(function(bs){
   if(!bs.some(Boolean)){toast(t('st_err'));res({bufs:items.map(function(){return null}),dev:0});return}
   if(bs.length==1&&items.length>1)res({bufs:items.map(function(){return null}),single:bs[0],dev:1});else res({bufs:items.map(function(x,i){return bs[i]||null}),dev:1})})}})}
function stVideo(o){var out=$('#stout');if(!out)return;
 if(!(window.MediaRecorder&&HTMLCanvasElement.prototype.captureStream)){toast(t('st_nov'));return}
 STVC=false;STVB=null;stOuSet(null);STPV.hold=true;STBG.forEach(function(m){if(m.vid)try{m.el.pause()}catch(e){}});var AC=window.AudioContext||window.webkitAudioContext,ac=null;try{ac=AC?new AC():null;if(ac&&ac.resume)ac.resume()}catch(e){ac=null}
 out.innerHTML='<div class="card"><p class="mu" id="stvp">'+t('st_busy')+'</p><div class="stpb"><i id="stvb"></i></div><p class="mu">'+t('st_keep')+'</p><button class="btn wide" data-stcx="1">'+ic('x')+t('st_cancel')+'</button></div>';
 var wl=null;try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(l){wl=l}).catch(function(){})}catch(e){}
 var rafId=0,fin=function(){STPV.hold=false;if(rafId){cancelAnimationFrame(rafId);rafId=0}STRAFV=0;stLayerFree();try{if(wl)wl.release()}catch(e){}};
 Promise.all([stData(o,true),stBgReady()]).then(function(r0){var dt=r0[0],fam=stFam(o.fo||C.af),tfam=stTf(dt.tl),rc=stRcSafe(o),n=dt.ays.length,done=0;
  var loads=n?dt.ays.map(function(a){return ac&&rc!='custom'?stGetBuf(ac,a,rc).then(function(b){done++;var p=$('#stvp');if(p)p.textContent=t('st_aud')+' '+done+'/'+n;return b}):Promise.resolve(null)}):dt.items.map(function(){return Promise.resolve(null)});
  return Promise.all([Promise.all(loads),stPhotoImg(o),Promise.all(dt.items.map(function(it){return stFonts(fam,tfam,it)}))]).then(function(rs){
   var bufs0=rs[0],img=rs[1];if(STVC)return;
   var need=n>0&&ac&&!bufs0.some(Boolean);
   return(rc=='custom'&&ac&&stCaBuf()?Promise.resolve({bufs:bufs0,single:stCaBuf(),dev:1}):need?stAsk(ac,dt.items):Promise.resolve({bufs:bufs0,dev:0})).then(function(au){if(STVC)return;
    var bufs=au.bufs,single=au.single||null,hasA=!!(ac&&(single||bufs.some(Boolean)));
    if(!hasA&&n>0)toast(t('st_noaud'));
    dt.hd.src=(n>0&&hasA&&!au.dev)?t('st_rec')+': '+stRcName(rc):'';
    var oc=$('#stout');if(oc)oc.innerHTML='<div class="card"><p class="mu" id="stvp">'+t('st_busy')+'</p><div class="stpb"><i id="stvb"></i></div><p class="mu">'+t('st_keep')+'</p><button class="btn wide" data-stcx="1">'+ic('x')+t('st_cancel')+'</button></div>';
    var sz=stDim(o,true),W=sz[0],Hh=sz[1],u=sz[2],cv=D.createElement('canvas');cv.width=W;cv.height=Hh;var c=cv.getContext('2d'),th=stTh(o),bg=D.createElement('canvas');bg.width=W;bg.height=Hh;
    var reg=stBase(bg.getContext('2d'),W,Hh,u,o,th,img,dt.hd),prs=dt.items.map(function(it){return vzPrep(c,u,o,reg,it,fam,tfam,dt.tl)}),offs=[],tot=.6,lens=dt.items.map(function(it){return it.ar.length+1}),sl=lens.reduce(function(a,b){return a+b},0);
    var cuts=single?stCutsM(single,dt.items.length):null,durs=[],vb=dt.items.map(function(it,ix){return stVbItem(ix,W,Hh,u,o,dt.hd)}),lastI=-2;dt.items.forEach(function(it,i){offs.push(tot);var dd=single?(cuts?cuts[i+1]-cuts[i]:single.duration*lens[i]/sl):(bufs[i]?bufs[i].duration:(3+it.ar.length*.06));durs.push((bufs[i]||single)?dd:0);tot+=dd+(single?0:.8)});if(single)tot+=.8;
    return stWcRec(W,Hh,hasA,single,bufs,offs,tot,o.fps||30).then(function(wc){var mimes=['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'],mime=mimes.filter(function(m){return MediaRecorder.isTypeSupported(m)})[0]||'';
    var stm=wc?null:stCap(cv,o.fps||30),dest=null;if(hasA&&!wc){dest=ac.createMediaStreamDestination();dest.stream.getAudioTracks().forEach(function(tk){stm.addTrack(tk)})}
    var opt={videoBitsPerSecond:W*Hh>1000000?5e6:3.5e6};if(mime)opt.mimeType=mime;var chunks=[],rec=wc||new MediaRecorder(stm,opt);
    rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data)};
    rec.onstop=function(){fin();try{if(stm)stm.getTracks().forEach(function(k){k.stop()})}catch(e){}stCvFree(cv);stCvFree(bg);vb.forEach(function(x){if(x){if(x.v)try{x.v.pause();x.v.loop=true}catch(e){}stCvFree(x.c||x.ov);stCvFree(x.lc)}});try{if(ac)ac.close()}catch(e){}if(STVC)return;if(wc&&!rec.blob){var oe=$('#stout');if(oe)oe.innerHTML='<p class="mu">'+t('st_err')+'</p>';return}var ty=(rec.mimeType||mime||'video/webm').split(';')[0],bl0=rec.blob||new Blob(chunks,{type:ty});(rec.blob?Promise.resolve(bl0):stFixDur(bl0,(performance.now()-rT0)/1000,ty)).then(function(bl){STVB=bl;STVX=ty.indexOf('mp4')>=0?'mp4':'webm';STNM='huda-brain-'+(STSRC=='h'?'hadith':o.n+'-'+o.f+(o.t>o.f?'-'+o.t:''))+'-'+stTs();var o2=$('#stout');if(!o2)return;o2.innerHTML='<video class="stcv" controls playsinline src="'+stOuSet(URL.createObjectURL(bl))+'"></video><div class="two stbt"><button class="btn" data-stvd="1">'+ic('dl')+t('st_vdl')+'</button><button class="btn" data-cysf="vid">'+ic('share')+t('st_share')+'</button></div>'})};
    var t0=0;
    var vzr=hasA?vzMake(o,{bufs:bufs,single:single,offs:offs},W,Hh,u,th,tot):null;
     function draw(tm,st){c.globalAlpha=1;c.drawImage(bg,0,0);
     var i=-1;for(var k=0;k<offs.length;k++)if(tm>=offs[k])i=k;stBgMix(c,bg,vb,i,lastI,W,Hh,st,i>=0?tm-offs[i]:9);lastI=i;if(vzr)vzr.draw(c,tm,tot);
     if(i>=0){var end=(i+1<offs.length?offs[i+1]:tot)-.2,al=Math.max(0,Math.min(1,(tm-offs[i])/.5,(end-tm)/.4));stCard(c,prs[i],reg,vb[i]?vb[i].th:th,u,o,al,stAnimV(tm,offs[i],end))}
     if(o.vp){c.fillStyle=th.ac;c.fillRect(0,Hh-8*u,W*Math.min(1,Math.max(0,tm)/tot),8*u)}
     stWmV(c,W,Hh);return i}
    var stNx=null,stFc=0;function frame(){rafId=0;if(STVC){try{rec.stop()}catch(e){}return}var tm=(performance.now()-t0)/1000;if(tm<tot){if(stNx==null)stNx=tm;if(tm<stNx-.002){STRAFV=rafId=requestAnimationFrame(frame);return}}draw(tm,false);stFc++;if(stm&&stm._rf){try{stm._rf.requestFrame()}catch(e){}}stNx+=1/(o.fps||30);if(tm-stNx>2/(o.fps||30))stNx=tm;var pb=$('#stvb');if(pb)pb.style.width=Math.min(100,Math.max(0,tm)/tot*100)+'%';
     if(tm<tot)STRAFV=rafId=requestAnimationFrame(frame);else{stDropRep(stFc,tot,o.fps||30);setTimeout(function(){try{rec.stop()}catch(e){}},300)}}
    var tick=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
    async function offline(){var fps=wc.fps,N=Math.ceil(tot*fps),lastV=null;STBG.forEach(function(m){if(m.vid)try{m.el.pause()}catch(e){}});for(var k=0;k<N;k++){if(STVC){try{rec.stop()}catch(e){}return}var tm=k/fps,i=-1;for(var q=0;q<offs.length;q++)if(tm>=offs[q])i=q;var cv2=(i>=0&&vb[i]&&vb[i].v)?vb[i].v:null;if(lastV&&lastV!==cv2){try{lastV.pause()}catch(e){}}lastV=cv2;if(cv2)await stVbSync(vb[i],tm-offs[i]);draw(tm,true);while(wc.q()>6)await tick(8);wc.pushAt(cv,k);if(k%3==0){var pb=$('#stvb');if(pb)pb.style.width=(k/N*100)+'%';var vp=$('#stvp');if(vp)vp.textContent=t('st_busy')+' '+Math.round(k/N*100)+'%';await tick(0)}}try{rec.stop()}catch(e){}}
    var rT0=performance.now();rec.start(500);
    if(dest){ac.resume();var base=ac.currentTime+.35;if(single){var sr0=ac.createBufferSource();sr0.buffer=single;sr0.connect(dest);sr0.start(base+offs[0])}else bufs.forEach(function(b,i){if(!b)return;var sr=ac.createBufferSource();sr.buffer=b;sr.connect(dest);sr.start(base+offs[i])})}
    if(wc){stEng(1);offline()}else{stEng(0);t0=performance.now()+350;STRAFV=rafId=requestAnimationFrame(frame)}})})})
 }).catch(function(){fin();var o3=$('#stout');if(o3)o3.innerHTML='<p class="mu">'+t('st_err')+'</p>'})}
function stVdl(){if(!STVB)return;try{if(localStorage.getItem(stlKey())){stSave(STVB,STNM+'.'+STVX);return}}catch(e){}go(Object.assign({},cur,{o:'stlic'}))}
function stWmBits(un){var s=unescape(encodeURIComponent(String(un||''))).slice(0,24),b=[1,0,1,0,1,0,1,1],x=s.length,k;function p(v){for(var j=7;j>=0;j--)b.push((v>>j)&1)}p(s.length);for(k=0;k<s.length;k++){p(s.charCodeAt(k));x^=s.charCodeAt(k)}p(x);return b}
function stWm(c,W,Hh){if(!SES||!SES.un)return;try{if(!STWM||STWM.k!=SES.un)STWM={k:SES.un,b:stWmBits(SES.un)};var B=4,h=12,nb=Math.floor(W/B),bits=STWM.b,ys=[0,Math.floor(Hh/2/B)*B,Hh-h];ys.forEach(function(y){var im=c.getImageData(0,y,W,h),d=im.data;for(var r=0;r<h;r++)for(var x=0;x<nb*B;x++){var bit=bits[Math.floor(x/B)%bits.length],o=(r*W+x)*4;d[o]=(d[o]&254)|bit;d[o+1]=(d[o+1]&254)|bit;d[o+2]=(d[o+2]&254)|bit}c.putImageData(im,0,y)})}catch(e){}}
function stWmRead(cv){var B=4,h=12,W=cv.width,Hh=cv.height,c=cv.getContext('2d'),nb=Math.floor(W/B),ys=[0,Math.floor(Hh/2/B)*B,Hh-h],sum=[],i;for(i=0;i<nb;i++)sum.push(0);ys.forEach(function(y){var d=c.getImageData(0,y,W,h).data;for(var r=0;r<h;r++)for(var x=0;x<nb*B;x++){var o=(r*W+x)*4;sum[Math.floor(x/B)]+=(d[o]&1)+(d[o+1]&1)+(d[o+2]&1)}});var tot=ys.length*h*B*3,bt=sum.map(function(v){return v*2>tot?1:0});function by(p){var v=0;for(var j=0;j<8;j++)v=v*2+bt[p+j];return v}
for(var s0=0;s0+24<nb;s0++){if(by(s0)!=171)continue;var n=by(s0+8);if(n<1||n>24||s0+16+n*8+8>nb)continue;var x=n,st='';for(i=0;i<n;i++){var ch=by(s0+16+i*8);x^=ch;st+=String.fromCharCode(ch)}if(x==by(s0+16+n*8))try{return decodeURIComponent(escape(st))}catch(e){return st}}return null}
function stPk(b,n){var d=b.getChannelData(0),st=Math.max(1,Math.floor(d.length/n)),pk=[];for(var i=0;i<n;i++){var m=0,a=i*st;for(var j=0;j<st;j+=Math.max(1,st>>6)){var v=Math.abs(d[a+j]||0);if(v>m)m=v}pk.push(m)}var mx=Math.max.apply(null,pk)||1;return pk.map(function(v){return v/mx})}
function stSilence(b,min,thr){var d=b.getChannelData(0),sr=b.sampleRate,w=Math.floor(sr*.02),n=Math.floor(d.length/w),r=[],mx=0,i,j;for(i=0;i<n;i++){var q=0;for(j=0;j<w;j+=4){var v=d[i*w+j];q+=v*v}q=Math.sqrt(q/(w/4));r.push(q);if(q>mx)mx=q}var th=mx*(thr||.04),out=[],st=-1;for(i=0;i<=n;i++){var z=i<n&&r[i]<th;if(z&&st<0)st=i;else if(!z&&st>=0){var a=st*w/sr,e=i*w/sr;if(e-a>=min)out.push([a,e]);st=-1}}return out}
function stCuts(b,N){if(N<2||!b.sil)return null;var d=b.duration,s=b.sil.filter(function(x){return x[0]>.15&&x[1]<d-.15});if(s.length<N-1)return null;s=s.slice().sort(function(p,q){return(q[1]-q[0])-(p[1]-p[0])}).slice(0,N-1).sort(function(p,q){return p[0]-q[0]});var r=[0];s.forEach(function(x){r.push((x[0]+x[1])/2)});r.push(d);return r}
function stVbFrame(c,vb,i,last,W,Hh,st){if(i!==last&&!st){var p=vb[last];if(p&&p.v)try{p.v.pause()}catch(e){}var n=vb[i];if(n&&n.v)try{n.v.currentTime=0;var pr=n.v.play();if(pr&&pr.catch)pr.catch(function(){})}catch(e){}}var m=i>=0?vb[i]:null;if(!m)return;if(m.c){c.drawImage(m.c,0,0);return}var v=m.v;if(v.readyState>1&&v.videoWidth){var s=Math.max(W/v.videoWidth,Hh/v.videoHeight),w=v.videoWidth*s,h=v.videoHeight*s;c.drawImage(v,(W-w)/2,(Hh-h)/2,w,h);if(st){if(!m.lc){m.lc=D.createElement('canvas');m.lc.width=W;m.lc.height=Hh}m.lc.getContext('2d').drawImage(c.canvas,0,0)}}else if(st&&m.lc)c.drawImage(m.lc,0,0);c.fillStyle='rgba(0,0,0,'+m.dim+')';c.fillRect(0,0,W,Hh);c.drawImage(m.ov,0,0)}
function stWebmDur(a,sec){function vi(p){var b=a[p],l=1,m=128;while(l<=8&&!(b&m)){l++;m>>=1}if(l>8)return null;var v=b&(m-1),un=v==m-1;for(var i=1;i<l;i++){v=v*256+a[p+i];if(a[p+i]!=255)un=false}return{l:l,v:v,un:un}}function ei(p){var b=a[p],l=1,m=128;while(l<=4&&!(b&m)){l++;m>>=1}var v=0;for(var i=0;i<l;i++)v=v*256+a[p+i];return{l:l,v:v}}function wr(p,v,l){for(var i=l-1;i>=0;i--){a2[p+i]=v%256;v=Math.floor(v/256)}a2[p]|=128>>(l-1)}
if(a[0]!=26||a[1]!=69)return null;var h=vi(4),p=4+h.l+h.v;if(ei(p).v!=0x18538067)return null;var sg=vi(p+4),q=p+4+sg.l,info=-1,s,e;while(q<a.length-8){e=ei(q);s=vi(q+e.l);if(!s)return null;if(e.v==0x1549A966){info=q;break}if(s.un)return null;q+=e.l+s.l+s.v}if(info<0)return null;e=ei(info);s=vi(info+e.l);var bs=info+e.l+s.l,be=bs+s.v,sc=1e6,x=bs,c2;while(x<be){c2=ei(x);var s2=vi(x+c2.l);if(c2.v==0x4489)return null;if(c2.v==0x2AD7B1){sc=0;for(var i=0;i<s2.v;i++)sc=sc*256+a[x+c2.l+s2.l+i]}x+=c2.l+s2.l+s2.v}
if(s.v+11>Math.pow(2,7*s.l)-2)return null;var a2=new Uint8Array(a.length+11);a2.set(a.subarray(0,be),0);var d=new DataView(a2.buffer);a2.set([0x44,0x89,0x88],be);d.setFloat64(be+3,sec*1e9/sc);a2.set(a.subarray(be),be+11);a2.fill(0,info+e.l,info+e.l+s.l);wr(info+e.l,s.v+11,s.l);if(!sg.un){a2.fill(0,p+4,p+4+sg.l);wr(p+4,sg.v+11,sg.l)}return a2}
function stMp4Dur(a,sec){var dv=new DataView(a.buffer,a.byteOffset,a.byteLength),ch=0,tm=1;function sd(o,v,ts){var val=Math.round(sec*ts);if(v){dv.setUint32(o,Math.floor(val/4294967296));dv.setUint32(o+4,val>>>0)}else dv.setUint32(o,val>>>0);ch++}function bx(p,e){while(p+8<=e){var sz=dv.getUint32(p),ty=String.fromCharCode(a[p+4],a[p+5],a[p+6],a[p+7]);if(sz<8)break;var en=Math.min(p+sz,e),v=a[p+8];if(ty=='moov'||ty=='trak'||ty=='mdia')bx(p+8,en);else if(ty=='mvhd'||ty=='mdhd'){var ts=dv.getUint32(v?p+28:p+20),dO=v?p+32:p+24;if(ty=='mvhd')tm=ts;if(!(v?dv.getUint32(dO)+dv.getUint32(dO+4):dv.getUint32(dO)))sd(dO,v,ts)}else if(ty=='tkhd'){var dO2=v?p+44:p+28;if(!(v?dv.getUint32(dO2)+dv.getUint32(dO2+4):dv.getUint32(dO2)))sd(dO2,v,tm)}p+=sz}}bx(0,a.length);return ch?a:null}
var STNC=false;
var STOK=['en.pickthall','en.yusufali'];
STPN='';
var STCA=null;
var STBG=[];
var STWM=null;
var STRV=null;
var STSYP=null;
var STSY={sens:4,min:.8};
function stRcSafe(o){return STNC?(o.rc||C.rc):'custom'}
function stMaxRes(){var ram=navigator.deviceMemory||4,cores=navigator.hardwareConcurrency||4;return ram>=8&&cores>=8?4:ram>=6&&cores>=6?3:ram>=4&&cores>=4?2:1}
var STTL=[['aud','font'],['vr','audio'],['vz','viz'],['sn','auto'],['th','moon'],['ad','scale'],['ra','grid'],['qu','media'],['di','eye'],['sy','pic']];
function stBarHtml(vid){var b=function(x){return'<button class="tlb'+(STPN==x[0]?' on':'')+'" data-sttl="'+x[0]+'">'+ic(x[1])+'<span>'+t('stt_'+x[0])+'</span></button>'};return'<div class="tlbw"><div class="tlbs">'+STTL.filter(function(x){return vid||(x[0]!='vr'&&x[0]!='sn'&&x[0]!='vz')}).map(b).join('')+b(['re','rot'])+'</div></div>'}
function stOpen(k){if(k=='re'){stConfirm(t('st_rs_q'),function(){STO=Object.assign({},STD);P('sto',STO);while(STBG.length)stBgDel(0,1);studiov({v:'studio',t:cur.t});toast(t('st_ok')||'OK')});return}if(k=='cr'){stCreate();return}if(STSYP)stSyStop();STPN=STPN==k?'':k;D.querySelectorAll('.tlb[data-sttl]').forEach(function(b){b.classList.toggle('on',b.dataset.sttl==STPN)});stPanel()}
function stThOpts(){var nm=lang=='ta'?STN.ta:STN.en;return STT.map(function(x,i){return[x.n,nm[i]]}).concat([['custom',lang=='ta'?'தனிப்பயன்':'Custom']])}
function stChips(attr,items,cur2){return'<div class="stchs">'+items.map(function(x){return'<button class="stch'+(String(cur2)==String(x[0])?' on':'')+'" '+attr+'="'+x[0]+'"'+(x[2]?' disabled':'')+'>'+x[1]+'</button>'}).join('')+'</div>'}
function stPanel(){var el=$('#stpn');if(!el)return;vzPanelStop();var k=STPN,vid=cur.t=='vid',h='';msWvMode(k);if(!k){el.innerHTML='';el.hidden=true;return}el.hidden=false;
 if(k=='aud')h='<div id="acb-sel"><div class="sk" style="height:90px;min-width:0"></div></div>';
 else if(k=='th')h='<div class="stav"><h4>'+t('sa_theme')+'</h4>'+aoSel('theme','',stThOpts())+'<div id="stcus"'+(STO.theme=='custom'?'':' hidden')+'>'+aoCol('cbg1',t('sa_c1'))+aoCol('cbg2',t('sa_c2'))+aoCol('ctx',t('sa_ct'))+aoCol('cac',t('sa_ca'))+'</div><h4>'+t('sa_photo')+'</h4>'+(vid?'<label class="btn wide stpk">'+ic('pic')+t('st_bgm')+'<input type="file" id="stbgm" multiple accept="image/*,video/*" hidden></label><p class="mu">'+t('st_bgn')+'</p><div class="stlib" id="stbgl"></div>':'<div class="stlib" id="stlib"></div>')+'</div>';
 else if(k=='ad')h='<div class="stav">'+aoRng('dim',t('sa_dim'),0,90,5)+aoRng('blur',t('sa_blur'),0,12,1)+aoRng('az',t('sa_az'),50,140,5)+aoRng('tz',t('sa_tz'),50,140,5)+aoRng('lh',t('sa_lh'),80,130,5)+aoRng('gp',t('sa_gap'),0,120,5)+aoRng('oy',t('st_oy'),-40,40,2)+'</div>';
 else if(k=='ra')h='<div class="stav">'+stChips('data-strt',Object.keys(STR).map(function(x){return[x,STR[x][2]]}),STO.ratio)+(vid?'<h4>'+t('st_fps')+'</h4>'+stChips('data-stfps',[[24,'24 fps'],[30,'30 fps'],[60,'60 fps',stMaxRes()<2]],STO.fps||30):'')+'</div>';
 else if(k=='qu'){var mx=stMaxRes(),q=Math.min(STO.res||2,mx),L=[[1,t('st_qn')+' 720p'],[2,'Full HD 1080p'],[3,'2K 1440p'],[4,'4K 2160p']];h='<div class="stav">'+stChips('data-stqu',L.map(function(x){return[x[0],x[1],x[0]>mx]}),q)+'<p class="mu">'+t('st_qm')+' '+L[mx-1][1]+'</p></div>'}
 else if(k=='di')h='<div class="stav">'+aoChk('hdr',t('sa_hdr'))+aoChk('vn',t('sa_vn'))+aoChk('br',t('sa_br'))+aoChk('pat',t('sa_pat'))+aoChk('sh',t('sa_sh'))+aoChk('vp',t('sa_vp'))+(vid?'<h4>'+t('st_an')+'</h4>'+aoSel('an','',stAnOpts()):'')+'</div>';
 else if(k=='sy')h='<div class="stg" id="stg"></div>';
  else if(k=='vz')h=vzPanelHtml();
  el.innerHTML=h;
 if(k=='aud')stSelFill();else if(k=='th'){stLibUi();stBgUi()}else if(k=='sy')stPrevAll();else if(k=='vr')stVrUi();else if(k=='sn')stSyUi();else if(k=='vz')vzUi();stPnFit()}
function stBgUi(){var e=$('#stbgl');if(!e)return;e.innerHTML=STBG.map(function(m,i){return'<div class="stth"><button '+(m.vid?'':'style="background-image:url('+m.url+')"')+' aria-label="bg">'+(m.vid?ic('video'):'')+'<small class="stbn">'+(i+1)+'</small></button><button class="stx" data-stbgx="'+i+'" aria-label="delete">'+ic('x')+'</button></div>'}).join('')}
function stVbItem(ix,W,Hh,u,o,hd){var m=STBG.length?STBG[ix%STBG.length]:null;if(!m)return null;try{if(!m.vid){if(!(m.el.complete&&m.el.naturalWidth))return null;var o2=Object.assign({},o,{theme:'photo'}),cv=D.createElement('canvas');cv.width=W;cv.height=Hh;var th=stTh(o2);stBase(cv.getContext('2d'),W,Hh,u,o2,th,m.el,hd);return{c:cv,th:th}}var o3=Object.assign({},o,{theme:'photo',dim:0,blur:0}),ov=D.createElement('canvas'),px=D.createElement('canvas');ov.width=W;ov.height=Hh;px.width=px.height=1;var th3=stTh(o3);stBase(ov.getContext('2d'),W,Hh,u,o3,th3,px,hd);return{ov:ov,th:th3,v:m.el,dim:o.dim/100}}catch(e){return null}}
function stCaBuf(){if(!STCA)return null;var b=STCA.buf,sr=b.sampleRate,s=Math.floor(STCA.s*b.length),e=Math.min(b.length,Math.max(s+Math.floor(sr/10),Math.floor(STCA.e*b.length))),ss=s/sr,ee=e/sr;if(s<=0&&e>=b.length){b.marks=STCA.marks;return b}var AC=window.AudioContext||window.webkitAudioContext,tmp=new AC(),nb=tmp.createBuffer(b.numberOfChannels,e-s,sr);for(var c=0;c<b.numberOfChannels;c++)nb.copyToChannel(b.getChannelData(c).subarray(s,e),c);try{tmp.close()}catch(x){}nb.sil=stSilence(nb,.8);nb.marks=STCA.marks.filter(function(m){return m>ss&&m<ee}).map(function(m){return m-ss});return nb}
function stCutsM(b,N){if(N<2)return null;if(b.marks&&b.marks.length==N-1){var r=[0].concat(b.marks.slice().sort(function(p,q){return p-q}));r.push(b.duration);return r}return stCuts(b,N)}
function stSyN(){return STSRC=='h'?1:Math.max(1,STO.t-STO.f+1)}
function stSyAuto(){if(!STCA)return;var b=STCA.buf,N=stSyN(),d=b.duration,sl=null,all=[];if(N<2){STCA.marks=[];return}var ms=[STSY.min,.6,.5,.4,.3,.25],tm=[1,1.6,2.5,4];for(var a=0;a<ms.length&&!sl;a++)for(var k=0;k<4&&!sl;k++){var s2=stSilence(b,ms[a],STSY.sens/100*tm[k]).filter(function(x){return x[0]>STCA.s*d+.1&&x[1]<STCA.e*d-.1});all=s2;if(s2.length>=N-1)sl=s2}
 var pick=(sl||all).slice().sort(function(p,q){return(q[1]-q[0])-(p[1]-p[0])}).slice(0,N-1).sort(function(p,q){return p[0]-q[0]});STCA.marks=pick.map(function(x){return(x[0]+x[1])/2})}
function stSyEven(){if(!STCA)return;var N=stSyN(),d=STCA.buf.duration,a=STCA.s*d,z=STCA.e*d;STCA.marks=[];for(var i=1;i<N;i++)STCA.marks.push(a+(z-a)*i/N)}
function stSyUi(){var el=$('#stpn');if(!el||STPN!='sn')return;if(!STCA){el.innerHTML='<div class="stav"><p class="mu">'+t('st_sy0')+'</p></div>';return}el.innerHTML='<div class="stav"><p class="mu" id="stsyi"></p><p class="mu">'+t('st_sy_tip')+'</p><label>'+t('st_catr')+'</label><input type="range" id="stcas" min="0" max="1000" value="'+Math.round(STCA.s*1000)+'"><input type="range" id="stcae" min="0" max="1000" value="'+Math.round(STCA.e*1000)+'"><label>'+t('st_sy_se')+' <b id="stsys">'+STSY.sens+'%</b></label><input type="range" id="stsyse" min="1" max="15" step="1" value="'+STSY.sens+'"><label>'+t('st_sy_mn')+' <b id="stsym">'+STSY.min.toFixed(2)+'s</b></label><input type="range" id="stsymn" min="20" max="200" step="5" value="'+Math.round(STSY.min*100)+'"><div class="two"><button class="btn" data-stsy="auto">'+t('st_sy_auto')+'</button><button class="btn" data-stsy="even">'+t('st_sy_even')+'</button></div><div class="two" style="margin-top:8px"><button class="btn" data-stsy="play">'+ic('p')+t('st_sy_play')+'</button><button class="btn" data-stsy="clear">'+ic('x')+t('st_sy_clr')+'</button></div></div>';stSyDraw()}
function stSyStop(){var p=STSYP;STSYP=null;if(p){try{p.s.onended=null;p.s.stop()}catch(e){}try{p.ac.close()}catch(e){}}stSyDraw();msAbUi();stVrBtns()}
var STSD=null;
D.addEventListener('pointerdown',function(e){var cv=e.target;if(!cv||cv.id!='stwvc'||!STCA||STPN!='sn')return;var r=cv.getBoundingClientRect(),d=STCA.buf.duration,x=(e.clientX-r.left)/r.width*d,tol=14/r.width*d,bi=-1,bd=1e9;STCA.marks.forEach(function(m,i){var q=Math.abs(m-x);if(q<tol&&q<bd){bd=q;bi=i}});if(bi<0){if(STCA.marks.length<stSyN()-1){STCA.marks.push(x);bi=STCA.marks.length-1;STSD={i:bi,mv:true}}else return}else STSD={i:bi,mv:false};try{cv.setPointerCapture(e.pointerId)}catch(x2){}e.preventDefault();stSyDraw()});
D.addEventListener('pointermove',function(e){if(!STSD||!STCA)return;var cv=$('#stwvc');if(!cv)return;var r=cv.getBoundingClientRect(),d=STCA.buf.duration;STCA.marks[STSD.i]=Math.max(0,Math.min(d,(e.clientX-r.left)/r.width*d));STSD.mv=true;stSyDraw()});
D.addEventListener('pointerup',function(){if(!STSD||!STCA)return;if(!STSD.mv)STCA.marks.splice(STSD.i,1);STSD=null;stSyDraw()});
var STMUX=null;
function stMix(single,bufs,offs,tot){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,oc=new OC(2,Math.ceil((tot+.3)*48000),48000);function add(b,at){var s=oc.createBufferSource();s.buffer=b;s.connect(oc.destination);s.start(at)}if(single)add(single,offs[0]);else bufs.forEach(function(b,i){if(b)add(b,offs[i])});return oc.startRendering()}
function stWcRec(W,Hh,hasA,single,bufs,offs,tot,fps){if(!(window.VideoEncoder&&window.AudioEncoder&&window.VideoFrame&&window.AudioData)||W%2||Hh%2)return Promise.resolve(null);fps=fps||30;var ar=W*Hh,mb=ar/256,lv=[[245760,8192,'28'],[522240,8704,'2A'],[589824,22080,'32'],[983040,36864,'33'],[2073600,139264,'34']].filter(function(x){return mb*fps<=x[0]&&mb<=x[1]})[0]||[0,0,'34'],base={codec:'avc1.6400'+lv[2],width:W,height:Hh,bitrate:Math.round((ar>=8e6?18e6:ar>=3.6e6?12e6:ar>=2e6?8e6:ar>1e6?5e6:3.5e6)*(fps>30?1.5:1)),framerate:fps},cfgs=[Object.assign({hardwareAcceleration:'prefer-hardware'},base),base],acfg={codec:'mp4a.40.2',sampleRate:48000,numberOfChannels:2,bitrate:128000};
 function pick(i){if(i>=cfgs.length)return Promise.resolve(null);return VideoEncoder.isConfigSupported(cfgs[i]).then(function(r){return r.supported?cfgs[i]:pick(i+1)}).catch(function(){return pick(i+1)})}
 return stLoadMux().then(function(Mx){if(!Mx)return null;return Promise.all([pick(0),AudioEncoder.isConfigSupported(acfg)]).then(function(sp){var vcfg=sp[0];if(!vcfg||!sp[1].supported)return null;return(hasA?stMix(single,bufs,offs,tot):Promise.resolve(null)).then(function(mix){var tg=new Mx.ArrayBufferTarget(),mux=new Mx.Muxer({target:tg,video:{codec:'avc',width:W,height:Hh},audio:mix?{codec:'aac',sampleRate:48000,numberOfChannels:2}:undefined,fastStart:'in-memory',firstTimestampBehavior:'offset'}),R={mimeType:'video/mp4',blob:null,onstop:null,n:0,bad:false,fps:fps,hw:vcfg.hardwareAcceleration||'no-preference'},ve=new VideoEncoder({output:function(c,m){mux.addVideoChunk(c,m)},error:function(){R.bad=true}}),ae=null;ve.configure(vcfg);if(mix){ae=new AudioEncoder({output:function(c,m){mux.addAudioChunk(c,m)},error:function(){R.bad=true}});ae.configure(acfg)}
 R.start=function(){if(!mix)return;var L=mix.getChannelData(0),Rr=mix.numberOfChannels>1?mix.getChannelData(1):L,st=48000;for(var p=0;p<L.length;p+=st){var n=Math.min(st,L.length-p),d=new Float32Array(n*2);d.set(L.subarray(p,p+n),0);d.set(Rr.subarray(p,p+n),n);var ad=new AudioData({format:'f32-planar',sampleRate:48000,numberOfFrames:n,numberOfChannels:2,timestamp:Math.round(p/48000*1e6),data:d});ae.encode(ad);ad.close()}};
 R.q=function(){return ve.encodeQueueSize};
 R.pushAt=function(cv,k){var vf=new VideoFrame(cv,{timestamp:Math.round(k*1e6/fps),duration:Math.round(1e6/fps)});ve.encode(vf,{keyFrame:k%(fps*2)==0});vf.close();R.n++};
 R.stop=function(){var done=function(){if(R.stopped)return;R.stopped=true;try{mux.finalize();R.blob=R.bad?null:new Blob([tg.buffer],{type:'video/mp4'})}catch(e){R.blob=null}if(R.onstop)R.onstop()};Promise.all([ve.flush(),ae?ae.flush():0]).then(done).catch(done)};return R})})}).catch(function(){return null})}
function stWaitV(c,ms){return new Promise(function(r){var t0=performance.now();(function p(){if(c()||performance.now()-t0>ms)return r();setTimeout(p,4)})()})}
function stVbSeek2(v,tt){return new Promise(function(r){var dn=false,f=function(){if(dn)return;dn=true;v.removeEventListener('seeked',f);stWaitV(function(){return v.readyState>=2},5000).then(r)};v.addEventListener('seeked',f);setTimeout(f,9000);v.currentTime=tt})}
async function stVbSync(x,lt){var v=x.v,d=v.duration;if(!(d>0&&isFinite(d)))return;v.loop=false;var tt=lt%d,go=function(){try{var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){}};if(x.pt==null||tt<x.pt-.3||Math.abs(v.currentTime-tt)>.6){await stVbSeek2(v,tt);go()}else if(v.currentTime<tt-.02){if(v.paused)go();await stWaitV(function(){return v.currentTime>=tt-.02||v.ended},1500)}else if(v.currentTime>tt+.08){if(!v.paused)v.pause()}else if(v.paused&&!v.ended)go();x.pt=tt}
D.addEventListener('click',function(e){var x=e.target&&e.target.closest?e.target.closest('[data-sttl],[data-strt],[data-stqu],[data-stbgx],[data-stvr],[data-stsy]'):null;if(!x)return;var d=x.dataset;if(d.sttl)stOpen(d.sttl);else if(d.strt){STO.ratio=d.strt;P('sto',STO);D.querySelectorAll('[data-strt]').forEach(function(b){b.classList.toggle('on',b.dataset.strt==d.strt)});stPvSoon()}else if(d.stqu){if(x.disabled)return;STO.res=+d.stqu;P('sto',STO);D.querySelectorAll('[data-stqu]').forEach(function(b){b.classList.toggle('on',b.dataset.stqu==d.stqu)})}else if(d.stbgx!=null)stBgDel(+d.stbgx);else if(d.stvr){var a=d.stvr;if(a=='rec')stVrStart();else if(a=='pause')stVrPause(true);else if(a=='resume')stVrPause(false);else if(a=='stop'||a=='done')stVrStop();else if(a=='play')stVrPlay()}else if(d.stsy&&STCA){if(d.stsy=='auto')stSyAuto();else if(d.stsy=='even')stSyEven();else if(d.stsy=='clear')STCA.marks=[];else if(d.stsy=='play'){stSyPlay();return}stSyDraw()}});
D.addEventListener('change',function(e){var x=e.target;if(!x)return;if(x.id=='stcaf'&&x.files&&x.files[0]){var f=x.files[0];f.arrayBuffer().then(function(ab){stCaLoad(ab,f.name)});x.value=''}else if(x.id=='stbgm'&&x.files&&x.files.length){stBgAdd(x.files);x.value=''}else if(x.id=='strc'){stCaUi()}else if(x.id=='sttr'){var ta=$('#sttro');if(ta)ta.hidden=x.value!='__own'}});
D.addEventListener('input',function(e){var x=e.target;if(!x)return;if(x.id=='sttro'){P('stown',x.value);STPV.c={};stPvSoon();return}if(x.id=='stvrg'){var v=+x.value,gv=$('#stvrgv');if(gv)gv.textContent=v+'%';if(STRV)STRV.gn.gain.value=v/100;return}if(x.id=='stsyse'||x.id=='stsymn'){if(x.id=='stsyse')STSY.sens=+x.value;else STSY.min=+x.value/100;var a=$('#stsys'),b=$('#stsym');if(a)a.textContent=STSY.sens+'%';if(b)b.textContent=STSY.min.toFixed(2)+'s';return}if(STCA&&(x.id=='stcas'||x.id=='stcae')){var s=+$('#stcas').value/1000,en=+$('#stcae').value/1000;if(x.id=='stcas'&&s>en-.01){s=en-.01;x.value=Math.round(s*1000)}if(x.id=='stcae'&&en<s+.01){en=s+.01;x.value=Math.round(en*1000)}STCA.s=Math.max(0,s);STCA.e=Math.min(1,en);stSyDraw()}});
var STVO={ns:0,ec:0,ag:0,lc:0,nm:1,at:1},STRB=null,STRP=null,STRM=false;
var STOPSVG='<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
function stCaUi(){}
function stCaLoad(ab,name,opt){var AC=window.AudioContext||window.webkitAudioContext;if(!AC){toast(t('st_nov'));return}opt=opt||{};var ac=new AC();ac.decodeAudioData(ab,function(b){try{ac.close()}catch(e){}var ch,i,d;if(opt.norm){var pk=0;for(ch=0;ch<b.numberOfChannels;ch++){d=b.getChannelData(ch);for(i=0;i<d.length;i+=2){var v=Math.abs(d[i]);if(v>pk)pk=v}}if(pk>.01&&pk<.9){var g=.95/pk;for(ch=0;ch<b.numberOfChannels;ch++){d=b.getChannelData(ch);for(i=0;i<d.length;i++)d[i]*=g}}}
 b.sil=stSilence(b,.8);STCA={buf:b,name:name,src:opt.src||'file',s:0,e:1,pk:stPk(b,600),marks:[],raw:b,auto:1,aid:++msAid};if(opt.trim){var d0=b.getChannelData(0),a=0,z=d0.length-1;while(a<z&&Math.abs(d0[a])<.02)a++;while(z>a&&Math.abs(d0[z])<.02)z--;var pad=Math.floor(b.sampleRate*.15);STCA.s=Math.max(0,(a-pad)/d0.length);STCA.e=Math.min(1,(z+pad)/d0.length)}stSyAuto();stVrDone();if(STPN=='sn')stSyUi();stWvDraw();msAuto(opt)},function(){try{ac.close()}catch(e){}toast(t('st_err'))})}
function stVrFmt(s){s=Math.floor(s);return('0'+Math.floor(s/60)).slice(-2)+':'+('0'+s%60).slice(-2)}
function stVrIcon(cls,act,ico,lb){return'<button class="stvri '+cls+'" data-stvr="'+act+'" title="'+lb+'" aria-label="'+lb+'">'+ico+'</button>'}
function stVrStop(){var r=STRV;if(r){stVrPlayStop();try{r.rec.stop()}catch(e){}}}
function stVrPause(p){var r=STRV;if(!r)return;if(p&&!r.paused){try{r.rec.pause();r.rec.requestData()}catch(e){}r.acc+=performance.now()-r.t0;r.paused=true}else if(!p&&r.paused){stVrPlayStop();try{r.rec.resume()}catch(e){}r.t0=performance.now();r.paused=false}stVrBtns()}
function stVrPlayStop(){var p=STRP;STRP=null;if(p){try{p.a.pause()}catch(e){}try{URL.revokeObjectURL(p.u)}catch(e){}}}
function stVrPlay(){if(STRP){stVrPlayStop();stVrBtns();return}var r=STRV;if(!r&&STCA&&STCA.buf){if(MSPV.on){msPvStop(1);return}stSyPlay();return}if(r&&!r.paused)stVrPause(true);setTimeout(function(){var bl=STRV?new Blob(STRV.ch,{type:STRV.rec.mimeType||'audio/webm'}):STRB;if(!bl||!bl.size)return;var u=URL.createObjectURL(bl),a=new Audio(u);a.onended=function(){stVrPlayStop();stVrBtns()};var pr=a.play();if(pr&&pr.catch)pr.catch(function(){});STRP={a:a,u:u};stVrBtns()},r?250:0)}
var STAM='file',STPS=S('stps',1);
function stPsApply(){var b=$('.stbar');if(!b)return;var d=innerWidth>=900,L=d?[240,340,460]:[110,160,230];b.style.setProperty('--stph',L[Math.max(0,Math.min(2,STPS))]+'px');stPnFit();stWvDraw()}
function stPnFit(){var b=$('.stbar'),p=$('#stpn');if(!b||!p)return;var tp=parseInt(getComputedStyle(b).top)||0;p.style.maxHeight=Math.max(150,innerHeight-tp-b.offsetHeight-24)+'px'}
window.addEventListener('resize',function(){stPsApply()});
function stConfirm(msg,yes){var o=D.createElement('div');o.className='stcf';o.innerHTML='<div class="stcc"><p>'+esc(msg)+'</p><div class="two"><button class="btn" data-n="1">'+t('st_no')+'</button><button class="btn go" data-y="1">'+t('st_yes')+'</button></div></div>';o.addEventListener('click',function(e){var x=e.target;if(x===o||(x.closest&&x.closest('[data-n]'))){o.remove();return}if(x.closest&&x.closest('[data-y]')){o.remove();yes()}});D.body.appendChild(o)}
function stBgReady(){return Promise.all(STBG.map(function(m){if(m.vid)return new Promise(function(r){if(m.el.readyState>=2)return r();m.el.addEventListener('loadeddata',r,{once:true});setTimeout(r,3000)});return m.el.decode?m.el.decode().catch(function(){}):Promise.resolve()}))}
function stBgAdd(files){Array.prototype.forEach.call(files,function(f){var url=URL.createObjectURL(f),vid=/^video/.test(f.type)||/\.(mp4|webm|mov|m4v|3gp|mkv|ogv)$/i.test(f.name),el,m;if(vid){el=D.createElement('video');el.muted=true;el.defaultMuted=true;el.loop=true;el.playsInline=true;el.setAttribute('playsinline','');el.preload='auto';el.style.cssText='position:fixed;left:0;top:0;width:2px;height:2px;opacity:.01;pointer-events:none;z-index:-1';el.src=url;D.body.appendChild(el)}else{el=new Image();el.onerror=function(){var k=STBG.indexOf(m);if(k>=0){stBgDel(k);toast(t('st_err'))}};el.src=url}m={url:url,vid:vid,el:el,name:f.name};STBG.push(m)});stBgUi();stPvSoon()}
function stBgDel(i,q){var m=STBG[i];if(!m)return;try{URL.revokeObjectURL(m.url)}catch(e){}if(m.vid){try{m.el.pause();m.el.removeAttribute('src');m.el.load();m.el.remove()}catch(e){}}STBG.splice(i,1);if(!q){stBgUi();stPvSoon()}}
function stCaDel(){if(STRV){stVrStop()}stVrPlayStop();if(STSYP)stSyStop();STCA=null;STRB=null;STRM=false;STMS.tk++;STMS.st='none';if(STPN=='vr')stVrUi();if(STPN=='sn')stSyUi();toast(t('st_del'))}
function stVrDone(){var o=$('#stvrout');if(!o)return;if(!STCA){o.innerHTML='';return}o.innerHTML='<p class="mu">'+t('st_vr_ok')+'<br>'+esc(STCA.name)+' · '+STCA.buf.duration.toFixed(1)+'s</p><div class="stvrx"><button class="btn sm" data-sttl="sn">'+ic('auto')+t('stt_sn')+'</button><button class="btn sm" data-stdel="1">'+ic('x')+t('st_del')+'</button></div>'}
D.addEventListener('click',function(e){var x=e.target&&e.target.closest?e.target.closest('[data-stam],[data-stdel],[data-stpz],[data-stfps],[data-stpx]'):null;if(!x)return;var d=x.dataset;if(d.stam){if(STRV)return;STAM=d.stam;stVrUi()}else if(d.stdel)stCaDel();else if(d.stpz){STPS=(STPS+1)%3;P('stps',STPS);stPsApply()}else if(d.stfps){if(x.disabled)return;STO.fps=+d.stfps;P('sto',STO);D.querySelectorAll('[data-stfps]').forEach(function(b){b.classList.toggle('on',b.dataset.stfps==d.stfps)})}else if(d.stpx){var so2=$('#stout');if(so2)so2.innerHTML='';stOuSet(null)}});
function msFFT(re,im,inv){var n=re.length,i,j=0,k,m;for(i=0;i<n-1;i++){if(i<j){var tr=re[i];re[i]=re[j];re[j]=tr;tr=im[i];im[i]=im[j];im[j]=tr}k=n>>1;while(k<=j){j-=k;k>>=1}j+=k}
 for(m=2;m<=n;m<<=1){var h=m>>1,a=(inv?2:-2)*Math.PI/m,wr=Math.cos(a),wi=Math.sin(a);for(i=0;i<n;i+=m){var cr=1,ci=0;for(k=0;k<h;k++){var p=i+k,q=p+h,xr=re[q]*cr-im[q]*ci,xi=re[q]*ci+im[q]*cr;re[q]=re[p]-xr;im[q]=im[p]-xi;re[p]+=xr;im[p]+=xi;var nr=cr*wr-ci*wi;ci=cr*wi+ci*wr;cr=nr}}}
 if(inv)for(i=0;i<n;i++){re[i]/=n;im[i]/=n}}
function msBQ(type,f,q,sr){var w=2*Math.PI*f/sr,c=Math.cos(w),sn=Math.sin(w),al=sn/(2*q),b0,b1,b2,a0=1+al,a1=-2*c,a2=1-al;if(type=='hp'){b0=(1+c)/2;b1=-(1+c);b2=(1+c)/2}else if(type=='bp'){b0=al;b1=0;b2=-al}else{b0=(1-c)/2;b1=1-c;b2=(1-c)/2}return[b0/a0,b1/a0,b2/a0,a1/a0,a2/a0]}
function msBQRun(x,k){var o=new Float32Array(x.length),x1=0,x2=0,y1=0,y2=0,b0=k[0],b1=k[1],b2=k[2],a1=k[3],a2=k[4],i;for(i=0;i<x.length;i++){var v=x[i],y=b0*v+b1*x1+b2*x2-a1*y1-a2*y2;x2=x1;x1=v;y2=y1;y1=y;o[i]=y}return o}
function msRev(a){var n=a.length,o=new Float32Array(n);for(var i=0;i<n;i++)o[i]=a[n-1-i];return o}
function msZP(x,k){return msRev(msBQRun(msRev(msBQRun(x,k)),k))}
function msBlockDb(x,sr){var w=Math.max(1,Math.round(sr*.01)),nb=Math.ceil(x.length/w),lv=new Float32Array(nb),b,i;for(b=0;b<nb;b++){var s=b*w,e=Math.min(x.length,s+w),q=0;for(i=s;i<e;i++)q+=x[i]*x[i];lv[b]=10*Math.log10(q/Math.max(1,e-s)+1e-12)}return lv}
function msPct(lv,p){var so=Array.prototype.slice.call(lv).sort(function(a,b){return a-b});return so[Math.min(so.length-1,Math.floor(so.length*p))]}
function msFloorArr(lv,adapt){var n=lv.length,out=new Float32Array(n),g=msPct(lv,.1),k,j;if(!adapt||n<40){out.fill(g);return out}
 var W=Math.min(100,Math.max(10,n>>2)),st=5,pts=[],xs=[];
 for(k=0;k<n;k+=st){var a=Math.max(0,k-W),b=Math.min(n-1,k+W);pts.push(msPct(lv.subarray(a,b+1),.1));xs.push(k)}
 var sm=pts.map(function(v,i){var s=0,c=0;for(var q=Math.max(0,i-8);q<=Math.min(pts.length-1,i+8);q++){s+=pts[q];c++}return s/c});
 for(k=0;k<n;k++){var f=k/st,i0=Math.min(sm.length-1,Math.floor(f)),i1=Math.min(sm.length-1,i0+1),t=f-i0,loc=Math.min(sm[i0]*(1-t)+sm[i1]*t,g+12);out[k]=g*(1-adapt)+loc*adapt}
 return out}
function msSnr(x,sr){var lv=msBlockDb(x,sr);if(lv.length<20)return 0;return msPct(lv,.9)-Math.max(-85,msPct(lv,.1))}
function msLowMid(x,sr,dep,fl,fh,sens,adapt){if(dep<=0||x.length<sr/2)return x;if(fh<fl*1.2)fh=fl*1.2;
 var b=msZP(msZP(x,msBQ('hp',fl*.7,.7071,sr)),msBQ('lp',Math.min(fh*1.4,sr*.45),.7071,sr)),vc=msBQRun(msBQRun(x,msBQ('hp',400,.7071,sr)),msBQ('lp',3400,.7071,sr)),w=Math.max(1,Math.round(sr*.01)),lv0=msBlockDb(vc,sr),nb=lv0.length,lv=new Float32Array(nb),fa=msFloorArr(lv0,adapt),Tv=8+14*sens,gd=new Float32Array(nb),k,i,j;
 for(k=0;k<nb;k++){var sm=0,cn=0;for(j=Math.max(0,k-3);j<=Math.min(nb-1,k+3);j++){sm+=lv0[j];cn++}lv[k]=sm/cn}
 for(k=0;k<nb;k++){var m=lv[k]-fa[k],r=m<=Tv-3?1:m>=Tv+3?0:(Tv+3-m)/6;gd[k]=Math.pow(10,-dep*r/20)}
 var out=new Float32Array(x.length),g=1,ac=1-Math.exp(-1/(sr*.008)),rc=1-Math.exp(-1/(sr*.15));
 for(k=0;k<nb;k++){var tg=Math.max(gd[k],k+1<nb?gd[k+1]:0,k+2<nb?gd[k+2]:0),s=k*w,e=Math.min(x.length,s+w);for(i=s;i<e;i++){g+=(tg-g)*(tg>g?ac:rc);out[i]=x[i]+(g-1)*b[i]}}
 return out}
function msDenoise(x,sr,amt,adapt){adapt=adapt||0;return new Promise(function(ok){var N=1024,H=N>>2,B=N/2+1,len=x.length;if(len<N*2||amt<=0){ok(x);return}
 var win=new Float64Array(N),i,f;for(i=0;i<N;i++)win[i]=.5-.5*Math.cos(2*Math.PI*i/N);
 var nf=Math.floor((len-N)/H)+1,en=new Float32Array(nf);
 for(f=0;f<nf;f++){var s=0,o=f*H;for(i=0;i<N;i+=4){var v=x[o+i];s+=v*v}en[f]=s}
 var idx=[];for(f=0;f<nf;f++)idx.push(f);idx.sort(function(a,b){return en[a]-en[b]});
 var take=Math.max(8,Math.min(300,Math.floor(nf*.1))),nz=new Float64Array(B),re=new Float64Array(N),im=new Float64Array(N);
 for(var q=0;q<take&&q<nf;q++){var o2=idx[q]*H;for(i=0;i<N;i++){re[i]=x[o2+i]*win[i];im[i]=0}msFFT(re,im,0);for(i=0;i<B;i++)nz[i]+=Math.sqrt(re[i]*re[i]+im[i]*im[i])}
 var tk=Math.min(take,nf),fn0=0;for(i=0;i<B;i++){nz[i]/=tk;fn0+=nz[i]*nz[i]}
 var na=new Float64Array(B),fnz=fn0;for(i=0;i<B;i++)na[i]=nz[i];
 var out=new Float32Array(len),nrm=new Float64Array(len),al=1+3*amt,gmin=.34-.3*amt,prev=new Float64Array(B),g=new Float64Array(B),sm=new Float64Array(B),mg=new Float64Array(B);for(i=0;i<B;i++)prev[i]=1;
 f=0;
 function run(){var t0=Date.now();while(f<nf&&Date.now()-t0<28){var o3=f*H;for(i=0;i<N;i++){re[i]=x[o3+i]*win[i];im[i]=0}msFFT(re,im,0);
  var fe=0;for(i=0;i<B;i++){mg[i]=Math.sqrt(re[i]*re[i]+im[i]*im[i]);fe+=mg[i]*mg[i]}
  if(adapt>0){var sp=fe>fnz*8,aa=.02+.2*adapt;if(!sp){fnz+=(fe-fnz)*aa;for(i=0;i<B;i++)na[i]+=(mg[i]-na[i])*aa}else for(i=0;i<B;i++)if(mg[i]<na[i])na[i]=na[i]*.9+mg[i]*.1}
  for(i=0;i<B;i++){var nn=adapt>0?Math.max(na[i],nz[i]*.35):nz[i],m2=mg[i]*mg[i],n2=nn*nn*al*al*.5,gg=m2>1e-14?Math.sqrt(Math.max(0,1-n2/m2)):0;if(gg<gmin)gg=gmin;g[i]=gg}
  for(i=0;i<B;i++){var a=g[Math.max(0,i-1)],b=g[i],c=g[Math.min(B-1,i+1)];sm[i]=(a+2*b+c)/4}
  for(i=0;i<B;i++){var t=sm[i];t=t>prev[i]?prev[i]+(t-prev[i])*.7:prev[i]+(t-prev[i])*.25;prev[i]=t;re[i]*=t;im[i]*=t;if(i>0&&i<N/2){re[N-i]=re[i];im[N-i]=-im[i]}}
  msFFT(re,im,1);for(i=0;i<N;i++){out[o3+i]+=re[i]*win[i];nrm[o3+i]+=win[i]*win[i]}f++}
  if(f<nf){setTimeout(run,0);return}
  for(i=0;i<len;i++)out[i]=nrm[i]>1e-6?out[i]/nrm[i]:x[i];ok(out)}
 run()})}
function msGate(x,sr,amt,adapt){var lv=msBlockDb(x,sr),w=Math.max(1,Math.round(sr*.01)),nb=lv.length,b,i,s,e;if(nb<20||amt<=0)return x;
 var fl=msPct(lv,.1),sp=msPct(lv,.9);if(sp-fl<9)return x;var fa=msFloorArr(lv,adapt||0),k0=.12+.38*amt,op=new Uint8Array(nb),hold=0,HB=12,ol=false;
 for(b=0;b<nb;b++){var thr=fa[b]+(sp-fa[b])*k0;if(lv[b]>thr||(ol&&lv[b]>thr-3)){ol=true;hold=HB}else if(hold>0){hold--}else ol=false;op[b]=(ol||hold>0)?1:0}
 var cg=Math.pow(10,-(10+30*amt)/20),out=new Float32Array(x.length),g=1,ac=1-Math.exp(-1/(sr*.003)),rc=1-Math.exp(-1/(sr*.12));
 for(b=0;b<nb;b++){var o=op[b]||(b+1<nb&&op[b+1])||(b+2<nb&&op[b+2]),tg=o?1:cg;s=b*w;e=Math.min(x.length,s+w);for(i=s;i<e;i++){g+=(tg-g)*(tg>g?ac:rc);out[i]=x[i]*g}}
 return out}
function msLevel(chs,q){var mx=0,c,i,n=chs[0].length;for(c=0;c<chs.length;c++){var d=chs[c];for(i=0;i<n;i+=3){var v=Math.abs(d[i]);if(v>mx)mx=v}}if(mx<1e-6)return 0;var H=new Uint32Array(4096),tot=0;for(c=0;c<chs.length;c++){var d2=chs[c];for(i=0;i<n;i+=3){H[Math.min(4095,Math.floor(Math.abs(d2[i])/mx*4095))]++;tot++}}var cu=0,k;for(k=0;k<4096;k++){cu+=H[k];if(cu>=tot*q)return(k+1)/4096*mx}return mx}
function msLimit(chs,sr,ceilDb){var ceil=Math.pow(10,ceilDb/20),la=Math.max(2,Math.round(sr*.005)),n=chs[0].length,nc=chs.length,need=new Float32Array(n),i,c;
 for(i=0;i<n;i++){var pk=0;for(c=0;c<nc;c++){var v=Math.abs(chs[c][i]);if(v>pk)pk=v}need[i]=pk>ceil?ceil/pk:1}
 var m=new Float32Array(n),dq=new Int32Array(n+la+2),hd=0,tl=0;
 for(i=n-1;i>=0;i--){while(tl>hd&&dq[hd]>i+la)hd++;while(tl>hd&&need[i]<=need[dq[tl-1]])tl--;dq[tl++]=i;m[i]=need[dq[hd]]}
 var g=new Float32Array(n),sum=0,rel=1-Math.exp(-1/(sr*.08)),gl=1;
 for(i=0;i<n;i++){sum+=m[i];if(i>=la)sum-=m[i-la];var cnt=Math.min(i+1,la),av=sum/cnt;if(av>gl)gl+=(av-gl)*rel;else gl=av;g[i]=gl}
 for(c=0;c<nc;c++){var d=chs[c];for(i=0;i<n;i++){var y=d[i]*g[i];d[i]=y>ceil?ceil:y<-ceil?-ceil:y}}}
var RNN={w:null,mode:'',core:null,st:0,rd:null,id:0,rid:0,cb:{},toasted:0,err:'',urls:[
 'https://cdn.jsdelivr.net/gh/haris24de-afk/KFGQPC-Uthman-Taha-Naskh-@main/rnnoise-sync.js',
 'https://cdn.jsdelivr.net/gh/haris24de-afk/KFGQPC-Uthman-Taha-Naskh-@main/rnnoise.js',
 'https://cdn.jsdelivr.net/npm/@jitsi/rnnoise-wasm@0.2.1/dist/rnnoise-sync.js',
 'https://cdn.jsdelivr.net/npm/@jitsi/rnnoise-wasm@0.2.0/dist/rnnoise-sync.js',
 'https://cdn.jsdelivr.net/npm/@jitsi/rnnoise-wasm@0.2.0/dist/rnnoise.js']};
var RNC={k:'',y:null,v:null};
function rnnCore(){
 var M=null;
 function short(u){return u.replace(/^https:\/\/cdn\.jsdelivr\.net\//,'').replace('KFGQPC-Uthman-Taha-Naskh-','repo')}
 function fac(u){return new Promise(function(ok,no){
  var sync=/sync\.js$/.test(u);
  if(typeof importScripts=='function'){try{importScripts(u);var f0=sync?self.createRNNWasmModuleSync:self.createRNNWasmModule;if(typeof f0=='function'){ok(f0);return}}catch(e){}}
  import(u).then(function(ns){var f=ns&&(ns.default||(sync?ns.createRNNWasmModuleSync:ns.createRNNWasmModule));if(typeof f=='function')ok(f);else no(new Error('no factory'))},function(e){no(new Error('import: '+(e&&e.message||e)))})})}
 /* never resolve a promise WITH the Emscripten module (it has a .then and would loop forever) */
 function make(f,base){return new Promise(function(ok,no){
  var m;try{m=f({locateFile:function(p){return base+p}})}catch(e){no(e);return}
  function fin(r){if(!r||!r._rnnoise_create||!r._rnnoise_process_frame||!r._malloc||!r._free){no(new Error('bad module'));return}M=r;ok()}
  if(m&&typeof m.then=='function'){m.then(function(r){r=r||m;try{delete r.then}catch(e){}fin(r)},no)}else fin(m)})}
 function load(urls,i,errs){
  if(i>=urls.length)return Promise.reject(new Error(errs.join(' | ')));
  var u=urls[i],base=u.slice(0,u.lastIndexOf('/')+1);
  return fac(u).then(function(f){return make(f,base)}).catch(function(e){errs.push(short(u)+' > '+String(e&&e.message||e).slice(0,70));return load(urls,i+1,errs)})}
 function heap(){return M.HEAPF32||new Float32Array((M.HEAPU8||M.HEAP8).buffer)}
 /* one pass: 480-sample frames @ 48 kHz scaled to the 16-bit range; the engine delays its output by one frame, so one silent frame is appended and the first output frame dropped */
 function pass(x){
  var n=x.length,F=Math.ceil(n/480)+1,st=M._rnnoise_create(0),ip=M._malloc(1920),op=M._malloc(1920),out=new Float32Array(F*480),vad=new Float32Array(F),f,i,h,o,q,v;
  if(!st||!ip||!op)throw new Error('alloc failed');
  for(f=0;f<F;f++){
   h=heap();o=ip>>2;
   for(i=0;i<480;i++){v=f*480+i<n?x[f*480+i]:0;h[o+i]=v*32768}
   vad[f]=M._rnnoise_process_frame(st,op,ip);
   h=heap();q=op>>2;
   for(i=0;i<480;i++){v=h[q+i]/32768;out[f*480+i]=v>1?1:v<-1?-1:v}
  }
  M._free(ip);M._free(op);try{M._rnnoise_destroy(st)}catch(e){}
  var y=new Float32Array(n),vv=new Float32Array(F-1);
  y.set(out.subarray(480,480+n));
  for(f=0;f<F-1;f++)vv[f]=vad[f+1];
  return{y:y,vad:vv}}
 return{load:function(u){return load(u,0,[])},pass:pass}}
function rnnWSrc(){return 'var CSPV=[];self.addEventListener("securitypolicyviolation",function(e){CSPV.push(e.violatedDirective+" "+String(e.blockedURI).slice(0,50))});\nvar CORE=('+rnnCore.toString()+')();\nself.onmessage=function(e){var d=e.data;if(d.t=="init"){CORE.load(d.urls).then(function(){self.postMessage({t:"ready"})},function(er){self.postMessage({t:"err",m:String(er&&er.message||er)+(CSPV.length?" [CSP: "+CSPV.join(", ")+"]":"")})})}else if(d.t=="run"){try{var r=CORE.pass(d.x);if(d.p>1)r.y=CORE.pass(r.y).y;self.postMessage({t:"done",id:d.id,y:r.y,vad:r.vad},[r.y.buffer,r.vad.buffer])}catch(er){self.postMessage({t:"fail",id:d.id,m:String(er&&er.message||er)})}}};'}
function rnnMsg(e){return String(e&&e.message||e)}
function rnnUi(){var e=$('#msrnst');if(!e)return;e.className='msrnst s'+RNN.st;e.innerHTML='<i></i><span>'+t(['ms_rn_s0','ms_rn_ld','ms_rn_ok','ms_rn_er'][RNN.st])+(RNN.st==3&&RNN.err?'<small>'+RNN.err.slice(0,420).replace(/[<>&]/g,'')+'</small>':'')+'</span>'+(RNN.st==3?'<button type="button" data-rnretry="1">'+t('ms_rn_rt')+'</button>':'')}
function rnnInitW(){return new Promise(function(ok,no){var w=null,to=0,done=0;
 function fail(er){if(done)return;done=1;clearTimeout(to);try{if(w)w.terminate()}catch(e){}RNN.w=null;no(er)}
 try{
  if(!window.Worker||!window.WebAssembly||!window.Blob||!window.URL)throw new Error('unsupported browser');
  w=new Worker(URL.createObjectURL(new Blob([rnnWSrc()],{type:'text/javascript'})));
  to=setTimeout(function(){fail(new Error('worker timeout'))},25000);
  w.onmessage=function(e){var d=e.data;
   if(d.t=='ready'){if(done)return;done=1;clearTimeout(to);RNN.w=w;ok({mode:'w',w:w})}
   else if(d.t=='err')fail(new Error(d.m));
   else if(d.t=='done'||d.t=='fail'){var c=RNN.cb[d.id];delete RNN.cb[d.id];if(c){if(d.t=='done')c.ok(d);else c.no(new Error(d.m))}}};
  w.onerror=function(ev){if(!done)fail(new Error('worker: '+((ev&&ev.message)||'error')));else Object.keys(RNN.cb).forEach(function(k){var c=RNN.cb[k];delete RNN.cb[k];c.no(new Error('worker error'))})};
  w.postMessage({t:'init',urls:RNN.urls})
 }catch(er){fail(er)}})}
function rnnInitM(){var cv=[],h=function(e){cv.push(e.violatedDirective+' '+String(e.blockedURI).slice(0,50))};document.addEventListener('securitypolicyviolation',h);RNN.core=rnnCore();
 return RNN.core.load(RNN.urls).then(function(){document.removeEventListener('securitypolicyviolation',h);return{mode:'m'}},function(er){document.removeEventListener('securitypolicyviolation',h);throw new Error(rnnMsg(er)+(cv.length?' [CSP: '+cv.join(', ')+']':''))})}
function rnnInit(){if(RNN.rd)return RNN.rd;
 RNN.st=1;RNN.err='';rnnUi();
 RNN.rd=rnnInitW().catch(function(e1){RNN.err='W: '+rnnMsg(e1);return rnnInitM().catch(function(e2){RNN.err+=' || M: '+rnnMsg(e2);throw new Error(RNN.err)})}).then(function(h){RNN.mode=h.mode;RNN.st=2;rnnUi();return h},function(er){RNN.st=3;rnnUi();throw er});
 RNN.rd.catch(function(){});
 return RNN.rd}
function rnnRun(x,passes){return rnnInit().then(function(h){
 if(h.mode=='m')return new Promise(function(ok,no){setTimeout(function(){try{var r=RNN.core.pass(x);if(passes>1)r.y=RNN.core.pass(r.y).y;ok(r)}catch(e){no(e)}},0)});
 return new Promise(function(ok,no){var id=++RNN.id,a=new Float32Array(x);RNN.cb[id]={ok:ok,no:no};h.w.postMessage({t:'run',id:id,x:a,p:passes},[a.buffer])})})}
function rnnWarm(){if(STMS.on&&STMS.e.rn&&RNN.st==0)rnnInit().catch(function(){})}
function rnnFail(){if(!RNN.toasted){RNN.toasted=1;toast(t('ms_rn_er'))}}
document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('[data-rnretry]'):null;if(!b)return;try{if(RNN.w)RNN.w.terminate()}catch(x){}RNN.w=null;RNN.core=null;RNN.rd=null;RNN.st=0;RNN.toasted=0;RNN.err='';rnnInit().then(function(){if(typeof msSched=='function')msSched()}).catch(function(){})});
function msRs(x,a,b){if(a==b)return Promise.resolve(x);var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!OC)return Promise.reject(new Error('no offline audio'));
 var n=Math.max(1,Math.round(x.length*b/a)),oc=new OC(1,n,b),ab=oc.createBuffer(1,x.length,a);ab.copyToChannel(x,0);var s=oc.createBufferSource();s.buffer=ab;s.connect(oc.destination);s.start(0);
 var pr=oc.startRendering();if(!(pr&&pr.then))pr=new Promise(function(ok){oc.oncomplete=function(e){ok(e.renderedBuffer)}});
 return pr.then(function(r){return new Float32Array(r.getChannelData(0))})}
function msRnn(x,sr,amt,passes,vd,rk){var n=x.length,ck=rk+'|'+passes,hit=RNC.k===ck&&RNC.y,
 src=hit?Promise.resolve({y:RNC.y,v:RNC.v}):msRs(x,sr,48000).then(function(x48){return rnnRun(x48,passes)}).then(function(r){if(r.y.length<48000*240){RNC.k=ck;RNC.y=r.y;RNC.v=r.vad}else{RNC.k='';RNC.y=null;RNC.v=null}return{y:r.y,v:r.vad}});
 return src.then(function(r){var y=new Float32Array(r.y),vad=r.v,F=vad.length,f,i,j,ny=y.length;
  if(vd>0&&F>8){var gl=Math.pow(10,-vd/20),sp=new Uint8Array(F),g=1,ac=1-Math.exp(-1/(48000*.004)),rc=1-Math.exp(-1/(48000*.09));
   for(f=0;f<F;f++)if(vad[f]>=.3)for(j=Math.max(0,f-4);j<=Math.min(F-1,f+9);j++)sp[j]=1;
   for(f=0;f<F;f++){var tg=sp[f]?1:gl,s0=f*480,e0=Math.min(ny,s0+480);for(i=s0;i<e0;i++){g+=(tg-g)*(tg>g?ac:rc);y[i]*=g}}}
  return msRs(y,48000,sr)}).then(function(yb){var out=new Float32Array(n),a=Math.max(0,Math.min(1,amt)),m=Math.min(n,yb.length),i;for(i=0;i<m;i++)out[i]=x[i]*(1-a)+yb[i]*a;for(;i<n;i++)out[i]=x[i]*(1-a);return out})}
function msHiBand(x,sr,dep,fl,fh,sens,adapt){if(dep<=0||x.length<sr/2)return x;fh=Math.min(fh,sr*.45);if(fh<fl*1.3)fh=fl*1.3;
 var b=msZP(msZP(x,msBQ('hp',fl,.7071,sr)),msBQ('lp',fh,.7071,sr)),lq=msBQ('lp',1300,.7071,sr),vc=msBQRun(msBQRun(msBQRun(x,msBQ('hp',120,.7071,sr)),lq),lq),w=Math.max(1,Math.round(sr*.01)),lv0=msBlockDb(vc,sr),lvh=msBlockDb(b,sr),nb=lv0.length,fa=msFloorArr(lv0,adapt),Tv=8+14*sens,r=new Float32Array(nb),gd=new Float32Array(nb),k,i,j;
 for(k=0;k<nb;k++){var sm=0,sh=0,cn=0;for(j=Math.max(0,k-2);j<=Math.min(nb-1,k+2);j++){sm+=lv0[j];sh+=lvh[j];cn++}var m=sm/cn-fa[k];if(sm/cn<sh/cn-10)m=0;r[k]=m<=Tv-3?1:m>=Tv+3?0:(Tv+3-m)/6}
 for(k=0;k<nb;k++){var mn=1;for(j=Math.max(0,k-10);j<=Math.min(nb-1,k+10);j++)if(r[j]<mn)mn=r[j];gd[k]=Math.pow(10,-dep*mn/20)}
 var out=new Float32Array(x.length),g=1,ac=1-Math.exp(-1/(sr*.006)),rc=1-Math.exp(-1/(sr*.12));
 for(k=0;k<nb;k++){var s=k*w,e=Math.min(x.length,s+w),tg=gd[k];for(i=s;i<e;i++){g+=(tg-g)*(tg>g?ac:rc);out[i]=x[i]+(g-1)*b[i]}}
 return out}
var MSD={e:{dn:1,lc:1,hm:1,ng:1,ds:1,wm:1,cl:1,ar:1,rv:1,cp:1,lm:1,xn:1,ad:1,rn:1,hx:1,lp:0,we:0},v:{rn:85,rq:1,rg:8,hx:14,hl:2500,hh:9000,hs:60,dn:30,lc:85,ls:24,hm:0,ng:60,ds:3.5,wm:3.8,cl:3,ar:3,rv:12,rd:2.6,cp:4.5,ct:-16,lm:-.5,ld:4,xn:14,xl:200,xh:350,xs:60,ad:60,lp:12000,we:20,wt:380,wf:34}};
var STMS=(function(){var s=S('stms2',null),o={on:1,files:1,pre:'qari',st:'',tk:0,e:Object.assign({},MSD.e),v:Object.assign({},MSD.v)};if(s&&typeof s=='object'){if(s.on!=null)o.on=s.on?1:0;if(s.files!=null)o.files=s.files?1:0;if(s.pre)o.pre=s.pre;if(s.e)Object.keys(o.e).forEach(function(k){if(s.e[k]!=null)o.e[k]=s.e[k]?1:0});if(s.v)Object.keys(o.v).forEach(function(k){if(typeof s.v[k]=='number'&&isFinite(s.v[k]))o.v[k]=s.v[k]})}return o})();
function msSave(){P('stms2',{on:STMS.on,files:STMS.files,pre:STMS.pre,e:STMS.e,v:STMS.v})}
var MSF=[
 {g:0,k:'lc',n:'ms_lc',d:'ms_lc_d',tg:'24 dB/oct',mn:40,mx:200,st:5,u:' Hz',x:[{k:'ls',n:'ms_ls',chips:[[24,'24 dB/oct'],[48,'48 dB/oct']]}]},
 {g:0,k:'xn',n:'ms_xn',d:'ms_xn_d',tg:'200–350 Hz',mn:0,mx:24,st:1,u:' dB',neg:1,x:[{k:'xl',n:'ms_xl',mn:120,mx:300,st:5,u:' Hz'},{k:'xh',n:'ms_xh',mn:250,mx:500,st:5,u:' Hz'},{k:'xs',n:'ms_xs',mn:0,mx:100,st:5,u:'%'}]},
 {g:0,k:'ad',n:'ms_ad',d:'ms_ad_d',tg:'RMS · Spectral',mn:0,mx:100,st:5,u:'%'},
 {g:1,k:'hm',n:'ms_hm',d:'ms_hm_d',tg:'Notch',chips:[[50,'50 Hz'],[60,'60 Hz'],[0,'50 + 60']]},
 {g:1,k:'dn',n:'ms_dn',d:'ms_dn_d',tg:'Spectral',mn:0,mx:100,st:5,u:'%'},
 {g:1,k:'ng',n:'ms_ng',d:'ms_ng_d',tg:'Gate',mn:0,mx:100,st:5,u:'%'},
 {g:2,k:'ds',n:'ms_ds',d:'ms_ds_d',tg:'7 kHz',mn:0,mx:10,st:.5,u:' dB',neg:1},
 {g:2,k:'wm',n:'ms_wm',d:'ms_wm_d',tg:'130 Hz',mn:0,mx:8,st:.1,u:' dB',pos:1},
 {g:2,k:'cl',n:'ms_cl',d:'ms_cl_d',tg:'4.25 kHz',mn:0,mx:6,st:.1,u:' dB',pos:1},
 {g:2,k:'ar',n:'ms_ar',d:'ms_ar_d',tg:'10–12 kHz',mn:0,mx:8,st:.1,u:' dB',pos:1},
 {g:2,k:'rv',n:'ms_rv',d:'ms_rv_d',tg:'Dry / Wet',mn:0,mx:50,st:1,u:'%',x:[{k:'rd',n:'ms_rd',mn:1,mx:4,st:.1,u:' s'}]},
{g:2,k:'we',n:'ms_we',d:'ms_we_d',tg:'Delay · Feedback',mn:0,mx:50,st:1,u:'%',x:[{k:'wt',n:'ms_wt',mn:120,mx:800,st:10,u:' ms'},{k:'wf',n:'ms_wf',mn:0,mx:70,st:1,u:'%'}]},
{g:2,k:'lp',n:'ms_lp',d:'ms_lp_d',tg:'24 dB/oct',mn:6000,mx:20000,st:250,u:' Hz'},
 {g:3,k:'cp',n:'ms_cp',d:'ms_cp_d',tg:'3-Band',mn:1,mx:8,st:.5,u:' : 1',x:[{k:'ct',n:'ms_ct',mn:-30,mx:-6,st:1,u:' dB'}]},
 {g:3,k:'lm',n:'ms_lm',d:'ms_lm_d',tg:'Lookahead',mn:-3,mx:0,st:.1,u:' dB',x:[{k:'ld',n:'ms_ld',mn:0,mx:12,st:.5,u:' dB',pos:1}]},
 {g:4,k:'rn',n:'ms_rn',d:'ms_rn_d',tg:'RNNoise · WASM',mn:0,mx:100,st:5,u:'%',x:[{k:'rq',n:'ms_rq',chips:[[1,'1×'],[2,'2×']]},{k:'rg',n:'ms_rg',mn:0,mx:30,st:1,u:' dB',neg:1}]},
 {g:4,k:'hx',n:'ms_hx',d:'ms_hx_d',tg:'2.5–9 kHz',mn:0,mx:30,st:1,u:' dB',neg:1,x:[{k:'hl',n:'ms_hl',mn:1500,mx:5000,st:100,u:' Hz'},{k:'hh',n:'ms_hh',mn:5000,mx:12000,st:250,u:' Hz'},{k:'hs',n:'ms_hs',mn:0,mx:100,st:5,u:'%'}]}
];
function msFind(k){for(var i=0;i<MSF.length;i++){if(MSF[i].k==k)return MSF[i];var x=MSF[i].x||[];for(var j=0;j<x.length;j++)if(x[j].k==k)return x[j]}return null}
function msFmt(f,v){var s=(+v).toFixed(f.st<1?1:0);if(f.neg)s='-'+s;else if(f.pos)s='+'+s;return s+(f.u||'')}
function msEff(){return!!(STMS.on&&msCount()>0&&(STMS.files||STAM=='rec'))}
function msCount(){return Object.keys(STMS.e).filter(function(k){return STMS.e[k]}).length}
function msIR(oc,sr,dec){var len=Math.max(1,Math.floor(sr*(dec+.25))),ir=oc.createBuffer(2,len,sr),c,i,sd,er=[.013,.021,.029,.043,.061,.087];
 for(c=0;c<2;c++){var d=ir.getChannelData(c),lp=0;sd=12345+c*977;
  for(i=0;i<len;i++){sd=(sd*1664525+1013904223)>>>0;var nz=sd/2147483648-1,tt=i/sr,env=Math.pow(10,-3*tt/dec),a=Math.min(.96,.3+tt*.2);lp=lp*a+nz*(1-a);d[i]=lp*env*(tt<.01?tt/.01:1)}
  for(i=0;i<er.length;i++){var p=Math.floor((er[i]+(c?.0019:0))*sr);if(p<len)d[p]+=(.9-i*.12)*(i%2?-1:1)*.35}}
 return ir}
function msMB(oc,inp,thr,ratio){var out=oc.createGain(),f1=250,f2=3000;
 function fl(type,fr,src){var b=oc.createBiquadFilter();b.type=type;b.frequency.value=fr;b.Q.value=-3.0103;src.connect(b);return b}
 function lr(type,fr,src){return fl(type,fr,fl(type,fr,src))}
 function cp(src){var c=oc.createDynamicsCompressor();c.threshold.value=thr;c.knee.value=6;c.ratio.value=ratio;c.attack.value=.012;c.release.value=.22;src.connect(c);return c}
 var lo=lr('lowpass',f1,inp),hi1=lr('highpass',f1,inp),mid=lr('lowpass',f2,hi1),hi=lr('highpass',f2,hi1),ap=oc.createBiquadFilter();
 ap.type='allpass';ap.frequency.value=f2;ap.Q.value=.7071;lo.connect(ap);
 [ap,mid,hi].forEach(function(b){cp(b).connect(out)});return out}
function msEchoTail(V){var fb=Math.max(.05,Math.min(.75,V.wf/100)),k=Math.min(8,Math.ceil(Math.log(.01)/Math.log(fb)));return Math.min(3.5,V.wt/1000*1.18*k)}
function msEcho(oc,n,V){var sp=oc.createChannelSplitter(2),mg=oc.createChannelMerger(2),mix=oc.createGain(),wet=oc.createGain(),dry=oc.createGain(),t0=V.wt/1000,fb=Math.min(.75,V.wf/100);
 dry.gain.value=1;wet.gain.value=V.we/100*1.2;n.connect(dry);n.connect(sp);
 [0,1].forEach(function(c){var d=oc.createDelay(2),f=oc.createBiquadFilter(),h=oc.createBiquadFilter(),g=oc.createGain();
  d.delayTime.value=t0*(c?1.18:1);f.type='lowpass';f.frequency.value=2800;f.Q.value=-3.0103;h.type='highpass';h.frequency.value=160;h.Q.value=-3.0103;g.gain.value=fb;
  sp.connect(d,c,0);d.connect(f);f.connect(h);h.connect(g);g.connect(d);h.connect(mg,0,c)});
 mg.connect(wet);dry.connect(mix);wet.connect(mix);return mix}
function msStage2(oc,s,E,V,sr){var n=s;
 function mk(type,f,q,gn){var b=oc.createBiquadFilter();b.type=type;b.frequency.value=f;if(q!=null)b.Q.value=q;if(gn!=null)b.gain.value=gn;n.connect(b);n=b}
 if(E.ds&&V.ds>0)mk('peaking',7000,2.2,-V.ds);
 if(E.wm&&V.wm>0)mk('lowshelf',130,null,V.wm);
 if(E.cl&&V.cl>0)mk('peaking',4250,1.1,V.cl);
 if(E.ar&&V.ar>0){mk('highshelf',10000,null,V.ar);mk('peaking',12000,.8,V.ar*.5)}
 if(E.cp)n=msMB(oc,n,V.ct,V.cp);
 if(E.we&&V.we>0)n=msEcho(oc,n,V);
 if(E.rv&&V.rv>0){var dry=oc.createGain(),wet=oc.createGain(),cv=oc.createConvolver(),dl=oc.createDelay(.1),hp=oc.createBiquadFilter(),lp=oc.createBiquadFilter(),mix=oc.createGain();
  dry.gain.value=1;wet.gain.value=V.rv/100*1.8;cv.buffer=msIR(oc,sr,V.rd);dl.delayTime.value=.02;hp.type='highpass';hp.frequency.value=180;hp.Q.value=-3.0103;lp.type='lowpass';lp.frequency.value=7500;lp.Q.value=-3.0103;
  n.connect(dry);n.connect(dl);dl.connect(cv);cv.connect(hp);hp.connect(lp);lp.connect(wet);dry.connect(mix);wet.connect(mix);n=mix}
 if(E.lp&&V.lp<20000){mk('lowpass',V.lp,-3.0103);mk('lowpass',V.lp,-3.0103)}
 return n}
function msRender(chs,sr,len,nch,build){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!OC)return Promise.reject(new Error('no offline audio'));
 var oc=new OC(nch,Math.max(1,len),sr),ab=oc.createBuffer(chs.length,chs[0].length,sr);chs.forEach(function(a,i){ab.copyToChannel(a,i)});
 var s=oc.createBufferSource();s.buffer=ab;var last=build(oc,s);last.connect(oc.destination);s.start(0);
 var pr=oc.startRendering();if(pr&&pr.then)return pr;return new Promise(function(ok){oc.oncomplete=function(e){ok(e.renderedBuffer)}})}
function msProcess(raw,E,V){var sr=raw.sampleRate,len=raw.length,nc=raw.numberOfChannels,x=new Float32Array(len),c,i;
 for(c=0;c<nc;c++){var d=raw.getChannelData(c);for(i=0;i<len;i++)x[i]+=d[i]/nc}
 var tR=(E.rv&&V.rv>0)?Math.min(2.5,V.rd*.8):0,tE=(E.we&&V.we>0)?msEchoTail(V):0,tail=Math.round(sr*Math.min(4,tR+tE)),ad=E.ad?V.ad/100:0,snr0=msSnr(x,sr),rk=(raw._rid||(raw._rid=++RNN.rid))+'|'+[E.hm,V.hm,E.lc,V.lc,V.ls,E.xn,V.xn,V.xl,V.xh,V.xs,ad].join(',');
 return msRender([x],sr,len,1,function(oc,s){var n=s;function mk(type,f,q){var b=oc.createBiquadFilter();b.type=type;b.frequency.value=f;b.Q.value=q;n.connect(b);n=b}
   if(E.hm)(V.hm==50?[50,100]:V.hm==60?[60,120]:[50,100,60,120]).forEach(function(f){mk('notch',f,35)});
   if(E.lc){for(var q=0,nn=V.ls==48?4:2;q<nn;q++)mk('highpass',V.lc,-3.0103)}return n})
 .then(function(b1){var y=new Float32Array(b1.getChannelData(0));if(E.xn)y=msLowMid(y,sr,V.xn,V.xl,V.xh,V.xs/100,ad);return y})
 .then(function(y){return(E.rn&&V.rn>0)?msRnn(y,sr,V.rn/100,V.rq,V.rg,rk).catch(function(){rnnFail();return y}):y})
 .then(function(y){if(E.hx)y=msHiBand(y,sr,V.hx,V.hl,V.hh,V.hs/100,ad);return E.dn?msDenoise(y,sr,V.dn/100,ad):y})
 .then(function(y){if(E.ng)y=msGate(y,sr,V.ng/100,ad);return msRender([y],sr,len+tail,2,function(oc,s){return msStage2(oc,s,E,V,sr)})})
 .then(function(b2){var ch=[b2.getChannelData(0),b2.getChannelData(1)],n=ch[0].length,k,j;
   if(E.lm){var lv=msLevel(ch,.997);if(lv>1e-5){var g=.45*Math.pow(10,V.ld/20)/lv;for(k=0;k<2;k++)for(j=0;j<n;j++)ch[k][j]*=g}msLimit(ch,sr,V.lm)}
   else{var pk=0;for(k=0;k<2;k++)for(j=0;j<n;j++){var a=Math.abs(ch[k][j]);if(a>pk)pk=a}if(pk>.99){var g2=.99/pk;for(k=0;k<2;k++)for(j=0;j<n;j++)ch[k][j]*=g2}}
   b2.snr=[snr0,msSnr(ch[0],sr)];return b2})}
function msApply(){var c=STCA;if(!c||!c.raw)return Promise.resolve();if(MSPV.on){MSPV.dirty=1;return Promise.resolve()}var tk=++STMS.tk,use=STMS.on&&msCount()>0&&(c.src=='rec'||STMS.files);
 if(!use){if(c.buf!==c.raw)msSwap(c,c.raw);c.ms=0;c.snr=null;msStatus('off');return Promise.resolve()}
 msStatus('busy');
 return msProcess(c.raw,STMS.e,STMS.v).then(function(nb){if(tk!==STMS.tk||STCA!==c)return;c.snr=nb.snr||null;msSwap(c,nb);c.ms=1;msStatus('ok')}).catch(function(){if(tk!==STMS.tk||STCA!==c)return;if(c.buf!==c.raw)msSwap(c,c.raw);c.ms=0;c.snr=null;msStatus('err');toast(t('ms_err'))})}
function msSwap(c,nb){var od=c.buf.duration,sS=c.s*od,nd=nb.duration,full=c.e>=.999;if(STSYP)stSyStop();
 nb.sil=stSilence(nb,.8);c.buf=nb;c.pk=stPk(nb,600);c.s=Math.max(0,Math.min(.99,sS/nd));c.e=full?1:Math.min(1,c.e*od/nd);
 if(c.auto)stSyAuto();else c.marks=c.marks.filter(function(m){return m<nd});
 if(STPN=='sn')stSyUi();stVrDone();stWvDraw()}
function msAuto(opt){if(!STCA)return;if(MSPV.on)msPvStop(0);MSPV.w0=null;msHPush();if(STMS.on&&msCount()>0&&((opt&&opt.src=='rec')||STMS.files))msApply();else{STCA.ms=0;msStatus('off')}}
var msTm=0;
function msSched(){clearTimeout(msTm);if(!STCA||!STCA.raw){msStatus('none');return}if(MSPV.on){MSPV.dirty=1;msStatus('wait');msTm=setTimeout(function(){msPvRun(MSPV.pos)},300);return}msStatus('wait');msTm=setTimeout(msApply,450)}
function msSumTxt(){if(STMS.st=='busy'||STMS.st=='wait')return t('ms_work');if(!msEff())return t('ms_bypass');return t('ms_p_'+STMS.pre)+' · '+msCount()+'/'+MSF.length}
function msStatus(s){if(s)STMS.st=s;var k=STCA?(STMS.st||'off'):'none',m={busy:'ms_work',wait:'ms_wait',ok:'ms_done',off:'ms_bypass',err:'ms_err',none:'ms_noaud'},e=$('#msst'),b=$('#msbs'),p=$('#mspl'),tx=t(m[k]||'ms_bypass');
 if(k=='ok'&&STCA&&STCA.snr&&!MSPV.on&&STCA.snr[0]<70&&STCA.snr[1]>STCA.snr[0])tx+=' · SNR '+Math.round(STCA.snr[0])+' → '+Math.round(STCA.snr[1])+' dB';
 if(e){e.textContent=tx;e.className=(k=='busy'||k=='wait')?'busy':''}if(b)b.textContent=msSumTxt();if(p){p.textContent=msEff()?'ON':'OFF';p.classList.toggle('on',!!msEff())}
 D.querySelectorAll('[data-msab]').forEach(function(x){x.disabled=!STCA});stWvDraw()}
function msBtn(){var on=msEff();return'<button class="msbtn" data-msopen="1"><span class="msi">'+ic('sparkle')+'</span><span class="msbt"><b>'+t('ms_title')+'</b><small id="msbs">'+msSumTxt()+'</small></span><span class="mspill'+(on?' on':'')+'" id="mspl">'+(on?'ON':'OFF')+'</span></button>'}
function msRowHtml(f){var k=f.k,on=STMS.e[k],v=STMS.v[k],h='<div class="msr'+(on?'':' off')+'" data-k="'+k+'"><div class="msrh"><label class="mssw"><input type="checkbox" data-mse="'+k+'"'+(on?' checked':'')+'><i></i></label><div class="msnm"><b>'+t(f.n)+'<em>'+f.tg+'</em></b><small>'+t(f.d)+'</small></div>'+(f.chips?'':'<span class="msv" id="msv-'+k+'">'+msFmt(f,v)+'</span>')+'</div>';
 if(f.chips)h+='<div data-chk="'+k+'">'+stChips('data-mshm',f.chips,v)+'</div>';else h+='<input type="range" data-msv="'+k+'" min="'+f.mn+'" max="'+f.mx+'" step="'+f.st+'" value="'+v+'">';
 (f.x||[]).forEach(function(x){if(x.chips)h+='<div class="msx chp"><span>'+t(x.n)+'</span><div data-chk="'+x.k+'">'+stChips('data-mshm',x.chips,STMS.v[x.k])+'</div></div>';else h+='<div class="msx"><span>'+t(x.n)+'</span><input type="range" data-msv="'+x.k+'" min="'+x.mn+'" max="'+x.mx+'" step="'+x.st+'" value="'+STMS.v[x.k]+'"><span class="msv" id="msv-'+x.k+'">'+msFmt(x,STMS.v[x.k])+'</span></div>'});
 return h+(k=='rn'?'<div class="msrnst" id="msrnst"></div>':'')+'</div>'}
function msBody(){return[4,0,1,2,3].map(function(g){return'<h5>'+t('ms_g'+g)+'</h5>'+MSF.filter(function(f){return f.g==g}).map(msRowHtml).join('')}).join('')}
function msPresHtml(){return['qari','pro','clean','nat','traffic','off','custom'].filter(function(k){return k!='custom'||STMS.pre=='custom'}).map(function(k){return'<button class="'+(STMS.pre==k?'on':'')+'" data-mspre="'+k+'"'+(k=='custom'?' disabled':'')+'>'+t('ms_p_'+k)+'</button>'}).join('')}
function msPresChips(){var p=$('#msps');if(p)p.innerHTML=msPresHtml()}
function msShRefresh(){var b=$('#msbd'),c=$('.msc'),m=$('.msc [data-msm]');if(b)b.innerHTML=msBody();rnnUi();rnnWarm();msPresChips();if(c)c.classList.toggle('moff',!STMS.on);if(m)m.checked=!!STMS.on}
function msAbUi(){var a=MSPV.on?MSPV.ab:(STSYP?STSYP.ab:'');D.querySelectorAll('[data-msab]').forEach(function(b){b.classList.toggle('on',a==b.dataset.msab)});D.querySelectorAll('[data-mspv]').forEach(function(b){b.classList.toggle('on',!!MSPV.on);var q=b.querySelector('.mspvs');if(q)q.textContent=MSPV.on?'ON':'OFF'})}
function msShClose(){if(MSPV.on)msPvStop(true);['msh','mssh'].forEach(function(id){var o=$('#'+id);if(o){o.classList.remove('open');setTimeout(function(){if(o.parentNode)o.remove()},220)}})}
function msShOpen(){var old=$('#msh');if(old)old.remove();var sp=$('.stbar .stpv')||$('.stbar'),ref=sp,top=ref?Math.round(ref.getBoundingClientRect().bottom)+6:72,o=D.createElement('div');o.className='msh';o.id='msh';o.style.top=top+'px';
 o.innerHTML='<div class="msc'+(STMS.on?'':' moff')+'"><div class="mshd"><div class="mstt"><b>'+t('ms_title')+'</b><small id="msst"></small></div><button class="msxb" data-msun="undo" aria-label="'+t('ms_undo')+'" title="'+t('ms_undo')+'" disabled>'+msSvg('<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>')+'</button><button class="msxb" data-msun="redo" aria-label="'+t('ms_redo')+'" title="'+t('ms_redo')+'" disabled>'+msSvg('<path d="M15 14l5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>')+'</button><label class="mssw big"><input type="checkbox" data-msm="1"'+(STMS.on?' checked':'')+'><i></i></label><button class="msxb" data-msclose="1" aria-label="close">'+ic('x')+'</button></div><div class="msps" id="msps">'+msPresHtml()+'</div><label class="agrr msfl"><input type="checkbox" data-msfl="1"'+(STMS.files?' checked':'')+'><span>'+t('ms_files')+'</span></label><div class="msbd" id="msbd">'+msBody()+'</div><div class="mspw" id="mspw"><div class="mspw1"><span>'+t('ms_pw')+'</span><b id="mspwt"></b>'+stChips('data-mspl',[[3,'3 s'],[5,'5 s'],[10,'10 s']],MSPV.len)+'<button class="btn sm" data-mspwh="1">'+t('ms_pw_here')+'</button></div><input type="range" id="mspws" min="0" max="1" step=".1" value="0" aria-label="'+t('ms_pw')+'"></div><div class="msft"><button class="btn sm msbpv'+(MSPV.on?' on':'')+'" data-mspv="1">'+ic('p')+t('ms_pv')+' <b class="mspvs">'+(MSPV.on?'ON':'OFF')+'</b></button><button class="btn sm" data-msab="org">'+ic('p')+t('ms_orig')+'</button><button class="btn sm go" data-msab="mas">'+ic('p')+t('ms_mast')+'</button></div></div>';
 ['touchstart','touchmove'].forEach(function(ev){o.addEventListener(ev,function(e){e.stopPropagation()},{passive:true})});
 D.body.appendChild(o);requestAnimationFrame(function(){o.classList.add('open')});msStatus();msAbUi();msHUi();msPvUiW();rnnUi();rnnWarm()}
function msPreset(id){if(id=='custom')return;var e={},v=Object.assign({},MSD.v),K=Object.keys(MSD.e);K.forEach(function(k){e[k]=1});e.lp=0;e.we=0;
 if(id=='pro'){e.lp=e.we=1;e.ng=0;e.ar=0;v.lc=80;v.ls=24;v.ds=4;v.wm=4.5;v.cl=1.5;v.rv=34;v.rd=3.2;v.we=20;v.wt=380;v.wf=34;v.lp=11000;v.cp=3;v.ct=-18;v.lm=-1;v.ld=3;v.dn=25;v.rn=70;v.rg=6;v.hx=10;v.xn=10;v.xs=50;v.ad=50}else if(id=='clean'){e.wm=e.cl=e.ar=e.rv=0;v.dn=45;v.ng=55;v.cp=3;v.rn=100;v.hx=18}else if(id=='nat'){e.ng=e.ds=e.wm=e.cl=e.ar=e.rv=e.xn=0;v.dn=20;v.cp=2.5;v.ct=-20;v.ld=2;v.rn=60;v.rg=0;v.hx=8}else if(id=='traffic'){v.ls=48;v.lc=95;v.xn=20;v.xs=75;v.dn=55;v.ng=70;v.ad=80;v.rn=100;v.rq=2;v.rg=12;v.hx=20}else if(id=='off'){K.forEach(function(k){e[k]=0})}
 STMS.e=e;STMS.v=v;STMS.pre=id;STMS.on=1;msSave();msShRefresh();msSched();msStatus();msHSoon()}
var MSH={a:[],i:-1},msHT=0,msAid=0;
function msSJ(v){if(v===undefined)return'null';if(v&&typeof v=='object'){if(Array.isArray(v))return'['+v.map(msSJ).join(',')+']';return'{'+Object.keys(v).sort().map(function(k){return JSON.stringify(k)+':'+msSJ(v[k])}).join(',')+'}'}return JSON.stringify(v)}
function msHM(){return{on:STMS.on,pre:STMS.pre,files:STMS.files,e:STMS.e,v:STMS.v}}
function msHG(){var g=Object.assign({},STO);if(!Array.isArray(g.ws)){delete g.ws;delete g.wsk}return g}
function msHSnap(){var c=STCA,d=c?c.buf.duration:1;return msSJ({g:msHG(),m:msHM(),aid:c?c.aid:0,a:c?{ss:c.s*d,es:c.e*d,full:c.e>=.999?1:0,k:c.marks.slice(),au:c.auto?1:0}:null})}
function msHUi(){D.querySelectorAll('[data-msun=undo]').forEach(function(u){u.disabled=!(MSH.i>0)});D.querySelectorAll('[data-msun=redo]').forEach(function(r){r.disabled=!(MSH.i<MSH.a.length-1)})}
function msHInit(){MSH.a=[msHSnap()];MSH.i=0;msHUi()}
function msHPush(){clearTimeout(msHT);msHT=0;if(!MSH.a.length){msHInit();return}var s=msHSnap();if(MSH.a[MSH.i]===s)return;MSH.a=MSH.a.slice(0,MSH.i+1);MSH.a.push(s);if(MSH.a.length>80)MSH.a.shift();MSH.i=MSH.a.length-1;msHUi()}
function msHSoon(){clearTimeout(msHT);msHT=setTimeout(msHPush,300)}
function msGRefresh(){try{if(STPN)stPanel();stSumTxt();stPrevSoon();stPvSoon()}catch(e){}}
function msVib(n){if(MSX.hp&&navigator.vibrate){try{navigator.vibrate(n)}catch(e){}}}
function msHGo(d){if(msHT){clearTimeout(msHT);msHPush()}var j=MSH.i+d;if(j<0||j>=MSH.a.length)return;var o=JSON.parse(MSH.a[j]),cm=msSJ(o.m)!==msSJ(msHM()),cg=msSJ(o.g)!==msSJ(msHG()),c=STCA;MSH.i=j;
 STMS.on=o.m.on;STMS.pre=o.m.pre;STMS.files=o.m.files;STMS.e=o.m.e;STMS.v=o.m.v;msSave();
 if(cg){STO=Object.assign({},STD,o.g);P('sto',STO);msGRefresh();msSetRefresh()}
 if(c&&o.a&&o.aid==c.aid){var D0=c.buf.duration;c.s=Math.max(0,Math.min(.99,o.a.ss/D0));c.e=o.a.full?1:Math.min(1,o.a.es/D0);c.marks=o.a.k.slice();c.auto=o.a.au}
 msShRefresh();if(STPN=='sn')stSyUi();stVrDone();if(cm)msSched();msStatus();stWvDraw();MSH.a[j]=msHSnap();msHUi();msVib(12);setTimeout(function(){if(MSH.i===j&&!msHT)MSH.a[j]=msHSnap()},1200)}
var MSPV={on:0,tk:0,p:null,pos:0,ab:'mas',dirty:0,len:S('mspvl',5),w0:null},msPvT=0;
function msSlice(raw,ws,we){var sr=raw.sampleRate,a=Math.floor(ws*sr),b=Math.min(raw.length,Math.floor(we*sr)),n=Math.max(1,b-a),OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,ab=new OC(1,1,sr).createBuffer(raw.numberOfChannels,n,sr),c;for(c=0;c<raw.numberOfChannels;c++)ab.getChannelData(c).set(raw.getChannelData(c).subarray(a,b));return ab}
function msPvKill(){var p=MSPV.p;MSPV.p=null;if(p){try{p.s.onended=null;p.s.stop()}catch(e){}try{p.ac.close()}catch(e){}}}
function msPvWin(){var c=STCA,D0=c.buf.duration,ts=c.s*D0,te=Math.min(c.raw.duration,c.e*D0),len=Math.min(MSPV.len,Math.max(1,te-ts)),w0=MSPV.w0==null?ts:MSPV.w0;w0=Math.max(ts,Math.min(w0,Math.max(ts,te-len)));return{w0:w0,w1:Math.min(te,w0+len),ts:ts,te:te}}
function msPvUiW(){var m=$('#msh');if(m){var c=m.querySelector('.msc');if(c)c.classList.toggle('pv',!!MSPV.on)}D.querySelectorAll('[data-mspl]').forEach(function(b){b.classList.toggle('on',+b.dataset.mspl==MSPV.len)});var sl=$('#mspws'),lb=$('#mspwt');if(sl&&STCA){var W=msPvWin(),D0=STCA.buf.duration,len=W.w1-W.w0;sl.min=W.ts;sl.max=Math.max(W.ts,W.te-len);sl.step=.1;if(document.activeElement!==sl)sl.value=W.w0;if(lb)lb.textContent=msFmtT(W.w0)+' – '+msFmtT(W.w1)}}
function msPvStart(){if(!STCA||!STCA.raw){toast(t('ms_noaud'));return}if(STSYP)stSyStop();MSPV.on=1;MSPV.ab='mas';MSPV.dirty=0;msAbUi();msPvUiW();msPvRun(null);msVib(10)}
function msPvStop(full){var was=MSPV.on;MSPV.on=0;MSPV.tk++;msPvKill();if(was&&STCA)STCA.cur=MSPV.pos;msAbUi();msPvUiW();stWvDraw();stVrBtns();if(was&&full&&MSPV.dirty){MSPV.dirty=0;msApply()}}
function msPvMove(sec){var c=STCA;if(!c||!MSPV.on)return;var W=msPvWin(),len=W.w1-W.w0;MSPV.w0=Math.max(W.ts,Math.min(sec-len/2,Math.max(W.ts,W.te-len)));MSPV.pos=MSPV.w0;clearTimeout(msPvT);msPvT=setTimeout(function(){msPvRun(MSPV.w0)},250);msPvUiW();stWvDraw()}
function msPvRun(pos){var c=STCA;if(!c||!c.raw||!MSPV.on)return;var tk=++MSPV.tk,Dr=c.raw.duration,W=msPvWin(),lo=W.w0,hi=W.w1;if(hi-lo<.1){lo=0;hi=Dr}
 var a=Math.min(Math.max(pos!=null?pos:lo,lo),hi-.05),ws=Math.max(0,lo-3),we=Math.min(Dr,hi+1);MSPV.pos=a;
 var use=STMS.on&&msCount()>0&&MSPV.ab!='org',seg=msSlice(c.raw,ws,we);msStatus('busy');
 (use?msProcess(seg,STMS.e,STMS.v):Promise.resolve(seg)).then(function(nb){if(tk!==MSPV.tk||!MSPV.on||STCA!==c)return;msPvPlay(nb,ws,lo,hi,MSPV.p?Math.min(Math.max(MSPV.pos,lo),hi-.05):a);msStatus('ok')}).catch(function(){if(tk===MSPV.tk)msStatus('err')})}
function msPvPlay(buf,ws,ls,le,start){msPvKill();var AC=window.AudioContext||window.webkitAudioContext,ac=new AC(),s=ac.createBufferSource();try{ac.resume()}catch(e){}s.buffer=buf;s.connect(ac.destination);
 var l0=Math.max(0,ls-ws),l1=Math.min(buf.duration,le-ws);if(l1-l0<.3){l0=0;l1=buf.duration}s.loop=true;s.loopStart=l0;s.loopEnd=l1;var off=Math.min(Math.max(start-ws,l0),l1-.05);s.start(0,off);
 var me=MSPV.p={ac:ac,s:s,ws:ws,off:off,t0:ac.currentTime,l0:l0,l1:l1};
 (function lp(){if(MSPV.p!==me)return;var x=me.off+ac.currentTime-me.t0;if(x>=me.l1)x=me.l0+((x-me.l0)%(me.l1-me.l0));if(!MSTR.drag)MSPV.pos=me.ws+x;stWvDraw();requestAnimationFrame(lp)})()}
var MSTR={drag:0,res:0,wd:0,vd:0,m:''},MSX={gd:S('stgd',0)?1:0,hp:S('mshp',1)?1:0};
function msFmtT(s){s=Math.max(0,s||0);var m=Math.floor(s/60),x=Math.floor(s%60);return m+':'+(x<10?'0':'')+x}
function msSvg(p){return'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'}
function msIcUndo(){return msSvg('<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>')}
function msIcRedo(){return msSvg('<path d="M15 14l5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>')}
function msIcSet(){return msSvg('<path d="M4 8h8M19 8h1M4 16h1M11 16h9"/><circle cx="15.5" cy="8" r="2.5"/><circle cx="8" cy="16" r="2.5"/>')}
function msTrMode(){return(cur.t=='vid'&&(STPN=='vr'||STPN=='sn'))?'a':'b'}
function msApplyGd(){var b=$('.stbar');if(b)b.classList.toggle('gd',!!MSX.gd)}
function msTrRender(){var el=$('#mstr');msApplyGd();if(!el)return;var m=msTrMode();if(el.dataset.m===m&&el.innerHTML)return;el.dataset.m=m;el.className='mstr';
 el.innerHTML=(m=='a'?'<div class="mstr1"><span id="mstc">0:00</span><input type="range" id="mstsk" min="0" max="1000" step="1" value="0" aria-label="seek"><span id="mstd">0:00</span></div>':'')+'<div class="mstr2"><div class="mstu"><button id="msundo" data-msun="undo" title="'+t('ms_undo')+'" aria-label="'+t('ms_undo')+'" disabled>'+msIcUndo()+'</button><button id="msredo" data-msun="redo" title="'+t('ms_redo')+'" aria-label="'+t('ms_redo')+'" disabled>'+msIcRedo()+'</button></div>'+(m=='a'?'<div class="stvrb" id="stvrbt"></div>':(cur.t=='vid'?'<div class="stpc" id="stpc"><button class="stpcb" data-mspvp="1" id="mspvp" aria-label="play / pause"></button><span id="stpt">0:00</span><input type="range" id="stpsk" min="0" max="1000" value="0" aria-label="seek"></div>':'<span class="mstsp"></span>'))+'<button class="msgb" data-msset="1" title="'+t('ms_set')+'" aria-label="'+t('ms_set')+'">'+msIcSet()+'</button></div>';
 if(m=='a')stVrBtns();msHUi();msTrUpd()}
function msTrUpd(){var m=MSTR.m=msTrMode(),sk=$('#mstsk');
 if(sk&&m=='a'){var c=$('#mstc'),d=$('#mstd'),tx,q=STCA,dur=q?q.buf.duration:0,pos=(MSPV.on&&MSPV.p)?MSPV.pos:STSYP?STSYP.pos:(q&&q.cur!=null?q.cur:(q?q.s*dur:0)),r=STRV;sk.disabled=!q||!!r;
  if(r){var el=(r.acc+(r.paused?0:performance.now()-r.t0))/1000;tx=msFmtT(el);if(!MSTR.drag)sk.value=0;if(d&&d.textContent!='')d.textContent=''}else{if(!MSTR.drag)sk.value=dur?Math.round(Math.max(0,Math.min(1,pos/dur))*1000):0;tx=msFmtT(pos);if(d){var dt=msFmtT(dur);if(d.textContent!=dt)d.textContent=dt}}if(c&&c.textContent!=tx)c.textContent=tx}
 var cv0=$('#stpv'),gd=$('#stgd');if(cv0&&gd&&cv0.offsetWidth){var l0=cv0.offsetLeft,w0=cv0.offsetWidth,t0=cv0.offsetTop,h0=cv0.offsetHeight,key=l0+'/'+w0+'/'+t0+'/'+h0;if(gd._k!==key){gd._k=key;{gd.style.inset='auto';gd.style.margin='0';gd.style.left=(l0+w0*.06)+'px';gd.style.top=(t0+h0*.06)+'px';gd.style.width=(w0*.88)+'px';gd.style.height=(h0*.88)+'px'}}}
 var pk=$('#stpsk');if(pk){var tot=STPV.tot||10,vt=STPV.vt||0;pk.max=Math.round(tot*100);if(!MSTR.vd)pk.value=Math.round(vt*100);var t2=$('#stpt'),x2=msFmtT(vt);if(t2&&t2.textContent!=x2)t2.textContent=x2;var pb=$('#mspvp');if(pb&&pb._p!==!!STPV.pause){pb._p=!!STPV.pause;pb.innerHTML=ic(STPV.pause?'p':'u')}}}
function msSeekPre(sec){var c=STCA;if(!c)return;sec=Math.max(0,Math.min(c.buf.duration-.01,sec));if(!MSTR.drag){MSTR.drag=1;MSTR.res=!!STSYP;if(STSYP){c.cur=STSYP.pos;stSyStop()}}c.cur=sec;if(MSPV.on)MSPV.pos=sec;stWvDraw()}
function msSeekEnd(){if(!MSTR.drag)return;MSTR.drag=0;if(!STCA)return;if(MSPV.on)msPvRun(STCA.cur);else if(MSTR.res)stSyPlay();MSTR.res=0;stWvDraw()}
function stPvReset(){STPV.vt=0;STPV.last=0;return performance.now()}
function stPvClock(tot){var n=performance.now(),P=STPV,dt=P.last?(n-P.last)/1000:0;if(dt>.25)dt=0;if(!P.pause&&!P.sk)P.vt=(P.vt||0)+dt;P.last=n;P.tot=tot;if(!(P.vt>=0))P.vt=0;P.vt=P.vt%tot;msTrUpd();return P.vt}
function msSetBody(){var vid=cur.t=='vid',mx=stMaxRes(),h='',sw=function(a,on,tx){return'<label class="msrow"><span>'+tx+'</span><span class="mssw"><input type="checkbox" '+a+'="1"'+(on?' checked':'')+'><i></i></span></label>'},card=function(ti,b){return'<div class="msr msg"><h6>'+ti+'</h6>'+b+'</div>'};
 h+=card(t('ms_s_out'),'<div class="msx chp"><span>'+t('ms_s_ratio')+'</span>'+stChips('data-strt',Object.keys(STR).map(function(x){return[x,STR[x][2]]}),STO.ratio)+'</div>'+(vid?'<div class="msx chp"><span>'+t('st_fps')+'</span>'+stChips('data-stfps',[[24,'24'],[30,'30'],[60,'60',mx<2]],STO.fps||30)+'</div>':'')+'<div class="msx chp"><span>'+t('ms_s_qual')+'</span>'+stChips('data-stqu',[[1,'720p'],[2,'1080p'],[3,'1440p'],[4,'2160p']].map(function(x){return[x[0],x[1],x[0]>mx]}),Math.min(STO.res||2,mx))+'</div>');
 h+=card(t('ms_s_prev'),'<div class="msx chp"><span>'+t('ms_s_size')+'</span>'+stChips('data-msps',[[0,'S'],[1,'M'],[2,'L']],STPS)+'</div>'+sw('data-msgd',MSX.gd,t('ms_s_gd'))+sw('data-mshp',MSX.hp,t('ms_s_hp')));
 if(vid)h+=card(t('ms_s_au'),'<button class="btn sm msbigb" data-msopen="1">'+ic('sparkle')+t('ms_s_mast')+'</button>');
 h+=card(t('ms_s_en'),'<p class="msen" id="msen">'+((window.VideoEncoder&&window.AudioEncoder&&window.VideoFrame&&window.AudioData)?t('ms_s_fast'):t('ms_s_rt'))+'</p>');
 h+=card(t('ms_s_mt'),'<button class="btn sm msbigb dng" data-msrst="1">'+t('ms_s_rst')+'</button>');
 return h}
function msSetRefresh(){var b=$('#mssh .msbd');if(b)b.innerHTML=msSetBody()}
function msSetOpen(){msShClose();var sp=$('.stbar .stpv')||$('.stbar'),top=sp?Math.round(sp.getBoundingClientRect().bottom)+6:72,o=D.createElement('div');o.className='msh';o.id='mssh';o.style.top=top+'px';
 o.innerHTML='<div class="msc"><div class="mshd"><div class="mstt"><b>'+t('ms_set')+'</b><small>'+t('ms_set_d')+'</small></div><button class="msxb" data-msun="undo" aria-label="'+t('ms_undo')+'" disabled>'+msIcUndo()+'</button><button class="msxb" data-msun="redo" aria-label="'+t('ms_redo')+'" disabled>'+msIcRedo()+'</button><button class="msxb" data-msclose="1" aria-label="close">'+ic('x')+'</button></div><div class="msbd">'+msSetBody()+'</div></div>';
 ['touchstart','touchmove'].forEach(function(ev){o.addEventListener(ev,function(e){e.stopPropagation()},{passive:true})});
 D.body.appendChild(o);requestAnimationFrame(function(){o.classList.add('open')});msHUi();
 if(window.VideoEncoder&&window.AudioEncoder&&window.VideoFrame&&window.AudioData){stLoadMux().then(function(m){var e=$('#msen');if(e)e.textContent=m?t('ms_s_fast'):t('ms_s_nomux')})}}
function msPvTog(){STPV.pause=!STPV.pause;msTrUpd();msVib(8)}
D.addEventListener('click',function(e){var x=e.target&&e.target.closest?e.target.closest('[data-msopen],[data-msclose],[data-mspre],[data-mshm],[data-msab],[data-mspv],[data-msun],[data-mspvp],[data-msset],[data-mspl],[data-mspwh],[data-msps],[data-msrst],[data-sttl],#stpv'):null;if(!x)return;var d=x.dataset;
 if(d.msopen!=null){msShOpen()}else if(d.msclose!=null)msShClose();
 else if(d.msset!=null)msSetOpen();
 else if(d.mspre){if(!x.disabled)msPreset(d.mspre)}
 else if(d.mshm!=null){var w=x.closest('[data-chk]'),k=w?w.dataset.chk:'hm';STMS.v[k]=+d.mshm;STMS.pre='custom';msSave();if(w)w.querySelectorAll('.stch').forEach(function(b){b.classList.toggle('on',b===x)});msPresChips();msSched();msHSoon()}
 else if(d.mspv!=null){if(MSPV.on)msPvStop(true);else msPvStart()}
 else if(d.mspl){MSPV.len=+d.mspl;P('mspvl',MSPV.len);msPvUiW();if(MSPV.on)msPvRun(null)}
 else if(d.mspwh!=null){if(STCA){MSPV.w0=STSYP?STSYP.pos:(MSPV.on?MSPV.pos:(STCA.cur!=null?STCA.cur:null));msPvUiW();if(MSPV.on)msPvRun(null)}}
 else if(d.msps!=null){STPS=+d.msps;P('stps',STPS);stPsApply();x.parentNode.querySelectorAll('.stch').forEach(function(b){b.classList.toggle('on',b===x)})}
 else if(d.msrst!=null){msShClose();stOpen('re')}
 else if(d.msun){msHGo(d.msun=='undo'?-1:1)}
 else if(d.mspvp!=null||x.id=='stpv'){if(cur.t=='vid')msPvTog()}
 else if(d.msab){if(!STCA){toast(t('ms_noaud'));return}if(MSPV.on){MSPV.ab=d.msab;msAbUi();msPvRun(MSPV.pos);return}var was=STSYP&&STSYP.ab==d.msab,p=STSYP?STSYP.pos:null;if(STSYP)stSyStop();if(p!=null)STCA.cur=p;if(!was)stSyPlay(d.msab);msAbUi()}
 else if(d.sttl)msShClose()});
D.addEventListener('input',function(e){var x=e.target;if(!x)return;
 if(x.id=='mstsk'){if(MSTR.m=='a'&&STCA)msSeekPre(+x.value/1000*STCA.buf.duration);return}
 if(x.id=='stpsk'){MSTR.vd=1;STPV.sk=1;STPV.vt=+x.value/100;msTrUpd();return}
 if(x.id=='mspws'){MSPV.w0=+x.value;clearTimeout(msPvT);msPvT=setTimeout(function(){if(MSPV.on)msPvRun(null)},250);var W=STCA?msPvWin():null,lb=$('#mspwt');if(W&&lb)lb.textContent=msFmtT(W.w0)+' – '+msFmtT(W.w1);return}
 if(!x.dataset||!x.dataset.msv)return;var k=x.dataset.msv,f=msFind(k),l=$('#msv-'+k);if(!f)return;STMS.v[k]=+x.value;if(l)l.textContent=msFmt(f,+x.value);STMS.pre='custom';msSave();msPresChips();msSched()});
D.addEventListener('change',function(e){var x=e.target;if(!x)return;
 if(x.id=='mstsk'){msSeekEnd();return}
 if(x.id=='stpsk'){MSTR.vd=0;STPV.sk=0;return}
 if(x.id=='stcas'||x.id=='stcae'){msHSoon();return}
 if(!x.dataset)return;
 if(x.dataset.msgd!=null){MSX.gd=x.checked?1:0;P('stgd',MSX.gd);msApplyGd();return}
 if(x.dataset.mshp!=null){MSX.hp=x.checked?1:0;P('mshp',MSX.hp);return}
 if(x.dataset.mse){var k=x.dataset.mse,r=x.closest('.msr');STMS.e[k]=x.checked?1:0;if(r)r.classList.toggle('off',!x.checked);STMS.pre='custom';msSave();msPresChips();msSched();msStatus();msHSoon()}
 else if(x.dataset.msm){STMS.on=x.checked?1:0;var c=$('.msc');if(c)c.classList.toggle('moff',!STMS.on);msSave();msSched();msStatus();msHSoon()}
 else if(x.dataset.msfl){STMS.files=x.checked?1:0;msSave();msStatus();if(STCA&&STCA.src!='rec')msSched();msHSoon()}
 else if(x.dataset.msv)msHSoon()});
['click','input','change'].forEach(function(ev){D.addEventListener(ev,function(e){if(cur.v!='studio'||stIsHome()||cur.t=='code'||cur.t=='font')return;var tg=e.target;if(tg&&tg.closest&&tg.closest('[data-msun]'))return;msHSoon()},true)});
D.addEventListener('keydown',function(e){if(e.key=='Escape'){msShClose();return}var tg=e.target&&e.target.tagName;if(tg=='INPUT'||tg=='TEXTAREA'||tg=='SELECT')return;if((e.ctrlKey||e.metaKey)&&cur.v=='studio'&&!stIsHome()&&cur.t!='code'&&cur.t!='font'&&cur.t!='cal'&&cur.t!='dec'){var k=String(e.key).toLowerCase();if(k=='z'){e.preventDefault();msHGo(e.shiftKey?1:-1)}else if(k=='y'){e.preventDefault();msHGo(1)}}});
window.addEventListener('popstate',msShClose);
function msWvX(e){var cv=e.target,r=cv.getBoundingClientRect();return Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))}
function msWvAct(e){var sec=msWvX(e)*STCA.buf.duration;if(MSPV.on)msPvMove(sec);else msSeekPre(sec)}
D.addEventListener('pointerdown',function(e){var tg=e.target;if(!tg||tg.id!='stwvc'||!STCA)return;if(STPN=='sn'){STCA.auto=0;return}if(STPN=='vr'&&!STRV){MSTR.wd=1;try{tg.setPointerCapture(e.pointerId)}catch(x){}msWvAct(e)}},true);
D.addEventListener('pointermove',function(e){if(MSTR.wd&&STCA)msWvAct(e)},true);
function msPtUp(){if(MSTR.wd){MSTR.wd=0;if(!MSPV.on)msSeekEnd()}msHSoon()}
D.addEventListener('pointerup',msPtUp,true);
D.addEventListener('pointercancel',msPtUp,true);
D.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('[data-stsy]'):null;if(b&&STCA){STCA.auto=(b.dataset.stsy=='auto')?1:(b.dataset.stsy=='even'||b.dataset.stsy=='clear')?0:STCA.auto}},true);
function msWvMode(k){var b=$('.stbar');if(!b)return;var on=cur.t=='vid'&&(k=='vr'||k=='sn');b.classList.toggle('wvm',on);b.classList.toggle('wvs',on&&k=='sn');msTrRender();if(on)requestAnimationFrame(function(){stWvDraw()})}
function stWvCv(){var cv=$('#stwvc');if(!cv)return null;var r=cv.getBoundingClientRect();if(r.width<10||r.height<10)return null;var dp=Math.min(2,window.devicePixelRatio||1),W=Math.round(r.width*dp),H=Math.round(r.height*dp);if(cv.width!=W||cv.height!=H){cv.width=W;cv.height=H}cv._dp=dp;return cv}
function stWvBg(c,W,H){var g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1d1708');g.addColorStop(1,'#0c0903');c.fillStyle=g;c.fillRect(0,0,W,H);c.fillStyle='rgba(255,255,255,.05)';for(var i=1;i<4;i++)c.fillRect(0,Math.round(H*i/4),W,1)}
function stWvIdle(c,W,H,dp,tx){var n=Math.floor(W/(4*dp)),i;c.globalAlpha=.3;c.fillStyle=stAcc();for(i=0;i<n;i++){var h=(5+Math.abs(Math.sin(i*.31)*Math.sin(i*.07+1))*H*.22)*dp*.6;c.fillRect(i*4*dp,H*.42-h/2,3*dp,h)}c.globalAlpha=1;c.fillStyle='rgba(255,255,255,.88)';c.font='bold '+Math.round(15*dp)+'px sans-serif';c.textAlign='center';c.fillText(tx,W/2,H*.85,W*.92)}
function stWvDraw(){var cv=stWvCv();if(!cv||STRV)return;var c=cv.getContext('2d'),W=cv.width,H=cv.height,dp=cv._dp||1,sn=STPN=='sn',ac=stAcc(),i;stWvBg(c,W,H);
 if(!STCA){stWvIdle(c,W,H,dp,sn?t('st_sy0'):t('st_vr_hint'));return}
 var pk=STCA.pk,d=STCA.buf.duration,bw=Math.max(2,Math.round(3*dp)),gp=Math.max(1,Math.round(dp)),n=Math.floor(W/(bw+gp)),mid=H/2,amp=H*.4,gr=c.createLinearGradient(0,mid-amp,0,mid+amp);gr.addColorStop(0,ac);gr.addColorStop(.5,'#fff2c2');gr.addColorStop(1,ac);
 if(sn&&STCA.buf.sil)STCA.buf.sil.forEach(function(x){c.fillStyle='rgba(224,69,47,.16)';c.fillRect(x[0]/d*W,0,(x[1]-x[0])/d*W,H)});
 for(i=0;i<n;i++){var fr=i/n,p=pk[Math.min(pk.length-1,Math.floor(fr*pk.length))],h=Math.max(2*dp,p*amp*2);c.fillStyle=(fr>=STCA.s&&fr<=STCA.e)?gr:'rgba(150,150,150,.32)';c.fillRect(i*(bw+gp),mid-h/2,bw,h)}
 if(sn){var mk=STCA.marks.slice().sort(function(p2,q){return p2-q}),prev=STCA.s*d;c.font='bold '+Math.round(14*dp)+'px sans-serif';c.textAlign='center';mk.concat([STCA.e*d]).forEach(function(m,j){c.fillStyle='rgba(255,255,255,.9)';c.fillText(j+1,(prev+m)/2/d*W,H-8*dp);prev=m});mk.forEach(function(m){var x=m/d*W;c.fillStyle='#e0452f';c.fillRect(x-1.5*dp,0,3*dp,H);c.beginPath();c.arc(x,9*dp,7*dp,0,6.283);c.fill()})}
 if(MSPV.on){var pw=msPvWin();c.fillStyle='rgba(227,179,65,.18)';c.fillRect(pw.w0/d*W,0,(pw.w1-pw.w0)/d*W,H);c.fillStyle=ac;c.fillRect(pw.w0/d*W,0,2*dp,H);c.fillRect(pw.w1/d*W-2*dp,0,2*dp,H)}
 var pp=(MSPV.on&&MSPV.p)?MSPV.pos:STSYP?STSYP.pos:(STCA.cur!=null?STCA.cur:null);if(pp!=null){var px=pp/d*W;c.fillStyle=STSYP||MSPV.on?'#fff':'rgba(255,255,255,.7)';c.shadowColor=ac;c.shadowBlur=8*dp;c.fillRect(px-dp,0,2*dp,H);c.shadowBlur=0}
 var nm=String(STCA.name||'');if(nm.length>26)nm=nm.slice(0,24)+'…';c.textAlign='left';c.font=Math.round(11.5*dp)+'px sans-serif';c.fillStyle='rgba(255,255,255,.72)';c.fillText(nm+' · '+((STCA.e-STCA.s)*d).toFixed(1)+'s',10*dp,18*dp);
 var busy=STMS.st=='busy'||STMS.st=='wait';c.textAlign='right';c.font='bold '+Math.round(10.5*dp)+'px sans-serif';c.fillStyle=(STCA.ms||busy)?ac:'rgba(255,255,255,.55)';c.fillText(busy?'MASTERING…':STCA.ms?'MASTERED':'ORIGINAL',W-52*dp,18*dp);
 var i2=$('#stsyi');if(i2)i2.textContent=STCA.name+' · '+((STCA.e-STCA.s)*d).toFixed(1)+'s · '+STCA.marks.length+' / '+(stSyN()-1)+' '+t('st_sy_mk');msTrUpd()}
function stSyDraw(){stWvDraw()}
function stVrLoop(){var r=STRV;if(!r)return;if(cur.v!='studio'){stVrStop();return}
 var an=r.an,td=new Uint8Array(an.fftSize),fq=new Uint8Array(an.frequencyBinCount),pk=0,i;an.getByteTimeDomainData(td);an.getByteFrequencyData(fq);
 for(i=0;i<td.length;i++){var v=Math.abs(td[i]-128)/128;if(v>pk)pk=v}
 r.mx=Math.max(r.mx||0,pk);r.fc=(r.fc||0)+1;if(r.fc>=3){if(!r.paused){r.hist.push(r.mx);if(r.hist.length>800)r.hist.shift()}r.mx=0;r.fc=0}r.pk=Math.max(pk,r.pk*.96);
 var el=(r.acc+(r.paused?0:performance.now()-r.t0))/1000,cv=(STPN=='vr'||STPN=='sn')?stWvCv():null;
 if(cv){var c=cv.getContext('2d'),W=cv.width,H=cv.height,dp=cv._dp||1,ac=stAcc(),bw=Math.max(2,Math.round(3*dp)),gp=Math.max(1,Math.round(dp)),nb=Math.floor(W/(bw+gp)),mid=H*.46,amp=H*.4,sn2=56,sw=W/sn2;stWvBg(c,W,H);
  c.globalAlpha=.22;c.fillStyle=ac;for(i=0;i<sn2;i++){var fv=fq[Math.floor(Math.pow(i/sn2,1.6)*fq.length*.8)+1]/255;c.fillRect(i*sw+1,H-fv*H*.34,sw-2,fv*H*.34)}c.globalAlpha=1;
  var gr=c.createLinearGradient(0,mid-amp,0,mid+amp);gr.addColorStop(0,ac);gr.addColorStop(.5,'#fff2c2');gr.addColorStop(1,ac);
  var hs=r.hist,m0=Math.min(nb,hs.length);for(i=0;i<m0;i++){var a=hs[hs.length-1-i],h=Math.max(2*dp,Math.pow(a,.6)*amp*2);c.fillStyle=a>.97?'#e0452f':gr;c.fillRect(W-(i+1)*(bw+gp),mid-h/2,bw,h)}
  c.fillStyle='rgba(255,255,255,.08)';c.fillRect(0,H-5*dp,W,5*dp);c.fillStyle=r.pk>.97?'#e0452f':'#3bb273';c.fillRect(0,H-5*dp,W*Math.min(1,r.pk),5*dp);
  c.textAlign='left';c.font='bold '+Math.round(13*dp)+'px sans-serif';
  if(r.paused){c.fillStyle=ac;c.fillText('II  '+stVrFmt(el),10*dp,20*dp)}else{c.fillStyle=(Math.floor(performance.now()/500)%2)?'#e0452f':'rgba(224,69,47,.35)';c.beginPath();c.arc(16*dp,15*dp,5*dp,0,6.283);c.fill();c.fillStyle='#fff';c.fillText('REC  '+stVrFmt(el),28*dp,20*dp)}}
 var tt=$('#stvrt');if(tt)tt.textContent=stVrFmt(el);msTrUpd();
 requestAnimationFrame(stVrLoop)}
function stVrStart(){if(STRV)return;if(!SES){stLi();return}if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder)){toast(t('st_nov'));return}stVrPlayStop();if(MSPV.on)msPvStop(0);if(STSYP)stSyStop();
 var g=function(i,k){var e=$(i);if(e)STVO[k]=e.checked?1:0};g('#stvrns','ns');g('#stvrec','ec');g('#stvrag','ag');g('#stvrnm','nm');g('#stvrat','at');var gv=$('#stvrg'),gain=gv?gv.value/100:1;
 navigator.mediaDevices.getUserMedia({audio:{noiseSuppression:!!STVO.ns,echoCancellation:!!STVO.ec,autoGainControl:!!STVO.ag}}).then(function(sm){var AC=window.AudioContext||window.webkitAudioContext,ac=new AC();try{ac.resume()}catch(e){}
  var src=ac.createMediaStreamSource(sm),gn=ac.createGain(),an=ac.createAnalyser(),dst=ac.createMediaStreamDestination();an.fftSize=1024;an.smoothingTimeConstant=.6;gn.gain.value=gain;src.connect(gn);gn.connect(an);gn.connect(dst);
  var rec=new MediaRecorder(dst.stream),r={sm:sm,ac:ac,gn:gn,an:an,rec:rec,ch:[],paused:false,acc:0,t0:performance.now(),pk:0,hist:[]};STRV=r;STRM=true;
  rec.ondataavailable=function(e){if(e.data&&e.data.size)r.ch.push(e.data)};
  rec.onstop=function(){sm.getTracks().forEach(function(k){k.stop()});try{ac.close()}catch(e){}STRV=null;var bl=new Blob(r.ch,{type:rec.mimeType||'audio/webm'});STRB=bl;stVrUi();bl.arrayBuffer().then(function(ab){stCaLoad(ab,'rec-'+stTs(),{norm:STVO.nm,trim:STVO.at,src:'rec'})})};
  rec.start(250);stVrUi();stVrLoop()}).catch(function(){toast(t('st_err'))})}
function stVrUi(){var el=$('#stpn');if(!el||STPN!='vr')return;var r=STRV,am=r?'rec':STAM,ck=function(id,k,tx){return'<label class="agrr"><input type="checkbox" id="'+id+'"'+(STVO[k]?' checked':'')+'><span>'+t(tx)+'</span></label>'},pg;
 if(am=='file')pg='<label class="btn sm stpk">'+ic('audio')+t('st_caup')+'<input type="file" id="stcaf" accept="audio/*" hidden></label><div id="stvrout"></div>'+msBtn();
 else pg='<div class="stvrt"><b id="stvrt">00:00</b></div><div id="stvrout"></div>'+msBtn()+'<div class="stvro">'+ck('stvrns','ns','st_vr_ns')+ck('stvrec','ec','st_vr_ec')+ck('stvrag','ag','st_vr_ag')+ck('stvrnm','nm','st_vr_nm')+ck('stvrat','at','st_vr_at')+'<label>'+t('st_vr_gn')+' <b id="stvrgv">'+(r?Math.round(r.gn.gain.value*100):100)+'%</b></label><input type="range" id="stvrg" min="0" max="300" value="'+(r?Math.round(r.gn.gain.value*100):100)+'"></div>';
 el.innerHTML='<div class="stav"><label>'+t('sa_rec')+'</label><div class="stsg"><button class="'+(am=='file'?'on':'')+'" data-stam="file">'+ic('audio')+t('st_tab_f')+'</button><button class="'+(am=='rec'?'on':'')+'" data-stam="rec">'+ic('mic')+t('st_tab_r')+'</button></div>'+pg+'</div>';
 stVrBtns();stVrDone();stWvDraw();stPnFit()}
function stVrBtns(){var b=$('#stvrbt');if(!b)return;var r=STRV,h='',pl=!!(STRP||STSYP||(MSPV.on&&MSPV.p)),play=stVrIcon(pl?'on':'','play',pl?ic('u'):ic('p'),t('st_sy_play'));
 if(r&&!r.paused)h=play+stVrIcon('rec','pause',ic('u'),t('st_vr_ps'))+stVrIcon('','stop',STOPSVG,t('st_castop'));
 else if(r)h=play+stVrIcon('rec','resume',ic('mic'),t('st_carec'))+stVrIcon('ok','done',ic('chk'),t('st_vr_dn'));
 else if(STPN=='vr'&&STAM=='rec')h=((STRB||STCA)?play:'')+stVrIcon('rec','rec',ic('mic'),t('st_carec'));
 else h=STCA?play:'';
 b.innerHTML=h}
function stSyPlay(w){if(STSYP){if(STCA)STCA.cur=STSYP.pos;stSyStop();return}if(!STCA)return;if(MSPV.on)msPvStop(0);var c=STCA,b=(w=='org'&&c.raw)?c.raw:c.buf,AC=window.AudioContext||window.webkitAudioContext,ac=new AC(),s=ac.createBufferSource(),D0=c.buf.duration,lo=c.s*D0,hi=Math.min(b.duration,c.e*D0),st=c.cur!=null?Math.min(Math.max(c.cur,lo),hi-.05):lo;try{ac.resume()}catch(e){}
 if(hi-st<.05)st=lo;if(hi<=st)hi=b.duration;s.buffer=b;s.connect(ac.destination);s.start(0,st,hi-st);var me=STSYP={ac:ac,s:s,st:st,t0:ac.currentTime,pos:st,ab:w||'mas'};
 s.onended=function(){if(STSYP===me){if(STCA)STCA.cur=null;stSyStop()}};(function lp(){if(STSYP!==me)return;me.pos=me.st+(ac.currentTime-me.t0);stSyDraw();requestAnimationFrame(lp)})();msAbUi();stVrBtns()}
function stSelOk(o,ay){var sl=stSel(o);if(!sl||!sl.length)return null;var hit=0;ay.forEach(function(a){stAyW(a,o).forEach(function(x,wi){if(sl.indexOf(a.numberInSurah+'.'+wi)>=0)hit++})});return hit?sl:null}
function stEng(k){STENG=k;toast(t(k?'ms_e_off':'ms_e_rt'))}
function stDropRep(n,tot,fps){var dr=1-n/Math.max(1,tot*fps);if(dr>.08)toast(t('ms_e_drop').replace('{n}',Math.round(dr*100)))}
var STENG=0;
function stRmU32(d,p){return d.getUint32(p)}
function stRmBoxes(u,p,e){var out=[],dv=new DataView(u.buffer,u.byteOffset,u.byteLength);while(p+8<=e){var sz=dv.getUint32(p),ty=String.fromCharCode(u[p+4],u[p+5],u[p+6],u[p+7]),hs=8;if(sz==1){sz=dv.getUint32(p+8)*4294967296+dv.getUint32(p+12);hs=16}else if(sz==0)sz=e-p;if(sz<hs||p+sz>e)break;out.push({t:ty,s:p,e:p+sz,b:p+hs});p+=sz}return out}
function stRmFind(u,bx,ty){for(var i=0;i<bx.length;i++)if(bx[i].t==ty)return bx[i];return null}
function stRmW(parts){var n=0,i;for(i=0;i<parts.length;i++)n+=parts[i].length;var o=new Uint8Array(n),p=0;for(i=0;i<parts.length;i++){o.set(parts[i],p);p+=parts[i].length}return o}
function stRmBox(ty,payload){var n=payload.length+8,o=new Uint8Array(n),dv=new DataView(o.buffer);dv.setUint32(0,n);o[4]=ty.charCodeAt(0);o[5]=ty.charCodeAt(1);o[6]=ty.charCodeAt(2);o[7]=ty.charCodeAt(3);o.set(payload,8);return o}
function stRmU(n,v){var o=new Uint8Array(n),dv=new DataView(o.buffer);if(n==4)dv.setUint32(0,v>>>0);else if(n==8){dv.setUint32(0,Math.floor(v/4294967296));dv.setUint32(4,v>>>0)}return o}
function stFmp4ToMp4(u){
 var dv=new DataView(u.buffer,u.byteOffset,u.byteLength),top=stRmBoxes(u,0,u.length),moov=stRmFind(u,top,'moov');if(!moov)return null;
 var mb=stRmBoxes(u,moov.b,moov.e),mvhd=stRmFind(u,mb,'mvhd'),mvex=stRmFind(u,mb,'mvex');if(!mvhd||!mvex)return null;
 var traks=mb.filter(function(x){return x.t=='trak'}).map(function(tk){var tb=stRmBoxes(u,tk.b,tk.e),tkhd=stRmFind(u,tb,'tkhd'),mdia=stRmFind(u,tb,'mdia'),mdb=stRmBoxes(u,mdia.b,mdia.e),mdhd=stRmFind(u,mdb,'mdhd'),hdlr=stRmFind(u,mdb,'hdlr'),minf=stRmFind(u,mdb,'minf'),mib=stRmBoxes(u,minf.b,minf.e),stbl=stRmFind(u,mib,'stbl'),sb=stRmBoxes(u,stbl.b,stbl.e),stsd=stRmFind(u,sb,'stsd'),v=u[tkhd.b],id=dv.getUint32(tkhd.b+(v?20:12)),mv=u[mdhd.b],ts=dv.getUint32(mdhd.b+(mv?20:12)),hd=String.fromCharCode(u[hdlr.b+8],u[hdlr.b+9],u[hdlr.b+10],u[hdlr.b+11]);
  return{id:id,ts:ts,hd:hd,tkhd:tkhd,mdhd:mdhd,hdlr:hdlr,stsd:stsd,mh:stRmFind(u,mib,'vmhd')||stRmFind(u,mib,'smhd')||stRmFind(u,mib,'nmhd'),dinf:stRmFind(u,mib,'dinf'),samples:[],dts:0,have:false}});
 if(!traks.length)return null;var byId={};traks.forEach(function(k){byId[k.id]=k});
 var trex={};stRmBoxes(u,mvex.b,mvex.e).forEach(function(x){if(x.t=='trex')trex[dv.getUint32(x.b+4)]={d:dv.getUint32(x.b+12),z:dv.getUint32(x.b+16),f:dv.getUint32(x.b+20)}});
 var order=[];
 top.forEach(function(mo){if(mo.t!='moof')return;stRmBoxes(u,mo.b,mo.e).forEach(function(tf){if(tf.t!='traf')return;var tb=stRmBoxes(u,tf.b,tf.e),tfhd=stRmFind(u,tb,'tfhd'),tfdt=stRmFind(u,tb,'tfdt');if(!tfhd)return;var fl=dv.getUint32(tfhd.b)&0xffffff,p=tfhd.b+4,id=dv.getUint32(p);p+=4;var tk=byId[id];if(!tk)return;var bdo=mo.s;if(fl&1){bdo=dv.getUint32(p)*4294967296+dv.getUint32(p+4);p+=8}if(fl&2)p+=4;var dd=trex[id]?trex[id].d:0,dz=trex[id]?trex[id].z:0,df=trex[id]?trex[id].f:0;if(fl&8){dd=dv.getUint32(p);p+=4}if(fl&16){dz=dv.getUint32(p);p+=4}if(fl&32){df=dv.getUint32(p);p+=4}
   var base=null;if(tfdt){base=u[tfdt.b]?dv.getUint32(tfdt.b+4)*4294967296+dv.getUint32(tfdt.b+8):dv.getUint32(tfdt.b+4)}if(base!=null)tk.dts=base;
   tb.forEach(function(tr){if(tr.t!='trun')return;var ver=u[tr.b],f=dv.getUint32(tr.b)&0xffffff,n=dv.getUint32(tr.b+4),q=tr.b+8,off=null,ff=null;if(f&1){off=dv.getInt32(q);q+=4}if(f&4){ff=dv.getUint32(q);q+=4}var pos=bdo+(off||0);for(var i=0;i<n;i++){var sd=dd,sz=dz,sf=df,co=0;if(f&256){sd=dv.getUint32(q);q+=4}if(f&512){sz=dv.getUint32(q);q+=4}if(f&1024){sf=dv.getUint32(q);q+=4}else if(i==0&&ff!=null)sf=ff;if(f&2048){co=ver?dv.getInt32(q):dv.getUint32(q);q+=4}
    tk.samples.push({o:pos,z:sz,d:sd,k:(sf&0x10000)?0:1,c:co,t:tk.dts});tk.dts+=sd;pos+=sz;tk.have=true;order.push({k:tk,s:tk.samples[tk.samples.length-1]})}})})});
 if(!order.length)return null;
 /* sync flag: non-sync bit 0x10000 */
 traks.forEach(function(k){k.samples.forEach(function(s){})});
 var tmax=0;traks.forEach(function(k){var sum=0;k.samples.forEach(function(s){sum+=s.d});k.dur=sum;var sec=k.ts?sum/k.ts:0;if(sec>tmax)tmax=sec});
 var MT=1000,mdur=Math.round(tmax*MT);
 function full(ver,payload){var o=new Uint8Array(4+payload.length);o[0]=ver;o.set(payload,4);return o}
 function buildTrak(k,mdatBase,idx){
  var S=k.samples,n=S.length,i,stts=[],run=null;
  for(i=0;i<n;i++){if(run&&run.d==S[i].d)run.n++;else{run={n:1,d:S[i].d};stts.push(run)}}
  var sttsP=new Uint8Array(8+stts.length*8),sd=new DataView(sttsP.buffer);sd.setUint32(4,stts.length);stts.forEach(function(r,j){sd.setUint32(8+j*8,r.n);sd.setUint32(12+j*8,r.d)});
  var hasC=S.some(function(s){return s.c!=0}),cttsB=null;if(hasC){var cr=[],rr=null;for(i=0;i<n;i++){if(rr&&rr.c==S[i].c)rr.n++;else{rr={n:1,c:S[i].c};cr.push(rr)}}var cp=new Uint8Array(8+cr.length*8),cd=new DataView(cp.buffer);cd.setUint32(4,cr.length);cr.forEach(function(r,j){cd.setUint32(8+j*8,r.n);cd.setInt32(12+j*8,r.c)});cp[0]=1;cttsB=stRmBox('ctts',cp)}
  var stss=null;if(k.hd=='vide'){var ks=[];for(i=0;i<n;i++)if(S[i].k)ks.push(i+1);if(ks.length&&ks.length<n){var kp=new Uint8Array(8+ks.length*4),kd=new DataView(kp.buffer);kd.setUint32(4,ks.length);ks.forEach(function(v,j){kd.setUint32(8+j*4,v)});stss=stRmBox('stss',kp)}}
  var stsc=new Uint8Array(16),cd2=new DataView(stsc.buffer);cd2.setUint32(4,1);cd2.setUint32(8,1);cd2.setUint32(12,1);cd2=null;var stscP=new Uint8Array(20),sc=new DataView(stscP.buffer);sc.setUint32(4,1);sc.setUint32(8,1);sc.setUint32(12,1);sc.setUint32(16,1);
  var szP=new Uint8Array(12+n*4),zd=new DataView(szP.buffer);zd.setUint32(8,n);for(i=0;i<n;i++)zd.setUint32(12+i*4,S[i].z);
  var coP=new Uint8Array(8+n*4),od=new DataView(coP.buffer);od.setUint32(4,n);for(i=0;i<n;i++)od.setUint32(8+i*4,S[i].n);
  var stbl=stRmBox('stbl',stRmW([u.subarray(k.stsd.s,k.stsd.e),stRmBox('stts',sttsP),cttsB||new Uint8Array(0),stss||new Uint8Array(0),stRmBox('stsc',stscP),stRmBox('stsz',szP),stRmBox('stco',coP)]));
  var minf=stRmBox('minf',stRmW([k.mh?u.subarray(k.mh.s,k.mh.e):new Uint8Array(0),k.dinf?u.subarray(k.dinf.s,k.dinf.e):new Uint8Array(0),stbl]));
  var md=new Uint8Array(24),mdd=new DataView(md.buffer);mdd.setUint32(12,k.ts);mdd.setUint32(16,k.dur>>>0);mdd.setUint16(20,0x55c4);var tv=u[k.tkhd.b];
  var mdhd=stRmBox('mdhd',md);
  var tk=new Uint8Array(u.subarray(k.tkhd.s,k.tkhd.e)),tdv=new DataView(tk.buffer);var tmd=Math.round(k.ts?k.dur/k.ts*MT:0);if(tv){tdv.setUint32(36,Math.floor(tmd/4294967296));tdv.setUint32(40,tmd>>>0)}else tdv.setUint32(28,tmd>>>0);
  return stRmBox('trak',stRmW([tk,stRmBox('mdia',stRmW([mdhd,u.subarray(k.hdlr.s,k.hdlr.e),minf]))]))}
 /* two passes: first with offset 0 to measure moov size, then real offsets */
 var ftyp=stRmBox('ftyp',stRmW([new Uint8Array([105,115,111,109,0,0,2,0]),new Uint8Array([105,115,111,109,105,115,111,50,109,112,52,49])]));
 function build(base){var pos=base;order.forEach(function(x){x.s.n=pos;pos+=x.s.z});var mvp=new Uint8Array(100),md=new DataView(mvp.buffer);md.setUint32(12,MT);md.setUint32(16,mdur);md.setUint32(20,0x00010000);md.setUint16(24,0x0100);md.setUint32(36,0x00010000);md.setUint32(52,0x00010000);md.setUint32(68,0x40000000);md.setUint32(96,traks.length+1);
  var moovB=stRmBox('moov',stRmW([stRmBox('mvhd',mvp)].concat(traks.map(function(k,i){return buildTrak(k,base,i)}))));return moovB}
 var m0=build(0),moovLen=m0.length,mdatStart=ftyp.length+moovLen+8,moovB=build(mdatStart);
 var total=0;order.forEach(function(x){total+=x.s.z});var out=new Uint8Array(ftyp.length+moovB.length+8+total),p=0;out.set(ftyp,0);p+=ftyp.length;out.set(moovB,p);p+=moovB.length;var h=new DataView(out.buffer);h.setUint32(p,total+8);out[p+4]=109;out[p+5]=100;out[p+6]=97;out[p+7]=116;p+=8;
 order.forEach(function(x){out.set(u.subarray(x.s.o,x.s.o+x.s.z),p);p+=x.s.z});
 return out}
function stFixDur(bl,sec,ty){return bl.arrayBuffer().then(function(ab){var u8=new Uint8Array(ab),r=null,mp=String(ty).indexOf('mp4')>=0;
 try{if(mp){r=stFmp4ToMp4(u8);if(!r&&sec>0)r=stMp4Dur(u8,sec)}else if(sec>0)r=stWebmDur(u8,sec)}catch(e){r=null}
 return r?new Blob([r],{type:ty}):bl}).catch(function(){return bl})}
function stCap(cv,fps){var s=null;try{s=cv.captureStream(0);var tk=s.getVideoTracks()[0];if(tk&&typeof tk.requestFrame=='function')s._rf=tk;else{s.getTracks().forEach(function(k){k.stop()});s=cv.captureStream(fps)}}catch(e){s=cv.captureStream(fps)}return s}
function stLoadMux(){if(window.Mp4Muxer)return Promise.resolve(window.Mp4Muxer);if(STMUX)return STMUX;
 var U=['https://cdn.jsdelivr.net/npm/mp4-muxer@5.1.3/build/mp4-muxer.js','https://unpkg.com/mp4-muxer@5.1.3/build/mp4-muxer.js','https://fastly.jsdelivr.net/npm/mp4-muxer@5.1.3/build/mp4-muxer.js'];
 STMUX=new Promise(function(ok){var i=0;(function next(){if(window.Mp4Muxer){ok(window.Mp4Muxer);return}if(i>=U.length){STMUX=null;ok(null);return}var s=D.createElement('script'),done=false,fin=function(){if(done)return;done=true;clearTimeout(tm);if(window.Mp4Muxer)ok(window.Mp4Muxer);else{i++;next()}},tm=setTimeout(fin,7000);s.src=U[i];s.onload=fin;s.onerror=fin;D.head.appendChild(s)})()});return STMUX}
var WD={id:0,v:0,q:0,last:'',u:null,a:null,p:null,pu:null};
var WMV_D=5;
function wdIsAdm(){return typeof SES!='undefined'&&!!SES&&WD.u===SES.uid&&WD.a===true}
function wdItem(){return'<button type="button" data-stt="dec">'+ic('shield')+'<span>'+t('wd_nm')+'</span></button>'}
function wdMenuFix(){var ok=wdIsAdm();D.querySelectorAll('.stmp').forEach(function(p){var b=p.querySelector('[data-stt="dec"]');if(ok&&!b)p.insertAdjacentHTML('beforeend',wdItem());else if(!ok&&b&&!(cur&&cur.v=='studio'&&cur.t=='dec'))b.remove()});if(stIsHome()&&D.querySelector('.sthm')&&ok!=!!D.querySelector('.sthm .adm'))stHome()}
function wdWarm(){if(typeof SES=='undefined'||!SES||WD.q||WD.u===SES.uid)return;WD.q=1;wdChk().then(function(){WD.q=0;wdMenuFix()},function(){WD.q=0})}
function wdChk(){if(typeof SES=='undefined'||!SES)return Promise.resolve(false);var u=SES.uid;if(WD.u===u&&WD.a!=null)return Promise.resolve(WD.a);if(WD.p&&WD.pu===u)return WD.p;WD.pu=u;
 WD.p=sbReq('GET','/community_admins?select=user_id&user_id=eq.'+encodeURIComponent(u)+'&limit=1').then(function(r){var a=!!(r&&r.length&&String(r[0].user_id)==String(u));WD.u=u;WD.a=a;WD.p=null;return a}).catch(function(){WD.p=null;return false});return WD.p}
function wdView(){app.innerHTML='<div class="wdv"><div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic('shield')+'</span><b>'+t('st_stud')+'</b>'+stSwitch('dec')+'</div><div class="wdc" id="wdc"><p class="wdmsg wdbz"><i></i>'+t('wd_chk')+'</p></div></div>';
 var id=++WD.v;wdChk().then(function(a){if(id!==WD.v||!$('#wdc'))return;if(a)wdMain();else wdLock();wdMenuFix()})}
function wdHead(){return'<div class="wdh"><span class="wdi">'+ic('shield')+'</span><div><b>'+t('wd_t')+'</b><small>'+t('wd_sub')+'</small></div></div>'}
function wdLock(){var c=$('#wdc');if(c)c.innerHTML=wdHead()+'<div class="wdres bad"><b>'+t('wd_lock')+'</b><p>'+t('wd_lock2')+'</p></div>'}
function wdMain(){var c=$('#wdc');if(!c)return;c.innerHTML=wdHead()+'<div class="wdz" id="wdz" role="button" tabindex="0" data-wdpick="1"><b>'+t('wd_drop')+'</b><small>PNG · JPG · MP4 · WEBM</small></div><input type="file" id="wdf" hidden accept=".png,.jpg,.jpeg,.mp4,.webm,image/png,image/jpeg,video/mp4,video/webm"><div id="wdout"></div><p class="wdsm">'+t('wd_note')+'</p>'}
function wdWarn(ti,msg){return'<div class="wdres bad"><b>⚠ '+ti+'</b>'+(msg?'<p>'+msg+'</p>':'')+'</div>'}
function wdCv(w,h){var c=D.createElement('canvas');c.width=w;c.height=h;return c}
function wdThumb(src,w,h){var k=Math.min(1,260/Math.max(w,h)),cv=wdCv(Math.max(1,Math.round(w*k)),Math.max(1,Math.round(h*k)));try{cv.getContext('2d').drawImage(src,0,0,cv.width,cv.height)}catch(e){}return cv}
function wdSoft(cv){var B=4,h=12,W=cv.width,H=cv.height,nb=Math.floor(W/B);if(nb<56||H<h*3+8)return null;var c=cv.getContext('2d',{willReadFrequently:true}),ys=[0,Math.floor(H/2/B)*B,H-h],sum=new Float64Array(nb),i,r,x;
 ys.forEach(function(y){var d=c.getImageData(0,y,W,h).data;for(r=0;r<h;r++)for(x=0;x<nb*B;x++){var o=(r*W+x)*4;sum[(x/B)|0]+=(d[o]&1)+(d[o+1]&1)+(d[o+2]&1)}});
 var tot=ys.length*h*B*3;for(i=0;i<nb;i++)sum[i]/=tot;return sum}
function wdBy(b,p){var v=0;for(var k=0;k<8;k++)v=v*2+b[p+k];return v}
function wdTryN(soft,n){var nb=soft.length,N=24+8*n,best=null,s0,j,i;if(N>nb)return null;
 for(s0=0;s0<N;s0++){var bits=new Array(N),q=0;
  for(j=0;j<N;j++){var sm=0,cn=0;for(i=(s0+j)%N;i<nb;i+=N){sm+=soft[i];cn++}var v=sm/cn;bits[j]=v>.5?1:0;q+=Math.abs(v-.5)}
  if(wdBy(bits,0)!=171||wdBy(bits,8)!=n)continue;
  var x=n,st='';for(j=0;j<n;j++){var ch=wdBy(bits,16+j*8);x^=ch;st+=String.fromCharCode(ch)}
  if(x!=wdBy(bits,16+n*8))continue;
  var tx;try{tx=decodeURIComponent(escape(st))}catch(e){tx=st}
  var qq=q/N*2;if(!best||qq>best.q)best={text:tx,q:qq}}
 return best}
function wdTry(soft){var best=null,n;for(n=1;n<=24;n++){var r=wdTryN(soft,n);if(r&&(!best||r.q>best.q))best=r}return best}
function wdCw(W,N){return Math.max(4,Math.min(16,Math.floor(W/(2*N)))&~1)}
function stWmV(c,W,Hh){if(!SES||!SES.un)return;try{if(!STWM||STWM.k!=SES.un)STWM={k:SES.un,b:stWmBits(SES.un)};var bits=STWM.b,N=bits.length,cw=wdCw(W,N),nc=Math.floor(W/cw),h=16,d=WMV_D,ys=[0,Math.floor(Hh/2/4)*4,Hh-h],pat=new Int8Array(W),x;if(Hh<h*3+8||nc<N)return;
 for(x=0;x<nc*cw;x++){pat[x]=((bits[((x/cw)|0)%N]?1:-1)*((x%cw)<(cw>>1)?1:-1))*d}
 ys.forEach(function(y){var im=c.getImageData(0,y,W,h),a=im.data;for(var r=0;r<h;r++)for(x=0;x<W;x++){var v=pat[x];if(v){var o=(r*W+x)*4;a[o]+=v;a[o+1]+=v;a[o+2]+=v}}c.putImageData(im,0,y)})}catch(e){}}
function wdCols(cv){var h=16,W=cv.width,H=cv.height;if(W<224||H<h*3+8)return null;var c=cv.getContext('2d',{willReadFrequently:true}),ys=[0,Math.floor(H/2/4)*4,H-h],out=[];
 ys.forEach(function(y){var d=c.getImageData(0,y,W,h).data,col=new Float64Array(W),r,x;for(r=0;r<h;r++)for(x=0;x<W;x++){var o=(r*W+x)*4;col[x]+=.299*d[o]+.587*d[o+1]+.114*d[o+2]}for(x=0;x<W;x++)col[x]/=h;out.push(col)});return out}
function wdCells(cols,cw,nc){var h2=cw>>1,d=WMV_D,tot=new Float64Array(nc),k,x;cols.forEach(function(col){for(k=0;k<nc;k++){var L=0,R=0,b=k*cw;for(x=0;x<h2;x++){L+=col[b+x];R+=col[b+h2+x]}var df=(L-R)/h2;if(df>2*d)df=2*d;else if(df<-2*d)df=-2*d;tot[k]+=df}});for(k=0;k<nc;k++)tot[k]=.5+tot[k]/(4*d*cols.length);return tot}
function wdTryV(cols){var W=cols[0].length,best=null,n;for(n=1;n<=24;n++){var N=24+8*n,cw=wdCw(W,N),nc=Math.floor(W/cw);if(nc<N)continue;var r=wdTryN(wdCells(cols,cw,nc),n);if(r&&(!best||r.q>best.q))best=r}return best}
function wdAvgCols(sets){var o=[],i,k,f;for(i=0;i<3;i++){var a=new Float64Array(sets[0][i].length);for(f=0;f<sets.length;f++)for(k=0;k<a.length;k++)a[k]+=sets[f][i][k];for(k=0;k<a.length;k++)a[k]/=sets.length;o.push(a)}return o}
function wdDecode(r){var best=null;function take(x){if(x&&(!best||x.q>best.q))best=x}
 var sf=r.softs||[],cs=r.cols||[];
 sf.forEach(function(s){take(wdTry(s))});
 if(sf.length>1){var m=new Float64Array(sf[0].length),k;sf.forEach(function(s){for(k=0;k<m.length;k++)m[k]+=s[k]});for(k=0;k<m.length;k++)m[k]/=sf.length;take(wdTry(m))}
 cs.slice(0,3).forEach(function(c){take(wdTryV(c))});
 if(cs.length>1)take(wdTryV(wdAvgCols(cs)));
 return best}
function wdImgLoad(file){return(window.createImageBitmap?createImageBitmap(file,{colorSpaceConversion:'none',premultiplyAlpha:'none'}).catch(function(){return createImageBitmap(file)}):Promise.reject(0)).catch(function(){return new Promise(function(ok,no){var u=URL.createObjectURL(file),im=new Image();im.onload=function(){URL.revokeObjectURL(u);ok(im)};im.onerror=function(){URL.revokeObjectURL(u);no(new Error('img'))};im.src=u})})}
function wdImage(file){return wdImgLoad(file).then(function(im){var w=im.naturalWidth||im.width,h=im.naturalHeight||im.height,cv=wdCv(w,h),c=cv.getContext('2d',{willReadFrequently:true});c.drawImage(im,0,0);var s=wdSoft(cv),cl=wdCols(cv),th=wdThumb(cv,w,h);try{if(im.close)im.close()}catch(e){}return{softs:s?[s]:[],cols:cl?[cl]:[],n:1,th:th,kind:'img'}})}
function wdVideo(file){return new Promise(function(ok,no){var u=URL.createObjectURL(file),v=D.createElement('video'),done=0,softs=[],cols=[],cv=null,c=null,th=null,to;
 function fin(er){if(done)return;done=1;clearTimeout(to);try{v.pause();v.removeAttribute('src');v.load()}catch(x){}URL.revokeObjectURL(u);if(er&&!softs.length)no(er);else ok({softs:softs,cols:cols,n:Math.max(softs.length,cols.length),th:th,kind:'vid'})}
 function grab(){var w=v.videoWidth,h=v.videoHeight;if(!w||!h)return;if(!cv){cv=wdCv(w,h);c=cv.getContext('2d',{willReadFrequently:true})}c.drawImage(v,0,0,w,h);var s=wdSoft(cv),cl=wdCols(cv);if(s)softs.push(s);if(cl)cols.push(cl);if(!th)th=wdThumb(cv,w,h)}
 function seek(tm,cb){var d=0,tt=0,h2=function(){if(d)return;d=1;v.removeEventListener('seeked',h2);clearTimeout(tt);cb()};tt=setTimeout(h2,4000);v.addEventListener('seeked',h2);try{v.currentTime=tm}catch(x){h2()}}
 function run(ts,i){if(done)return;if(i>=ts.length){fin();return}seek(ts[i],function(){grab();run(ts,i+1)})}
 to=setTimeout(function(){fin(new Error('timeout'))},60000);
 v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');v.preload='auto';v.onerror=function(){fin(new Error('video'))};
 v.onloadeddata=function(){if(v.__s)return;v.__s=1;grab();var d=v.duration,ts=[];if(isFinite(d)&&d>0)[.05,.1,.2,.3,.5,.75,1,1.5,2].forEach(function(x){if(x<d-.02)ts.push(x)});run(ts,0)};
 v.src=u})}
function wdRun(file){var out=$('#wdout');if(!out||!file)return;var id=++WD.id,nm=file.name||'',isV=/^video\//.test(file.type)||/\.(mp4|webm)$/i.test(nm),isI=/^image\/(png|jpe?g)$/.test(file.type)||/\.(png|jpe?g)$/i.test(nm);
 if(!isV&&!isI){out.innerHTML=wdWarn(t('wd_bad'),'');return}
 out.innerHTML='<p class="wdmsg wdbz"><i></i>'+t('wd_busy')+'</p>';
 (isV?wdVideo(file):wdImage(file)).then(function(r){if(id!==WD.id)return;var d=(r.softs.length||(r.cols&&r.cols.length))?wdDecode(r):null;wdPaint(out,r,d,file)}).catch(function(){if(id!==WD.id)return;out.innerHTML=wdWarn(t('wd_bad'),'')})}
function wdPaint(out,r,d,file){var h='<div class="wdpvw" id="wdpvw"></div><div class="wdnm">'+esc(file.name||'')+'</div>';
 if(d){WD.last=d.text;h+='<div class="wdres ok"><small>'+t('wd_found')+'</small><div class="wdun" dir="auto">'+esc(d.text)+'</div><button type="button" class="wdb" data-wdcp="1">'+t('wd_copy')+'</button><div class="wdmeta"><span>'+t('wd_src')+': '+t(r.kind=='vid'?'wd_vid':'wd_img')+'</span><span>'+t('wd_frm')+': '+r.n+'</span><span>'+t('wd_sig')+': '+Math.round(d.q*100)+'%</span></div></div>'}
 else h+=wdWarn(t('wd_none'),t('wd_none2'));
 out.innerHTML=h;var pv=$('#wdpvw');if(pv&&r.th)pv.appendChild(r.th)}
function wdPickFile(){var f=$('#wdf');if(f){f.value='';f.click()}}
D.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('[data-wdpick],[data-wdcp]'):null;if(!b)return;if(b.dataset.wdpick!=null)wdPickFile();else if(WD.last){try{navigator.clipboard.writeText(WD.last).then(function(){toast(t('wd_copied'))},function(){})}catch(x){}}});
D.addEventListener('change',function(e){var x=e.target;if(x&&x.id=='wdf'&&x.files&&x.files[0])wdRun(x.files[0])});
['dragenter','dragover'].forEach(function(ev){D.addEventListener(ev,function(e){var z=e.target&&e.target.closest?e.target.closest('#wdz'):null;if(z){e.preventDefault();z.classList.add('dr')}})});
D.addEventListener('dragleave',function(e){var z=$('#wdz');if(z&&!(e.relatedTarget&&z.contains(e.relatedTarget)))z.classList.remove('dr')});
D.addEventListener('drop',function(e){var z=e.target&&e.target.closest?e.target.closest('#wdz'):null;if(!z)return;e.preventDefault();z.classList.remove('dr');var f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(f)wdRun(f)});
D.addEventListener('keydown',function(e){if((e.key=='Enter'||e.key==' ')&&e.target&&e.target.id=='wdz'){e.preventDefault();wdPickFile()}});
function stNeed(fn){if(SES)fn();else{AFTER=fn;go(Object.assign({},cur,{o:'lg'}))}}
function stValid(){if(STO.theme=='photo'&&!STO.ph&&!(cur.t=='vid'&&STBG.length)){toast(t('st_pick'));return false}if(!(STSRC=='h'&&STH)&&STO.t-STO.f+1>getMaxAyahLimit()){toast(t('st_max').replace(/\d+/,getMaxAyahLimit()));return false}return true}
function stRun(){if(cur.t=='vid')stVideo(STO);else stImage(STO)}
function stCreate(){stGather();if(!SES){if(STO.theme=='photo'){STO.theme='gold';STO.ph=''}if(STO.tr=='__own')STO.tr='';P('sto',STO)}if(!stValid())return;stRun()}
function stLi(){toast(t('st_li2'));stNeed(function(){})}
D.addEventListener('click',function(e){if(SES)return;var x=e.target.closest&&e.target.closest('label.stad,label.ptad,label.stpk,[data-hcig],[data-hclg]');if(!x)return;if(x.matches('label.stpk')&&!x.querySelector('#stbgm'))return;e.preventDefault();e.stopImmediatePropagation();stLi()},true);
D.addEventListener('change',function(e){if(SES)return;var x=e.target;if(x&&x.id=='sttr'&&x.value=='__own'){e.stopImmediatePropagation();x.selectedIndex=0;stLi()}},true);
D.addEventListener('focusin',function(e){if(!SES&&e.target&&e.target.id=='sttro'){e.target.blur();stLi()}});
function stGather(){var hd=STSRC=='h'&&STH;if($('#stfo'))STO.fo=$('#stfo').value;
 if(hd){if($('#stht'))STO.ht=+$('#stht').value}else if($('#stsn')&&$('#stfa')&&$('#stta')){STSRC=STSRC||'q';STO.n=+$('#stsn').value;STO.f=+$('#stfa').value;STO.t=+$('#stta').value;if($('#sttr'))STO.tr=$('#sttr').value}
 if($('#strc'))STO.rc=$('#strc').value;P('sto',STO);stWsUi();stPvSoon()}
function aoSel(k,lab,opts){return(lab?'<label>'+lab+'</label>':'')+'<select data-ao="'+k+'">'+opts.map(function(x){return'<option value="'+x[0]+'"'+(String(STO[k])==String(x[0])?' selected':'')+'>'+esc(x[1])+'</option>'}).join('')+'</select>'}
function aoRng(k,lab,mn,mx,sp){return'<label>'+lab+' <b class="aov">'+STO[k]+'</b></label><input type="range" data-ao="'+k+'" min="'+mn+'" max="'+mx+'" step="'+sp+'" value="'+STO[k]+'">'}
function aoChk(k,lab){return'<label class="agrr"><input type="checkbox" data-ao="'+k+'"'+(STO[k]?' checked':'')+'><span>'+lab+'</span></label>'}
function aoCol(k,lab){return'<label>'+lab+'</label><input type="color" data-ao="'+k+'" value="'+STO[k]+'">'}
function aoSet(x){var k=x.dataset.ao,v;if(x.type=='checkbox')v=x.checked?1:0;else if(x.type=='range')v=+x.value;else if(x.tagName=='SELECT'&&/^\d+$/.test(x.value))v=+x.value;else v=x.value;
 STO[k]=v;P('sto',STO);if(x.type=='range'){var b2=x.previousElementSibling&&x.previousElementSibling.querySelector('.aov');if(b2)b2.textContent=v}
 if(k=='theme'){var cu=$('#stcus');if(cu)cu.hidden=v!='custom';if(v=='photo'&&!STO.ph)toast(t('sa_photo_h'))}
 if(/^(theme|cbg1|cbg2|ctx|cac|pat|dim|blur)$/.test(k))stPrevSoon();stPvSoon()}
D.addEventListener('input',function(e){var x=e.target;if(x.dataset&&x.dataset.ao&&x.type=='range')aoSet(x)});
function advHtml(){var nm=lang=='ta'?STN.ta:STN.en,th=STT.map(function(x,i){return[x.n,nm[i]]}).concat([['custom',lang=='ta'?'தனிப்பயன்':'Custom']]),rt=Object.keys(STR).map(function(k){return[k,STR[k][2]]});
 return'<div class="stav"><h4>'+t('sa_theme')+'</h4>'+aoSel('theme','',th)+'<div id="stcus"'+(STO.theme=='custom'?'':' hidden')+'>'+aoCol('cbg1',t('sa_c1'))+aoCol('cbg2',t('sa_c2'))+aoCol('ctx',t('sa_ct'))+aoCol('cac',t('sa_ca'))+'</div>'
 +'<h4>'+t('sa_photo')+'</h4><div class="stlib" id="stlib"></div>'+aoRng('dim',t('sa_dim'),0,90,5)+aoRng('blur',t('sa_blur'),0,12,1)
 +'<h4>'+t('st_font')+'</h4>'+aoRng('az',t('sa_az'),50,140,5)+aoRng('tz',t('sa_tz'),50,140,5)+aoRng('lh',t('sa_lh'),80,130,5)+aoRng('gp',t('sa_gap'),0,120,5)
 +'<h4>'+t('sa_ratio')+'</h4>'+aoSel('ratio','',rt)+aoSel('res',t('sa_res'),[[1,t('sa_res1')],[2,t('sa_res2')]])
 +'<h4>'+t('sa_show')+'</h4>'+aoChk('hdr',t('sa_hdr'))+aoChk('vn',t('sa_vn'))+aoChk('br',t('sa_br'))+aoChk('pat',t('sa_pat'))+aoChk('sh',t('sa_sh'))+aoChk('vp',t('sa_vp'))
 +'<button class="btn wide" data-stre="1" style="margin-top:14px">'+t('sa_reset')+'</button></div>'}
function stPrevSoon(){clearTimeout(STPT);STPT=setTimeout(function(){stPrevAll();stPv()},250)}
function stPrevAll(){var g=$('#stg');if(!g)return;var o=Object.assign({},STO,{ratio:'sq'}),th=stTh(o);
 var ip=(o.theme=='photo'&&o.ph)?stImg(stPhoto(o.ph),0).catch(function(){return null}):Promise.resolve(null);
 ip.then(function(img){var gg=$('#stg');if(!gg)return;gg.innerHTML=STY.map(function(sy){var W=300,Hh=300,u=W/1080,cv=D.createElement('canvas');cv.width=W;cv.height=Hh;var c=cv.getContext('2d'),oo=Object.assign({},o,{style:sy.id,hdr:1,br:1,blur:o.blur/4}),reg=stBase(c,W,Hh,u,oo,th,img,{name:'الفاتحة',sub:'Al-Fatihah · 1:1',num:'1:1',tcr:'',src:''}),bh=Math.max(6,26*u),bw=reg.x1-reg.x0,y=reg.top+(reg.bot-reg.top)*.1;
  c.save();c.globalAlpha=.85;c.fillStyle=th.tx;[1,.82,.92].forEach(function(f,i){stRR(c,reg.cx-bw*f/2,y+i*bh*2,bw*f,bh,bh/2);c.fill()});c.globalAlpha=.55;c.fillStyle=th.sb;[.9,.7].forEach(function(f,i){stRR(c,reg.cx-bw*f/2,y+bh*7+i*bh*1.6,bw*f,bh*.55,bh*.28);c.fill()});c.restore();
  return'<button class="stk'+(sy.id==STO.style?' on':'')+'" data-sty="'+sy.id+'"><img alt="" src="'+(function(u2){stCvFree(cv);return u2})(cv.toDataURL('image/png'))+'"><b>'+(lang=='ta'?sy.n[0]:sy.n[1])+'</b></button>'}).join('')})}
function stSumTxt(){var h=STSRC=='h'&&STH,tx='';if(h)tx=(STH.book?STH.book+' · ':'')+STH.ref;else if(STSRC)tx=STO.n+':'+STO.f+(STO.t>STO.f?'–'+STO.t:'')+(SURS&&SURS[STO.n-1]?' · '+SURS[STO.n-1].englishName:'');var e=$('#stsmt');if(e)e.textContent=tx}
function accHtml(k,title,subId,body){return'<div class="acw"><button class="acb" data-acc="'+k+'"><span><b>'+title+'</b>'+(subId?'<small class="mu" id="'+subId+'"></small>':'')+'</span>'+ic('cdn')+'</button><div class="acp" id="acp-'+k+'" hidden><button class="acx" data-acc="'+k+'" aria-label="close">'+ic('cup')+'</button><div class="acb2" id="acb-'+k+'">'+body+'</div></div></div>'}
function hcTab(ms){var jd=Math.floor(ms/864e5)+2440588,l=jd-1948440+10632,n=Math.floor((l-1)/10631),j,m,d;l=l-10631*n+354;j=Math.floor((10985-l)/5316)*Math.floor(50*l/17719)+Math.floor(l/5670)*Math.floor(43*l/15238);l=l-Math.floor((30-j)/15)*Math.floor(17719*j/50)-Math.floor(j/16)*Math.floor(15238*j/43)+29;m=Math.floor(24*l/709);d=l-Math.floor(709*m/24);return{year:30*n+j-30,month:m,day:d}}
function hcIntl(cal){try{var f=new Intl.DateTimeFormat('en-u-ca-'+cal+'-nu-latn',{day:'numeric',month:'numeric',year:'numeric',timeZone:'UTC'});var p=hcParts(f,Date.UTC(2024,2,11));return(p.year==1445&&p.month==9&&p.day>=1&&p.day<=2)?f:null}catch(e){return null}}
function hcParts(f,ms){var o={};f.formatToParts(new Date(ms)).forEach(function(x){if(x.type!='literal'&&x.type!='era')o[x.type]=+x.value});return o}
function hcH(ms){if(!HCV.mode){HCV.f=hcIntl('islamic-umalqura');HCV.mode='u';if(!HCV.f){HCV.f=hcIntl('islamic-civil');HCV.mode='c'}if(!HCV.f)HCV.mode='t'}
 return HCV.mode=='t'?hcTab(ms):hcParts(HCV.f,ms)}
function hcYear(y,off){var key=y+'|'+off;if(HCM[key])return HCM[key];
 var est=Date.UTC(622,6,19)+Math.round((y-1)*354.36707)*864e5,s=null,k,o;
 for(k=-50;k<=50;k++){o=hcH(est+k*864e5+off*864e5);if(o.year==y&&o.month==1&&o.day==1){s=est+k*864e5;break}}
 if(s===null)return null;
 var mo=[[],[],[],[],[],[],[],[],[],[],[],[]],ms=s,n=0;
 while(n<400){o=hcH(ms+off*864e5);if(o.year!=y)break;mo[o.month-1].push({d:o.day,ms:ms});ms+=864e5;n++}
 return HCM[key]=mo}
function hcPT(ms,la,lo,tz,method,asr){
 var R=Math.PI/180,sin=function(x){return Math.sin(x*R)},cos=function(x){return Math.cos(x*R)},tan=function(x){return Math.tan(x*R)},asn=function(x){return Math.asin(x)/R},acs=function(x){return Math.acos(x)/R},atn2=function(a,b){return Math.atan2(a,b)/R},acot=function(x){return Math.atan(1/x)/R},
 fa=function(a){a=a-360*Math.floor(a/360);return a<0?a+360:a},fh=function(a){a=a-24*Math.floor(a/24);return a<0?a+24:a},
 jd0=ms/864e5+2440587.5-lo/360,M=HCMT[method]||HCMT.mwl;
 function sp(jd){var D=jd-2451545,g=fa(357.529+.98560028*D),q=fa(280.459+.98564736*D),L=fa(q+1.915*sin(g)+.02*sin(2*g)),e=23.439-3.6e-7*D,RA=atn2(cos(e)*sin(L),cos(L))/15;return{d:asn(sin(e)*sin(L)),e:q/15-fh(RA)}}
 function mid(t){return fh(12-sp(jd0+t).e)}
 function ang(a,t,ccw){var d=sp(jd0+t).d,v=(-sin(a)-sin(d)*sin(la))/(cos(d)*cos(la));if(v>1||v<-1)return NaN;return mid(t)+(ccw?-1:1)*acs(v)/15}
 function asrT(f,t){var d=sp(jd0+t).d;return ang(-acot(f+tan(Math.abs(la-d))),t,false)}
 var T={fajr:5,sunrise:6,dhuhr:12,asr:13,sunset:18,maghrib:18,isha:18},i;
 for(i=0;i<2;i++){var p={};for(var k in T)p[k]=T[k]/24;
  T={fajr:ang(M[0],p.fajr,true),sunrise:ang(.833,p.sunrise,true),dhuhr:mid(p.dhuhr),asr:asrT(asr==2?2:1,p.asr),sunset:ang(.833,p.sunset,false),maghrib:ang(.833,p.maghrib,false),isha:ang(M[1]||0,p.isha,false)}}
 var sh=tz-lo/15,r={};for(var k2 in T)r[k2]=T[k2]+sh;
 if(M[2])r.isha=r.maghrib+M[2]/60;
 return r}
function hcFmt(h,f24,off,nopm){if(h!==h)return'--:--';h=h+(off||0)/60;var m=Math.round(h*60);m=((m%1440)+1440)%1440;var hh=Math.floor(m/60),mm=m%60,p=function(n){return n<10?'0'+n:''+n};if(f24)return p(hh)+':'+p(mm);return(hh%12||12)+':'+p(mm)+(nopm?'':hh<12?' am':' pm')}
var HCX={c:null,i:0,logo:'',img:'',n:{},hd:{},pe:{}};
function hcL(){return HCL[HCX.c.cl||lang]?(HCX.c.cl||lang):'en'}
function hcP2(n){return n<10?'0'+n:''+n}
function hcDg(v){v=''+v;if(HCX.c.dg!='ar')return v;return v.replace(/\d/g,function(d){return'٠١٢٣٤٥٦٧٨٩'.charAt(+d)})}
function hcToday(){var n=new Date();return Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())}
function hcCurYear(){return hcH(hcToday()+HCX.c.adj*864e5).year}
function hcYr(){return HCX.c.y||hcCurYear()}
function hcN(){return HCX.c.st==8?1:12}
function hcAl(a){return a=='l'?'left':a=='r'?'right':'center'}
function hcMg(a){return a=='l'?'margin-right:auto;':a=='r'?'margin-left:auto;':'margin-left:auto;margin-right:auto;'}
function hcTx(s){return esc(s).replace(/\n/g,'<br>')}
function hcWith(o,fn){var old=HCX.c;HCX.c=Object.assign({},old,o);try{return fn()}finally{HCX.c=old}}
function hcCtx(){var c=HCX.c,L=hcL();return{c:c,L:L,T:HCL[L],yr:hcYr(),z:HCZ[c.sz]||HCZ.a4p,td:hcToday()}}
function hcMon(X,i){var y=X.yr+Math.floor(i/12),m=((i%12)+12)%12,mo=hcYear(y,+X.c.adj);return mo&&mo[m].length?{yr:y,m:m,days:mo[m]}:null}
function hcSig(){var c=HCX.c;return[c.la,c.lo,c.me,c.as].join(',')}
function hcOv(){var s=hcSig();return HCX.pe[s]||(HCX.pe[s]={})}
function hcDay(ms,nopm){var c=HCX.c,r=hcPT(ms,+c.la,+c.lo,+c.tz,c.me,+c.as),f=!!c.f24,o=hcOv(),k,a=[hcFmt(r.fajr,f,+c.o1,nopm),hcFmt(r.sunrise,f,0,nopm),hcFmt(r.dhuhr,f,+c.o2,nopm),hcFmt(r.asr,f,+c.o3,nopm),hcFmt(r.maghrib,f,+c.o4,nopm),hcFmt(r.isha,f,+c.o5,nopm)];for(k=0;k<6;k++)if(o[ms+'|'+k]!==undefined)a[k]=o[ms+'|'+k];return a}
function hcTd(ex,ms,k,v){return ex?'<td>'+esc(v)+'</td>':'<td contenteditable="true" spellcheck="false" data-hpe="'+ms+'|'+k+'">'+esc(v)+'</td>'}
function hcTip(ex){return ex?'':'<div class="hcph">'+hct('tip')+'</div>'}
function hcPraySample(X,days,ex){var T=X.T,pick=[1,10,20,days.length],pr=pick.map(function(d){return hcDay(days[d-1].ms)}),h='<div class="hcpt"><h6>'+T.pt+'</h6><table><tr><th></th>'+pick.map(function(d){return'<th>'+hcDg(d)+'</th>'}).join('')+'</tr>',k;
 for(k=0;k<6;k++)h+='<tr><td>'+T.ph[k]+'</td>'+pr.map(function(p,j){return hcTd(ex,days[pick[j]-1].ms,k,p[k])}).join('')+'</tr>';
 return h+'</table>'+hcTip(ex)+'</div>'}
function hcPrayFull(X,days,ex,cols,nopm,title){var T=X.T,half=cols==2?Math.ceil(days.length/2):days.length,i,
 part=function(a,b){var s='<table><tr><th>'+T.dy+'</th>'+T.ph.map(function(n){return'<th>'+n+'</th>'}).join('')+'</tr>';for(i=a;i<b;i++){var p=hcDay(days[i].ms,nopm);s+='<tr><td>'+hcDg(days[i].d)+'</td>'+p.map(function(x,k){return hcTd(ex,days[i].ms,k,x)}).join('')+'</tr>'}return s+'</table>'};
 return'<div class="hcpt hcfl"><h6>'+(title||T.pt)+'</h6>'+(cols==2?'<div class="hcpt2">'+part(0,half)+part(half,days.length)+'</div>':part(0,half))+hcTip(ex)+'</div>'}
function hcBlk(cls,w,al,h,share){return h?'<div class="hcb '+cls+'" style="width:calc('+Math.max(20,Math.min(100,w))+'% - '+(share?'.5em':'0em')+');'+hcMg(al)+'">'+h+'</div>':''}
function hcNotes(X,key,ex){var c=X.c,nv=HCX.n[key]||'',nr=+c.nr,i,ln='';for(i=0;i<nr;i++)ln+='<i></i>';
 return'<div class="hcn"><h6>'+esc(c.nl||X.T.nt)+'</h6><div class="hcnb" style="height:'+(nr*1.6)+'em">'+ln+(ex?'<div class="hcnt">'+esc(nv)+'</div>':'<textarea class="hcnt" data-hcn="'+key+'" maxlength="1200">'+esc(nv)+'</textarea>')+'</div></div>'}
function hcMosque(){return'<svg class="hcmq" viewBox="0 0 960 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><rect width="960" height="200" fill="currentColor" opacity=".10"/><g fill="currentColor"><path d="M350 200V118a130 100 0 0 1 260 0v82z"/><rect x="477" y="6" width="6" height="22"/><circle cx="480" cy="26" r="8"/><rect x="246" y="64" width="22" height="136"/><path d="M242 64l15-40 15 40z"/><rect x="692" y="64" width="22" height="136"/><path d="M688 64l15-40 15 40z"/><path opacity=".65" d="M130 200v-52a42 34 0 0 1 84 0v52zM746 200v-52a42 34 0 0 1 84 0v52z"/><path opacity=".45" d="M0 200v-30h110v30zM850 200v-30h110v30z"/></g></svg>'}
function hcImg(X,frac){var c=X.c,H=Math.round(X.z[1]*frac*c.ih/100);return'<div class="hcb hcib" style="height:'+H+'px;width:'+c.iz+'%;'+hcMg(c.ia)+'">'+(HCX.img?'<div class="hcimg" style="background-image:url(&quot;'+HCX.img+'&quot;)"></div>':hcMosque())+'</div>'}
function hcHad(X,i,ex){var c=X.c,key='h-'+X.yr+'-'+(i+1),v=HCX.hd[key]||'',fs=1.15*c.hf/100;
 return'<div class="hcb hcha" style="width:'+c.hz+'%;'+hcMg(c.ha)+'"><div class="hchh">'+esc(X.T.hd)+'</div>'+(ex?'<div class="hcht" style="font-size:'+fs+'em">'+hcTx(v)+'</div>':'<textarea class="hcht" data-hhd="'+key+'" style="font-size:'+fs+'em" placeholder="'+esc(hct('hph'))+'" maxlength="900">'+esc(v)+'</textarea>')+'</div>'}
function hcLogo(X){var c=X.c,s=c.ls/100;return c.lm=='up'&&HCX.logo?'<img class="hcli" alt="" style="max-height:'+(5.2*s)+'em;max-width:'+(11*s)+'em" src="'+HCX.logo+'">':'<div class="hcbr" style="font-size:'+(1.5*s)+'em"><span>Huda</span><b>Brain</b></div>'}
function hcTxs(X,pos){return(X.c.tx||[]).filter(function(x){return x.p==pos&&x.t}).map(function(x){return'<div class="hctx" style="font-size:'+(.95*x.s/100)+'em;text-align:'+(pos=='r'?'right':pos=='l'?'left':'center')+'">'+hcTx(x.t)+'</div>'}).join('')}
function hcFoot(X){var c=X.c,h='';if(c.hl=='bl'||c.hl=='bc'||c.hl=='br')h+='<div class="hcbl" style="justify-content:'+(c.hl=='bl'?'flex-start':c.hl=='bc'?'center':'flex-end')+'">'+hcLogo(X)+'</div>';if(c.ft)h+='<div class="hcft">'+hcTx(c.ft)+'</div>';return h}
function hcHead(X,t,pat){var c=X.c,hl=c.hl,logo=hcLogo(X),cL=(hl=='l'?'<div class="hcl">'+logo+'</div>':'')+hcTxs(X,'l'),cR=hcTxs(X,'r')+(hl=='r'?'<div class="hcl">'+logo+'</div>':'');
 return'<div class="hch">'+(pat?'<svg class="hcpat" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="hcpt" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M0 11L11 0L22 11L11 22Z" fill="none" stroke="#fff3c8" stroke-opacity=".2" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#hcpt)"/></svg>':'')+
 (cL?'<div class="hchl">'+cL+'</div>':'')+'<div class="hct">'+(hl=='c'?'<div class="hcl hcc2">'+logo+'</div>':'')+(t.ram?'<div style="text-align:'+hcAl(c.ma)+'">'+HCCR+'</div>':'')+'<div class="hcy" style="font-size:'+(1.15*c.ys/100)+'em;text-align:'+hcAl(c.ya)+'">'+t.y+'</div><div class="hcm" style="font-size:'+(2.9*c.ms/100*(t.sc||1)).toFixed(2)+'em;text-align:'+hcAl(c.ma)+'">'+t.m+'</div>'+(t.ar||'')+(t.rng||'')+hcTxs(X,'c')+'</div>'+(cR?'<div class="hchr">'+cR+'</div>':'')+'</div>'}
function hcHeadFor(X,M,ram,pat){var c=X.c,T=X.T,d1=new Date(M.days[0].ms),d2=new Date(M.days[M.days.length-1].ms),m1=d1.getUTCMonth()+1,m2=d2.getUTCMonth()+1,y1=d1.getUTCFullYear(),y2=d2.getUTCFullYear();
 return hcHead(X,{y:T.yr+' '+hcDg(M.yr),m:T.mo[M.m],ram:ram,ar:c.ar&&X.L!='ar'?'<div class="hca" style="text-align:'+hcAl(c.ma)+';font-size:'+(1.45*c.ms/100)+'em">'+HCL.ar.mo[M.m]+'</div>':'',rng:c.gr?'<div class="hcgr" style="text-align:'+hcAl(c.ya)+'">'+hcP2(m1)+'/'+y1+(m1!=m2||y1!=y2?' \u2013 '+hcP2(m2)+'/'+y2:'')+'</div>':''},pat)}
function hcGrid(X,M,mini,hgt){var c=X.c,T=X.T,days=M.days,offs=(new Date(days[0].ms).getUTCDay()-c.ws+7)%7,total=Math.ceil((offs+days.length)/7)*7,k,x,wh='',cells='';
 for(k=0;k<7;k++){var wi=(+c.ws+k)%7;wh+='<div class="'+(wi==5&&c.fd?'fr':'')+'">'+(mini?T.wi[wi]:T.wd[wi])+'</div>'}
 for(k=0;k<total;k++){if(k<offs||k>=offs+days.length){cells+='<div class="'+(mini?'hcq':'hcc')+' e"></div>';continue}
  x=days[k-offs];var dt=new Date(x.ms),wd=dt.getUTCDay(),g=dt.getUTCDate(),fr=wd==5&&c.fd,td=x.ms==X.td&&c.td;
  if(mini){cells+='<div class="hcq'+(fr?' fr':'')+(td?' td':'')+'">'+hcDg(x.d)+'</div>';continue}
  var oi=HCO[(M.m+1)+'-'+x.d],oc=c.oc&&oi!==undefined?T.oc[oi]:'',lq=c.oc&&M.m==8&&x.d>=21&&x.d%2==1,gn=c.gp!='off'?'<i class="hcgn '+c.gp+'">'+hcP2(g)+'</i>':'';
  cells+='<div class="hcc'+(fr?' fr':'')+(td?' td':'')+(g==1&&c.gm?' gm':'')+'">'+(fr?'<s class="hcfb"></s>':'')+(td?'<s class="hctd"></s>':'')+'<div class="hcdw"><b class="hcd">'+hcDg(x.d)+'</b>'+(c.gp=='in'?gn:'')+'</div>'+(c.gp!='in'?gn:'')+(oc?'<u class="hco">'+oc+'</u>':lq?'<u class="hco">\u2605</u>':'')+'</div>'}
 return{rows:total/7,wk:'<div class="'+(mini?'hcmw':'hcwk')+'">'+wh+'</div>',g:'<div class="'+(mini?'hcmg':'hcg2')+'" style="grid-template-rows:repeat('+(total/7)+',1fr);'+(hgt?'height:'+hgt+'em;flex:none;':'')+'">'+cells+'</div>'}}
function hcMini(X,M,ram){var g=hcGrid(X,M,true);return'<div class="hcmn'+(ram?' ram':'')+'"><div class="hcmh">'+X.T.mo[M.m]+' '+hcDg(M.yr)+'</div>'+g.wk+g.g+'</div>'}
function hcStars(w,h,seed){var s=seed,r=function(){s=(s*1664525+1013904223)>>>0;return s/4294967296},o='',i;for(i=0;i<70;i++)o+='<circle cx="'+(r()*w).toFixed(1)+'" cy="'+(r()*h).toFixed(1)+'" r="'+(.7+r()*1.6).toFixed(1)+'" fill="'+(r()>.7?'#f6e7a8':'#ffffff')+'" opacity="'+(.35+r()*.5).toFixed(2)+'"/>';return o}
function hcDecor(X,ram,th){var w=X.z[0],h=X.z[1],o='';
 if(ram)o='<defs><radialGradient id="hcg1" cx="82%" cy="0%" r="60%"><stop offset="0" stop-color="#4a50b0" stop-opacity=".65"/><stop offset="1" stop-color="#4a50b0" stop-opacity="0"/></radialGradient></defs><rect width="'+w+'" height="'+h+'" fill="url(#hcg1)"/>'+hcStars(w,h,1448);
 else if(th&&th.gl)o='<defs><radialGradient id="hcg2"><stop offset="0" stop-color="'+th.ac+'" stop-opacity=".55"/><stop offset="1" stop-color="'+th.ac+'" stop-opacity="0"/></radialGradient><radialGradient id="hcg3"><stop offset="0" stop-color="#7b6cff" stop-opacity=".5"/><stop offset="1" stop-color="#7b6cff" stop-opacity="0"/></radialGradient></defs><circle cx="'+w*.15+'" cy="'+h*.1+'" r="'+w*.45+'" fill="url(#hcg2)"/><circle cx="'+w*.9+'" cy="'+h*.45+'" r="'+w*.4+'" fill="url(#hcg3)"/><circle cx="'+w*.3+'" cy="'+h*.95+'" r="'+w*.5+'" fill="url(#hcg2)" opacity=".7"/>';
 return o?'<svg class="hcdc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'">'+o+'</svg>':''}
function hcVars(X,ram){var c=X.c,th=ram?null:HCTH[c.th],v='';
 if(th){var dk=th.dk;v+='--pp:'+th.g[0]+';--ik:'+th.ik+';--ac:'+th.ac+';--mu:'+th.mu+';--fr:'+th.fr+';--ln:'+(dk?'rgba(255,255,255,.22)':'rgba(60,45,10,.24)')+';--cc:'+(th.gl?'rgba(255,255,255,.12)':dk?'rgba(255,255,255,.07)':'rgba(255,255,255,.62)')+';--cb:'+(th.gl?'rgba(255,255,255,.3)':dk?'rgba(255,255,255,.16)':'rgba(60,45,10,.18)')+';--hh:'+(dk?'#141006':'#ffffff')+';'}
 if(!ram){if(c.ac)v+='--ac:'+c.ac+';';if(c.fr)v+='--fr:'+c.fr+';';if(c.pp)v+='--pp:'+c.pp+';';if(c.ik)v+='--ik:'+c.ik+';'}
 return v}
function hcPage(i,ex){var X=hcCtx(),c=X.c,T=X.T,st=+c.st,z=X.z,w=z[0],h=z[1],M=hcMon(X,i),ram=(st!=8&&i==8&&!!c.rm),th=ram?null:HCTH[c.th]&&c.th!='off'?HCTH[c.th]:null;
 var cls='hcp hcs'+st+(ram?' hcram':'')+' hcx-'+c.hc+(c.hl=='c'?' hclc':'')+(th?' hcth':''),css='width:'+w+'px;height:'+h+'px;font-size:'+(Math.min(w,h)/54).toFixed(2)+'px;--ds:'+(c.ds/100)+';--gs:'+(c.gs/100)+';'+hcVars(X,ram);
 if(c.fn!='site')css+="font-family:'"+c.fn+"',"+HCFB+';';
 if(th&&!th.ph)css+='background-image:linear-gradient(160deg,'+th.g[0]+','+th.g[1]+');';
 if(!M)return'<div class="'+cls+'" style="'+css+'"><div class="hcin"><div class="hcerr">'+hct('err')+'</div></div></div>';
 var bg=th&&th.ph?(HCX.img?'<div class="hcbgi" style="background-image:url(&quot;'+HCX.img+'&quot;)"></div><div class="hcbgo"></div>':''):'',
  frames=(ram||st==3)?'<div class="hcfm"></div><div class="hcfm hcfm2"></div>':'',body='',g,pray,notes,ft=hcFoot(X),yk=M.yr+'-'+(M.m+1);
 if(st==8){var cols=w>h?4:w==h?4:3,mm='',k,mo;for(k=0;k<12;k++){mo=hcMon(X,k);if(mo)mm+=hcMini(X,mo,!!c.rm&&k==8)}
  body=hcHead(X,{y:T.yr,m:hcDg(X.yr),sc:1.15})+'<div class="hcyr8" style="grid-template-columns:repeat('+cols+',1fr)">'+mm+'</div>'+ft}
 else if(st==7){var M2=hcMon(X,i+1)||M,gA=hcGrid(X,M,false),gB=hcGrid(X,M2,false),rows=Math.max(gA.rows,gB.rows),hg=rows*3.5,
   head=hcHead(X,{y:T.yr+' '+hcDg(M.yr)+(M2.yr!=M.yr?' \u2013 '+hcDg(M2.yr):''),m:T.mo[M.m]+' \u2013 '+T.mo[M2.m],sc:.62,ar:c.ar&&X.L!='ar'?'<div class="hca" style="text-align:'+hcAl(c.ma)+';font-size:'+(1.1*c.ms/100)+'em">'+HCL.ar.mo[M.m]+' \u2013 '+HCL.ar.mo[M2.m]+'</div>':''}),
   col=function(mo,gr){return'<div class="hc2m"><div class="hcmh">'+T.mo[mo.m]+' '+hcDg(mo.yr)+'</div>'+gr.wk+hcGrid(X,mo,false,hg).g+(c.pm!='off'?hcPrayFull(X,mo.days,ex,1,true):'')+'</div>'};
  body=head+hcImg(X,.115)+'<div class="hc2c">'+col(M,gA)+col(M2,gB)+'</div>'+(c.nt?hcBlk('',100*c.nz/100,c.na,hcNotes(X,yk,ex)):'')+ft}
 else{
  body=hcHeadFor(X,M,ram,st==3&&!ram);g=hcGrid(X,M,false);
  if(st==9)body+=hcHad(X,i,ex)+g.wk+g.g;
  else if(st==10)body+=hcImg(X,.27)+g.wk+g.g;
  else if(st==6){var P1=hcMon(X,i-1),N1=hcMon(X,i+1);body+=hcImg(X,.13)+g.wk+g.g+(c.pm=='off'?'':hcBlk('',100*c.pz/100,c.pa,c.pm=='full'?hcPrayFull(X,M.days,ex,2):hcPraySample(X,M.days,ex)))+
    '<div class="hcrow3">'+(P1?'<div class="hcb">'+hcMini(X,P1,false)+'</div>':'<div class="hcb"></div>')+(c.nt?hcBlk('',52*c.nz/100,c.na,hcNotes(X,yk,ex),true):'<div class="hcb" style="width:52%"></div>')+(N1?'<div class="hcb">'+hcMini(X,N1,false)+'</div>':'<div class="hcb"></div>')+'</div>'}
  else{var smp=c.pm=='sample';pray=c.pm=='off'?'':c.pm=='full'?hcPrayFull(X,M.days,ex,2):hcPraySample(X,M.days,ex);notes=c.nt?hcNotes(X,yk,ex):'';
   body+=g.wk+g.g+(pray||notes?'<div class="hcf">'+hcBlk('',(smp?58:100)*c.pz/100,c.pa,pray,smp&&notes)+hcBlk('',(smp&&pray?38:100)*c.nz/100,c.na,notes,smp&&pray)+'</div>':'')}
  body+=ft}
 return'<div class="'+cls+'" style="'+css+'">'+bg+hcDecor(X,ram,th)+frames+'<div class="hcin">'+body+'</div></div>'}
function hct(k){var a=HCT[k];if(!a)return k;return lang=='ta'?a[0]:a[1]}
function hc2(a,b){return lang=='ta'?a:b}
function hcFnOpts(){var l=HCFN[hcL()]||HCFN.en,v=HCX.c.fn;return'<option value="site"'+(v=='site'?' selected':'')+'>'+hc2('தளத்தின் எழுத்துரு','Site font')+'</option>'+l.map(function(n){return'<option value="'+n+'"'+(v==n?' selected':'')+'>'+n+'</option>'}).join('')}
function hcAlB(k,v,pre){return'<div class="hcal">'+[['l','alL'],['c','alC'],['r','alR']].map(function(x){return'<button type="button" class="'+(v==x[0]?'on':'')+'" data-hal="'+pre+k+'|'+x[0]+'">'+hct(x[1])+'</button>'}).join('')+'</div>'}
function hcFld(k,ty,o){o=o||{};var v=HCX.c[k],h;
 if(ty=='al')return'<div class="hcfld"><span>'+hct(k)+'</span>'+hcAlB(k,v,'')+'</div>';
 if(ty=='rng')return'<div class="hcfld"><span>'+hct(k)+'</span><button type="button" class="hcsp" data-hst="'+k+'|-1">\u2212</button><input type="range" data-hk="'+k+'" data-ty="n" min="'+o.mn+'" max="'+o.mx+'" step="'+(o.st||1)+'" value="'+v+'"><button type="button" class="hcsp" data-hst="'+k+'|1">+</button><em class="hcrv" id="hcv-'+k+'">'+v+(o.u||'')+'</em></div>';
 h='<label class="hcfld"><span>'+hct(k)+'</span>';
 if(ty=='sel')h+='<select data-hk="'+k+'"'+(o.n?' data-ty="n"':'')+'>'+o.o.map(function(x){return'<option value="'+x[0]+'"'+(String(v)==String(x[0])?' selected':'')+'>'+hc2(x[1],x[2])+'</option>'}).join('')+'</select>';
 else if(ty=='fn')h+='<select data-hk="fn">'+hcFnOpts()+'</select>';
 else if(ty=='chk')h+='<input type="checkbox" data-hk="'+k+'"'+(v?' checked':'')+'>';
 else if(ty=='col')h+='<input type="color" data-hk="'+k+'" value="'+(v||o.d||'#888888')+'">';
 else if(ty=='num')h+='<input type="number" data-hk="'+k+'" data-ty="n" step="'+(o.st||'any')+'" value="'+v+'">';
 else h+='<input type="text" data-hk="'+k+'" maxlength="80" value="'+esc(v)+'">';
 return h+'</label>'}
function hcSec(n,body,open){return'<details class="hcsec"'+(open?' open':'')+'><summary>'+hct('s'+n)+'</summary>'+body+'</details>'}
function hcTxList(){return(HCX.c.tx||[]).map(function(x,i){return'<div class="hctxi"><textarea data-htx="'+i+'" maxlength="240" placeholder="'+esc(hct('txh'))+'">'+esc(x.t)+'</textarea><div class="hcfld"><span>'+hct('txp')+'</span>'+hcAlB('',x.p,'t'+i)+'</div><div class="hcfld"><span>'+hct('txs')+'</span><button type="button" class="hcsp" data-hts="'+i+'|-10">\u2212</button><em class="hcrv" id="hctv-'+i+'">'+x.s+'%</em><button type="button" class="hcsp" data-hts="'+i+'|10">+</button><button type="button" class="hcb2" data-htd="'+i+'">'+hct('txd')+'</button></div></div>'}).join('')}
function hcStyStrip(){var z=HCZ[HCX.c.sz]||HCZ.a4p,tw=104,sc=tw/z[0],th=Math.round(z[1]*sc),s,h='';
 for(s=1;s<=10;s++)h+='<button type="button" class="hcsc'+(HCX.c.st==s?' on':'')+'" data-hcst="'+s+'"><div class="hctn" style="width:'+tw+'px;height:'+th+'px"><div style="width:'+z[0]+'px;height:'+z[1]+'px;transform:scale('+sc.toFixed(4)+');transform-origin:0 0">'+hcWith({st:s},function(){return hcPage(HCX.i<hcN()?HCX.i:0,true)})+'</div></div><b>'+s+' \u00b7 '+hc2(HCS[s][0],HCS[s][1])+'</b></button>';
 return h}
function hcThmStrip(){var h='<button type="button" class="'+(HCX.c.th=='off'?'on':'')+'" data-hcth="off"><i style="background:linear-gradient(135deg,#fff,#d6dbe3)"></i>'+hct('thOff')+'</button>',k;
 for(k in HCTH){var x=HCTH[k];h+='<button type="button" class="'+(HCX.c.th==k?'on':'')+'" data-hcth="'+k+'"><i style="background:linear-gradient(135deg,'+x.g[0]+','+(x.g[1]==x.g[0]?x.ac:x.g[1])+')"></i>'+hc2(x.n[0],x.n[1])+'</button>'}
 return h}
function hcPanel(){var pos=[['l','இடது','Left'],['c','நடு','Centre'],['r','வலது','Right']],
 h=hcSec(1,hcFld('sz','sel',{o:[['a4p','A4 நிமிர்வு','A4 portrait'],['a4l','A4 படுக்கை','A4 landscape'],['sq','சதுரம் 1:1','Square 1:1'],['st','ஸ்டோரி 9:16','Story 9:16']]})+hcFld('cl','sel',{o:[['','பயன்பாட்டு மொழி','Same as app'],['ta','தமிழ்','Tamil'],['en','English','English'],['ar','العربية','Arabic'],['si','සිංහල','Sinhala']]})+hcFld('fn','fn')+hcFld('dg','sel',{o:[['lat','1 2 3','1 2 3'],['ar','١ ٢ ٣','١ ٢ ٣']]})+hcFld('ws','sel',{n:1,o:[[0,'ஞாயிறு','Sunday'],[6,'சனி','Saturday'],[1,'திங்கள்','Monday']]}),1)
 +hcSec(2,hcFld('ac','col',{d:'#0f6b4a'})+hcFld('fr','col',{d:'#c0392b'})+hcFld('pp','col',{d:'#ffffff'})+hcFld('ik','col',{d:'#1d2430'})+'<button type="button" class="hcb2" data-hcrc="1">'+hct('rc')+'</button>')
 +hcSec(3,hcFld('ds','rng',{mn:70,mx:140,st:5,u:'%'})+hcFld('gp','sel',{o:[['tr','மேல் வலது','Top right'],['tl','மேல் இடது','Top left'],['br','கீழ் வலது','Bottom right'],['bl','கீழ் இடது','Bottom left'],['in','தேதிக்கு அருகில்','Beside date'],['off','காட்ட வேண்டாம்','Hidden']]})+hcFld('gs','rng',{mn:50,mx:160,st:5,u:'%'})+hcFld('gm','chk')+hcFld('oc','chk')+hcFld('fd','chk')+hcFld('td','chk')+hcFld('rm','chk')+hcFld('adj','sel',{n:1,o:[[-2,'-2','-2'],[-1,'-1','-1'],[0,'0 (Umm al-Qura)','0 (Umm al-Qura)'],[1,'+1','+1'],[2,'+2','+2']]}))
 +hcSec(4,hcFld('hc','sel',{o:[['auto','நடையின்படி','Style default'],['none','சாதாரண (முதல் எழுத்து மட்டும் பெரிது)','Normal (first letter capital)'],['up','அனைத்தும் கேப்பிட்டல் (ABC)','ALL CAPITAL (ABC)'],['low','அனைத்தும் சிம்பிள் (abc)','all simple (abc)']]})+hcFld('ys','rng',{mn:60,mx:220,st:10,u:'%'})+hcFld('ya','al')+hcFld('ms','rng',{mn:50,mx:150,st:5,u:'%'})+hcFld('ma','al')+hcFld('ar','chk')+hcFld('gr','chk')
  +hcFld('lm','sel',{o:[['site','இணையதள லோகோ (Huda Brain)','Website logo (Huda Brain)'],['up','பதிவேற்றிய லோகோ','Uploaded logo']]})+'<div class="hcfld"><button type="button" class="hcb2" data-hclg="1">'+hct('lg')+'</button><button type="button" class="hcb2" data-hclx="1">'+hct('lgx')+'</button><input type="file" id="hclf" accept="image/*" hidden></div>'
  +hcFld('hl','sel',{o:[['l','Header இடது','Header left'],['c','Header மேல் நடு','Header top centre'],['r','Header வலது','Header right'],['bl','கீழ் இடது','Bottom left'],['bc','கீழ் நடு','Bottom centre'],['br','கீழ் வலது','Bottom right'],['off','இல்லை','None']]})+hcFld('ls','rng',{mn:50,mx:220,st:10,u:'%'})
  +'<div class="hclb">'+hct('tx')+'</div><div id="hctl">'+hcTxList()+'</div><button type="button" class="hcb2" data-htxa="1">'+hct('txa')+'</button>'+hcFld('ft','txt'))
 +hcSec(5,'<div class="hclb">'+hct('im')+'</div><div class="hcfld"><button type="button" class="hcb2" data-hcig="1">'+hct('imu')+'</button><button type="button" class="hcb2" data-hcix="1">'+hct('imx')+'</button><input type="file" id="hcif" accept="image/*" hidden></div>'+hcFld('iz','rng',{mn:30,mx:100,st:5,u:'%'})+hcFld('ih','rng',{mn:40,mx:220,st:10,u:'%'})+hcFld('ia','al')
  +'<div class="hclb">'+hc2('ஹதீஸ் பெட்டி (நடை 9)','Hadith box (style 9)')+'</div>'+hcFld('hz','rng',{mn:40,mx:100,st:5,u:'%'})+hcFld('hf','rng',{mn:70,mx:170,st:5,u:'%'})+hcFld('ha','al'))
 +hcSec(6,hcFld('pm','sel',{o:[['sample','மாதிரி நாட்கள் (1, 10, 20, இறுதி)','Sample days (1, 10, 20, last)'],['full','முழு மாத அட்டவணை','Full month table'],['off','காட்ட வேண்டாம்','Hidden']]})+hcFld('pz','rng',{mn:40,mx:130,st:5,u:'%'})+hcFld('pa','al')+hcFld('ct','sel',{o:HCC.map(function(c){return[c[0],c[1],c[1]]}).concat([['manual','கைமுறை','Manual']])})+'<div class="hcfld"><button type="button" class="hcb2" data-hcgps="1">'+hct('gps')+'</button></div>'+hcFld('la','num')+hcFld('lo','num')+hcFld('tz','num',{st:.5})+hcFld('me','sel',{o:[['mwl','Muslim World League','Muslim World League'],['karachi','Karachi','Karachi'],['makkah','Umm al-Qura','Umm al-Qura'],['egypt','Egypt','Egypt'],['isna','ISNA','ISNA']]})+hcFld('as','sel',{n:1,o:[[1,'ஷாஃபிஈ / மற்றவை','Standard (Shafi)'],[2,'ஹனஃபி','Hanafi']]})+hcFld('f24','chk')+['o1','o2','o3','o4','o5'].map(function(k){return hcFld(k,'rng',{mn:-30,mx:30,st:1})}).join('')+'<button type="button" class="hcb2" data-hcpr="1">'+hct('pre')+'</button>')
 +hcSec(7,hcFld('nt','chk')+hcFld('nr','rng',{mn:1,mx:12,st:1})+hcFld('nl','txt')+hcFld('nz','rng',{mn:40,mx:130,st:5,u:'%'})+hcFld('na','al'))
 +hcSec(8,hcFld('q','sel',{n:1,o:[[1,'சாதாரண (1×)','Normal (1x)'],[2,'உயர் (2×)','High (2x)'],[3,'மிக உயர் (3×)','Ultra (3x)']]})+'<div class="hcex">'+['xpc','xpa','xic','xia','xdc','xda','xsc'].map(function(x){return'<button type="button" data-hcx="'+x+'">'+hct(x)+'</button>'}).join('')+'</div><div class="hcst" id="hcst"></div>',1);
 return h}
function hcInit(){if(HCX.c)return;var o=S('hcs',{})||{},k;HCX.c={};for(k in HCD)HCX.c[k]=o[k]!==undefined?o[k]:(Array.isArray(HCD[k])?[]:HCD[k]);var c=HCX.c;
 if(c.dg!='ar')c.dg='lat';if(!(c.st>=1&&c.st<=10))c.st=1;if(!HCTH[c.th])c.th='off';if(!Array.isArray(c.tx))c.tx=[];
 if(o.ti&&!c.tx.length)c.tx=[{t:String(o.ti),p:'r',s:100}];
 if(['l','c','r','bl','bc','br','off'].indexOf(c.hl)<0)c.hl='l';
 if(c.fn!='site'&&(HCFN[hcL()]||[]).indexOf(c.fn)<0)c.fn='site';
 HCX.n=S('hcn',{})||{};HCX.hd=S('hch',{})||{};HCX.pe=S('hcpe',{})||{};HCX.logo=S('hcl','')||'';HCX.img=S('hcim','')||'';
 var y=hcYear(hcCurYear(),c.adj),td=hcToday(),m=0;if(y)for(var j=0;j<12;j++)if(y[j].length&&y[j][0].ms<=td)m=j;HCX.i=(!c.y||c.y==hcCurYear())?m:0}
function hcSave(){P('hcs',HCX.c)}
function hcView(){hcInit();
 app.innerHTML='<div class="hcv"><div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic('cal')+'</span><b>'+t('st_stud')+'</b>'+stSwitch('cal')+'</div>'
 +'<div class="hctb"><div class="hcyr"><button type="button" data-hcy="-1" aria-label="-">'+ic('l')+'</button><span id="hcyl"></span><button type="button" data-hcy="1" aria-label="+" style="transform:scaleX(-1)">'+ic('l')+'</button></div><button type="button" class="hcb2" data-hcy="0">'+hct('today')+'</button><button type="button" class="hcb2 hcall1" data-hcall="1">'+hct('all')+'</button></div>'
 +'<div class="hclb">'+hct('stl')+'</div><div class="hcsr" id="hcsr">'+hcStyStrip()+'</div><div class="hclb">'+hct('thm')+'</div><div class="hcthr" id="hcthr">'+hcThmStrip()+'</div>'
 +'<div class="hcmc" id="hcmc"></div><div class="hcvw" id="hcvw"><div id="hcpg"></div></div>'
 +'<div class="hcnav" id="hcnav"><button type="button" data-hcp="-1" aria-label="prev">'+ic('l')+'</button><span id="hcpn"></span><button type="button" data-hcp="1" aria-label="next" style="transform:scaleX(-1)">'+ic('l')+'</button></div>'+hcPanel()+'</div>';
 hcRender()}
function hcRender(){var pg=$('#hcpg');if(!pg)return;var c=HCX.c,T=HCL[hcL()],yr=hcYr(),n=hcN();if(HCX.i>=n)HCX.i=0;hcFontLoad(c.fn);
 pg.innerHTML=hcPage(HCX.i,false);
 $('#hcyl').textContent=hcDg(yr)+' '+T.yr;
 var mc=$('#hcmc'),nv=$('#hcnav');if(mc)mc.style.display=n>1?'':'none';if(nv)nv.style.display=n>1?'':'none';
 if(n>1){$('#hcpn').textContent=(HCX.i+1)+' / 12';mc.innerHTML=T.mo.map(function(m,i){return'<button type="button" data-hcm="'+i+'" class="'+(i==HCX.i?'on':'')+'">'+m+'</button>'}).join('');var on=mc.querySelector('.on');if(on)try{mc.scrollLeft=on.offsetLeft-mc.clientWidth/2+on.clientWidth/2}catch(e){}}
 hcFit()}
function hcFit(){var vw=$('#hcvw'),pg=$('#hcpg');if(!vw||!pg)return;var sz=HCZ[HCX.c.sz]||HCZ.a4p,w=vw.clientWidth||sz[0],sc=Math.min(1,w/sz[0]);vw.style.height=(sz[1]*sc)+'px';pg.style.cssText='position:absolute;top:0;left:'+((w-sz[0]*sc)/2)+'px;width:'+sz[0]+'px;height:'+sz[1]+'px;transform:scale('+sc+');transform-origin:0 0'}
function hcStripSoon(){clearTimeout(HCX._st);HCX._st=setTimeout(function(){var s=$('#hcsr'),x=s?s.scrollLeft:0;if(s){s.innerHTML=hcStyStrip();s.scrollLeft=x}var t0=$('#hcthr');if(t0)t0.innerHTML=hcThmStrip()},260)}
function hcGo(d){var n=HCX.i+d;if(n<0||n>=hcN())return;HCX.i=n;hcRender();var e=$('#hcpg .hcp');if(e)e.classList.add(d>0?'hcinr':'hcinl');hcStripSoon()}
function hcAll(){var c=HCX.c,sz=HCZ[c.sz]||HCZ.a4p,tw=Math.floor(Math.min(190,(Math.min(innerWidth,720)-40)/2)),sc=tw/sz[0],o=D.createElement('div'),i,h='';o.className='hcall';o.id='hcall';
 for(i=0;i<hcN();i++)h+='<button type="button" class="hcmini" data-hcm="'+i+'" style="width:'+tw+'px;height:'+Math.round(sz[1]*sc)+'px"><div style="width:'+sz[0]+'px;height:'+sz[1]+'px;transform:scale('+sc+');transform-origin:0 0;pointer-events:none">'+hcPage(i,true)+'</div></button>';
 o.innerHTML='<div class="hcalh"><b>'+hct('all')+'</b><button type="button" class="hcb2" data-hcallx="1">'+hct('close')+'</button></div><div class="hcgrid">'+h+'</div>';D.body.appendChild(o)}
function hcSt(m){var e=$('#hcst');if(e)e.textContent=m||''}
function hcTs(){var d=new Date(),p=hcP2;return d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+'-'+p(d.getHours())+p(d.getMinutes())+p(d.getSeconds())}
function hcLoad(src,test){return new Promise(function(ok,no){if(test())return ok();var s=D.createElement('script');s.src=src;s.onload=function(){test()?ok():no(new Error('lib'))};s.onerror=function(){no(new Error('load'))};D.head.appendChild(s)})}
function hcLibs(pdf){return hcLoad('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',function(){return window.html2canvas}).then(function(){return pdf?hcLoad('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',function(){return window.jspdf&&window.jspdf.jsPDF}):0})}
function hcFontWait(){var f=HCX.c.fn,p=[];if(D.fonts&&D.fonts.load&&f!='site')p.push(D.fonts.load('700 20px "'+f+'"','Aa 123 \u0b85 \u0627 \u0d85').catch(function(){}));if(D.fonts&&D.fonts.ready)p.push(D.fonts.ready);return Promise.race([Promise.all(p),new Promise(function(ok){setTimeout(ok,5000)})])}
function hcCanvas(i){var d=D.createElement('div');d.style.cssText='position:fixed;left:-99999px;top:0;';d.innerHTML=hcPage(i,true);D.body.appendChild(d);
 return hcFontWait().then(function(){return window.html2canvas(d.firstChild,{scale:+HCX.c.q||2,backgroundColor:null,useCORS:true,logging:false})}).then(function(cv){d.remove();return cv},function(e){d.remove();throw e})}
function hcDl(blob,name){var a=D.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;D.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},4000)}
function hcName(i,ext,ts){return'huda-brain-hijri-'+hcYr()+'-'+(hcN()==1?'year':hcP2(i+1))+'-'+ts+'.'+ext}
function hcPng(list,ts){var p=Promise.resolve();list.forEach(function(i,n){p=p.then(function(){hcSt(hct('busy')+' '+(n+1)+'/'+list.length);return hcCanvas(i)}).then(function(cv){return new Promise(function(ok){cv.toBlob(function(b){hcDl(b,hcName(i,'png',ts));setTimeout(ok,450)},'image/png')})})});return p}
function hcPdf(list,ts){var sz=HCZ[HCX.c.sz]||HCZ.a4p,wm=sz[0]*.264583,hm=sz[1]*.264583,ori=sz[0]>sz[1]?'l':'p',pdf=null,p=Promise.resolve();
 list.forEach(function(i,n){p=p.then(function(){hcSt(hct('busy')+' '+(n+1)+'/'+list.length);return hcCanvas(i)}).then(function(cv){if(!pdf)pdf=new window.jspdf.jsPDF({orientation:ori,unit:'mm',format:[wm,hm]});else pdf.addPage([wm,hm],ori);pdf.addImage(cv.toDataURL('image/jpeg',.95),'JPEG',0,0,wm,hm)})});
 return p.then(function(){pdf.save('huda-brain-hijri-'+hcYr()+(list.length>1||hcN()==1?'':'-'+hcP2(list[0]+1))+'-'+ts+'.pdf')})}
function hcPrint(list){var sz=HCZ[HCX.c.sz]||HCZ.a4p,box=D.createElement('div'),st=D.createElement('style');box.id='hcpr';box.innerHTML=list.map(function(i){return hcPage(i,true)}).join('');
 st.id='hcpst';st.textContent='@page{size:'+sz[0]+'px '+sz[1]+'px;margin:0}';D.head.appendChild(st);D.body.appendChild(box);D.body.classList.add('hcprint');
 var done=function(){D.body.classList.remove('hcprint');box.remove();st.remove()};window.addEventListener('afterprint',done,{once:true});setTimeout(function(){window.print()},120)}
function hcAllIdx(){var a=[],i;for(i=0;i<hcN();i++)a.push(i);return a}
function hcExport(k){var cur=[Math.min(HCX.i,hcN()-1)],all=hcAllIdx(),ts=hcTs();
 if(k=='xsc')return hcShareCy(cur[0]);if(k=='xpc')return hcPrint(cur);if(k=='xpa')return hcPrint(all);
 hcSt(hct('busy'));var pdf=k=='xdc'||k=='xda';
 hcLibs(pdf).then(function(){return pdf?hcPdf(k=='xda'?all:cur,ts):hcPng(k=='xia'?all:cur,ts)}).then(function(){hcSt('')},function(e){console.warn(e);hcSt(hct('ldf'));toast(hct('ldf'))})}
function hcRead(f,max,type,q,cb){if(!f)return;var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var m=Math.min(1,max/Math.max(im.width,im.height)),cv=D.createElement('canvas');cv.width=Math.max(1,Math.round(im.width*m));cv.height=Math.max(1,Math.round(im.height*m));var x=cv.getContext('2d');if(type=='image/jpeg'){x.fillStyle='#fff';x.fillRect(0,0,cv.width,cv.height)}x.drawImage(im,0,0,cv.width,cv.height);cb(cv.toDataURL(type,q))};im.src=r.result};r.readAsDataURL(f)}
function hcGps(){if(!navigator.geolocation)return toast(hct('gpe'));navigator.geolocation.getCurrentPosition(function(p){var c=HCX.c;c.la=+p.coords.latitude.toFixed(4);c.lo=+p.coords.longitude.toFixed(4);c.tz=-new Date().getTimezoneOffset()/60;c.ct='manual';hcSave();hcSync();hcRender();hcStripSoon()},function(){toast(hct('gpe'))},{timeout:12000,maximumAge:600000})}
function hcSync(){['la','lo','tz','ct'].forEach(function(k){var e=D.querySelector('.hcv [data-hk="'+k+'"]');if(e)e.value=HCX.c[k]})}
function hcFnFix(){var c=HCX.c,sel=D.querySelector('.hcv [data-hk="fn"]');if(c.fn!='site'&&(HCFN[hcL()]||[]).indexOf(c.fn)<0)c.fn='site';if(sel)sel.innerHTML=hcFnOpts()}
function hcSetAl(el){/* refresh the pressed look of one left / centre / right group */var g=el.parentNode;Array.prototype.forEach.call(g.children,function(b){b.classList.toggle('on',b===el)})}
function hcStep(k,dir){var inp=D.querySelector('.hcv input[data-hk="'+k+'"]');if(!inp)return;var st=+inp.step||1,mn=+inp.min,mx=+inp.max,v=Math.round((+HCX.c[k]+dir*st)*1000)/1000;v=Math.max(mn,Math.min(mx,v));HCX.c[k]=v;inp.value=v;var rv=$('#hcv-'+k);if(rv)rv.textContent=v+(rv.textContent.slice(-1)=='%'?'%':'');hcSave();hcRender();hcStripSoon()}
D.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('button,[data-stmb]'):null;if(!b){var m0=D.querySelector('.stmp');if(m0)m0.hidden=true;return}
 if(b.hasAttribute('data-stmb')){var mp=b.parentNode.querySelector('.stmp');if(mp){mp.hidden=!mp.hidden;b.setAttribute('aria-expanded',!mp.hidden)}return}
 var mp2=D.querySelector('.stmp');if(mp2&&!b.closest('.stmp'))mp2.hidden=true;
 var a=function(n){return b.getAttribute(n)},v,c=HCX.c;
 if((v=a('data-hcy'))!==null){if(v=='0'){c.y=0;var yy=hcYear(hcCurYear(),c.adj),td=hcToday(),mm=0;if(yy)for(var j=0;j<12;j++)if(yy[j].length&&yy[j][0].ms<=td)mm=j;HCX.i=mm}else{c.y=hcYr()+ +v;if(c.y==hcCurYear())c.y=0}hcSave();hcRender();hcStripSoon()}
 else if((v=a('data-hcm'))!==null){HCX.i=+v;var ov=$('#hcall');if(ov)ov.remove();hcRender();hcStripSoon()}
 else if((v=a('data-hcp'))!==null)hcGo(+v);
 else if((v=a('data-hcst'))!==null){c.st=+v;hcSave();Array.prototype.forEach.call(D.querySelectorAll('#hcsr .hcsc'),function(x){x.classList.toggle('on',x===b)});hcRender()}
 else if((v=a('data-hcth'))!==null){c.th=v;hcSave();Array.prototype.forEach.call(D.querySelectorAll('#hcthr button'),function(x){x.classList.toggle('on',x===b)});hcRender();hcStripSoon()}
 else if((v=a('data-hst'))!==null){var q=v.split('|');hcStep(q[0],+q[1])}
 else if((v=a('data-hal'))!==null){var p=v.split('|');if(/^t\d+$/.test(p[0])){var it=c.tx[+p[0].slice(1)];if(it)it.p=p[1]}else c[p[0]]=p[1];hcSetAl(b);hcSave();hcRender();hcStripSoon()}
 else if((v=a('data-hts'))!==null){var q2=v.split('|'),it2=c.tx[+q2[0]];if(it2){it2.s=Math.max(50,Math.min(250,it2.s+ +q2[1]));var tv=$('#hctv-'+q2[0]);if(tv)tv.textContent=it2.s+'%';hcSave();hcRender()}}
 else if((v=a('data-htd'))!==null){c.tx.splice(+v,1);hcSave();$('#hctl').innerHTML=hcTxList();hcRender()}
 else if(a('data-htxa')!==null){if(c.tx.length<6){c.tx.push({t:'',p:'r',s:100});hcSave();$('#hctl').innerHTML=hcTxList();var ta=D.querySelectorAll('#hctl textarea');if(ta.length)ta[ta.length-1].focus();hcRender()}}
 else if(a('data-hcall')!==null)hcAll();
 else if(a('data-hcallx')!==null){var o2=$('#hcall');if(o2)o2.remove()}
 else if((v=a('data-hcx'))!==null)hcExport(v);
 else if(a('data-hcrc')!==null){['ac','fr','pp','ik'].forEach(function(k){c[k]=''});hcSave();Array.prototype.forEach.call(D.querySelectorAll('.hcv input[type=color]'),function(x){x.value=HCD[x.getAttribute('data-hk')]||'#888888'});hcRender();hcStripSoon()}
 else if(a('data-hclg')!==null){var f=$('#hclf');if(f)f.click()}
 else if(a('data-hclx')!==null){HCX.logo='';P('hcl','');c.lm='site';hcSave();var ls=D.querySelector('.hcv [data-hk="lm"]');if(ls)ls.value='site';hcRender();hcStripSoon()}
 else if(a('data-hcig')!==null){var f2=$('#hcif');if(f2)f2.click()}
 else if(a('data-hcix')!==null){HCX.img='';P('hcim','');hcRender();hcStripSoon()}
 else if(a('data-hcpr')!==null){delete HCX.pe[hcSig()];P('hcpe',HCX.pe);hcRender();hcStripSoon()}
 else if(a('data-hcgps')!==null)hcGps()});
function hcSet(e){var el=e.target,k=el.getAttribute&&el.getAttribute('data-hk');if(!k||!el.closest||!el.closest('.hcv'))return;
 var live=el.type=='range'||el.type=='color'||el.type=='text'||el.type=='number';if(e.type=='input'?!live:live)return;
 var v=el.type=='checkbox'?(el.checked?1:0):el.getAttribute('data-ty')=='n'?+el.value:el.value;if(v!==v)return;HCX.c[k]=v;
 if(k=='ct'&&v!='manual'){for(var i=0;i<HCC.length;i++)if(HCC[i][0]==v){HCX.c.la=HCC[i][2];HCX.c.lo=HCC[i][3];HCX.c.tz=HCC[i][4]}hcSync()}
 else if(k=='la'||k=='lo'||k=='tz'){HCX.c.ct='manual';var s=D.querySelector('.hcv [data-hk="ct"]');if(s)s.value='manual'}
 else if(k=='cl'){hcFnFix()}
 var rv=$('#hcv-'+k);if(rv)rv.textContent=v+(rv.textContent.slice(-1)=='%'?'%':'');hcSave();hcRender();hcStripSoon()}
D.addEventListener('input',hcSet);
D.addEventListener('change',function(e){hcSet(e);var t0=e.target;if(!t0)return;if(t0.id=='hclf'){hcRead(t0.files&&t0.files[0],480,'image/png',1,function(d){HCX.logo=d;P('hcl',d);HCX.c.lm='up';hcSave();var ls=D.querySelector('.hcv [data-hk="lm"]');if(ls)ls.value='up';hcRender();hcStripSoon()});t0.value=''}
 else if(t0.id=='hcif'){hcRead(t0.files&&t0.files[0],1400,'image/jpeg',.82,function(d){HCX.img=d;P('hcim',d);hcRender();hcStripSoon()});t0.value=''}});
D.addEventListener('input',function(e){var el=e.target,g=el.getAttribute?el.getAttribute.bind(el):null;if(!g)return;var k;
 if((k=g('data-hcn'))){HCX.n[k]=el.value;clearTimeout(HCX._n1);HCX._n1=setTimeout(function(){P('hcn',HCX.n)},400)}
 else if((k=g('data-hhd'))){HCX.hd[k]=el.value;clearTimeout(HCX._n2);HCX._n2=setTimeout(function(){P('hch',HCX.hd)},400)}
 else if((k=g('data-hpe'))){var o=hcOv(),tx=el.textContent.trim();if(tx)o[k]=tx;else delete o[k];clearTimeout(HCX._n3);HCX._n3=setTimeout(function(){P('hcpe',HCX.pe)},400)}
 else if((k=g('data-htx'))){var it=HCX.c.tx[+k];if(it){it.t=el.value;hcSave();hcRender()}}});
D.addEventListener('keydown',function(e){var el=e.target;if(e.key=='Enter'&&el.getAttribute&&el.getAttribute('data-hpe')){e.preventDefault();el.blur()}});
(function(){var x0=0,y0=0,on=false;D.addEventListener('pointerdown',function(e){var w=e.target.closest&&e.target.closest('#hcvw');on=!!w&&!e.target.isContentEditable&&!/TEXTAREA|INPUT/.test(e.target.tagName);x0=e.clientX;y0=e.clientY},true);
 D.addEventListener('pointerup',function(e){if(!on)return;on=false;var dx=e.clientX-x0,dy=e.clientY-y0;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)hcGo(dx<0?1:-1)},true);
 D.addEventListener('keydown',function(e){if(!$('#hcvw')||e.target.isContentEditable||/TEXTAREA|INPUT|SELECT/.test(e.target.tagName))return;if(e.key=='ArrowRight')hcGo(1);else if(e.key=='ArrowLeft')hcGo(-1)});
 window.addEventListener('resize',function(){hcFit()})})();
function stSwitch(tab){wdWarm();return''}
function stCrBtn(){return'<button type="button" class="stcr" data-sttl="cr" aria-label="'+t('stt_cr')+'">'+ic('sparkle')+'<span>'+t('stt_cr')+'</span></button>'}
function stIsHome(st){st=st||cur;return!!st&&st.v=='studio'&&!st.t&&!st.src&&!(st.n>0)}
var CDRDOC=["setup()  /  draw(t, p, f)", "W, H, DUR, FPS", "c  (ctx)", "bg(fill, angle)", "rect(x, y, w, h, fill, r, stroke, sw)", "circle(x, y, r, fill, stroke, sw)", "line(x1, y1, x2, y2, color, width)", "poly([[x,y],...], fill, stroke, sw)", "star(x, y, n, r1, r2, rot, fill, stroke, sw)", "text(str, x, y, {size, font, color, align, w, lh, rtl, alpha, weight, stroke, shadow, v})", "grad([c1, c2, ...], angle)", "await loadImage(url)  /  img(im, x, y, w, h)", "await font(FONT.ar)", "FONT.ar  .amiri  .naskh  .sans  .mono  .mine  .name", "await quran(s, a)", "lerp(a,b,k)  clamp(v,a,b)  map(v,a1,b1,a2,b2)", "seg(t, start, dur)", "ease.in / out / inOut / sine / back / elastic / bounce (p)", "rnd(i, j)", "noise(x, y, z)", "hsl(h,s,l,a)  mix(c1,c2,k)", "log(...)", "PI TAU sin cos abs floor sqrt min max pow", "keys([[t, v], [t, v, \"out\"], ...], t)", "spring(t, {from, to, k, damp, mass, delay})", "stagger(i, n, t, start, dur, gap)", "timeline(t, [[start, end, (p, lt) => {...}], ...])", "path(d)  .at(p)  .len  .stroke(p, color, w)  .trim(a, b, color, w)  .fill(color)", "morph(shapeA, shapeB, k, n)", "clipTo(shape, () => {...})  maskWith(() => {mask}, () => {...})", "curve(points, {closed, color, w, fill})  smooth(points, closed)  bezier(p0, c1, c2, p3, t)", "fx.glow(r, s)  fx.bloom(r, s)  fx.blur(r)", "fx.vignette(s)  fx.grain(a, t)  fx.glitch(a, t)  fx.rays(x, y, s)  fx.chroma(px)", "fx.motionBlur((t) => {...}, t, {samples, shutter})", "particles({type, x, y, w, count, size, colors, wind}).draw(t)", "trail((t) => [x, y], t, {len, width, color})", "textAnim(str, x, y, t, {fx, unit, start, dur, gap, size, font, color})", "textPath(str, path, {size, offset, color})", "text(str, x, y, {color: [c1, c2], ang})", "bgFlow(t, {colors})  stars(t)  pattern(type, {size, color, t, spin})", "chart.bar(data, {p, x, y, w, h})  chart.line(...)  chart.pie(...)", "diagram(nodes, edges, {p, dir})  geo(geojson, {p, proj})  await loadJSON(url)", "scene3d({bg})  .camera({pos, target, fov})  .light({type, dir, pos, color})  .mesh(kind, {pos, rot, scale, color, metal, rough, emissive, opacity, wire, tex, map})  .render(t)  [cube sphere torus cylinder cone plane]", "function audio() { tone(t, {freq, dur, type, slide, gain})  hiss(t, {dur, color, filter})  note(\"C4\", t, dur)  melody([...], t, {bpm})  chord([...], t, dur)  drone(f, t, dur)  sfx(\"whoosh\", t)  play(buf, t) }", "audioAt(t)  ->  {level, bass, mid, high, bands[16]}", "await loadFont(name, url)  FONT.name  await loadAudio(url)"];
/* ===== Huda Coder (admin only): code -> image / video ===== */
var CDR=null,CDRQ={},CDRIM={},CDRR={'1:1':[1,1],'4:5':[4,5],'9:16':[9,16],'16:9':[16,9],'3:4':[3,4],'4:3':[4,3]};
var CDRFONT={ar:"'KFGQPC Hafs V20','KFGQPC Uthman Taha Naskh','Amiri',serif",uth:"'KFGQPC Uthman Taha Naskh','Amiri',serif",amiri:"'Amiri',serif",naskh:"'Noto Naskh Arabic',serif",sch:"'Scheherazade New',serif",sans:"system-ui,'Noto Sans Tamil','Noto Sans Sinhala',sans-serif",serif:"Georgia,'Noto Serif',serif",mono:"ui-monospace,Menlo,monospace"};
var CDRSYM=[['{ }','{}',1],['( )','()',1],['[ ]','[]',1],['" "','""',1],["' '","''",1],['` `','``',1],[';',';'],[':',':'],['=','='],['=>','=>'],['.','.'],[',',','],['+','+'],['-','-'],['*','*'],['/','/'],['<','<'],['>','>'],['!','!'],['&','&'],['|','|'],['?','?'],['_','_'],['$','$'],['\\','\\']];
var CDRTPL=[
{m:'js',k:'cdr_tp1',ty:'img',code:`// Huda Coder: image
bg(['#0b1220','#1f3a5f'],60);
circle(W*0.82,H*0.18,W*0.28,'rgba(212,175,55,0.14)');
circle(W*0.12,H*0.9,W*0.34,'rgba(212,175,55,0.08)');
star(W/2,H*0.32,8,W*0.11,W*0.06,0,null,'#d4af37',3);
text('Huda Brain',W/2,H*0.55,{size:W*0.12,color:'#d4af37',align:'center',weight:700});
text('Write code. Get images and videos.',W/2,H*0.66,{size:W*0.04,color:'#cbd5e1',align:'center',w:W*0.8});
`},
{m:'js',k:'cdr_tp2',ty:'img',code:`// Quran verse card: change the surah and ayah numbers
var v;
async function setup(){
  await font(FONT.ar);
  v=await quran(1,2);
}
function draw(t,p){
  bg(['#06231c','#0b3d33'],90);
  star(W/2,H*0.1,8,W*0.05,W*0.026,0,'#d4af37');
  text(v.ar,W/2,H*0.4,{size:W*0.07,font:FONT.ar,color:'#f5e6b3',align:'center',w:W*0.84,lh:1.9,rtl:true});
  rect(W*0.4,H*0.66,W*0.2,3,'#d4af37');
  text(v.en,W/2,H*0.79,{size:W*0.034,color:'#e5e7eb',align:'center',w:W*0.8,lh:1.5});
  text(v.ref,W/2,H*0.93,{size:W*0.03,color:'#d4af37',align:'center'});
}
`},
{m:'js',k:'cdr_tp3',ty:'vid',code:`// Floating particles (video)
async function setup(){ await font(FONT.ar); }
function draw(t,p){
  bg(['#0b1020','#1b1f4b'],90);
  for(var i=0;i<90;i++){
    var x=(rnd(i)*W+noise(i,t*0.3)*W*0.2)%W;
    var y=H-((rnd(i,1)*H+t*H*0.08*(0.3+rnd(i,2)))%H);
    var r=W*0.004+rnd(i,3)*W*0.012;
    circle(x,y,r,'rgba(212,175,55,'+(0.25+rnd(i,4)*0.6)+')');
  }
  var a=ease.out(seg(t,0,1.5));
  text('بِسْمِ ٱللَّهِ',W/2,H/2,{size:W*0.12,font:FONT.ar,color:'#f5e6b3',align:'center',alpha:a});
}
`},
{m:'js',k:'cdr_tp4',ty:'vid',code:`// Rotating star (video)
function draw(t,p){
  bg(['#1a0f2e','#0e2a47'],45);
  c.save();
  c.translate(W/2,H/2);
  for(var k=0;k<6;k++){
    c.rotate(t*0.25*(k%2?1:-1));
    star(0,0,8,W*(0.42-k*0.06),W*(0.3-k*0.045),0,null,hsl(40+k*10,80,60,0.9),3);
  }
  c.restore();
}
`},
{m:'js',k:'cdr_tp5',ty:'vid',code:`// Typewriter verse (video)
var v;
async function setup(){ await font(FONT.ar); v=await quran(112,1); }
function draw(t,p){
  bg(['#10172a','#1d2b53'],90);
  var n=Math.floor(ease.out(seg(t,0.4,3))*v.ar.length);
  text(v.ar.slice(0,n),W/2,H*0.42,{size:W*0.085,font:FONT.ar,color:'#f5e6b3',align:'center',w:W*0.84,lh:1.9,rtl:true});
  text(v.en,W/2,H*0.75,{size:W*0.036,color:'#e2e8f0',align:'center',w:W*0.8,lh:1.5,alpha:seg(t,3.6,1)});
  rect(0,H-10,W*p,10,'#d4af37');
}
`},
{m:'svg',k:'cdr_tp6',ty:'img',code:`<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b3d33"/>
      <stop offset="1" stop-color="#06231c"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1000" fill="url(#g)"/>
  <g transform="translate(500 500)" fill="none" stroke="#d4af37" stroke-width="4">
    <rect x="-250" y="-250" width="500" height="500"/>
    <rect x="-250" y="-250" width="500" height="500" transform="rotate(45)"/>
    <circle r="320"/>
    <circle r="350" stroke-width="2"/>
  </g>
  <text x="500" y="525" text-anchor="middle" font-size="110" fill="#f5e6b3" font-family="Amiri, serif">Huda</text>
</svg>
`},
{m:'html',k:'cdr_tp7',ty:'img',code:`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0b1220,#1f3a5f);font-family:Amiri,serif;color:#f5e6b3;text-align:center">
  <div style="padding:60px">
    <div style="font-size:90px;direction:rtl">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
    <div style="font-size:36px;margin-top:30px;color:#cbd5e1;font-family:sans-serif">In the name of God, the Most Gracious, the Most Merciful</div>
  </div>
</div>
`},
{m:'js',k:'cdr_tp8',ty:'vid',code:`// Fire, sparks and glow (video)
var fire,sparks,smoke;
function setup(){
  fire=particles({type:'fire',x:W/2,y:H*0.82,w:W*0.18,size:0.07});
  sparks=particles({type:'sparks',x:W/2,y:H*0.82,w:W*0.1,count:70});
  smoke=particles({type:'smoke',x:W/2,y:H*0.7,w:W*0.15,count:40});
}
function draw(t,p){
  bg(['#05060d','#10142b'],90);
  stars(t);
  smoke.draw(t);
  fire.draw(t);
  sparks.draw(t);
  fx.bloom(30,0.9);
  fx.vignette(0.6);
  fx.grain(0.1,t);
}
`},
{m:'js',k:'cdr_tp9',ty:'vid',code:`// 3D scene with WebGL (video)
var s,cube,ball,ring;
function setup(){
  s=scene3d({bg:'#0b1020'});
  s.camera({pos:[0,1.2,4.2],target:[0,0,0],fov:50});
  s.ambient('#8899ff',0.25);
  s.light({dir:[-0.6,-1,-0.5],intensity:1.1});
  s.light({type:'point',pos:[2.5,2,2.5],color:'#d4af37',intensity:1.5});
  cube=s.mesh('cube',{color:'#d4af37',metal:0.9,rough:0.25});
  ball=s.mesh('sphere',{color:'#4aa3ff',metal:0.2,rough:0.15,scale:0.7});
  ring=s.mesh('torus',{color:'#ffffff',emissive:'#6a2c91',pos:[0,-0.9,0],scale:3,rough:0.6});
}
function draw(t,p){
  bg('#0b1020');
  cube.rot=[t*0.8,t*1.1,0];
  ball.pos=[Math.cos(t*2)*1.6,Math.sin(t*3)*0.4,Math.sin(t*2)*1.6];
  ring.rot=[0,t*0.5,0];
  s.render(t);
  fx.vignette(0.5);
}
`},
{m:'js',k:'cdr_tp10',ty:'vid',code:`// Audio-reactive bars: the sound is generated by code
function audio(){
  melody(['C4','E4','G4','C5','G4','E4','C4','-'],0,{bpm:110,type:'triangle',gain:0.35});
  chord(['C3','G3','E4'],0,DUR,{type:'sine',gain:0.25});
  for(var i=0;i<DUR*2;i++){sfx('click',i*0.5,{gain:0.6})}
  sfx('chime',0.2);
}
function draw(t,p){
  bg(['#0a0f1f','#1b1f4b'],90);
  var a=audioAt(t),n=16,bw=W/(n+2);
  for(var i=0;i<n;i++){
    var h=H*0.08+a.bands[i]*H*0.5;
    rect(bw*(i+1)+bw*0.1,H*0.7-h,bw*0.8,h,hsl(40+i*8,80,60),bw*0.2);
  }
  circle(W/2,H*0.32,W*(0.1+a.level*0.18),'rgba(212,175,55,0.35)');
  circle(W/2,H*0.32,W*0.1,'#d4af37');
  fx.glow(24,0.8);
}
`},
{m:'js',k:'cdr_tp11',ty:'vid',code:`// Kinetic typography (video)
var gold=['#f5e6b3','#d4af37'];
async function setup(){ await font(FONT.ar); }
function draw(t,p){
  bg(['#06231c','#0b3d33'],90);
  pattern('star',{size:W*0.12,color:'rgba(212,175,55,0.08)',spin:0.05,t:t});
  textAnim('Huda Brain',W/2,H*0.35,t,{size:W*0.11,color:gold,fx:'up',dur:0.7,gap:0.07,weight:700});
  textAnim('بِسْمِ ٱللَّهِ',W/2,H*0.55,t,{size:W*0.13,font:FONT.ar,color:'#f5e6b3',fx:'wipe',start:1.2,dur:1.5});
  textAnim('Learn - Reflect - Share',W/2,H*0.75,t,{size:W*0.05,color:'#cbd5e1',fx:'blur',start:2.5,unit:'word',gap:0.25});
  fx.vignette(0.5);
}
`},
{m:'js',k:'cdr_tp12',ty:'vid',code:`// Animated charts (video)
function draw(t,p){
  bg(['#0b1220','#16233f'],90);
  text('Growth',W/2,H*0.1,{size:W*0.07,align:'center',color:'#d4af37',weight:700});
  var k=ease.out(seg(t,0.2,2.5));
  chart.bar([['Jan',30],['Feb',55],['Mar',42],['Apr',80],['May',66]],{p:k,x:W*0.08,y:H*0.2,w:W*0.84,h:H*0.32});
  chart.line([10,35,22,60,48,90],{p:seg(t,2,3),x:W*0.1,y:H*0.62,w:W*0.8,h:H*0.25});
}
`}
];
function cdrTplDef(m){for(var i=0;i<CDRTPL.length;i++)if(CDRTPL[i].m==m)return CDRTPL[i];return CDRTPL[0]}
function cdrInit(){if(CDR)return;var o=S('cdr',{})||{};CDR={m:o.m||'js',type:o.type||'img',ratio:o.ratio||'1:1',ss:o.ss||1080,dur:o.dur||6,fps:o.fps||30,fmt:o.fmt||'png',live:o.live?1:0,fs:o.fs||13,pvl:o.pvl==null?1:o.pvl,codes:o.codes||{},pid:o.pid||'',pname:o.pname||'',tab:'code',t:0,playing:true,rid:0,inst:null,err:null,logs:[],notes:[],hist:[],hi:-1,busy:0,cancel:0,raf:0,out:null,crash:0,cf:{},cfl:[],job:null,snd:1,vol:o.vol==null?80:o.vol,gfl:o.gfl||[],pbg:0,asrc:null,ac:null,cface:{}};if(!CDR.codes[CDR.m])CDR.codes[CDR.m]=cdrTplDef(CDR.m).code;CDR.code=CDR.codes[CDR.m]}
function cdrSave(){CDR.codes[CDR.m]=CDR.code;P('cdr',{m:CDR.m,type:CDR.type,ratio:CDR.ratio,ss:CDR.ss,dur:CDR.dur,fps:CDR.fps,fmt:CDR.fmt,live:CDR.live,fs:CDR.fs,vol:CDR.vol,gfl:CDR.gfl,pvl:CDR.pvl,codes:CDR.codes,pid:CDR.pid,pname:CDR.pname})}
function cdrFonts(){var o={};Object.keys(CDRFONT).forEach(function(k){o[k]=CDRFONT[k]});o.mine="'HudaMine',"+CDRFONT.sans;((CDR&&CDR.gfl)||[]).forEach(function(n){o[n]="'"+n+"',"+CDRFONT.sans});var cf=(CDR&&CDR.cf)||{};Object.keys(cf).forEach(function(n){o[n]="'"+cf[n]+"',"+CDRFONT.sans});return o}
/* ===== Huda Coder engines: animation, drawing, effects, particles, typography, procedural ===== */
var CDRSPR={},CDRSVGH=null;
function cdrColRGBA(col){if(Array.isArray(col))return col;var k=String(col);if(cdrColRGBA._c&&cdrColRGBA._c[k])return cdrColRGBA._c[k];var cv=cdrColRGBA._cv||(cdrColRGBA._cv=document.createElement('canvas'));cv.width=cv.height=1;var g=cv.getContext('2d',{willReadFrequently:true});g.clearRect(0,0,1,1);g.fillStyle=k;g.fillRect(0,0,1,1);var d=g.getImageData(0,0,1,1).data,r=[d[0]/255,d[1]/255,d[2]/255,d[3]/255];(cdrColRGBA._c||(cdrColRGBA._c={}))[k]=r;return r}
function cdrResample(a,n,closed){var L=[0],i,tot=0,m=a.length;for(i=1;i<(closed?m+1:m);i++){var p=a[i-1],q=a[i%m];tot+=Math.hypot(q[0]-p[0],q[1]-p[1]);L.push(tot)}var out=[],j=0;for(i=0;i<n;i++){var s=tot*i/(closed?n:Math.max(1,n-1));while(j<L.length-2&&L[j+1]<s)j++;var p0=a[j],p1=a[(j+1)%m],u=L[j+1]>L[j]?(s-L[j])/(L[j+1]-L[j]):0;out.push([p0[0]+(p1[0]-p0[0])*u,p0[1]+(p1[1]-p0[1])*u])}return out}
function cdrEngines(E,c,W,H,dur,fps,FR){
 var clamp=E.clamp,rnd=E.rnd,noise=E.noise,ease=E.ease,TAU=Math.PI*2,A={on:false,evs:[],an:null},Mx=Math;
 function pk(){return c.canvas.width/W}
 function lerpv(a,b,k){return Array.isArray(a)?a.map(function(v,i){return v+(b[i]-v)*k}):a+(b-a)*k}
 /* ---- 1. animation ---- */
 E.keys=function(a,tm,ef){if(!a||!a.length)return 0;if(tm<=a[0][0])return a[0][1];var i;for(i=1;i<a.length;i++){if(tm<=a[i][0]){var p0=a[i-1],p1=a[i],k=(tm-p0[0])/((p1[0]-p0[0])||1),en=p1[2]||ef,f=typeof en=='function'?en:(ease[en]||ease.lin);return lerpv(p0[1],p1[1],f(k))}}return a[a.length-1][1]};
 E.spring=function(tm,o){o=o||{};var k=o.k||120,d=o.damp||o.d||12,m=o.mass||1,x=0,v=o.v0||0,dt=1/240,T=tm-(o.delay||0),f=o.from==null?0:o.from,to=o.to==null?1:o.to;if(T<=0)return f;var n=Mx.min(Mx.floor(T/dt),240*60),i,a;for(i=0;i<n;i++){a=(k*(1-x)-d*v)/m;v+=a*dt;x+=v*dt}var rem=T-n*dt;if(rem>0&&n<240*60){a=(k*(1-x)-d*v)/m;v+=a*rem;x+=v*rem}return f+(to-f)*x};
 E.stagger=function(i,n,tm,start,d,gap){return E.seg(tm,(start||0)+i*(gap==null?.08:gap),d||.5)};
 E.timeline=function(tm,list){list.forEach(function(s){if(tm>=s[0]&&tm<s[1])s[2]((tm-s[0])/((s[1]-s[0])||1),tm-s[0])})};
 /* ---- 4. drawing ---- */
 function host(){if(!CDRSVGH||!CDRSVGH.parentNode){CDRSVGH=document.createElementNS('http://www.w3.org/2000/svg','svg');CDRSVGH.setAttribute('width','0');CDRSVGH.setAttribute('height','0');CDRSVGH.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden';document.body.appendChild(CDRSVGH)}return CDRSVGH}
 E.path=function(d){var el=document.createElementNS('http://www.w3.org/2000/svg','path');el.setAttribute('d',d);host().appendChild(el);FR.push(function(){try{el.parentNode.removeChild(el)}catch(e){}});var len=el.getTotalLength(),p2=new Path2D(d),o={d:d,len:len,p2d:p2};
  o.at=function(p){p=clamp(p,0,1);var s=len*p,a=el.getPointAtLength(s),b=el.getPointAtLength(Mx.min(len,s+.5)),z=el.getPointAtLength(Mx.max(0,s-.5));return{x:a.x,y:a.y,angle:Mx.atan2(b.y-z.y,b.x-z.x)}};
  o.pts=function(n){var r=[],i;for(i=0;i<n;i++){var q=el.getPointAtLength(len*i/n);r.push([q.x,q.y])}return r};
  o.trim=function(a,b,col,w,cap){c.save();c.setLineDash([Mx.max(0,(b-a)*len),len*2+10]);c.lineDashOffset=-a*len;c.strokeStyle=Array.isArray(col)?E.grad(col):(col||'#fff');c.lineWidth=w||4;c.lineCap=cap||'round';c.lineJoin='round';c.stroke(p2);c.restore()};
  o.stroke=function(p,col,w,cap){o.trim(0,p==null?1:p,col,w,cap)};
  o.fill=function(col){c.save();c.fillStyle=Array.isArray(col)?E.grad(col):(col||'#fff');c.fill(p2);c.restore()};return o};
 E.pathPts=function(a,n){return Array.isArray(a)?cdrResample(a,n,true):a.pts(n)};
 E.morph=function(a,b,k,n){n=n||100;var P=E.pathPts(a,n),Q=E.pathPts(b,n),best=0,bd=1e18,s,i,st=Mx.max(1,Mx.floor(n/40));for(s=0;s<n;s+=st){var d=0;for(i=0;i<n;i+=st){var p=P[i],q=Q[(i+s)%n];d+=(p[0]-q[0])*(p[0]-q[0])+(p[1]-q[1])*(p[1]-q[1])}if(d<bd){bd=d;best=s}}var out=[];for(i=0;i<n;i++){var p2=P[i],q2=Q[(i+best)%n];out.push([p2[0]+(q2[0]-p2[0])*k,p2[1]+(q2[1]-p2[1])*k])}return out};
 E.bezier=function(p0,c1,c2,p3,t){var u=1-t,a=u*u*u,b=3*u*u*t,d=3*u*t*t,e=t*t*t;return[a*p0[0]+b*c1[0]+d*c2[0]+e*p3[0],a*p0[1]+b*c1[1]+d*c2[1]+e*p3[1]]};
 E.smooth=function(pts,closed,ten){var n=pts.length,tn=ten==null?1:ten,d='M'+pts[0][0]+' '+pts[0][1],i;for(i=0;i<(closed?n:n-1);i++){var p0=pts[(i-1+n)%n],p1=pts[i],p2=pts[(i+1)%n],p3=pts[(i+2)%n];if(!closed){p0=pts[Mx.max(0,i-1)];p3=pts[Mx.min(n-1,i+2)]}d+='C'+(p1[0]+(p2[0]-p0[0])/6*tn)+' '+(p1[1]+(p2[1]-p0[1])/6*tn)+' '+(p2[0]-(p3[0]-p1[0])/6*tn)+' '+(p2[1]-(p3[1]-p1[1])/6*tn)+' '+p2[0]+' '+p2[1]}return d+(closed?'Z':'')};
 E.curve=function(pts,o){o=o||{};var p2=new Path2D(E.smooth(pts,o.closed,o.tension));c.save();if(o.fill){c.fillStyle=Array.isArray(o.fill)?E.grad(o.fill):o.fill;c.fill(p2)}if(o.color||!o.fill){c.strokeStyle=o.color||'#fff';c.lineWidth=o.w||3;c.lineCap='round';c.lineJoin='round';c.stroke(p2)}c.restore()};
 E.clipTo=function(shape,fn){c.save();if(typeof shape=='function'){c.beginPath();shape(c);c.clip()}else if(Array.isArray(shape)){c.beginPath();shape.forEach(function(q,i){if(i)c.lineTo(q[0],q[1]);else c.moveTo(q[0],q[1])});c.closePath();c.clip()}else if(shape&&shape.p2d)c.clip(shape.p2d);else c.clip(shape);try{fn()}finally{c.restore()}};
 var tmps=[];function tmp(i){var cw=c.canvas.width,ch=c.canvas.height,t0=tmps[i];if(!t0)t0=tmps[i]=document.createElement('canvas');if(t0.width!=cw||t0.height!=ch){t0.width=cw;t0.height=ch}return t0}
 function ident(fn){c.save();c.setTransform(1,0,0,1,0,0);try{fn(c.canvas.width,c.canvas.height)}finally{c.restore()}}
 function copyTo(i){var t0=tmp(i),g=t0.getContext('2d');g.setTransform(1,0,0,1,0,0);g.globalCompositeOperation='source-over';g.globalAlpha=1;g.clearRect(0,0,t0.width,t0.height);g.drawImage(c.canvas,0,0);return t0}
 E.maskWith=function(maskFn,drawFn){var back=copyTo(0);c.save();c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,c.canvas.width,c.canvas.height);c.restore();drawFn();c.save();c.globalCompositeOperation='destination-in';try{maskFn()}finally{c.restore()}c.save();c.setTransform(1,0,0,1,0,0);c.globalCompositeOperation='destination-over';c.drawImage(back,0,0);c.restore()};
 /* ---- 2. effects ---- */
 var hasF=typeof c.filter=='string',small=null;
 function blurInto(src,dst,r){var dc=dst.getContext('2d');dc.setTransform(1,0,0,1,0,0);dc.globalCompositeOperation='source-over';dc.globalAlpha=1;dc.clearRect(0,0,dst.width,dst.height);if(r<.5){dc.drawImage(src,0,0);return}
  if(hasF&&r<=60){dc.filter='blur('+r+'px)';dc.drawImage(src,0,0);dc.filter='none';return}
  var f=Mx.max(2,Mx.round(r/1.5)),sw=Mx.max(1,Mx.round(src.width/f)),sh=Mx.max(1,Mx.round(src.height/f));if(!small)small=document.createElement('canvas');small.width=sw;small.height=sh;var sg=small.getContext('2d');sg.imageSmoothingQuality='high';sg.clearRect(0,0,sw,sh);sg.drawImage(src,0,0,sw,sh);dc.imageSmoothingQuality='high';dc.drawImage(small,0,0,sw,sh,0,0,dst.width,dst.height)}
 var fx={};E.fx=fx;
 fx.blur=function(r){ident(function(w,h){var s=copyTo(0);c.clearRect(0,0,w,h);blurInto(s,c.canvas,(r||8)*pk())})};
 fx.glow=function(r,s){ident(function(w,h){var a=copyTo(0),b=tmp(1);blurInto(a,b,(r==null?20:r)*pk());c.globalCompositeOperation='lighter';c.globalAlpha=s==null?1:s;c.drawImage(b,0,0)})};
 fx.bloom=function(r,s,th){ident(function(w,h){var a=copyTo(0),b=tmp(1),d=tmp(2);if(hasF){var g=b.getContext('2d');g.clearRect(0,0,w,h);g.filter='contrast('+(1.4+(th==null?.6:th)*1.6)+') brightness(.8)';g.drawImage(a,0,0);g.filter='none'}else{b.getContext('2d').drawImage(a,0,0)}var R=(r==null?30:r)*pk(),k=s==null?.8:s;blurInto(b,d,R);c.globalCompositeOperation='lighter';c.globalAlpha=k;c.drawImage(d,0,0);blurInto(b,d,R*2.6);c.globalAlpha=k*.7;c.drawImage(d,0,0)})};
 fx.vignette=function(s,soft){ident(function(w,h){var m=Mx.min(w,h),g=c.createRadialGradient(w/2,h/2,m*.3*(1-(soft==null?.5:soft)*.6),w/2,h/2,Mx.hypot(w,h)/2);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,'+(s==null?.55:s)+')');c.fillStyle=g;c.fillRect(0,0,w,h)})};
 var grainP=null;fx.grain=function(a,tm){ident(function(w,h){if(!grainP){var gc=document.createElement('canvas');gc.width=gc.height=128;var gg=gc.getContext('2d'),id=gg.createImageData(128,128),i;for(i=0;i<id.data.length;i+=4){var v=Mx.floor(rnd(i>>2,7,3)*255);id.data[i]=id.data[i+1]=id.data[i+2]=v;id.data[i+3]=255}gg.putImageData(id,0,0);grainP=c.createPattern(gc,'repeat')}var fi=Mx.floor((tm||0)*fps),ox=Mx.floor(rnd(fi,1)*128),oy=Mx.floor(rnd(fi,2)*128);c.globalAlpha=a==null?.15:a;c.globalCompositeOperation='overlay';c.translate(-ox,-oy);c.fillStyle=grainP;c.fillRect(ox,oy,w,h)})};
 fx.rays=function(x,y,s,len,n){ident(function(w,h){var a=copyTo(0),cx=x*pk(),cy=y*pk(),N=n||14,L=len==null?.5:len,i;c.globalCompositeOperation='lighter';for(i=1;i<=N;i++){var sc=1+L*i/N*.6;c.globalAlpha=(s==null?.6:s)/N*(1-i/N*.5)*2;c.setTransform(sc,0,0,sc,cx*(1-sc),cy*(1-sc));c.drawImage(a,0,0)}})};
 fx.chroma=function(px){ident(function(w,h){var dx=Mx.round((px==null?4:px)*pk());if(!dx)return;var im=c.getImageData(0,0,w,h),d=im.data,o=new Uint8ClampedArray(d),x,y;for(y=0;y<h;y++){var r=y*w*4;for(x=0;x<w;x++){var i=r+x*4,xl=Mx.max(0,x-dx),xr=Mx.min(w-1,x+dx);d[i]=o[r+xl*4];d[i+2]=o[r+xr*4+2]}}c.putImageData(im,0,0)})};
 fx.glitch=function(a,tm){a=a==null?.5:a;ident(function(w,h){var s=copyTo(0),fi=Mx.floor((tm||0)*14),n=6+Mx.floor(a*10),j;for(j=0;j<n;j++){if(rnd(fi,j,9)>.35+a*.5)continue;var y0=Mx.floor(rnd(fi,j,1)*h),hh=Mx.max(2,Mx.floor((.01+rnd(fi,j,2)*.07)*h)),dx=(rnd(fi,j,3)-.5)*a*w*.14;c.clearRect(0,y0,w,hh);c.drawImage(s,0,y0,w,hh,dx,y0,w,hh)}});fx.chroma(a*7)};
 fx.motionBlur=function(fn,tm,o){o=o||{};var N=o.samples||6,sh=(o.shutter==null?.5:o.shutter)/fps,k=pk(),acc=tmp(3),ag=acc.getContext('2d'),i;ag.setTransform(1,0,0,1,0,0);ag.clearRect(0,0,acc.width,acc.height);for(i=0;i<N;i++){c.save();c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,c.canvas.width,c.canvas.height);c.setTransform(k,0,0,k,0,0);fn(tm-sh*(1-i/(N-1||1)));c.restore();ag.globalAlpha=1/(i+1);ag.drawImage(c.canvas,0,0)}c.save();c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,c.canvas.width,c.canvas.height);c.drawImage(acc,0,0);c.restore()};
 /* ---- 3. particles ---- */
 function sprite(col){var k=String(col);if(CDRSPR[k])return CDRSPR[k];var s=document.createElement('canvas');s.width=s.height=64;var g=s.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.35,'rgba(255,255,255,.55)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);g.globalCompositeOperation='source-in';g.fillStyle=k;g.fillRect(0,0,64,64);return CDRSPR[k]=s}
 function stage(cols,a,fn){var n=cols.length;if(n==1){fn(cols[0],1);return}var f=a*(n-1),i=Mx.min(n-2,Mx.floor(f)),u=f-i;fn(cols[i],1-u);fn(cols[i+1],u)}
 var PR={fire:{n:150,life:1.5,cols:['#fff3b0','#ffc933','#ff7a1a','#d93a0b','#4a0f06'],blend:'lighter',size:.06,alpha:.85},smoke:{n:70,life:4.5,cols:['#aab0b8','#6b7078'],blend:'source-over',size:.08,alpha:.3},sparks:{n:90,life:1.1,cols:['#fff6c8','#ffb23a','#ff5a1a'],blend:'lighter',size:.004,alpha:1},rain:{n:220,life:.7,cols:['#c9d8e8'],blend:'source-over',size:.002,alpha:.5},snow:{n:160,life:7,cols:['#ffffff'],blend:'source-over',size:.008,alpha:.9},dust:{n:110,life:6,cols:['#ffe9b0'],blend:'lighter',size:.004,alpha:.5}};
 E.particles=function(o){o=o||{};var ty=o.type||'fire',D=PR[ty]||PR.fire,n=o.count||D.n,life=o.life||D.life,cols=o.colors||(o.color?[o.color]:D.cols),sz=(o.size||D.size)*W,al=o.alpha==null?D.alpha:o.alpha,ex=o.x==null?W/2:o.x,ey=o.y==null?H*.85:o.y,ew=o.w==null?W*.12:o.w,wind=o.wind||0,sd=o.seed||1,area=o.area||[0,0,W,H],blend=o.blend||D.blend;
  return{draw:function(tm){c.save();c.globalCompositeOperation=blend;var i;for(i=0;i<n;i++){var l=life*(.65+.7*rnd(i,sd,1)),ph=tm/l+rnd(i,sd,2),cy=Mx.floor(ph),a=ph-cy,r1=rnd(i,cy,sd+3),r2=rnd(i,cy,sd+4),r3=rnd(i,cy,sd+5);
   if(ty=='fire'){var x=ex+(r1-.5)*ew+(noise(i*.37,a*2+tm*.4)-.5)*W*.1*a+wind*a*W*.1,y=ey-a*(o.rise||.4)*H*(.55+.9*r2),s=sz*(.5+r3*.9)*(1-.75*a),aa=al*Mx.min(1,a*8)*(1-a);stage(cols,a,function(cl,u){c.globalAlpha=clamp(aa*u,0,1);c.drawImage(sprite(cl),x-s,y-s,s*2,s*2)})}
   else if(ty=='smoke'){var x2=ex+(r1-.5)*ew+(noise(i*.21,a*1.5+tm*.2)-.5)*W*.2*a+wind*a*W*.25,y2=ey-a*(o.rise||.5)*H*(.6+.8*r2),s2=sz*(.6+r3*.8)*(1+2.4*a),aa2=al*Mx.sin(Mx.PI*a)*.9;stage(cols,a,function(cl,u){c.globalAlpha=clamp(aa2*u,0,1);c.drawImage(sprite(cl),x2-s2,y2-s2,s2*2,s2*2)})}
   else if(ty=='sparks'){var an=-Mx.PI/2+(r1-.5)*(o.spread==null?1.6:o.spread),sp=(.25+r2*.65)*H*(o.speed||1),age=a*l,g=H*(o.gravity==null?1:o.gravity),px=ex+(r3-.5)*ew+Mx.cos(an)*sp*age+wind*age*W*.2,py=ey+Mx.sin(an)*sp*age+.5*g*age*age,qa=age-.04,qx=ex+(r3-.5)*ew+Mx.cos(an)*sp*qa+wind*qa*W*.2,qy=ey+Mx.sin(an)*sp*qa+.5*g*qa*qa;c.globalAlpha=clamp(al*(1-a),0,1);stage(cols,a,function(cl,u){c.strokeStyle=cl;c.globalAlpha=clamp(al*(1-a)*u,0,1);c.lineWidth=sz*(1.2-a);c.lineCap='round';c.beginPath();c.moveTo(qx,qy);c.lineTo(px,py);c.stroke()})}
   else if(ty=='rain'){var len=H*(o.len||.06),x3=area[0]+((r1+cy*.137)%1)*area[2],y3=area[1]-len+a*(area[3]+2*len),wx=wind*.25;c.globalAlpha=al;c.strokeStyle=cols[0];c.lineWidth=Mx.max(1,sz);c.beginPath();c.moveTo(x3,y3);c.lineTo(x3+wx*len,y3+len);c.stroke()}
   else if(ty=='snow'){var s4=sz*(.4+r2*1.1),x4=area[0]+((r1+cy*.31)%1)*area[2]+Mx.sin(ph*6+i)*W*.02+wind*a*W*.15,y4=area[1]-s4+a*(area[3]+2*s4);c.globalAlpha=al*(.5+.5*r3);c.fillStyle=cols[0];c.beginPath();c.arc(x4,y4,s4,0,TAU);c.fill()}
   else{var s5=sz*(.5+r2*1.4),x5=area[0]+r1*area[2]+(noise(i*.3,tm*.12)-.5)*W*.2+wind*tm*W*.01,y5=area[1]+r3*area[3]+(noise(i*.3+40,tm*.12)-.5)*H*.15,tw=.3+.7*noise(i,tm*.6);c.globalAlpha=clamp(al*tw*Mx.sin(Mx.PI*a),0,1);c.drawImage(sprite(cols[0]),x5-s5*3,y5-s5*3,s5*6,s5*6)}}
   c.restore()}}};
 E.trail=function(fn,tm,o){o=o||{};var n=o.n||48,L=o.len==null?.6:o.len,w=o.width||W*.012,col=o.color||'#7fe9ff',i;c.save();c.globalCompositeOperation=o.blend||'lighter';c.lineCap='round';for(i=n-1;i>0;i--){var a=fn(tm-L*i/n),b=fn(tm-L*(i-1)/n),k=1-i/n;c.globalAlpha=clamp(k*(o.alpha==null?1:o.alpha),0,1);c.strokeStyle=col;c.lineWidth=w*k;c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke()}var h=fn(tm);c.globalAlpha=1;c.fillStyle='#fff';c.shadowColor=col;c.shadowBlur=w*2;c.beginPath();c.arc(h[0],h[1],w*.55,0,TAU);c.fill();c.restore()};
 /* ---- 5. typography ---- */
 E.text=function(s,x,y,o){o=o||{};s=String(s);var sz=o.size||48,lh=(o.lh||1.3)*sz,fam=o.font||CDRFONT.sans;c.save();c.font=(o.italic?'italic ':'')+(o.weight?o.weight+' ':'')+sz+'px '+fam;c.textAlign=o.align||'left';c.textBaseline='middle';if(o.rtl!=null)c.direction=o.rtl?'rtl':'ltr';if(o.ls!=null&&'letterSpacing' in c)c.letterSpacing=o.ls+'px';if(o.alpha!=null)c.globalAlpha*=o.alpha;if(o.shadow){c.shadowColor=o.shadow;c.shadowBlur=o.blur==null?sz*.25:o.blur}
  var ls=o.w?E.wrap(s,o.w):s.split('\n'),tot=ls.length*lh,y0=o.v=='top'?y+lh/2:o.v=='bottom'?y-tot+lh/2:y-tot/2+lh/2,mw=0;ls.forEach(function(l){mw=Mx.max(mw,c.measureText(l).width)});
  var fill=o.color||'#fff';if(Array.isArray(fill)){var bx=o.align=='center'?x-mw/2:o.align=='right'?x-mw:x;fill=E.grad(fill,o.ang==null?0:o.ang,bx,y0-lh/2,mw,tot)}
  ls.forEach(function(l,i){var yy=y0+i*lh;if(o.stroke){c.lineWidth=o.sw||sz*.08;c.lineJoin='round';c.strokeStyle=o.stroke;c.strokeText(l,x,yy)}c.fillStyle=fill;c.fillText(l,x,yy)});c.restore();return{w:mw,h:tot,lines:ls.length}};
 E.textAnim=function(s,x,y,tm,o){o=o||{};s=String(s);var sz=o.size||64,fam=o.font||CDRFONT.sans,fxn=o.fx||'up',st=o.start||0,du=o.dur||.6,gap=o.gap==null?.06:o.gap,al=o.align||'center',lhh=(o.lh||1.4)*sz,ar=/[\u0600-\u06FF]/.test(s),rtl=o.rtl!=null?o.rtl:ar,unit=o.unit||(ar?'word':'char'),lines=s.split('\n'),n0=0,totH=lines.length*lhh,col=o.color||'#fff',maxW=0;
  c.save();c.font=(o.weight?o.weight+' ':'')+sz+'px '+fam;c.textBaseline='middle';c.direction=rtl?'rtl':'ltr';c.textAlign='left';
  lines.forEach(function(line,li){var us=unit=='word'?line.split(' '):Array.from(line),sp=unit=='word'?c.measureText(' ').width:0,ws=us.map(function(u){return c.measureText(u).width}),tw=ws.reduce(function(a,b){return a+b},0)+sp*Mx.max(0,us.length-1),x0=al=='center'?x-tw/2:al=='right'?x-tw:x,yy=y-totH/2+lhh*(li+.5);maxW=Mx.max(maxW,tw);
   var fill=Array.isArray(col)?E.grad(col,o.ang==null?0:o.ang,x0,yy-lhh/2,tw,lhh):col;
   if(fxn=='wipe'||(fxn=='type'&&ar)){var p=ease.out(E.seg(tm,st+li*du*.8,du*2));c.save();c.beginPath();if(rtl)c.rect(x0+tw*(1-p),yy-lhh,tw*p+2,lhh*2);else c.rect(x0,yy-lhh,tw*p+2,lhh*2);c.clip();c.fillStyle=fill;c.fillText(line,x0,yy);c.restore();n0+=us.length;return}
   var cur=rtl?x0+tw:x0;us.forEach(function(u,i){var w=ws[i],xl=rtl?cur-w:cur;cur=rtl?xl-sp:xl+w+sp;var p=E.seg(tm,st+(n0+i)*gap,du),e=ease.out(p),ox=0,oy=0,sc=1,alp=p,sh=0;
    if(fxn=='up')oy=(1-e)*sz*.5;else if(fxn=='down')oy=-(1-e)*sz*.5;else if(fxn=='scale'){sc=1.6-.6*e}else if(fxn=='pop'){sc=ease.back(p)}else if(fxn=='blur')sh=(1-p)*sz*.45;else if(fxn=='wave')oy=Mx.sin(tm*4+i*.6)*sz*.12;else if(fxn=='glow')sh=sz*.3;else if(fxn=='type')alp=p>0?1:0;
    if(alp<=0)return;c.save();c.globalAlpha*=clamp(alp,0,1);if(sh){c.shadowColor=o.glow||(typeof fill=='string'?fill:'#fff');c.shadowBlur=sh}c.translate(xl+w/2+ox,yy+oy);c.scale(sc,sc);c.fillStyle=fill;c.fillText(u,-w/2,0);c.restore()});n0+=us.length});
  c.restore();return{w:maxW,h:totH}};
 E.textPath=function(s,path,o){o=o||{};var sz=o.size||48,fam=o.font||CDRFONT.sans,chars=Array.from(String(s)),off=o.offset||0,L=path.len;c.save();c.font=(o.weight?o.weight+' ':'')+sz+'px '+fam;c.textBaseline=o.base||'middle';c.textAlign='center';var ws=chars.map(function(ch){return c.measureText(ch).width}),tot=ws.reduce(function(a,b){return a+b},0),pos=(o.align=='center'?(L-tot)/2:0)+off*L,fill=o.color||'#fff';if(Array.isArray(fill))fill=E.grad(fill,o.ang==null?0:o.ang);c.fillStyle=fill;
  chars.forEach(function(ch,i){var m=pos+ws[i]/2,p=m/L;pos+=ws[i];if(p<0||p>1)return;var q=path.at(p);c.save();c.translate(q.x,q.y);c.rotate(q.angle);if(o.alpha!=null)c.globalAlpha*=o.alpha;c.fillText(ch,0,o.dy||0);c.restore()});c.restore()};
 /* ---- 6. procedural ---- */
 E.loadJSON=function(u){return fetch(u).then(function(r){return r.json()})};
 E.bgFlow=function(tm,o){o=o||{};var cols=o.colors||['#0b1220','#1f3a5f','#d4af37','#6a2c91'],sp=o.speed==null?1:o.speed,n=o.blobs||6,i;c.save();c.fillStyle=cols[0];c.fillRect(0,0,W,H);for(i=0;i<n;i++){var x=W*(.5+(noise(i*3.1,tm*.12*sp)-.5)*1.6),y=H*(.5+(noise(i*5.7+9,tm*.12*sp)-.5)*1.6),r=Mx.max(W,H)*(.35+.3*noise(i*2.3,tm*.1*sp+4)),cl=cols[1+i%(cols.length-1||1)]||cols[0],g=c.createRadialGradient(x,y,0,x,y,r),rgba=cdrColRGBA(cl);g.addColorStop(0,'rgba('+Mx.round(rgba[0]*255)+','+Mx.round(rgba[1]*255)+','+Mx.round(rgba[2]*255)+','+(o.alpha==null?.75:o.alpha)+')');g.addColorStop(1,'rgba('+Mx.round(rgba[0]*255)+','+Mx.round(rgba[1]*255)+','+Mx.round(rgba[2]*255)+',0)');c.fillStyle=g;c.fillRect(0,0,W,H)}c.restore()};
 E.stars=function(tm,o){o=o||{};var n=o.count||120,col=o.color||'#fff',i;c.save();c.fillStyle=col;for(i=0;i<n;i++){var x=rnd(i,1)*W,y=rnd(i,2)*H,r=(.4+rnd(i,3)*1.6)*(o.size||W*.0025),a=.25+.75*(.5+.5*Mx.sin(tm*(1+rnd(i,4)*2)+i));c.globalAlpha=a;c.beginPath();c.arc(x,y,r,0,TAU);c.fill()}c.restore()};
 E.pattern=function(type,o){o=o||{};var x0=o.x||0,y0=o.y||0,w=o.w==null?W:o.w,h=o.h==null?H:o.h,s=o.size||W*.08,col=o.color||'rgba(255,255,255,.25)',lw=o.lw||Mx.max(1,W*.002),tm=o.t||0,R=Mx.hypot(w,h)/2+s,i,j;
  c.save();c.beginPath();c.rect(x0,y0,w,h);c.clip();c.translate(x0+w/2,y0+h/2);c.rotate(o.rot||0);c.strokeStyle=col;c.fillStyle=col;c.lineWidth=lw;c.lineJoin='round';var N=Mx.ceil(R/s);
  if(type=='grid'){c.beginPath();for(i=-N;i<=N;i++){c.moveTo(i*s,-R);c.lineTo(i*s,R);c.moveTo(-R,i*s);c.lineTo(R,i*s)}c.stroke()}
  else if(type=='dots'){var r=o.r||s*.08;for(i=-N;i<=N;i++)for(j=-N;j<=N;j++){c.beginPath();c.arc(i*s,j*s,r,0,TAU);c.fill()}}
  else if(type=='hex'){var hr=s*.5,hw=Mx.sqrt(3)*hr;for(j=-N*2;j<=N*2;j++)for(i=-N*2;i<=N*2;i++){var cx=i*hw+(j%2?hw/2:0),cy=j*hr*1.5;c.beginPath();var k;for(k=0;k<6;k++){var an=Mx.PI/6+k*Mx.PI/3;c.lineTo(cx+Mx.cos(an)*hr,cy+Mx.sin(an)*hr)}c.closePath();c.stroke()}}
  else if(type=='waves'){var amp=s*.25;for(j=-N;j<=N;j++){c.beginPath();for(i=-R;i<=R;i+=Mx.max(4,s/8)){var yy=j*s+Mx.sin(i/s*2+tm*2+j*.5)*amp;if(i==-R)c.moveTo(i,yy);else c.lineTo(i,yy)}c.stroke()}}
  else if(type=='lines'){c.beginPath();for(i=-N*2;i<=N*2;i++){c.moveTo(i*s*.5-R,-R);c.lineTo(i*s*.5+R,R)}c.stroke()}
  else{var q=s*.72;for(i=-N;i<=N;i++)for(j=-N;j<=N;j++){c.save();c.translate(i*s,j*s);c.rotate((o.spin||0)*tm);c.strokeRect(-q/2,-q/2,q,q);c.rotate(Mx.PI/4);c.strokeRect(-q/2,-q/2,q,q);c.restore()}}
  c.restore()};
 var CC=['#d4af37','#4aa3ff','#e5484d','#3ecf8e','#a78bfa','#f59e0b'];
 E.chart={bar:function(data,o){o=o||{};var x=o.x==null?W*.1:o.x,y=o.y==null?H*.2:o.y,w=o.w==null?W*.8:o.w,h=o.h==null?H*.5:o.h,p=o.p==null?1:o.p,n=data.length,vals=data.map(function(d){return Array.isArray(d)?d[1]:d}),labs=data.map(function(d){return Array.isArray(d)?d[0]:''}),mx=o.max||Mx.max.apply(null,vals)||1,gp=o.gap==null?.25:o.gap,bw=w/n,cols=o.colors||CC,sz=o.size||W*.03,i;
   c.save();c.strokeStyle='rgba(255,255,255,.25)';c.lineWidth=2;c.beginPath();c.moveTo(x,y+h);c.lineTo(x+w,y+h);c.stroke();
   for(i=0;i<n;i++){var pi=ease.out(E.seg(p,i/n*.5,.5)),bh=vals[i]/mx*h*pi,bx=x+i*bw+bw*gp/2;E.rect(bx,y+h-bh,bw*(1-gp),bh,cols[i%cols.length],bw*.12);E.text(labs[i],bx+bw*(1-gp)/2,y+h+sz*1.1,{size:sz*.8,align:'center',color:o.labelColor||'#cbd5e1'});if(o.values!==false&&pi>.3)E.text(Mx.round(vals[i]*pi*10)/10,bx+bw*(1-gp)/2,y+h-bh-sz*.8,{size:sz,align:'center',color:o.valueColor||'#fff',weight:700,alpha:pi})}c.restore()},
  line:function(data,o){o=o||{};var x=o.x==null?W*.1:o.x,y=o.y==null?H*.2:o.y,w=o.w==null?W*.8:o.w,h=o.h==null?H*.5:o.h,p=o.p==null?1:o.p,vals=data.map(function(d){return Array.isArray(d)?d[1]:d}),n=vals.length,mx=o.max||Mx.max.apply(null,vals)||1,mn=o.min==null?0:o.min,pts=vals.map(function(v,i){return[x+i/(n-1||1)*w,y+h-(v-mn)/(mx-mn||1)*h]}),tot=(n-1)*ease.inOut(p),k=Mx.floor(tot),u=tot-k,i;
   var sh=pts.slice(0,k+1);if(k<n-1)sh.push([pts[k][0]+(pts[k+1][0]-pts[k][0])*u,pts[k][1]+(pts[k+1][1]-pts[k][1])*u]);c.save();if(o.area!==false&&sh.length>1){var g=c.createLinearGradient(0,y,0,y+h);g.addColorStop(0,'rgba(212,175,55,.35)');g.addColorStop(1,'rgba(212,175,55,0)');c.fillStyle=o.areaColor||g;c.beginPath();c.moveTo(sh[0][0],y+h);sh.forEach(function(q){c.lineTo(q[0],q[1])});c.lineTo(sh[sh.length-1][0],y+h);c.closePath();c.fill()}
   c.strokeStyle=o.color||'#d4af37';c.lineWidth=o.lw||W*.006;c.lineJoin='round';c.lineCap='round';c.beginPath();sh.forEach(function(q,i2){if(i2)c.lineTo(q[0],q[1]);else c.moveTo(q[0],q[1])});c.stroke();for(i=0;i<sh.length;i++){c.fillStyle='#fff';c.beginPath();c.arc(sh[i][0],sh[i][1],W*.008,0,TAU);c.fill()}c.restore()},
  pie:function(data,o){o=o||{};var cx=o.x==null?W/2:o.x,cy=o.y==null?H/2:o.y,r=o.r||W*.3,p=o.p==null?1:o.p,vals=data.map(function(d){return Array.isArray(d)?d[1]:d}),labs=data.map(function(d){return Array.isArray(d)?d[0]:''}),sum=vals.reduce(function(a,b){return a+b},0)||1,cols=o.colors||CC,inn=o.inner||0,a0=-Mx.PI/2,lim=TAU*ease.out(p),acc=0,i;c.save();for(i=0;i<vals.length;i++){var sw=vals[i]/sum*TAU,s0=Mx.min(acc,lim),s1=Mx.min(acc+sw,lim);if(s1>s0){c.beginPath();c.arc(cx,cy,r,a0+s0,a0+s1);if(inn){c.arc(cx,cy,r*inn,a0+s1,a0+s0,true)}else c.lineTo(cx,cy);c.closePath();c.fillStyle=cols[i%cols.length];c.fill();c.strokeStyle='rgba(0,0,0,.25)';c.lineWidth=2;c.stroke()}if(o.labels!==false&&acc+sw/2<lim){var am=a0+acc+sw/2,rr=r*(inn?(1+inn)/2:.65);E.text(labs[i],cx+Mx.cos(am)*rr,cy+Mx.sin(am)*rr,{size:o.size||W*.03,align:'center',color:'#fff',weight:700})}acc+=sw}c.restore()}};
 E.diagram=function(nodes,edges,o){o=o||{};var x=o.x==null?W*.06:o.x,y=o.y==null?H*.2:o.y,w=o.w==null?W*.88:o.w,h=o.h==null?H*.55:o.h,p=o.p==null?1:o.p,dir=o.dir||'right',ns=nodes.map(function(n,i){return typeof n=='string'?{id:n,label:n}:{id:n.id==null?i:n.id,label:n.label||String(n.id)}}),idx={};ns.forEach(function(n,i){idx[n.id]=i});var es=(edges||[]).map(function(e){return[idx[e[0]]!=null?idx[e[0]]:e[0],idx[e[1]]!=null?idx[e[1]]:e[1]]}),lv=ns.map(function(){return 0}),it,i;
  for(it=0;it<ns.length;it++)es.forEach(function(e){if(lv[e[1]]<lv[e[0]]+1&&lv[e[0]]<ns.length)lv[e[1]]=lv[e[0]]+1});var L=Mx.max.apply(null,lv)+1,cnt=[],pos=[];ns.forEach(function(n,i){cnt[lv[i]]=(cnt[lv[i]]||0);pos[i]=cnt[lv[i]]++});
  var bw=o.nw||W*.2,bh=o.nh||W*.1,sz=o.size||W*.028,P=ns.map(function(n,i){var m=cnt[lv[i]],a=(lv[i]+.5)/L,b=(pos[i]+.5)/m;return dir=='down'?[x+b*w,y+a*h]:[x+a*w,y+b*h]});
  c.save();c.lineCap='round';es.forEach(function(e,k){var pe=ease.out(E.seg(p,.35+k/es.length*.4,.3));if(pe<=0)return;var a=P[e[0]],b=P[e[1]],dx=dir=='down'?0:bw/2,dy=dir=='down'?bh/2:0,x1=a[0]+dx,y1=a[1]+dy,x2=b[0]-dx,y2=b[1]-dy,mx=(x1+x2)/2,my=(y1+y2)/2,c1=dir=='down'?[x1,my]:[mx,y1],c2=dir=='down'?[x2,my]:[mx,y2];c.strokeStyle=o.edge||'rgba(255,255,255,.6)';c.lineWidth=W*.004;c.beginPath();c.moveTo(x1,y1);var N=24,q;for(q=1;q<=N*pe;q++){var pt=E.bezier([x1,y1],c1,c2,[x2,y2],q/N);c.lineTo(pt[0],pt[1])}c.stroke();if(pe>.98){var an=Mx.atan2(y2-c2[1],x2-c2[0]);c.fillStyle=c.strokeStyle;c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-Mx.cos(an-.45)*W*.02,y2-Mx.sin(an-.45)*W*.02);c.lineTo(x2-Mx.cos(an+.45)*W*.02,y2-Mx.sin(an+.45)*W*.02);c.closePath();c.fill()}});
  ns.forEach(function(n,i){var pn=ease.back(E.seg(p,i/ns.length*.35,.25));if(pn<=0)return;c.save();c.translate(P[i][0],P[i][1]);c.scale(pn,pn);E.rect(-bw/2,-bh/2,bw,bh,o.fill||'#1f3a5f',bh*.2,o.stroke||'#d4af37',W*.004);E.text(n.label,0,0,{size:sz,align:'center',color:'#fff',w:bw*.9});c.restore()});c.restore()};
 E.geo=function(json,o){o=o||{};var feats=json.type=='FeatureCollection'?json.features:json.type=='Feature'?[json]:[{geometry:json}],x=o.x==null?W*.05:o.x,y=o.y==null?H*.2:o.y,w=o.w==null?W*.9:o.w,h=o.h==null?H*.55:o.h,p=o.p==null?1:o.p,merc=o.proj=='mercator',pr=function(q){var la=Mx.max(-85,Mx.min(85,q[1]));return[q[0],merc?Mx.log(Mx.tan(Mx.PI/4+la*Mx.PI/360))*180/Mx.PI:la]},rings=[];
  function add(g){if(!g)return;var t0=g.type,co=g.coordinates;if(t0=='Polygon')co.forEach(function(r){rings.push({r:r.map(pr),f:1})});else if(t0=='MultiPolygon')co.forEach(function(pg){pg.forEach(function(r){rings.push({r:r.map(pr),f:1})})});else if(t0=='LineString')rings.push({r:co.map(pr),f:0});else if(t0=='MultiLineString')co.forEach(function(r){rings.push({r:r.map(pr),f:0})});else if(t0=='Point')rings.push({r:[pr(co)],f:2});else if(t0=='GeometryCollection')g.geometries.forEach(add)}
  feats.forEach(function(f){add(f.geometry)});var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;rings.forEach(function(g){g.r.forEach(function(q){x0=Mx.min(x0,q[0]);x1=Mx.max(x1,q[0]);y0=Mx.min(y0,q[1]);y1=Mx.max(y1,q[1])})});var s=Mx.min(w/((x1-x0)||1),h/((y1-y0)||1)),ox=x+(w-(x1-x0)*s)/2,oy=y+(h-(y1-y0)*s)/2;
  c.save();c.lineJoin='round';rings.forEach(function(g,i){var pe=E.seg(p,i/rings.length*.6,.4);if(pe<=0)return;c.globalAlpha=pe;var m=function(q){return[ox+(q[0]-x0)*s,oy+(y1-q[1])*s]};if(g.f==2){var q0=m(g.r[0]);c.fillStyle=o.pointColor||'#e5484d';c.beginPath();c.arc(q0[0],q0[1],W*.008,0,TAU);c.fill();return}c.beginPath();g.r.forEach(function(q,k){var z=m(q);if(k)c.lineTo(z[0],z[1]);else c.moveTo(z[0],z[1])});if(g.f){c.closePath();c.fillStyle=o.fill||'rgba(212,175,55,.35)';c.fill()}c.strokeStyle=o.stroke||'#d4af37';c.lineWidth=o.lw||W*.002;c.stroke()});c.restore()};
 return A}

/* ===== Huda Coder: 3D (own WebGL renderer) + audio engine ===== */
var CDRVS='attribute vec3 a_pos;attribute vec3 a_nor;attribute vec2 a_uv;uniform mat4 u_mvp;uniform mat4 u_model;uniform mat3 u_nm;varying vec3 v_pos;varying vec3 v_nor;varying vec2 v_uv;void main(){vec4 wp=u_model*vec4(a_pos,1.0);v_pos=wp.xyz;v_nor=normalize(u_nm*a_nor);v_uv=a_uv;gl_Position=u_mvp*vec4(a_pos,1.0);}';
var CDRFS='#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec3 v_pos;varying vec3 v_nor;varying vec2 v_uv;uniform vec3 u_cam;uniform vec4 u_col;uniform vec3 u_emi;uniform float u_metal;uniform float u_rough;uniform vec3 u_amb;uniform float u_rim;uniform float u_unlit;uniform vec3 u_lpos[4];uniform vec3 u_lcol[4];uniform float u_ltype[4];uniform float u_tmode;uniform vec3 u_tcol2;uniform float u_tscale;uniform sampler2D u_map;\n'
+'void main(){vec4 base=u_col;if(u_tmode>0.5&&u_tmode<1.5){base*=texture2D(u_map,v_uv);}else if(u_tmode>1.5){vec2 q=v_uv*u_tscale;float m=0.0;if(u_tmode<2.5){m=mod(floor(q.x)+floor(q.y),2.0);}else if(u_tmode<3.5){m=mod(floor(q.x),2.0);}else{vec2 f=abs(fract(q)-0.5);m=step(0.45,max(f.x,f.y));}base.rgb=mix(base.rgb,u_tcol2,m);}\n'
+'vec3 N=normalize(v_nor);vec3 V=normalize(u_cam-v_pos);if(!gl_FrontFacing)N=-N;vec3 col;if(u_unlit>0.5){col=base.rgb;}else{vec3 diffc=base.rgb*(1.0-u_metal);vec3 specc=mix(vec3(0.04),base.rgb,u_metal);float shin=mix(6.0,160.0,pow(1.0-u_rough,2.0));col=diffc*u_amb;\n'
+'for(int i=0;i<4;i++){vec3 L;float att=1.0;if(u_ltype[i]<0.5){L=normalize(-u_lpos[i]);}else{vec3 d=u_lpos[i]-v_pos;float dist=length(d);L=d/dist;att=1.0/(1.0+0.07*dist+0.02*dist*dist);}float nl=max(dot(N,L),0.0);vec3 H=normalize(L+V);float sp=pow(max(dot(N,H),0.0),shin)*nl;col+=(diffc*nl+specc*sp*(1.0-u_rough*0.6))*u_lcol[i]*att;}\n'
+'vec3 R=reflect(-V,N);vec3 env=mix(vec3(0.08,0.09,0.12),vec3(0.75,0.85,1.0),clamp(R.y*0.5+0.5,0.0,1.0));float fr=pow(1.0-max(dot(N,V),0.0),4.0);col+=env*specc*(1.0-u_rough)*(0.25+0.75*fr+0.5*u_metal);col+=u_rim*pow(1.0-max(dot(N,V),0.0),3.0)*vec3(1.0);}\n'
+'col+=u_emi;float a=base.a;gl_FragColor=vec4(col*a,a);}';
function cdrM4mul(a,b){var o=new Float32Array(16),i,j,k;for(i=0;i<4;i++)for(j=0;j<4;j++){var s=0;for(k=0;k<4;k++)s+=a[k*4+j]*b[i*4+k];o[i*4+j]=s}return o}
function cdrM4persp(fov,asp,n,f){var q=1/Math.tan(fov/2);return new Float32Array([q/asp,0,0,0,0,q,0,0,0,0,(f+n)/(n-f),-1,0,0,2*f*n/(n-f),0])}
function cdrV3n(v){var l=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]}
function cdrV3x(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}
function cdrV3d(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}
function cdrM4look(e,tg,up){var z=cdrV3n([e[0]-tg[0],e[1]-tg[1],e[2]-tg[2]]),x=cdrV3n(cdrV3x(up,z)),y=cdrV3x(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-cdrV3d(x,e),-cdrV3d(y,e),-cdrV3d(z,e),1])}
function cdrM4trs(p,r,s){var cx=Math.cos(r[0]),sx=Math.sin(r[0]),cy=Math.cos(r[1]),sy=Math.sin(r[1]),cz=Math.cos(r[2]),sz=Math.sin(r[2]),
 Rx=new Float32Array([1,0,0,0,0,cx,sx,0,0,-sx,cx,0,0,0,0,1]),Ry=new Float32Array([cy,0,-sy,0,0,1,0,0,sy,0,cy,0,0,0,0,1]),Rz=new Float32Array([cz,sz,0,0,-sz,cz,0,0,0,0,1,0,0,0,0,1]),
 S=new Float32Array([s[0],0,0,0,0,s[1],0,0,0,0,s[2],0,0,0,0,1]),T=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,p[0],p[1],p[2],1]);return cdrM4mul(T,cdrM4mul(Rz,cdrM4mul(Ry,cdrM4mul(Rx,S))))}
function cdrM3nm(m){var c0=[m[0],m[1],m[2]],c1=[m[4],m[5],m[6]],c2=[m[8],m[9],m[10]],a=cdrV3x(c1,c2),b=cdrV3x(c2,c0),d=cdrV3x(c0,c1),det=cdrV3d(c0,a)||1;return new Float32Array([a[0]/det,a[1]/det,a[2]/det,b[0]/det,b[1]/det,b[2]/det,d[0]/det,d[1]/det,d[2]/det])}
function cdrGeo(kind){var P=[],N=[],U=[],I=[],i,j;
 function quad(a,b,c,d){I.push(a,b,c,a,c,d)}
 if(kind=='cube'){var F=[[0,0,1,1,0,0,0,1,0],[0,0,-1,-1,0,0,0,1,0],[1,0,0,0,0,-1,0,1,0],[-1,0,0,0,0,1,0,1,0],[0,1,0,1,0,0,0,0,-1],[0,-1,0,1,0,0,0,0,1]];F.forEach(function(f){var n=[f[0],f[1],f[2]],u=[f[3],f[4],f[5]],v=[f[6],f[7],f[8]],b=P.length/3,k;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(function(q,qi){for(k=0;k<3;k++)P.push(n[k]*.5+u[k]*q[0]*.5+v[k]*q[1]*.5);N.push(n[0],n[1],n[2]);U.push((q[0]+1)/2,(q[1]+1)/2)});quad(b,b+1,b+2,b+3)})}
 else if(kind=='sphere'){var S=40,R=20;for(i=0;i<=R;i++){var th=i/R*Math.PI;for(j=0;j<=S;j++){var ph=j/S*Math.PI*2,x=Math.sin(th)*Math.cos(ph),y=Math.cos(th),z=Math.sin(th)*Math.sin(ph);P.push(x*.5,y*.5,z*.5);N.push(x,y,z);U.push(j/S,1-i/R)}}for(i=0;i<R;i++)for(j=0;j<S;j++){var a=i*(S+1)+j;quad(a,a+S+1,a+S+2,a+1)}}
 else if(kind=='torus'){var S2=48,R2=24,r0=.33,r1=.15;for(i=0;i<=R2;i++){var u2=i/R2*Math.PI*2;for(j=0;j<=S2;j++){var v2=j/S2*Math.PI*2,cx=Math.cos(u2)*(r0+r1*Math.cos(v2)),cz=Math.sin(u2)*(r0+r1*Math.cos(v2)),cy=r1*Math.sin(v2);P.push(cx,cy,cz);N.push(Math.cos(u2)*Math.cos(v2),Math.sin(v2),Math.sin(u2)*Math.cos(v2));U.push(i/R2,j/S2)}}for(i=0;i<R2;i++)for(j=0;j<S2;j++){var a2=i*(S2+1)+j;quad(a2,a2+1,a2+S2+2,a2+S2+1)}}
 else if(kind=='cylinder'||kind=='cone'){var S3=40,top=kind=='cone'?0:.5;for(j=0;j<=S3;j++){var ph3=j/S3*Math.PI*2,cx3=Math.cos(ph3),sz3=Math.sin(ph3),sl=kind=='cone'?.5:0,nl=Math.hypot(1,sl);P.push(cx3*.5,-.5,sz3*.5,cx3*top,.5,sz3*top);N.push(cx3/nl,sl/nl,sz3/nl,cx3/nl,sl/nl,sz3/nl);U.push(j/S3,0,j/S3,1)}for(j=0;j<S3;j++){var b3=j*2;I.push(b3,b3+1,b3+3,b3,b3+3,b3+2)}
  [[-.5,-1],[.5,1]].forEach(function(cp){if(cp[0]>0&&kind=='cone')return;var cb=P.length/3;P.push(0,cp[0],0);N.push(0,cp[1],0);U.push(.5,.5);var rr=cp[0]>0?top:.5,k;for(k=0;k<=S3;k++){var pp=k/S3*Math.PI*2;P.push(Math.cos(pp)*rr,cp[0],Math.sin(pp)*rr);N.push(0,cp[1],0);U.push(.5+Math.cos(pp)*.5,.5+Math.sin(pp)*.5)}for(k=0;k<S3;k++){if(cp[1]<0)I.push(cb,cb+k+2,cb+k+1);else I.push(cb,cb+k+1,cb+k+2)}})}
 else{P.push(-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0);N.push(0,0,1,0,0,1,0,0,1,0,0,1);U.push(0,0,1,0,1,1,0,1);I.push(0,1,2,0,2,3)}
 return{p:new Float32Array(P),n:new Float32Array(N),u:new Float32Array(U),i:new Uint16Array(I)}}
function cdrEngines2(E,c,W,H,dur,fps,FR,A){
 var Mx=Math,clamp=E.clamp;
 /* ---- 7. 3D ---- */
 E.scene3d=function(o){o=o||{};var cv=document.createElement('canvas'),gl=cv.getContext('webgl',{alpha:true,premultipliedAlpha:true,preserveDrawingBuffer:true,antialias:true});if(!gl)throw new Error(t('cdr_gl_err'));
  function sh(ty,src){var s=gl.createShader(ty);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s}
  var pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,CDRVS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,CDRFS));gl.linkProgram(pr);if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(pr));
  var U={};['u_mvp','u_model','u_nm','u_cam','u_col','u_emi','u_metal','u_rough','u_amb','u_rim','u_unlit','u_lpos[0]','u_lcol[0]','u_ltype[0]','u_tmode','u_tcol2','u_tscale','u_map'].forEach(function(n){U[n]=gl.getUniformLocation(pr,n)}),
   AT={pos:gl.getAttribLocation(pr,'a_pos'),nor:gl.getAttribLocation(pr,'a_nor'),uv:gl.getAttribLocation(pr,'a_uv')},white=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,white);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([255,255,255,255]));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  var S={meshes:[],lights:[],amb:[.25,.27,.32],bg:o.bg||null,cam:{pos:[0,0,4],target:[0,0,0],up:[0,1,0],fov:50,near:.1,far:100}},geos={};
  FR.push(function(){try{var ext=gl.getExtension('WEBGL_lose_context');if(ext)ext.loseContext()}catch(e){}});
  function geo(k){if(geos[k])return geos[k];var g=cdrGeo(k),mk=function(arr,tg){var b=gl.createBuffer();gl.bindBuffer(tg,b);gl.bufferData(tg,arr,gl.STATIC_DRAW);return b};var G={pb:mk(g.p,gl.ARRAY_BUFFER),nb:mk(g.n,gl.ARRAY_BUFFER),ub:mk(g.u,gl.ARRAY_BUFFER),ib:mk(g.i,gl.ELEMENT_ARRAY_BUFFER),n:g.i.length,idx:g.i,eb:null};return geos[k]=G}
  function edges(G){if(G.eb)return G;var seen={},L=[],i,I=G.idx;for(i=0;i<I.length;i+=3){[[I[i],I[i+1]],[I[i+1],I[i+2]],[I[i+2],I[i]]].forEach(function(e){var a=Mx.min(e[0],e[1]),b=Mx.max(e[0],e[1]),k=a*70000+b;if(!seen[k]){seen[k]=1;L.push(a,b)}})}G.eb=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,G.eb);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(L),gl.STATIC_DRAW);G.en=L.length;return G}
  S.camera=function(o2){var k;for(k in o2)S.cam[k]=o2[k];return S};
  S.ambient=function(col,k){var r=cdrColRGBA(col);S.amb=[r[0]*(k==null?1:k),r[1]*(k==null?1:k),r[2]*(k==null?1:k)];return S};
  S.light=function(o2){o2=o2||{};var r=cdrColRGBA(o2.color||'#ffffff'),L={type:o2.type||'dir',dir:o2.dir||[-.5,-1,-.6],pos:o2.pos||[3,4,3],col:[r[0],r[1],r[2]],k:o2.intensity==null?1:o2.intensity};S.lights.push(L);return L};
  S.mesh=function(kind,o2){o2=o2||{};var m={kind:kind,pos:[0,0,0],rot:[0,0,0],scale:[1,1,1],color:'#cccccc',metal:0,rough:.5,emissive:null,opacity:1,wire:false,tex:null,tex2:'#000000',texScale:8,map:null,unlit:false,visible:true,rim:0,_t:null,_ms:null},k;for(k in o2)m[k]=o2[k];m.setScale=function(s){m.scale=typeof s=='number'?[s,s,s]:s;return m};S.meshes.push(m);return m};
  function texOf(m){if(!m.map)return white;if(m._ms===m.map&&m._t)return m._t;var t0=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t0);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,m.map);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);m._t=t0;m._ms=m.map;return t0}
  var TM={map:1,checker:2,stripes:3,grid:4};
  S.render=function(tm){var pw=c.canvas.width,ph=c.canvas.height;if(cv.width!=pw||cv.height!=ph){cv.width=pw;cv.height=ph}gl.viewport(0,0,pw,ph);var bg=S.bg?cdrColRGBA(S.bg):[0,0,0,0];gl.clearColor(bg[0]*bg[3],bg[1]*bg[3],bg[2]*bg[3],bg[3]);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.useProgram(pr);
   var cm=S.cam,proj=cdrM4persp(cm.fov*Mx.PI/180,pw/ph,cm.near,cm.far),view=cdrM4look(cm.pos,cm.target,cm.up),vp=cdrM4mul(proj,view),lp=new Float32Array(12),lc=new Float32Array(12),lt=new Float32Array(4),i;
   S.lights.slice(0,4).forEach(function(L,k){var v=L.type=='point'?L.pos:L.dir;lp[k*3]=v[0];lp[k*3+1]=v[1];lp[k*3+2]=v[2];lc[k*3]=L.col[0]*L.k;lc[k*3+1]=L.col[1]*L.k;lc[k*3+2]=L.col[2]*L.k;lt[k]=L.type=='point'?1:0});
   if(!S.lights.length){lp.set([-.5,-1,-.6]);lc.set([1,1,1])}
   gl.uniform3fv(U['u_lpos[0]'],lp);gl.uniform3fv(U['u_lcol[0]'],lc);gl.uniform1fv(U['u_ltype[0]'],lt);gl.uniform3fv(U.u_cam,new Float32Array(cm.pos));gl.uniform3fv(U.u_amb,new Float32Array(S.amb));
   var vis=S.meshes.filter(function(m){return m.visible!==false}),dist=function(m){return Mx.hypot(m.pos[0]-cm.pos[0],m.pos[1]-cm.pos[1],m.pos[2]-cm.pos[2])},op=vis.filter(function(m){return m.opacity>=1}),tr=vis.filter(function(m){return m.opacity<1}).sort(function(a,b){return dist(b)-dist(a)});
   op.concat(tr).forEach(function(m){var G=geo(m.kind),sc=typeof m.scale=='number'?[m.scale,m.scale,m.scale]:m.scale,model=cdrM4trs(m.pos,m.rot,sc),col=cdrColRGBA(m.color),em=m.emissive?cdrColRGBA(m.emissive):[0,0,0,0];
    gl.uniformMatrix4fv(U.u_mvp,false,cdrM4mul(vp,model));gl.uniformMatrix4fv(U.u_model,false,model);gl.uniformMatrix3fv(U.u_nm,false,cdrM3nm(model));gl.uniform4f(U.u_col,col[0],col[1],col[2],col[3]*m.opacity);gl.uniform3f(U.u_emi,em[0]*(m.emissiveK==null?1:m.emissiveK),em[1]*(m.emissiveK==null?1:m.emissiveK),em[2]*(m.emissiveK==null?1:m.emissiveK));gl.uniform1f(U.u_metal,m.metal);gl.uniform1f(U.u_rough,m.rough);gl.uniform1f(U.u_rim,m.rim||0);gl.uniform1f(U.u_unlit,m.unlit?1:0);
    var tmode=m.map?1:(m.tex?TM[m.tex]||0:0),t2=cdrColRGBA(m.tex2);gl.uniform1f(U.u_tmode,tmode);gl.uniform3f(U.u_tcol2,t2[0],t2[1],t2[2]);gl.uniform1f(U.u_tscale,m.texScale);gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,texOf(m));gl.uniform1i(U.u_map,0);
    gl.depthMask(m.opacity>=1);gl.bindBuffer(gl.ARRAY_BUFFER,G.pb);gl.enableVertexAttribArray(AT.pos);gl.vertexAttribPointer(AT.pos,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,G.nb);gl.enableVertexAttribArray(AT.nor);gl.vertexAttribPointer(AT.nor,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,G.ub);gl.enableVertexAttribArray(AT.uv);gl.vertexAttribPointer(AT.uv,2,gl.FLOAT,false,0,0);
    if(m.wire){edges(G);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,G.eb);gl.drawElements(gl.LINES,G.en,gl.UNSIGNED_SHORT,0)}else{gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,G.ib);gl.drawElements(gl.TRIANGLES,G.n,gl.UNSIGNED_SHORT,0)}});gl.depthMask(true);
   c.drawImage(cv,0,0,W,H)};
  return S};
 /* ---- 8. audio ---- */
 function push(e){if(A.on)A.evs.push(e)}
 function T0(t0){return Mx.max(0,t0||0)}
 E.tone=function(t0,o){o=o||{};var d=o.dur==null?.4:o.dur;push({k:'tone',t:T0(t0),dur:d,f:o.freq||440,f2:o.slide||o.freq2||0,type:o.type||'sine',gain:o.gain==null?.3:o.gain,a:o.attack==null?.01:o.attack,r:o.release==null?Mx.min(.15,d*.6):o.release,pan:o.pan||0,detune:o.detune||0,filter:o.filter||null});return E};
 E.hiss=function(t0,o){o=o||{};push({k:'noise',t:T0(t0),dur:o.dur==null?.3:o.dur,gain:o.gain==null?.25:o.gain,color:o.color||'white',a:o.attack==null?.005:o.attack,r:o.release==null?.1:o.release,pan:o.pan||0,filter:o.filter||null,seed:o.seed||1});return E};
 E.play=function(buf,t0,o){o=o||{};if(buf)push({k:'buf',t:T0(t0),buf:buf,gain:o.gain==null?1:o.gain,off:o.offset||0,dur:o.dur||0,rate:o.rate||1,pan:o.pan||0});return E};
 function freq(n){if(typeof n=='number')return n;var m=/^([A-Ga-g])([#b]?)(-?\d)$/.exec(n);if(!m)return 440;var b={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1].toUpperCase()]+(m[2]=='#'?1:m[2]=='b'?-1:0),midi=b+12*(+m[3]+1);return 440*Mx.pow(2,(midi-69)/12)}
 E.note=function(n,t0,d,o){o=o||{};var q={};for(var k in o)q[k]=o[k];q.freq=freq(n);q.dur=d==null?.5:d;return E.tone(t0,q)};
 E.chord=function(ns,t0,d,o){o=o||{};var g=(o.gain==null?.3:o.gain)/Mx.max(1,ns.length*.6);ns.forEach(function(n){var q={};for(var k in o)q[k]=o[k];q.gain=g;E.note(n,t0,d,q)});return E};
 E.melody=function(ns,t0,o){o=o||{};var bt=60/(o.bpm||120),t=t0||0;ns.forEach(function(n){var nm=Array.isArray(n)?n[0]:n,b=Array.isArray(n)?(n[1]||1):1;if(nm&&nm!='-'&&nm!='r')E.note(nm,t,b*bt*(o.legato==null?.92:o.legato),o);t+=b*bt});return E};
 E.drone=function(f,t0,d,o){o=o||{};[0,-7,7].forEach(function(dt){E.tone(t0,{freq:f,dur:d,type:'sawtooth',gain:(o.gain==null?.18:o.gain)/3,attack:o.attack==null?Mx.min(1.5,d/3):o.attack,release:o.release==null?Mx.min(1.5,d/3):o.release,detune:dt,filter:{type:'lowpass',freq:o.cutoff||900,q:.7}})});return E};
 E.sfx=function(nm,t0,o){o=o||{};var g=o.gain==null?1:o.gain,d=o.dur;
  switch(nm){
   case'click':E.hiss(t0,{dur:.03,gain:.3*g,filter:{type:'highpass',freq:3000}});E.tone(t0,{freq:1800,slide:900,dur:.04,gain:.25*g,type:'square'});break;
   case'pop':E.tone(t0,{freq:650,slide:140,dur:.14,gain:.5*g});break;
   case'whoosh':case'swoosh':d=d||.7;E.hiss(t0,{dur:d,gain:.5*g,attack:d*.35,release:d*.5,color:'pink',filter:{type:'bandpass',freq:300,freq2:3200,q:1.2}});break;
   case'riser':d=d||2;E.hiss(t0,{dur:d,gain:.35*g,attack:d*.9,release:.05,filter:{type:'highpass',freq:200,freq2:7000}});E.tone(t0,{freq:100,slide:900,dur:d,gain:.12*g,type:'sawtooth',attack:d*.9,release:.05});break;
   case'impact':case'boom':E.tone(t0,{freq:130,slide:34,dur:.9,gain:.9*g,release:.6});E.hiss(t0,{dur:.5,gain:.5*g,color:'brown',release:.4,filter:{type:'lowpass',freq:500,freq2:80}});break;
   case'chime':d=d||1.3;[880,1320,1760,2640].forEach(function(f,i){E.tone((t0||0)+i*.04,{freq:f,dur:d,gain:.22*g/(i+1)*1.4,release:d*.9,attack:.003})});break;
   case'beep':E.tone(t0,{freq:880,dur:.15,gain:.25*g,type:'square',release:.04});break;
   case'laser':E.tone(t0,{freq:1900,slide:160,dur:.28,gain:.3*g,type:'sawtooth',release:.1});break;
   case'coin':E.tone(t0,{freq:988,dur:.08,gain:.25*g,type:'square',release:.02});E.tone((t0||0)+.08,{freq:1319,dur:.4,gain:.25*g,type:'square',release:.3});break;
   case'thunder':d=d||2.2;E.hiss(t0,{dur:d,gain:.8*g,color:'brown',attack:.05,release:d*.8,filter:{type:'lowpass',freq:260,freq2:90}});break;
   case'rain':d=d||3;E.hiss(t0,{dur:d,gain:.14*g,attack:.4,release:.6,filter:{type:'highpass',freq:3500}});break;
   case'wind':d=d||3;E.hiss(t0,{dur:d,gain:.3*g,color:'pink',attack:d*.4,release:d*.4,filter:{type:'bandpass',freq:420,freq2:900,q:.8}});break;
   default:E.tone(t0,{freq:440,dur:.2,gain:.2*g})}return E};
 E.loadAudio=function(u){return fetch(u).then(function(r){return r.arrayBuffer()}).then(function(b){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,oc=new OC(1,1,48000);return oc.decodeAudioData(b)})};
 var ZERO={level:0,peak:0,bass:0,mid:0,high:0,bands:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
 E.audioAt=function(tm){return A.an?A.an(tm):ZERO};
 E.loadFont=function(name,url){return fetch(url).then(function(r){return r.arrayBuffer()}).then(function(buf){var fam='HCF_'+String(name).replace(/\W/g,''),ff=new FontFace(fam,buf);return ff.load().then(function(){document.fonts.add(ff);E.FONT[name]="'"+fam+"',"+CDRFONT.sans;return E.FONT[name]})})}}
/* ---- audio rendering + analysis (outside the user sandbox) ---- */
function cdrNoiseBuf(oc,len,color,seed){var b=oc.createBuffer(1,Math.max(1,len),oc.sampleRate),d=b.getChannelData(0),s=(seed|0)*2654435761>>>0||1,i,b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,last=0;function r(){s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296*2-1}
 for(i=0;i<d.length;i++){var w=r();if(color=='pink'){b0=.99886*b0+w*.0555179;b1=.99332*b1+w*.0750759;b2=.969*b2+w*.153852;b3=.8665*b3+w*.3104856;b4=.55*b4+w*.5329522;b5=-.7616*b5-w*.016898;d[i]=(b0+b1+b2+b3+b4+b5+b6+w*.5362)*.11;b6=w*.115926}else if(color=='brown'){last=(last+.02*w)/1.02;d[i]=last*3.5}else d[i]=w}return b}
function cdrFFT(re,im){var n=re.length,i,j=0,k;for(i=1;i<n;i++){var bit=n>>1;for(;j&bit;bit>>=1)j^=bit;j^=bit;if(i<j){var tr=re[i];re[i]=re[j];re[j]=tr;tr=im[i];im[i]=im[j];im[j]=tr}}for(var len=2;len<=n;len<<=1){var ang=-2*Math.PI/len,wr=Math.cos(ang),wi=Math.sin(ang);for(i=0;i<n;i+=len){var cr=1,ci=0;for(k=0;k<len/2;k++){var ur=re[i+k],ui=im[i+k],vr=re[i+k+len/2]*cr-im[i+k+len/2]*ci,vi=re[i+k+len/2]*ci+im[i+k+len/2]*cr;re[i+k]=ur+vr;im[i+k]=ui+vi;re[i+k+len/2]=ur-vr;im[i+k+len/2]=ui-vi;var nr=cr*wr-ci*wi;ci=cr*wi+ci*wr;cr=nr}}}}
function cdrAnalyser(buf){var N=2048,sr=buf.sampleRate,ch=buf.numberOfChannels,L=buf.getChannelData(0),R=ch>1?buf.getChannelData(1):L,cache={},win=new Float64Array(N),i;for(i=0;i<N;i++)win[i]=.5-.5*Math.cos(2*Math.PI*i/(N-1));
 return function(tm){var key=Math.round(tm*120);if(cache[key])return cache[key];var c0=Math.floor(tm*sr)-N/2,re=new Float64Array(N),im=new Float64Array(N),ss=0,pk=0,k;for(k=0;k<N;k++){var p=c0+k,v=p>=0&&p<L.length?(L[p]+R[p])*.5:0;ss+=v*v;if(Math.abs(v)>pk)pk=Math.abs(v);re[k]=v*win[k]}cdrFFT(re,im);var B=16,bands=[],f0=50,f1=12000,b;for(b=0;b<B;b++){var lo=f0*Math.pow(f1/f0,b/B),hi=f0*Math.pow(f1/f0,(b+1)/B),i0=Math.max(1,Math.floor(lo/sr*N)),i1=Math.max(i0+1,Math.floor(hi/sr*N)),s=0,n=0;for(k=i0;k<i1&&k<N/2;k++){s+=Math.hypot(re[k],im[k]);n++}var mg=n?s/n/(N/4):0,db=20*Math.log10(mg+1e-9);bands.push(Math.max(0,Math.min(1,(db+70)/60)))}
  var avg=function(a,z){var s=0,q;for(q=a;q<=z;q++)s+=bands[q];return s/(z-a+1)},res={level:Math.max(0,Math.min(1,Math.sqrt(ss/N)*3.5)),peak:Math.min(1,pk),bass:avg(0,3),mid:avg(5,9),high:avg(11,15),bands:bands};cache[key]=res;return res}}

function cdrFree(fr){(fr||[]).forEach(function(f){try{f()}catch(e){}})}
function cdrAudStop(){if(CDR&&CDR.asrc){try{CDR.asrc.stop()}catch(e){}CDR.asrc=null}}
function cdrFontAll(){return cdrIdb().then(function(db){return new Promise(function(ok){var q=db.transaction('fonts').objectStore('fonts').getAll();q.onsuccess=function(){ok(q.result||[])};q.onerror=function(){ok([])}})}).catch(function(){return[]})}
function cdrFontPut(rec){return cdrIdb().then(function(db){return new Promise(function(ok,no){var tx=db.transaction('fonts','readwrite');tx.objectStore('fonts').put(rec);tx.oncomplete=function(){ok()};tx.onerror=function(){no(tx.error)}})})}
function cdrFontDel(name){return cdrIdb().then(function(db){return new Promise(function(ok){var tx=db.transaction('fonts','readwrite');tx.objectStore('fonts').delete(name);tx.oncomplete=function(){ok()};tx.onerror=function(){ok()}})}).catch(function(){})}
function cdrFontReg(rec){var fam='HCF_'+rec.name,ff=new FontFace(fam,rec.data.slice(0));return ff.load().then(function(){document.fonts.add(ff);CDR.cf[rec.name]=fam;(CDR.cface||(CDR.cface={}))[rec.name]=ff;return true})}
function cdrFontsLoad(){return cdrFontAll().then(function(L){CDR.cfl=L;return Promise.all(L.map(function(r){return cdrFontReg(r).catch(function(){})}))}).catch(function(){})}
function cdrFontAdd(f,nm){var name=String(nm||f.name.replace(/\.[^.]+$/,'')).replace(/[^A-Za-z0-9_]/g,'_').replace(/^(\d)/,'f$1')||'font1';if(CDRFONT[name]||name=='mine')name+='_';return f.arrayBuffer().then(function(buf){var li=$('#cdrlic'),rec={name:name,data:buf,lic:li?String(li.value).slice(0,160):''};return cdrFontReg(rec).then(function(){return cdrFontPut(rec)}).then(function(){CDR.cfl=(CDR.cfl||[]).filter(function(r){return r.name!=name}).concat([rec]);toast(t('cdr_saved'));if(CDR.tab=='set')cdrBody()},function(){toast(t('cdr_f_err'))})},function(){toast(t('cdr_f_err'))})}
function cdrMdOpen(){var m=$('#cdrmd');if(m){m.hidden=false;cdrJobUi()}}
function cdrMdClose(){var m=$('#cdrmd');if(m)m.hidden=true}
function cdrJobHtml(){var J=CDR.job,d=cdrDims(),vid=CDR.type=='vid'&&CDR.m=='js',h='';
 if(!J){if(CDR.fmt=='svg'&&CDR.m!='svg')CDR.fmt='png';h+='<p class="mu">'+d.W+'\u00d7'+d.H+(vid?' \u00b7 '+CDR.dur+'s \u00b7 '+CDR.fps+' FPS':'')+'</p><label>'+t('cdr_out')+'</label><div class="cdrchs">'+cdrCh('type',[['img',t('cdr_img')],['vid',t('cdr_vid')]],CDR.type)+'</div>';
  if(!vid)h+='<label>'+t('cdr_fmt')+'</label><div class="cdrchs">'+cdrCh('fmt',CDR.m=='svg'?[['png','PNG'],['jpg','JPG'],['webp','WebP'],['svg','SVG']]:[['png','PNG'],['jpg','JPG'],['webp','WebP']],CDR.fmt)+'</div>';
  if(vid&&CDR.inst&&CDR.inst.aBuf)h+='<p class="mu">'+t('cdr_aud_n')+'</p>';if(CDR.inst&&CDR.inst.aBuf)h+='<div class="cdrrow"><button type="button" class="btn" data-cdr="wav">'+ic('spk')+t('cdr_wav')+'</button></div>';
  return h+'<div class="cdrrow"><button type="button" class="btn wide" data-cdr="make">'+ic('sparkle')+t('stt_cr')+'</button></div>'}
 if(J.st=='run'){var pc=Math.round(J.p*100);return'<p class="mu" id="cdrpt">'+t('cdr_busy')+' '+pc+'%</p><div class="stpb"><i id="cdrpi" style="width:'+pc+'%"></i></div><p class="mu">'+t('cdr_jb_bg')+'</p><div class="cdrrow"><button type="button" class="btn" data-cdr="cancel">'+ic('x')+t('st_cancel')+'</button><button type="button" class="btn" data-cdr="mdc">'+t('cdr_close')+'</button></div>'}
 if(J.st=='err')return'<div class="cdrlog"><div class="er"><b>'+t('cdr_err')+'</b>\n'+esc(J.err)+'</div></div><div class="cdrrow"><button type="button" class="btn wide" data-cdr="mdc">'+t('cdr_close')+'</button></div>';
 return(J.out.vid?'<video controls playsinline src="'+J.out.url+'"></video>':'<img alt="" src="'+J.out.url+'">')+'<div class="cdrrow"><button type="button" class="btn" data-cdr="odl">'+ic('dl')+t('cdr_dl')+'</button><button type="button" class="btn" data-cdr="osh">'+ic('share')+t('st_share')+'</button></div><div class="cdrrow"><button type="button" class="btn" data-cdr="jnew">'+t('cdr_new')+'</button></div>'}
function cdrJobUi(){var J=CDR.job,pj=$('#cdrjb');if(pj){if(!J)pj.innerHTML='';else if(J.st=='run')pj.innerHTML='<button type="button" class="cdrjp" data-cdr="exp"><i class="cdrjf" id="cdrjf" style="width:'+Math.round(J.p*100)+'%"></i><span class="cdrjt">'+ic('dl')+'<em id="cdrjt">'+t('cdr_busy')+' '+Math.round(J.p*100)+'%</em></span></button>';else if(J.st=='done')pj.innerHTML='<button type="button" class="cdrjp ok" data-cdr="exp"><span class="cdrjt">'+ic('dl')+'<em>'+t('cdr_jb_done')+'</em></span></button>';else pj.innerHTML='<button type="button" class="cdrjp bad" data-cdr="exp"><span class="cdrjt"><em>'+t('cdr_err')+'</em></span></button>'}
 var mb=$('#cdrmb');if(mb)mb.innerHTML=cdrJobHtml()}

function cdrDims(){var r=CDRR[CDR.ratio]||[1,1],s=CDR.ss,w,h;if(r[0]>=r[1]){h=s;w=Math.round(s*r[0]/r[1])}else{w=s;h=Math.round(s*r[1]/r[0])}return{W:w&~1,H:h&~1}}
function cdrFmt(s){s=Math.max(0,s||0);var m=Math.floor(s/60),x=s-m*60;return m+':'+(x<10?'0':'')+x.toFixed(1)}
/* ---- helper library handed to the user's code ---- */
function cdrEnv(c,W,H,dur,fps){
 var E={},gc=0,gt=performance.now(),TAU=Math.PI*2;
 function tick(){gc=0;gt=performance.now()}
 E.__g=function(){if((++gc&32767)===0&&performance.now()-gt>2500)throw new Error(t('cdr_loop'))};
 E.c=c;E.ctx=c;E.W=W;E.H=H;E.DUR=dur;E.FPS=fps;E.FONT=cdrFonts();E.PI=Math.PI;E.TAU=TAU;
 ['sin','cos','tan','abs','floor','ceil','round','sqrt','min','max','pow','atan2','random'].forEach(function(k){E[k]=Math[k]});
 E.lerp=function(a,b,k){return a+(b-a)*k};
 E.clamp=function(v,a,b){return Math.min(b,Math.max(a,v))};
 E.map=function(v,a1,b1,a2,b2){return a2+(v-a1)/(b1-a1)*(b2-a2)};
 E.seg=function(tt,s,d){return Math.min(1,Math.max(0,(tt-s)/(d||1)))};
 E.rnd=function(a,b,c3){var h=Math.imul(a|0,374761393)^Math.imul((b||0)|0,668265263)^Math.imul((c3||0)|0,1274126177);h=Math.imul(h^(h>>>13),1274126177);h^=h>>>16;return(h>>>0)/4294967296};
 E.noise=function(x,y,z){y=y||0;z=z||0;var xi=Math.floor(x),yi=Math.floor(y),zi=Math.floor(z),xf=x-xi,yf=y-yi,zf=z-zi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf),w=zf*zf*(3-2*zf);
  function h(a,b,c3){return E.rnd(xi+a,yi+b,zi+c3)}function l(a,b,k){return a+(b-a)*k}
  return l(l(l(h(0,0,0),h(1,0,0),u),l(h(0,1,0),h(1,1,0),u),v),l(l(h(0,0,1),h(1,0,1),u),l(h(0,1,1),h(1,1,1),u),v),w)};
 var EF={lin:function(p){return p},'in':function(p){return p*p*p},out:function(p){return 1-Math.pow(1-p,3)},inOut:function(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2},sine:function(p){return .5-Math.cos(Math.PI*p)/2},back:function(p){var s=1.70158;return 1+(s+1)*Math.pow(p-1,3)+s*Math.pow(p-1,2)},elastic:function(p){return p===0||p===1?p:Math.pow(2,-10*p)*Math.sin((p*10-.75)*2.0943951)+1},bounce:function(p){var n=7.5625,d=2.75;if(p<1/d)return n*p*p;if(p<2/d){p-=1.5/d;return n*p*p+.75}if(p<2.5/d){p-=2.25/d;return n*p*p+.9375}p-=2.625/d;return n*p*p+.984375}};
 E.ease={};Object.keys(EF).forEach(function(k){E.ease[k]=function(p){return EF[k](Math.min(1,Math.max(0,p)))}});
 E.hsl=function(h,s,l,a){return'hsla('+h+','+s+'%,'+l+'%,'+(a==null?1:a)+')'};
 E.mix=function(a,b,k){function P3(x){x=String(x).replace('#','');if(x.length==3)x=x.replace(/./g,'$&$&');return[parseInt(x.slice(0,2),16),parseInt(x.slice(2,4),16),parseInt(x.slice(4,6),16)]}var p=P3(a),q=P3(b);return'rgb('+Math.round(p[0]+(q[0]-p[0])*k)+','+Math.round(p[1]+(q[1]-p[1])*k)+','+Math.round(p[2]+(q[2]-p[2])*k)+')'};
 E.grad=function(cols,ang,x,y,w,h){x=x||0;y=y||0;w=w==null?W:w;h=h==null?H:h;var a=(ang==null?90:ang)*Math.PI/180,cx=x+w/2,cy=y+h/2,L=(Math.abs(Math.cos(a))*w+Math.abs(Math.sin(a))*h)/2,dx=Math.cos(a)*L,dy=Math.sin(a)*L,g=c.createLinearGradient(cx-dx,cy-dy,cx+dx,cy+dy);cols.forEach(function(col,i){g.addColorStop(cols.length>1?i/(cols.length-1):0,col)});return g};
 E.bg=function(f,ang){c.save();c.fillStyle=Array.isArray(f)?E.grad(f,ang):f;c.fillRect(0,0,W,H);c.restore()};
 function paint(fill,stroke,sw){if(fill){c.fillStyle=Array.isArray(fill)?E.grad(fill):fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=sw||2;c.stroke()}}
 E.rect=function(x,y,w,h,fill,r,stroke,sw){c.beginPath();r=Math.min(r||0,Math.abs(w)/2,Math.abs(h)/2);if(r>0){c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}else c.rect(x,y,w,h);paint(fill,stroke,sw)};
 E.circle=function(x,y,r,fill,stroke,sw){c.beginPath();c.arc(x,y,Math.max(0,r),0,TAU);paint(fill,stroke,sw)};
 E.line=function(x1,y1,x2,y2,col,w,cap){c.save();c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.strokeStyle=col||'#fff';c.lineWidth=w||2;c.lineCap=cap||'round';c.stroke();c.restore()};
 E.poly=function(p,fill,stroke,sw){c.beginPath();p.forEach(function(q,i){if(i)c.lineTo(q[0],q[1]);else c.moveTo(q[0],q[1])});c.closePath();paint(fill,stroke,sw)};
 E.star=function(x,y,n,r1,r2,rot,fill,stroke,sw){var p=[],k;for(k=0;k<n*2;k++){var a=(rot||0)+k*Math.PI/n-Math.PI/2,r=k%2?r2:r1;p.push([x+Math.cos(a)*r,y+Math.sin(a)*r])}E.poly(p,fill,stroke,sw)};
 E.wrap=function(s,mw){var out=[];String(s).split('\n').forEach(function(par){var line='';par.split(' ').forEach(function(w2){var tt=line?line+' '+w2:w2;if(line&&c.measureText(tt).width>mw){out.push(line);line=w2}else line=tt});out.push(line)});return out};
 E.text=function(s,x,y,o){o=o||{};var sz=o.size||48,lh=(o.lh||1.3)*sz,fam=o.font||CDRFONT.sans;c.save();c.font=(o.italic?'italic ':'')+(o.weight?o.weight+' ':'')+sz+'px '+fam;c.textAlign=o.align||'left';c.textBaseline='middle';if(o.rtl!=null)c.direction=o.rtl?'rtl':'ltr';if(o.ls!=null&&'letterSpacing' in c)c.letterSpacing=o.ls+'px';if(o.alpha!=null)c.globalAlpha*=o.alpha;if(o.shadow){c.shadowColor=o.shadow;c.shadowBlur=o.blur==null?sz*.25:o.blur}
  var ls=o.w?E.wrap(s,o.w):String(s).split('\n'),tot=ls.length*lh,y0=o.v=='top'?y+lh/2:o.v=='bottom'?y-tot+lh/2:y-tot/2+lh/2,mw=0;
  ls.forEach(function(l,i){var yy=y0+i*lh;if(o.stroke){c.lineWidth=o.sw||sz*.08;c.lineJoin='round';c.strokeStyle=o.stroke;c.strokeText(l,x,yy)}c.fillStyle=Array.isArray(o.color)?E.grad(o.color,o.ang):(o.color||'#fff');c.fillText(l,x,yy);mw=Math.max(mw,c.measureText(l).width)});
  c.restore();return{w:mw,h:tot,lines:ls.length}};
 E.loadImage=function(u){if(CDRIM[u])return CDRIM[u];return CDRIM[u]=new Promise(function(ok,no){var im=new Image();im.crossOrigin='anonymous';im.onload=function(){ok(im)};im.onerror=function(){delete CDRIM[u];no(new Error('image: '+u))};im.src=u})};
 E.img=function(im,x,y,w,h,mode){var iw=im.naturalWidth||im.width,ih=im.naturalHeight||im.height;if(w==null){w=iw;h=ih}if(mode=='contain'){var s=Math.min(w/iw,h/ih),dw=iw*s,dh=ih*s;c.drawImage(im,x+(w-dw)/2,y+(h-dh)/2,dw,dh)}else{var s2=Math.max(w/iw,h/ih),sw2=w/s2,sh2=h/s2;c.drawImage(im,(iw-sw2)/2,(ih-sh2)/2,sw2,sh2,x,y,w,h)}};
 E.font=function(fam){var f=String(fam).split(',')[0].trim().replace(/['"]/g,'');if(!(document.fonts&&document.fonts.load))return Promise.resolve();return Promise.all([document.fonts.load('40px "'+f+'"','\u0627\u0628\u062a'),document.fonts.load('40px "'+f+'"','Abc')]).catch(function(){})};
 E.quran=function(s,a){var k=s+':'+a;if(CDRQ[k])return Promise.resolve(CDRQ[k]);return stJ('/ayah/'+k+'/editions/quran-uthmani,ta.tamil,en.sahih').then(function(d){var o={ar:d[0].text,ta:d[1].text,en:d[2].text,surah:d[0].surah.englishName,sname:d[0].surah.name,s:s,a:a,ref:d[0].surah.englishName+' '+k};CDRQ[k]=o;return o})};
 E.sleep=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
 E.log=function(){var a=[].slice.call(arguments).map(function(x){try{return typeof x=='object'?JSON.stringify(x):String(x)}catch(e){return String(x)}}).join(' ');CDR.logs.push(a);if(CDR.logs.length>80)CDR.logs.shift();cdrLogSoon()};
 E.console={log:E.log,warn:E.log,error:E.log,info:E.log};
 var FR=[];var A=cdrEngines(E,c,W,H,dur,fps,FR);cdrEngines2(E,c,W,H,dur,fps,FR,A);cdrEngines3(E,c,W,H,dur,fps,FR,A);return{E:E,tick:tick,A:A,free:FR}}
function cdrSkipStr(s,i){var q=s[i],j=i+1,n=s.length;while(j<n&&s[j]!==q){if(s[j]==='\\')j++;j++}return Math.min(j+1,n)}
function cdrGuard(s){var out='',i=0,n=s.length,ch,j,k,d,m,w,q,pv;
 while(i<n){ch=s[i];
  if(ch==='/'&&s[i+1]==='/'){j=s.indexOf('\n',i);if(j<0)j=n;out+=s.slice(i,j);i=j;continue}
  if(ch==='/'&&s[i+1]==='*'){j=s.indexOf('*/',i+2);j=j<0?n:j+2;out+=s.slice(i,j);i=j;continue}
  if(ch==="'"||ch==='"'||ch==='`'){j=cdrSkipStr(s,i);out+=s.slice(i,j);i=j;continue}
  if(/[A-Za-z_$]/.test(ch)){j=i;while(j<n&&/[\w$]/.test(s[j]))j++;w=s.slice(i,j);pv=out.replace(/\s+$/,'').slice(-1);
   if((w==='for'||w==='while')&&pv!=='.'){k=j;while(k<n&&/\s/.test(s[k]))k++;
    if(s[k]==='('){d=0;m=k;while(m<n){q=s[m];if(q==="'"||q==='"'||q==='`'){m=cdrSkipStr(s,m);continue}if(q==='(')d++;else if(q===')'){d--;if(d===0)break}m++}
     q=m+1;while(q<n&&/\s/.test(s[q]))q++;if(m<n&&s[q]==='{'){out+=s.slice(i,q+1)+'__g();';i=q+1;continue}}}
   else if(w==='do'&&pv!=='.'){k=j;while(k<n&&/\s/.test(s[k]))k++;if(s[k]==='{'){out+=s.slice(i,k+1)+'__g();';i=k+1;continue}}
   out+=w;i=j;continue}
  out+=ch;i++}
 return out}
function cdrBuild(code,W,H,cv,k,dur,fps){
 var c=cv.getContext('2d'),en=cdrEnv(c,W,H,dur,fps),E=en.E,names=Object.keys(E),vals=names.map(function(n){return E[n]}),api,fn;
 var src=cdrGuard(code)+'\n;return{setup:typeof setup=="function"?setup:null,draw:typeof draw=="function"?draw:null,audio:typeof audio=="function"?audio:null}';
 try{fn=Function.apply(null,names.concat([src]))}catch(e){cdrFree(en.free);return Promise.reject(e)}
 c.setTransform(k,0,0,k,0,0);en.tick();
 try{api=fn.apply(null,vals)}catch(e){c.setTransform(1,0,0,1,0,0);cdrFree(en.free);return Promise.reject(e)}
 var inst={c:c,k:k,W:W,H:H,api:api,dur:dur,fps:fps,tick:en.tick,free:en.free,aBuf:null};
 return Promise.resolve().then(function(){en.tick();return api.setup?api.setup():0}).then(function(){c.setTransform(1,0,0,1,0,0);if(!api.audio)return;en.A.on=true;en.A.evs.length=0;try{api.audio()}finally{en.A.on=false}return cdrAudioRender(en.A.evs,dur,en.A.cfg).then(function(buf){inst.aBuf=buf;en.A.an=inst.an=buf?cdrAnalyser(buf):null},function(e){CDR.notes.push(t('cdr_a_err')+': '+((e&&e.message)||e))})}).then(function(){return inst},function(e){c.setTransform(1,0,0,1,0,0);cdrFree(en.free);throw e})}
function cdrFrame(inst,tm){if(!inst.api.draw)return;var c=inst.c;c.save();c.setTransform(inst.k,0,0,inst.k,0,0);c.globalAlpha=1;c.globalCompositeOperation='source-over';c.shadowBlur=0;c.clearRect(0,0,inst.W,inst.H);inst.tick();try{inst.api.draw(tm,Math.min(1,tm/Math.max(.001,inst.dur)),Math.round(tm*inst.fps))}finally{c.restore()}}
function cdrStaticSrc(W,H,code,m){code=code==null?CDR.code:code;m=m||CDR.m;
 if(m=='svg'){var mm=/<svg\b[^>]*>/i.exec(code);if(!mm)throw new Error('<svg> not found');var tag=mm[0],nt=tag.replace(/\s(width|height)\s*=\s*("[^"]*"|'[^']*')/gi,'');nt=nt.replace(/<svg\b/i,'<svg width="'+W+'" height="'+H+'"');if(!/xmlns\s*=/.test(nt))nt=nt.replace(/<svg\b/i,'<svg xmlns="http://www.w3.org/2000/svg"');return code.replace(tag,function(){return nt})}
 var doc=new DOMParser().parseFromString(code,'text/html'),ser=new XMLSerializer(),st='',i;
 for(i=0;i<doc.head.children.length;i++)st+=ser.serializeToString(doc.head.children[i]);
 var b=ser.serializeToString(doc.body).replace(/^<body\b[^>]*>/,'').replace(/<\/body>$/,'');
 return'<svg xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="'+H+'"><foreignObject x="0" y="0" width="'+W+'" height="'+H+'"><div xmlns="http://www.w3.org/1999/xhtml" style="width:'+W+'px;height:'+H+'px;overflow:hidden;margin:0;position:relative">'+st+b+'</div></foreignObject></svg>'}
function cdrPaintStatic(cv,W,H,code,m){return new Promise(function(ok,no){var src;try{src=cdrStaticSrc(W,H,code,m)}catch(e){no(e);return}var im=new Image();im.onload=function(){var c=cv.getContext('2d');c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.drawImage(im,0,0,cv.width,cv.height);ok()};im.onerror=function(){no(new Error((m||CDR.m)=='svg'?'SVG error':'HTML error'))};im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(src)})}
/* ---- preview run / loop ---- */
function cdrStop(){if(CDR.raf){cancelAnimationFrame(CDR.raf);CDR.raf=0}cdrAudStop()}
function cdrRun(){var cv=$('#cdrcv');if(!cv)return;cdrStop();CDR.crash=0;if(CDR.inst){cdrFree(CDR.inst.free);CDR.inst=null}var rid=++CDR.rid,d=cdrDims(),k=Math.min(1,(innerWidth>=900?900:640)/Math.max(d.W,d.H));cv.width=Math.max(2,Math.round(d.W*k));cv.height=Math.max(2,Math.round(d.H*k));CDR.err=null;CDR.ok=0;CDR.logs=[];CDR.notes=[];cdrGutter();cdrLogUi();cdrPlUi();cdrSave();P('cdrrun',1);
 var done=function(){if(rid===CDR.rid)P('cdrrun',0)};
 if(CDR.m!='js'){cdrPaintStatic(cv,d.W,d.H).then(function(){done();if(rid===CDR.rid){CDR.ok=1;cdrLogUi()}},function(e){done();if(rid===CDR.rid)cdrErr(e)});return}
 cdrBuild(CDR.code,d.W,d.H,cv,k,CDR.dur,CDR.fps).then(function(inst){if(rid!==CDR.rid){cdrFree(inst.free);return}CDR.inst=inst;var vid=CDR.type=='vid';if(!inst.api.draw&&vid)CDR.notes.push(t('cdr_nodraw'));if(vid&&CDR.t>=inst.dur)CDR.t=0;try{cdrFrame(inst,CDR.t)}catch(e){done();cdrErr(e);return}done();CDR.ok=1;cdrLogUi();cdrPlUi();if(vid&&CDR.playing)cdrLoop()},function(e){done();if(rid===CDR.rid)cdrErr(e)})}
function cdrLoop(){cdrStop();var inst=CDR.inst;if(!inst||CDR.type!='vid'||!CDR.playing)return;var t0=performance.now()-CDR.t*1000;cdrAudStart(CDR.t);
 (function f(now){if(CDR.inst!==inst||!$('#cdrcv')){CDR.raf=0;cdrAudStop();return}var tm=(now-t0)/1000;if(tm>=inst.dur){t0=now;tm=0;cdrAudStart(0)}CDR.t=tm;try{cdrFrame(inst,tm)}catch(e){cdrErr(e);return}cdrPlUi();cdrMeter();CDR.raf=requestAnimationFrame(f)})(performance.now())}
function cdrScrub(v){var inst=CDR.inst;if(!inst){CDR.t=v/1000*CDR.dur;CDR.playing=false;cdrPlUi(true);return}CDR.t=v/1000*inst.dur;CDR.playing=false;cdrStop();try{cdrFrame(inst,CDR.t)}catch(e){cdrErr(e)}cdrPlUi(true)}
function cdrErr(e){cdrStop();CDR.playing=false;var m=String((e&&e.message)||e),ln=0,st=e&&e.stack?String(e.stack).split('\n'):[],i,all;for(i=0;i<st.length;i++){if(st[i].indexOf('eval at cdrBuild')>=0){all=st[i].match(/<anonymous>:\d+:\d+/g);if(all&&all.length){ln=+/:(\d+):/.exec(all[all.length-1])[1]-2;break}}}
 CDR.ok=0;CDR.err={msg:m,line:ln>0?ln:0};cdrLogUi();cdrGutter();cdrPlUi()}
function cdrLogSoon(){if(CDR._ls)return;CDR._ls=1;requestAnimationFrame(function(){CDR._ls=0;cdrLogUi()})}
function cdrLogUi(){var el=$('#cdrlog');if(!el)return;var h='';if(CDR.crash)h+='<div class="nt">'+esc(t('cdr_crash'))+'</div>';if(CDR.err)h+='<div class="er"><b>'+t('cdr_err')+'</b>'+(CDR.err.line?' \u00b7 '+t('cdr_line')+' '+CDR.err.line:'')+'\n'+esc(CDR.err.msg)+'</div>';if(CDR.ok&&!CDR.err)h+='<div class="ok">\u2713 '+t('cdr_ok')+'</div>';CDR.notes.forEach(function(n){h+='<div class="nt">'+esc(n)+'</div>'});CDR.logs.slice(-30).forEach(function(l){h+='<div class="nt">'+esc(l)+'</div>'});el.innerHTML=h}
function cdrPlUi(sk){var pl=$('#cdrpl');if(!pl)return;var vid=CDR.type=='vid'&&CDR.m=='js',d=cdrDims();pl.classList.toggle('im',!vid);var pb=$('#cdrpb');if(pb)pb.innerHTML=ic(CDR.playing?'stop':'p');var sc=$('#cdrsc');if(sc){if(!sk)sc.value=Math.round(Math.min(1,CDR.t/CDR.dur)*1000);sc.style.setProperty('--p',(sc.value/10)+'%')}var tm=$('#cdrtm');if(tm)tm.textContent=cdrFmt(CDR.t)+' / '+cdrFmt(CDR.dur);var dm=$('#cdrdim');if(dm)dm.textContent=d.W+'\u00d7'+d.H;var sb=$('#cdrsnd');if(sb){var has=!!(vid&&CDR.inst&&CDR.inst.aBuf);if(sb.hidden===has)sb.hidden=!has;var nm=CDR.snd?'cdrvol':'cdrmute';if(sb.getAttribute('data-i')!=nm){sb.setAttribute('data-i',nm);sb.innerHTML=ic(nm)}}var hs=!!(vid&&CDR.inst&&CDR.inst.aBuf),ap=$('#cdrap');if(ap&&ap.hidden===hs)ap.hidden=!hs}
function cdrPvl(){var pv=$('#cdrpv'),r=$('.cdr'),sg=$('#cdrstage'),pb=$('#cdrpvb');if(!pv||!r)return;pv.hidden=CDR.pvl==0;if(sg)sg.classList.toggle('min',CDR.pvl==0);if(pb){var nn=CDR.pvl==0?'cdrmax':'cdrmin';if(pb.getAttribute('data-i')!=nn){pb.setAttribute('data-i',nn);pb.innerHTML=ic(nn)}}r.style.setProperty('--cdrph',[0,22,34,50][CDR.pvl]+'vh')}
/* ---- syntax colours + line numbers ---- */
function cdrHl(src,m){var out='',i0=0,mm,g,re,cls;
 if(m=='js'){re=/(\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$))|("(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?|`(?:\\.|[^`\\])*`?)|(\b\d+(?:\.\d+)?\b)|(\b(?:function|var|let|const|return|if|else|for|while|do|break|continue|new|this|true|false|null|undefined|async|await|of|in|switch|case|default|try|catch|throw|typeof|class|void)\b)|(\b(?:three|babylon|synth|inst|patch|arp|beat|scale|chordOf|noteFreq|defSfx|sfxNames|makeSound|sndGroup|audioFx|ASSET|bg|rect|circle|line|poly|star|text|wrap|grad|img|loadImage|font|quran|lerp|clamp|map|rnd|noise|ease|seg|hsl|mix|log|sleep|setup|draw)\b)/g;cls=['','c','s','n','k','f']}
 else{re=/(<!--[\s\S]*?(?:-->|$))|(<\/?[A-Za-z][\w:-]*)|(\s[\w:.-]+(?==))|(=\s*"[^"]*"?|=\s*'[^']*'?)|(\/?>)/g;cls=['','c','k','f','s','k']}
 while((mm=re.exec(src))){if(mm[0]===''){re.lastIndex++;continue}out+=esc(src.slice(i0,mm.index));g=mm[1]!==undefined?1:mm[2]!==undefined?2:mm[3]!==undefined?3:mm[4]!==undefined?4:5;out+='<i class="'+cls[g]+'">'+esc(mm[0])+'</i>';i0=mm.index+mm[0].length}
 return out+esc(src.slice(i0))}
function cdrHlUp(){var ta=$('#cdrta'),pre=$('#cdrhl');if(!ta||!pre)return;pre.innerHTML=cdrHl(ta.value,CDR.m)+'\n';pre.scrollTop=ta.scrollTop;pre.scrollLeft=ta.scrollLeft}
function cdrHlSoon(){if(CDR._hs)return;CDR._hs=1;requestAnimationFrame(function(){CDR._hs=0;cdrHlUp()})}
function cdrGutter(){var g=$('#cdrgti'),ta=$('#cdrta');if(!g||!ta)return;var n=ta.value.split('\n').length,h='',i;for(i=1;i<=n;i++)h+='<div'+(CDR.err&&CDR.err.line==i?' class="er"':'')+'>'+i+'</div>';g.innerHTML=h}
/* ---- editor behaviour ---- */
function cdrOnInput(){var ta=$('#cdrta');if(!ta)return;CDR.code=ta.value;cdrHlSoon();cdrGutter();clearTimeout(CDR._ht);CDR._ht=setTimeout(function(){cdrPush();cdrSave()},450);if(CDR.live){clearTimeout(CDR._lt);CDR._lt=setTimeout(cdrRun,1000)}}
function cdrPush(){var ta=$('#cdrta');if(!ta)return;var v=ta.value,h=CDR.hist;if(h[CDR.hi]&&h[CDR.hi].v===v)return;h.splice(CDR.hi+1);h.push({v:v,s:ta.selectionStart,e:ta.selectionEnd});if(h.length>300)h.shift();CDR.hi=h.length-1}
function cdrUndo(d){var ta=$('#cdrta');if(!ta)return;clearTimeout(CDR._ht);cdrPush();var j=CDR.hi+d;if(j<0||j>=CDR.hist.length)return;CDR.hi=j;var x=CDR.hist[j];ta.value=x.v;ta.selectionStart=x.s;ta.selectionEnd=x.e;CDR.code=x.v;cdrHlUp();cdrGutter();cdrSave()}
function cdrEnter(){var ta=$('#cdrta'),v=ta.value,s=ta.selectionStart,e=ta.selectionEnd,ls=v.lastIndexOf('\n',s-1)+1,line=v.slice(ls,s),ind=/^[ \t]*/.exec(line)[0],ins='\n'+ind,caret;
 if(/[{(\[]$/.test(line.replace(/\s+$/,''))){ins+='  ';caret=s+ins.length;if(/[})\]]/.test(v.charAt(e)))ins+='\n'+ind}else caret=s+ins.length;
 ta.setRangeText(ins,s,e,'end');ta.selectionStart=ta.selectionEnd=caret;cdrOnInput()}
function cdrIndent(d){var ta=$('#cdrta'),v=ta.value,s=ta.selectionStart,e=ta.selectionEnd;if(s==e&&d>0){ta.setRangeText('  ',s,e,'end');cdrOnInput();return}
 var ls=v.lastIndexOf('\n',s-1)+1,le=v.indexOf('\n',e);if(le<0)le=v.length;var nb=v.slice(ls,le).split('\n').map(function(l){return d>0?'  '+l:l.replace(/^ {1,2}|^\t/,'')}).join('\n');ta.setRangeText(nb,ls,le,'preserve');ta.selectionStart=ls;ta.selectionEnd=ls+nb.length;cdrOnInput()}
function cdrInsert(txt,back,nof){var ta=$('#cdrta');if(!ta)return;var s=ta.selectionStart,e=ta.selectionEnd,sel=ta.value.slice(s,e);if(back&&sel){ta.setRangeText(txt.charAt(0)+sel+txt.slice(1),s,e,'end')}else{ta.setRangeText(txt,s,e,'end');if(back)ta.selectionStart=ta.selectionEnd=ta.selectionStart-back}if(!nof)ta.focus();cdrOnInput()}
function cdrKb(){var b=$('#cdrsym'),dk=$('#cdrdock'),vv=window.visualViewport;if(!vv)return;var kb=Math.max(0,window.innerHeight-vv.height-vv.offsetTop),dh=(dk&&!dk.hidden)?dk.offsetHeight:0;if(dk)dk.style.bottom=kb+'px';if(b)b.style.bottom=(kb+dh)+'px'}
function cdrSymShow(on){var b=$('#cdrsym');if(!b)return;b.hidden=!on;if(on)cdrKb()}
function cdrBindEd(){var ta=$('#cdrta'),pre=$('#cdrhl'),gt=$('#cdrgti');if(!ta)return;ta.value=CDR.code;CDR.hist=[{v:CDR.code,s:0,e:0}];CDR.hi=0;cdrHlUp();cdrGutter();
 ta.addEventListener('scroll',function(){pre.scrollTop=ta.scrollTop;pre.scrollLeft=ta.scrollLeft;gt.style.transform='translateY('+(-ta.scrollTop)+'px)'});
 ta.addEventListener('input',cdrOnInput);
 ta.addEventListener('beforeinput',function(e){if(e.inputType=='insertLineBreak'||e.inputType=='insertParagraph'){e.preventDefault();cdrEnter()}});
 ta.addEventListener('keydown',function(e){var mod=e.ctrlKey||e.metaKey;if(e.key=='Tab'){e.preventDefault();cdrIndent(e.shiftKey?-1:1)}else if(mod&&e.key=='Enter'){e.preventDefault();cdrRun()}else if(mod&&(e.key=='z'||e.key=='Z')){e.preventDefault();cdrUndo(e.shiftKey?1:-1)}else if(mod&&e.key=='y'){e.preventDefault();cdrUndo(1)}});
 ta.addEventListener('focus',function(){cdrSymShow(1)});ta.addEventListener('blur',function(){setTimeout(function(){if(D.activeElement!==ta)cdrSymShow(0)},150)})}
/* ---- screens ---- */
function cdrCh(n,list,cur){return list.map(function(x){return'<button type="button" class="cdrch'+(String(x[0])==String(cur)?' on':'')+'" data-cdr="set:'+n+':'+x[0]+'">'+x[1]+'</button>'}).join('')}
function cdrTabsUi(){var el=$('#cdrtabs');if(!el)return;el.innerHTML=[['code','cdr_code','code'],['prj','cdr_prj','cdrfold'],['help','cdr_help','cdrhelp'],['use','cdr_use','bulb']].map(function(x){return'<button type="button" class="'+(CDR.tab==x[0]?'on':'')+'" data-cdr="tab:'+x[0]+'">'+ic(x[2])+'<span>'+t(x[1])+'</span></button>'}).join('');var sb=$('#cdrsetb');if(sb)sb.classList.toggle('on',CDR.tab=='set');var dk=$('#cdrdock');if(dk){dk.hidden=CDR.tab!='code';cdrKb()}cdrPvl()}
function cdrCodeHtml(){return'<div class="cdrbar"><div class="cdrchs">'+cdrCh('mode',[['js','Canvas JS'],['svg','SVG'],['html','HTML']],CDR.m)+'</div><div class="cdrbt"></div></div><div class="cdrpn" id="cdrtp" hidden></div><div class="cdred" id="cdred" style="font-size:'+CDR.fs+'px"><div class="cdrgt"><div id="cdrgti"></div></div><div class="cdrcw"><pre class="cdrhl" id="cdrhl" aria-hidden="true"></pre><textarea id="cdrta" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" wrap="off"></textarea></div></div><div class="cdrlog" id="cdrlog"></div>'}
function cdrSetHtml(){var vid=CDR.m=='js',h='<div class="cdrs">';
 h+=cdrLb('cdr_out','video')+'<div class="cdrchs">'+cdrCh('type',[['img',t('cdr_img')],['vid',t('cdr_vid')]],CDR.type)+'</div>';
 h+=cdrLb('cdr_ratio','expd')+'<div class="cdrchs">'+cdrCh('ratio',Object.keys(CDRR).map(function(k){return[k,k]}),CDR.ratio)+'</div>';
 h+=cdrLb('cdr_size','expd')+'<div class="cdrchs">'+cdrCh('ss',[[540,'540'],[720,'720'],[1080,'1080'],[1440,'1440'],[2160,'2160']],CDR.ss)+'</div>';
 if(CDR.type=='vid'&&vid){h+=cdrLb('cdr_dur','hourglass')+'<div class="cdrstep"><button type="button" data-cdr="step:dur:-1">-</button><input type="number" id="cdrdur" class="cdrnum" inputmode="decimal" min="0.5" max="600" step="0.5" value="'+CDR.dur+'"><button type="button" data-cdr="step:dur:1">+</button></div><label>'+t('cdr_fps')+'</label><div class="cdrchs">'+cdrCh('fps',[[24,'24'],[30,'30'],[60,'60']],CDR.fps)+'</div>'}
 h+=cdrLb('cdr_live','sparkle')+'<div class="cdrchs">'+cdrCh('live',[[1,t('cdr_on')],[0,t('cdr_off')]],CDR.live)+'</div>';
 h+=cdrLb('cdr_fs','code')+'<div class="cdrstep"><button type="button" data-cdr="step:fs:-1">-</button><b>'+CDR.fs+'px</b><button type="button" data-cdr="step:fs:1">+</button></div>';
 h+=cdrFontsSet();
 if(CDR.m=='html')h+='<p class="mu">'+t('cdr_html_n')+'</p>';
 return h+'</div>'}
function cdrPrjHtml(){var L=S('cdrp',[]);return'<div class="cdrs"><label>'+t('cdr_pname')+'</label><div class="cdrrow"><input id="cdrpnm" type="text" value="'+esc(CDR.pname||'')+'" style="flex:1;min-width:0"><button type="button" class="btn" data-cdr="psave">'+ic('chk')+t('cdr_save')+'</button></div>'+(L.length?L.map(function(p,i){return'<div class="cdrli"><b>'+esc(p.name||'-')+'<small>'+esc(p.m)+' \u00b7 '+new Date(p.ts).toLocaleDateString()+'</small></b><button type="button" class="btn sm" data-cdr="popen:'+i+'">'+t('cdr_open')+'</button><button type="button" class="cdrib" data-cdr="pdel:'+i+'" aria-label="'+t('cdr_del')+'">'+ic('x')+'</button></div>'}).join(''):'<p class="mu">'+t('cdr_nop')+'</p>')+'<div class="cdrrow"><button type="button" class="btn" data-cdr="psavef">'+ic('dl')+t('cdr_savef')+'</button><label class="btn" style="cursor:pointer">'+t('cdr_file')+'<input type="file" id="cdrfile" accept=".js,.svg,.html,.htm,.txt" hidden></label></div></div>'}
function cdrHelpHtml(){var h='<div class="cdrs"><p class="mu">'+t('cdr_intro')+'</p><div class="cdrrow"><button type="button" class="btn wide" data-cdr="aip">'+ic('y')+t('cdr_ai')+'</button></div><p class="mu">'+t('cdr_ai_d')+'</p>';CDRDOC.forEach(function(s,i){h+='<div class="cdrdi"><code>'+esc(s)+'</code><span>'+t('cdr_h'+i)+'</span></div>'});return h+'</div>'}
function cdrBody(){var el=$('#cdrbody');if(!el)return;if(CDR.tab=='code'){el.innerHTML=cdrCodeHtml();cdrBindEd();cdrLogUi();cdrGutter()}else if(CDR.tab=='set')el.innerHTML=cdrSetHtml();else if(CDR.tab=='prj')el.innerHTML=cdrPrjHtml();else if(CDR.tab=='use')el.innerHTML=cdrUseHtml();else el.innerHTML=cdrHelpHtml()}
function cdrTplHtml(){return CDRTPL.map(function(x,i){return'<div class="cdrli"><b>'+t(x.k)+'<small>'+x.m+(x.ty=='vid'?' \u00b7 '+t('cdr_vid'):'')+'</small></b><button type="button" class="btn sm" data-cdr="tp:'+i+'">'+t('cdr_open')+'</button></div>'}).join('')}
function cdrSetMode(m,code){CDR.codes[CDR.m]=CDR.code;CDR.m=m;if(m!='js'&&CDR.type=='vid')CDR.type='img';CDR.code=code!=null?code:(CDR.codes[m]||cdrTplDef(m).code);CDR.codes[m]=CDR.code;CDR.err=null;cdrSave()}
function cdrApply(){cdrSave();CDR.t=0;clearTimeout(CDR._rt);CDR._rt=setTimeout(cdrRun,120)}
function cdrClick(e){if(e.target&&e.target.id=='cdrmd'){cdrMdClose();return}var b=e.target.closest?e.target.closest('[data-cdr]'):null;if(!b)return;var a=b.getAttribute('data-cdr').split(':'),k=a[0],ta=$('#cdrta');
 if(k=='run'){cdrRun()}
 else if(k=='exp'){cdrMdOpen()}
 else if(k=='mdc'){cdrMdClose()}
 else if(k=='play'){if(CDR.type!='vid'||CDR.m!='js')return;if(!CDR.inst){CDR.playing=true;cdrRun();return}CDR.playing=!CDR.playing;cdrPlUi();if(CDR.playing)cdrLoop();else cdrStop()}
 else if(k=='snd'){CDR.snd=CDR.snd?0:1;cdrPlUi();if(CDR.snd&&CDR.playing)cdrAudStart(CDR.t);else cdrAudStop()}
 else if(k=='rst'){if(CDR.inst)cdrScrub(0)}
 else if(k=='snap'){var cv9=$('#cdrcv');if(cv9)cv9.toBlob(function(b9){if(b9)stSave(b9,(CDR.pname||'huda-coder')+'.png','Huda Coder')})}
 else if(k=='bgt'){CDR.pbg=((CDR.pbg||0)+1)%3;var pv9=$('#cdrpv');if(pv9)pv9.setAttribute('data-bg',CDR.pbg)}
 else if(k=='cp'){var tx9=a.slice(1).join(':');try{navigator.clipboard.writeText(tx9).then(function(){toast(t('copied'))})}catch(x9){}}
 else if(k=='sn'){var sn=CDRSNIP[+a[1]];if(sn){var cc=CDR.code||'',pp=CDR.cpos==null?cc.length:Math.min(CDR.cpos,cc.length);CDR.code=cc.slice(0,pp)+sn.code+cc.slice(pp);CDR.cpos=pp+sn.code.length;CDR.codes[CDR.m]=CDR.code;CDR.tab='code';cdrTabsUi();cdrBody();var t3=$('#cdrta');if(t3){t3.setSelectionRange(CDR.cpos,CDR.cpos);cdrOnInput()}toast(t('cdr_inserted'))}}
 else if(k=='gfadd'){var gi=$('#cdrgf');if(gi&&gi.value.trim())cdrGfAdd(gi.value.trim())}
 else if(k=='gfq'){cdrGfAdd(a.slice(1).join(':'))}
 else if(k=='gfdel'){var gn=a.slice(1).join(':');CDR.gfl=(CDR.gfl||[]).filter(function(x){return x!=gn});cdrSave();cdrBody()}
 else if(k=='pvl'){CDR.pvl=(CDR.pvl+1)%4;cdrPvl();cdrSave()}
 else if(k=='tab'){if(ta){CDR.code=ta.value;CDR.cpos=ta.selectionStart}CDR.tab=(a[1]=='set'&&CDR.tab=='set')?'code':a[1];cdrTabsUi();cdrBody()}
 else if(k=='mode'){if(ta)CDR.code=ta.value;if(a[1]==CDR.m)return;cdrSetMode(a[1]);cdrBody();cdrRun()}
 else if(k=='undo')cdrUndo(-1);else if(k=='redo')cdrUndo(1)
 else if(k=='tpl'){var tp=$('#cdrtp');if(tp){tp.hidden=!tp.hidden;if(!tp.hidden)tp.innerHTML=cdrTplHtml()}}
 else if(k=='tp'){var x=CDRTPL[+a[1]];stConfirm(t('cdr_tpl_ov'),function(){if(x.m!=CDR.m)cdrSetMode(x.m,x.code);else{CDR.code=x.code;CDR.codes[x.m]=x.code}if(x.m=='js')CDR.type=x.ty;CDR.t=0;CDR.playing=true;cdrSave();cdrBody();cdrRun()})}
 else if(k=='sym'){var sy=CDRSYM[+a[1]];cdrInsert(sy[1],sy[2]||0)}
 else if(k=='ind')cdrIndent(1);else if(k=='outd')cdrIndent(-1)
 else if(k=='copy'){var cv0=ta?ta.value:CDR.code;try{navigator.clipboard.writeText(cv0).then(function(){toast(t('copied'))})}catch(x2){}}
 else if(k=='paste'){try{navigator.clipboard.readText().then(function(tx){if(ta&&tx)cdrInsert(tx,0,1)})}catch(x3){}}
 else if(k=='clear'){stConfirm(t('cdr_tpl_ov'),function(){CDR.code='';var t2=$('#cdrta');if(t2){t2.value='';cdrOnInput();cdrPush()}})}
 else if(k=='set'){var nm=a[1],vv=a.slice(2).join(':');if(nm=='type'&&vv=='vid'&&CDR.m!='js'){toast(t('cdr_vonly'));return}CDR[nm]=(/^\d+$/.test(vv)?+vv:vv);if(nm=='fmt'){cdrSave();cdrJobUi();return}cdrApply();cdrBody();cdrJobUi()}
 else if(k=='step'){var nm2=a[1],dd=+a[2];if(nm2=='dur')CDR.dur=Math.min(600,Math.max(.5,Math.round((CDR.dur+dd)*10)/10));else if(nm2=='fs')CDR.fs=Math.min(22,Math.max(10,CDR.fs+dd));cdrApply();cdrBody()}
 else if(k=='make')cdrMake()
 else if(k=='cancel'){CDR.cancel=1;cdrMdClose()}
 else if(k=='jnew'){var J=CDR.job;if(J&&J.out){try{URL.revokeObjectURL(J.out.url)}catch(x5){}}CDR.job=null;cdrJobUi()}
 else if(k=='odl'){if(CDR.job&&CDR.job.out)stSave(CDR.job.out.blob,CDR.job.out.name)}
 else if(k=='osh'){var o=CDR.job&&CDR.job.out;if(!o)return;var f=new File([o.blob],o.name,{type:o.blob.type});if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],title:'Huda Coder'}).catch(function(){});else stSave(o.blob,o.name)}
 else if(k=='fdel'){var fn0=a[1];cdrFontDel(fn0).then(function(){CDR.cfl=(CDR.cfl||[]).filter(function(r){return r.name!=fn0});try{if(CDR.cface&&CDR.cface[fn0])document.fonts.delete(CDR.cface[fn0])}catch(x6){}delete CDR.cf[fn0];cdrBody()})}
 else if(k=='adel'){var an0=a.slice(1).join(':');cdrAssDel(an0).then(function(){if(CDRASU[an0]){try{URL.revokeObjectURL(CDRASU[an0])}catch(x7){}delete CDRASU[an0]}CDR.asl=(CDR.asl||[]).filter(function(r){return r.name!=an0});cdrBody()})}
 else if(k=='wav'){if(CDR.inst&&CDR.inst.aBuf){try{stSave(cdrWav(CDR.inst.aBuf),(CDR.pname||'huda-coder')+'.wav','Huda Coder')}catch(x8){toast(t('cdr_a_err'))}}}
 else if(k=='psave'){var inp=$('#cdrpnm'),nm3=(inp&&inp.value.trim())||('Project '+new Date().toLocaleTimeString()),L=S('cdrp',[]),id=CDR.pid||('p'+Date.now()),it={id:id,name:nm3,m:CDR.m,code:CDR.code,ts:Date.now(),cfg:{type:CDR.type,ratio:CDR.ratio,ss:CDR.ss,dur:CDR.dur,fps:CDR.fps}},ix=-1;L.forEach(function(p,i){if(p.id==id)ix=i});if(ix>=0)L[ix]=it;else L.unshift(it);if(L.length>50)L.length=50;P('cdrp',L);CDR.pid=id;CDR.pname=nm3;cdrSave();toast(t('cdr_saved'));cdrBody()}
 else if(k=='popen'){var p2=S('cdrp',[])[+a[1]];if(!p2)return;CDR.codes[CDR.m]=CDR.code;CDR.m=p2.m;CDR.code=p2.code;CDR.codes[p2.m]=p2.code;CDR.pid=p2.id;CDR.pname=p2.name;if(p2.cfg)Object.keys(p2.cfg).forEach(function(q){CDR[q]=p2.cfg[q]});CDR.tab='code';CDR.t=0;CDR.playing=true;cdrSave();cdrTabsUi();cdrBody();cdrRun()}
 else if(k=='pdel'){stConfirm(t('cdr_del')+'?',function(){var L2=S('cdrp',[]);var d2=L2.splice(+a[1],1)[0];P('cdrp',L2);if(d2&&d2.id==CDR.pid){CDR.pid='';CDR.pname=''}cdrBody()})}
 else if(k=='psavef'){var ex=CDR.m=='js'?'js':CDR.m,bl=new Blob([CDR.code],{type:'text/plain'});stSave(bl,(CDR.pname||'huda-coder')+'.'+ex)}
 else if(k=='aip'){try{navigator.clipboard.writeText(cdrAiPrompt()).then(function(){toast(t('copied'))})}catch(x4){}}}
function cdrChange(e){var x=e.target;if(!x)return;if(x.id=='cdrfile'&&x.files&&x.files[0]){var f=x.files[0],nm=f.name.toLowerCase();f.text().then(function(tx){var m=/\.svg$/.test(nm)?'svg':/\.html?$/.test(nm)?'html':'js';cdrSetMode(m,tx);CDR.pname=f.name.replace(/\.[^.]+$/,'');CDR.tab='code';cdrSave();cdrTabsUi();cdrBody();cdrRun()});x.value=''}
 else if(x.id=='cdrffile'&&x.files&&x.files[0]){var nmI=$('#cdrfname');cdrFontAdd(x.files[0],nmI&&nmI.value.trim());x.value=''}
 else if((x.id=='cdrafm'||x.id=='cdrafi'||x.id=='cdrafa')&&x.files&&x.files[0]){cdrAssetAdd(x.files[0],x.id=='cdrafm'?'model':x.id=='cdrafi'?'image':'audio');x.value=''}
 else if(x.id=='cdrdur'){var v=parseFloat(x.value);if(!(v>0))v=CDR.dur;CDR.dur=Math.min(600,Math.max(.5,v));x.value=CDR.dur;cdrApply()}}
function cdrAiPrompt(){var d=cdrDims(),h=[],i;for(i=0;i<CDRDOC.length;i++)h.push('- '+CDRDOC[i]+' : '+((I.en&&I.en['cdr_h'+i])||''));
 return'You are writing code for "Huda Coder", a Canvas 2D / WebGL image, video and audio generator that runs in the browser.\nReturn ONLY JavaScript code (no markdown fences, no explanations).\n\nRules:\n- Canvas size is W x H (currently '+d.W+' x '+d.H+'). Use relative units such as W*0.1 so any size works.\n- Optional async function setup() runs once (load fonts, images, data, create particles / 3D scenes here). function draw(t, p, f) runs every frame: t = seconds, p = progress 0..1, f = frame number. For a still image, one draw is enough.\n- Optional function audio() runs once and schedules sound with tone(), synth(), hiss(), note(), melody(), chord(), drone(), arp(), beat(), sfx(), defSfx(), makeSound(), audioFx(); use audioAt(t) inside draw() to react to the sound.\n- For 3D use: var S = await three({shadows:true}) (or babylon) inside async setup(), then S.camera/light/mesh/ground/model/particles and S.render(t) inside draw() (WebGL 2 only; all objects use the same API in both engines).\n- Video length is DUR seconds at FPS frames per second (currently '+CDR.dur+' s, '+CDR.fps+' fps).\n- Everything must be deterministic: use rnd() and noise() instead of Math.random(), and compute everything from t (no accumulated state).\n- No DOM access, no imports, no external libraries.\n- Arabic text: use font: FONT.ar and rtl: true (or textAnim with fx: "wipe").\n\nAvailable helpers:\n'+h.join('\n')+'\n\nMy idea:\n'}
/* ---- export popup + background job ---- */
/* ---- export ---- */
function cdrName(ext){return'huda-coder-'+stTs()+'.'+ext}
function cdrProg(p){var J=CDR.job;if(!J)return;J.p=Math.min(1,Math.max(0,p));var pc=Math.round(J.p*100),i=$('#cdrpi'),x=$('#cdrpt'),f=$('#cdrjf'),jt=$('#cdrjt');if(i)i.style.width=pc+'%';if(x)x.textContent=t('cdr_busy')+' '+pc+'%';if(f)f.style.width=pc+'%';if(jt)jt.textContent=t('cdr_busy')+' '+pc+'%'}
function cdrMake(){var J0=CDR.job;if(J0&&J0.st=='run')return;if(CDR.type=='vid'&&CDR.m!='js'){toast(t('cdr_vonly'));return}var ta=$('#cdrta');if(ta)CDR.code=ta.value;var d=cdrDims(),cfg={code:CDR.code,m:CDR.m,type:CDR.type=='vid'&&CDR.m=='js'?'vid':'img',fmt:CDR.fmt,W:d.W,H:d.H,dur:CDR.dur,fps:CDR.fps,t:CDR.t};
 if(J0&&J0.out){try{URL.revokeObjectURL(J0.out.url)}catch(e){}}CDR.cancel=0;var job=CDR.job={st:'run',p:0,cfg:cfg,out:null,err:''};cdrJobUi();
 (cfg.type=='vid'?cdrMakeVid(cfg):cdrMakeImg(cfg)).then(function(r){if(CDR.job!==job)return;if(!r){CDR.job=null;cdrJobUi();return}job.st='done';job.p=1;job.out=r;try{stSave(r.blob,r.name,'Huda Coder')}catch(x5){}cdrMdClose();cdrJobUi();setTimeout(function(){if(CDR.job===job){CDR.job=null;try{URL.revokeObjectURL(r.url)}catch(x6){}cdrJobUi()}},4500)},function(e){if(CDR.job!==job)return;job.st='err';job.err=String((e&&e.message)||e);cdrJobUi();cdrMdOpen()})}
function cdrMakeImg(J){var cv=D.createElement('canvas');cv.width=J.W;cv.height=J.H;var fm=J.fmt;if(fm=='svg'&&J.m!='svg')fm='png';
 if(fm=='svg'){var sb=new Blob([cdrStaticSrc(J.W,J.H,J.code,J.m)],{type:'image/svg+xml'});return Promise.resolve({blob:sb,url:URL.createObjectURL(sb),name:cdrName('svg'),vid:0})}
 var inst=null,pr=J.m=='js'?cdrBuild(J.code,J.W,J.H,cv,1,J.dur,J.fps).then(function(i){inst=i;cdrFrame(i,J.type=='vid'?0:J.t)}):cdrPaintStatic(cv,J.W,J.H,J.code,J.m);
 return pr.then(function(){if(inst)cdrFree(inst.free);var cv2=cv;if(fm=='jpg'){cv2=D.createElement('canvas');cv2.width=J.W;cv2.height=J.H;var c2=cv2.getContext('2d');c2.fillStyle='#000';c2.fillRect(0,0,J.W,J.H);c2.drawImage(cv,0,0)}var mt=fm=='jpg'?'image/jpeg':fm=='webp'?'image/webp':'image/png';return new Promise(function(ok,no){cv2.toBlob(function(b){if(!b){no(new Error(t('st_err')));return}ok({blob:b,url:URL.createObjectURL(b),name:cdrName(fm),vid:0})},mt,.95)})},function(e){if(inst)cdrFree(inst.free);throw e})}
async function cdrMakeVid(J){var fps=J.fps,dur=J.dur,N=Math.max(1,Math.ceil(dur*fps)),cv=D.createElement('canvas');cv.width=J.W;cv.height=J.H;var wl=null,inst=null;try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(l){wl=l}).catch(function(){})}catch(e){}
 try{inst=await cdrBuild(J.code,J.W,J.H,cv,1,dur,fps);if(CDR.cancel)return null;var ab=inst.aBuf||null,wc=await stWcRec(J.W,J.H,!!ab,ab,[],[0],dur,fps);return wc?await cdrVidWc(inst,cv,wc,N,fps):await cdrVidMr(inst,cv,dur,fps,ab)}
 finally{try{if(wl)wl.release()}catch(e){}if(inst)cdrFree(inst.free);cv.width=cv.height=1}}
async function cdrVidWc(inst,cv,wc,N,fps){var tick=function(ms){return new Promise(function(r){setTimeout(r,ms)})},fin=new Promise(function(ok){wc.onstop=ok});if(wc.start)wc.start();
 for(var k=0;k<N;k++){if(CDR.cancel){try{wc.stop()}catch(e){}return null}cdrFrame(inst,k/fps);while(wc.q()>6)await tick(8);wc.pushAt(cv,k);if(k%3==0){cdrProg(k/N);await tick(0)}}
 wc.stop();await fin;if(!wc.blob)throw new Error(t('st_err'));var b=wc.blob;return{blob:b,url:URL.createObjectURL(b),name:cdrName('mp4'),vid:1}}
function cdrVidMr(inst,cv,dur,fps,ab){return new Promise(function(ok,no){if(!(window.MediaRecorder&&cv.captureStream)){no(new Error(t('st_nov')));return}
 var mimes=['video/mp4;codecs=avc1.42E01E','video/mp4','video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'],mime=mimes.filter(function(m){return MediaRecorder.isTypeSupported(m)})[0]||'',stm=stCap(cv,fps),opt={videoBitsPerSecond:cv.width*cv.height>1e6?5e6:3.5e6},ac=null,asrc=null;if(mime)opt.mimeType=mime;
 if(ab){try{var AC=window.AudioContext||window.webkitAudioContext;ac=new AC();var dst=ac.createMediaStreamDestination();asrc=ac.createBufferSource();asrc.buffer=ab;asrc.connect(dst);dst.stream.getAudioTracks().forEach(function(tr){stm.addTrack(tr)})}catch(e){ac=null}}
 var chunks=[],rec=new MediaRecorder(stm,opt),T0=0,rT0=performance.now();
 rec.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data)};
 rec.onstop=function(){try{stm.getTracks().forEach(function(k){k.stop()})}catch(e){}try{if(ac)ac.close()}catch(e){}if(CDR.cancel){ok(null);return}var ty=(rec.mimeType||mime||'video/webm').split(';')[0];stFixDur(new Blob(chunks,{type:ty}),(performance.now()-rT0)/1000,ty).then(function(b){ok({blob:b,url:URL.createObjectURL(b),name:cdrName(ty.indexOf('mp4')>=0?'mp4':'webm'),vid:1})})};
 rec.start(500);T0=performance.now();if(asrc){try{asrc.start(0)}catch(e){}}
 (function f(){if(CDR.cancel){try{rec.stop()}catch(e){}return}var tm=(performance.now()-T0)/1000;if(tm>=dur){cdrProg(1);setTimeout(function(){try{rec.stop()}catch(e){}},300);return}try{cdrFrame(inst,tm)}catch(e){try{rec.stop()}catch(x){}no(e);return}if(stm._rf){try{stm._rf.requestFrame()}catch(x){}}cdrProg(tm/dur);requestAnimationFrame(f)})()})}
/* ===== Huda Coder v3: open-source 3D (three.js + Babylon.js, WebGL 2 only), procedural audio engine v2, assets ===== */
var CDRLIBU={
 three:[
  ['https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js','https://fastly.jsdelivr.net/npm/three@0.147.0/build/three.min.js','https://unpkg.com/three@0.147.0/build/three.min.js'],
  ['https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/loaders/GLTFLoader.js','https://fastly.jsdelivr.net/npm/three@0.147.0/examples/js/loaders/GLTFLoader.js','https://unpkg.com/three@0.147.0/examples/js/loaders/GLTFLoader.js']],
 babylon:[
  ['https://cdn.jsdelivr.net/npm/babylonjs@6.49.0/babylon.js','https://fastly.jsdelivr.net/npm/babylonjs@6.49.0/babylon.js','https://unpkg.com/babylonjs@6.49.0/babylon.js'],
  ['https://cdn.jsdelivr.net/npm/babylonjs-loaders@6.49.0/babylonjs.loaders.min.js','https://fastly.jsdelivr.net/npm/babylonjs-loaders@6.49.0/babylonjs.loaders.min.js','https://unpkg.com/babylonjs-loaders@6.49.0/babylonjs.loaders.min.js']]};
var CDRLIBP={};
function cdrScript(urls){return new Promise(function(ok,no){var i=0;(function nx(){if(i>=urls.length){no(new Error(t('cdr_lib_err')));return}var s=D.createElement('script');s.src=urls[i++];s.async=true;s.onload=function(){ok()};s.onerror=function(){try{s.remove()}catch(e){}nx()};D.head.appendChild(s)})()})}
function cdrLib(k){if(CDRLIBP[k])return CDRLIBP[k];var seq=Promise.resolve();CDRLIBU[k].forEach(function(u){seq=seq.then(function(){return cdrScript(u)})});CDRLIBP[k]=seq.catch(function(e){delete CDRLIBP[k];throw e});return CDRLIBP[k]}
function cdrExt(u){var b=String(u).replace(/[?#].*$/,''),m=/\.(glb|gltf)$/i.exec(b)||/\.(glb|gltf)$/i.exec(String(u));return m?'.'+m[1].toLowerCase():'.glb'}
/* ---- procedural textures (canvas) ---- */
function cdrTexCv(tx,c2){var n=512,cv=D.createElement('canvas'),g,i,j;cv.width=cv.height=n;g=cv.getContext('2d');var s2=c2||'#000000';
 if(tx=='checker'){g.fillStyle='#ffffff';g.fillRect(0,0,n,n);g.fillStyle=s2;for(i=0;i<8;i++)for(j=0;j<8;j++)if((i+j)&1)g.fillRect(i*64,j*64,64,64)}
 else if(tx=='stripes'){g.fillStyle='#ffffff';g.fillRect(0,0,n,n);g.fillStyle=s2;for(i=0;i<8;i++)g.fillRect(0,i*64+32,n,32)}
 else if(tx=='grid'){g.fillStyle='#ffffff';g.fillRect(0,0,n,n);g.strokeStyle=s2;g.lineWidth=6;g.strokeRect(3,3,n-6,n-6);g.beginPath();for(i=1;i<4;i++){g.moveTo(i*128,0);g.lineTo(i*128,n);g.moveTo(0,i*128);g.lineTo(n,i*128)}g.stroke()}
 else if(tx=='dots'){g.fillStyle='#ffffff';g.fillRect(0,0,n,n);g.fillStyle=s2;for(i=0;i<4;i++)for(j=0;j<4;j++){g.beginPath();g.arc(64+i*128,64+j*128,36,0,Math.PI*2);g.fill()}}
 else if(tx=='gradient'){var gr=g.createLinearGradient(0,0,0,n);gr.addColorStop(0,'#ffffff');gr.addColorStop(1,s2);g.fillStyle=gr;g.fillRect(0,0,n,n)}
 else{var tc=D.createElement('canvas');tc.width=tc.height=64;var tg=tc.getContext('2d'),id=tg.createImageData(64,64),k,h;for(k=0;k<id.data.length;k+=4){h=Math.imul(k+17,2654435761)>>>24;id.data[k]=id.data[k+1]=id.data[k+2]=110+(h>>1);id.data[k+3]=255}tg.putImageData(id,0,0);g.imageSmoothingEnabled=true;g.drawImage(tc,0,0,n,n)}
 return cv}
function cdrDotCv(){var cv=D.createElement('canvas'),g;cv.width=cv.height=64;g=cv.getContext('2d');var r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.45,'rgba(255,255,255,.55)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);return cv}
/* ---- morph targets (same vertex count, shape functions) ---- */
var CDRMORPH={
 cube:function(p){var m=Math.max(Math.abs(p[0]),Math.abs(p[1]),Math.abs(p[2]))||1;return[p[0]/m*.5,p[1]/m*.5,p[2]/m*.5]},
 sphere:function(p){var l=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/l*.5,p[1]/l*.5,p[2]/l*.5]},
 star:function(p){var l=Math.hypot(p[0],p[1],p[2])||1,a=Math.atan2(p[2],p[0]),b=Math.asin(Math.max(-1,Math.min(1,p[1]/l))),s=.5*(.55+.9*Math.pow(Math.abs(Math.cos(a*4)*Math.cos(b*3)),2));return[p[0]/l*s,p[1]/l*s,p[2]/l*s]},
 twist:function(p){var a=p[1]*5,c=Math.cos(a),s=Math.sin(a);return[p[0]*c-p[2]*s,p[1],p[0]*s+p[2]*c]},
 wave:function(p){return[p[0],p[1]+Math.sin(p[0]*14)*.07+Math.cos(p[2]*14)*.07,p[2]]},
 flat:function(p){return[p[0]*1.3,p[1]*.15,p[2]*1.3]},
 noise:function(p){function q(a,b){var h=Math.imul(Math.round(a*997)|0,374761393)^Math.imul(Math.round(b*991)|0,668265263);h=Math.imul(h^(h>>>13),1274126177);return((h>>>0)/4294967296-.5)*.16}return[p[0]+q(p[1],p[2]),p[1]+q(p[2],p[0]),p[2]+q(p[0],p[1])]},
 big:function(p){return[p[0]*1.6,p[1]*1.6,p[2]*1.6]}};
function cdrMorphArr(src,mo){var f=typeof mo=='function'?mo:CDRMORPH[mo];if(!f)throw new Error('morph: '+mo);var out=new Float32Array(src.length),i,r;for(i=0;i<src.length;i+=3){r=f([src[i],src[i+1],src[i+2]],i/3);out[i]=r[0];out[i+1]=r[1];out[i+2]=r[2]}return out}
/* ---- deterministic particle simulation (closed form, depends only on t) ---- */
function cdrPtsStep(E,P,tm){var N=P.count,i,TAU=Math.PI*2,pos=P.pos,col=P.col,c1=P.rgba1,c2=P.rgba2;
 for(i=0;i<N;i++){var ph=E.rnd(i,P.seed,1),u=tm*P.rate/P.life+ph,cy=Math.floor(u),age,f,hide=false;
  if(P.burst>=0){age=tm-P.burst;cy=0;hide=age<0||age>P.life}else age=(u-cy)*P.life;
  if(hide){pos[i*3]=pos[i*3+1]=pos[i*3+2]=1e6;col[i*4+3]=0;continue}
  f=age/P.life;
  var r1=E.rnd(i,cy,P.seed*7+2),r2=E.rnd(i,cy,P.seed*7+3),r3=E.rnd(i,cy,P.seed*7+4),r4=E.rnd(i,cy,P.seed*7+5),th=r1*TAU,zz=r2*2-1,sq=Math.sqrt(Math.max(0,1-zz*zz)),ux=sq*Math.cos(th),uy=zz,uz=sq*Math.sin(th),sx=0,sy=0,sz=0,R=P.radius;
  if(P.shape=='sphere'){var rr=R*Math.cbrt(r3);sx=ux*rr;sy=uy*rr;sz=uz*rr}
  else if(P.shape=='box'){sx=(r1*2-1)*R;sy=(r2*2-1)*R;sz=(r3*2-1)*R}
  else if(P.shape=='ring'){sx=Math.cos(th)*R;sz=Math.sin(th)*R}
  else if(P.shape=='cone'){var cr=R*r3*.4;sx=Math.cos(th)*cr;sz=Math.sin(th)*cr}
  var sp=P.speed*(.6+.8*r4),vx=P.dir[0]*sp+ux*P.spread*sp*.6,vy=P.dir[1]*sp+uy*P.spread*sp*.6,vz=P.dir[2]*sp+uz*P.spread*sp*.6,tb=P.turb;
  pos[i*3]=P.origin[0]+sx+vx*age+(tb?Math.sin(age*3+i)*tb*.1:0);
  pos[i*3+1]=P.origin[1]+sy+vy*age+.5*P.gravity*age*age+(tb?Math.cos(age*2.3+i*1.7)*tb*.1:0);
  pos[i*3+2]=P.origin[2]+sz+vz*age+(tb?Math.sin(age*2.1+i*.7)*tb*.1:0);
  col[i*4]=c1[0]+(c2[0]-c1[0])*f;col[i*4+1]=c1[1]+(c2[1]-c1[1])*f;col[i*4+2]=c1[2]+(c2[2]-c1[2])*f;
  col[i*4+3]=P.fade?Math.min(1,f*10)*(1-f):1}}
/* ---- common scene API (same for three.js and Babylon.js) ---- */
function cdrScene(E,c,W,H,FR,B,o){
 var Mx=Math,S={engine:B.name,raw:B.raw,meshes:[],lights:[],parts:[],models:[],tracks:[],cam:{pos:[0,1.5,5],target:[0,0,0],fov:50,near:.1,far:200},bg:o.bg||null,fogv:null,shadows:!!o.shadows,t:0,_dead:false,_fk:''};
 B.S=S;
 function v3(a,d){if(typeof a=='number')return[a,a,a];return a&&a.length>=3?[+a[0],+a[1],+a[2]]:d.slice()}
 function evalK(K,tm,op){var n=K.length,L,i,a,b,p,ef;if(!n)return null;if(op.loop){L=K[n-1][0];if(L>0)tm=((tm%L)+L)%L}
  if(tm<=K[0][0])return K[0][1];if(tm>=K[n-1][0])return K[n-1][1];i=1;while(i<n-1&&K[i][0]<tm)i++;a=K[i-1];b=K[i];p=(tm-a[0])/Mx.max(1e-9,b[0]-a[0]);ef=b[2]||a[2]||op.ease||'lin';p=(E.ease[ef]||E.ease.lin)(p);
  if(Array.isArray(a[1]))return a[1].map(function(v,j){return v+(b[1][j]-v)*p});return a[1]+(b[1]-a[1])*p}
 function wrap(ob){ob.track=function(p,K,op){S.track(ob,p,K,op);return ob};return ob}
 S.track=function(ob,p,K,op){S.tracks.push({o:ob,p:p,K:K,op:op||{}});return S};
 S.camera=function(q){var k;for(k in q)S.cam[k]=q[k];return S};
 S.orbit=function(az,el,r,tg){tg=tg||S.cam.target;az=az*Mx.PI/180;el=el*Mx.PI/180;S.cam.target=tg;S.cam.pos=[tg[0]+r*Mx.cos(el)*Mx.sin(az),tg[1]+r*Mx.sin(el),tg[2]+r*Mx.cos(el)*Mx.cos(az)];return S};
 S.ambient=function(col,k){return S.light({type:'amb',color:col||'#ffffff',intensity:k==null?.35:k})};
 S.fog=function(col,n,f){S.fogv=[col||'#000000',n==null?5:n,f==null?30:f];return S};
 S.light=function(q){q=q||{};var L={type:q.type||'dir',color:q.color||'#ffffff',intensity:q.intensity==null?1:q.intensity,pos:v3(q.pos,[3,5,3]),target:v3(q.target,[0,0,0]),shadow:q.shadow==null?S.shadows:!!q.shadow,angle:q.angle||45,ground:q.ground||'#303040',shadowSize:q.shadowSize||7};B.light(L);S.lights.push(wrap(L));return L};
 S.mesh=function(kind,q){q=q||{};var M={kind:kind,pos:v3(q.pos,[0,0,0]),rot:v3(q.rot,[0,0,0]),scale:q.scale==null?[1,1,1]:v3(q.scale,[1,1,1]),color:q.color||'#cccccc',metal:q.metal||0,rough:q.rough==null?.5:q.rough,emissive:q.emissive||null,emissiveK:q.emissiveK==null?1:q.emissiveK,opacity:q.opacity==null?1:q.opacity,wire:!!q.wire,tex:q.tex||q.map||null,tex2:q.tex2||'#000000',texScale:q.texScale||1,cast:q.cast==null?true:!!q.cast,receive:q.receive==null?true:!!q.receive,visible:q.visible!==false,morphK:0,texDirty:false};B.mesh(M,q);S.meshes.push(wrap(M));return M};
 S.ground=function(q){q=q||{};var s=q.size||12;return S.mesh('plane',{pos:q.pos||[0,0,0],rot:[-Mx.PI/2,0,0],scale:[s,s,1],color:q.color||'#202838',rough:q.rough==null?.9:q.rough,metal:q.metal||0,cast:false,receive:true,tex:q.tex,texScale:q.texScale||1,tex2:q.tex2})};
 S.model=function(url,q){q=q||{};return B.model(url,q).then(function(api){var G={kind:'model',pos:v3(q.pos,[0,0,0]),rot:v3(q.rot,[0,0,0]),scale:q.scale==null?[1,1,1]:v3(q.scale,[1,1,1]),visible:true,cast:q.cast==null?true:!!q.cast,receive:q.receive==null?true:!!q.receive,clips:api.clips,anim:q.anim||(api.clips.length?api.clips[0]:null),speed:q.speed==null?1:q.speed,offset:q.offset||0,api:api,nat:api.nat,_sh:''};api.shadow(G.cast,G.receive);S.models.push(wrap(G));return G})};
 S.particles=function(q){q=q||{};var N=Mx.max(1,Mx.min(q.count||600,20000)),P={count:N,life:q.life||2,rate:q.rate==null?1:q.rate,shape:q.shape||'point',origin:v3(q.pos||q.origin,[0,0,0]),size:q.size||.04,speed:q.speed==null?1:q.speed,spread:q.spread==null?1:q.spread,gravity:q.gravity==null?-.6:q.gravity,radius:q.radius==null?.5:q.radius,seed:q.seed||1,burst:q.burst==null?-1:q.burst,turb:q.turb||0,dir:v3(q.dir,[0,1,0]),fade:q.fade!==false,additive:q.additive!==false,visible:true,pos:new Float32Array(N*3),col:new Float32Array(N*4),rgba1:cdrColRGBA(q.color||'#ffd36a'),rgba2:cdrColRGBA(q.color2||q.color||'#ff5a2a')};B.pts(P);S.parts.push(wrap(P));return P};
 S.ready=function(){return B.ready()};
 S.render=function(tm){if(S._dead)return S;tm=tm==null?S.t:tm;S.t=tm;var pw=c.canvas.width,ph=c.canvas.height,i;
  if(!S.lights.length){S.light({type:'hemi',intensity:.7});S.light({type:'dir',pos:[3,5,4],intensity:.9})}
  S.tracks.forEach(function(k){var v=evalK(k.K,tm,k.op);if(v!=null)k.o[k.p]=v});
  S.parts.forEach(function(P){cdrPtsStep(E,P,tm);B.ptsUpdate(P)});
  S.models.forEach(function(G){if(G.anim&&G.api.seek)G.api.seek(G.anim,tm*G.speed+G.offset);B.syncModel(G)});
  B.size(pw,ph);B.bg(S.bg);B.fog(S.fogv);B.cam(S.cam,pw,ph);
  S.lights.forEach(function(L){B.syncLight(L)});S.meshes.forEach(function(M){B.syncMesh(M)});
  B.draw();c.drawImage(B.cv,0,0,W,H);return S};
 S.free=function(){if(S._dead)return;S._dead=true;try{B.free()}catch(e){}S.meshes=[];S.lights=[];S.parts=[];S.models=[];S.tracks=[]};
 FR.push(S.free);
 return S}
/* ---- three.js adapter (WebGL 2 only) ---- */
function cdrThreeScene(E,c,W,H,FR,o){
 var THREE=window.THREE,cv=D.createElement('canvas'),gl=cv.getContext('webgl2',{alpha:true,premultipliedAlpha:true,preserveDrawingBuffer:true,antialias:true,powerPreference:'high-performance'});
 if(!gl||!THREE)throw new Error(t('cdr_gl2_err'));
 var R=new THREE.WebGLRenderer({canvas:cv,context:gl,alpha:true,antialias:true,preserveDrawingBuffer:true,premultipliedAlpha:true});
 if(!R.capabilities.isWebGL2){try{R.dispose()}catch(e){}throw new Error(t('cdr_gl2_err'))}
 R.setPixelRatio(1);R.shadowMap.enabled=!!o.shadows;R.shadowMap.type=THREE.PCFSoftShadowMap;
 var sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,200),geos={},texs={},owned=[],B={name:'three.js',cv:cv,raw:{THREE:THREE,scene:sc,renderer:R,camera:cam}};
 var GF={cube:function(m){var s=m?16:1;return new THREE.BoxGeometry(1,1,1,s,s,s)},sphere:function(m){return new THREE.SphereGeometry(.5,m?64:40,m?40:24)},torus:function(m){return new THREE.TorusGeometry(.33,.15,m?32:20,m?96:56)},cylinder:function(m){return new THREE.CylinderGeometry(.5,.5,1,48,m?24:1)},cone:function(m){return new THREE.ConeGeometry(.5,1,48,m?24:1)},plane:function(m){var s=m?32:1;return new THREE.PlaneGeometry(1,1,s,s)},knot:function(){return new THREE.TorusKnotGeometry(.3,.1,160,18)},icosa:function(m){return new THREE.IcosahedronGeometry(.5,m?5:2)},capsule:function(){return new THREE.CapsuleGeometry(.25,.5,8,24)},disc:function(){return new THREE.CircleGeometry(.5,48)}};
 function rgb(x){return cdrColRGBA(x)}
 function texOf(M){var isS=typeof M.tex=='string',src=isS?cdrTexCv(M.tex,M.tex2):M.tex,key=isS?M.tex+'|'+M.tex2+'|'+M.texScale:null,tx=key?texs[key]:(M._txs===M.tex?M._tx:null);
  if(!tx){tx=(src&&(src.tagName=='CANVAS'||src.getContext))?new THREE.CanvasTexture(src):new THREE.Texture(src);tx.wrapS=tx.wrapT=THREE.RepeatWrapping;tx.anisotropy=4;tx.needsUpdate=true;tx.repeat.set(M.texScale,M.texScale);if(key)texs[key]=tx;else{M._tx=tx;M._txs=M.tex}owned.push(tx)}
  return tx}
 B.mesh=function(M,q){var mo=q.morph,g;if(!GF[M.kind])throw new Error('mesh: '+M.kind);
  if(mo){g=GF[M.kind](1);var pa=g.attributes.position,tp=cdrMorphArr(pa.array,mo),nr=new Float32Array(tp.length),i;for(i=0;i<tp.length;i+=3){var l=Math.hypot(tp[i],tp[i+1],tp[i+2])||1;nr[i]=tp[i]/l;nr[i+1]=tp[i+1]/l;nr[i+2]=tp[i+2]/l}g.morphAttributes.position=[new THREE.BufferAttribute(tp,3)];g.morphAttributes.normal=[new THREE.BufferAttribute(nr,3)];owned.push(g)}
  else g=geos[M.kind]||(geos[M.kind]=GF[M.kind](0));
  var mt=new THREE.MeshStandardMaterial({color:0xcccccc,side:(M.kind=='plane'||M.kind=='disc')?THREE.DoubleSide:THREE.FrontSide});owned.push(mt);
  var n=new THREE.Mesh(g,mt);if(mo)n.updateMorphTargets();sc.add(n);M.nat=n};
 B.syncMesh=function(M){var n=M.nat,sk=typeof M.scale=='number'?[M.scale,M.scale,M.scale]:M.scale;n.position.set(M.pos[0],M.pos[1],M.pos[2]);n.rotation.set(M.rot[0],M.rot[1],M.rot[2]);n.scale.set(sk[0],sk[1],sk[2]);n.visible=M.visible!==false;n.castShadow=!!M.cast;n.receiveShadow=!!M.receive;
  if(n.morphTargetInfluences&&n.morphTargetInfluences.length)n.morphTargetInfluences[0]=M.morphK||0;
  var key=[M.color,M.metal,M.rough,M.emissive,M.emissiveK,M.opacity,M.wire,typeof M.tex=='string'?M.tex:(M.tex?'obj':''),M.tex2,M.texScale].join('|');
  if(key!==M._mk||M.texDirty){var mt=n.material,cc=rgb(M.color);mt.color.setRGB(cc[0],cc[1],cc[2]);mt.metalness=M.metal;mt.roughness=M.rough;
   if(M.emissive){var ec=rgb(M.emissive),k=M.emissiveK==null?1:M.emissiveK;mt.emissive.setRGB(ec[0]*k,ec[1]*k,ec[2]*k)}else mt.emissive.setRGB(0,0,0);
   mt.transparent=M.opacity<1;mt.opacity=M.opacity;mt.depthWrite=M.opacity>=1;mt.wireframe=!!M.wire;
   if(M.tex){var tx=texOf(M);if(mt.map!==tx){mt.map=tx;mt.needsUpdate=true}if(M.texDirty)tx.needsUpdate=true}else if(mt.map){mt.map=null;mt.needsUpdate=true}
   M._mk=key;M.texDirty=false}};
 B.light=function(L){var k=L.type,n;if(k=='amb')n=new THREE.AmbientLight(0xffffff,1);else if(k=='hemi')n=new THREE.HemisphereLight(0xffffff,0x303040,1);else if(k=='point')n=new THREE.PointLight(0xffffff,1,0,2);else if(k=='spot'){n=new THREE.SpotLight(0xffffff,1);n.penumbra=.3}else n=new THREE.DirectionalLight(0xffffff,1);
  if(n.target)sc.add(n.target);sc.add(n);L.nat=n;if(n.shadow&&(k=='dir'||k=='spot')){n.shadow.mapSize.set(1024,1024);n.shadow.bias=-.0005}};
 B.syncLight=function(L){var n=L.nat,k=L.type,cc=rgb(L.color);n.color.setRGB(cc[0],cc[1],cc[2]);n.intensity=L.intensity;
  if(k=='hemi'){var gc=rgb(L.ground);n.groundColor.setRGB(gc[0],gc[1],gc[2]);n.position.set(0,1,0)}
  else if(k!='amb'){n.position.set(L.pos[0],L.pos[1],L.pos[2]);if(n.target)n.target.position.set(L.target[0],L.target[1],L.target[2]);if(k=='spot')n.angle=L.angle*Math.PI/360;
   n.castShadow=!!L.shadow&&R.shadowMap.enabled&&(k=='dir'||k=='spot');
   if(k=='dir'&&n.castShadow&&L._ss!==L.shadowSize){var s=L.shadowSize,sh=n.shadow.camera;sh.left=-s;sh.right=s;sh.top=s;sh.bottom=-s;sh.near=.5;sh.far=60;sh.updateProjectionMatrix();L._ss=L.shadowSize}}};
 B.model=function(url,q){return new Promise(function(ok,no){var ld=new THREE.GLTFLoader();ld.load(url,function(g){
   var root=g.scene||g.scenes[0],holder=new THREE.Group();holder.add(root);var bb=new THREE.Box3().setFromObject(root),sz=new THREE.Vector3(),ct=new THREE.Vector3();bb.getSize(sz);bb.getCenter(ct);
   var mx=Math.max(sz.x,sz.y,sz.z)||1,fit=q.fit===false?1:(q.size==null?1:q.size)/mx;root.scale.multiplyScalar(fit);root.position.set(-ct.x*fit,q.floor?-bb.min.y*fit:-ct.y*fit,-ct.z*fit);
   var mixer=null,acts={},names=[];if(g.animations&&g.animations.length){mixer=new THREE.AnimationMixer(root);g.animations.forEach(function(cl,i){var nm=cl.name||('clip'+i),a=mixer.clipAction(cl);acts[nm]=a;names.push(nm);a.play();a.enabled=false})}
   sc.add(holder);owned.push({dispose:function(){root.traverse(function(m){if(m.isMesh){if(m.geometry)m.geometry.dispose();var ms=Array.isArray(m.material)?m.material:[m.material];ms.forEach(function(x){if(!x)return;['map','normalMap','roughnessMap','metalnessMap','emissiveMap','aoMap'].forEach(function(p){if(x[p]&&x[p].dispose)x[p].dispose()});x.dispose()})}})}});
   ok({nat:holder,clips:names,seek:function(name,time){if(!mixer)return;var k;for(k in acts){acts[k].enabled=(k===name);if(k===name)acts[k].setEffectiveWeight(1)}mixer.setTime(time)},shadow:function(cast,rec){root.traverse(function(m){if(m.isMesh){m.castShadow=cast;m.receiveShadow=rec}})}})
  },undefined,function(e){no(new Error('model: '+((e&&e.message)||e)))})})};
 B.syncModel=function(G){var n=G.nat,sk=typeof G.scale=='number'?[G.scale,G.scale,G.scale]:G.scale;n.position.set(G.pos[0],G.pos[1],G.pos[2]);n.rotation.set(G.rot[0],G.rot[1],G.rot[2]);n.scale.set(sk[0],sk[1],sk[2]);n.visible=G.visible!==false;var sh=G.cast+'|'+G.receive;if(sh!==G._sh){G.api.shadow(!!G.cast,!!G.receive);G._sh=sh}};
 B.pts=function(P){var g=new THREE.BufferGeometry(),pa=new THREE.BufferAttribute(P.pos,3),ca=new THREE.BufferAttribute(P.col,4);pa.setUsage(THREE.DynamicDrawUsage);ca.setUsage(THREE.DynamicDrawUsage);g.setAttribute('position',pa);g.setAttribute('color',ca);
  var tx=new THREE.CanvasTexture(cdrDotCv()),mt=new THREE.PointsMaterial({size:P.size,sizeAttenuation:true,vertexColors:true,transparent:true,depthWrite:false,map:tx,alphaTest:.002,blending:P.additive?THREE.AdditiveBlending:THREE.NormalBlending}),pt=new THREE.Points(g,mt);pt.frustumCulled=false;sc.add(pt);owned.push(g,mt,tx);P.nat=pt;P._pa=pa;P._ca=ca};
 B.ptsUpdate=function(P){P._pa.needsUpdate=true;P._ca.needsUpdate=true;P.nat.visible=P.visible!==false;P.nat.material.size=P.size};
 B.size=function(pw,ph){if(cv.width!=pw||cv.height!=ph)R.setSize(pw,ph,false)};
 B.bg=function(b){if(b){var bc=rgb(b);R.setClearColor(new THREE.Color(bc[0],bc[1],bc[2]),bc[3])}else R.setClearColor(0x000000,0)};
 B.fog=function(f){var k=f?f.join('|'):'';if(k===B._fk)return;B._fk=k;if(!f){sc.fog=null;return}var fc=rgb(f[0]);sc.fog=new THREE.Fog(new THREE.Color(fc[0],fc[1],fc[2]),f[1],f[2])};
 B.cam=function(C,pw,ph){cam.fov=C.fov;cam.near=C.near;cam.far=C.far;cam.aspect=pw/ph;cam.position.set(C.pos[0],C.pos[1],C.pos[2]);cam.up.set(0,1,0);cam.lookAt(C.target[0],C.target[1],C.target[2]);cam.updateProjectionMatrix()};
 B.draw=function(){R.render(sc,cam)};
 B.ready=function(){return Promise.resolve()};
 B.free=function(){owned.forEach(function(x){try{x.dispose()}catch(e){}});try{sc.clear()}catch(e){}try{R.dispose();R.forceContextLoss()}catch(e){}};
 return cdrScene(E,c,W,H,FR,B,o)}
/* ---- Babylon.js adapter (WebGL 2 only, right-handed like three.js) ---- */
function cdrBabylonScene(E,c,W,H,FR,o){
 var BABYLON=window.BABYLON,cv=D.createElement('canvas');if(!BABYLON)throw new Error(t('cdr_gl2_err'));
 var eng=new BABYLON.Engine(cv,true,{preserveDrawingBuffer:true,stencil:true,alpha:true,premultipliedAlpha:true,antialias:true,disableWebGL2Support:false,powerPreference:'high-performance'},false);
 if(!(eng.webGLVersion>=2)){try{eng.dispose()}catch(e){}throw new Error(t('cdr_gl2_err'))}
 try{eng.getCaps().parallelShaderCompile=null}catch(e){}
 var sc=new BABYLON.Scene(eng);sc.useRightHandedSystem=true;sc.clearColor=new BABYLON.Color4(0,0,0,0);
 var cam=new BABYLON.FreeCamera('cam',new BABYLON.Vector3(0,1.5,5),sc);cam.inputs.clear();sc.activeCamera=cam;
 var MB=BABYLON.MeshBuilder,V3=BABYLON.Vector3,C3=BABYLON.Color3,sgs=[],texs={},B={name:'Babylon.js',cv:cv,raw:{BABYLON:BABYLON,scene:sc,engine:eng,camera:cam}};
 function rgb(x){return cdrColRGBA(x)}
 function mk(kind,m){var DS=BABYLON.Mesh.DOUBLESIDE;switch(kind){
   case'cube':return MB.CreateBox('b',{size:1},sc);
   case'sphere':return MB.CreateSphere('s',{diameter:1,segments:m?64:32},sc);
   case'torus':return MB.CreateTorus('t',{diameter:.66,thickness:.3,tessellation:m?96:56},sc);
   case'cylinder':return MB.CreateCylinder('c',{height:1,diameter:1,tessellation:48,subdivisions:m?24:1},sc);
   case'cone':return MB.CreateCylinder('k',{height:1,diameterTop:0,diameterBottom:1,tessellation:48,subdivisions:m?24:1},sc);
   case'plane':return MB.CreatePlane('p',{size:1,sideOrientation:DS},sc);
   case'knot':return MB.CreateTorusKnot('n',{radius:.3,tube:.1,radialSegments:160,tubularSegments:18},sc);
   case'icosa':return MB.CreateIcoSphere('i',{radius:.5,subdivisions:m?6:3},sc);
   case'capsule':return MB.CreateCapsule('cp',{radius:.25,height:1},sc);
   case'disc':return MB.CreateDisc('d',{radius:.5,tessellation:48,sideOrientation:DS},sc)}
  throw new Error('mesh: '+kind)}
 function texOf(M){var isS=typeof M.tex=='string',src=isS?cdrTexCv(M.tex,M.tex2):M.tex,key=isS?M.tex+'|'+M.tex2+'|'+M.texScale:null,tx=key?texs[key]:(M._txs===M.tex?M._tx:null),w=Math.min(2048,src.width||src.naturalWidth||256),h=Math.min(2048,src.height||src.naturalHeight||256);
  if(!tx){tx=new BABYLON.DynamicTexture('t',{width:w,height:h},sc,true);tx.wrapU=tx.wrapV=BABYLON.Texture.WRAP_ADDRESSMODE;tx.uScale=tx.vScale=M.texScale;if(key)texs[key]=tx;else{M._tx=tx;M._txs=M.tex}}
  if(!tx._hf||M.texDirty){var g=tx.getContext();g.clearRect(0,0,w,h);g.drawImage(src,0,0,w,h);tx.update();tx._hf=1}
  return tx}
 B.mesh=function(M,q){var mo=q.morph,n=mk(M.kind,mo?1:0),mt=new BABYLON.StandardMaterial('m',sc);mt.backFaceCulling=!(M.kind=='plane'||M.kind=='disc');mt.twoSidedLighting=!mt.backFaceCulling;n.material=mt;
  if(mo){var base=n.getVerticesData(BABYLON.VertexBuffer.PositionKind),tp=cdrMorphArr(base,mo),nr=new Float32Array(tp.length),i;for(i=0;i<tp.length;i+=3){var l=Math.hypot(tp[i],tp[i+1],tp[i+2])||1;nr[i]=tp[i]/l;nr[i+1]=tp[i+1]/l;nr[i+2]=tp[i+2]/l}var mg=new BABYLON.MorphTargetManager(sc),tg=new BABYLON.MorphTarget('mt',0,sc);tg.setPositions(tp);tg.setNormals(nr);mg.addTarget(tg);n.morphTargetManager=mg;M._mt=tg}
  M.nat=n;M._cast=false;if(M.cast){sgs.forEach(function(sg){sg.addShadowCaster(n,true)});M._cast=true}};
 B.syncMesh=function(M){var n=M.nat,sk=typeof M.scale=='number'?[M.scale,M.scale,M.scale]:M.scale;n.position.set(M.pos[0],M.pos[1],M.pos[2]);n.rotation.set(M.rot[0],M.rot[1],M.rot[2]);n.scaling.set(sk[0],sk[1],sk[2]);n.isVisible=M.visible!==false;n.receiveShadows=!!M.receive;
  if(!!M.cast!==!!M._cast){sgs.forEach(function(sg){if(M.cast)sg.addShadowCaster(n,true);else sg.removeShadowCaster(n,true)});M._cast=!!M.cast}
  if(M._mt)M._mt.influence=M.morphK||0;
  var key=[M.color,M.metal,M.rough,M.emissive,M.emissiveK,M.opacity,M.wire,typeof M.tex=='string'?M.tex:(M.tex?'obj':''),M.tex2,M.texScale].join('|');
  if(key!==M._mk||M.texDirty){var mt=n.material,cc=rgb(M.color),me=M.metal,ro=M.rough,sp=(1-ro)*(.25+.75*me);
   mt.diffuseColor=new C3(cc[0]*(1-.7*me),cc[1]*(1-.7*me),cc[2]*(1-.7*me));mt.specularColor=new C3((me?cc[0]:1)*sp*(me?1:.6),(me?cc[1]:1)*sp*(me?1:.6),(me?cc[2]:1)*sp*(me?1:.6));mt.specularPower=6+Math.pow(1-ro,2)*220;
   if(M.emissive){var ec=rgb(M.emissive),k=M.emissiveK==null?1:M.emissiveK;mt.emissiveColor=new C3(ec[0]*k,ec[1]*k,ec[2]*k)}else mt.emissiveColor=new C3(0,0,0);
   mt.alpha=M.opacity;mt.wireframe=!!M.wire;
   if(M.tex)mt.diffuseTexture=texOf(M);else if(mt.diffuseTexture){mt.diffuseTexture=null}
   M._mk=key;M.texDirty=false}};
 B.light=function(L){var k=L.type,n,dir=new V3(L.target[0]-L.pos[0],L.target[1]-L.pos[1]-0,L.target[2]-L.pos[2]);
  if(k=='amb'||k=='hemi')n=new BABYLON.HemisphericLight('h',new V3(0,1,0),sc);else if(k=='point')n=new BABYLON.PointLight('p',new V3(L.pos[0],L.pos[1],L.pos[2]),sc);else if(k=='spot')n=new BABYLON.SpotLight('s',new V3(L.pos[0],L.pos[1],L.pos[2]),dir.normalize(),Math.PI/4,2,sc);else{n=new BABYLON.DirectionalLight('d',dir.normalize(),sc);n.position=new V3(L.pos[0],L.pos[1],L.pos[2])}
  L.nat=n;if(L.shadow&&(k=='dir'||k=='spot')){var sg=new BABYLON.ShadowGenerator(1024,n);sg.usePercentageCloserFiltering=true;sg.bias=.0006;sg.normalBias=.02;sgs.push(sg);B.S.meshes.forEach(function(M){if(M.cast&&M.nat)sg.addShadowCaster(M.nat,true)});B.S.models.forEach(function(G){if(G.cast&&G.api.meshes)G.api.meshes.forEach(function(m){sg.addShadowCaster(m)})});L._sg=sg}};
 B.syncLight=function(L){var n=L.nat,k=L.type,cc=rgb(L.color);n.diffuse=new C3(cc[0],cc[1],cc[2]);n.intensity=L.intensity;
  if(k=='amb'){n.groundColor=new C3(cc[0],cc[1],cc[2]);n.specular=new C3(0,0,0)}
  else if(k=='hemi'){var gc=rgb(L.ground);n.groundColor=new C3(gc[0],gc[1],gc[2]);n.specular=new C3(0,0,0)}
  else{n.position=new V3(L.pos[0],L.pos[1],L.pos[2]);if(k!='point'){var d=new V3(L.target[0]-L.pos[0],L.target[1]-L.pos[1],L.target[2]-L.pos[2]);n.direction=d.normalize();if(k=='spot')n.angle=L.angle*Math.PI/180}}};
 B.model=function(url,q){var ext=q.ext?('.'+String(q.ext).replace(/^\./,'')):cdrExt(url);return BABYLON.SceneLoader.ImportMeshAsync('','',url,sc,null,ext).then(function(r){
   var holder=new BABYLON.TransformNode('h',sc),root=r.meshes[0],groups={},names=[],cur=null;r.animationGroups.forEach(function(g){g.stop();groups[g.name]=g;names.push(g.name)});
   r.meshes.forEach(function(m){m.computeWorldMatrix(true)});var bb=root.getHierarchyBoundingVectors(true),mn=bb.min,mxv=bb.max,sx=mxv.x-mn.x,sy=mxv.y-mn.y,sz=mxv.z-mn.z,mxd=Math.max(sx,sy,sz)||1,fit=q.fit===false?1:(q.size==null?1:q.size)/mxd;
   var cx=(mn.x+mxv.x)/2,cy=q.floor?mn.y+0:(mn.y+mxv.y)/2,cz=(mn.z+mxv.z)/2;
   root.parent=holder;root.scaling.scaleInPlace(fit);root.position=new V3(-cx*fit,-cy*fit,-cz*fit);
   return{nat:holder,clips:names,meshes:r.meshes,seek:function(name,time){var g=groups[name];if(!g)return;if(cur!==g){if(cur)cur.stop();g.start(true,1,g.from,g.to);g.pause();cur=g}var ta=g.targetedAnimations[0],fp=(ta&&ta.animation.framePerSecond)||60,len=g.to-g.from;g.goToFrame(g.from+(len>0?(((time*fp)%len)+len)%len:0))},shadow:function(cast,rec){r.meshes.forEach(function(m){m.receiveShadows=rec;sgs.forEach(function(sg){if(cast)sg.addShadowCaster(m);else sg.removeShadowCaster(m)})})}}})};
 B.syncModel=function(G){var n=G.nat,sk=typeof G.scale=='number'?[G.scale,G.scale,G.scale]:G.scale;n.position.set(G.pos[0],G.pos[1],G.pos[2]);n.rotation.set(G.rot[0],G.rot[1],G.rot[2]);n.scaling.set(sk[0],sk[1],sk[2]);n.setEnabled(G.visible!==false);var sh=G.cast+'|'+G.receive;if(sh!==G._sh){G.api.shadow(!!G.cast,!!G.receive);G._sh=sh}};
 B.pts=function(P){var m=new BABYLON.Mesh('pts',sc),vd=new BABYLON.VertexData();vd.positions=P.pos;vd.colors=P.col;vd.applyToMesh(m,true);var mt=new BABYLON.StandardMaterial('pm',sc);mt.pointsCloud=true;mt.disableLighting=true;mt.diffuseColor=new C3(1,1,1);mt.emissiveColor=new C3(0,0,0);mt.backFaceCulling=false;if(P.additive)mt.alphaMode=BABYLON.Engine.ALPHA_ADD;m.material=mt;m.hasVertexAlpha=true;m.alwaysSelectAsActiveMesh=true;m.isPickable=false;P.nat=m};
 B.ptsUpdate=function(P){var m=P.nat;m.updateVerticesData(BABYLON.VertexBuffer.PositionKind,P.pos,false,false);m.updateVerticesData(BABYLON.VertexBuffer.ColorKind,P.col,false,false);m.isVisible=P.visible!==false;m.material.pointSize=Math.max(2,P.size*eng.getRenderHeight()*.35)};
 B.size=function(pw,ph){if(cv.width!=pw||cv.height!=ph)eng.setSize(pw,ph)};
 B.bg=function(b){var bc=b?rgb(b):[0,0,0,0];sc.clearColor=new BABYLON.Color4(bc[0],bc[1],bc[2],bc[3])};
 B.fog=function(f){var k=f?f.join('|'):'';if(k===B._fk)return;B._fk=k;if(!f){sc.fogMode=BABYLON.Scene.FOGMODE_NONE;return}var fc=rgb(f[0]);sc.fogMode=BABYLON.Scene.FOGMODE_LINEAR;sc.fogColor=new C3(fc[0],fc[1],fc[2]);sc.fogStart=f[1];sc.fogEnd=f[2]};
 B.cam=function(C){cam.position.set(C.pos[0],C.pos[1],C.pos[2]);cam.setTarget(new V3(C.target[0],C.target[1],C.target[2]));cam.fov=C.fov*Math.PI/180;cam.minZ=C.near;cam.maxZ=C.far};
 B.draw=function(){eng.beginFrame();sc.render();eng.endFrame()};
 B.ready=function(){return new Promise(function(ok){sc.executeWhenReady(ok)})};
 B.free=function(){try{sc.dispose()}catch(e){}try{eng.dispose()}catch(e){}try{var g2=cv.getContext('webgl2'),ex=g2&&g2.getExtension('WEBGL_lose_context');if(ex)ex.loseContext()}catch(e){}};
 return cdrScene(E,c,W,H,FR,B,o)}
/* ---- procedural audio engine v2: offline render (ADSR, waves, filters, FM, vibrato, tremolo, distortion, reverb, delay) ---- */
function cdrImpulse(oc,sec,damp){var sr=oc.sampleRate,n=Math.max(256,Math.floor(sr*sec)),b=oc.createBuffer(2,n,sr),ch,i,s=12345,dm=damp==null?.4:damp;for(ch=0;ch<2;ch++){var d=b.getChannelData(ch),lp=0;for(i=0;i<n;i++){s=(Math.imul(s,1664525)+1013904223)>>>0;var w=(s/4294967296)*2-1;lp+=(w-lp)*(1-dm*.9);d[i]=lp*Math.pow(1-i/n,3.2)}}return b}
function cdrWave(oc,e){var N=64,re=new Float32Array(N+1),im=new Float32Array(N+1),n,h=e.harm;if(e.type=='pulse'){var D2=e.duty==null?.5:Math.min(.95,Math.max(.05,e.duty));for(n=1;n<=N;n++){re[n]=2*Math.sin(2*Math.PI*D2*n)/(n*Math.PI);im[n]=2*(1-Math.cos(2*Math.PI*D2*n))/(n*Math.PI)}}else if(h&&h.length){for(n=1;n<=Math.min(N,h.length);n++)im[n]=+h[n-1]||0}else im[1]=1;return oc.createPeriodicWave(re,im)}
function cdrDist(k){var n=1024,cv=new Float32Array(n),a=k*60+1,i;for(i=0;i<n;i++){var x=i*2/n-1;cv[i]=Math.tanh(a*x)/Math.tanh(a)}return cv}
function cdrAudioRender(evs,dur,cfg){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!OC)return Promise.resolve(null);cfg=cfg||{};
 var sr=48000,len=Math.max(1,Math.ceil((Math.min(dur,240)+.05)*sr)),oc=new OC(2,len,sr),mst=oc.createGain(),cmp=oc.createDynamicsCompressor(),useRv=!!cfg.reverb,useDl=!!cfg.delay,i;
 for(i=0;i<evs.length;i++){if(evs[i].rev>0)useRv=true;if(evs[i].dly>0)useDl=true}
 mst.gain.value=cfg.master==null?.9:cfg.master;cmp.threshold.value=-10;cmp.knee.value=12;cmp.ratio.value=6;cmp.attack.value=.003;cmp.release.value=.2;mst.connect(cmp);cmp.connect(oc.destination);
 var rvIn=null,dlIn=null;
 if(useRv){var rc=cfg.reverb||{},cvn=oc.createConvolver(),rvo=oc.createGain();cvn.buffer=cdrImpulse(oc,Math.min(8,rc.decay||2.2),rc.damp);rvIn=oc.createGain();rvo.gain.value=rc.mix==null?.8:rc.mix;rvIn.connect(cvn);cvn.connect(rvo);rvo.connect(mst)}
 if(useDl){var dc=cfg.delay||{},dn=oc.createDelay(4),fb=oc.createGain(),dlp=oc.createBiquadFilter(),dout=oc.createGain();dn.delayTime.value=Math.min(3.5,Math.max(.01,dc.time||.3));fb.gain.value=Math.min(.92,dc.feedback==null?.4:dc.feedback);dlp.type='lowpass';dlp.frequency.value=dc.tone||5000;dout.gain.value=dc.mix==null?.8:dc.mix;dlIn=oc.createGain();dlIn.connect(dn);dn.connect(dlp);dlp.connect(fb);fb.connect(dn);dlp.connect(dout);dout.connect(mst)}
 evs.forEach(function(e){try{
  var out=mst,j;if(e.pan&&oc.createStereoPanner){var pn=oc.createStereoPanner();pn.pan.value=Math.max(-1,Math.min(1,e.pan));pn.connect(mst);out=pn}
  var g=oc.createGain();g.connect(out);
  if(e.rev>0&&rvIn){var rs=oc.createGain();rs.gain.value=e.rev;g.connect(rs);rs.connect(rvIn)}
  if(e.dly>0&&dlIn){var ds=oc.createGain();ds.gain.value=e.dly;g.connect(ds);ds.connect(dlIn)}
  var t0=e.t,gate,end,at=e.a||0,dc2=e.d||0,su=e.s==null?1:e.s,rl=e.r||0;
  var head=g,fl=e.filter?(Array.isArray(e.filter)?e.filter:[e.filter]):[];
  if(e.k=='buf'){var bs=oc.createBufferSource();bs.buffer=e.buf;bs.playbackRate.value=e.rate;g.gain.value=e.gain;
   for(j=fl.length-1;j>=0;j--){var bf=oc.createBiquadFilter();bf.type=fl[j].type||'lowpass';bf.frequency.value=fl[j].freq||1000;bf.Q.value=fl[j].q==null?1:fl[j].q;bf.connect(head);head=bf}
   bs.connect(head);if(e.dur)bs.start(t0,e.off,e.dur);else bs.start(t0,e.off);return}
  if(e.tail){gate=t0+e.dur;end=gate+rl}else{end=t0+e.dur;rl=Math.min(rl,e.dur*.8);gate=end-rl;at=Math.min(at,e.dur*.5)}
  at=Math.max(.0005,Math.min(at,Math.max(.0005,gate-t0)));dc2=Math.min(dc2,Math.max(0,gate-t0-at));
  var sus=(dc2>0&&su<1)?su:1;
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(e.gain,t0+at);if(sus<1)g.gain.linearRampToValueAtTime(e.gain*sus,t0+at+dc2);g.gain.setValueAtTime(e.gain*sus,Math.max(t0+at+dc2,gate));g.gain.linearRampToValueAtTime(0,end);
  if(e.trem&&e.trem.depth>0){var tg=oc.createGain(),tl=oc.createOscillator(),tlg=oc.createGain();tg.gain.value=1-e.trem.depth/2;tl.frequency.value=e.trem.rate||5;tlg.gain.value=e.trem.depth/2;tl.connect(tlg);tlg.connect(tg.gain);tl.start(t0);tl.stop(end+.05);tg.connect(head);head=tg}
  if(e.dist>0){var ws=oc.createWaveShaper();ws.curve=cdrDist(e.dist);ws.connect(head);head=ws}
  for(j=fl.length-1;j>=0;j--){var f=fl[j],bq=oc.createBiquadFilter();bq.type=f.type||'lowpass';bq.frequency.setValueAtTime(f.freq||1000,t0);if(f.freq2)bq.frequency.exponentialRampToValueAtTime(Math.max(20,f.freq2),Math.max(t0+.001,end));bq.Q.value=f.q==null?1:f.q;if(f.gain!=null)bq.gain.value=f.gain;
   if(f.lfo&&f.lfo.depth){var fo=oc.createOscillator(),fg=oc.createGain();fo.frequency.value=f.lfo.rate||2;fg.gain.value=f.lfo.depth;fo.connect(fg);fg.connect(bq.frequency);fo.start(t0);fo.stop(end+.05)}
   bq.connect(head);head=bq}
  if(e.k=='tone'){var o1=oc.createOscillator(),f1=Math.max(1,e.f),sl=e.tail?gate:end;
   if(e.type=='custom'||e.type=='pulse')o1.setPeriodicWave(cdrWave(oc,e));else o1.type=e.type||'sine';
   o1.frequency.setValueAtTime(f1,t0);if(e.f2){if(e.curve=='lin')o1.frequency.linearRampToValueAtTime(Math.max(1,e.f2),Math.max(t0+.001,sl));else o1.frequency.exponentialRampToValueAtTime(Math.max(1,e.f2),Math.max(t0+.001,sl))}
   o1.detune.value=e.detune||0;
   if(e.vib&&e.vib.depth){var vo=oc.createOscillator(),vg=oc.createGain();vo.frequency.value=e.vib.rate||5.5;vg.gain.value=e.vib.depth;vo.connect(vg);vg.connect(o1.detune);vo.start(t0+(e.vib.delay||0));vo.stop(end+.05)}
   if(e.fm&&e.fm.index){var mo=oc.createOscillator(),mg=oc.createGain(),rt=e.fm.ratio||2;mo.type=e.fm.type||'sine';mo.frequency.setValueAtTime(f1*rt,t0);if(e.f2)mo.frequency.exponentialRampToValueAtTime(Math.max(1,e.f2)*rt,Math.max(t0+.001,sl));mg.gain.value=e.fm.index*f1;mo.connect(mg);mg.connect(o1.frequency);mo.start(t0);mo.stop(end+.05)}
   o1.connect(head);o1.start(t0);o1.stop(end+.02)}
  else{var ns=oc.createBufferSource();ns.buffer=cdrNoiseBuf(oc,Math.ceil((end-t0+.05)*sr),e.color,e.seed);ns.connect(head);ns.start(t0);ns.stop(end+.02)}
 }catch(x){}});
 return oc.startRendering()}
function cdrWav(buf){var n=buf.length,sr=buf.sampleRate,L=buf.getChannelData(0),R=buf.numberOfChannels>1?buf.getChannelData(1):L,ab=new ArrayBuffer(44+n*4),v=new DataView(ab),i,p=44;function w(o,s){for(var k=0;k<s.length;k++)v.setUint8(o+k,s.charCodeAt(k))}
 w(0,'RIFF');v.setUint32(4,36+n*4,true);w(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,sr,true);v.setUint32(28,sr*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*4,true);
 for(i=0;i<n;i++){var a=Math.max(-1,Math.min(1,L[i])),b=Math.max(-1,Math.min(1,R[i]));v.setInt16(p,a<0?a*32768:a*32767,true);v.setInt16(p+2,b<0?b*32768:b*32767,true);p+=4}
 return new Blob([ab],{type:'audio/wav'})}
function cdrAudStart(off){var inst=CDR.inst;cdrAudStop();if(!inst||!inst.aBuf||!CDR.snd||CDR.type!='vid')return;try{var AC=window.AudioContext||window.webkitAudioContext;if(!CDR.ac)CDR.ac=new AC();if(CDR.ac.state=='suspended')CDR.ac.resume();if(!CDR.gn){CDR.gn=CDR.ac.createGain();CDR.gn.connect(CDR.ac.destination)}CDR.gn.gain.value=Math.pow((CDR.vol==null?80:CDR.vol)/100,2);var s=CDR.ac.createBufferSource();s.buffer=inst.aBuf;s.connect(CDR.gn);s.start(0,Math.max(0,Math.min(off,inst.aBuf.duration-.02)));CDR.asrc=s}catch(e){}}
function cdrVol(v){CDR.vol=Math.max(0,Math.min(100,v));if(CDR.gn)CDR.gn.gain.value=Math.pow(CDR.vol/100,2);cdrSave()}
function cdrMeter(){var m=$('#cdrmt'),i=m&&m.firstChild,inst=CDR.inst;if(!i)return;var v=0;if(inst&&inst.an&&CDR.snd&&CDR.playing)v=inst.an(CDR.t).level*((CDR.vol==null?80:CDR.vol)/100);i.style.transform='scaleX('+Math.min(1,v)+')'}
/* ---- engines v3: 3D (three.js / Babylon.js) + audio API ---- */
function cdrEngines3(E,c,W,H,dur,fps,FR,A){
 var Mx=Math,GRP=[],CUS={};
 E.ASSET=cdrAssetObj();E.loadGoogleFont=function(n){return cdrGfLoad(n).then(function(ok){if(ok)E.FONT[n]="'"+n+"',"+CDRFONT.sans;return E.FONT[n]})};
 E.three=function(q){return cdrLib('three').then(function(){return cdrThreeScene(E,c,W,H,FR,q||{})})};
 E.babylon=function(q){return cdrLib('babylon').then(function(){return cdrBabylonScene(E,c,W,H,FR,q||{})})};
 function push(e){if(!A.on)return;var i,g;for(i=GRP.length-1;i>=0;i--){g=GRP[i];e.t+=g.t||0;if(g.gain!=null)e.gain*=g.gain;if(g.pan)e.pan=(e.pan||0)+g.pan;if(g.rev!=null&&e.rev==null)e.rev=g.rev;if(g.dly!=null&&e.dly==null)e.dly=g.dly;if(g.pitch){if(e.k=='tone')e.detune=(e.detune||0)+g.pitch;else if(e.k=='buf')e.rate*=Mx.pow(2,g.pitch/1200)}if(g.filter&&!e.filter)e.filter=g.filter}
  if(A.evs.length>=8000)throw new Error(t('cdr_a_many'));A.evs.push(e)}
 function T0(x){return Mx.max(0,x||0)}
 var NM={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
 function midi(n){if(typeof n=='number')return n;var m=/^([A-Ga-g])([#b]?)(-?\d)$/.exec(String(n));if(!m)return 69;return NM[m[1].toUpperCase()]+(m[2]=='#'?1:m[2]=='b'?-1:0)+12*(+m[3]+1)}
 function freq(n){if(typeof n=='number'&&n>127)return n;return 440*Mx.pow(2,(midi(n)-69)/12)}
 var NN=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
 function nname(m){return NN[((m%12)+12)%12]+(Mx.floor(m/12)-1)}
 E.noteFreq=function(n){return freq(n)};
 E.tone=function(t0,o){o=o||{};var d=o.dur==null?.4:o.dur,ad=o.adsr||{},a=o.attack!=null?o.attack:ad.a!=null?ad.a:.01,dc=o.decay!=null?o.decay:ad.d!=null?ad.d:0,su=o.sustain!=null?o.sustain:ad.s!=null?ad.s:1,r=o.release!=null?o.release:ad.r!=null?ad.r:Mx.min(.15,d*.6),tail=!!(o.tail||o.adsr||o.sustain!=null||o.decay!=null);
  push({k:'tone',t:T0(t0),dur:d,f:freq(o.freq||440),f2:o.slide||o.freq2?freq(o.slide||o.freq2):0,type:o.type||o.wave||'sine',harm:o.harm||null,duty:o.duty,gain:o.gain==null?.3:o.gain,a:a,d:dc,s:su,r:r,tail:tail,pan:o.pan||0,detune:o.detune||0,filter:o.filter||null,fm:o.fm||null,vib:o.vib||null,trem:o.trem||null,dist:o.dist||0,rev:o.rev,dly:o.dly,curve:o.curve});return E};
 E.hiss=function(t0,o){o=o||{};var ad=o.adsr||{},r=o.release!=null?o.release:ad.r!=null?ad.r:.1;push({k:'noise',t:T0(t0),dur:o.dur==null?.3:o.dur,gain:o.gain==null?.25:o.gain,color:o.color||'white',a:o.attack!=null?o.attack:ad.a!=null?ad.a:.005,d:o.decay!=null?o.decay:ad.d||0,s:o.sustain!=null?o.sustain:ad.s!=null?ad.s:1,r:r,tail:!!(o.tail||o.adsr),pan:o.pan||0,filter:o.filter||null,seed:o.seed||1,dist:o.dist||0,trem:o.trem||null,rev:o.rev,dly:o.dly});return E};
 E.play=function(buf,t0,o){o=o||{};if(buf)push({k:'buf',t:T0(t0),buf:buf,gain:o.gain==null?1:o.gain,off:o.offset||0,dur:o.dur||0,rate:o.rate||1,pan:o.pan||0,filter:o.filter||null,rev:o.rev,dly:o.dly});return E};
 E.makeSound=function(d,fn,o){o=o||{};d=Mx.min(30,Mx.max(.01,d||1));var sr=48000,n=Mx.ceil(d*sr),OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!OC)throw new Error(t('cdr_a_err'));var b=new OC(2,2,sr).createBuffer(2,n,sr),L=b.getChannelData(0),R=b.getChannelData(1),i,v;for(i=0;i<n;i++){v=fn(i/sr,i,sr);if(Array.isArray(v)){L[i]=+v[0]||0;R[i]=+v[1]||0}else{v=+v||0;L[i]=v;R[i]=v}}return b};
 E.sndGroup=function(o,fn){GRP.push(o||{});try{fn()}finally{GRP.pop()}return E};
 E.audioFx=function(cfg){A.cfg=cfg||null;return E};
 var PATCH={
  pad:{wave:'sawtooth',unison:3,spread:14,adsr:{a:.9,d:.5,s:.8,r:1.4},filter:{type:'lowpass',freq:1500,q:.7},gain:.22,rev:.4},
  pluck:{wave:'sawtooth',adsr:{a:.002,d:.35,s:0,r:.2},filter:{type:'lowpass',freq:4200,freq2:350,q:2},gain:.3,rev:.15},
  bass:{wave:'sawtooth',sub:1,adsr:{a:.01,d:.15,s:.7,r:.15},filter:{type:'lowpass',freq:700,q:1.5},gain:.34},
  lead:{wave:'square',unison:2,spread:9,adsr:{a:.02,d:.1,s:.75,r:.2},vib:{rate:5.5,depth:14,delay:.15},filter:{type:'lowpass',freq:3800},gain:.2,dly:.25,rev:.2},
  bell:{wave:'sine',fm:{ratio:3.5,index:1.6},adsr:{a:.002,d:1.4,s:0,r:.8},gain:.3,rev:.45},
  organ:{wave:'custom',harm:[1,.7,.5,.35,.25,.15],adsr:{a:.02,d:.05,s:.9,r:.12},trem:{rate:5,depth:.25},gain:.22,rev:.2},
  strings:{wave:'sawtooth',unison:3,spread:18,adsr:{a:.5,d:.3,s:.85,r:.8},vib:{rate:5,depth:12,delay:.3},filter:{type:'lowpass',freq:2600},gain:.2,rev:.4},
  flute:{wave:'sine',adsr:{a:.08,d:.1,s:.8,r:.15},vib:{rate:5,depth:18,delay:.2},gain:.3,rev:.25},
  brass:{wave:'sawtooth',adsr:{a:.06,d:.15,s:.75,r:.15},filter:{type:'lowpass',freq:900,freq2:2600,q:1.2},gain:.26},
  chip:{wave:'pulse',duty:.25,adsr:{a:.004,d:.08,s:.6,r:.06},gain:.2}};
 E.patch=function(name,def){PATCH[name]=def;return E};
 E.synth=function(t0,o){o=o||{};var p=o.inst&&PATCH[o.inst]?PATCH[o.inst]:{},q={},k;for(k in p)q[k]=p[k];for(k in o)if(k!='inst')q[k]=o[k];
  var f=freq(q.freq!=null?q.freq:(q.note!=null?q.note:'A4')),d=q.dur==null?.5:q.dur,n=Mx.max(1,Mx.min(8,q.unison|0||1)),sp=q.spread==null?12:q.spread,g=(q.gain==null?.3:q.gain)/Mx.sqrt(n),i;
  for(i=0;i<n;i++){var dt=n>1?(i/(n-1)*2-1)*sp:0;E.tone(t0,{freq:f,slide:q.slide,dur:d,type:q.wave||q.type||'sine',harm:q.harm,duty:q.duty,gain:g,adsr:q.adsr||{a:.01,d:0,s:1,r:.15},detune:(q.detune||0)+dt,filter:q.filter,fm:q.fm,vib:q.vib,trem:q.trem,dist:q.dist,pan:(q.pan||0)+(n>1?(i/(n-1)*2-1)*(q.width==null?.3:q.width):0),rev:q.rev,dly:q.dly})}
  if(q.sub)E.tone(t0,{freq:f/2,dur:d,type:'sine',gain:g*.8,adsr:q.adsr||{a:.01,d:0,s:1,r:.15},rev:q.rev,pan:q.pan||0});return E};
 E.inst=function(name,n,t0,d,o){var q={};o=o||{};for(var k in o)q[k]=o[k];q.inst=name;q.freq=freq(n);q.dur=d==null?.5:d;return E.synth(t0,q)};
 E.note=function(n,t0,d,o){o=o||{};if(o.inst)return E.inst(o.inst,n,t0,d,o);var q={},k;for(k in o)q[k]=o[k];q.freq=freq(n);q.dur=d==null?.5:d;return E.tone(t0,q)};
 E.chord=function(ns,t0,d,o){o=o||{};var g=(o.gain==null?.3:o.gain)/Mx.max(1,ns.length*.6);ns.forEach(function(n){var q={},k;for(k in o)q[k]=o[k];q.gain=g;E.note(n,t0,d,q)});return E};
 E.melody=function(ns,t0,o){o=o||{};var bt=60/(o.bpm||120),t=t0||0;ns.forEach(function(n){var nm=Array.isArray(n)?n[0]:n,b=Array.isArray(n)?(n[1]||1):1;if(nm&&nm!='-'&&nm!='r')E.note(nm,t,b*bt*(o.legato==null?.92:o.legato),o);t+=b*bt});return E};
 E.drone=function(f,t0,d,o){o=o||{};E.synth(t0,{freq:f,dur:d,wave:'sawtooth',unison:3,spread:12,gain:o.gain==null?.18:o.gain,adsr:{a:o.attack==null?Mx.min(1.5,d/3):o.attack,d:0,s:1,r:o.release==null?Mx.min(1.5,d/3):o.release},filter:{type:'lowpass',freq:o.cutoff||900,q:.7},rev:o.rev,dly:o.dly});return E};
 var SC={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],pentatonic:[0,2,4,7,9],minorpent:[0,3,5,7,10],blues:[0,3,5,6,7,10],dorian:[0,2,3,5,7,9,10],phrygian:[0,1,3,5,7,8,10],lydian:[0,2,4,6,7,9,11],mixolydian:[0,2,4,5,7,9,10],hijaz:[0,1,4,5,7,8,11],chromatic:[0,1,2,3,4,5,6,7,8,9,10,11]};
 E.scale=function(root,mode,oct,o0){var iv=SC[mode||'major']||SC.major,m0=midi(/\d$/.test(String(root))?root:String(root)+(o0==null?4:o0)),out=[],k,i;oct=oct||1;for(k=0;k<oct;k++)for(i=0;i<iv.length;i++)out.push(nname(m0+12*k+iv[i]));out.push(nname(m0+12*oct));return out};
 var CH={'':[0,4,7],m:[0,3,7],'7':[0,4,7,10],maj7:[0,4,7,11],m7:[0,3,7,10],dim:[0,3,6],aug:[0,4,8],sus2:[0,2,7],sus4:[0,5,7],'6':[0,4,7,9],m6:[0,3,7,9],'9':[0,4,7,10,14],add9:[0,4,7,14],m7b5:[0,3,6,10],dim7:[0,3,6,9]};
 E.chordOf=function(sym,oct){var m=/^([A-Ga-g][#b]?)(.*)$/.exec(String(sym));if(!m)return['A4'];var iv=CH[m[2]]||CH[''],b=midi(m[1].toUpperCase()+(oct==null?4:oct));return iv.map(function(x){return nname(b+x)})};
 E.arp=function(ns,t0,o){o=o||{};var bt=60/(o.bpm||120),st=(o.step||.25)*bt,cnt=o.count||ns.length*2,pat=o.pattern||'up',seq=ns.slice(),i,t=t0||0;if(pat=='down')seq.reverse();else if(pat=='updown')seq=ns.concat(ns.slice(1,-1).reverse());
  for(i=0;i<cnt;i++){var n=pat=='random'?ns[Mx.floor(E.rnd(i,7,3)*ns.length)]:seq[i%seq.length];E.note(n,t+i*st,st*(o.legato==null?.9:o.legato),o)}return E};
 var DR={kick:'kick',snare:'snare',hat:'hihat',hihat:'hihat',openhat:'openhat',clap:'clap',tom:'tom',rim:'rim',cowbell:'cowbell'};
 E.beat=function(pats,t0,o){o=o||{};var bpm=o.bpm||120,bars=o.bars||1,barT=240/bpm,gm=o.gain==null?1:o.gain,k,b,i;for(k in pats){var p=String(pats[k]),n=p.length,st=barT/n,nm=DR[k]||k;for(b=0;b<bars;b++)for(i=0;i<n;i++){var ch=p.charAt(i);if(ch=='.'||ch=='-'||ch==' ')continue;var lv=ch=='X'?1.25:ch=='o'?.5:1,sw=(o.swing&&i%2)?st*o.swing:0;E.sfx(nm,(t0||0)+b*barT+i*st+sw,{gain:gm*lv})}}return E};
 var EX={
  kick:function(t,o,g){E.tone(t,{freq:150,slide:42,dur:.35,gain:.95*g,release:.25,attack:.001});E.tone(t,{freq:60,dur:.2,gain:.4*g,release:.15,attack:.001})},
  snare:function(t,o,g){E.hiss(t,{dur:.2,gain:.5*g,release:.15,filter:{type:'highpass',freq:1500}});E.tone(t,{freq:220,slide:130,dur:.12,gain:.35*g,type:'triangle',release:.08})},
  hihat:function(t,o,g){E.hiss(t,{dur:.05,gain:.28*g,release:.04,filter:{type:'highpass',freq:7000}})},
  openhat:function(t,o,g){E.hiss(t,{dur:.3,gain:.25*g,release:.25,filter:{type:'highpass',freq:6500}})},
  clap:function(t,o,g){[0,.012,.026].forEach(function(d){E.hiss(t+d,{dur:.05,gain:.35*g,release:.04,filter:{type:'bandpass',freq:1500,q:1.2}})});E.hiss(t+.03,{dur:.18,gain:.3*g,release:.15,filter:{type:'bandpass',freq:1400,q:1}})},
  tom:function(t,o,g){E.tone(t,{freq:o.freq||160,slide:70,dur:.35,gain:.7*g,release:.25})},
  rim:function(t,o,g){E.tone(t,{freq:1700,dur:.03,type:'square',gain:.2*g,release:.02});E.hiss(t,{dur:.03,gain:.2*g,filter:{type:'highpass',freq:3000}})},
  cowbell:function(t,o,g){E.tone(t,{freq:560,dur:.25,type:'square',gain:.14*g,release:.2});E.tone(t,{freq:845,dur:.25,type:'square',gain:.14*g,release:.2})},
  bell:function(t,o,g){var f=o.freq||880;[1,2.76,5.4,8.93].forEach(function(m,i){E.tone(t,{freq:f*m,dur:1.8,gain:.25*g/(i+1),release:1.6,attack:.002})})},
  pluck:function(t,o,g){E.tone(t,{freq:o.freq||330,dur:.6,type:'sawtooth',gain:.3*g,release:.45,attack:.002,filter:{type:'lowpass',freq:4000,freq2:300,q:2}})},
  pad:function(t,o,g){E.synth(t,{freq:o.freq||220,dur:o.dur||3,inst:'pad',gain:.25*g})},
  bass:function(t,o,g){E.synth(t,{freq:o.freq||55,dur:o.dur||.5,inst:'bass',gain:.34*g})},
  zap:function(t,o,g){E.tone(t,{freq:1200,slide:80,dur:.2,type:'square',gain:.22*g,release:.08})},
  jump:function(t,o,g){E.tone(t,{freq:300,slide:720,dur:.18,type:'square',gain:.2*g,release:.06})},
  powerup:function(t,o,g){[523,659,784,1047,1319,1568].forEach(function(f,i){E.tone(t+i*.06,{freq:f,dur:.08,type:'square',gain:.2*g,release:.03})})},
  hit:function(t,o,g){E.hiss(t,{dur:.12,gain:.5*g,release:.1,filter:{type:'lowpass',freq:1800}});E.tone(t,{freq:180,slide:60,dur:.15,gain:.5*g})},
  explosion:function(t,o,g){E.hiss(t,{dur:1.4,gain:.8*g,color:'brown',release:1.1,filter:{type:'lowpass',freq:1400,freq2:60}});E.tone(t,{freq:90,slide:28,dur:1,gain:.7*g,release:.8})},
  error:function(t,o,g){E.tone(t,{freq:160,dur:.18,type:'sawtooth',gain:.25*g});E.tone(t+.2,{freq:120,dur:.3,type:'sawtooth',gain:.25*g})},
  success:function(t,o,g){[523,659,784].forEach(function(f,i){E.tone(t+i*.09,{freq:f,dur:.5,type:'triangle',gain:.22*g,release:.4})})},
  notify:function(t,o,g){E.tone(t,{freq:880,dur:.12,gain:.22*g});E.tone(t+.14,{freq:1320,dur:.3,gain:.22*g,release:.25})},
  swell:function(t,o,g){var d=o.dur||2;E.hiss(t,{dur:d,gain:.4*g,color:'pink',attack:d*.7,release:d*.3,filter:{type:'bandpass',freq:300,freq2:2400,q:1}})},
  heartbeat:function(t,o,g){E.tone(t,{freq:80,slide:45,dur:.2,gain:.8*g,release:.15});E.tone(t+.2,{freq:70,slide:40,dur:.22,gain:.6*g,release:.18})},
  typewriter:function(t,o,g){for(var i=0;i<(o.count||6);i++)E.hiss(t+i*.09+E.rnd(i,5,1)*.03,{dur:.02,gain:.3*g,release:.015,filter:{type:'highpass',freq:2500}})},
  shutter:function(t,o,g){E.hiss(t,{dur:.025,gain:.4*g,filter:{type:'highpass',freq:2000}});E.hiss(t+.07,{dur:.03,gain:.35*g,filter:{type:'bandpass',freq:1200}})},
  magic:function(t,o,g){for(var i=0;i<10;i++)E.tone(t+i*.05,{freq:1200+E.rnd(i,9,2)*2400,dur:.4,gain:.12*g,release:.35,rev:.5})},
  drip:function(t,o,g){E.tone(t,{freq:1400,slide:500,dur:.12,gain:.3*g,release:.08,rev:.3})},
  siren:function(t,o,g){var d=o.dur||1.6;E.tone(t,{freq:600,slide:950,dur:d/2,gain:.2*g,release:.05});E.tone(t+d/2,{freq:950,slide:600,dur:d/2,gain:.2*g,release:.05})},
  glitch:function(t,o,g){for(var i=0;i<8;i++)E.tone(t+i*.035,{freq:200+E.rnd(i,4,6)*2400,dur:.03,type:'square',gain:.15*g,release:.01})}};
 var oldSfx=E.sfx;
 E.defSfx=function(nm,fn){CUS[nm]=fn;return E};
 E.sfxNames=function(){return Object.keys(EX).concat(Object.keys(CUS),['click','pop','whoosh','riser','impact','chime','beep','laser','coin','thunder','rain','wind'])};
 E.sfx=function(nm,t0,o){o=o||{};if(CUS[nm]){CUS[nm](t0||0,o);return E}if(EX[nm]){EX[nm](t0||0,o,o.gain==null?1:o.gain);return E}return oldSfx(nm,t0,o)}}
/* ---- assets (3D models, images, audio) + license notes, stored on device (IndexedDB) ---- */
var CDRDB=null;
function cdrIdb(){if(CDRDB)return CDRDB;CDRDB=new Promise(function(ok,no){var r=indexedDB.open('hudacoder',2);r.onupgradeneeded=function(){var d=r.result;if(!d.objectStoreNames.contains('fonts'))d.createObjectStore('fonts',{keyPath:'name'});if(!d.objectStoreNames.contains('assets'))d.createObjectStore('assets',{keyPath:'name'})};r.onsuccess=function(){ok(r.result)};r.onerror=function(){CDRDB=null;no(r.error)}});return CDRDB}
function cdrAssAll(){return cdrIdb().then(function(db){return new Promise(function(ok){var q=db.transaction('assets').objectStore('assets').getAll();q.onsuccess=function(){ok(q.result||[])};q.onerror=function(){ok([])}})}).catch(function(){return[]})}
function cdrAssPut(rec){return cdrIdb().then(function(db){return new Promise(function(ok,no){var tx=db.transaction('assets','readwrite');tx.objectStore('assets').put(rec);tx.oncomplete=function(){ok()};tx.onerror=function(){no(tx.error)}})})}
function cdrAssDel(name){return cdrIdb().then(function(db){return new Promise(function(ok){var tx=db.transaction('assets','readwrite');tx.objectStore('assets').delete(name);tx.oncomplete=function(){ok()};tx.onerror=function(){ok()}})}).catch(function(){})}
function cdrAssetsLoad(){return cdrAssAll().then(function(L){CDR.asl=L}).catch(function(){})}
var CDRASU={};
function cdrAssetObj(){var o={};(CDR.asl||[]).forEach(function(r){Object.defineProperty(o,r.name,{enumerable:true,get:function(){if(!CDRASU[r.name]){CDRASU[r.name]=URL.createObjectURL(new Blob([r.data],{type:r.mime||'application/octet-stream'}))}return CDRASU[r.name]+(r.type=='model'?'#'+r.name+'.'+r.ext:'')}})});return o}
function cdrAssetAdd(f,type){var lim={model:30,image:10,audio:20}[type]*1048576;if(f.size>lim){toast(t('cdr_aerr'));return Promise.resolve()}
 var ext=(/\.([A-Za-z0-9]+)$/.exec(f.name)||[,''])[1].toLowerCase();if(type=='model'&&ext!='glb'&&ext!='gltf'){toast(t('cdr_aerr'));return Promise.resolve()}
 var name=String(f.name.replace(/\.[^.]+$/,'')).replace(/[^A-Za-z0-9_]/g,'_').replace(/^(\d)/,'a$1')||'asset1',li=$('#cdrlic'),lic=li?String(li.value).slice(0,160):'';
 return f.arrayBuffer().then(function(buf){var rec={name:name,type:type,ext:ext,mime:f.type,data:buf,size:f.size,lic:lic};return cdrAssPut(rec).then(function(){if(CDRASU[name]){try{URL.revokeObjectURL(CDRASU[name])}catch(e){}delete CDRASU[name]}CDR.asl=(CDR.asl||[]).filter(function(r){return r.name!=name}).concat([rec]);toast(t('cdr_saved'));if(CDR.tab=='set')cdrBody()})}).catch(function(){toast(t('cdr_aerr'))})}
function cdrAssetsHtml(){var h='<label class="cdrlb">'+ic('cdrcube')+t('cdr_ast')+'</label><p class="mu">'+t('cdr_ause')+'</p><div class="cdrrow">'
 +'<label class="cdrab">'+ic('cdrcube')+t('cdr_amod')+'<input type="file" id="cdrafm" accept=".glb,.gltf" hidden></label>'
 +'<label class="cdrab">'+ic('cdrimgf')+t('cdr_aimg')+'<input type="file" id="cdrafi" accept="image/*" hidden></label>'
 +'<label class="cdrab">'+ic('cdrmusic')+t('cdr_aaud')+'<input type="file" id="cdrafa" accept="audio/*" hidden></label></div>';
 (CDR.asl||[]).forEach(function(r){h+='<div class="cdrli"><span class="cdrlt">'+ic(r.type=='model'?'cdrcube':r.type=='image'?'cdrimgf':'cdrmusic')+'<b>ASSET.'+esc(r.name)+'</b><small>'+Math.round(r.size/1024)+' KB'+(r.lic?' · '+esc(r.lic):'')+'</small></span><button type="button" class="cdrib dg" data-cdr="adel:'+esc(r.name)+'" aria-label="'+t('cdr_clear')+'">'+ic('cdrtrash')+'</button></div>'});
 return h}
function cdrLicHtml(){return'<label class="cdrlb">'+ic('cdrlic')+t('cdr_alic')+'</label><input type="text" id="cdrlic" class="cdrin" maxlength="160" placeholder="CC0 / MIT / © ...">'}
function cdrEngInfo(){return'<label class="cdrlb">'+ic('cdrcube')+t('cdr_eng3d')+'</label><p class="mu">three.js r147 (MIT) · Babylon.js 6.49.0 (Apache-2.0) · WebGL 2</p>'}
function cdrDockHtml(){return'<div class="cdrdock" id="cdrdock"><button type="button" class="ic1" data-cdr="undo" aria-label="'+t('cdr_undo')+'">'+ic('undo')+'</button><button type="button" class="ic1" data-cdr="redo" aria-label="'+t('cdr_redo')+'">'+ic('redo')+'</button><button type="button" data-cdr="copy">'+ic('cdrcopy')+'<span>'+t('cdr_copy')+'</span></button><button type="button" data-cdr="paste">'+ic('cdrpaste')+'<span>'+t('cdr_paste')+'</span></button><button type="button" class="dg" data-cdr="clear">'+ic('cdrtrash')+'<span>'+t('cdr_clear')+'</span></button></div>'}
function cdrLb(k,i){return'<label class="cdrlb">'+ic(i)+t(k)+'</label>'}
/* ---- extra templates + help ---- */
CDRTPL.push(
{m:'js',k:'cdr_tp13',ty:'vid',code:"// three.js 3D (WebGL 2): objects, light, shadows, morph, texture\nvar S, cube, ball, ring;\nasync function setup(){\n  S = await three({shadows:true});\n  S.camera({pos:[0,2.2,6], target:[0,.4,0], fov:50});\n  S.light({type:'hemi', intensity:.55});\n  S.light({type:'dir', pos:[4,6,3], intensity:1, shadow:true});\n  S.ground({size:14, color:'#1f2a44'});\n  cube = S.mesh('cube', {pos:[-1.6,.5,0], color:'#d4af37', metal:.6, rough:.35});\n  ball = S.mesh('sphere', {pos:[0,.5,0], scale:1.2, color:'#2fa86a', morph:'cube'});\n  ring = S.mesh('torus', {pos:[1.7,.55,0], color:'#c25bb0', tex:'stripes', texScale:4});\n  S.fog('#0b1220', 6, 18);\n}\nfunction draw(t, p){\n  bg('#0b1220');\n  cube.rot = [t*.8, t*1.1, 0];\n  ball.morphK = ease.inOut((sin(t*1.2)+1)/2);\n  ball.pos = [0, .6+abs(sin(t*2))*.5, 0];\n  ring.rot = [t, t*.6, 0];\n  S.orbit(20+t*18, 18, 6.2, [0,.5,0]);\n  S.render(t);\n  text('three.js · WebGL 2', W/2, H*.92, {size:W*.04, color:'#cbd5e1', align:'center'});\n}\n"},
{m:'js',k:'cdr_tp14',ty:'vid',code:"// Babylon.js 3D (WebGL 2): keyframes + particles + shadows\nvar S, orb, fire;\nasync function setup(){\n  S = await babylon({shadows:true});\n  S.light({type:'hemi', intensity:.6});\n  S.light({type:'dir', pos:[3,5,3], intensity:1, shadow:true});\n  S.ground({size:12, color:'#12362c'});\n  orb = S.mesh('icosa', {pos:[-1.5,.8,0], scale:1.1, color:'#ffd36a', metal:.5, rough:.3});\n  orb.track('pos', [[0,[-1.5,.8,0]],[2,[1.5,1.6,0],'inOut'],[4,[-1.5,.8,0],'inOut']], {loop:true});\n  fire = S.particles({count:500, shape:'ring', pos:[0,.1,0], radius:.8, life:2.2, speed:.9, gravity:.15, size:.05, color:'#ffd36a', color2:'#ff5a2a'});\n  await S.ready();\n}\nfunction draw(t, p){\n  bg('#06231c');\n  orb.rot = [t, t*.7, 0];\n  S.orbit(-25+sin(t*.5)*25, 20, 6, [0,.6,0]);\n  S.render(t);\n}\n"},
{m:'js',k:'cdr_tp15',ty:'vid',code:"// Procedural audio: instruments, drums, custom SFX, effects + audio-reactive 2D\naudioFx({reverb:{decay:2.4, mix:.7}, delay:{time:.25, feedback:.35, mix:.4}});\nfunction audio(){\n  defSfx('zap', function(t, o){ tone(t, {freq:1800, slide:120, dur:.25, type:'sawtooth', gain:.25, filter:{type:'lowpass', freq:5000, freq2:500}}); });\n  var bpm = 120, bar = 240/bpm, ch = ['Am','F','C','G'];\n  for(var i = 0; i < 3; i++){\n    chord(chordOf(ch[i], 3), i*bar, bar, {inst:'pad'});\n    inst('bass', chordOf(ch[i], 2)[0], i*bar, bar*.9);\n    arp(scale('A','minor',1,4), i*bar, {bpm:bpm, step:.25, count:16, inst:'pluck'});\n  }\n  beat({kick:'x...x...x...x...', snare:'....x.......x...', hat:'..x...x...x...x.'}, 0, {bpm:bpm, bars:3});\n  sfx('zap', 2.5);\n}\nfunction draw(t, p){\n  bg('#0a0f1e');\n  var a = audioAt(t);\n  for(var i = 0; i < 16; i++){\n    var h = a.bands[i]*H*.5;\n    rect(W*.08+i*W*.054, H*.8-h, W*.04, h, '#d4af37', 6);\n  }\n  circle(W/2, H*.35, W*.12+a.bass*W*.12, 'rgba(47,168,106,.55)');\n}\n"},
{m:'js',k:'cdr_tp16',ty:'vid',code:"// 2D + 3D + audio in one project: the 3D scene reacts to the sound\nvar S, orb, sparks;\nasync function setup(){\n  S = await three({});\n  S.camera({pos:[0,0,5], fov:50});\n  S.light({type:'hemi', intensity:.6});\n  S.light({type:'dir', pos:[2,3,4], intensity:1});\n  orb = S.mesh('sphere', {scale:1.4, color:'#d4af37', metal:.5, rough:.3, morph:'star'});\n  sparks = S.particles({count:400, shape:'sphere', radius:.3, dir:[0,0,0], spread:1.4, speed:.8, gravity:0, size:.05, life:2});\n}\nfunction audio(){\n  audioFx({reverb:{decay:2, mix:.6}});\n  drone(55, 0, DUR, {gain:.2});\n  melody(['A4','C5','E5','D5','C5','E5','A5',['G5',2]], 0, {bpm:110, inst:'bell'});\n  beat({kick:'x...x...', hat:'..x...x.'}, 0, {bpm:110, bars:4});\n}\nfunction draw(t, p){\n  bg('#0b1220');\n  var a = audioAt(t);\n  orb.morphK = clamp(a.bass*1.6, 0, 1);\n  orb.rot = [t*.5, t*.8, 0];\n  S.render(t);\n  circle(W/2, H/2, W*.3+a.level*W*.15, null, 'rgba(255,255,255,.25)', 3);\n}\n"}
);
CDRDOC.push(
"three({bg, shadows})   babylon({bg, shadows})   ->  S   (open-source, WebGL 2 only, loaded on demand)",
"S.camera({pos, target, fov})  S.orbit(az, el, r, target)  S.light({type:dir|point|spot|hemi|amb, color, intensity, pos, target, shadow})  S.ambient(color, k)  S.fog(color, near, far)",
"S.mesh(kind, {pos, rot, scale, color, metal, rough, emissive, opacity, wire, tex, texScale, cast, receive, morph})  S.ground({size, color})   kinds: cube sphere torus cylinder cone plane knot icosa capsule disc",
"await S.model(url or ASSET.name, {size, pos, floor})  ->  G   G.anim = \"clipName\"   G.clips   G.speed   (glTF / GLB)",
"mesh.morphK = 0..1   S.mesh(\"sphere\", {morph:\"cube\"|\"star\"|\"twist\"|\"wave\"|\"flat\"|\"noise\"|\"big\"| fn(p,i)})",
"S.track(obj, \"pos\"|\"rot\"|\"scale\"|\"color\"|\"intensity\", [[t, value, \"ease\"], ...], {loop})   obj.track(...)   (keyframes)",
"S.particles({count, shape:point|sphere|box|ring|cone, pos, life, rate, speed, spread, gravity, color, color2, size, burst, turb})",
"S.render(t)   await S.ready()   S.free()   S.raw  (native three.js / Babylon.js objects)",
"synth(t, {note|freq, dur, wave, adsr:{a,d,s,r}, filter, fm:{ratio,index}, vib, trem, unison, spread, sub, dist, rev, dly, pan, gain, inst})",
"tone  note  chord  melody  drone  hiss  arp(notes, t, {bpm, step, pattern})  beat({kick:\"x...\", snare:\"..x.\"}, t, {bpm, bars})",
"scale(\"C\",\"minor\",2)  chordOf(\"Am7\")  noteFreq(\"A4\")  inst(\"pad\", note, t, dur)  patch(name, options)   instruments: pad pluck bass lead bell organ strings flute brass chip",
"defSfx(\"zap\", (t, o) => {...})  sfx(\"zap\", t)  sfxNames()  makeSound(sec, (t, i) => sample)   (unlimited custom sounds)",
"audioFx({reverb:{decay, mix, damp}, delay:{time, feedback, mix, tone}, master})   sndGroup({t, gain, pan, rev, dly, pitch, filter}, () => {...})",
"await loadGoogleFont(\"Pacifico\")   await loadFont(name, url)   text(..., {font:\"Any Family\"})   (no font limit)"
);

/* ---- Huda Coder v3.1: unlimited fonts, useful tab ---- */
function cdrGfLoad(name){name=String(name).trim();return new Promise(function(ok){var id='gf_'+name.replace(/\W/g,'_'),l=D.getElementById(id);
 function fin(){var q=(document.fonts&&document.fonts.load)?Promise.all([document.fonts.load('40px "'+name+'"','Abc'),document.fonts.load('40px "'+name+'"','\u0b85\u0b86')]):Promise.resolve();q.then(function(){ok(true)},function(){ok(true)})}
 if(l&&l.getAttribute('data-ok')=='1'){fin();return}if(l)l.remove();
 l=D.createElement('link');l.id=id;l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family='+encodeURIComponent(name).replace(/%20/g,'+')+'&display=swap';
 l.onload=function(){l.setAttribute('data-ok','1');fin()};l.onerror=function(){l.remove();ok(false)};D.head.appendChild(l)})}
function cdrGfAll(){return Promise.all((CDR.gfl||[]).map(function(n){return cdrGfLoad(n)})).catch(function(){})}
function cdrGfAdd(v){if(/^https?:\/\//i.test(v)){var nm=String(v.split('?')[0].split('/').pop()||'font').replace(/\.[^.]+$/,'').replace(/[^A-Za-z0-9_]/g,'_').replace(/^(\d)/,'f$1')||'font1';
  return fetch(v).then(function(r){if(!r.ok)throw 0;return r.arrayBuffer()}).then(function(buf){var rec={name:nm,data:buf};return cdrFontReg(rec).then(function(){return cdrFontPut(rec)}).then(function(){CDR.cfl=(CDR.cfl||[]).filter(function(r){return r.name!=nm}).concat([rec]);toast(t('cdr_saved'));if(CDR.tab=='set')cdrBody()})}).catch(function(){toast(t('cdr_f_err'))})}
 v=v.replace(/\s+/g,' ');return cdrGfLoad(v).then(function(ok){if(!ok){toast(t('cdr_f_err'));return}CDR.gfl=(CDR.gfl||[]).filter(function(x){return x!=v}).concat([v]);cdrSave();toast(t('cdr_saved'));if(CDR.tab=='set')cdrBody()})}
function cdrFontsSet(){var h=cdrLb('cdr_fonts','font')+'<p class="mu">'+t('cdr_gfuse')+'</p><div class="cdrrow"><input id="cdrgf" type="text" class="cdrin" placeholder="'+t('cdr_gfph')+'" style="flex:1;min-width:0"><button type="button" class="btn" data-cdr="gfadd">'+ic('plus')+t('cdr_gfadd')+'</button></div><div class="cdrchs" style="margin-top:8px">'+['Pacifico','Lobster','Amiri','Poppins','Playfair Display','Orbitron','Bebas Neue','Noto Sans Tamil','Noto Serif Sinhala','Cairo'].map(function(n){return'<button type="button" class="cdrch" data-cdr="gfq:'+n+'">'+n+'</button>'}).join('')+'</div>';
 (CDR.gfl||[]).forEach(function(n){h+='<div class="cdrli"><b>'+esc(n)+'<small>font:\''+esc(n)+'\'</small></b><button type="button" class="cdrib" data-cdr="gfdel:'+esc(n)+'" aria-label="'+t('cdr_del')+'">'+ic('x')+'</button></div>'});
 (CDR.cfl||[]).forEach(function(r){h+='<div class="cdrli"><b>FONT.'+esc(r.name)+'<small>'+esc(CDR.cf[r.name]||'')+'</small></b><button type="button" class="cdrib" data-cdr="fdel:'+esc(r.name)+'" aria-label="'+t('cdr_del')+'">'+ic('x')+'</button></div>'});
 return h}
var CDRSNIP=[
 {k:'cdr_sn1',w:1,code:"var a1 = clamp(t/1, 0, 1);\ntext('Huda Brain', W/2, H/2, {size:W*.08, color:'rgba(247,222,142,'+a1+')', align:'center'});\n"},
 {k:'cdr_sn2',w:1,code:"circle(W/2, H/2, W*.15*(1+.1*sin(t*4)), '#d4af37');\n"},
 {k:'cdr_sn4',w:0,code:"async function setup(){\n  await loadGoogleFont('Pacifico');\n}\n// draw():  text('Huda', W/2, H/2, {size:W*.1, font:'Pacifico', align:'center', color:'#f7de8e'});\n"},
 {k:'cdr_sn6',w:0,code:"var S;\nasync function setup(){\n  S = await three({});\n  S.light({type:'hemi', intensity:.7});\n  S.light({type:'dir', pos:[3,5,4]});\n  S.mesh('torus', {color:'#d4af37', metal:.5});\n}\n// draw():  S.orbit(t*30, 20, 3); S.render(t);\n"}];
function cdrUseHtml(){var h='<div class="cdrs">'+cdrLb('cdr_tpl','sparkle')+cdrTplHtml();
 h+=cdrLb('cdr_snt','code')+'<p class="mu">'+t('cdr_snd')+'</p>'+CDRSNIP.map(function(x,i){return'<div class="cdrli"><b>'+t(x.k)+'<small>'+(x.w?t('cdr_snw1'):t('cdr_snw0'))+'</small></b><button type="button" class="btn sm" data-cdr="sn:'+i+'">'+ic('plus')+t('cdr_ins')+'</button></div>'}).join('');
 var PAL=[['#0b1220','#1b2a4a','#d4af37','#f7de8e','#ffffff'],['#06231c','#12362c','#2fa86a','#9be7c4','#f6f3eb'],['#2b1055','#7597de','#c25bb0','#ffd36a','#ffffff'],['#1a1a1a','#e5383b','#ff8a5c','#ffd6a5','#f1faee']];
 h+=cdrLb('cdr_cl','cdrbg')+'<p class="mu">'+t('cdr_clu')+'</p>'+PAL.map(function(p){return'<div class="cdrpal">'+p.map(function(c){return'<button type="button" class="cdrsw" style="background:'+c+'" data-cdr="cp:'+c+'" aria-label="'+c+'"></button>'}).join('')+'</div>'}).join('');
 
 return h+'</div>'}
/* ---- entry ---- */
function cdrView(){cdrInit();CDR.crash=S('cdrrun',0)?1:0;P('cdrrun',0);CDR.rid++;CDR.tab='code';CDR.notes=[];CDR.logs=[];CDR.err=null;CDR.playing=true;CDR.t=0;CDR.inst=null;
 app.innerHTML='<div class="cdr"><div class="cdrtop"><div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic('code')+'</span><b>'+t('st_hc')+'</b><button type="button" class="cdrxb" data-cdr="exp" aria-label="'+t('cdr_exp')+'">'+ic('dl')+'<span>'+t('cdr_exp')+'</span></button><button type="button" class="stcr" data-cdr="run">'+ic('p')+'<span>'+t('cdr_run')+'</span></button></div><div class="cdrjb" id="cdrjb"></div><div class="cdrstage" id="cdrstage"><div class="cdrside" id="cdrside"><button type="button" class="cdrsb" id="cdrsnd" data-cdr="snd" aria-label="'+t('cdr_aud')+'" hidden></button><button type="button" class="cdrsb" id="cdrsetb" data-cdr="tab:set" aria-label="'+t('cdr_set')+'">'+ic('cdrsliders')+'</button><button type="button" class="cdrsb" id="cdrpvb" data-cdr="pvl" aria-label="'+t('cdr_size')+'">'+ic(CDR.pvl==0?'cdrmax':'cdrmin')+'</button><button type="button" class="cdrsb" data-cdr="rst" aria-label="'+t('cdr_rst')+'">'+ic('cdrrst')+'</button><button type="button" class="cdrsb" data-cdr="snap" aria-label="'+t('cdr_snap')+'">'+ic('cdrcam')+'</button><button type="button" class="cdrsb" data-cdr="bgt" aria-label="'+t('cdr_bgt')+'">'+ic('cdrbg')+'</button></div><div class="cdrpvc"><div class="cdrpv" id="cdrpv" data-bg="0"><canvas id="cdrcv" width="2" height="2"></canvas></div><div class="cdrpl" id="cdrpl"><button type="button" class="cdrpb" id="cdrpb" data-cdr="play"></button><input type="range" class="cdrsc" id="cdrsc" min="0" max="1000" step="1" value="0"><span id="cdrtm" class="cdrtm"></span></div></div></div><div class="cdrtabs" id="cdrtabs"></div></div><div id="cdrbody"></div><div class="cdrsym" id="cdrsym" hidden>'+CDRSYM.map(function(s,i){return'<button type="button" data-cdr="sym:'+i+'">'+esc(s[0])+'</button>'}).join('')+'<button type="button" data-cdr="outd">\u21e4</button><button type="button" data-cdr="ind">\u21e5</button></div>'+cdrDockHtml()+'<div class="cdrmd" id="cdrmd" hidden><div class="cdrmc"><div class="cdrmh"><b id="cdrmt">'+t('cdr_exp')+'</b><button type="button" class="cdrib" data-cdr="mdc" aria-label="'+t('cdr_close')+'">'+ic('x')+'</button></div><div id="cdrmb" class="cdrs"></div></div></div></div>';
 var root=$('.cdr'),sym=$('#cdrsym');root.addEventListener('click',cdrClick);
 root.addEventListener('input',function(e){var x=e.target;if(x.id=='cdrsc')cdrScrub(+x.value);else if(x.id=='cdrvol')cdrVol(+x.value);else if(x.id=='cdrdur'){var v=parseFloat(x.value);if(v>0){CDR.dur=Math.min(600,Math.max(.5,v));clearTimeout(CDR._dt);CDR._dt=setTimeout(cdrApply,600)}}});
 root.addEventListener('change',cdrChange);
 ['mousedown','pointerdown'].forEach(function(ev){sym.addEventListener(ev,function(e){e.preventDefault()});var dk=$('#cdrdock');if(dk)dk.addEventListener(ev,function(e){e.preventDefault()})});
 if(window.visualViewport&&!CDR._vv){CDR._vv=1;visualViewport.addEventListener('resize',cdrKb);visualViewport.addEventListener('scroll',cdrKb)}
 cdrPvl();cdrTabsUi();cdrBody();cdrPlUi();cdrJobUi();
 Promise.all([hdfEnsure(),cdrFontsLoad(),cdrAssetsLoad(),cdrGfAll()]).then(function(){if(CDR.crash)cdrLogUi();else cdrRun()})}
function stAdmGate(fn){if(wdIsAdm()){fn();return}if(typeof SES=='undefined'||!SES||(WD.u===SES.uid&&WD.a===false)){stHome();return}var id=++WD.v;app.innerHTML='<div class="wdv"><div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic('shield')+'</span><b>'+t('st_stud')+'</b></div><div class="wdc"><p class="wdmsg wdbz"><i></i>'+t('wd_chk')+'</p></div></div>';wdChk().then(function(a){if(id!==WD.v)return;if(a)fn();else stHome()})}

/* ===== Huda Font (admin only): draw glyphs -> TrueType font. Own code, no third-party libraries ===== */
var HDF=null;
function hdfR(a,b){var o=[],i;for(i=a;i<=b;i++)o.push(i);return o}
var HDFSETS={
 ta:[0x0B85,0x0B86,0x0B87,0x0B88,0x0B89,0x0B8A,0x0B8E,0x0B8F,0x0B90,0x0B92,0x0B93,0x0B94,0x0B83,0x0B95,0x0B99,0x0B9A,0x0B9E,0x0B9F,0x0BA3,0x0BA4,0x0BA8,0x0BAA,0x0BAE,0x0BAF,0x0BB0,0x0BB2,0x0BB5,0x0BB4,0x0BB3,0x0BB1,0x0BA9,0x0B9C,0x0BB7,0x0BB8,0x0BB9,0x0BBE,0x0BBF,0x0BC0,0x0BC1,0x0BC2,0x0BC6,0x0BC7,0x0BC8,0x0BD7,0x0BCD],
 tn:hdfR(0x0BE6,0x0BEF),
 la:hdfR(65,90).concat(hdfR(97,122)),
 di:hdfR(48,57),
 pu:[33,34,35,37,38,39,40,41,42,43,44,45,46,47,58,59,61,63,64,95,0x2013,0x2014,0x2018,0x2019,0x201C,0x201D],
 ar:hdfR(0x0621,0x063A).concat(hdfR(0x0641,0x064A),hdfR(0x064B,0x0652),[0x060C,0x061B,0x061F])
};
var HDFREF=[['',''],['system-ui,sans-serif','Sans'],['Georgia,serif','Serif'],["'Noto Sans Tamil',sans-serif",'Tamil Sans'],["'Noto Serif Tamil',serif",'Tamil Serif'],["'Amiri',serif",'Amiri'],["'Noto Naskh Arabic',serif",'Naskh'],["'KFGQPC Hafs V20','Amiri',serif",'Hafs']];
function hdfAdv(cp){if(cp==0x0BCD||cp==0x0BD7||(cp>=0x064B&&cp<=0x0652))return 0;if(cp==32)return 300;if(cp>=0x0B80&&cp<=0x0BFF)return 760;if(cp>=0x0600&&cp<=0x06FF)return 620;if(cp==33||cp==39||cp==44||cp==46||cp==58||cp==59||cp==124)return 300;if(cp>=48&&cp<=57)return 560;return 600}
function hdfChar(cp){return String.fromCodePoint(cp)}
function hdfLabel(cp){var ch=hdfChar(cp);return(/\p{M}/u.test(ch)?'\u25cc':'')+ch}
function hdfHex(cp){var h=cp.toString(16).toUpperCase();while(h.length<4)h='0'+h;return'U+'+h}
/* ---- geometry ---- */
function hdfSeg(c,i){var a=c.pts[i],b=c.pts[(i+1)%c.pts.length],o=a.o,n=b.i;return{a:a,b:b,cub:!!(o||n),p0:[a.x,a.y],c1:o||[a.x,a.y],c2:n||[b.x,b.y],p3:[b.x,b.y]}}
function hdfNSeg(c){var n=c.pts.length;return c.closed?n:Math.max(0,n-1)}
function hdfBz(s,t){var u=1-t,a=u*u*u,b=3*u*u*t,c=3*u*t*t,d=t*t*t;return[a*s.p0[0]+b*s.c1[0]+c*s.c2[0]+d*s.p3[0],a*s.p0[1]+b*s.c1[1]+c*s.c2[1]+d*s.p3[1]]}
function hdfFlat(c,n){var out=[],m=c.pts.length,sg=hdfNSeg(c),i,k;for(i=0;i<sg;i++){var s=hdfSeg(c,i);out.push(s.p0);if(s.cub)for(k=1;k<n;k++)out.push(hdfBz(s,k/n))}if(!c.closed&&m)out.push([c.pts[m-1].x,c.pts[m-1].y]);return out}
function hdfArea(p){var a=0,i,j,n=p.length;for(i=0;i<n;i++){j=(i+1)%n;a+=p[i][0]*p[j][1]-p[j][0]*p[i][1]}return a/2}
function hdfRev(c){c.pts.reverse();c.pts.forEach(function(p){var t=p.i;p.i=p.o;p.o=t})}
function hdfOrient(c){if(c.pts.length>2&&hdfArea(hdfFlat(c,12))>0)hdfRev(c)}
function hdfInPoly(p,x,y){var n=p.length,i,j,r=false;for(i=0,j=n-1;i<n;j=i++){if((p[i][1]>y)!=(p[j][1]>y)&&x<(p[j][0]-p[i][0])*(y-p[i][1])/(p[j][1]-p[i][1])+p[i][0])r=!r}return r}
function hdfBBox(cs){var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;cs.forEach(function(c){c.pts.forEach(function(p){[[p.x,p.y],p.i,p.o].forEach(function(q){if(!q)return;if(q[0]<x0)x0=q[0];if(q[0]>x1)x1=q[0];if(q[1]<y0)y0=q[1];if(q[1]>y1)y1=q[1]})})});return x1<x0?null:{x0:x0,y0:y0,x1:x1,y1:y1}}
function hdfMapPts(cs,fn){cs.forEach(function(c){c.pts.forEach(function(p){var a=fn(p.x,p.y);p.x=a[0];p.y=a[1];if(p.i)p.i=fn(p.i[0],p.i[1]);if(p.o)p.o=fn(p.o[0],p.o[1])})})}
function hdfRound(cs){cs.forEach(function(c){c.pts.forEach(function(p){p.x=Math.round(p.x);p.y=Math.round(p.y);if(p.i)p.i=[Math.round(p.i[0]),Math.round(p.i[1])];if(p.o)p.o=[Math.round(p.o[0]),Math.round(p.o[1])]})})}
function hdfSplit(c,i,t){var s=hdfSeg(c,i),L=function(a,b){return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]};
 if(!s.cub){var m=L(s.p0,s.p3);c.pts.splice(i+1,0,{x:m[0],y:m[1],i:null,o:null,s:0});return i+1}
 var p01=L(s.p0,s.c1),p12=L(s.c1,s.c2),p23=L(s.c2,s.p3),p012=L(p01,p12),p123=L(p12,p23),m2=L(p012,p123);
 s.a.o=p01;s.b.i=p23;c.pts.splice(i+1,0,{x:m2[0],y:m2[1],i:p012,o:p123,s:1});return i+1}
function hdfNearSeg(cs,x,y,tol){var best=null,bd=tol,ci,i,k;for(ci=0;ci<cs.length;ci++){var c=cs[ci],sg=hdfNSeg(c);for(i=0;i<sg;i++){var s=hdfSeg(c,i),N=s.cub?24:1;for(k=0;k<N;k++){var a=s.cub?hdfBz(s,k/N):s.p0,b=s.cub?hdfBz(s,(k+1)/N):s.p3,dx=b[0]-a[0],dy=b[1]-a[1],L2=dx*dx+dy*dy,u=L2?Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/L2)):0,px=a[0]+dx*u,py=a[1]+dy*u,d=Math.hypot(px-x,py-y);if(d<bd){bd=d;best={c:ci,i:i,t:(k+u)/N}}}}}return best}
function hdfRDP(p,eps){if(p.length<3)return p;var a=p[0],b=p[p.length-1],dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy),mx=0,mi=0,i;for(i=1;i<p.length-1;i++){var d=L?Math.abs(dy*p[i][0]-dx*p[i][1]+b[0]*a[1]-b[1]*a[0])/L:Math.hypot(p[i][0]-a[0],p[i][1]-a[1]);if(d>mx){mx=d;mi=i}}if(mx>eps){var l=hdfRDP(p.slice(0,mi+1),eps),r=hdfRDP(p.slice(mi),eps);return l.slice(0,-1).concat(r)}return[a,b]}
var HDFK=0.5523;
function hdfPt(x,y,i,o,s){return{x:x,y:y,i:i||null,o:o||null,s:s?1:0}}
function hdfRectC(x0,y0,x1,y1){var l=Math.min(x0,x1),r=Math.max(x0,x1),b=Math.min(y0,y1),t=Math.max(y0,y1);return{closed:1,pts:[hdfPt(l,t),hdfPt(r,t),hdfPt(r,b),hdfPt(l,b)]}}
function hdfOvalC(x0,y0,x1,y1){var cx=(x0+x1)/2,cy=(y0+y1)/2,rx=Math.abs(x1-x0)/2,ry=Math.abs(y1-y0)/2,k=HDFK;return{closed:1,pts:[hdfPt(cx,cy+ry,[cx-k*rx,cy+ry],[cx+k*rx,cy+ry],1),hdfPt(cx+rx,cy,[cx+rx,cy+k*ry],[cx+rx,cy-k*ry],1),hdfPt(cx,cy-ry,[cx+k*rx,cy-ry],[cx-k*rx,cy-ry],1),hdfPt(cx-rx,cy,[cx-rx,cy-k*ry],[cx-rx,cy+k*ry],1)]}}
function hdfCapsule(p,q,r){var dx=q[0]-p[0],dy=q[1]-p[1],L=Math.hypot(dx,dy);if(L<1)return hdfOvalC(p[0]-r,p[1]-r,p[0]+r,p[1]+r);var th=Math.atan2(dy,dx),k=HDFK*r,A=function(c,a){return[c[0]+r*Math.cos(a),c[1]+r*Math.sin(a)]},T=function(a){return[k*Math.sin(a),-k*Math.cos(a)]},
 mk=function(c,a,hi,ho){var b=A(c,a),tg=T(a);return hdfPt(b[0],b[1],hi?[b[0]-tg[0],b[1]-tg[1]]:null,ho?[b[0]+tg[0],b[1]+tg[1]]:null,hi&&ho)};
 return{closed:1,pts:[mk(p,th+Math.PI/2,1,0),mk(q,th+Math.PI/2,0,1),mk(q,th,1,1),mk(q,th-Math.PI/2,1,0),mk(p,th-Math.PI/2,0,1),mk(p,th-Math.PI,1,1)]}}
/* ---- v2-132 geometry: vector maths, curve fitting, boolean engine, offset/stroke, node helpers (own code, no libraries) ---- */
function hdfSub(a,b){return[a[0]-b[0],a[1]-b[1]]}
function hdfAddv(a,b){return[a[0]+b[0],a[1]+b[1]]}
function hdfMul(a,k){return[a[0]*k,a[1]*k]}
function hdfDot(a,b){return a[0]*b[0]+a[1]*b[1]}
function hdfCrs(a,b){return a[0]*b[1]-a[1]*b[0]}
function hdfLen(a){return Math.hypot(a[0],a[1])}
function hdfDst(a,b){return Math.hypot(a[0]-b[0],a[1]-b[1])}
function hdfNrm(a){var l=Math.hypot(a[0],a[1]);return l>1e-12?[a[0]/l,a[1]/l]:[0,0]}
function hdfLerp(a,b,t){return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
function hdfClone(o){return JSON.parse(JSON.stringify(o))}
function hdfXY1(p){return[p.x,p.y]}
/* ---- cubic helpers ---- */
function hdfBzSplit(s,t){var a=hdfLerp(s[0],s[1],t),b=hdfLerp(s[1],s[2],t),c=hdfLerp(s[2],s[3],t),d=hdfLerp(a,b,t),e=hdfLerp(b,c,t),f=hdfLerp(d,e,t);return[[s[0],a,d,f],[f,e,c,s[3]]]}
function hdfBzSub(s,t0,t1){var r=s;if(t0>0)r=hdfBzSplit(r,t0)[1];if(t1<1){var u=(t1-t0)/(1-t0);r=hdfBzSplit(r,u)[0]}return r}
function hdfBzAt(b,t){var u=1-t,A=u*u*u,B=3*u*u*t,C=3*u*t*t,E=t*t*t;return[A*b[0][0]+B*b[1][0]+C*b[2][0]+E*b[3][0],A*b[0][1]+B*b[1][1]+C*b[2][1]+E*b[3][1]]}
function hdfBzD1(b,t){var u=1-t;return[3*(u*u*(b[1][0]-b[0][0])+2*u*t*(b[2][0]-b[1][0])+t*t*(b[3][0]-b[2][0])),3*(u*u*(b[1][1]-b[0][1])+2*u*t*(b[2][1]-b[1][1])+t*t*(b[3][1]-b[2][1]))]}
function hdfBzD2(b,t){var u=1-t;return[6*(u*(b[2][0]-2*b[1][0]+b[0][0])+t*(b[3][0]-2*b[2][0]+b[1][0])),6*(u*(b[2][1]-2*b[1][1]+b[0][1])+t*(b[3][1]-2*b[2][1]+b[1][1]))]}
function hdfExtT(s){var ts=[],k;for(k=0;k<2;k++){var p0=s[0][k],p1=s[1][k],p2=s[2][k],p3=s[3][k],a=-p0+3*p1-3*p2+p3,b=2*(p0-2*p1+p2),c=p1-p0;
 if(Math.abs(a)<1e-9){if(Math.abs(b)>1e-9){var t=-c/b;if(t>.002&&t<.998)ts.push(t)}}
 else{var d=b*b-4*a*c;if(d>=0){var q=Math.sqrt(d);[(-b+q)/(2*a),(-b-q)/(2*a)].forEach(function(t2){if(t2>.002&&t2<.998)ts.push(t2)})}}}
 ts.sort(function(x,y){return x-y});return ts.filter(function(t3,i){return i==0||t3-ts[i-1]>.002})}
function hdfTBox(cs){var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;function add(p){if(p[0]<x0)x0=p[0];if(p[0]>x1)x1=p[0];if(p[1]<y0)y0=p[1];if(p[1]>y1)y1=p[1]}
 cs.forEach(function(c){if(!c.pts.length)return;c.pts.forEach(function(p){add([p.x,p.y])});var sg=hdfNSeg(c),i;for(i=0;i<sg;i++){var s=hdfSeg(c,i);if(s.cub)hdfExtT([s.p0,s.c1,s.c2,s.p3]).forEach(function(t){add(hdfBz(s,t))})}});return x1<x0?null:{x0:x0,y0:y0,x1:x1,y1:y1}}
function hdfSegLen(s){return s.cub?hdfDst(s.p0,s.c1)+hdfDst(s.c1,s.c2)+hdfDst(s.c2,s.p3):hdfDst(s.p0,s.p3)}
/* ---- curve fitting (least-squares cubic fit with Newton re-parametrisation) ---- */
function hdfChord(P,a,b){var u=[0],i;for(i=a+1;i<=b;i++)u.push(u[u.length-1]+hdfDst(P[i],P[i-1]));var L=u[u.length-1];if(L<1e-12)L=1;return u.map(function(v){return v/L})}
function hdfGenBez(P,a,b,u,t1,t2){var n=b-a+1,p0=P[a],p3=P[b],C00=0,C01=0,C11=0,X0=0,X1=0,i;
 for(i=0;i<n;i++){var t=u[i],mt=1-t,b0=mt*mt*mt,b1=3*mt*mt*t,b2=3*mt*t*t,b3=t*t*t,A1=hdfMul(t1,b1),A2=hdfMul(t2,b2);
  C00+=hdfDot(A1,A1);C01+=hdfDot(A1,A2);C11+=hdfDot(A2,A2);
  var tmp=hdfSub(P[a+i],hdfAddv(hdfMul(p0,b0+b1),hdfMul(p3,b2+b3)));X0+=hdfDot(A1,tmp);X1+=hdfDot(A2,tmp)}
 var det=C00*C11-C01*C01,a1=0,a2=0,seg=hdfDst(p0,p3),eps=1e-6*seg;
 if(Math.abs(det)>1e-12){a1=(X0*C11-X1*C01)/det;a2=(C00*X1-C01*X0)/det}
 if(!(a1>=eps&&a2>=eps)){a1=a2=seg/3}
 return[p0,hdfAddv(p0,hdfMul(t1,a1)),hdfAddv(p3,hdfMul(t2,a2)),p3]}
function hdfReparam(P,a,b,u,bz){var out=[],i;for(i=0;i<u.length;i++){var t=u[i],q=hdfBzAt(bz,t),d1=hdfBzD1(bz,t),d2=hdfBzD2(bz,t),dx=q[0]-P[a+i][0],dy=q[1]-P[a+i][1],num=dx*d1[0]+dy*d1[1],den=d1[0]*d1[0]+d1[1]*d1[1]+dx*d2[0]+dy*d2[1],nt=Math.abs(den)>1e-12?t-num/den:t;out.push(Math.max(0,Math.min(1,nt)))}out[0]=0;out[out.length-1]=1;return out}
function hdfMaxErr(P,a,b,bz,u){var mx=0,mi=Math.floor((a+b)/2),i;for(i=1;i<u.length-1;i++){var q=hdfBzAt(bz,u[i]),dx=q[0]-P[a+i][0],dy=q[1]-P[a+i][1],d=dx*dx+dy*dy;if(d>=mx){mx=d;mi=a+i}}return{e:mx,i:mi}}
function hdfCtan(P,i){var v1=hdfSub(P[i-1],P[i]),v2=hdfSub(P[i],P[i+1]);return hdfNrm(hdfMul(hdfAddv(v1,v2),.5))}
function hdfFitRec(P,a,b,t1,t2,err,out,dep){var n=b-a+1,e2=err*err;
 if(n==2){var d=hdfDst(P[a],P[b])/3;out.push([P[a],hdfAddv(P[a],hdfMul(t1,d)),hdfAddv(P[b],hdfMul(t2,d)),P[b]]);return}
 var u=hdfChord(P,a,b),bz=hdfGenBez(P,a,b,u,t1,t2),r=hdfMaxErr(P,a,b,bz,u),k;
 if(r.e<e2){out.push(bz);return}
 if(r.e<e2*16){for(k=0;k<5;k++){u=hdfReparam(P,a,b,u,bz);bz=hdfGenBez(P,a,b,u,t1,t2);r=hdfMaxErr(P,a,b,bz,u);if(r.e<e2){out.push(bz);return}}}
 if(dep>48||n<4){out.push(bz);return}
 var m=Math.max(a+1,Math.min(b-1,r.i)),tc=hdfCtan(P,m);
 hdfFitRec(P,a,m,t1,tc,err,out,dep+1);hdfFitRec(P,m,b,hdfMul(tc,-1),t2,err,out,dep+1)}
function hdfStraight(b){var ch=hdfSub(b[3],b[0]),L=hdfLen(ch);if(L<1e-6)return hdfDst(b[0],b[1])<.35&&hdfDst(b[3],b[2])<.35;var n=[-ch[1]/L,ch[0]/L];return Math.abs(hdfDot(hdfSub(b[1],b[0]),n))<.35&&Math.abs(hdfDot(hdfSub(b[2],b[0]),n))<.35}
function hdfBzToC(bzs,closed){var pts=[],i,m=bzs.length;if(!m)return null;
 for(i=0;i<m;i++){bzs[i]._l=hdfStraight(bzs[i]);pts.push(hdfPt(bzs[i][0][0],bzs[i][0][1],null,bzs[i]._l?null:bzs[i][1],0))}
 for(i=0;i<m;i++){var b=bzs[i];if(i==m-1&&!closed)pts.push(hdfPt(b[3][0],b[3][1],b._l?null:b[2],null,0));else pts[(i+1)%m].i=b._l?null:b[2]}
 pts.forEach(function(p){if(p.i&&p.o){var a=hdfNrm(hdfSub([p.x,p.y],p.i)),c=hdfNrm(hdfSub(p.o,[p.x,p.y]));if(hdfCrs(a,c)>-.03&&hdfCrs(a,c)<.03&&hdfDot(a,c)>0)p.s=1}});
 return{closed:closed?1:0,pts:pts}}
function hdfCornerFlags(Q,closed,deg){var n=Q.length,K=[],i,cs=Math.cos(deg*Math.PI/180);for(i=0;i<n;i++){if(!closed&&(i==0||i==n-1)){K.push(1);continue}var a=hdfSub(Q[i],Q[(i+n-1)%n]),b=hdfSub(Q[(i+1)%n],Q[i]),la=hdfLen(a),lb=hdfLen(b);K.push(la<1e-9||lb<1e-9?0:(hdfDot(a,b)/(la*lb)<cs?1:0))}return K}
/* P: polyline [[x,y]..]; K: optional corner flags; returns contour or null */
function hdfFitPoly(P,closed,err,cornerDeg,K){var Q=[],KF=[],i;
 for(i=0;i<P.length;i++){if(Q.length&&hdfDst(Q[Q.length-1],P[i])<1e-6){if(K&&K[i])KF[KF.length-1]=1;continue}Q.push(P[i]);KF.push(K&&K[i]?1:0)}
 if(closed&&Q.length>1&&hdfDst(Q[0],Q[Q.length-1])<1e-6){Q.pop();if(KF.pop())KF[0]=1}
 var n=Q.length;if(n<2||(closed&&n<3))return null;
 if(!K)KF=hdfCornerFlags(Q,closed,cornerDeg||35);
 var out=[],bz=[];
 function run(W,s,e,t1,t2){if(e-s==1){var d=hdfDst(W[s],W[e])/3;out.push([W[s],hdfAddv(W[s],hdfMul(t1,d)),hdfAddv(W[e],hdfMul(t2,d)),W[e]])}else hdfFitRec(W,s,e,t1,t2,err,out,0)}
 if(!closed){var br=[0],j;for(j=1;j<n-1;j++)if(KF[j])br.push(j);br.push(n-1);
  for(j=0;j<br.length-1;j++){var s0=br[j],e0=br[j+1];run(Q,s0,e0,hdfNrm(hdfSub(Q[s0+1],Q[s0])),hdfNrm(hdfSub(Q[e0-1],Q[e0])))}
  return hdfBzToC(out,false)}
 var b0=-1;for(i=0;i<n;i++)if(KF[i]){b0=i;break}
 if(b0<0){var W=Q.concat([Q[0]]),tf=hdfNrm(hdfSub(Q[1],Q[n-1]));run(W,0,n,tf,hdfMul(tf,-1));return hdfBzToC(out,true)}
 var R=Q.slice(b0).concat(Q.slice(0,b0)),KR=KF.slice(b0).concat(KF.slice(0,b0)),W2=R.concat([R[0]]),br2=[],j2;
 for(j2=0;j2<n;j2++)if(KR[j2])br2.push(j2);br2.push(n);
 for(j2=0;j2<br2.length-1;j2++){var s1=br2[j2],e1=br2[j2+1];run(W2,s1,e1,hdfNrm(hdfSub(W2[s1+1],W2[s1])),hdfNrm(hdfSub(W2[e1-1],W2[e1])))}
 return hdfBzToC(out,true)}
/* ---- dense sampling of a contour (with corner flags taken from real anchors) ---- */
function hdfCornerAt(c,i){var n=c.pts.length,p=c.pts[i];if(!c.closed&&(i==0||i==n-1))return true;var pr=c.pts[(i+n-1)%n],nx=c.pts[(i+1)%n],P=[p.x,p.y],din=p.i&&hdfDst(p.i,P)>1e-6?hdfSub(P,p.i):hdfSub(P,[pr.x,pr.y]),dout=p.o&&hdfDst(p.o,P)>1e-6?hdfSub(p.o,P):hdfSub([nx.x,nx.y],P),l1=hdfLen(din),l2=hdfLen(dout);if(l1<1e-6||l2<1e-6)return true;return hdfDot(din,dout)/(l1*l2)<Math.cos(12*Math.PI/180)}
function hdfDense(c,step){var P=[],K=[],n=c.pts.length,sg=hdfNSeg(c),i,k;
 for(i=0;i<sg;i++){var s=hdfSeg(c,i);P.push(s.p0);K.push(hdfCornerAt(c,i)?1:0);
  if(s.cub){var m=Math.max(4,Math.min(80,Math.ceil(hdfSegLen(s)/(step||8))));for(k=1;k<m;k++){P.push(hdfBz(s,k/m));K.push(0)}}}
 if(!c.closed&&n){P.push([c.pts[n-1].x,c.pts[n-1].y]);K.push(1)}return{P:P,K:K}}
function hdfLap(P,K,closed,f){var n=P.length,out=[],i;for(i=0;i<n;i++){if(K[i]||(!closed&&(i==0||i==n-1))){out.push(P[i]);continue}var a=P[(i+n-1)%n],b=P[(i+1)%n];out.push([P[i][0]+f*((a[0]+b[0])/2-P[i][0]),P[i][1]+f*((a[1]+b[1])/2-P[i][1])])}return out}
function hdfSmoothC(c,passes,tol){var d=hdfDense(c,4),P=d.P,k;for(k=0;k<passes;k++){P=hdfLap(P,d.K,c.closed,.5);P=hdfLap(P,d.K,c.closed,-.53)}return hdfFitPoly(P,!!c.closed,tol,0,d.K)}
function hdfSimplifyC(c,tol){var d=hdfDense(c,6);return hdfFitPoly(d.P,!!c.closed,tol,0,d.K)}
/* ---- node helpers ---- */
function hdfExtremes(c){var added=0,i=0;while(i<hdfNSeg(c)){var s=hdfSeg(c,i),seg=i;if(s.cub){var ts=hdfExtT([s.p0,s.c1,s.c2,s.p3]),prev=0;ts.forEach(function(t){seg=hdfSplit(c,seg,(t-prev)/(1-prev));prev=t;added++})}i=seg+1}return added}
function hdfSyncH(p,w){var oth=w=='i'?'o':'i';if(!p[w])return;var P=[p.x,p.y];if(p.s==2){p[oth]=[2*p.x-p[w][0],2*p.y-p[w][1]]}else if(p.s==1||p.s==3){if(p[oth]){var L=hdfDst(p[oth],P),v=hdfNrm(hdfSub(P,p[w]));p[oth]=[p.x+v[0]*L,p.y+v[1]*L]}else p[oth]=[2*p.x-p[w][0],2*p.y-p[w][1]]}}
function hdfAutoC(c){var n=c.pts.length,i,pass;for(pass=0;pass<2;pass++)for(i=0;i<n;i++){var p=c.pts[i];if(p.s!=3)continue;var hp=c.closed||i>0,hn=c.closed||i<n-1,pr=c.pts[(i+n-1)%n],nx=c.pts[(i+1)%n],P=[p.x,p.y];
 if(hp&&hn){if(pass)continue;var tx=nx.x-pr.x,ty=nx.y-pr.y,tl=Math.hypot(tx,ty)||1,l1=Math.hypot(p.x-pr.x,p.y-pr.y)/3,l2=Math.hypot(nx.x-p.x,nx.y-p.y)/3;p.i=[p.x-tx/tl*l1,p.y-ty/tl*l1];p.o=[p.x+tx/tl*l2,p.y+ty/tl*l2]}
 else if(pass&&hn){var tg=nx.i||[nx.x,nx.y];p.i=null;p.o=hdfLerp(P,tg,1/3)}
 else if(pass&&hp){var tg2=pr.o||[pr.x,pr.y];p.o=null;p.i=hdfLerp(P,tg2,1/3)}}}
function hdfSetType(c,i,ty){var p=c.pts[i],n=c.pts.length,P=[p.x,p.y],pr=c.pts[(i+n-1)%n],nx=c.pts[(i+1)%n],hp=c.closed||i>0,hn=c.closed||i<n-1;
 if(ty==0){p.s=0;return}
 if(ty==3){p.s=3;hdfAutoC(c);return}
 var Ti=p.i&&hdfDst(p.i,P)>1e-6,To=p.o&&hdfDst(p.o,P)>1e-6,li,lo,T;
 if(Ti&&To){T=hdfNrm(hdfAddv(hdfNrm(hdfSub(p.o,P)),hdfNrm(hdfSub(P,p.i))));li=hdfDst(p.i,P);lo=hdfDst(p.o,P)}
 else if(Ti){T=hdfNrm(hdfSub(P,p.i));li=lo=hdfDst(p.i,P)}
 else if(To){T=hdfNrm(hdfSub(p.o,P));li=lo=hdfDst(p.o,P)}
 else{var a=hp?[pr.x,pr.y]:P,b=hn?[nx.x,nx.y]:P;T=hdfNrm(hdfSub(b,a));li=hp?hdfDst(P,[pr.x,pr.y])/3:0;lo=hn?hdfDst(P,[nx.x,nx.y])/3:0}
 if(!(T[0]||T[1])){p.s=ty;return}
 if(ty==2){var m=(li+lo)/2;li=lo=m}
 p.i=hp&&li>0?[p.x-T[0]*li,p.y-T[1]*li]:null;p.o=hn&&lo>0?[p.x+T[0]*lo,p.y+T[1]*lo]:null;p.s=ty}
function hdfCurveDrag(c,i,t,dx,dy){var s=hdfSeg(c,i),a=s.a,b=s.b;if(!s.cub){a.o=hdfLerp(s.p0,s.p3,1/3);b.i=hdfLerp(s.p0,s.p3,2/3)}
 var tt=Math.max(.12,Math.min(.88,t)),w1=3*(1-tt)*(1-tt)*tt,w2=3*(1-tt)*tt*tt,den=w1*(1-tt)+w2*tt,k1=(1-tt)/den,k2=tt/den;
 a.o=[a.o[0]+dx*k1,a.o[1]+dy*k1];b.i=[b.i[0]+dx*k2,b.i[1]+dy*k2];
 if(a.s==3)a.s=1;if(b.s==3)b.s=1;if(a.i&&a.s)hdfSyncH(a,'o');if(b.o&&b.s)hdfSyncH(b,'i')}
function hdfDelNode(c,i){var n=c.pts.length;if(n<=(c.closed?3:2))return false;var end=!c.closed&&(i==0||i==n-1);
 if(end){c.pts.splice(i,1);return true}
 var ia=(i+n-1)%n,ic=(i+1)%n,a=c.pts[ia],cn=c.pts[ic],s1=hdfSeg(c,ia),s2=hdfSeg(c,i);
 if(s1.cub||s2.cub){var P=[],k,m=14;for(k=0;k<=m;k++)P.push(s1.cub?hdfBz(s1,k/m):hdfLerp(s1.p0,s1.p3,k/m));for(k=1;k<=m;k++)P.push(s2.cub?hdfBz(s2,k/m):hdfLerp(s2.p0,s2.p3,k/m));
  var t1=a.o&&hdfDst(a.o,[a.x,a.y])>1e-6?hdfNrm(hdfSub(a.o,[a.x,a.y])):hdfNrm(hdfSub(P[1],P[0])),t2=cn.i&&hdfDst(cn.i,[cn.x,cn.y])>1e-6?hdfNrm(hdfSub(cn.i,[cn.x,cn.y])):hdfNrm(hdfSub(P[P.length-2],P[P.length-1])),u=hdfChord(P,0,P.length-1),bz=hdfGenBez(P,0,P.length-1,u,t1,t2),r;
  for(r=0;r<3;r++){u=hdfReparam(P,0,P.length-1,u,bz);bz=hdfGenBez(P,0,P.length-1,u,t1,t2)}
  a.o=hdfStraight(bz)?null:bz[1];cn.i=hdfStraight(bz)?null:bz[2]}
 c.pts.splice(i,1);return true}
function hdfBreakAt(c,i){var n=c.pts.length,cp=hdfClone(c.pts);
 if(c.closed){var rot=cp.slice(i).concat(cp.slice(0,i)),f=rot[0],l=hdfClone(f);l.o=null;f.i=null;if(f.s==3)f.s=0;if(l.s==3)l.s=0;rot.push(l);return[{closed:0,pts:rot}]}
 if(i<=0||i>=n-1)return[c];var A=cp.slice(0,i+1),B=cp.slice(i),la=A[A.length-1];la.o=null;B[0].i=null;if(la.s==3)la.s=0;if(B[0].s==3)B[0].s=0;return[{closed:0,pts:A},{closed:0,pts:B}]}
function hdfRevC(c){var o=hdfClone(c);hdfRev(o);return o}
function hdfJoin2(a,b){var A=a.pts,B=b.pts,ds=[[hdfDst(hdfXY1(A[A.length-1]),hdfXY1(B[0])),0,0],[hdfDst(hdfXY1(A[A.length-1]),hdfXY1(B[B.length-1])),0,1],[hdfDst(hdfXY1(A[0]),hdfXY1(B[0])),1,0],[hdfDst(hdfXY1(A[0]),hdfXY1(B[B.length-1])),1,1]];
 ds.sort(function(x,y){return x[0]-y[0]});var best=ds[0],ca=hdfClone(a),cb=hdfClone(b);if(best[1])hdfRev(ca);if(best[2])hdfRev(cb);
 var la=ca.pts[ca.pts.length-1],fb=cb.pts[0],pts;
 if(best[0]<.6){la.o=fb.o;la.s=(la.i&&la.o)?1:0;pts=ca.pts.concat(cb.pts.slice(1))}else pts=ca.pts.concat(cb.pts);
 return{closed:0,pts:pts}}
function hdfCloseC(c){var o=hdfClone(c),n=o.pts.length;if(n<2)return o;var f=o.pts[0],l=o.pts[n-1];if(n>2&&hdfDst([f.x,f.y],[l.x,l.y])<.6){f.i=l.i;o.pts.pop();f.s=(f.i&&f.o)?1:0}o.closed=1;hdfOrient(o);return o}
/* ---- shapes ---- */
function hdfRRectC(x0,y0,x1,y1,r){var l=Math.min(x0,x1),rr=Math.max(x0,x1),b=Math.min(y0,y1),t=Math.max(y0,y1),m=Math.min((rr-l)/2,(t-b)/2);r=Math.max(0,Math.min(r,m));if(r<1)return hdfRectC(x0,y0,x1,y1);var k=r*(1-HDFK);
 return{closed:1,pts:[hdfPt(l+r,t,[l+k,t],null,0),hdfPt(rr-r,t,null,[rr-k,t],0),hdfPt(rr,t-r,[rr,t-k],null,0),hdfPt(rr,b+r,null,[rr,b+k],0),hdfPt(rr-r,b,[rr-k,b],null,0),hdfPt(l+r,b,null,[l+k,b],0),hdfPt(l,b+r,[l,b+k],null,0),hdfPt(l,t-r,null,[l,t-k],0)]}}
function hdfPolyC(cx,cy,r,rot,n,inner){var pts=[],i,tot=inner?n*2:n;for(i=0;i<tot;i++){var a=rot-i*2*Math.PI/tot,rr=inner&&i%2?r*inner:r;pts.push(hdfPt(cx+rr*Math.cos(a),cy+rr*Math.sin(a)))}return{closed:1,pts:pts}}
/* ---- boolean engine: split all edges at crossings, classify by winding probes, rebuild loops ---- */
function hdfPieces(c,fl){var out=[],sg=hdfNSeg(c),i,k;for(i=0;i<sg;i++){var s=hdfSeg(c,i);if(!s.cub){out.push({seg:i,t0:0,t1:1,a:s.p0,b:s.p3})}else{var m=Math.max(6,Math.min(120,Math.ceil(Math.sqrt(hdfSegLen(s))*fl))),prev=s.p0;for(k=1;k<=m;k++){var q=k==m?s.p3:hdfBz(s,k/m);out.push({seg:i,t0:(k-1)/m,t1:k/m,a:prev,b:q});prev=q}}}return out}
function hdfWind(pl,x,y){var w=0,n=pl.v.length,V=pl.v,i,a,b;if(x<pl.x0||x>pl.x1||y<pl.y0||y>pl.y1)return 0;for(i=0;i<n;i++){a=V[i];b=V[(i+1)%n];if(a[1]<=y){if(b[1]>y&&((b[0]-a[0])*(y-a[1])-(x-a[0])*(b[1]-a[1]))>0)w++}else if(b[1]<=y&&((b[0]-a[0])*(y-a[1])-(x-a[0])*(b[1]-a[1]))<0)w--}return w}
function hdfBool(ops,pred){var E=[],gid=0,starts=[],ends=[];
 ops.forEach(function(op,o){op.pl=[];op.cs.forEach(function(c,k){if(!c.closed||c.pts.length<2)return;var pcs=hdfPieces(c,1.1);if(pcs.length<2)return;var v=pcs.map(function(p){return p.a}),x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;v.forEach(function(q){if(q[0]<x0)x0=q[0];if(q[0]>x1)x1=q[0];if(q[1]<y0)y0=q[1];if(q[1]>y1)y1=q[1]});op.pl.push({v:v,x0:x0,y0:y0,x1:x1,y1:y1});starts[gid]=E.length;pcs.forEach(function(p){var lx=Math.min(p.a[0],p.b[0]),hx=Math.max(p.a[0],p.b[0]),ly=Math.min(p.a[1],p.b[1]),hy=Math.max(p.a[1],p.b[1]);E.push({o:o,c:k,g:gid,seg:p.seg,t0:p.t0,t1:p.t1,a:p.a,b:p.b,cuts:[],lx:lx-.02,hx:hx+.02,ly:ly-.02,hy:hy+.02})});ends[gid]=E.length-1;gid++})});
 var N=E.length,i,j,TOL=.01;if(!N)return[];
 for(i=0;i<N;i++){var e=E[i];for(j=i+1;j<N;j++){var f=E[j];if(f.lx>e.hx||f.hx<e.lx||f.ly>e.hy||f.hy<e.ly)continue;
  if(e.g==f.g&&(j==i+1||(i==starts[e.g]&&j==ends[e.g])))continue;
  var r=[e.b[0]-e.a[0],e.b[1]-e.a[1]],s=[f.b[0]-f.a[0],f.b[1]-f.a[1]],lr=hdfLen(r),ls=hdfLen(s);if(lr<1e-9||ls<1e-9)continue;
  var den=hdfCrs(r,s),qp=[f.a[0]-e.a[0],f.a[1]-e.a[1]];
  if(Math.abs(den)>1e-9*lr*ls){var t=hdfCrs(qp,s)/den,u=hdfCrs(qp,r)/den,te=TOL/lr,ue=TOL/ls;if(t<-te||t>1+te||u<-ue||u>1+ue)continue;
   var P;if(t<=te)P=e.a;else if(t>=1-te)P=e.b;else if(u<=ue)P=f.a;else if(u>=1-ue)P=f.b;else P=[e.a[0]+r[0]*t,e.a[1]+r[1]*t];
   if(t>te&&t<1-te)e.cuts.push({u:t,p:P});if(u>ue&&u<1-ue)f.cuts.push({u:u,p:P})}
  else{if(Math.abs(hdfCrs(qp,r))/lr>TOL)continue;var te2=TOL/lr,ue2=TOL/ls;[f.a,f.b].forEach(function(q){var tt=hdfDot(hdfSub(q,e.a),r)/(lr*lr);if(tt>te2&&tt<1-te2)e.cuts.push({u:tt,p:q})});[e.a,e.b].forEach(function(q){var uu=hdfDot(hdfSub(q,f.a),s)/(ls*ls);if(uu>ue2&&uu<1-ue2)f.cuts.push({u:uu,p:q})})}}}
 var nodes=[],grid={};
 function nid(p){var gx=Math.round(p[0]/.1),gy=Math.round(p[1]/.1),dx,dy,q;for(dx=-1;dx<=1;dx++)for(dy=-1;dy<=1;dy++){var l=grid[(gx+dx)+','+(gy+dy)];if(l)for(q=0;q<l.length;q++){var nd=nodes[l[q]];if(Math.abs(nd[0]-p[0])<.06&&Math.abs(nd[1]-p[1])<.06)return l[q]}}var id=nodes.length;nodes.push([p[0],p[1]]);var key=gx+','+gy;(grid[key]=grid[key]||[]).push(id);return id}
 var SE=[];
 E.forEach(function(e){e.cuts.sort(function(x,y){return x.u-y.u});var pts=[{u:0,p:e.a}].concat(e.cuts,[{u:1,p:e.b}]),k;for(k=0;k<pts.length-1;k++){var A=pts[k],B=pts[k+1],na=nid(A.p),nb=nid(B.p);if(na==nb)continue;SE.push({o:e.o,c:e.c,seg:e.seg,ta:e.t0+(e.t1-e.t0)*A.u,tb:e.t0+(e.t1-e.t0)*B.u,na:na,nb:nb,a:nodes[na],b:nodes[nb]})}});
 function inside(o,x,y){var op=ops[o],pl=op.pl,k;if(op.mode=='sum'){var w=0;for(k=0;k<pl.length;k++)w+=hdfWind(pl[k],x,y);return op.rule=='neg'?w<0:op.rule=='pos'?w>0:w!=0}for(k=0;k<pl.length;k++)if(hdfWind(pl[k],x,y)!=0)return true;return false}
 var keep=[],seen={};
 SE.forEach(function(s){var dx=s.b[0]-s.a[0],dy=s.b[1]-s.a[1],L=Math.hypot(dx,dy);if(L<1e-9)return;var nx=-dy/L,ny=dx/L,mx=(s.a[0]+s.b[0])/2,my=(s.a[1]+s.b[1])/2,ep=.003,il=[],ir=[],o;
  for(o=0;o<ops.length;o++){il.push(inside(o,mx+nx*ep,my+ny*ep));ir.push(inside(o,mx-nx*ep,my-ny*ep))}
  var fl=pred(il),fr=pred(ir);if(fl==fr)return;var from=fr?s.na:s.nb,to=fr?s.nb:s.na,key=from+'>'+to;if(seen[key])return;seen[key]=1;keep.push({from:from,to:to,s:s,rev:!fr})});
 var outm={};keep.forEach(function(k,ix){(outm[k.from]=outm[k.from]||[]).push(ix)});
 function dir(e){return hdfNrm(hdfSub(nodes[e.to],nodes[e.from]))}
 var used=[],loops=[];
 keep.forEach(function(k0,i0){if(used[i0])return;var seq=[i0],cur=i0,start=k0.from,ok=false,guard=0;used[i0]=1;
  while(guard++<200000){var e=keep[cur];if(e.to==start){ok=true;break}var cand=(outm[e.to]||[]).filter(function(q){return!used[q]});if(!cand.length)break;var best=cand[0];if(cand.length>1){var din=dir(e),bt=1e9;cand.forEach(function(q){var d2=dir(keep[q]),ang=Math.atan2(hdfCrs(din,d2),hdfDot(din,d2));if(ang<bt){bt=ang;best=q}})}used[best]=1;seq.push(best);cur=best}
  if(ok)loops.push(seq)});
 var res=[];
 loops.forEach(function(seq){var G=[];
  seq.forEach(function(ix){var k=keep[ix],s=k.s,ps=k.rev?s.tb:s.ta,pe=k.rev?s.ta:s.tb,last=G[G.length-1];
   if(last&&last.o==s.o&&last.c==s.c&&last.seg==s.seg&&last.rev==k.rev&&Math.abs(last.pe-ps)<1e-9&&last.to==k.from){last.pe=pe;last.to=k.to}else G.push({o:s.o,c:s.c,seg:s.seg,rev:k.rev,ps:ps,pe:pe,from:k.from,to:k.to})});
  if(G.length>1){var f=G[0],l=G[G.length-1];if(f.o==l.o&&f.c==l.c&&f.seg==l.seg&&f.rev==l.rev&&Math.abs(l.pe-f.ps)<1e-9&&l.to==f.from){l.pe=f.pe;l.to=f.to;G.shift()}}
  var pts=[];
  G.forEach(function(g){var src=ops[g.o].cs[g.c],sg=hdfSeg(src,g.seg),A=nodes[g.from],c1=null,c2=null;
   if(sg.cub){var lo=Math.min(g.ps,g.pe),hi=Math.max(g.ps,g.pe);if(hi-lo>1e-9){var sb=hdfBzSub([sg.p0,sg.c1,sg.c2,sg.p3],lo,hi);if(g.rev){c1=sb[2];c2=sb[1]}else{c1=sb[1];c2=sb[2]}}}
   var pt=hdfPt(A[0],A[1],null,c1,0);pt._c2=c2;pts.push(pt)});
  var m=pts.length;if(m<2)return;
  pts.forEach(function(p,k){p.i=pts[(k+m-1)%m]._c2||null});
  pts.forEach(function(p){delete p._c2;if(p.i&&p.o){var a=hdfNrm(hdfSub([p.x,p.y],p.i)),b=hdfNrm(hdfSub(p.o,[p.x,p.y]));if(Math.abs(hdfCrs(a,b))<.03&&hdfDot(a,b)>0)p.s=1}});
  var cc={closed:1,pts:pts};if(Math.abs(hdfArea(hdfFlat(cc,10)))<.5)return;res.push(cc)});
 return res}
function hdfDivide(sel){var pieces=[],i;if(!sel.length)return[];
 pieces.push({cs:[hdfClone(sel[0])]});
 for(i=1;i<sel.length;i++){var S=sel[i],np=[];
  pieces.forEach(function(P){var inter=hdfBool([{cs:P.cs,mode:'sum',rule:'nz'},{cs:[S],mode:'any'}],function(v){return v[0]&&v[1]}),diff=hdfBool([{cs:P.cs,mode:'sum',rule:'nz'},{cs:[S],mode:'any'}],function(v){return v[0]&&!v[1]});if(inter.length)np.push({cs:inter});if(diff.length)np.push({cs:diff})});
  var rem=hdfBool([{cs:[S],mode:'any'},{cs:sel.slice(0,i),mode:'any'}],function(v){return v[0]&&!v[1]});if(rem.length)np.push({cs:rem});pieces=np}
 var out=[];pieces.forEach(function(P){P.cs.forEach(function(c){out.push(c)})});return out}
/* ---- offset / stroke ---- */
function hdfPolyPts(P,closed){var Q=[],i;for(i=0;i<P.length;i++){if(Q.length&&hdfDst(Q[Q.length-1],P[i])<1e-6)continue;Q.push(P[i])}if(closed&&Q.length>1&&hdfDst(Q[0],Q[Q.length-1])<1e-6)Q.pop();return Q}
function hdfOffPoly(V,closed,d,join,ml){var Q=hdfPolyPts(V,closed),n=Q.length,out=[],ad=Math.abs(d),sg=d<0?-1:1,i;if(n<2)return out;
 var ne=closed?n:n-1,D=[],L=[];for(i=0;i<ne;i++){var a=Q[i],b=Q[(i+1)%n],dv=hdfSub(b,a);L.push(hdfLen(dv));D.push(hdfNrm(dv))}
 function nrmL(dv){return[-dv[1],dv[0]]}
 for(i=0;i<n;i++){var P=Q[i],hasIn=closed||i>0,hasOut=closed||i<n-1;
  if(!hasIn){var no=nrmL(D[i]);out.push([P[0]+no[0]*d,P[1]+no[1]*d]);continue}
  if(!hasOut){var ni=nrmL(D[i-1]);out.push([P[0]+ni[0]*d,P[1]+ni[1]*d]);continue}
  var d1=D[(i+n-1)%n],d2=D[i],l1=L[(i+n-1)%n],l2=L[i],n1=nrmL(d1),n2=nrmL(d2),cr=hdfCrs(d1,d2),dt=hdfDot(d1,d2);
  if(Math.abs(cr)<1e-5&&dt>0){out.push([P[0]+n1[0]*d,P[1]+n1[1]*d]);continue}
  var m1=[n1[0]*sg,n1[1]*sg],m2=[n2[0]*sg,n2[1]*sg];
  if(cr*d<0){
   if(join=='round'){var a1=Math.atan2(m1[1],m1[0]),da=Math.atan2(hdfCrs(m1,m2),hdfDot(m1,m2)),st=Math.max(1,Math.ceil(Math.abs(da)/(Math.PI/36))),k;for(k=0;k<=st;k++){var an=a1+da*k/st;out.push([P[0]+Math.cos(an)*ad,P[1]+Math.sin(an)*ad])}}
   else if(join=='miter'){var dm=hdfDot(m1,m2),ratio=Math.sqrt(2/(1+dm+1e-12));if(ratio<=(ml||4)){var mv=hdfMul(hdfAddv(m1,m2),1/(1+dm));out.push([P[0]+mv[0]*ad,P[1]+mv[1]*ad])}else{out.push([P[0]+m1[0]*ad,P[1]+m1[1]*ad]);out.push([P[0]+m2[0]*ad,P[1]+m2[1]*ad])}}
   else{out.push([P[0]+m1[0]*ad,P[1]+m1[1]*ad]);out.push([P[0]+m2[0]*ad,P[1]+m2[1]*ad])}}
  else{var th=Math.abs(cr)/(1+dt+1e-12);if(dt>0&&th*ad<=.5*Math.min(l1,l2)){var dm2=hdfDot(m1,m2),mv2=hdfMul(hdfAddv(m1,m2),1/(1+dm2));out.push([P[0]+mv2[0]*ad,P[1]+mv2[1]*ad])}else{out.push([P[0]+n1[0]*d,P[1]+n1[1]*d]);out.push([P[0],P[1]]);out.push([P[0]+n2[0]*d,P[1]+n2[1]*d])}}}
 return out}
function hdfPolyContour(P){return{closed:1,pts:P.map(function(q){return hdfPt(q[0],q[1])})}}
function hdfCleanFit(raws,rule,err,corner){var res=hdfBool([{cs:raws.map(hdfPolyContour),mode:'sum',rule:rule}],function(v){return v[0]}),out=[];
 res.forEach(function(c){var P=c.pts.map(function(p){return[p.x,p.y]});var f=hdfFitPoly(P,true,err||.6,corner||30);if(f&&f.pts.length>=2)out.push(f)});return out}
function hdfOffsetCs(cs,d,join,ml){var raws=[],ar=0;cs=hdfClone(cs.filter(function(c){return c.closed&&c.pts.length>=2}));hdfNest(cs);cs.forEach(function(c){if(!c.closed||c.pts.length<2)return;var dn=hdfDense(c,5);ar+=hdfArea(dn.P);var o=hdfOffPoly(dn.P,true,d,join||'round',ml||4);if(o.length>=3)raws.push(o)});
 if(!raws.length)return[];return hdfCleanFit(raws,ar<0?'neg':'pos',.6,30)}
function hdfStrokeC(c,w,cap,join,ml){var h=w/2,dn=hdfDense(c,5),P=hdfPolyPts(dn.P,!!c.closed),n=P.length;if(n<2||h<.5)return[];
 if(c.closed){var A=hdfOffPoly(P,true,h,join||'round',ml||4),B=hdfOffPoly(P,true,-h,join||'round',ml||4).reverse();return hdfCleanFit([A,B],'nz',.6,30)}
 var Lf=hdfOffPoly(P,false,h,join||'round',ml||4),Rv=hdfOffPoly(P,false,-h,join||'round',ml||4).reverse(),poly=Lf.slice(),k;
 var tE=hdfNrm(hdfSub(P[n-1],P[n-2])),nE=[-tE[1],tE[0]],tS=hdfNrm(hdfSub(P[1],P[0])),nS=[-tS[1],tS[0]],E=P[n-1],S=P[0];
 if(cap=='round'){var aE=Math.atan2(nE[1],nE[0]),aS=Math.atan2(-nS[1],-nS[0]);for(k=1;k<18;k++){var an=aE-Math.PI*k/18;poly.push([E[0]+Math.cos(an)*h,E[1]+Math.sin(an)*h])}poly=poly.concat(Rv);for(k=1;k<18;k++){var an2=aS-Math.PI*k/18;poly.push([S[0]+Math.cos(an2)*h,S[1]+Math.sin(an2)*h])}}
 else if(cap=='square'){poly.push([E[0]+nE[0]*h+tE[0]*h,E[1]+nE[1]*h+tE[1]*h]);poly.push([E[0]-nE[0]*h+tE[0]*h,E[1]-nE[1]*h+tE[1]*h]);poly=poly.concat(Rv);poly.push([S[0]-nS[0]*h-tS[0]*h,S[1]-nS[1]*h-tS[1]*h]);poly.push([S[0]+nS[0]*h-tS[0]*h,S[1]+nS[1]*h-tS[1]*h])}
 else poly=poly.concat(Rv);
 return hdfCleanFit([poly],'nz',.6,30)}
/* ---- convex hull (for brush sweeps) ---- */
function hdfHull(pts){var p=pts.slice().sort(function(a,b){return a[0]-b[0]||a[1]-b[1]}),n=p.length,h=[],i,t;if(n<3)return p;function cr(o,a,b){return(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0])}
 for(i=0;i<n;i++){while(h.length>=2&&cr(h[h.length-2],h[h.length-1],p[i])<=0)h.pop();h.push(p[i])}
 for(i=n-2,t=h.length+1;i>=0;i--){while(h.length>=t&&cr(h[h.length-2],h[h.length-1],p[i])<=0)h.pop();h.push(p[i])}h.pop();return h}
/* nib: [{x,y,k}] samples (k = pressure scale); a,b = ellipse radii; ang = nib angle (rad) */
function hdfBrushCs(S,a,b,ang,err){var ca=Math.cos(ang),sa=Math.sin(ang),N=20,E=[],i,j;
 for(j=0;j<N;j++){var ph=j*2*Math.PI/N;E.push([a*Math.cos(ph),b*Math.sin(ph)])}
 function ell(p){return E.map(function(q){var x=q[0]*p.k,y=q[1]*p.k;return[p.x+x*ca-y*sa,p.y+x*sa+y*ca]})}
 var polys=[];if(S.length==1)polys.push(hdfHull(ell(S[0])));
 for(i=0;i<S.length-1;i++)polys.push(hdfHull(ell(S[i]).concat(ell(S[i+1]))));
 polys=polys.filter(function(p){return p.length>=3}).map(function(p){return hdfArea(p)>0?p.slice().reverse():p});
 return hdfCleanFit(polys,'nz',err||.8,32)}
/* ---- cubic -> quadratic (TrueType) ---- */
function hdfQuads(p0,c1,c2,p3,out,d){var qx=(3*(c1[0]+c2[0])-(p0[0]+p3[0]))/4,qy=(3*(c1[1]+c2[1])-(p0[1]+p3[1]))/4,err=0,i,ts=[.25,.5,.75];
 for(i=0;i<3;i++){var t=ts[i],u=1-t,cx=u*u*u*p0[0]+3*u*u*t*c1[0]+3*u*t*t*c2[0]+t*t*t*p3[0],cy=u*u*u*p0[1]+3*u*u*t*c1[1]+3*u*t*t*c2[1]+t*t*t*p3[1],ax=u*u*p0[0]+2*u*t*qx+t*t*p3[0],ay=u*u*p0[1]+2*u*t*qy+t*t*p3[1];err=Math.max(err,Math.hypot(cx-ax,cy-ay))}
 if(err<=.6||d>=6){out.push([qx,qy,p3[0],p3[1]]);return}
 var L=function(a,b){return[(a[0]+b[0])/2,(a[1]+b[1])/2]},p01=L(p0,c1),p12=L(c1,c2),p23=L(c2,p3),p012=L(p01,p12),p123=L(p12,p23),m=L(p012,p123);
 hdfQuads(p0,p01,p012,m,out,d+1);hdfQuads(m,p123,p23,p3,out,d+1)}
function hdfTTContours(cs){var res=[];cs.forEach(function(c){var n=c.pts.length;if(n<3)return;var pts=[{x:c.pts[0].x,y:c.pts[0].y,on:1}],i;
 for(i=0;i<n;i++){var s=hdfSeg(c,i),last=(i==n-1);if(s.cub){var qs=[];hdfQuads(s.p0,s.c1,s.c2,s.p3,qs,0);qs.forEach(function(q,k){pts.push({x:q[0],y:q[1],on:0});if(!(last&&k==qs.length-1))pts.push({x:q[2],y:q[3],on:1})})}else if(!last)pts.push({x:s.p3[0],y:s.p3[1],on:1})}
 pts=pts.map(function(p){return{x:Math.max(-32000,Math.min(32000,Math.round(p.x))),y:Math.max(-32000,Math.min(32000,Math.round(p.y))),on:p.on}});
 var out=[];pts.forEach(function(p){var q=out[out.length-1];if(q&&q.on&&p.on&&q.x==p.x&&q.y==p.y)return;out.push(p)});
 while(out.length>1&&out[0].on&&out[out.length-1].on&&out[0].x==out[out.length-1].x&&out[0].y==out[out.length-1].y)out.pop();
 if(out.length>=3)res.push(out)});return res}
/* ---- binary writer ---- */
function hdfW(){var a=[];return{a:a,u8:function(v){a.push(v&255)},u16:function(v){a.push((v>>8)&255,v&255)},i16:function(v){v=v&65535;a.push(v>>8,v&255)},u32:function(v){a.push((v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255)},tag:function(s){for(var i=0;i<4;i++)a.push(s.charCodeAt(i)&255)},bytes:function(b){for(var i=0;i<b.length;i++)a.push(b[i])}}}
function hdfSum(a){var s=0,i,n=a.length;for(i=0;i<n;i+=4)s=(s+(((a[i]||0)*16777216)+((a[i+1]||0)<<16)+((a[i+2]||0)<<8)+(a[i+3]||0)))>>>0;return s>>>0}
function hdfPad(a){while(a.length%4)a.push(0);return a}
function hdfGlyphs(p){var cps=Object.keys(p.g).map(Number).filter(function(c){return c>0&&c<=0xFFFF&&c!=32}).sort(function(a,b){return a-b}),list=[],i;
 for(i=0;i<cps.length;i++){var g=p.g[cps[i]],tc=hdfTTContours(g.c||[]);if(tc.length)list.push({cp:cps[i],adv:Math.max(0,Math.round(g.a)),tc:tc})}
 var sp=p.g[32];list.unshift({cp:32,adv:sp&&sp.a!=null?Math.round(sp.a):300,tc:[]});list.sort(function(a,b){return a.cp-b.cp});
 var nd=[[{x:50,y:0,on:1},{x:50,y:700,on:1},{x:450,y:700,on:1},{x:450,y:0,on:1}],[{x:100,y:50,on:1},{x:400,y:50,on:1},{x:400,y:650,on:1},{x:100,y:650,on:1}]];
 return[{cp:-1,adv:500,tc:nd}].concat(list)}
function hdfTables(p){var G=hdfGlyphs(p),N=G.length,UPM=1000,asc=Math.round(p.asc),dsc=Math.round(p.desc),T={},gx0=1e9,gy0=1e9,gx1=-1e9,gy1=-1e9,maxPts=0,maxCtr=0,advMax=0,minL=1e9,minR=1e9,xExt=-1e9,i,j;
 var glyf=[],loca=[0],hm=hdfW(),sumAdv=0,cnt=0;
 G.forEach(function(g){var xs=[],ys=[],fl=[],ends=[],n=0;g.tc.forEach(function(c){c.forEach(function(q){xs.push(q.x);ys.push(q.y);fl.push(q.on?1:0)});n+=c.length;ends.push(n-1)});
  var bx0=0,by0=0,bx1=0,by1=0;if(n){bx0=Math.min.apply(null,xs);bx1=Math.max.apply(null,xs);by0=Math.min.apply(null,ys);by1=Math.max.apply(null,ys);
   gx0=Math.min(gx0,bx0);gy0=Math.min(gy0,by0);gx1=Math.max(gx1,bx1);gy1=Math.max(gy1,by1);maxPts=Math.max(maxPts,n);maxCtr=Math.max(maxCtr,g.tc.length);
   var w=hdfW();w.i16(g.tc.length);w.i16(bx0);w.i16(by0);w.i16(bx1);w.i16(by1);ends.forEach(function(e){w.u16(e)});w.u16(0);fl.forEach(function(f){w.u8(f)});var px=0,py=0;xs.forEach(function(x){w.i16(x-px);px=x});ys.forEach(function(y){w.i16(y-py);py=y});hdfPad(w.a);for(j=0;j<w.a.length;j++)glyf.push(w.a[j])}
  loca.push(glyf.length);hm.u16(g.adv);hm.i16(n?bx0:0);advMax=Math.max(advMax,g.adv);if(n){minL=Math.min(minL,bx0);minR=Math.min(minR,g.adv-bx1);xExt=Math.max(xExt,bx1)}if(g.cp>0){sumAdv+=g.adv;cnt++}});
 if(gx0>1e8){gx0=gy0=gx1=gy1=0}if(minL>1e8){minL=0;minR=0;xExt=0}
 var lc=hdfW();loca.forEach(function(o){lc.u32(o)});
 var now=Math.floor(Date.now()/1000)+2082844800,dt=function(w){w.u32(Math.floor(now/4294967296));w.u32(now>>>0)};
 var hd=hdfW();hd.u32(0x00010000);hd.u32(0x00010000);hd.u32(0);hd.u32(0x5F0F3CF5);hd.u16(3);hd.u16(UPM);dt(hd);dt(hd);hd.i16(gx0);hd.i16(Math.min(gy0,dsc));hd.i16(gx1);hd.i16(Math.max(gy1,asc));hd.u16(0);hd.u16(8);hd.i16(2);hd.i16(1);hd.i16(0);
 var hh=hdfW();hh.u32(0x00010000);hh.i16(asc);hh.i16(dsc);hh.i16(0);hh.u16(advMax);hh.i16(minL);hh.i16(minR);hh.i16(xExt);hh.i16(1);hh.i16(0);hh.i16(0);hh.i16(0);hh.i16(0);hh.i16(0);hh.i16(0);hh.i16(0);hh.u16(N);
 var mx=hdfW();mx.u32(0x00010000);mx.u16(N);mx.u16(maxPts);mx.u16(maxCtr);mx.u16(0);mx.u16(0);mx.u16(2);mx.u16(0);mx.u16(0);mx.u16(0);mx.u16(0);mx.u16(0);mx.u16(0);mx.u16(0);mx.u16(0);
 /* cmap format 4 */
 var cp=G.filter(function(g){return g.cp>0}).map(function(g,k){return{c:g.cp,gid:G.indexOf(g)}}),segs=[],s0=null;
 cp.forEach(function(e){if(s0&&e.c==s0.e+1&&e.gid==s0.g0+(e.c-s0.s)){s0.e=e.c}else{s0={s:e.c,e:e.c,g0:e.gid};segs.push(s0)}});segs.push({s:0xFFFF,e:0xFFFF,g0:0,end:1});
 var sc=segs.length,pw=1;while(pw*2<=sc)pw*=2;var cm=hdfW();cm.u16(0);cm.u16(2);cm.u16(0);cm.u16(3);cm.u32(20);cm.u16(3);cm.u16(1);cm.u32(20);
 cm.u16(4);cm.u16(16+8*sc);cm.u16(0);cm.u16(sc*2);cm.u16(pw*2);cm.u16(Math.log2(pw));cm.u16(sc*2-pw*2);segs.forEach(function(s){cm.u16(s.e)});cm.u16(0);segs.forEach(function(s){cm.u16(s.s)});segs.forEach(function(s){cm.u16(s.end?1:((s.g0-s.s)&0xFFFF))});segs.forEach(function(){cm.u16(0)});
 /* name */
 var fam=(p.fam||'HudaFont').replace(/[^\w \-]/g,'')||'HudaFont',ps=fam.replace(/\s+/g,'')||'HudaFont',recs=[[1,fam],[2,'Regular'],[3,ps+';Huda Font'],[4,fam],[5,'Version 1.000'],[6,ps]],nm=hdfW(),so=6+12*recs.length,str=[];
 nm.u16(0);nm.u16(recs.length);nm.u16(so);recs.forEach(function(r){var b=[],k;for(k=0;k<r[1].length;k++){var ch=r[1].charCodeAt(k);b.push(ch>>8,ch&255)}nm.u16(3);nm.u16(1);nm.u16(0x409);nm.u16(r[0]);nm.u16(b.length);nm.u16(str.length);b.forEach(function(x){str.push(x)})});nm.bytes(str);
 var ps3=hdfW();ps3.u32(0x00030000);ps3.u32(0);ps3.i16(-100);ps3.i16(50);ps3.u32(0);ps3.u32(0);ps3.u32(0);ps3.u32(0);ps3.u32(0);
 /* OS/2 v4 */
 var u1=0,u2=0,u3=0,u4=0,first=0xFFFF,last=0;cp.forEach(function(e){var c=e.c;if(c<=0x7F)u1|=1;else if(c<=0xFF)u1|=2;if(c>=0x0600&&c<=0x06FF)u1|=(1<<13);if(c>=0x0B80&&c<=0x0BFF)u3|=(1<<8);if(c<first)first=c;if(c>last)last=c});if(first>last){first=32;last=32}
 var os=hdfW();os.u16(4);os.i16(cnt?Math.round(sumAdv/cnt):500);os.u16(400);os.u16(5);os.u16(0);[650,600,0,75,650,600,0,350,50,300].forEach(function(v){os.i16(v)});os.i16(0);for(i=0;i<10;i++)os.u8(0);os.u32(u1>>>0);os.u32(u2);os.u32(u3>>>0);os.u32(u4);os.tag('HUDA');os.u16(0xC0);os.u16(first);os.u16(Math.min(last,0xFFFF));os.i16(asc);os.i16(dsc);os.i16(0);os.u16(Math.max(asc,gy1));os.u16(Math.abs(Math.min(dsc,gy0)));os.u32(1);os.u32(0);os.i16(Math.round(p.xh||500));os.i16(Math.round(p.cap||700));os.u16(0);os.u16(32);os.u16(1);
 T['OS/2']=os.a;T['cmap']=cm.a;T['glyf']=glyf.length?glyf:[0,0,0,0];T['head']=hd.a;T['hhea']=hh.a;T['hmtx']=hm.a;T['loca']=lc.a;T['maxp']=mx.a;T['name']=nm.a;T['post']=ps3.a;return T}
function hdfSfnt(T){var tags=Object.keys(T).sort(),n=tags.length,pw=1;while(pw*2<=n)pw*=2;var w=hdfW(),off=12+16*n,dir=[],body=[],hdOff=0;
 tags.forEach(function(tg){var d=T[tg].slice();var len=d.length;hdfPad(d);if(tg=='head')hdOff=off+body.length;dir.push({tg:tg,sum:hdfSum(d),off:off+body.length,len:len});d.forEach(function(b){body.push(b)})});
 w.u32(0x00010000);w.u16(n);w.u16(pw*16);w.u16(Math.log2(pw));w.u16(n*16-pw*16);dir.forEach(function(e){w.tag(e.tg);w.u32(e.sum);w.u32(e.off);w.u32(e.len)});w.bytes(body);
 var all=w.a,adj=(0xB1B0AFBA-hdfSum(all))>>>0;all[hdOff+8]=adj>>>24;all[hdOff+9]=(adj>>>16)&255;all[hdOff+10]=(adj>>>8)&255;all[hdOff+11]=adj&255;return new Uint8Array(all)}
function hdfTTF(p){return hdfSfnt(hdfTables(p))}
async function hdfDeflate(u8){var cs=new CompressionStream('deflate'),w=cs.writable.getWriter();w.write(u8);w.close();return new Uint8Array(await new Response(cs.readable).arrayBuffer())}
async function hdfWOFF(p){var T=hdfTables(p),tags=Object.keys(T).sort(),n=tags.length,ent=[],body=[],off=44+20*n,total=12+16*n,w=hdfW(),sfnt=hdfSfnt(T);
 for(var k=0;k<n;k++){var tg=tags[k],raw=new Uint8Array(T[tg]),z=await hdfDeflate(raw),use=z.length<raw.length?z:raw,pd=use.length;var arr=Array.from(use);hdfPad(arr);ent.push({tg:tg,off:off+body.length,cl:use.length,ol:raw.length,sum:hdfSum(hdfPad(T[tg].slice()))});arr.forEach(function(b){body.push(b)});total+=(raw.length+3)&~3}
 w.tag('wOFF');w.u32(0x00010000);w.u32(off+body.length);w.u16(n);w.u16(0);w.u32(total);w.u16(1);w.u16(0);w.u32(0);w.u32(0);w.u32(0);w.u32(0);w.u32(0);ent.forEach(function(e){w.tag(e.tg);w.u32(e.off);w.u32(e.cl);w.u32(e.ol);w.u32(e.sum)});w.bytes(body);return new Uint8Array(w.a)}
function hdfCount(p){var n=0;Object.keys(p.g).forEach(function(k){var g=p.g[k];if(g.c&&g.c.some(function(c){return c.pts.length>=3}))n++});return n}

/* ---- Huda Font: project storage ---- */
function hdfDefault(n){return{id:'f'+Date.now().toString(36)+Math.floor(Math.random()*999),name:'Huda Font '+(n||1),fam:'HudaFont',asc:800,desc:-200,xh:500,cap:700,sets:['ta','la','di'],extra:'',gd:{h:[],v:[]},g:{},ts:Date.now()}}
function hdfIdx(p){var L=S('hdfi',[]),ix=-1;L.forEach(function(e,i){if(e.id==p.id)ix=i});var e={id:p.id,name:p.name,ts:Date.now(),n:hdfCount(p)};if(ix>=0)L[ix]=e;else L.unshift(e);P('hdfi',L)}
function hdfSaveNow(){var p=HDF.p;Object.keys(p.g).forEach(function(k){var g=p.g[k];if(!(g.c&&g.c.length)&&g.a==hdfAdv(+k))delete p.g[k]});p.ts=Date.now();P('hdf_'+p.id,p);hdfIdx(p)}
function hdfSaveSoon(){clearTimeout(HDF._sv);HDF._sv=setTimeout(hdfSaveNow,500)}
function hdfG(cp){var g=HDF.p.g[cp];if(!g)g=HDF.p.g[cp]={a:hdfAdv(cp),c:[]};return g}
function hdfCps(){var p=HDF.p,seen={},out=[];function add(c){if(c>32&&!seen[c]){seen[c]=1;out.push(c)}}(p.sets||[]).forEach(function(s){(HDFSETS[s]||[]).forEach(add)});Array.from(p.extra||'').forEach(function(ch){add(ch.codePointAt(0))});Object.keys(p.g).forEach(function(k){add(+k)});return out}
function hdfHas(cp){var g=HDF.p.g[cp];return!!(g&&g.c&&g.c.some(function(c){return c.pts.length>=3}))}
function hdfRegister(){var p=HDF.p;return new Promise(function(ok){if(!hdfCount(p)){ok(false);return}try{var u=hdfTTF(p),ff=new FontFace('HudaMine',u.buffer);ff.load().then(function(){if(HDF.face){try{document.fonts.delete(HDF.face)}catch(e){}}document.fonts.add(ff);HDF.face=ff;HDF.err='';ok(true)},function(e){HDF.err=String((e&&e.message)||e);ok(false)})}catch(e2){HDF.err=String((e2&&e2.message)||e2);ok(false)}})}
function hdfEnsure(){try{hdfInit();return hdfRegister().then(function(){},function(){})}catch(e){return Promise.resolve()}}
/* ---- SVG helpers ---- */
function hdfSvgD(cs){var d='';cs.forEach(function(c){var n=c.pts.length;if(n<2)return;d+='M'+Math.round(c.pts[0].x)+' '+(-Math.round(c.pts[0].y));var sg=hdfNSeg(c),i;for(i=0;i<sg;i++){var s=hdfSeg(c,i);if(s.cub)d+='C'+Math.round(s.c1[0])+' '+(-Math.round(s.c1[1]))+' '+Math.round(s.c2[0])+' '+(-Math.round(s.c2[1]))+' '+Math.round(s.p3[0])+' '+(-Math.round(s.p3[1]));else d+='L'+Math.round(s.p3[0])+' '+(-Math.round(s.p3[1]))}if(c.closed)d+='Z'});return d}
function hdfThumb(g){if(!g||!g.c||!g.c.length)return'';return'<svg viewBox="-100 -900 1200 1200" aria-hidden="true"><path d="'+hdfSvgD(g.c)+'" fill="currentColor"/></svg>'}
function hdfParseSvg(d){var tk=String(d).match(/[a-zA-Z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g);if(!tk)return null;var i=0,cs=[],cur=null,x=0,y=0,sx=0,sy=0,cmd='',pc=null,pq=null,ok=true;
 function num(){var v=parseFloat(tk[i++]);if(isNaN(v))ok=false;return v}
 function mv(nx,ny){cur={closed:0,pts:[hdfPt(nx,ny)]};cs.push(cur);x=sx=nx;y=sy=ny}
 function ln(nx,ny){if(!cur)mv(x,y);cur.pts.push(hdfPt(nx,ny));x=nx;y=ny}
 function cu(a,b,c2,d2,e,f){if(!cur)mv(x,y);var l=cur.pts[cur.pts.length-1];l.o=[a,b];cur.pts.push(hdfPt(e,f,[c2,d2],null,0));pc=[c2,d2];x=e;y=f}
 while(i<tk.length&&ok){var t0=tk[i];if(/[a-zA-Z]/.test(t0)){cmd=t0;i++;if(cmd=='z'||cmd=='Z'){if(cur){cur.closed=1;x=sx;y=sy;cur=null}pc=pq=null;continue}}else if(!cmd){return null}
  var rel=cmd==cmd.toLowerCase(),C=cmd.toUpperCase(),ox=rel?x:0,oy=rel?y:0;
  if(C=='M'){mv(num()+ox,num()+oy);cmd=rel?'l':'L';pc=pq=null}
  else if(C=='L'){ln(num()+ox,num()+oy);pc=pq=null}
  else if(C=='H'){ln(num()+ox,y);pc=pq=null}
  else if(C=='V'){ln(x,num()+oy);pc=pq=null}
  else if(C=='C'){var a=num()+ox,b=num()+oy,c3=num()+ox,d3=num()+oy,e=num()+ox,f=num()+oy;cu(a,b,c3,d3,e,f);pq=null}
  else if(C=='S'){var r1=pc?[2*x-pc[0],2*y-pc[1]]:[x,y],c4=num()+ox,d4=num()+oy,e2=num()+ox,f2=num()+oy;cu(r1[0],r1[1],c4,d4,e2,f2);pq=null}
  else if(C=='Q'){var qa=num()+ox,qb=num()+oy,qe=num()+ox,qf=num()+oy;cu(x+2/3*(qa-x),y+2/3*(qb-y),qe+2/3*(qa-qe),qf+2/3*(qb-qf),qe,qf);pq=[qa,qb];pc=null}
  else if(C=='T'){var rq=pq?[2*x-pq[0],2*y-pq[1]]:[x,y],te=num()+ox,tf=num()+oy;cu(x+2/3*(rq[0]-x),y+2/3*(rq[1]-y),te+2/3*(rq[0]-te),tf+2/3*(rq[1]-tf),te,tf);pq=rq;pc=null}
  else return null}
 if(!ok||!cs.length)return null;
 cs.forEach(function(c){c.closed=1;var f=c.pts[0],l=c.pts[c.pts.length-1];if(c.pts.length>2&&Math.hypot(f.x-l.x,f.y-l.y)<.5){f.i=l.i;c.pts.pop()}});return cs.filter(function(c){return c.pts.length>=3})}
function hdfNest(cs){var polys=cs.map(function(c){return hdfFlat(c,12)});cs.forEach(function(c,i){var p0=c.pts[0],d=0;polys.forEach(function(pl,j){if(j!=i&&hdfInPoly(pl,p0.x,p0.y))d++});var ccw=hdfArea(polys[i])>0;if((d%2==0)==ccw)hdfRev(c)})}

/* ---- Huda Font: screens ---- */
function hdfCh(a,list,cur){return list.map(function(x){return'<button type="button" class="cdrch'+(String(x[0])==String(cur)?' on':'')+'" data-hdf="'+a+':'+x[0]+'">'+x[1]+'</button>'}).join('')}
function hdfStep(a,v,u,s){return'<div class="cdrstep"><button type="button" data-hdf="'+a+':-'+(s||10)+'">-</button><b>'+v+(u||'')+'</b><button type="button" data-hdf="'+a+':'+(s||10)+'">+</button></div>'}
function hdfTabs(){var el=$('#hdftabs');if(!el)return;el.innerHTML=[['gl','hdf_gl'],['pv','hdf_pv'],['st','hdf_st'],['pj','cdr_prj']].map(function(x){return'<button type="button" class="'+(HDF.tab==x[0]?'on':'')+'" data-hdf="tab:'+x[0]+'">'+t(x[1])+'</button>'}).join('')}
function hdfGridHtml(){var p=HDF.p,cps=hdfCps(),done=0,cells=cps.map(function(cp){var has=hdfHas(cp);if(has)done++;return'<button type="button" class="hdfc'+(has?' has':'')+'" data-hdf="g:'+cp+'"><i>'+esc(hdfLabel(cp))+'</i>'+(has?hdfThumb(p.g[cp]):'')+'</button>'}).join('');
 return'<div class="cdrs"><label>'+t('hdf_sets')+'</label><div class="cdrchs">'+[['ta','hdf_s_ta'],['tn','hdf_s_tn'],['la','hdf_s_la'],['di','hdf_s_di'],['pu','hdf_s_pu'],['ar','hdf_s_ar']].map(function(x){return'<button type="button" class="cdrch'+(p.sets.indexOf(x[0])>=0?' on':'')+'" data-hdf="set:'+x[0]+'">'+t(x[1])+'</button>'}).join('')+'</div><div class="cdrrow"><input id="hdfxc" type="text" placeholder="'+esc(t('hdf_add_c'))+'" style="flex:1;min-width:0"><button type="button" class="btn" data-hdf="addc" aria-label="add">'+ic('plus')+'</button></div><p class="mu">'+t('hdf_cnt').replace('{n}',done+' / '+cps.length)+'</p><div class="hdfgrid">'+cells+'</div></div>'}
function hdfPrevHtml(){var sm=S('hdfpt',null)||'\u0b85\u0b95\u0bb0 \u0bae\u0bc1\u0ba4\u0bb2 \u0b8e\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc6\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd\nABC abc 123';return'<div class="cdrs"><label>'+t('hdf_txt')+'</label><textarea id="hdfpt" rows="3" style="width:100%">'+esc(sm)+'</textarea><label>'+t('cdr_size')+'</label><input type="range" id="hdfps" min="16" max="200" value="'+HDF.ps+'" style="width:100%;accent-color:var(--g)"><div class="hdfprev" id="hdfpr"></div><p class="mu" id="hdfpm"></p></div>'}
function hdfPrevUp(){var el=$('#hdfpr'),tx=$('#hdfpt'),m=$('#hdfpm');if(!el||!tx)return;el.style.fontSize=HDF.ps+'px';el.textContent=tx.value;var miss={},out=[];Array.from(tx.value).forEach(function(ch){var cp=ch.codePointAt(0);if(cp>32&&!hdfHas(cp)&&!miss[cp]){miss[cp]=1;out.push(ch)}});if(m)m.textContent=HDF.err?t('hdf_err')+': '+HDF.err:(hdfCount(HDF.p)?(out.length?t('hdf_miss')+': '+out.join(' '):''):t('hdf_empty'))}
function hdfSetHtml(){var p=HDF.p,met=function(k,l,v){return'<label>'+t(l)+'</label>'+hdfStep('met:'+k,v)};return'<div class="cdrs"><label>'+t('hdf_fam')+'</label><input id="hdffam" type="text" value="'+esc(p.fam)+'" style="width:100%">'+met('asc','hdf_asc',p.asc)+met('desc','hdf_dsc',p.desc)+met('xh','hdf_xh',p.xh)+met('cap','hdf_cap',p.cap)+'<p class="mu">'+t('hdf_cnt').replace('{n}',hdfCount(p))+'</p><div class="cdrrow"><button type="button" class="btn wide" data-hdf="ex:ttf">'+ic('dl')+t('hdf_ttf')+'</button>'+(window.CompressionStream?'<button type="button" class="btn wide" data-hdf="ex:woff">'+ic('dl')+t('hdf_woff')+'</button>':'')+'</div><div class="cdrrow"><button type="button" class="btn" data-hdf="pf">'+ic('dl')+t('cdr_savef')+'</button><label class="btn" style="cursor:pointer">'+t('cdr_file')+'<input type="file" id="hdffile" accept=".json,.huda" hidden></label></div><p class="mu">'+t('hdf_use')+'</p></div>'}
function hdfPrjHtml(){var L=S('hdfi',[]);return'<div class="cdrs"><div class="cdrrow"><button type="button" class="btn wide" data-hdf="np">'+ic('plus')+t('hdf_newp')+'</button></div>'+L.map(function(e,i){return'<div class="cdrli"><b>'+esc(e.name||'-')+(e.id==HDF.p.id?' \u2022':'')+'<small>'+t('hdf_cnt').replace('{n}',e.n||0)+'</small></b><button type="button" class="btn sm" data-hdf="po:'+i+'">'+t('cdr_open')+'</button><button type="button" class="cdrib" data-hdf="pdup:'+i+'" aria-label="'+t('hdf_dup')+'">'+ic('y')+'</button><button type="button" class="cdrib" data-hdf="pdel:'+i+'" aria-label="'+t('cdr_del')+'">'+ic('x')+'</button></div>'}).join('')+'</div>'}
function hdfBody(){var el=$('#hdfbody');if(!el)return;if(HDF.tab=='gl')el.innerHTML=hdfGridHtml();else if(HDF.tab=='pv'){el.innerHTML=hdfPrevHtml();hdfPrevUp();hdfRegister().then(hdfPrevUp)}else if(HDF.tab=='st')el.innerHTML=hdfSetHtml();else el.innerHTML=hdfPrjHtml()}
function hdfShell(){var m=$('#hdfmain');if(!m)return;HDF.cp=null;m.innerHTML='<div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic('font')+'</span><b>'+t('st_hf')+'</b></div><div class="cdrtabs" id="hdftabs"></div><div id="hdfbody"></div>';hdfTabs();hdfBody()}
/* ---- glyph editor (v2-132) ---- */
/* ---- v2-132 glyph editor: state, history, selection, snapping, transforms, path operations ---- */
var HDFPK=['snap','gs','grid','sp','sg','sm','rul','vm','cb','hh','brush','nib','nibA','nibR','prs','merge','fit','ext','hz','step','smo','simp','off','ojn','sw','scap','ref','refo','pm','shape','rr','sides','star','cc','sq','ang','lock','anc','ghost'];
var HDFIC={hdel:'<path d="M3 18c5-1 9-6 18-12"/><circle cx="12" cy="12" r="2.6"/><path d="M10.6 12h2.8"/>',hconv:'<path d="M4 19L12 5l8 14"/><circle cx="12" cy="5" r="2"/>',hcut:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 7.5L20 17M8 16.5L20 7"/>'};
function hdfIc(n){if(HDFIC[n])return'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+HDFIC[n]+'</svg>';return ic(n)}
function hdfInit(){if(HDF)return;var id=S('hdfcur',null),p=id?S('hdf_'+id,null):null;if(!p||!p.g){p=hdfDefault(1);P('hdf_'+p.id,p);hdfIdx(p);P('hdfcur',p.id)}
 if(!p.gd)p.gd={h:[],v:[]};
 HDF={p:p,tab:'gl',cp:null,tool:'pen',pm:'bez',shape:'rect',rr:60,sides:6,star:0,cc:0,sq:0,snap:10,gs:50,grid:1,sp:1,sg:1,sm:1,rul:1,vm:'n',cb:0,hh:0,brush:70,nib:0,nibA:35,nibR:.3,prs:1,merge:0,fit:3,ext:1,hz:1,step:10,smo:2,simp:2,off:20,ojn:'round',sw:40,scap:'round',ref:'',refo:.25,ang:0,lock:1,anc:4,ghost:'',cusp:0,multi:0,
  sn:[],sc:[],hist:[],hi:-1,hm:{},open:-1,v:{S:.3,ox:0,oy:0},drag:null,ptr:{},gest:null,cw:300,ch:300,x:null,cv:null,face:null,err:'',ps:64,bear:50,spc:0,_sv:0,acc:{xf:1,node:1},sl:[],hov:null,cur:null,_ph:''};
 var pf=S('hdfpf',null);if(pf)HDFPK.forEach(function(k){if(pf[k]!==undefined)HDF[k]=pf[k]})}
function hdfPref(){var o={};HDFPK.forEach(function(k){o[k]=HDF[k]});P('hdfpf',o)}
function hdfRaf(){if(HDF._rf)return;HDF._rf=requestAnimationFrame(function(){HDF._rf=0;hdfDraw()})}
/* ---- history: every drawing action is committed as a snapshot ---- */
function hdfSnapJ(){var g=hdfG(HDF.cp);return JSON.stringify({c:g.c,a:g.a,gd:HDF.p.gd,o:HDF.open})}
function hdfPrune(){var g=hdfG(HDF.cp);HDF.sn=HDF.sn.filter(function(q){var c=g.c[q[0]];return c&&c.pts[q[1]]});HDF.sc=HDF.sc.filter(function(i){return g.c[i]});if(HDF.open>=g.c.length)HDF.open=-1}
function hdfCommit(){var g=hdfG(HDF.cp);hdfRound(g.c);hdfPrune();var s=hdfSnapJ();if(HDF.hist[HDF.hi]!==s){HDF.hist.splice(HDF.hi+1);HDF.hist.push(s);if(HDF.hist.length>300)HDF.hist.shift();HDF.hi=HDF.hist.length-1;hdfSaveSoon()}hdfAfter()}
function hdfAfter(){hdfProps();hdfCtx();hdfInfo();hdfDraw();D.querySelectorAll('[data-hdf="undo"]').forEach(function(b){b.disabled=HDF.hi<=0});D.querySelectorAll('[data-hdf="redo"]').forEach(function(b){b.disabled=HDF.hi>=HDF.hist.length-1})}
function hdfUndo(d){var j=HDF.hi+d;if(j<0||j>=HDF.hist.length)return;HDF.hi=j;var o=JSON.parse(HDF.hist[j]),g=hdfG(HDF.cp);g.c=o.c;g.a=o.a;HDF.p.gd=o.gd||{h:[],v:[]};HDF.open=o.o==null?-1:o.o;HDF.sn=[];HDF.sc=[];HDF.drag=null;hdfSaveSoon();hdfAfter()}
function hdfFinishOpen(){var g=hdfG(HDF.cp),cs=g.c,i;for(i=cs.length-1;i>=0;i--){var c=cs[i];if(!c.closed){if(c.pts.length<2)cs.splice(i,1)}}HDF.open=-1}
/* ---- selection ---- */
function hdfIsSn(c,p){return HDF.sn.some(function(q){return q[0]==c&&q[1]==p})}
function hdfSelCs(){var r=HDF.sc.slice();HDF.sn.forEach(function(q){if(r.indexOf(q[0])<0)r.push(q[0])});var g=hdfG(HDF.cp);return r.filter(function(i){return g.c[i]})}
function hdfTarget(){var g=hdfG(HDF.cp);if(HDF.sn.length)return{k:'n',list:HDF.sn};var cs=hdfSelCs();if(cs.length)return{k:'c',idx:cs};return{k:'a',idx:g.c.map(function(c,i){return i})}}
function hdfTCs(tg){var g=hdfG(HDF.cp);if(tg.k=='n'){var seen={},o=[];tg.list.forEach(function(q){if(!seen[q[0]]){seen[q[0]]=1;o.push(g.c[q[0]])}});return o}return tg.idx.map(function(i){return g.c[i]})}
function hdfTBoxT(tg){var g=hdfG(HDF.cp);if(tg.k=='n'){var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;tg.list.forEach(function(q){var p=g.c[q[0]].pts[q[1]];x0=Math.min(x0,p.x);x1=Math.max(x1,p.x);y0=Math.min(y0,p.y);y1=Math.max(y1,p.y)});return x1<x0?null:{x0:x0,y0:y0,x1:x1,y1:y1}}return hdfTBox(hdfTCs(tg))}
function hdfMapTarget(tg,fn){var g=hdfG(HDF.cp);if(tg.k=='n'){tg.list.forEach(function(q){var p=g.c[q[0]].pts[q[1]],a=fn(p.x,p.y);p.x=a[0];p.y=a[1];if(p.i)p.i=fn(p.i[0],p.i[1]);if(p.o)p.o=fn(p.o[0],p.o[1])});var seen={};tg.list.forEach(function(q){if(!seen[q[0]]){seen[q[0]]=1;hdfAutoC(g.c[q[0]])}})}else hdfMapPts(hdfTCs(tg),fn)}
function hdfRefPt(bb){var r=HDF.anc,cx=r%3,cy=Math.floor(r/3);return[bb.x0+(bb.x1-bb.x0)*cx/2,bb.y1-(bb.y1-bb.y0)*cy/2]}
function hdfXf(kind,a,b){var tg=hdfTarget(),bb=hdfTBoxT(tg);if(!bb)return;var rp=hdfRefPt(bb),cx=rp[0],cy=rp[1],fn,flip=false;
 if(kind=='mv')fn=function(x,y){return[x+a,y+b]};
 else if(kind=='sc'){var sx=a,sy=b==null?a:b;if(!(sx&&sy))return;flip=sx*sy<0;fn=function(x,y){return[cx+(x-cx)*sx,cy+(y-cy)*sy]}}
 else if(kind=='rot'){var th=a*Math.PI/180,co=Math.cos(th),si=Math.sin(th);fn=function(x,y){return[cx+(x-cx)*co-(y-cy)*si,cy+(x-cx)*si+(y-cy)*co]}}
 else if(kind=='skew'){var tn=Math.tan(a*Math.PI/180);fn=function(x,y){return[x+(y-cy)*tn,y]}}
 else if(kind=='fx'){flip=true;fn=function(x,y){return[2*cx-x,y]}}
 else if(kind=='fy'){flip=true;fn=function(x,y){return[x,2*cy-y]}}
 else return;
 hdfMapTarget(tg,fn);
 if(flip){if(tg.k!='n')hdfTCs(tg).forEach(hdfRev);else{var cnt={},g=hdfG(HDF.cp);tg.list.forEach(function(q){cnt[q[0]]=(cnt[q[0]]||0)+1});Object.keys(cnt).forEach(function(ci){if(cnt[ci]==g.c[ci].pts.length)hdfRev(g.c[ci])})}}
 hdfCommit()}
function hdfMirrorCopy(ax){var g=hdfG(HDF.cp),tg=hdfTarget(),cs=hdfTCs(tg),bb=hdfTBox(cs);if(!bb)return;var add=hdfClone(cs),cx=g.a/2,cy=(HDF.p.cap||700)/2;hdfMapPts(add,ax=='x'?function(x,y){return[2*cx-x,y]}:function(x,y){return[x,2*cy-y]});add.forEach(hdfRev);var n0=g.c.length;add.forEach(function(c){g.c.push(c)});HDF.sn=[];HDF.sc=add.map(function(c,i){return n0+i});hdfCommit()}
function hdfAlign(k){var tg=hdfTarget(),bb=hdfTBoxT(tg),g=hdfG(HDF.cp),p=HDF.p;if(!bb)return;var dx=0,dy=0;
 if(k=='l')dx=-bb.x0;else if(k=='c')dx=g.a/2-(bb.x0+bb.x1)/2;else if(k=='r')dx=g.a-bb.x1;else if(k=='t')dy=p.cap-bb.y1;else if(k=='m')dy=p.xh/2-(bb.y0+bb.y1)/2;else if(k=='b')dy=-bb.y0;
 if(dx||dy)hdfXf('mv',dx,dy)}
function hdfNumField(id,v){var tg=hdfTarget(),bb=hdfTBoxT(tg),g=hdfG(HDF.cp);if(isNaN(v))return;
 if(id=='nx'||id=='ny'){var q=HDF.sn[0];if(!q)return;var pt=g.c[q[0]].pts[q[1]],dx=id=='nx'?v-pt.x:0,dy=id=='ny'?v-pt.y:0;hdfXf('mv',dx,dy);return}
 if(!bb)return;var rp=hdfRefPt(bb),W=bb.x1-bb.x0,H=bb.y1-bb.y0;
 if(id=='x')hdfXf('mv',v-rp[0],0);else if(id=='y')hdfXf('mv',0,v-rp[1]);
 else if(id=='w'&&W>0&&v>0)hdfXf('sc',v/W,HDF.lock?v/W:1);else if(id=='h'&&H>0&&v>0)hdfXf('sc',HDF.lock?v/H:1,v/H);
 else if(id=='rot')hdfXf('rot',v);else if(id=='skw')hdfXf('skew',v);
 else if(id=='spx')hdfXf('sc',v/100,1);else if(id=='spy')hdfXf('sc',1,v/100);
 else if(id=='lsb'){var d=v-bb.x0;hdfXf('mv',d,0)}
 else if(id=='rsb'){g.a=Math.max(0,Math.round(bb.x1+v));hdfCommit()}
 else if(id=='adv'){g.a=Math.max(0,Math.round(v));hdfCommit()}}
function hdfHandleField(id,v){var g=hdfG(HDF.cp),q=HDF.sn[0];if(!q||isNaN(v))return;var c=g.c[q[0]],p=c.pts[q[1]],w=id.charAt(1)=='i'?'i':'o',len=id.charAt(2)=='l',P=[p.x,p.y],h=p[w]||P,L=hdfDst(h,P),A=Math.atan2(h[1]-p.y,h[0]-p.x);
 if(len){L=Math.max(0,v);if(!p[w]&&L>0)A=0}else A=v*Math.PI/180;
 if(L<.01){p[w]=null}else p[w]=[p.x+Math.cos(A)*L,p.y+Math.sin(A)*L];if(p.s==3)p.s=1;if(p.s)hdfSyncH(p,w);hdfCommit()}
/* ---- snapping & smart guides ---- */
function hdfSnapPt(w,ex){var v=HDF.v,tol=9/v.S,g=hdfG(HDF.cp),p=HDF.p,bx=null,by=null,bdx=tol,bdy=tol,x,y;HDF.sl=[];
 function tx(val){var d=Math.abs(w.x-val);if(d<bdx){bdx=d;bx=val}}
 function ty(val){var d=Math.abs(w.y-val);if(d<bdy){bdy=d;by=val}}
 if(HDF.sg){p.gd.v.forEach(tx);p.gd.h.forEach(ty)}
 if(HDF.sm){[0,g.a].forEach(tx);[0,p.xh,p.cap,p.asc,p.desc].forEach(ty)}
 if(HDF.sp)g.c.forEach(function(c,ci){c.pts.forEach(function(pt,pi){if(ex&&ex(ci,pi))return;tx(pt.x);ty(pt.y)})});
 if(bx!=null){x=bx;HDF.sl.push({k:'x',v:bx})}else x=HDF.snap?Math.round(w.x/HDF.snap)*HDF.snap:Math.round(w.x);
 if(by!=null){y=by;HDF.sl.push({k:'y',v:by})}else y=HDF.snap?Math.round(w.y/HDF.snap)*HDF.snap:Math.round(w.y);
 return{x:x,y:y}}
function hdfAng45(a,w,shift){var dx=w.x-a[0],dy=w.y-a[1],L=Math.hypot(dx,dy),an=Math.round(Math.atan2(dy,dx)/(Math.PI/4))*(Math.PI/4);return{x:Math.round(a[0]+Math.cos(an)*L),y:Math.round(a[1]+Math.sin(an)*L)}}
/* ---- path operations ---- */
function hdfTCi(){var tg=hdfTarget();if(tg.k=='n'){var seen={},o=[];tg.list.forEach(function(q){if(!seen[q[0]]){seen[q[0]]=1;o.push(q[0])}});return o}return tg.idx.slice()}
function hdfReplace(idxs,news){var g=hdfG(HDF.cp),keep=g.c.filter(function(c,i){return idxs.indexOf(i)<0}),n0=keep.length;g.c=keep.concat(news);HDF.sn=[];HDF.sc=news.map(function(c,i){return n0+i});HDF.open=-1}
function hdfEach(fn){var g=hdfG(HDF.cp),idx=hdfTCi(),done=[],news=[],i;idx.forEach(function(ci){var r=fn(g.c[ci],ci);if(r===false)return;done.push(ci);(Array.isArray(r)?r:[r]).forEach(function(c){if(c)news.push(c)})});if(!done.length)return false;hdfReplace(done,news);return true}
function hdfOp(kind){var g=hdfG(HDF.cp),ok=true;hdfFinishOpen();
 if(kind=='smooth'){var pa=[0,6,16,40][HDF.smo],tl=[0,1,2,3.5][HDF.smo];ok=hdfEach(function(c){if(c.pts.length<3)return false;var r=hdfSmoothC(c,pa,tl);if(!r)return false;if(HDF.ext)hdfExtremes(r);return r})}
 else if(kind=='simp'){ok=hdfEach(function(c){if(c.pts.length<3)return false;var r=hdfSimplifyC(c,HDF.simp);if(!r)return false;if(HDF.ext)hdfExtremes(r);return r})}
 else if(kind=='off'){var idx=hdfTCi().filter(function(i){return g.c[i].closed});if(!idx.length){toast(t('hx_need_closed'));return}var res=hdfOffsetCs(idx.map(function(i){return g.c[i]}),HDF.off,HDF.ojn);if(!res.length){toast(t('hx_empty'));return}if(HDF.ext)res.forEach(hdfExtremes);hdfReplace(idx,res)}
 else if(kind=='stroke'){ok=hdfEach(function(c){var r=hdfStrokeC(c,HDF.sw,HDF.scap,HDF.ojn);if(!r.length)return false;if(HDF.ext)r.forEach(hdfExtremes);return r})}
 else if(kind=='close'){ok=hdfEach(function(c){return c.closed||c.pts.length<2?false:hdfCloseC(c)})}
 else if(kind=='join'){var cs=hdfSelCs().filter(function(i){return!g.c[i].closed});
  if(cs.length==1){var o=hdfCloseC(g.c[cs[0]]);hdfReplace(cs,[o])}
  else if(cs.length>=2){var m=g.c[cs[0]],k;for(k=1;k<cs.length;k++)m=hdfJoin2(m,g.c[cs[k]]);hdfReplace(cs,[m])}else{toast(t('hx_need_open'));return}}
 else if(kind=='brk'){if(!HDF.sn.length){toast(t('hx_need_node'));return}var by={};HDF.sn.forEach(function(q){(by[q[0]]=by[q[0]]||[]).push(q[1])});var del=[],news=[];Object.keys(by).forEach(function(ci){ci=+ci;del.push(ci);news=news.concat(hdfBreakMany(g.c[ci],by[ci]))});hdfReplace(del,news)}
 else if(kind=='rev'){ok=hdfEach(function(c){return hdfRevC(c)})}
 else if(kind=='ext'){var n=0;hdfTCi().forEach(function(i){n+=hdfExtremes(g.c[i])});if(!n)toast(t('hx_none'))}
 else if(kind=='rnd'){}
 else if(kind=='clean')hdfCleanup();
 else if(kind=='ovl'){var cl=[],oth=[];g.c.forEach(function(c){(c.closed&&c.pts.length>=2?cl:oth).push(c)});if(!cl.length)return;var res=hdfBool([{cs:cl,mode:'sum',rule:'nz'}],function(v){return v[0]});g.c=oth.concat(res);HDF.sn=[];HDF.sc=[]}
 else if(kind.indexOf('pf')==0)return hdfPf(kind.slice(2));
 if(ok===false){toast(t('hx_empty'));return}hdfCommit()}
function hdfBreakMany(c,ps){var desc=function(x,y){return y-x},n=c.pts.length,parts;ps=ps.slice().sort(desc);
 if(c.closed){var p1=ps[0];parts=hdfBreakAt(c,p1);ps=ps.slice(1).map(function(p){return(p-p1+n)%n}).sort(desc)}else parts=[c];
 ps.forEach(function(p){parts=hdfBreakAt(parts[0],p).concat(parts.slice(1))});return parts}
function hdfCleanup(){var g=hdfG(HDF.cp);
 g.c.forEach(function(c){var out=[];c.pts.forEach(function(p){var q=out[out.length-1];if(q&&Math.hypot(p.x-q.x,p.y-q.y)<.8){q.o=p.o;q.s=q.i&&q.o?(q.s||1):0}else out.push(p)});
  if(c.closed&&out.length>1){var f=out[0],l=out[out.length-1];if(Math.hypot(f.x-l.x,f.y-l.y)<.8){f.i=l.i;out.pop()}}
  if(out.length>=2)c.pts=out});
 g.c=g.c.filter(function(c){return c.pts.length>=(c.closed?3:2)});
 var cl=g.c.filter(function(c){return c.closed});hdfNest(cl);g.c.forEach(function(c){if(c.closed)hdfExtremes(c)});HDF.sn=[];HDF.sc=[]}
function hdfPf(k){var g=hdfG(HDF.cp),S=hdfSelCs().filter(function(i){return g.c[i].closed&&g.c[i].pts.length>=2});if(S.length<2){toast(t('hx_need2'));return}
 var sel=S.map(function(i){return g.c[i]}),res;
 if(k=='uni')res=hdfBool([{cs:sel,mode:'any'}],function(v){return v[0]});
 else if(k=='sub')res=hdfBool([{cs:[sel[0]],mode:'any'},{cs:sel.slice(1),mode:'any'}],function(v){return v[0]&&!v[1]});
 else if(k=='int')res=hdfBool(sel.map(function(c){return{cs:[c],mode:'any'}}),function(v){return v.every(Boolean)});
 else if(k=='xor')res=hdfBool(sel.map(function(c){return{cs:[c],mode:'any'}}),function(v){return v.filter(Boolean).length%2==1});
 else if(k=='div')res=hdfDivide(sel);
 if(!res||!res.length){toast(t('hx_empty'));return}
 if(HDF.ext)res.forEach(hdfExtremes);hdfReplace(S,res);hdfCommit()}
function hdfDelSel(){var g=hdfG(HDF.cp);if(HDF.sn.length){var by={};HDF.sn.forEach(function(q){(by[q[0]]=by[q[0]]||[]).push(q[1])});var rm=[];Object.keys(by).forEach(function(ci){ci=+ci;var c=g.c[ci];by[ci].sort(function(a,b){return b-a}).forEach(function(pi){if(!hdfDelNode(c,pi)){rm.push(ci)}});if(rm.indexOf(ci)<0&&c.pts.length<(c.closed?3:2))rm.push(ci)});g.c=g.c.filter(function(c,i){return rm.indexOf(i)<0});HDF.sn=[];HDF.sc=[];hdfCommit();return}
 if(HDF.sc.length){g.c=g.c.filter(function(c,i){return HDF.sc.indexOf(i)<0});HDF.sc=[];HDF.open=-1;hdfCommit()}}
function hdfSetNodeType(ty){var g=hdfG(HDF.cp);if(!HDF.sn.length)return;HDF.sn.forEach(function(q){var c=g.c[q[0]];if(c)hdfSetType(c,q[1],ty)});hdfCommit()}
function hdfCheck(){var g=hdfG(HDF.cp),r={open:0,tiny:0,ext:0,dup:0,rev:0,frac:0};g.c.forEach(function(c){if(!c.closed)r.open++;var n=c.pts.length,i;for(i=0;i<hdfNSeg(c);i++){var s=hdfSeg(c,i);if(hdfSegLen(s)<2)r.tiny++;if(s.cub&&hdfExtT([s.p0,s.c1,s.c2,s.p3]).length)r.ext++;if(hdfDst(s.p0,s.p3)<.8)r.dup++}});
 var cl=g.c.filter(function(c){return c.closed&&c.pts.length>=3}),polys=cl.map(function(c){return hdfFlat(c,12)});cl.forEach(function(c,i){var p0=c.pts[0],d=0;polys.forEach(function(pl,j){if(j!=i&&hdfInPoly(pl,p0.x,p0.y))d++});if((d%2==0)==(hdfArea(polys[i])>0))r.rev++});
 return r}

/* ---- v2-132 glyph editor: view, hit-testing, pointer tools, keyboard ---- */
var HDFRW=16;
function hdfXY(e){var r=HDF.cv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}}
function hdfWp(s){var v=HDF.v;return{x:(s.x-v.ox)/v.S,y:(v.oy-s.y)/v.S}}
function hdfMp(x,y){var v=HDF.v;return[v.ox+x*v.S,v.oy-y*v.S]}
function hdfLayout(){var cv=$('#hdfcv'),w=$('#hdfcw');if(!cv||!w)return;var cw=Math.max(200,w.clientWidth),k=[.3,.4,.52][HDF.hz]||.4,ch=Math.round(Math.max(210,Math.min(innerHeight*k,cw*1.15))),dpr=Math.min(2,window.devicePixelRatio||1);cv.style.height=ch+'px';cv.width=Math.round(cw*dpr);cv.height=Math.round(ch*dpr);var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);HDF.x=x;HDF.cw=cw;HDF.ch=ch;HDF.cv=cv}
function hdfFit(){var g=hdfG(HDF.cp),W=HDF.cw,H=HDF.ch,mx=Math.max(g.a,700),top=HDF.p.asc+70,bot=HDF.p.desc-70,S0=Math.min((H-30)/(top-bot),(W-40)/(mx+160));HDF.v={S:S0,ox:W/2-mx/2*S0,oy:H/2+(top+bot)/2*S0}}
function hdfFitSel(){var tg=hdfTarget(),bb=hdfTBoxT(tg);if(!bb||(bb.x1-bb.x0<1&&bb.y1-bb.y0<1)){hdfFit();return}var W=HDF.cw,H=HDF.ch,S0=Math.min(10,(W-70)/Math.max(10,bb.x1-bb.x0),(H-70)/Math.max(10,bb.y1-bb.y0));HDF.v={S:S0,ox:W/2-(bb.x0+bb.x1)/2*S0,oy:H/2+(bb.y0+bb.y1)/2*S0}}
function hdfZoomAt(k,px,py){var v=HDF.v,S2=Math.max(.03,Math.min(14,v.S*k)),wx=(px-v.ox)/v.S,wy=(v.oy-py)/v.S;v.S=S2;v.ox=px-wx*S2;v.oy=py+wy*S2}
function hdfZoom(f){if(f==='fit'||f===0){hdfFit()}else if(f==='sel'){hdfFitSel()}else if(f==='100'){hdfZoomAt(1/HDF.v.S,HDF.cw/2,HDF.ch/2)}else hdfZoomAt(f>0?1.35:1/1.35,HDF.cw/2,HDF.ch/2);hdfInfo();hdfDraw()}
function hdfWheel(e){e.preventDefault();var r=HDF.cv.getBoundingClientRect();hdfZoomAt(e.deltaY<0?1.15:1/1.15,e.clientX-r.left,e.clientY-r.top);hdfInfo();hdfRaf()}
function hdfGest(){var ks=Object.keys(HDF.ptr),a=HDF.ptr[ks[0]],b=HDF.ptr[ks[1]];return{d:Math.hypot(a.x-b.x,a.y-b.y)||1,cx:(a.x+b.x)/2,cy:(a.y+b.y)/2}}
/* ---- hit testing (screen px) ---- */
function hdfHitH(s){var g=hdfG(HDF.cp),best=null,bd=20;g.c.forEach(function(c,ci){c.pts.forEach(function(pt,pi){if(!(HDF.hh||hdfIsSn(ci,pi)))return;var a=hdfMp(pt.x,pt.y);['i','o'].forEach(function(w){if(!pt[w])return;var m=hdfMp(pt[w][0],pt[w][1]);if(Math.hypot(m[0]-a[0],m[1]-a[1])<3)return;var d=Math.hypot(m[0]-s.x,m[1]-s.y);if(d<bd){bd=d;best={k:'h',c:ci,p:pi,w:w}}})})});return best}
function hdfHitA(s,r){var g=hdfG(HDF.cp),best=null,bd=r||20;g.c.forEach(function(c,ci){c.pts.forEach(function(pt,pi){var m=hdfMp(pt.x,pt.y),d=Math.hypot(m[0]-s.x,m[1]-s.y);if(d<bd){bd=d;best={k:'a',c:ci,p:pi}}})});return best}
function hdfHitEnd(s,skip){var g=hdfG(HDF.cp),best=null,bd=22;g.c.forEach(function(c,ci){if(c.closed||c.pts.length<1)return;[0,c.pts.length-1].forEach(function(pi,k){if(k==1&&c.pts.length==1)return;var m=hdfMp(c.pts[pi].x,c.pts[pi].y),d=Math.hypot(m[0]-s.x,m[1]-s.y);if(d<bd&&!(skip&&skip(ci,pi))){bd=d;best={c:ci,p:pi,first:pi==0}}})});return best}
function hdfHitG(s){var p=HDF.p,v=HDF.v;for(var i=0;i<p.gd.h.length;i++){if(Math.abs(hdfMp(0,p.gd.h[i])[1]-s.y)<10)return{k:'g',ax:'h',i:i}}for(i=0;i<p.gd.v.length;i++){if(Math.abs(hdfMp(p.gd.v[i],0)[0]-s.x)<10)return{k:'g',ax:'v',i:i}}return null}
function hdfInside(w){var g=hdfG(HDF.cp),i;for(i=g.c.length-1;i>=0;i--){if(g.c[i].closed&&hdfInPoly(hdfFlat(g.c[i],12),w.x,w.y))return i}return-1}
function hdfBox(){if(HDF.tool!='sel'||!HDF.sc.length||HDF.sn.length)return null;var g=hdfG(HDF.cp),cs=HDF.sc.map(function(i){return g.c[i]}).filter(Boolean),bb=hdfTBox(cs);if(!bb)return null;var a=hdfMp(bb.x0,bb.y1),b=hdfMp(bb.x1,bb.y0),o=11,P=[[a[0]-o,a[1]-o],[b[0]+o,a[1]-o],[b[0]+o,b[1]+o],[a[0]-o,b[1]+o]];return{bb:bb,P:P,rot:[(a[0]+b[0])/2,a[1]-o-26]}}
function hdfHitBox(s){var bx=hdfBox();if(!bx)return null;if(Math.hypot(bx.rot[0]-s.x,bx.rot[1]-s.y)<18)return{k:'xr'};var i;for(i=0;i<4;i++)if(Math.hypot(bx.P[i][0]-s.x,bx.P[i][1]-s.y)<18)return{k:'xs',i:i};return null}
function hdfRestore(sn){var g=hdfG(HDF.cp);sn.forEach(function(q){g.c[q.i]=hdfClone(q.c)})}
function hdfSnapCs(idxs){var g=hdfG(HDF.cp);return idxs.map(function(i){return{i:i,c:hdfClone(g.c[i])}})}
function hdfAutoAll(){var g=hdfG(HDF.cp);g.c.forEach(hdfAutoC)}
/* ---- pointer ---- */
function hdfPtr(e){var cv=e.currentTarget||HDF.cv,s=hdfXY(e),g=hdfG(HDF.cp),v=HDF.v,k=e.type;
 if(k=='pointerdown'){try{cv.setPointerCapture(e.pointerId)}catch(x){}HDF.ptr[e.pointerId]=s;
  if(Object.keys(HDF.ptr).length>=2){HDF.drag=null;var gs=hdfGest();gs.v={S:v.S,ox:v.ox,oy:v.oy};HDF.gest=gs;return}
  hdfDown(e,s,g);hdfRaf();return}
 if(k=='pointermove'){if(HDF.ptr[e.pointerId])HDF.ptr[e.pointerId]=s;
  HDF.cur=hdfWp(s);
  if(HDF.gest&&Object.keys(HDF.ptr).length>=2){var g2=hdfGest(),g0=HDF.gest,S2=Math.max(.03,Math.min(14,g0.v.S*g2.d/g0.d)),wx=(g0.cx-g0.v.ox)/g0.v.S,wy=(g0.v.oy-g0.cy)/g0.v.S;v.S=S2;v.ox=g2.cx-wx*S2;v.oy=g2.cy+wy*S2;hdfInfo();hdfRaf();return}
  if(!HDF.drag){HDF.hov=null;if(HDF.tool=='pen'&&HDF.open>=0&&!HDF.ptr[e.pointerId]){HDF.hov=hdfSnapPt(HDF.cur)}hdfInfo();hdfRaf();return}
  hdfMove(e,s,g);hdfInfo();hdfRaf();return}
 delete HDF.ptr[e.pointerId];if(Object.keys(HDF.ptr).length<2)HDF.gest=null;
 var d=HDF.drag;HDF.drag=null;if(!d||k=='pointercancel'){if(d&&d.snap&&k=='pointercancel')hdfRestore(d.snap);HDF.sl=[];hdfDraw();return}
 hdfUp(e,s,g,d);HDF.sl=[]}
function hdfDown(e,s,g){var w=hdfWp(s),tool=HDF.tool,v=HDF.v,cs=g.c,add=HDF.multi||e.shiftKey;
 if(HDF.spc||e.button==1||tool=='hand'){HDF.drag={k:'pan',s:s,ox:v.ox,oy:v.oy};return}
 if(HDF.rul&&!(tool=='pen'&&HDF.open>=0)){if(s.y<HDFRW&&s.x>=HDFRW){HDF.drag={k:'gnew',ax:'h',pos:w.y};return}if(s.x<HDFRW&&s.y>=HDFRW){HDF.drag={k:'gnew',ax:'v',pos:w.x};return}}
 if(tool=='pen'){hdfPenDown(e,s,w,g);return}
 if(tool=='sel'){
  var h=hdfHitH(s)||hdfHitA(s);
  if(h&&h.k=='h'){var pt=cs[h.c].pts[h.p];if(HDF.cusp||e.altKey)pt.s=0;HDF.drag={k:'h',c:h.c,p:h.p,w:h.w,snap:hdfSnapCs([h.c]),moved:0,s:s};return}
  if(h&&h.k=='a'){var was=hdfIsSn(h.c,h.p);
   if(add&&was){HDF.sn=HDF.sn.filter(function(q){return!(q[0]==h.c&&q[1]==h.p)});hdfProps();hdfInfo();return}
   if(add){HDF.sn.push([h.c,h.p]);if(HDF.sc.indexOf(h.c)<0)HDF.sc.push(h.c)}else if(!was){HDF.sn=[[h.c,h.p]];HDF.sc=[h.c]}
   var ci=hdfTCi();HDF.drag={k:'nodes',snap:hdfSnapCs(ci),a:{c:h.c,p:h.p},w0:w,tapSel:!add&&was&&HDF.sn.length>1,moved:0,s:s};hdfProps();return}
  var bx=hdfHitBox(s);
  if(bx){var idx=HDF.sc.slice(),bb=hdfTBox(idx.map(function(i){return cs[i]}));if(bb){var C=bx.k=='xs'?[[bb.x0,bb.y1],[bb.x1,bb.y1],[bb.x1,bb.y0],[bb.x0,bb.y0]][bx.i]:null,O=bx.k=='xs'?[[bb.x1,bb.y0],[bb.x0,bb.y0],[bb.x0,bb.y1],[bb.x1,bb.y1]][bx.i]:null;HDF.drag={k:bx.k,snap:hdfSnapCs(idx),idx:idx,bb:bb,C:C,O:O,w0:w,moved:0,s:s};return}}
  var gh=HDF.sg?hdfHitG(s):null;if(gh){HDF.drag={k:'gmove',ax:gh.ax,i:gh.i,pos:gh.ax=='h'?HDF.p.gd.h[gh.i]:HDF.p.gd.v[gh.i]};return}
  var ns=hdfNearSeg(cs,w.x,w.y,13/v.S);
  if(ns){if(HDF.sc.indexOf(ns.c)<0||HDF.sn.length){HDF.sc=add&&HDF.sc.indexOf(ns.c)<0?HDF.sc.concat([ns.c]):[ns.c];HDF.sn=[]}hdfProps();HDF.drag={k:'seg',c:ns.c,i:ns.i,t:ns.t,w0:w,snap:hdfSnapCs([ns.c]),moved:0,s:s};return}
  var ax=hdfMp(g.a,0);if(Math.abs(ax[0]-s.x)<14){HDF.drag={k:'adv',a0:g.a};return}
  var ci2=hdfInside(w);
  if(ci2>=0){if(add){var ix=HDF.sc.indexOf(ci2);if(ix>=0)HDF.sc.splice(ix,1);else HDF.sc.push(ci2);HDF.sn=[];hdfProps();hdfInfo();return}
   if(HDF.sc.indexOf(ci2)<0){HDF.sc=[ci2];HDF.sn=[];hdfProps()}
   var ids=HDF.sc.slice();HDF.drag={k:'move',snap:hdfSnapCs(ids),idx:ids,w0:w,moved:0,s:s};return}
  HDF.drag={k:'mq',a:s,b:s,add:add};return}
 if(tool=='add'){var ha0=hdfHitA(s,16);if(ha0){HDF.sn=[[ha0.c,ha0.p]];HDF.sc=[ha0.c];hdfProps();hdfCtx();hdfInfo();return}var n1=hdfNearSeg(cs,w.x,w.y,18/v.S);if(n1){var ni=hdfSplit(cs[n1.c],n1.i,n1.t);HDF.sn=[[n1.c,ni]];HDF.sc=[n1.c];hdfCommit()}return}
 if(tool=='del'){var ha=hdfHitA(s,24);if(ha){var c0=cs[ha.c];if(!hdfDelNode(c0,ha.p)||c0.pts.length<(c0.closed?3:2)){cs.splice(ha.c,1)}HDF.sn=[];HDF.sc=[];hdfCommit()}return}
 if(tool=='cut'){var ha2=hdfHitA(s,22),cc,pi;if(ha2){cc=ha2.c;pi=ha2.p}else{var n2=hdfNearSeg(cs,w.x,w.y,18/v.S);if(!n2)return;cc=n2.c;pi=hdfSplit(cs[cc],n2.i,n2.t)}
  var parts=hdfBreakAt(cs[cc],pi);cs.splice(cc,1);HDF.sn=[];HDF.sc=[];parts.forEach(function(c){cs.push(c)});HDF.sc=parts.map(function(c,i){return cs.length-parts.length+i});HDF.open=-1;hdfCommit();return}
 if(tool=='conv'){var hh=hdfHitH(s);if(hh){var pt2=cs[hh.c].pts[hh.p];pt2.s=0;HDF.drag={k:'h',c:hh.c,p:hh.p,w:hh.w,snap:hdfSnapCs([hh.c]),moved:0,s:s};return}
  var ha3=hdfHitA(s,24);if(ha3){HDF.sn=[[ha3.c,ha3.p]];HDF.sc=[ha3.c];HDF.drag={k:'cvn',c:ha3.c,p:ha3.p,snap:hdfSnapCs([ha3.c]),moved:0,s:s};hdfProps();return}
  var n3=hdfNearSeg(cs,w.x,w.y,13/v.S);if(n3){HDF.sc=[n3.c];HDF.sn=[];HDF.drag={k:'seg',c:n3.c,i:n3.i,t:n3.t,w0:w,snap:hdfSnapCs([n3.c]),moved:0,s:s}}return}
 if(tool=='brush'){var pr=e.pointerType=='pen'&&HDF.prs?Math.max(.3,Math.min(1.8,.4+(e.pressure||.5)*1.2)):1;HDF.drag={k:'brush',pts:[{x:w.x,y:w.y,k:pr}],last:s};return}
 if(tool=='shape'){var sn=hdfSnapPt(w);HDF.drag={k:'shape',a:sn,b:sn};return}}
function hdfPenDown(e,s,w,g){var cs=g.c,pm=HDF.pm,open=HDF.open>=0?cs[HDF.open]:null,v=HDF.v;
 if(pm=='free'){HDF.drag={k:'free',pts:[[w.x,w.y]],s0:s,last:s};return}
 var he=hdfHitEnd(s);
 if(open){var n=open.pts.length,f=hdfMp(open.pts[0].x,open.pts[0].y);
  if(n>=3&&Math.hypot(f[0]-s.x,f[1]-s.y)<22){open.closed=1;hdfOrient(open);HDF.sc=[HDF.open];HDF.sn=[];HDF.open=-1;hdfCommit();return}
  var l=hdfMp(open.pts[n-1].x,open.pts[n-1].y);if(n>=2&&Math.hypot(l[0]-s.x,l[1]-s.y)<18){HDF.sc=[HDF.open];HDF.sn=[];HDF.open=-1;hdfCommit();return}
  if(he&&he.c!=HDF.open){var oth=cs[he.c],mg=hdfJoin2(open,oth),ia=HDF.open,ib=he.c;cs[ia]=mg;cs.splice(ib,1);HDF.open=-1;HDF.sc=[ia>ib?ia-1:ia];HDF.sn=[];hdfCommit();return}}
 else if(he){var c1=cs[he.c];if(he.first&&c1.pts.length>1)hdfRev(c1);HDF.open=he.c;HDF.sn=[[he.c,c1.pts.length-1]];HDF.sc=[he.c];hdfProps();hdfCtx();return}
 else{var ha=hdfHitA(s,20);if(ha){HDF.sn=[[ha.c,ha.p]];HDF.sc=[ha.c];hdfProps();return}}
 if(!open){cs.push({closed:0,pts:[]});HDF.open=cs.length-1;open=cs[HDF.open]}
 var sn,last=open.pts.length?[open.pts[open.pts.length-1].x,open.pts[open.pts.length-1].y]:null;
 if((HDF.ang||e.shiftKey)&&last){sn=hdfAng45(last,w);HDF.sl=[]}else sn=hdfSnapPt(w);
 var np=hdfPt(sn.x,sn.y,null,null,pm=='curv'?3:0);open.pts.push(np);if(pm=='curv')hdfAutoC(open);
 HDF.sn=[[HDF.open,open.pts.length-1]];HDF.sc=[HDF.open];
 if(pm=='bez')HDF.drag={k:'pennew',pt:np,s:s,c:HDF.open,moved:0};else hdfCommit()}
function hdfMove(e,s,g){var d=HDF.drag,v=HDF.v,w=hdfWp(s),k=d.k;
 if(k=='pan'){v.ox=d.ox+(s.x-d.s.x);v.oy=d.oy+(s.y-d.s.y);return}
 if(k=='gnew'){d.pos=d.ax=='h'?w.y:w.x;d.s=s;return}
 if(k=='gmove'){d.pos=d.ax=='h'?w.y:w.x;d.s=s;var arr=d.ax=='h'?HDF.p.gd.h:HDF.p.gd.v;arr[d.i]=Math.round(d.pos);return}
 if(k=='pennew'){if(!d.moved&&Math.hypot(s.x-d.s.x,s.y-d.s.y)<7)return;d.moved=1;var pt=d.pt,hp=w;if(HDF.ang||e.shiftKey)hp=hdfAng45([pt.x,pt.y],w);else hp={x:Math.round(w.x),y:Math.round(w.y)};
  pt.o=[hp.x,hp.y];if(HDF.cusp||e.altKey){pt.i=null;pt.s=0}else{pt.i=[2*pt.x-hp.x,2*pt.y-hp.y];pt.s=1}return}
 if(k=='free'){if(Math.hypot(s.x-d.last.x,s.y-d.last.y)>=3){d.pts.push([w.x,w.y]);d.last=s}return}
 if(k=='brush'){var sp=Math.max(2/v.S,HDF.brush*.08);var q=d.pts[d.pts.length-1];if(Math.hypot(w.x-q.x,w.y-q.y)>=sp){var pr=e.pointerType=='pen'&&HDF.prs?Math.max(.3,Math.min(1.8,.4+(e.pressure||.5)*1.2)):1;d.pts.push({x:w.x,y:w.y,k:pr})}return}
 if(k=='shape'){var sn=hdfSnapPt(w);if(HDF.sq||e.shiftKey){var dx=sn.x-d.a.x,dy=sn.y-d.a.y,m=Math.max(Math.abs(dx),Math.abs(dy));sn={x:d.a.x+(dx<0?-m:m),y:d.a.y+(dy<0?-m:m)}}d.b=sn;return}
 if(k=='mq'){d.b=s;return}
 if(k=='adv'){g.a=Math.max(0,Math.round(w.x/10)*10);return}
 if(!d.moved&&Math.hypot(s.x-d.s.x,s.y-d.s.y)<4)return;d.moved=1;hdfRestore(d.snap);var cs=g.c;
 if(k=='h'){var pt2=cs[d.c].pts[d.p],hp2=HDF.ang||e.shiftKey?hdfAng45([pt2.x,pt2.y],w):hdfSnapPt(w,function(a,b){return a==d.c&&b==d.p});pt2[d.w]=[hp2.x,hp2.y];if(pt2.s==3)pt2.s=1;if(pt2.s)hdfSyncH(pt2,d.w);hdfAutoC(cs[d.c]);return}
 if(k=='nodes'){var a0=d.snap.filter(function(q){return q.i==d.a.c})[0].c.pts[d.a.p],tw={x:a0.x+(w.x-d.w0.x),y:a0.y+(w.y-d.w0.y)},sn2=(HDF.ang||e.shiftKey)?hdfAng45([a0.x,a0.y],{x:tw.x,y:tw.y}):hdfSnapPt(tw,function(a,b){return hdfIsSn(a,b)}),dx2=sn2.x-a0.x,dy2=sn2.y-a0.y;
  HDF.sn.forEach(function(q){var p=cs[q[0]].pts[q[1]];p.x+=dx2;p.y+=dy2;if(p.i)p.i=[p.i[0]+dx2,p.i[1]+dy2];if(p.o)p.o=[p.o[0]+dx2,p.o[1]+dy2]});d.snap.forEach(function(q){hdfAutoC(cs[q.i])});d.dx=dx2;d.dy=dy2;return}
 if(k=='seg'){hdfCurveDrag(cs[d.c],d.i,d.t,w.x-d.w0.x,w.y-d.w0.y);return}
 if(k=='move'){var c0=d.snap[0].c.pts[0],tw2={x:c0.x+(w.x-d.w0.x),y:c0.y+(w.y-d.w0.y)},sn3=hdfSnapPt(tw2,function(a,b){return d.idx.indexOf(a)>=0}),dx3=sn3.x-c0.x,dy3=sn3.y-c0.y;hdfMapPts(d.idx.map(function(i){return cs[i]}),function(x,y){return[x+dx3,y+dy3]});d.dx=dx3;d.dy=dy3;return}
 if(k=='cvn'){var pt3=cs[d.c].pts[d.p],hp3=hdfSnapPt(w,function(a,b){return a==d.c&&b==d.p});pt3.o=[hp3.x,hp3.y];pt3.i=[2*pt3.x-hp3.x,2*pt3.y-hp3.y];pt3.s=1;return}
 if(k=='xs'){var ws=hdfSnapPt(w,function(a){return d.idx.indexOf(a)>=0}),ox=d.O[0],oy=d.O[1],sx=(ws.x-ox)/((d.C[0]-ox)||1),sy=(ws.y-oy)/((d.C[1]-oy)||1);if(HDF.lock||e.shiftKey){if(Math.abs(sx-1)>=Math.abs(sy-1))sy=sx;else sx=sy}
  if(Math.abs(sx)<.02)sx=.02*(sx<0?-1:1);if(Math.abs(sy)<.02)sy=.02*(sy<0?-1:1);d.sx=sx;d.sy=sy;hdfMapPts(d.idx.map(function(i){return cs[i]}),function(x,y){return[ox+(x-ox)*sx,oy+(y-oy)*sy]});if(sx*sy<0)d.idx.forEach(function(i){hdfRev(cs[i])});return}
 if(k=='xr'){var cx=(d.bb.x0+d.bb.x1)/2,cy=(d.bb.y0+d.bb.y1)/2,an=Math.atan2(w.y-cy,w.x-cx)-Math.atan2(d.w0.y-cy,d.w0.x-cx);if(HDF.ang||e.shiftKey)an=Math.round(an/(Math.PI/12))*(Math.PI/12);d.an=an;var co=Math.cos(an),si=Math.sin(an);hdfMapPts(d.idx.map(function(i){return cs[i]}),function(x,y){return[cx+(x-cx)*co-(y-cy)*si,cy+(x-cx)*si+(y-cy)*co]});return}}
function hdfUp(e,s,g,d){var k=d.k,cs=g.c,v=HDF.v;
 if(k=='pan'){hdfDraw();return}
 if(k=='gnew'){var inRul=d.ax=='h'?s.y<HDFRW:s.x<HDFRW;if(!inRul){(d.ax=='h'?HDF.p.gd.h:HDF.p.gd.v).push(Math.round(d.pos));hdfCommit()}else hdfDraw();return}
 if(k=='gmove'){var arr=d.ax=='h'?HDF.p.gd.h:HDF.p.gd.v,out=d.ax=='h'?s.y<HDFRW:s.x<HDFRW;if(out)arr.splice(d.i,1);else arr[d.i]=Math.round(d.pos);hdfCommit();return}
 if(k=='pennew'){hdfCommit();return}
 if(k=='adv'){hdfCommit();return}
 if(k=='free'){var Z=HDF.fit/v.S,P=d.pts;if(P.length<2){hdfDraw();return}var closed=false,f=hdfMp(P[0][0],P[0][1]),l=hdfMp(P[P.length-1][0],P[P.length-1][1]);if(P.length>8&&Math.hypot(f[0]-l[0],f[1]-l[1])<24)closed=true;if(closed)P=P.slice(0,P.length-1);
  var R=hdfRDP(P,Z*.35),c=hdfFitPoly(R,closed,Z,40);if(!c){hdfDraw();return}if(closed)hdfOrient(c);if(HDF.ext)hdfExtremes(c);cs.push(c);HDF.sc=[cs.length-1];HDF.sn=[];hdfCommit();return}
 if(k=='brush'){var S0=d.pts;if(S0.length>160){var st=S0.length/160,T=[],i;for(i=0;i<160;i++)T.push(S0[Math.floor(i*st)]);T.push(S0[S0.length-1]);S0=T}
  var a=HDF.brush/2,b=HDF.nib?Math.max(2,a*HDF.nibR):a,res=hdfBrushCs(S0,a,b,HDF.nib?HDF.nibA*Math.PI/180:0,Math.max(.8,1/v.S));if(!res.length){hdfDraw();return}if(HDF.ext)res.forEach(hdfExtremes);var n0=cs.length;res.forEach(function(c){cs.push(c)});HDF.sc=res.map(function(c,i){return n0+i});HDF.sn=[];
  if(HDF.merge){var cl=[],oth=[];cs.forEach(function(c){(c.closed&&c.pts.length>=2?cl:oth).push(c)});var m=hdfBool([{cs:cl,mode:'sum',rule:'nz'}],function(q){return q[0]});g.c=oth.concat(m);HDF.sc=[]}
  hdfCommit();return}
 if(k=='shape'){var A=d.a,B=d.b;if(HDF.shape=='poly'||HDF.shape=='star'){var r=Math.hypot(B.x-A.x,B.y-A.y);if(r>=10){var rot=Math.atan2(B.y-A.y,B.x-A.x),c2=hdfPolyC(A.x,A.y,r,rot,Math.max(3,HDF.sides),HDF.shape=='star'?.45:0);cs.push(c2);HDF.sc=[cs.length-1];HDF.sn=[];hdfCommit()}else hdfDraw();return}
  var x0=A.x,y0=A.y,x1=B.x,y1=B.y;if(HDF.cc){x0=2*A.x-B.x;y0=2*A.y-B.y}
  if(Math.abs(x1-x0)>=10&&Math.abs(y1-y0)>=10){var c3=HDF.shape=='oval'?hdfOvalC(x0,y0,x1,y1):HDF.shape=='rrect'?hdfRRectC(x0,y0,x1,y1,HDF.rr):hdfRectC(x0,y0,x1,y1);cs.push(c3);HDF.sc=[cs.length-1];HDF.sn=[];hdfCommit()}else hdfDraw();return}
 if(k=='mq'){var x0s=Math.min(d.a.x,d.b.x),x1s=Math.max(d.a.x,d.b.x),y0s=Math.min(d.a.y,d.b.y),y1s=Math.max(d.a.y,d.b.y);
  if(x1s-x0s<5&&y1s-y0s<5){if(!d.add){HDF.sn=[];HDF.sc=[]}hdfProps();hdfInfo();hdfDraw();return}
  var sel=d.add?HDF.sn.slice():[],scc=d.add?HDF.sc.slice():[];cs.forEach(function(c,ci){c.pts.forEach(function(pt,pi){var m=hdfMp(pt.x,pt.y);if(m[0]>=x0s&&m[0]<=x1s&&m[1]>=y0s&&m[1]<=y1s&&!sel.some(function(q){return q[0]==ci&&q[1]==pi})){sel.push([ci,pi]);if(scc.indexOf(ci)<0)scc.push(ci)}})});HDF.sn=sel;HDF.sc=scc;hdfProps();hdfInfo();hdfDraw();return}
 if(!d.moved){
  if(k=='nodes'&&d.tapSel){HDF.sn=[[d.a.c,d.a.p]];HDF.sc=[d.a.c]}
  else if(k=='seg'&&HDF.tool=='sel'){var c=cs[d.c],n=c.pts.length;HDF.sn=[[d.c,d.i],[d.c,(d.i+1)%n]];HDF.sc=[d.c]}
  else if(k=='cvn'){var pt=cs[d.c].pts[d.p];if(pt.i||pt.o||pt.s){hdfRestore(d.snap);var p2=cs[d.c].pts[d.p];p2.i=p2.o=null;p2.s=0}else{hdfSetType(cs[d.c],d.p,1)}hdfCommit();return}
  hdfProps();hdfCtx();hdfInfo();hdfDraw();return}
 if(k=='xs'&&d.sx*d.sy<0){}
 hdfCommit()}

/* ---- v2-132 glyph editor: canvas rendering ---- */
function hdfTrace(x,cs){cs.forEach(function(c){var n=c.pts.length;if(!n)return;var m=hdfMp(c.pts[0].x,c.pts[0].y);x.moveTo(m[0],m[1]);var sg=hdfNSeg(c),i;for(i=0;i<sg;i++){var s=hdfSeg(c,i),q=hdfMp(s.p3[0],s.p3[1]);if(s.cub){var a=hdfMp(s.c1[0],s.c1[1]),b=hdfMp(s.c2[0],s.c2[1]);x.bezierCurveTo(a[0],a[1],b[0],b[1],q[0],q[1])}else x.lineTo(q[0],q[1])}if(c.closed)x.closePath()})}
function hdfRulerStep(S){var st=[1,2,5,10,20,25,50,100,200,250,500,1000],i;for(i=0;i<st.length;i++)if(st[i]*S>=46)return st[i];return 2000}
function hdfDrawRulers(x,W,H,col,bg,gold){var v=HDF.v,R=HDFRW,st=hdfRulerStep(v.S),i;x.save();x.globalAlpha=.92;x.fillStyle=bg;x.fillRect(0,0,W,R);x.fillRect(0,0,R,H);x.globalAlpha=1;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=1;x.font='9px system-ui,sans-serif';x.textBaseline='middle';x.textAlign='left';
 x.beginPath();x.moveTo(0,R+.5);x.lineTo(W,R+.5);x.moveTo(R+.5,0);x.lineTo(R+.5,H);x.globalAlpha=.4;x.stroke();x.globalAlpha=.75;x.beginPath();
 var x0=Math.floor((R-v.ox)/v.S/st)*st,x1=Math.ceil((W-v.ox)/v.S/st)*st,y1=Math.ceil((v.oy-R)/v.S/st)*st,y0=Math.floor((v.oy-H)/v.S/st)*st;
 for(i=x0;i<=x1;i+=st){var a=v.ox+i*v.S;if(a<R)continue;x.moveTo(a+.5,R-5);x.lineTo(a+.5,R)}x.stroke();
 for(i=x0;i<=x1;i+=st){var a2=v.ox+i*v.S;if(a2<R+14)continue;x.fillText(String(i),a2+2,6)}
 x.beginPath();for(i=y0;i<=y1;i+=st){var b=v.oy-i*v.S;if(b<R)continue;x.moveTo(R-5,b+.5);x.lineTo(R,b+.5)}x.stroke();
 x.save();x.textAlign='center';for(i=y0;i<=y1;i+=st){var b2=v.oy-i*v.S;if(b2<R+16)continue;x.save();x.translate(7,b2-2);x.rotate(-Math.PI/2);x.fillText(String(i),0,0);x.restore()}x.restore();
 if(HDF.cur){x.strokeStyle=gold;x.globalAlpha=1;var cx=v.ox+HDF.cur.x*v.S,cy=v.oy-HDF.cur.y*v.S;x.beginPath();x.moveTo(cx+.5,0);x.lineTo(cx+.5,R);x.moveTo(0,cy+.5);x.lineTo(R,cy+.5);x.stroke()}
 x.restore()}
function hdfDrawComb(x,cs,col){x.save();x.strokeStyle='#e0457b';x.globalAlpha=.85;x.lineWidth=1;cs.forEach(function(c){var sg=hdfNSeg(c),i,k;for(i=0;i<sg;i++){var s=hdfSeg(c,i);if(!s.cub)continue;var b=[s.p0,s.c1,s.c2,s.p3],N=24,tips=[];x.beginPath();for(k=0;k<=N;k++){var t=k/N,q=hdfBzAt(b,t),d1=hdfBzD1(b,t),d2=hdfBzD2(b,t),l=Math.hypot(d1[0],d1[1])||1,kp=(d1[0]*d2[1]-d1[1]*d2[0])/(l*l*l),L=Math.max(-160,Math.min(160,kp*6000)),tip=[q[0]-d1[1]/l*L,q[1]+d1[0]/l*L],a=hdfMp(q[0],q[1]),e=hdfMp(tip[0],tip[1]);x.moveTo(a[0],a[1]);x.lineTo(e[0],e[1]);tips.push(e)}x.stroke();x.beginPath();tips.forEach(function(e,j){if(j)x.lineTo(e[0],e[1]);else x.moveTo(e[0],e[1])});x.stroke()}});x.restore()}
function hdfDrawNode(x,pt,m,sel,bg,gold,first){x.fillStyle=sel?gold:bg;x.strokeStyle=gold;x.lineWidth=first?2.4:1.5;x.beginPath();var s=pt.s||0;
 if(s==0){var r=first?5.5:4;x.rect(m[0]-r,m[1]-r,2*r,2*r)}else if(s==2){x.moveTo(m[0],m[1]-6);x.lineTo(m[0]+6,m[1]);x.lineTo(m[0],m[1]+6);x.lineTo(m[0]-6,m[1]);x.closePath()}else x.arc(m[0],m[1],first?5.8:4.8,0,6.2832);x.fill();x.stroke();
 if(s==3){x.fillStyle=sel?bg:gold;x.beginPath();x.arc(m[0],m[1],1.6,0,6.2832);x.fill()}}
function hdfDraw(){var cv=HDF.cv;if(!cv||HDF.cp==null||!HDF.x)return;var x=HDF.x,W=HDF.cw,H=HDF.ch,v=HDF.v,g=hdfG(HDF.cp),p=HDF.p,cs=g.c,cst=getComputedStyle(cv),col=cst.color,bg=cst.backgroundColor,gold=(getComputedStyle(D.documentElement).getPropertyValue('--g')||'').trim()||'#d4af37',vm=HDF.vm,i,d=HDF.drag;
 x.clearRect(0,0,W,H);x.lineWidth=1;
 var closed=cs.filter(function(c){return c.closed&&c.pts.length>2});
 if(vm=='p'){x.beginPath();hdfTrace(x,closed);x.fillStyle=col;x.fill('nonzero');var by0=hdfMp(0,0)[1];x.globalAlpha=.25;x.strokeStyle=gold;x.beginPath();x.moveTo(0,by0);x.lineTo(W,by0);x.stroke();x.globalAlpha=1;
  if(HDF.rul)hdfDrawRulers(x,W,H,col,bg,gold);return}
 if(HDF.grid){var st=HDF.gs||50,k=1;while(v.S*st<7&&k<64){st*=2;k*=2}var x0=Math.floor((0-v.ox)/v.S/st)*st,x1=Math.ceil((W-v.ox)/v.S/st)*st,y1=Math.ceil(v.oy/v.S/st)*st,y0=Math.floor((v.oy-H)/v.S/st)*st,j;x.strokeStyle=col;
  x.globalAlpha=.07;x.beginPath();for(j=x0;j<=x1;j+=st){if(Math.round(j/st)%5==0)continue;var a=hdfMp(j,0)[0];x.moveTo(a,0);x.lineTo(a,H)}for(j=y0;j<=y1;j+=st){if(Math.round(j/st)%5==0)continue;var b=hdfMp(0,j)[1];x.moveTo(0,b);x.lineTo(W,b)}x.stroke();
  x.globalAlpha=.16;x.beginPath();for(j=x0;j<=x1;j+=st){if(Math.round(j/st)%5)continue;var a2=hdfMp(j,0)[0];x.moveTo(a2,0);x.lineTo(a2,H)}for(j=y0;j<=y1;j+=st){if(Math.round(j/st)%5)continue;var b2=hdfMp(0,j)[1];x.moveTo(0,b2);x.lineTo(W,b2)}x.stroke();x.globalAlpha=1}
 x.font='9px system-ui,sans-serif';x.textBaseline='bottom';x.textAlign='right';
 [[p.asc,.35,'asc'],[p.cap,.25,'cap'],[p.xh,.25,'x'],[p.desc,.35,'desc']].forEach(function(l){var yy=hdfMp(0,l[0])[1];x.strokeStyle=col;x.fillStyle=col;x.globalAlpha=l[1];x.setLineDash([5,5]);x.beginPath();x.moveTo(0,yy);x.lineTo(W,yy);x.stroke();x.setLineDash([]);x.fillText(l[2],W-3,yy-1);x.globalAlpha=1});
 var by=hdfMp(0,0)[1];x.strokeStyle=gold;x.lineWidth=1.5;x.beginPath();x.moveTo(0,by);x.lineTo(W,by);x.stroke();
 var l0=hdfMp(0,0)[0],l1=hdfMp(g.a,0)[0];x.globalAlpha=.7;x.beginPath();x.moveTo(l0,0);x.lineTo(l0,H);x.stroke();x.lineWidth=2.5;x.beginPath();x.moveTo(l1,0);x.lineTo(l1,H);x.stroke();x.globalAlpha=1;x.lineWidth=1;
 x.strokeStyle='#14b8c8';x.lineWidth=1;p.gd.h.forEach(function(y){var yy=hdfMp(0,y)[1];x.beginPath();x.moveTo(0,yy);x.lineTo(W,yy);x.stroke()});p.gd.v.forEach(function(xx){var a=hdfMp(xx,0)[0];x.beginPath();x.moveTo(a,0);x.lineTo(a,H);x.stroke()});
 if(d&&(d.k=='gnew'||d.k=='gmove')&&d.s){x.setLineDash([4,3]);x.beginPath();if(d.ax=='h'){var gy=hdfMp(0,d.pos)[1];x.moveTo(0,gy);x.lineTo(W,gy)}else{var gx=hdfMp(d.pos,0)[0];x.moveTo(gx,0);x.lineTo(gx,H)}x.stroke();x.setLineDash([])}
 if(HDF.ref){x.save();x.globalAlpha=HDF.refo;x.fillStyle=col;x.font=(1000*v.S)+'px '+HDF.ref;x.textAlign='center';x.textBaseline='alphabetic';x.fillText(hdfChar(HDF.cp),hdfMp(g.a>0?g.a/2:300,0)[0],by);x.restore()}
 if(HDF.ghost){var gc=HDF.ghost.codePointAt(0),gg=p.g[gc];if(gg&&gg.c&&gg.c.length){x.save();x.beginPath();hdfTrace(x,gg.c.filter(function(c){return c.pts.length>2}));x.globalAlpha=.16;x.fillStyle=col;x.fill('nonzero');x.globalAlpha=.4;x.strokeStyle=col;x.stroke();x.restore()}}
 x.beginPath();hdfTrace(x,closed);if(vm=='n'){x.globalAlpha=.3;x.fillStyle=gold;x.fill('nonzero');x.globalAlpha=1}x.strokeStyle=gold;x.lineWidth=1.6;x.stroke();
 cs.forEach(function(c){if(!c.closed){x.beginPath();hdfTrace(x,[c]);x.stroke()}});
 if(HDF.cb)hdfDrawComb(x,cs,col);
 HDF.sc.forEach(function(ci){if(cs[ci]){x.beginPath();hdfTrace(x,[cs[ci]]);x.strokeStyle=gold;x.lineWidth=3;x.stroke();x.lineWidth=1}});
 if(HDF.tool=='pen'&&HDF.open>=0&&HDF.hov&&cs[HDF.open]&&cs[HDF.open].pts.length){var oc=cs[HDF.open],lp=oc.pts[oc.pts.length-1],a1=hdfMp(lp.x,lp.y),h1=HDF.hov,b1=hdfMp(h1.x,h1.y),c1=lp.o?hdfMp(lp.o[0],lp.o[1]):a1;x.save();x.setLineDash([5,4]);x.globalAlpha=.8;x.strokeStyle=gold;x.beginPath();x.moveTo(a1[0],a1[1]);x.bezierCurveTo(c1[0],c1[1],b1[0],b1[1],b1[0],b1[1]);x.stroke();x.restore()}
 /* anchors + handles */
 cs.forEach(function(c,ci){c.pts.forEach(function(pt,pi){var m=hdfMp(pt.x,pt.y),sel=hdfIsSn(ci,pi);if(sel||HDF.hh){['i','o'].forEach(function(w){if(!pt[w])return;var h=hdfMp(pt[w][0],pt[w][1]);x.strokeStyle=gold;x.lineWidth=1;x.globalAlpha=.85;x.beginPath();x.moveTo(m[0],m[1]);x.lineTo(h[0],h[1]);x.stroke();x.globalAlpha=1;x.fillStyle=gold;x.beginPath();x.arc(h[0],h[1],4.5,0,6.2832);x.fill()})}})});
 cs.forEach(function(c,ci){c.pts.forEach(function(pt,pi){hdfDrawNode(x,pt,hdfMp(pt.x,pt.y),hdfIsSn(ci,pi),bg,gold,pi==0)})});
 if(HDF.acc.pf&&cs.length>1){x.fillStyle=col;x.font='bold 11px system-ui,sans-serif';x.textAlign='left';x.textBaseline='middle';cs.forEach(function(c,ci){if(!c.pts.length)return;var m=hdfMp(c.pts[0].x,c.pts[0].y);x.globalAlpha=.85;x.fillText(String(ci+1),m[0]+8,m[1]-9);x.globalAlpha=1})}
 var bx=hdfBox();if(bx&&!d){x.save();x.setLineDash([4,3]);x.strokeStyle=gold;x.lineWidth=1;x.beginPath();x.moveTo(bx.P[0][0],bx.P[0][1]);x.lineTo(bx.P[1][0],bx.P[1][1]);x.lineTo(bx.P[2][0],bx.P[2][1]);x.lineTo(bx.P[3][0],bx.P[3][1]);x.closePath();x.stroke();x.setLineDash([]);x.beginPath();x.moveTo((bx.P[0][0]+bx.P[1][0])/2,bx.P[0][1]);x.lineTo(bx.rot[0],bx.rot[1]);x.stroke();x.fillStyle=bg;bx.P.forEach(function(q){x.beginPath();x.rect(q[0]-5,q[1]-5,10,10);x.fill();x.stroke()});x.beginPath();x.arc(bx.rot[0],bx.rot[1],6,0,6.2832);x.fill();x.stroke();x.restore()}
 /* transient overlays */
 if(d){if(d.k=='brush'){x.save();x.globalAlpha=.45;x.fillStyle=gold;var a3=HDF.brush/2,b3=HDF.nib?Math.max(2,a3*HDF.nibR):a3,an=HDF.nib?HDF.nibA*Math.PI/180:0;d.pts.forEach(function(q){var m=hdfMp(q.x,q.y);x.beginPath();x.ellipse(m[0],m[1],a3*q.k*v.S,b3*q.k*v.S,-an,0,6.2832);x.fill()});x.restore()}
  else if(d.k=='free'){x.save();x.strokeStyle=gold;x.lineWidth=2;x.lineJoin='round';x.beginPath();d.pts.forEach(function(q,j){var m=hdfMp(q[0],q[1]);if(j)x.lineTo(m[0],m[1]);else x.moveTo(m[0],m[1])});x.stroke();x.restore()}
  else if(d.k=='shape'){var c3;if(HDF.shape=='poly'||HDF.shape=='star'){var rr=Math.hypot(d.b.x-d.a.x,d.b.y-d.a.y);c3=hdfPolyC(d.a.x,d.a.y,rr,Math.atan2(d.b.y-d.a.y,d.b.x-d.a.x),Math.max(3,HDF.sides),HDF.shape=='star'?.45:0)}else{var X0=d.a.x,Y0=d.a.y;if(HDF.cc){X0=2*d.a.x-d.b.x;Y0=2*d.a.y-d.b.y}c3=HDF.shape=='oval'?hdfOvalC(X0,Y0,d.b.x,d.b.y):HDF.shape=='rrect'?hdfRRectC(X0,Y0,d.b.x,d.b.y,HDF.rr):hdfRectC(X0,Y0,d.b.x,d.b.y)}x.setLineDash([6,4]);x.strokeStyle=gold;x.beginPath();hdfTrace(x,[c3]);x.stroke();x.setLineDash([])}
  else if(d.k=='mq'){x.save();x.strokeStyle=gold;x.fillStyle=gold;x.setLineDash([4,3]);var rx=Math.min(d.a.x,d.b.x),ry=Math.min(d.a.y,d.b.y),rw=Math.abs(d.a.x-d.b.x),rh=Math.abs(d.a.y-d.b.y);x.globalAlpha=.1;x.fillRect(rx,ry,rw,rh);x.globalAlpha=1;x.strokeRect(rx,ry,rw,rh);x.restore()}}
 if(HDF.sl&&HDF.sl.length){x.save();x.strokeStyle='#ff3fa4';x.lineWidth=1;x.globalAlpha=.9;HDF.sl.forEach(function(l){x.beginPath();if(l.k=='x'){var a4=hdfMp(l.v,0)[0];x.moveTo(a4,0);x.lineTo(a4,H)}else{var b4=hdfMp(0,l.v)[1];x.moveTo(0,b4);x.lineTo(W,b4)}x.stroke()});x.restore()}
 if(HDF.rul)hdfDrawRulers(x,W,H,col,bg,gold)}
function hdfInfo(){var el=$('#hdfinfo');if(!el||HDF.cp==null)return;var g=hdfG(HDF.cp),tg=hdfTarget(),bb=hdfTBoxT(tg),n=0,cur=HDF.cur?('X '+Math.round(HDF.cur.x)+'  Y '+Math.round(HDF.cur.y)):'',sz=bb?(Math.round(bb.x1-bb.x0)+'\u00d7'+Math.round(bb.y1-bb.y0)):'';g.c.forEach(function(c){n+=c.pts.length});el.textContent=[cur,sz,n+' \u25cf'].filter(Boolean).join(' \u00b7 ');var z=$('#hdfzm');if(z)z.textContent=Math.round(HDF.v.S*100)+'%'}

/* ---- v2-132 glyph editor: tools, panels, events, screens ---- */
function hdfR2(v){return Math.round(v*100)/100}
function hdfTg(k,l){return'<button type="button" class="cdrch'+(HDF[k]?' on':'')+'" data-hdf="tg:'+k+'">'+l+'</button>'}
function hdfToolsHtml(){var el=$('#hdftools');if(!el)return;var tools=[['pen','hpen','hdf_pen'],['sel','hsel','hdf_sel'],['add','hadd','hdf_add'],['del','hdel','hx_del'],['conv','hconv','hx_conv'],['cut','hcut','hx_cut'],['brush','hbrush','hdf_brush'],['shape','hshape','hdf_shape'],['hand','hhand','hdf_hand']];el.innerHTML=tools.map(function(x){return'<button type="button" data-hdf="tool:'+x[0]+'">'+hdfIc(x[1])+'<span>'+t(x[2])+'</span></button>'}).join('');hdfTools()}
function hdfTools(){D.querySelectorAll('#hdftools button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-hdf')=='tool:'+HDF.tool)})}
function hdfSetTool(k){if(HDF.open>=0){hdfFinishOpen();hdfCommit()}HDF.tool=k;HDF.drag=null;HDF.hov=null;HDF.sl=[];hdfTools();hdfCtx();hdfInfo();hdfDraw()}
function hdfCtx(){var el=$('#hdfctx');if(!el)return;var tl=HDF.tool,h='',b=function(a,l,on){return'<button type="button" class="cdrch'+(on?' on':'')+'" data-hdf="'+a+'">'+l+'</button>'},hint=function(k){return'<span class="hxh">'+t(k)+'</span>'};
 if(tl=='pen'){h+=[['bez','hx_pm_bez'],['curv','hx_pm_curv'],['line','hx_pm_line'],['free','hx_pm_free']].map(function(x){return b('pm:'+x[0],t(x[1]),HDF.pm==x[0])}).join('');
  if(HDF.pm=='bez')h+=hdfTg('cusp',t('hx_cusp'));if(HDF.pm!='free')h+=hdfTg('ang','45\u00b0');
  if(HDF.pm=='free')h+=[[1.5,'hx_fine'],[3,'hx_norm'],[6,'hx_smoothf']].map(function(x){return b('sv:fit:'+x[0],t(x[1]),HDF.fit==x[0])}).join('');
  if(HDF.open>=0)h+=b('fin',t('hdf_done'))+b('close',t('hdf_close'))+b('cancel',t('hx_cancel'))}
 else if(tl=='sel'){h+=hdfTg('multi',t('hx_multi'))+hdfTg('lock',t('hx_lock'));
  if(HDF.sn.length)h+=[[0,'hx_corner'],[1,'hx_smooth'],[2,'hx_symm'],[3,'hx_auto']].map(function(x){return b('nt:'+x[0],t(x[1]))}).join('')+b('delp',t('hdf_delp'));
  else if(HDF.sc.length)h+=b('delp',t('hdf_delc'))}
 else if(tl=='conv'){h+=hdfTg('cusp',t('hx_cusp'));if(HDF.sn.length)h+=[[0,'hx_corner'],[1,'hx_smooth'],[2,'hx_symm'],[3,'hx_auto']].map(function(x){return b('nt:'+x[0],t(x[1]))}).join('');h+=hint('hx_h_conv')}
 else if(tl=='brush'){h+=b('sv:nib:0',t('hx_round'),!HDF.nib)+b('sv:nib:1',t('hx_nib'),HDF.nib)+hdfTg('merge',t('hx_merge'))+hdfTg('prs',t('hx_press'))}
 else if(tl=='shape'){h+=[['rect','hdf_rect'],['rrect','hx_rrect'],['oval','hdf_oval'],['poly','hx_poly'],['star','hx_star']].map(function(x){return b('sv:shape:'+x[0],t(x[1]),HDF.shape==x[0])}).join('')+hdfTg('cc',t('hx_center'))+hdfTg('sq',t('hx_square'))}
 else if(tl=='add')h+=hint('hx_h_add');else if(tl=='del')h+=hint('hx_h_del');else if(tl=='cut')h+=hint('hx_h_cut');else if(tl=='hand')h+=hint('hx_h_hand');
 el.innerHTML=h}
/* ---- property panels ---- */
function hdfProps(){var el=$('#hdfprops');if(!el||HDF.cp==null)return;var g=hdfG(HDF.cp),p=HDF.p,tg=hdfTarget(),bb=hdfTBoxT(tg),all=hdfTBox(g.c),
 acc=function(k,title,body){return'<details class="hxd" data-acc="'+k+'"'+(HDF.acc[k]?' open':'')+'><summary>'+title+'</summary><div class="hxb">'+body+'</div></details>'},
 nf=function(id,lab,val,st,hs){return'<label class="hxf"><span>'+lab+'</span><input type="number" inputmode="decimal" step="'+(st||1)+'" '+(hs?'data-hs':'data-hn')+'="'+id+'" value="'+val+'"></label>'},
 ch=function(a,l,on){return'<button type="button" class="cdrch'+(on?' on':'')+'" data-hdf="'+a+'">'+l+'</button>'},
 row=function(x){return'<div class="cdrchs hxr">'+x+'</div>'},mu=function(k){return'<p class="mu">'+t(k)+'</p>'},html='';
 /* node */
 var nb='';if(!HDF.sn.length)nb+=mu('hx_nodeinfo');else{var q=HDF.sn[0],pt=g.c[q[0]]&&g.c[q[0]].pts[q[1]];
  nb+=row([[0,'hx_corner'],[1,'hx_smooth'],[2,'hx_symm'],[3,'hx_auto']].map(function(x){return ch('nt:'+x[0],t(x[1]),HDF.sn.length==1&&pt&&(pt.s||0)==x[0])}).join(''));
  if(HDF.sn.length==1&&pt){var P=[pt.x,pt.y],hi=pt.i||P,ho=pt.o||P;nb+='<div class="hxg">'+nf('nx','X',hdfR2(pt.x))+nf('ny','Y',hdfR2(pt.y))+'</div><label class="hxl">'+t('hx_hin')+'</label><div class="hxg">'+nf('hil',t('hx_len'),hdfR2(hdfDst(hi,P)))+nf('hia',t('hx_ang'),hdfR2(Math.atan2(hi[1]-pt.y,hi[0]-pt.x)*180/Math.PI))+'</div><label class="hxl">'+t('hx_hout')+'</label><div class="hxg">'+nf('hol',t('hx_len'),hdfR2(hdfDst(ho,P)))+nf('hoa',t('hx_ang'),hdfR2(Math.atan2(ho[1]-pt.y,ho[0]-pt.x)*180/Math.PI))+'</div>'+row(ch('ri',t('hx_ri'))+ch('ro',t('hx_ro')))}
  nb+=row(ch('op:ext',t('hx_ext'))+ch('op:brk',t('hx_break'))+ch('delp',t('hdf_delp')))}
 html+=acc('node',t('hx_s_node')+(HDF.sn.length?' ('+HDF.sn.length+')':''),nb);
 /* transform */
 var xb='';var cnt=tg.k=='n'?tg.list.length:tg.idx.length;xb+='<p class="mu">'+t('hx_tg_'+tg.k)+' \u00b7 '+cnt+'</p>';
 if(bb){var rp=hdfRefPt(bb),A='';var i;for(i=0;i<9;i++)A+='<button type="button" class="'+(HDF.anc==i?'on':'')+'" data-hdf="anc:'+i+'" aria-label="ref"></button>';
  xb+='<div class="hxtr"><div class="hxa">'+A+'</div><div class="hxg">'+nf('x','X',hdfR2(rp[0]))+nf('y','Y',hdfR2(rp[1]))+nf('w',t('hx_w'),hdfR2(bb.x1-bb.x0))+nf('h',t('hx_h'),hdfR2(bb.y1-bb.y0))+'</div></div>'+row(hdfTg('lock',t('hx_lock')))}
 xb+='<div class="hxg">'+nf('rot',t('hx_rotby'),0)+nf('skw',t('hx_skew'),0)+nf('spx',t('hx_sx'),100)+nf('spy',t('hx_sy'),100)+'</div>';
 xb+=row(ch('xf:rot:15','\u21ba 15\u00b0')+ch('xf:rot:-15','\u21bb 15\u00b0')+ch('xf:rot:90','\u21ba 90\u00b0')+ch('xf:rot:-90','\u21bb 90\u00b0')+ch('xf:fx',t('hdf_flipx'))+ch('xf:fy',t('hdf_flipy'))+ch('mcp:x',t('hx_mcx'))+ch('mcp:y',t('hx_mcy')));
 xb+='<label class="hxl">'+t('hx_step')+'</label>'+row(hdfCh('sv:step',[[1,'1'],[5,'5'],[10,'10'],[25,'25'],[50,'50']],HDF.step))+'<div class="hxar"><button type="button" data-hdf="xf:mvs:-1:0">\u2190</button><button type="button" data-hdf="xf:mvs:0:1">\u2191</button><button type="button" data-hdf="xf:mvs:0:-1">\u2193</button><button type="button" data-hdf="xf:mvs:1:0">\u2192</button></div>';
 xb+=row(ch('ali:l','\u21e4')+ch('ali:c','\u21f9')+ch('ali:r','\u21e5')+ch('ali:t','\u2912')+ch('ali:m','\u2550')+ch('ali:b','\u2913'));
 html+=acc('xf',t('hx_s_xf'),xb);
 /* path tools */
 var pb='';
 pb+='<label class="hxl">'+t('hx_smooth_p')+'</label>'+row(hdfCh('sv:smo',[[1,t('hx_s1')],[2,t('hx_s2')],[3,t('hx_s3')]],HDF.smo)+ch('op:smooth',t('hx_apply')));
 pb+='<label class="hxl">'+t('hx_simplify')+'</label><div class="hxg">'+nf('simp',t('hx_tol'),HDF.simp,.5,1)+'</div>'+row(ch('op:simp',t('hx_apply')));
 pb+='<label class="hxl">'+t('hx_offset')+'</label><div class="hxg">'+nf('off',t('hx_dist'),HDF.off,1,1)+'</div>'+row(hdfCh('sv:ojn',[['round',t('hx_jn_round')],['miter',t('hx_jn_miter')],['bevel',t('hx_jn_bevel')]],HDF.ojn)+ch('op:off',t('hx_apply')))+mu('hx_off_tip');
 pb+='<label class="hxl">'+t('hx_stroke')+'</label><div class="hxg">'+nf('sw',t('hx_sw'),HDF.sw,1,1)+'</div>'+row(hdfCh('sv:scap',[['butt',t('hx_cap_butt')],['round',t('hx_cap_round')],['square',t('hx_cap_square')]],HDF.scap)+ch('op:stroke',t('hx_apply')));
 pb+='<label class="hxl">'+t('hx_s_path')+'</label>'+row(ch('op:join',t('hx_join_p'))+ch('op:brk',t('hx_break'))+ch('op:close',t('hx_close_p'))+ch('op:rev',t('hx_rev'))+ch('op:ext',t('hx_ext'))+ch('op:rnd',t('hx_round_c'))+ch('op:clean',t('hx_clean'))+ch('op:ovl',t('hx_ovl'))+hdfTg('ext',t('hx_exts')));
 html+=acc('path',t('hx_s_path'),pb);
 /* pathfinder */
 var fb='',paths='';g.c.forEach(function(c,i){paths+=ch('pc:'+i,String(i+1)+(c.closed?'':'~'),HDF.sc.indexOf(i)>=0)});
 fb+='<label class="hxl">'+t('hx_paths')+'</label>'+row(paths||'<span class="mu">-</span>')+row(ch('op:pfuni',t('hx_pf_uni'))+ch('op:pfsub',t('hx_pf_sub'))+ch('op:pfint',t('hx_pf_int'))+ch('op:pfxor',t('hx_pf_xor'))+ch('op:pfdiv',t('hx_pf_div')))+mu('hx_pf_tip');
 html+=acc('pf',t('hx_s_pf'),fb);
 /* canvas */
 var cb='';
 cb+='<label class="hxl">'+t('hdf_grid')+'</label>'+row(hdfCh('sv:grid',[[1,t('cdr_on')],[0,t('cdr_off')]],HDF.grid)+hdfCh('sv:gs',[[10,'10'],[25,'25'],[50,'50'],[100,'100']],HDF.gs));
 cb+='<label class="hxl">'+t('hdf_snap')+'</label>'+row(hdfCh('sv:snap',[[0,t('cdr_off')],[1,'1'],[5,'5'],[10,'10'],[25,'25'],[50,'50']],HDF.snap))+row(hdfTg('sp',t('hx_snap_pts'))+hdfTg('sg',t('hx_snap_gd'))+hdfTg('sm',t('hx_snap_mt'))+hdfTg('rul',t('hx_rulers')));
 cb+='<label class="hxl">'+t('hx_view')+'</label>'+row(hdfCh('sv:vm',[['n',t('hx_v_n')],['o',t('hx_v_o')],['p',t('hx_v_p')]],HDF.vm)+hdfTg('cb',t('hx_comb'))+hdfTg('hh',t('hx_allh')));
 cb+='<label class="hxl">'+t('hx_csize')+'</label>'+row(hdfCh('sv:hz',[[0,'S'],[1,'M'],[2,'L']],HDF.hz));
 cb+='<label class="hxl">'+t('hx_guides')+' ('+(p.gd.h.length+p.gd.v.length)+')</label><div class="hxg"><label class="hxf"><span>'+t('hx_gh')+'</span><input type="number" id="hdfgh" inputmode="decimal" step="1" placeholder="Y"></label><label class="hxf"><span>'+t('hx_gv')+'</span><input type="number" id="hdfgv" inputmode="decimal" step="1" placeholder="X"></label></div>'+row(ch('gadd',t('hx_gadd'))+ch('gclr',t('hx_gclr')));
 cb+='<div class="hxg"><label class="hxf"><span>'+t('hx_ghost')+'</span><input type="text" maxlength="2" data-hs="ghost" value="'+esc(HDF.ghost||'')+'"></label></div>';
 cb+='<label class="hxl">'+t('hdf_ref')+'</label><select id="hdfref" class="hdfsel">'+HDFREF.map(function(r){return'<option value="'+esc(r[0])+'"'+(r[0]==HDF.ref?' selected':'')+'>'+(r[0]?esc(r[1]):t('hdf_none'))+'</option>'}).join('')+'</select>';
 cb+='<label class="hxl">'+t('hdf_bw')+'</label><div class="hxg">'+nf('brush',t('hdf_bw'),HDF.brush,5,1)+nf('nibA',t('hx_nib_a'),HDF.nibA,5,1)+nf('nibR',t('hx_nib_r'),HDF.nibR,.05,1)+nf('rr',t('hx_radius'),HDF.rr,5,1)+nf('sides',t('hx_sides'),HDF.sides,1,1)+'</div>';
 html+=acc('cv',t('hx_s_canvas'),cb);
 /* metrics */
 var mb='';if(all)mb+='<div class="hxg">'+nf('adv',t('hdf_width'),Math.round(g.a))+nf('lsb',t('hx_lsb'),hdfR2(all.x0))+nf('rsb',t('hx_rsb'),hdfR2(g.a-all.x1))+nf('bear',t('hx_bear'),HDF.bear,5,1)+'</div>';else mb+='<div class="hxg">'+nf('adv',t('hdf_width'),Math.round(g.a))+nf('bear',t('hx_bear'),HDF.bear,5,1)+'</div>';
 mb+=row(ch('auto',t('hdf_auto'))+ch('mark',t('hdf_marks'),Math.round(g.a)==0))+mu('hdf_tipm');
 html+=acc('mt',t('hx_s_metrics'),mb);
 /* import / copy */
 html+=acc('im',t('hx_s_import'),row(ch('pan:svg',t('hdf_svgi'))+ch('pan:copy',t('hdf_copyf'))+ch('clr',t('hdf_clr')))+'<div class="hdfpan" id="hdfpan"></div>');
 /* check */
 var r=hdfCheck(),cl='',tot=0;[['open','hx_chk_open'],['tiny','hx_chk_tiny'],['ext','hx_chk_ext'],['dup','hx_chk_dup'],['rev','hx_chk_rev']].forEach(function(x){if(r[x[0]]){tot+=r[x[0]];cl+='<div class="hxk"><span>'+t(x[1])+'</span><b>'+r[x[0]]+'</b></div>'}});
 cl=tot?cl+row(ch('op:clean',t('hx_fixall'))):'<p class="mu">'+t('hx_chk_ok')+'</p>';
 html+=acc('ck',t('hx_s_check')+(tot?' ('+tot+')':''),cl);
 html+=acc('hp',t('hx_s_help'),mu('hx_help'));
 if(html===HDF._ph)return;var open=$('#hdfpan'),keepPan=open&&open.innerHTML&&open.getAttribute('data-k'),pk=keepPan?open.getAttribute('data-k'):'';HDF._ph=html;el.innerHTML=html;if(pk)hdfPanel(pk,true)}
/* ---- glyph editor screen ---- */
function hdfOpen(cp){if(!HDF.p.gd)HDF.p.gd={h:[],v:[]};HDF.cp=cp;HDF.open=-1;HDF.sn=[];HDF.sc=[];HDF.drag=null;HDF.ptr={};HDF.gest=null;HDF.sl=[];HDF.hov=null;hdfFinishOpen();
 var cur=hdfSnapJ(),hm=HDF.hm[cp];if(hm&&hm.h[hm.i]===cur){HDF.hist=hm.h;HDF.hi=hm.i}else{HDF.hist=[cur];HDF.hi=0}
 var m=$('#hdfmain');
 m.innerHTML='<div class="hdfe"><div class="hdftop"><div class="sthd"><button type="button" class="ib" data-hdf="back" aria-label="back">'+ic('l')+'</button><span class="hdfch">'+esc(hdfLabel(cp))+'</span><b>'+hdfHex(cp)+'</b><button type="button" class="cdrib" data-hdf="undo" aria-label="'+t('cdr_undo')+'">'+ic('undo')+'</button><button type="button" class="cdrib" data-hdf="redo" aria-label="'+t('cdr_redo')+'">'+ic('redo')+'</button><button type="button" class="stcr" data-hdf="back">'+ic('chk')+'<span>'+t('hdf_done')+'</span></button></div><div class="hdfcw" id="hdfcw"><canvas id="hdfcv"></canvas></div><div class="hdfst"><button type="button" data-hdf="zoom:-1">\u2212</button><b id="hdfzm">100%</b><button type="button" data-hdf="zoom:1">+</button><button type="button" data-hdf="zoom:fit">'+t('hdf_fit')+'</button><button type="button" data-hdf="zoom:sel">\u25a3</button><span id="hdfinfo"></span></div><div class="hdftools" id="hdftools"></div><div class="hdfctx" id="hdfctx"></div></div><div class="cdrs hdfpr" id="hdfprops"></div></div>';
 var cv=$('#hdfcv');['pointerdown','pointermove','pointerup','pointercancel'].forEach(function(ev){cv.addEventListener(ev,hdfPtr)});cv.addEventListener('wheel',hdfWheel,{passive:false});
 HDF._ph='';hdfLayout();hdfFit();hdfToolsHtml();hdfCtx();hdfProps();hdfInfo();hdfAfter()}
function hdfBack(){if(HDF.cp==null)return;hdfFinishOpen();HDF.hm[HDF.cp]={h:HDF.hist,i:HDF.hi};hdfSaveNow();hdfRegister();HDF.tab='gl';HDF.cp=null;hdfShell()}
function hdfAuto(){var g=hdfG(HDF.cp),bb=hdfTBox(g.c);if(!bb)return;var dx=HDF.bear-bb.x0;hdfMapPts(g.c,function(x,y){return[x+dx,y]});g.a=Math.round(bb.x1-bb.x0+2*HDF.bear);hdfCommit();hdfFit();hdfDraw()}
function hdfPanel(k,keep){var el=$('#hdfpan');if(!el)return;if(!k||(!keep&&el.getAttribute('data-k')==k)){el.innerHTML='';el.removeAttribute('data-k');return}el.setAttribute('data-k',k);
 el.innerHTML=k=='svg'?'<label>'+t('hdf_svg_p')+'</label><textarea id="hdfsvg" rows="4" style="width:100%"></textarea><div class="cdrrow"><button type="button" class="btn wide" data-hdf="svgok">'+ic('chk')+t('cdr_open')+'</button></div>':'<label>'+t('hdf_cf_p')+'</label><div class="cdrrow"><input id="hdfcpy" type="text" maxlength="2" style="width:80px"><button type="button" class="btn" data-hdf="cpyok">'+ic('chk')+t('cdr_open')+'</button></div>'}
function hdfDoSvg(){var ta=$('#hdfsvg');if(!ta)return;var cs=hdfParseSvg(ta.value);if(!cs){toast(t('hdf_svg_e'));return}var bb=hdfBBox(cs),h=bb.y1-bb.y0||1,f=(HDF.p.cap||700)/h,g=hdfG(HDF.cp);hdfMapPts(cs,function(x,y){return[(x-bb.x0)*f+HDF.bear,(bb.y1-y)*f]});hdfNest(cs);var n0=g.c.length;cs.forEach(function(c){g.c.push(c)});HDF.sc=cs.map(function(c,i){return n0+i});HDF.sn=[];g.a=Math.round((bb.x1-bb.x0)*f+2*HDF.bear);hdfPanel('');hdfCommit();hdfFit();hdfDraw()}
function hdfDoCopy(){var inp=$('#hdfcpy');if(!inp||!inp.value)return;var cp=inp.value.codePointAt(0),src=HDF.p.g[cp];if(!src||!src.c.length){toast(t('hdf_empty'));return}var g=hdfG(HDF.cp);g.c=JSON.parse(JSON.stringify(src.c));g.a=src.a;HDF.sn=[];HDF.sc=[];hdfPanel('');hdfCommit();hdfFit();hdfDraw()}
/* ---- keyboard ---- */
function hdfKey(e){if(!HDF||HDF.cp==null||!$('#hdfcv'))return;var tn=e.target&&e.target.tagName;if(tn=='INPUT'||tn=='TEXTAREA'||tn=='SELECT')return;var k=e.key,mod=e.ctrlKey||e.metaKey;
 if(mod&&(k=='z'||k=='Z')){e.preventDefault();hdfUndo(e.shiftKey?1:-1);return}
 if(mod&&(k=='y'||k=='Y')){e.preventDefault();hdfUndo(1);return}
 if(mod&&(k=='a'||k=='A')){e.preventDefault();var g=hdfG(HDF.cp);HDF.sn=[];g.c.forEach(function(c,ci){c.pts.forEach(function(pt,pi){HDF.sn.push([ci,pi])})});HDF.sc=g.c.map(function(c,i){return i});hdfProps();hdfCtx();hdfInfo();hdfDraw();return}
 if(mod)return;
 if(k=='Delete'||k=='Backspace'){e.preventDefault();if(HDF.open>=0){var go=hdfG(HDF.cp),oc=go.c[HDF.open];if(oc&&oc.pts.length>1){oc.pts.pop();hdfAutoC(oc);hdfCommit()}else hdfDelSel()}else hdfDelSel();return}
 if(k=='Enter'){if(HDF.open>=0){hdfFinishOpen();hdfCommit()}return}
 if(k=='Escape'){if(HDF.drag){var d=HDF.drag;if(d.snap)hdfRestore(d.snap);HDF.drag=null;hdfDraw()}else if(HDF.open>=0){hdfFinishOpen();hdfCommit()}else{HDF.sn=[];HDF.sc=[];hdfProps();hdfCtx();hdfInfo();hdfDraw()}return}
 if(k==' '){HDF.spc=1;e.preventDefault();return}
 var ar={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[k];if(ar){e.preventDefault();var st=e.shiftKey?HDF.step:1;hdfXf('mv',ar[0]*st,ar[1]*st);return}
 var tk={p:'pen',v:'sel',a:'sel',c:'conv',b:'brush',m:'shape',h:'hand',x:'cut'}[String(k).toLowerCase()];if(tk)hdfSetTool(tk);else if(k=='+'||k=='=')hdfZoom(1);else if(k=='-')hdfZoom(-1);else if(k=='0')hdfZoom('fit')}
function hdfKeyUp(e){if(e.key==' ')HDF.spc=0}
/* ---- events ---- */
function hdfClick(e){var b=e.target.closest?e.target.closest('[data-hdf]'):null;if(!b||b.disabled)return;var a=b.getAttribute('data-hdf').split(':'),k=a[0],p=HDF.p;
 if(k=='tab'){HDF.tab=a[1];hdfTabs();hdfBody()}
 else if(k=='set'){var ix=p.sets.indexOf(a[1]);if(ix>=0)p.sets.splice(ix,1);else p.sets.push(a[1]);hdfSaveSoon();hdfBody()}
 else if(k=='addc'){var inp=$('#hdfxc');if(inp&&inp.value){p.extra=(p.extra||'')+inp.value.replace(/\s+/g,'');hdfSaveSoon();hdfBody()}}
 else if(k=='g')hdfOpen(+a[1]);
 else if(k=='back')hdfBack();
 else if(k=='undo')hdfUndo(-1);else if(k=='redo')hdfUndo(1);
 else if(k=='tool')hdfSetTool(a[1]);
 else if(k=='zoom')hdfZoom(a[1]=='fit'||a[1]=='sel'||a[1]=='100'?a[1]:+a[1]);
 else if(k=='pm'){HDF.pm=a[1];hdfPref();hdfCtx()}
 else if(k=='tg'){HDF[a[1]]=HDF[a[1]]?0:1;hdfPref();hdfCtx();hdfProps();hdfDraw()}
 else if(k=='sv'){var val=a[2];HDF[a[1]]=isNaN(+val)?val:+val;hdfPref();if(a[1]=='hz'){hdfLayout();hdfFit()}hdfCtx();hdfProps();hdfInfo();hdfDraw()}
 else if(k=='fin'){hdfFinishOpen();hdfCommit()}
 else if(k=='close'){var g=hdfG(HDF.cp),oc=HDF.open>=0?g.c[HDF.open]:null;if(oc&&oc.pts.length>=3){oc.closed=1;hdfOrient(oc);HDF.sc=[HDF.open];HDF.sn=[];HDF.open=-1;hdfCommit()}else{hdfFinishOpen();hdfCommit()}}
 else if(k=='cancel'){var g2=hdfG(HDF.cp);if(HDF.open>=0&&g2.c[HDF.open]){g2.c.splice(HDF.open,1)}HDF.open=-1;HDF.sn=[];HDF.sc=[];hdfCommit()}
 else if(k=='nt')hdfSetNodeType(+a[1]);
 else if(k=='delp')hdfDelSel();
 else if(k=='op')hdfOp(a[1]);
 else if(k=='pc'){var i=+a[1],ix2=HDF.sc.indexOf(i);if(ix2>=0)HDF.sc.splice(ix2,1);else HDF.sc.push(i);HDF.sn=[];hdfProps();hdfCtx();hdfInfo();hdfDraw()}
 else if(k=='anc'){HDF.anc=+a[1];hdfPref();hdfProps()}
 else if(k=='xf'){if(a[1]=='mvs')hdfXf('mv',+a[2]*HDF.step,+a[3]*HDF.step);else if(a[1]=='rot')hdfXf('rot',+a[2]);else hdfXf(a[1])}
 else if(k=='mcp')hdfMirrorCopy(a[1]);
 else if(k=='ali')hdfAlign(a[1]);
 else if(k=='ri'||k=='ro'){var g3=hdfG(HDF.cp),q=HDF.sn[0];if(q){var pt=g3.c[q[0]].pts[q[1]];pt[k=='ri'?'i':'o']=null;pt.s=0;hdfCommit()}}
 else if(k=='gadd'){var gh=$('#hdfgh'),gv=$('#hdfgv'),ch=false;if(gh&&gh.value!==''&&!isNaN(+gh.value)){p.gd.h.push(Math.round(+gh.value));ch=true}if(gv&&gv.value!==''&&!isNaN(+gv.value)){p.gd.v.push(Math.round(+gv.value));ch=true}if(ch)hdfCommit()}
 else if(k=='gclr'){if(p.gd.h.length||p.gd.v.length){p.gd={h:[],v:[]};hdfCommit()}}
 else if(k=='auto')hdfAuto();
 else if(k=='mark'){var g4=hdfG(HDF.cp);g4.a=Math.round(g4.a)==0?hdfAdv(HDF.cp)||600:0;hdfCommit()}
 else if(k=='pan')hdfPanel(a[1]);
 else if(k=='svgok')hdfDoSvg();else if(k=='cpyok')hdfDoCopy();
 else if(k=='clr'){stConfirm(t('cdr_tpl_ov'),function(){var g9=hdfG(HDF.cp);g9.c=[];HDF.sn=[];HDF.sc=[];HDF.open=-1;hdfCommit()})}
 else if(k=='met'){var v=+a[2];p[a[1]]=Math.round(p[a[1]]+v);hdfSaveSoon();hdfBody()}
 else if(k=='ex')hdfExport(a[1])
 else if(k=='pf'){stSave(new Blob([JSON.stringify(p)],{type:'application/json'}),(p.fam||'HudaFont').replace(/[^\w\-]+/g,'')+'.huda.json')}
 else if(k=='np'){hdfSaveNow();var L=S('hdfi',[]),np=hdfDefault(L.length+1);P('hdf_'+np.id,np);hdfIdx(np);HDF.p=np;P('hdfcur',np.id);HDF.tab='gl';HDF.hm={};hdfShell()}
 else if(k=='po'){var e1=S('hdfi',[])[+a[1]];if(e1)hdfOpenProject(e1.id)}
 else if(k=='pdup'){var e2=S('hdfi',[])[+a[1]];if(e2){var src=S('hdf_'+e2.id,null);if(src){src.id=hdfDefault().id;src.name=src.name+' 2';P('hdf_'+src.id,src);hdfIdx(src);hdfBody()}}}
 else if(k=='pdel'){var e3=S('hdfi',[])[+a[1]];if(e3)stConfirm(t('cdr_del')+'?',function(){hdfDelProject(+a[1])})}}
function hdfInput(e){var x=e.target;if(!x)return;if(x.id=='hdffam'){HDF.p.fam=x.value;hdfSaveSoon()}else if(x.id=='hdfpt'){P('hdfpt',x.value);hdfPrevUp()}else if(x.id=='hdfps'){HDF.ps=+x.value;hdfPrevUp()}}
function hdfChange(e){var x=e.target;if(!x||!x.getAttribute)return;var hn=x.getAttribute('data-hn'),hs=x.getAttribute('data-hs');
 if(x.id=='hdfref'){HDF.ref=x.value;hdfPref();hdfDraw()}
 else if(x.id=='hdffile'&&x.files&&x.files[0]){x.files[0].text().then(function(tx){try{var o=JSON.parse(tx);if(!o||!o.g)throw 0;o.id=hdfDefault().id;if(!o.gd)o.gd={h:[],v:[]};P('hdf_'+o.id,o);hdfIdx(o);HDF.hm={};hdfOpenProject(o.id)}catch(er){toast(t('hdf_err'))}});x.value=''}
 else if(hn){var v=parseFloat(x.value);if(hn.charAt(0)=='h'&&hn.length==3)hdfHandleField(hn,v);else hdfNumField(hn,v);if(hn=='rot'||hn=='skw')x.value=0;else if(hn=='spx'||hn=='spy')x.value=100}
 else if(hs){if(hs=='ghost'){HDF.ghost=Array.from(x.value)[0]||''}else{var v2=parseFloat(x.value);if(!isNaN(v2)){if(hs=='sides')v2=Math.max(3,Math.min(24,Math.round(v2)));if(hs=='nibR')v2=Math.max(.05,Math.min(1,v2));HDF[hs]=v2}}hdfPref();hdfProps();hdfDraw()}}
function hdfView(){hdfInit();HDF.cp=null;HDF.tab='gl';HDF.err='';app.innerHTML='<div class="hdf"><div class="hdfmain" id="hdfmain"></div></div>';var root=$('.hdf');root.addEventListener('click',hdfClick);root.addEventListener('input',hdfInput);root.addEventListener('change',hdfChange);
 root.addEventListener('toggle',function(e){var d=e.target,k=d&&d.getAttribute&&d.getAttribute('data-acc');if(k){HDF.acc[k]=d.open?1:0;if(k=='pf')hdfDraw()}},true);
 if(!HDF._rs){HDF._rs=1;window.addEventListener('resize',function(){if($('#hdfcv')){hdfLayout();hdfDraw()}});D.addEventListener('keydown',hdfKey);D.addEventListener('keyup',hdfKeyUp)}hdfShell()}
function hdfExport(kind){var p=HDF.p;if(!hdfCount(p)){toast(t('hdf_empty'));return}var nm=(p.fam||'HudaFont').replace(/[^\w\-]+/g,'')||'HudaFont';try{if(kind=='ttf')stSave(new Blob([hdfTTF(p)],{type:'font/ttf'}),nm+'.ttf');else hdfWOFF(p).then(function(u){stSave(new Blob([u],{type:'font/woff'}),nm+'.woff')},function(){toast(t('hdf_err'))})}catch(e){toast(t('hdf_err')+': '+e.message)}}
function hdfOpenProject(id){hdfSaveNow();var p=S('hdf_'+id,null);if(!p||!p.g)return;HDF.p=p;P('hdfcur',id);HDF.cp=null;HDF.tab='gl';HDF.err='';hdfRegister();hdfShell()}
function hdfDelProject(i){var L=S('hdfi',[]),e=L.splice(i,1)[0];if(!e)return;try{localStorage.removeItem('dd_hdf_'+e.id)}catch(x){}P('hdfi',L);if(e.id==HDF.p.id){if(L.length)hdfOpenProject(L[0].id);else{var np=hdfDefault(1);P('hdf_'+np.id,np);HDF.p=np;hdfIdx(np);P('hdfcur',np.id);hdfShell()}}else hdfBody()}
/* ================= Huda Editor (V4.4.0) ================= */
function hedtx(k){return k.indexOf('ed_')==0?hedt(k.slice(3)):t(k)}
/* ================= Huda Editor (hed*) — own code, no new libraries ================= */
var HED=null,HEDDB=null;
var HEDLI={ta:0,en:1,si:2,ar:3};
function hedt(k){var a=HEDT[k];if(!a)return k;var i=HEDLI[lang];if(i==null)i=1;return a[i]||a[1]}
function hedU(){return Math.random().toString(36).slice(2,9)}
function hedC(v,a,b){return Math.max(a,Math.min(b,v))}
function hedR(v,d){var m=Math.pow(10,d||0);return Math.round(v*m)/m}
function hedPad(n){return('0'+n).slice(-2)}
function hedFmt(s,fps){s=Math.max(0,s);var f=fps||30,tf=Math.round(s*f),h=Math.floor(tf/(3600*f)),m=Math.floor(tf/(60*f))%60,sc=Math.floor(tf/f)%60;return hedPad(h)+':'+hedPad(m)+':'+hedPad(sc)+'.'+hedPad(tf%f)}
function hedFmtD(sc,dur,fps){sc=Math.max(0,sc);var f=fps||30,tf=Math.round(sc*f),ff=tf%f,ts=Math.floor(tf/f),h=Math.floor(ts/3600),m=Math.floor(ts/60)%60,x=ts%60;if(dur<60)return(dur>=10?hedPad(x):x)+'.'+hedPad(ff);if(dur<3600)return(dur>=600?hedPad(m):m)+':'+hedPad(x)+'.'+hedPad(ff);return h+':'+hedPad(m)+':'+hedPad(x)+'.'+hedPad(ff)}
function hedAlive(){return!!HED&&!!HED.cv&&D.body.contains(HED.cv)}
function hedNF(){return!('filter' in CanvasRenderingContext2D.prototype)}
/* ---- icons ---- */
var HEDI={
play:'<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4.2" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1" fill="currentColor" stroke="none"/>',
prev:'<path d="M6 5v14M19 5.5v13L9 12z"/>',next:'<path d="M18 5v14M5 5.5v13L15 12z"/>',undo:'<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 010 12h-3"/>',redo:'<path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 000 12h3"/>',
plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
cut:'<circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M8 7.6L20 17M8 16.4L20 7"/>',split:'<path d="M12 3v18"/><path d="M8 7L3 12l5 5M16 7l5 5-5 5"/>',speed:'<path d="M4.5 18a8.5 8.5 0 1115 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14.5" r="1.3" fill="currentColor"/>',
opacity:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 12h16M12 4v16" opacity=".5"/><rect x="4" y="4" width="8" height="8" fill="currentColor" stroke="none" opacity=".55"/><rect x="12" y="12" width="8" height="8" fill="currentColor" stroke="none" opacity=".55"/>',
move:'<path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/>',crop:'<path d="M7 3v14h14M3 7h14v14"/>',rotate:'<path d="M20 12a8 8 0 11-2.6-5.9"/><path d="M20 4v5h-5"/>',more:'<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',
text:'<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',shape:'<rect x="3.5" y="9" width="10" height="10" rx="1.5"/><circle cx="16.5" cy="8.5" r="4.5"/>',music:'<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10.5l5-3v9l-5-3z"/>',image:'<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4.5 4.5"/>',
eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10 10 0 0112 5c6.4 0 10 7 10 7a17 17 0 01-3.2 4M6.5 6.6A17 17 0 002 12s3.6 7 10 7a9.6 9.6 0 004.2-1"/>',vol:'<path d="M4 9.5v5h4l5 4v-13l-5 4z"/><path d="M16.5 9a4 4 0 010 6M19 6.5a8 8 0 010 11"/>',volx:'<path d="M4 9.5v5h4l5 4v-13l-5 4z"/><path d="M17 9.5l4 5M21 9.5l-4 5"/>',
lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',unlock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 017.5-2"/>',full:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',close:'<path d="M5 5l14 14M19 5L5 19"/>',check:'<path d="M4 12.5l5 5L20 6.5"/>',
dl:'<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',magnet:'<path d="M5 4v8a7 7 0 0014 0V4h-4v8a3 3 0 01-6 0V4z"/><path d="M5 8h4M15 8h4"/>',
fit:'<path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/><rect x="8" y="9" width="8" height="6" rx="1"/>',flx:'<path d="M12 3v18" stroke-dasharray="2 2.5"/><path d="M9 7L3 18h6zM15 7l6 11h-6z"/>',fly:'<path d="M3 12h18" stroke-dasharray="2 2.5"/><path d="M7 9L18 3v6zM7 15l11 6v-6z"/>',
cur:'<path d="M5 3l14 8-6 1.8L10.5 19z" fill="currentColor" stroke="none"/>',edit:'<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M3 9h18M8 4.5v4.5M16 4.5v4.5M8 15h8"/>',color:'<path d="M12 3a9 9 0 000 18c1.4 0 2-.9 2-1.8 0-1.4-1-1.6-1-2.8 0-1 .8-1.6 1.9-1.6H17a4 4 0 004-4c0-4.4-4-7.8-9-7.8z"/><circle cx="7.5" cy="11" r="1.1" fill="currentColor"/><circle cx="10" cy="7" r="1.1" fill="currentColor"/><circle cx="15" cy="7.5" r="1.1" fill="currentColor"/>',
fx:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',audio:'<path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 7v10"/>',up:'<path d="M6 15l6-6 6 6"/>',dn:'<path d="M6 9l6 6 6-6"/>',lt:'<path d="M15 5l-7 7 7 7"/>',export:'<path d="M12 15V3M7 8l5-5 5 5M4 14v6h16v-6"/>',
tl:'<path d="M3 6h18M3 12h12M3 18h8"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none"/>'};
Object.assign(HEDI,{sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',wand:'<path d="M5 19L15 9"/><path d="M14 4l.9 2.1L17 7l-2.1.9L14 10l-.9-2.1L11 7l2.1-.9zM19 12l.6 1.4L21 14l-1.4.6L19 16l-.6-1.4L17 14l1.4-.6z"/>',canvas:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M7 9h4M7 15h10"/>',trans:'<path d="M4 6v12M20 6v12M8.5 9L12 12l-3.5 3M15.5 9L12 12l3.5 3"/>',star:'<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',bg:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 15l5-4 4 3 4-4 5 4"/>',overlay:'<rect x="3" y="7" width="13" height="13" rx="2"/><rect x="8" y="3" width="13" height="13" rx="2"/>'});
function hi(n,c){return'<svg class="hedic'+(c?' '+c:'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(HEDI[n]||'')+'</svg>'}
/* ---- storage for imported files (own small IndexedDB) ---- */
function hedDb(){if(HEDDB)return HEDDB;HEDDB=new Promise(function(ok){try{var r=indexedDB.open('hudaed',1);r.onupgradeneeded=function(){r.result.createObjectStore('m')};r.onsuccess=function(){ok(r.result)};r.onerror=function(){ok(null)}}catch(e){ok(null)}});return HEDDB}
function hedDbOp(mode,fn){return hedDb().then(function(db){if(!db)return null;return new Promise(function(ok){try{var tx=db.transaction('m',mode),rq=fn(tx.objectStore('m'));tx.oncomplete=function(){ok(rq&&rq.result!==undefined?rq.result:true)};tx.onerror=tx.onabort=function(){ok(null)}}catch(e){ok(null)}})})}
function hedDbPut(id,b){return hedDbOp('readwrite',function(s){return s.put(b,id)})}
function hedDbGet(id){return hedDbOp('readonly',function(s){return s.get(id)})}
function hedDbClear(){return hedDbOp('readwrite',function(s){return s.clear()})}
/* ---- project model ---- */
Object.assign(HEDI,{filter:'<circle cx="9" cy="9.5" r="5.5"/><circle cx="15" cy="9.5" r="5.5"/><circle cx="12" cy="15" r="5.5"/>',mask:'<rect x="3" y="3" width="18" height="18" rx="3" stroke-dasharray="3 2.6"/><circle cx="12" cy="12" r="5"/>',resize:'<path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6"/>',anim2:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M14 6h4a2 2 0 012 2v3M10 18H6a2 2 0 01-2-2v-3"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',kf:'<path d="M12 3l9 9-9 9-9-9z"/>',kff:'<path d="M12 3l9 9-9 9-9-9z" fill="currentColor"/>',srt:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M7 12h4M13 12h4M7 15.5h7"/>',spk:'<path d="M4 9.5v5h4l5 4v-13l-5 4z"/><path d="M16.5 9a4 4 0 010 6"/>'});
function hedBlank(){var p={v:2,id:hedU(),ratio:'wd',res:2,fps:30,bg:'#000000',master:100,mm:[],tr:[],cl:[]};['vid','ovl','txt','aud'].forEach(function(r){p.tr.push({id:hedU(),k:r=='aud'?'a':'v',r:r,hid:0,lk:0})});return p}
var HEDRI={txt:'text',ovl:'overlay',vid:'video',aud:'music'};
function hedSt(k,d){var o=HED.p.st;return o&&o[k]!==undefined?o[k]:d}
function hedEnsure(p){[['vid','v'],['ovl','v'],['txt','v'],['aud','a']].forEach(function(r){if(!p.tr.some(function(t){return t.r==r[0]})){var tr={id:hedU(),k:r[1],r:r[0],hid:0,lk:0};if(r[0]=='vid')p.tr.unshift(tr);else p.tr.push(tr)}})}
function hedRoleFix(p){var v=0;p.tr.forEach(function(t){if(!t.r){t.r=t.k=='a'?'aud':(['vid','ovl','txt'][v]||'ovl')}if(t.k=='v')v++});
 var cnt=function(t){return p.cl.filter(function(c){return c.tr==t.id}).length},vids=p.tr.filter(function(t){return t.r=='vid'});
 if(vids.length>1){var main=vids.slice().sort(function(a,b){return cnt(b)-cnt(a)})[0];vids.forEach(function(t){if(t===main)return;if(!cnt(t))p.tr.splice(p.tr.indexOf(t),1);else{t.r='ovl';t.a=1}})}
 var ord={vid:0,ovl:1,txt:2},vs=p.tr.filter(function(t){return t.k=='v'}).map(function(t,i){return[t,i]}).sort(function(a,b){return ord[a[0].r]-ord[b[0].r]||a[1]-b[1]}).map(function(x){return x[0]}),as=p.tr.filter(function(t){return t.k=='a'});p.tr=vs.concat(as);
 var seen={};p.tr.forEach(function(t){if(seen[t.r])t.a=1;seen[t.r]=1});hedEnsure(p)}
function hedClip(k,tr,s,d,o){return Object.assign({id:hedU(),k:k,tr:tr,s:s,d:d,i:0,sp:1,x:0,y:0,sc:100,rot:0,flx:0,fly:0,op:100,fit:'fit',cr:[0,0,0,0],col:{},ef:{},ai:'',ao:'',ad:.6,kb:'',bm:'source-over',vol:100,fi:0,fo:0,mu:0},o||{})}
function hedTxtDef(){return{s:hedt('txtdef'),f:'site',z:8,c:'#ffffff',b:1,i:0,al:'c',w:80,sh:35,sk:'#000000',st:0,sc:'#000000',bg:'',bo:70,ls:0,lh:1.35}}
function hedShpDef(t){return{t:t||'rect',w:40,h:40,c:stAcc(),c2:'',an:90,r:20,sw:0,sc:'#ffffff'}}
function hedDur(){var m=0;HED.p.cl.forEach(function(c){m=Math.max(m,c.s+c.d)});return Math.max(m,1)}
function hedCl(id){var L=HED.p.cl;for(var i=0;i<L.length;i++)if(L[i].id==id)return L[i];return null}
function hedSelC(){return HED.sel?hedCl(HED.sel):null}
function hedTr(id){var L=HED.p.tr;for(var i=0;i<L.length;i++)if(L[i].id==id)return L[i];return null}
function hedIsA(c){return c.k=='audio'}
function hedHasSnd(c){return c.k=='audio'||c.k=='video'}
function hedLabel(tr){var n=0,i;for(i=0;i<HED.p.tr.length;i++){if(HED.p.tr[i].k==tr.k)n++;if(HED.p.tr[i]===tr)break}return(tr.k=='a'?hedt('ta_'):hedt('tv_'))+' '+n}
/* ---- undo / redo (snapshot of the timeline, coalesced) ---- */
function hedSnap(){var p=HED.p;return JSON.stringify({tr:p.tr,cl:p.cl,ratio:p.ratio,bg:p.bg,zon:p.zon})}
function hedHist(key){var now=performance.now();if(key&&HED.lk==key&&now-HED.lt<900){HED.lt=now;return}HED.lk=key||'';HED.lt=now;HED.un.push(hedSnap());if(HED.un.length>80)HED.un.shift();HED.re=[]}
function hedRestore(s){var o=JSON.parse(s),p=HED.p;p.tr=o.tr;p.cl=o.cl;p.ratio=o.ratio;p.bg=o.bg;p.zon=o.zon;if(HED.sel&&!hedCl(HED.sel))HED.sel='';HED.lk=''}
function hedUndo(){if(!HED.un.length)return;HED.re.push(hedSnap());hedRestore(HED.un.pop());hedAll()}
function hedRedo(){if(!HED.re.length)return;HED.un.push(hedSnap());hedRestore(HED.re.pop());hedAll()}
/* ---- autosave ---- */
function hedSaveSoon(){clearTimeout(HED._sv);HED._sv=setTimeout(hedSaveNow,700)}
/* ---- fonts ---- */
var HEDF=[['site',''],['tam',"'Noto Sans Tamil',sans-serif"],['sin',"'Noto Sans Sinhala',sans-serif"],['inter',"'Inter',sans-serif"],['amiri',"'Amiri',serif"],['uth',"'KFGQPC Uthman Taha Naskh','Amiri',serif"],['hafs',"'KFGQPC Hafs V20','KFGQPC Uthman Taha Naskh','Amiri',serif"],['serif','Georgia,serif'],['mono','ui-monospace,Menlo,Consolas,monospace']];
var HEDFN={tam:'தமிழ்',sin:'සිංහල',inter:'Inter',amiri:'Amiri',uth:'Naskh',hafs:'Hafs',serif:'Serif',mono:'Mono'};
function hedFam(id){if(id=='site')return stTf(lang);for(var i=0;i<HEDF.length;i++)if(HEDF[i][0]==id)return HEDF[i][1];return stTf(lang)}
/* ---- animation ---- */
function hedEase(p){p=hedC(p,0,1);return 1-Math.pow(1-p,3)}
function hedAnim(c,lt){var r={a:1,x:0,y:0,s:1,r:0,b:0,rv:1},d=Math.min(c.ad||.6,c.d/2);
 function ap(ty,k){if(!ty||k>=1)return;var q=1-k;switch(ty){case'fade':r.a*=k;break;case'sl':r.x-=q*30;r.a*=k;break;case'sr':r.x+=q*30;r.a*=k;break;case'su':r.y-=q*30;r.a*=k;break;case'sd':r.y+=q*30;r.a*=k;break;case'zi':r.s*=.4+.6*k;r.a*=k;break;case'zo':r.s*=1+q*.6;r.a*=k;break;case'spin':r.r-=q*180;r.s*=.3+.7*k;r.a*=k;break;case'blur':r.b+=q*30;r.a*=k;break;case'pop':r.s*=k<.7?k/.7*1.12:1.12-.12*(k-.7)/.3;r.a*=Math.min(1,k*3);break;case'rev':r.rv*=k;break}}
 if(d>0){if(lt<d)ap(c.ai,hedEase(lt/d));if(c.d-lt<d)ap(c.ao,hedEase((c.d-lt)/d))}return r}
function hedKfEval(c,lt){var k=c.kf,n=k.length,i,a,b,u;if(lt<=k[0].t)return k[0];if(lt>=k[n-1].t)return k[n-1];for(i=0;i<n-1;i++){if(lt>=k[i].t&&lt<=k[i+1].t){a=k[i];b=k[i+1];u=(lt-a.t)/Math.max(1e-6,b.t-a.t);if(c.kfe=='s')u=(1-Math.cos(Math.PI*u))/2;return{x:a.x+(b.x-a.x)*u,y:a.y+(b.y-a.y)*u,sc:a.sc+(b.sc-a.sc)*u,rot:a.rot+(b.rot-a.rot)*u,op:a.op+(b.op-a.op)*u}}}return k[n-1]}
/* ---- helpers for paint ---- */
function hedRR(c,x,y,w,h,r){stRR(c,x,y,w,h,r)}
function hedTextLayout(ctx,c,W,H){var x=c.tx,sz=Math.max(4,x.z/100*H),fam=hedFam(x.f),font=(x.i?'italic ':'')+(x.b?'700 ':'400 ')+sz+'px '+fam,key=x.s+'|'+font+'|'+x.w+'|'+x.ls+'|'+x.lh+'|'+(x.bg?1:0)+'|'+W;
 if(c._tl&&c._tl.key==key)return c._tl;
 var rtl=/[\u0590-\u08FF\uFB1D-\uFEFC]/.test(x.s),maxw=x.w/100*W,lines=[],mw=0;ctx.save();ctx.font=font;ctx.direction=rtl?'rtl':'ltr';if('letterSpacing' in ctx)ctx.letterSpacing=rtl?'0px':((x.ls||0)*sz/100+'px');
 String(x.s||'').split('\n').forEach(function(par){var ws=par.split(' '),ln='';ws.forEach(function(w){var tt=ln?ln+' '+w:w;if(ln&&ctx.measureText(tt).width>maxw){lines.push(ln);ln=w}else ln=tt});lines.push(ln)});
 lines.forEach(function(l){mw=Math.max(mw,ctx.measureText(l).width)});ctx.restore();
 var pad=x.bg?sz*.4:0,lh=sz*(x.lh||1.35);c._tl={key:key,lines:lines,w:Math.max(mw,sz*.5)+2*pad,h:lines.length*lh+2*pad,pad:pad,lh:lh,sz:sz,font:font,rtl:rtl};return c._tl}
function hedTextPaint(ctx,c,L,u){var x=c.tx;ctx.save();ctx.font=L.font;ctx.direction=L.rtl?'rtl':'ltr';if('letterSpacing' in ctx)ctx.letterSpacing=L.rtl?'0px':((x.ls||0)*L.sz/100+'px');ctx.textBaseline='middle';
 if(x.bg){ctx.save();ctx.globalAlpha*=x.bo/100;ctx.fillStyle=x.bg;hedRR(ctx,-L.w/2,-L.h/2,L.w,L.h,L.sz*.25);ctx.fill();ctx.restore()}
 var al=x.al=='l'?'left':x.al=='r'?'right':'center',px=al=='left'?-L.w/2+L.pad:al=='right'?L.w/2-L.pad:0;ctx.textAlign=al;ctx.lineJoin='round';
 L.lines.forEach(function(ln,i){var y=-L.h/2+L.pad+(i+.5)*L.lh;if(x.st>0){ctx.lineWidth=x.st/100*L.sz;ctx.strokeStyle=x.sc;ctx.strokeText(ln,px,y)}
  ctx.fillStyle=x.c;if(x.sh>0){ctx.shadowColor=x.sk;ctx.shadowBlur=x.sh/100*L.sz*.5*u;ctx.shadowOffsetY=x.sh/100*L.sz*.06*u}ctx.fillText(ln,px,y);ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetY=0});ctx.restore()}
function hedShapePath(ctx,s,w,h){var x=-w/2,y=-h/2,i,a,r;switch(s.t){case'round':hedRR(ctx,x,y,w,h,Math.min(w,h)*s.r/100);return;case'ellipse':ctx.beginPath();ctx.ellipse(0,0,w/2,h/2,0,0,6.2832);return;case'tri':ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(x+w,y+h);ctx.lineTo(x,y+h);ctx.closePath();return;case'dia':ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(x+w,0);ctx.lineTo(0,y+h);ctx.lineTo(x,0);ctx.closePath();return;
 case'heart':ctx.beginPath();ctx.moveTo(0,y+h*.9);ctx.bezierCurveTo(x-w*.1,y+h*.55,x-w*.05,y+h*.05,x+w*.28,y+h*.05);ctx.bezierCurveTo(x+w*.45,y+h*.05,0,y+h*.2,0,y+h*.3);ctx.bezierCurveTo(0,y+h*.2,x+w*.55,y+h*.05,x+w*.72,y+h*.05);ctx.bezierCurveTo(x+w*1.05,y+h*.05,x+w*1.1,y+h*.55,0,y+h*.9);ctx.closePath();return;
 case'star8':case'star5':var n=s.t=='star8'?16:10,ri=s.t=='star8'?.72:.45;ctx.beginPath();for(i=0;i<n;i++){a=i*Math.PI*2/n-Math.PI/2;r=i%2?ri:1;ctx.lineTo(r*Math.cos(a)*w/2,r*Math.sin(a)*h/2)}ctx.closePath();return;default:ctx.beginPath();ctx.rect(x,y,w,h)}}
function hedShapePaint(ctx,c,w,h,k){var s=c.sh;hedShapePath(ctx,s,w,h);if(s.c2){var a=s.an*Math.PI/180,dx=Math.cos(a)*w/2,dy=Math.sin(a)*h/2,g=ctx.createLinearGradient(-dx,-dy,dx,dy);g.addColorStop(0,s.c);g.addColorStop(1,s.c2);ctx.fillStyle=g}else ctx.fillStyle=s.c;ctx.fill();if(s.sw>0){ctx.lineWidth=s.sw*k;ctx.strokeStyle=s.sc;ctx.lineJoin='round';ctx.stroke()}}
function hedNoise(){if(HED.noise)return HED.noise;var cv=D.createElement('canvas');cv.width=cv.height=192;var x=cv.getContext('2d'),im=x.createImageData(192,192),i,v;for(i=0;i<im.data.length;i+=4){v=Math.random()*255;im.data[i]=im.data[i+1]=im.data[i+2]=v;im.data[i+3]=255}x.putImageData(im,0,0);return HED.noise=cv}
function hedFilter(c,an,k,u){var f=c.col,e=c.ef,a=[],b=((e.bl||0)*k+an.b*k)*u;if(f.br)a.push('brightness('+(100+f.br)+'%)');if(f.ct)a.push('contrast('+(100+f.ct)+'%)');if(f.sa)a.push('saturate('+(100+f.sa)+'%)');if(f.hu)a.push('hue-rotate('+f.hu+'deg)');if(e.gs)a.push('grayscale(100%)');if(e.sp)a.push('sepia(100%)');if(e.inv)a.push('invert(100%)');if(b>.1)a.push('blur('+b.toFixed(2)+'px)');return a.length?a.join(' '):'none'}
/* ---- element for a video/audio clip ---- */
/* ---- draw one frame ---- */
function hedDraw(ctx,W,H,t,o){o=o||{};var p=HED.p,k=H/1080,u=o.u||1,nf=HED.nf;ctx.save();ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';if(!nf)ctx.filter='none';ctx.fillStyle=p.bg;ctx.fillRect(0,0,W,H);
 hedVisAt(t).forEach(function(c){hedDrawClip(ctx,c,W,H,t,o,k,u)});ctx.restore()}
function hedDrawClip(ctx,c,W,H,t,o,k,u){var lt=t-c.s,an=hedAnim(c,lt),src=null,sw=0,sh=0,nw,nh,nf=HED.nf,m=null,L=null,lr;
 if(c.k=='video'){src=hedEl(c,o);if(o&&o.els){if(!src||!src.videoWidth)return;sw=src.videoWidth;sh=src.videoHeight}else if(hedElReady(src)){sw=src.videoWidth;sh=src.videoHeight}else{var mm=HED.media[c.m],ph=mm&&(mm.th0||(mm.th&&mm.th[0]));if(!ph)return;src=ph;sw=ph.width;sh=ph.height}}
 else if(c.k=='image'){m=HED.media[c.m];if(!m||!m.img)return;src=m.img;sw=m.w;sh=m.h}
 if(src){var fk=c.fit=='fill'?Math.max(W/sw,H/sh):Math.min(W/sw,H/sh);nw=sw*fk;nh=sh*fk}
 else if(c.k=='text'){L=hedTextLayout(ctx,c,W,H);nw=L.w;nh=L.h}else if(c.k=='shape'){nw=c.sh.w/100*W;nh=c.sh.h/100*H}else return;
 var cr=c.cr||[0,0,0,0],dx=-nw/2,dy=-nh/2,dw=nw,dh=nh,ssx=0,ssy=0,ssw=sw,ssh=sh;
 if(src){dx=-nw/2+nw*cr[0]/100;dy=-nh/2+nh*cr[1]/100;dw=nw*(1-(cr[0]+cr[2])/100);dh=nh*(1-(cr[1]+cr[3])/100);ssx=sw*cr[0]/100;ssy=sh*cr[1]/100;ssw=sw*(1-(cr[0]+cr[2])/100);ssh=sh*(1-(cr[1]+cr[3])/100);if(dw<2||dh<2)return}
 else{dx=-nw/2;dy=-nh/2}lr=[dx,dy,dw,dh];
 var pg=c.d>0?lt/c.d:0,kbs=1,kx=0;if(c.kb=='in')kbs=1+.2*pg;else if(c.kb=='out')kbs=1.2-.2*pg;else if(c.kb=='l'){kbs=1.15;kx=(.5-pg)*7}else if(c.kb=='r'){kbs=1.15;kx=(pg-.5)*7}
 var kv=c.kf&&c.kf.length?hedKfEval(c,lt):null,vx=kv?kv.x:c.x,vy=kv?kv.y:c.y,vs=kv?kv.sc:c.sc,vr=kv?kv.rot:c.rot,vo=kv?kv.op:c.op;
 var sc=vs/100*an.s*kbs,cx=W/2+(vx+an.x+kx)/100*W,cy=H/2+(vy+an.y)/100*H,rot=(vr+an.r)*Math.PI/180,sx=sc*(c.flx?-1:1),sy=sc*(c.fly?-1:1);
 c._m={cx:cx,cy:cy,rot:rot,sx:sx,sy:sy,lr:lr};
 var al=vo/100*an.a;if(al<=0.002)return;
 ctx.save();ctx.translate(cx,cy);ctx.rotate(rot);ctx.scale(sx,sy);ctx.globalAlpha=al;ctx.globalCompositeOperation=c.bm||'source-over';
 if(c.mk&&c.mk.t){var mk=c.mk,mw=dw*mk.w/100,mh=dh*mk.h/100;ctx.save();ctx.translate(dx+dw/2+dw*mk.x/100,dy+dh/2+dh*mk.y/100);ctx.rotate((mk.rot||0)*Math.PI/180);hedShapePath(ctx,{t:mk.t,r:mk.rr==null?25:mk.rr},mw,mh);if(mk.inv)ctx.rect(-1e5,-1e5,2e5,2e5);ctx.restore();ctx.clip(mk.inv?'evenodd':'nonzero')}
 if(an.rv<.999){var rtl=L&&L.rtl;ctx.beginPath();if(rtl)ctx.rect(dx+dw*(1-an.rv),dy,dw*an.rv,dh);else ctx.rect(dx,dy,dw*an.rv,dh);ctx.clip()}
 var e=c.ef,paint=function(){if(src){if(e.mi&&dw>0){ctx.save();ctx.beginPath();ctx.rect(dx,dy,dw/2,dh);ctx.clip();ctx.drawImage(src,ssx,ssy,ssw,ssh,dx,dy,dw,dh);ctx.restore();ctx.save();ctx.beginPath();ctx.rect(dx+dw/2,dy,dw/2,dh);ctx.clip();ctx.translate(dx*2+dw,0);ctx.scale(-1,1);ctx.drawImage(src,ssx,ssy,ssw,ssh,dx,dy,dw,dh);ctx.restore()}
   else if(e.px>0){var q=1+e.px*.6,tw=Math.max(4,Math.round(dw/q)),th=Math.max(4,Math.round(dh/q)),tc=HED.tmp||(HED.tmp=D.createElement('canvas'));tc.width=tw;tc.height=th;var tx=tc.getContext('2d');tx.drawImage(src,ssx,ssy,ssw,ssh,0,0,tw,th);var sm=ctx.imageSmoothingEnabled;ctx.imageSmoothingEnabled=false;ctx.drawImage(tc,0,0,tw,th,dx,dy,dw,dh);ctx.imageSmoothingEnabled=sm}
   else ctx.drawImage(src,ssx,ssy,ssw,ssh,dx,dy,dw,dh)}
  else if(L)hedTextPaint(ctx,c,L,u);else hedShapePaint(ctx,c,nw,nh,k)};
 var fs=nf?'none':hedFilter(c,an,k,u);if(fs!='none')ctx.filter=fs;paint();
 if(!nf&&e.gl>0){ctx.save();ctx.filter='blur('+(e.gl*.35*k*u).toFixed(2)+'px) brightness(1.35)';ctx.globalCompositeOperation='lighter';ctx.globalAlpha=al*e.gl/100*.7;paint();ctx.restore()}
 if(fs!='none')ctx.filter='none';
 var f=c.col,te=f.te||0,ti=f.ti||0,vg=e.vg||0,gr=e.gr||0;
 if(te||ti||vg||gr){ctx.save();ctx.beginPath();ctx.rect(dx,dy,dw,dh);ctx.clip();ctx.globalAlpha=al;
  if(te){ctx.globalCompositeOperation='soft-light';ctx.fillStyle=te>0?'rgba(255,150,40,'+(te/100*.6)+')':'rgba(40,130,255,'+(-te/100*.6)+')';ctx.fillRect(dx,dy,dw,dh)}
  if(ti){ctx.globalCompositeOperation='soft-light';ctx.fillStyle=ti>0?'rgba(255,40,200,'+(ti/100*.5)+')':'rgba(60,220,90,'+(-ti/100*.5)+')';ctx.fillRect(dx,dy,dw,dh)}
  if(vg){ctx.globalCompositeOperation='source-over';var rr=Math.hypot(dw,dh)/2,g=ctx.createRadialGradient(dx+dw/2,dy+dh/2,rr*.25,dx+dw/2,dy+dh/2,rr);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,'+(vg/100*.92)+')');ctx.fillStyle=g;ctx.fillRect(dx,dy,dw,dh)}
  if(gr){ctx.globalCompositeOperation='soft-light';ctx.globalAlpha=al*gr/100*.9;var pt=ctx.createPattern(hedNoise(),'repeat'),fr=Math.floor(t*24);ctx.translate((fr*37)%190,(fr*71)%190);ctx.fillStyle=pt;ctx.fillRect(dx-200,dy-200,dw+400,dh+400)}
  ctx.restore()}
 ctx.restore()}
/* ---- selection overlay (preview only) ---- */
function hedPt(m,lx,ly){var cs=Math.cos(m.rot),sn=Math.sin(m.rot),x=lx*m.sx,y=ly*m.sy;return[m.cx+x*cs-y*sn,m.cy+x*sn+y*cs]}
function hedHit(m,px,py){var cs=Math.cos(m.rot),sn=Math.sin(m.rot),dx=px-m.cx,dy=py-m.cy,lx=(dx*cs+dy*sn)/m.sx,ly=(-dx*sn+dy*cs)/m.sy,r=m.lr;return lx>=r[0]&&lx<=r[0]+r[2]&&ly>=r[1]&&ly<=r[1]+r[3]}
function hedActive(t){return hedVisAt(t)}
/* ---- draw preview ---- */
function hedDrawSoon(){if(!HED||HED._ds)return;var h=HED;HED._ds=requestAnimationFrame(function(){h._ds=0;if(HED===h)hedDrawPv()})}
function hedTNow(){return Math.min(HED.t,Math.max(0,hedDur()-.0005))}
function hedDrawPv(){if(!hedAlive())return;var cv=HED.cv,x=cv.getContext('2d'),d=hedDims(),s=cv.width/d.W;x.setTransform(s,0,0,s,0,0);var t=hedTNow(),sc=hedSelC();if(sc&&sc.kf&&sc.kf.length&&t>=sc.s&&t<=sc.s+sc.d){var kv=hedKfEval(sc,t-sc.s);sc.x=kv.x;sc.y=kv.y;sc.sc=kv.sc;sc.rot=kv.rot;sc.op=kv.op}hedDraw(x,d.W,d.H,t,{u:s});hedOvDraw(d,t);
 if(HED.xo&&HED.xo.cv){var xs=HED.xo.cv.width/d.W,x2=HED.xo.cv.getContext('2d');x2.setTransform(xs,0,0,xs,0,0);var lvp=HED.p;if(HED.xp)HED.p=HED.xp;try{hedDraw(x2,d.W,d.H,t,{u:xs})}finally{HED.p=lvp}if(HED.xo.after)HED.xo.after()}}
function hedDims(){var r=HED.p.ratio;if(STR[r]){var d=stDimP({ratio:r},[720,1080,1440,2160][hedC(HED.p.res||2,1,4)-1]);return{W:d[0]+d[0]%2,H:d[1]+d[1]%2}}var m=/^c:(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/.exec(r||''),rw=m?+m[1]:16,rh=m?+m[2]:9,sh=[720,1080,1440,2160][hedC(HED.p.res||2,1,4)-1],w,h;if(rw>=rh){h=sh;w=Math.round(sh*rw/rh)}else{w=sh;h=Math.round(sh*rh/rw)}w+=w%2;h+=h%2;return{W:w,H:h}}
/* ---- playback ---- */
function hedEdges(){var a=[0,hedDur()];HED.p.cl.forEach(function(c){a.push(c.s,c.s+c.d)});return a.sort(function(x,y){return x-y})}
function hedPrevCut(){var e=hedEdges().filter(function(x){return x<HED.t-.05});hedGo(e.length?e[e.length-1]:0)}
function hedNextCut(){var e=hedEdges().filter(function(x){return x>HED.t+.05});hedGo(e.length?e[0]:hedDur())}
/* ---- importing media ---- */
function hedAddFile(file,at,ctx){ctx=ctx||{};hedBusy(hedt('ld_prep')+' · '+(file.name||''),1);return hedMeta(file).then(function(m){hedBusy(0);var id=hedU();m.id=id;m.name=file.name||'media';m.blob=file;HED.media[id]=m;HED.p.mm.push({id:id,type:m.type,name:m.name,dur:m.dur,w:m.w,h:m.h});setTimeout(function(){hedDbPut(id,file)},m.type=='video'?1800:0);if(m.type=='video')setTimeout(function(){hedThumbs(m)},900);else if(m.type=='audio')hedPeaks(m);else hedThumbImg(m);
 hedHist();var d=m.type=='image'?5:Math.max(.5,m.dur||5),kind=m.type=='audio'?'a':'v',s=hedMainAppend(m,ctx,at==null?HED.t:at),pl=hedPlace(ctx.tr,kind,s,d,m.type=='audio'?'aud':(ctx.role||'vid')),c=hedClip(m.type,pl.tr,pl.s,d,{m:id,nm:m.name,ak:m.type=='audio'?((ctx&&ctx.ak)||'mus'):undefined});HED.p.cl.push(c);HED.sel=c.id;if(c.k=='video')hedEl(c);hedAll();return c}).catch(function(e){hedBusy(0);toast(hedMetaErr(e,file))})}
function hedThumbImg(m){var cv=D.createElement('canvas');cv.width=96;cv.height=54;try{var x=cv.getContext('2d'),r=Math.max(96/m.w,54/m.h);x.drawImage(m.img,(96-m.w*r)/2,(54-m.h*r)/2,m.w*r,m.h*r)}catch(e){}m.th=[cv]}
function hedThumbs(m){if(m.thBusy||m.th)return;m.thBusy=1;var v=D.createElement('video');v.muted=true;v.preload='metadata';v.src=m.url;var n=Math.max(1,Math.min(12,Math.ceil(m.dur/2.5))),th=[],i=0,tm=setTimeout(function(){fin()},22000);
 var fin=function(){clearTimeout(tm);m.th=th;m.thBusy=0;v.removeAttribute('src');v.load();if(hedAlive())hedTl()},step=function(){if(i>=n||!hedAlive())return fin();var to=setTimeout(nx,2500);v.onseeked=function(){clearTimeout(to);try{if(!m.th0&&v.videoWidth){var pc=D.createElement('canvas');pc.width=320;pc.height=Math.max(1,Math.round(320*v.videoHeight/v.videoWidth));pc.getContext('2d').drawImage(v,0,0,pc.width,pc.height);m.th0=pc;if(hedAlive())hedDrawSoon()}var cv=D.createElement('canvas');cv.width=96;cv.height=54;var r=Math.max(96/v.videoWidth,54/v.videoHeight);cv.getContext('2d').drawImage(v,(96-v.videoWidth*r)/2,(54-v.videoHeight*r)/2,v.videoWidth*r,v.videoHeight*r);th.push(cv)}catch(e){}nx()};try{v.currentTime=Math.min(m.dur-.05,(i+.5)*m.dur/n)}catch(e){nx()}},nx=function(){i++;setTimeout(step,0)};v.onloadeddata=step;v.onerror=function(){m.thBusy=0}}
function hedBuf(m){if(m.buf!==undefined)return Promise.resolve(m.buf);if(m.bp)return m.bp;var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!OC||!m.blob||m.blob.size>260e6){m.buf=null;return Promise.resolve(null)}
 m.bp=m.blob.arrayBuffer().then(function(ab){var oc=new OC(2,1,48000);return new Promise(function(ok){var r=oc.decodeAudioData(ab,ok,function(){ok(null)});if(r&&r.catch)r.catch(function(){ok(null)})})}).then(function(b){m.buf=b;if(b){var n=Math.max(600,Math.min(12000,Math.ceil(b.duration*20))),pk=new Float32Array(n),L=b.getChannelData(0),R=b.numberOfChannels>1?b.getChannelData(1):L,st=Math.max(1,Math.floor(L.length/n));for(var i=0;i<n;i++){var mx=0,a=i*st,e=Math.min(L.length,a+st),stp=Math.max(1,Math.floor((e-a)/80));for(var j=a;j<e;j+=stp){var v=Math.max(Math.abs(L[j]),Math.abs(R[j]));if(v>mx)mx=v}pk[i]=mx}m.pk=pk}return b}).catch(function(){m.buf=null;return null});return m.bp}
function hedPeaks(m){hedBuf(m).then(function(){if(hedAlive())hedTl()})}
/* ---- tracks & placing ---- */
function hedFreePos(trid,s,d,ign){var L=HED.p.cl.filter(function(x){return x.tr==trid&&x.id!=ign}),ok=function(st){return L.every(function(x){return st+d<=x.s+1e-6||st>=x.s+x.d-1e-6})};s=Math.max(0,s);if(ok(s))return s;var cand=[0];L.forEach(function(x){cand.push(x.s+x.d,x.s-d)});cand=cand.filter(function(v){return v>=0&&ok(v)});if(!cand.length)return null;cand.sort(function(a,b){return Math.abs(a-s)-Math.abs(b-s)});return cand[0]}
function hedNewTrack(kind,role,auto,top){role=role||(kind=='a'?'aud':'ovl');if(role=='vid'){var mv=HED.p.tr.filter(function(x){return x.r=='vid'})[0];if(mv)return mv}var tr={id:hedU(),k:kind,r:role,hid:0,lk:0},L=HED.p.tr,i,j=-1;if(auto)tr.a=1;if(kind=='a'){L.push(tr);return tr}
 for(i=0;i<L.length;i++){if(L[i].r==role){if(j<0)j=i;var last=i}}
 if(j>=0){L.splice(top?last+1:j,0,tr);return tr}
 var ord={vid:0,ovl:1,txt:2},pos=0;L.forEach(function(x,q){if(x.k=='v'&&ord[x.r]<ord[role])pos=q+1});L.splice(pos,0,tr);return tr}
function hedFreeTrack(kind,s,d,role){role=role||(kind=='a'?'aud':'ovl');var L=HED.p.tr.filter(function(x){return x.k==kind&&x.r==role&&!x.lk}),i;if(kind=='v')L=L.reverse();if(role=='vid'&&L.length)return L[0].id;for(i=0;i<L.length;i++)if(hedFreePos(L[i].id,s,d)===s)return L[i].id;return hedNewTrack(kind,role,1).id}
function hedPlace(trId,kind,s,d,role){var id=null;if(trId){var tr=hedTr(trId);if(tr&&!tr.lk&&tr.k==kind&&(!role||tr.r==role))id=trId}if(!id)id=hedFreeTrack(kind,s,d,role);var p=hedFreePos(id,s,d);return{tr:id,s:p==null?s:p}}
function hedTidy(){var p=HED.p;p.tr=p.tr.filter(function(t){if(!t.a)return true;if(p.cl.some(function(c){return c.tr==t.id}))return true;return p.tr.some(function(x){return x!==t&&x.r==t.r})?false:true});hedEnsure(p)}
function hedAddText(trId,txt,o,role){hedHist();var s=HED.t,d=4,pl=hedPlace(trId,'v',s,d,role||'txt'),c=hedClip('text',pl.tr,pl.s,d,{tx:Object.assign(hedTxtDef(),txt||{}),ai:'fade',ao:'fade'});Object.assign(c,o||{});HED.p.cl.push(c);HED.sel=c.id;HED.pop='txt';hedAll()}
function hedAddShape(t,trId){hedHist();var s=HED.t,d=5,bgc=t=='bg',pl=hedPlace(trId,'v',s,d,bgc?'vid':'ovl'),c=hedClip('shape',pl.tr,pl.s,d,{sh:hedShpDef(t)});if(bgc){c.sh.t='rect';c.sh.w=100;c.sh.h=100;c.sh.c='#0f3d3a';c.sh.c2='#0a1a2f';c.sh.an=90;c.nm=hedt('bgn')}HED.p.cl.push(c);HED.sel=c.id;HED.pop='shp';hedAll()}
function hedAddSticker(ch){hedAddText(HED.addCtx&&HED.addCtx.tr,{s:ch,z:22,f:'amiri',sh:30,w:60},{ai:'pop',ao:'fade'},'ovl');HED.pop='';hedAll()}
function hedFreeze(){var c=hedSelC();if(!c||c.k!='video')return;var el=HED.els[c.id]||hedEl(c);if(!el||!el.videoWidth){toast(hedt('err_file'));return}var cv=D.createElement('canvas');cv.width=el.videoWidth;cv.height=el.videoHeight;try{cv.getContext('2d').drawImage(el,0,0)}catch(e){return}cv.toBlob(function(b){if(!b)return;var f=new File([b],'frame.png',{type:'image/png'});hedAddFile(f,HED.t,{role:'ovl'})},'image/png')}
function hedAddTrack(role){if(role=='vid')return;hedHist();hedNewTrack(role=='aud'?'a':'v',role);hedAll()}
/* ---- clip operations ---- */
function hedDelClip(c){if(!c)return;hedHist();HED.p.cl=HED.p.cl.filter(function(x){return x.id!=c.id});var e=HED.els[c.id];if(e){try{e.pause();e.removeAttribute('src');e.load()}catch(x){}delete HED.els[c.id]}if(HED.sel==c.id){HED.sel='';HED.kfOn=null}hedAll()}
function hedSplit(){var c=hedSelC(),t=HED.t;if(!c){var a=hedActive(t);c=a.length?a[a.length-1]:null;if(!c)HED.p.cl.forEach(function(x){if(hedHasSnd(x)&&t>x.s&&t<x.s+x.d)c=x})}
 if(!c||t<=c.s+.05||t>=c.s+c.d-.05){toast(hedt('split_err'));return}hedHist();var lt0=t-c.s;if(c.kf&&c.kf.length)hedKfUpsertAt(c,lt0);var c2=JSON.parse(JSON.stringify(c));c2.id=hedU();delete c2._m;delete c2._tl;c2.s=t;c2.d=c.s+c.d-t;if(c.rv&&c.k=='video'){c2.i=c.i;c.i=c.i+(c.d-lt0)*c.sp}else c2.i=c.i+(t-c.s)*c.sp;c.d=t-c.s;c2.ao=c.ao;c.ao='';c2.ai='';c2.fo=c.fo;c.fo=0;c2.fi=0;if(c2.kf&&c2.kf.length){c2.kf=c2.kf.filter(function(k){return k.t>=lt0-1e-6}).map(function(k){return Object.assign({},k,{t:k.t-lt0})});c.kf=c.kf.filter(function(k){return k.t<=lt0+1e-6})}HED.p.cl.push(c2);HED.sel=c2.id;hedAll()}
function hedDup(c){c=c||hedSelC();if(!c)return;hedHist();var c2=JSON.parse(JSON.stringify(c));c2.id=hedU();delete c2._m;delete c2._tl;var s=c.s+c.d,tr=c.tr,p=hedFreePos(tr,s,c.d);if(p==null){tr=hedFreeTrack(c.k=='audio'?'a':'v',s,c.d,(hedTr(c.tr)||{}).r);p=hedFreePos(tr,s,c.d)}c2.tr=tr;c2.s=p==null?s:p;HED.p.cl.push(c2);HED.sel=c2.id;hedAll()}
function hedTrimTo(side){var c=hedSelC(),t=HED.t;if(!c||t<=c.s+.05||t>=c.s+c.d-.05){toast(hedt('split_err'));return}hedHist();if(side=='l'){var dl=t-c.s;c.s=t;if(!(c.rv&&c.k=='video'))c.i+=dl*c.sp;c.d-=dl;if(c.kf)c.kf.forEach(function(k){k.t-=dl})}else{if(c.rv&&c.k=='video')c.i+=(c.d-(t-c.s))*c.sp;c.d=t-c.s}hedAll()}
function hedSetSpeed(c,sp){var src=c.d*c.sp,nd=src/sp,L=HED.p.cl.filter(function(x){return x.tr==c.tr&&x.id!=c.id&&x.s>=c.s+c.d-1e-6}).sort(function(a,b){return a.s-b.s});if(L.length)nd=Math.min(nd,L[0].s-c.s);var od=c.d;c.sp=sp;c.d=Math.max(.1,nd);if(c.kf&&od>0)c.kf.forEach(function(k){k.t=k.t*c.d/od})}
function hedMaxD(c){if(c.k=='video'||c.k=='audio'){var m=HED.media[c.m];if(m&&m.dur)return(m.dur-c.i)/c.sp}return 36000}
function hedDetach(){var c=hedSelC();if(!c||c.k!='video')return;hedHist();var a=hedClip('audio',hedFreeTrack('a',c.s,c.d),c.s,c.d,{m:c.m,i:c.i,sp:c.sp,vol:c.vol,nm:c.nm});c.mu=1;HED.p.cl.push(a);hedPeaks(HED.media[c.m]);hedAll()}
/* ---- get / set helper for data-hep paths ---- */
function hedGet(o,path,d){var a=path.replace(/^@/,'').split('.'),i;for(i=0;i<a.length;i++){if(o==null)return d;o=o[a[i]]}return o==null?d:o}
function hedSetP(o,path,v){var a=path.split('.'),i;for(i=0;i<a.length-1;i++){if(o[a[i]]==null||typeof o[a[i]]!='object')o[a[i]]={};o=o[a[i]]}o[a[a.length-1]]=v}
function hedAll(){hedTidy();hedTl();hedPanel();hedTimeUi();hedPlUi();hedFitPv();hedDrawSoon();hedSaveSoon()}

/* ---- keyframes ---- */
function hedKfAt(c,lt){var k=c.kf||[],i,tol=.6/(HED.p.fps||30);for(i=0;i<k.length;i++)if(Math.abs(k[i].t-lt)<=tol)return i;return-1}
function hedKfUpsertAt(c,lt){c.kf=c.kf||[];var i=hedKfAt(c,lt),v;if(c.kf.length)v=hedKfEval(c,lt);else v={x:c.x,y:c.y,sc:c.sc,rot:c.rot,op:c.op};var o={t:hedR(lt,3),x:v.x,y:v.y,sc:v.sc,rot:v.rot,op:v.op};if(i>=0)c.kf[i]=o;else{c.kf.push(o);c.kf.sort(function(a,b){return a.t-b.t})}}
function hedKfUpsert(c){var lt=HED.t-c.s;if(lt<-.001||lt>c.d+.001)return;lt=hedC(lt,0,c.d);c.kf=c.kf||[];var i=hedKfAt(c,lt),o={t:hedR(lt,3),x:c.x,y:c.y,sc:c.sc,rot:c.rot,op:c.op};if(i>=0)c.kf[i]=o;else{c.kf.push(o);c.kf.sort(function(a,b){return a.t-b.t})}}
function hedKfToggle(){var c=hedSelC();if(!c)return;var lt=HED.t-c.s;if(lt<-.001||lt>c.d+.001){toast(hedt('split_err'));return}lt=hedC(lt,0,c.d);hedHist();var i=hedKfAt(c,lt);if(i>=0){c.kf.splice(i,1)}else hedKfUpsert(c);HED.kfOn=hedKfAt(c,lt)>=0;hedTl();hedPanel();hedDrawSoon();hedSaveSoon()}
function hedKfJump(i){var c=hedSelC();if(!c||!c.kf||!c.kf[i])return;hedGo(c.s+c.kf[i].t);hedKfBtn()}

function hedKfGo(dir){var c=hedSelC();if(!c||!c.kf||!c.kf.length)return;var lt=HED.t-c.s,k=c.kf.filter(function(x){return dir>0?x.t>lt+.02:x.t<lt-.02});if(!k.length)return;var q=dir>0?k[0]:k[k.length-1];hedGo(c.s+q.t)}
/* ---- sound effects (generated in the browser, no files) ---- */
var HEDSFX=['ding','bell','pop','click','whoosh','rise','drum','ok','alert','drop'];
function hedSfxPcm(id){var sr=22050,n=0,o,i,t,ph=0,y=0,mk=function(sec){n=Math.floor(sec*sr);o=new Float32Array(n)},T=Math.PI*2;
 switch(id){case'ding':mk(1.1);for(i=0;i<n;i++){t=i/sr;o[i]=Math.sin(T*1320*t)*Math.exp(-t*5)*.65+Math.sin(T*1980*t)*Math.exp(-t*8)*.25}break;
 case'bell':mk(2);for(i=0;i<n;i++){t=i/sr;o[i]=(Math.sin(T*660*t)+.6*Math.sin(T*1584*t)+.35*Math.sin(T*2640*t))*Math.exp(-t*2.6)*.4}break;
 case'pop':mk(.25);for(i=0;i<n;i++){t=i/sr;ph+=T*(140+520*Math.exp(-t*22))/sr;o[i]=Math.sin(ph)*Math.exp(-t*16)}break;
 case'click':mk(.06);for(i=0;i<n;i++){t=i/sr;o[i]=(Math.random()*2-1)*Math.exp(-t*90)*.9}break;
 case'whoosh':mk(1);for(i=0;i<n;i++){t=i/sr;var a=Math.sin(Math.PI*t)*.9,k=.04+.5*Math.sin(Math.PI*t);y+=k*((Math.random()*2-1)-y);o[i]=y*a*2.2}break;
 case'rise':mk(.9);for(i=0;i<n;i++){t=i/sr;ph+=T*(300+1400*t*t/.81)/sr;o[i]=Math.sin(ph)*Math.min(1,t*8)*(t<.8?1:(.9-t)*10)*.7}break;
 case'drum':mk(.7);for(i=0;i<n;i++){t=i/sr;ph+=T*(45+110*Math.exp(-t*14))/sr;o[i]=Math.sin(ph)*Math.exp(-t*6)}break;
 case'ok':mk(.5);for(i=0;i<n;i++){t=i/sr;var f=t<.13?880:1320,e=t<.13?Math.exp(-t*8):Math.exp(-(t-.13)*7);o[i]=Math.sin(T*f*t)*e*.7}break;
 case'alert':mk(.6);for(i=0;i<n;i++){t=i/sr;var on=(t<.14)||(t>.26&&t<.4);o[i]=on?Math.sin(T*1000*t)*.6*Math.min(1,(t%.26)*60):0}break;
 default:mk(.45);for(i=0;i<n;i++){t=i/sr;ph+=T*(1300*Math.exp(-t*5)+300)/sr;o[i]=Math.sin(ph)*Math.exp(-t*7)*.8}}
 var mx=0;for(i=0;i<n;i++)mx=Math.max(mx,Math.abs(o[i]));if(mx>0)for(i=0;i<n;i++)o[i]*=.85/mx;return{pcm:o,sr:sr}}
function hedWav(pcm,sr){var n=pcm.length,b=new ArrayBuffer(44+n*2),v=new DataView(b),w=function(p,s){for(var i=0;i<s.length;i++)v.setUint8(p+i,s.charCodeAt(i))};w(0,'RIFF');v.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*2,true);for(var i=0;i<n;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,pcm[i]))*32767,true);return new Blob([b],{type:'audio/wav'})}
function hedSfxAdd(id){var g=hedSfxPcm(id),f=new File([hedWav(g.pcm,g.sr)],id+'.wav',{type:'audio/wav'});HED.pop='';hedAddFile(f,HED.t,Object.assign({},HED.addCtx||{},{role:'aud',ak:'sfx'}))}
function hedSfxPlay(id){try{var AC=window.AudioContext||window.webkitAudioContext;HED.ac=HED.ac||new AC();var g=hedSfxPcm(id),b=HED.ac.createBuffer(1,g.pcm.length,g.sr);b.getChannelData(0).set(g.pcm);var s=HED.ac.createBufferSource();s.buffer=b;s.connect(HED.ac.destination);if(HED.ac.state=='suspended')HED.ac.resume();s.start()}catch(e){}}
/* ---- subtitles (.srt / .vtt) ---- */
function hedSrt(tx){var out=[];tx.replace(/\r/g,'').replace(/^\uFEFF/,'').split(/\n\n+/).forEach(function(b){var ln=b.split('\n').filter(function(x){return x.trim()!==''}),i=0;if(ln.length<2)return;if(/^\d+$/.test(ln[0].trim()))i=1;var m=(ln[i]||'').match(/(?:(\d+):)?(\d+):(\d+)[,.](\d+)\s*-->\s*(?:(\d+):)?(\d+):(\d+)[,.](\d+)/);if(!m)return;var f=function(h,mi,sc,ms){return(+h||0)*3600+ +mi*60+ +sc+ +('0.'+ms)};out.push({s:f(m[1],m[2],m[3],m[4]),e:f(m[5],m[6],m[7],m[8]),t:ln.slice(i+1).join('\n').replace(/<[^>]+>/g,'')})});return out.filter(function(c){return c.t&&c.e>c.s}).slice(0,600)}
function hedSrtAdd(tx){var cues=hedSrt(tx);if(!cues.length){toast(hedt('srt_err'));return}hedHist();var last=null;cues.forEach(function(q){var d=Math.max(.3,q.e-q.s),tr=hedFreeTrack('v',q.s,d,'txt'),c=hedClip('text',tr,q.s,d,{tx:Object.assign(hedTxtDef(),{s:q.t,c:'#ffffff',b:1,sh:0,bg:'#000000',bo:65,z:5.2,w:90}),y:36});HED.p.cl.push(c);last=c});if(last)HED.sel=last.id;HED.pop='';hedAll()}
/* ---- theme colours from the site (never hard-coded black) ---- */
function hedRGB(s){s=String(s||'');var n=s.match(/-?\d*\.?\d+/g);if(!n||n.length<3)return null;n=n.map(Number);if(/color\(/.test(s))n=n.map(function(v,i){return i<3?v*255:v});return{r:n[0],g:n[1],b:n[2],a:n.length>3?n[3]:1}}
function hedMixC(a,b,k){return'rgb('+Math.round(a.r+(b.r-a.r)*k)+','+Math.round(a.g+(b.g-a.g)*k)+','+Math.round(a.b+(b.b-a.b)*k)+')'}
function hedLum(c){return(c.r*.299+c.g*.587+c.b*.114)/255}
function hedHex(s){var m=/^#([0-9a-f]{6})$/i.test(s);if(m)return s;var c=hedRGB(s);if(!c)return'#d4af37';var h=function(v){return('0'+Math.round(v).toString(16)).slice(-2)};return'#'+h(c.r)+h(c.g)+h(c.b)}
function hedTheme(){var rs=getComputedStyle(D.documentElement),bs=getComputedStyle(D.body),g=hedRGB(stAcc())||{r:212,g:175,b:55},bg=hedRGB(bs.backgroundColor),tx=hedRGB(bs.color)||{r:240,g:240,b:240};
 if(!bg||bg.a<.5)bg=hedRGB(rs.backgroundColor);if(!bg||bg.a<.5)bg=hedLum(tx)>.55?{r:18,g:24,b:30}:{r:250,g:247,b:240};
 var dark=hedLum(bg)<.5,gc='rgb('+Math.round(g.r)+','+Math.round(g.g)+','+Math.round(g.b)+')',s1=hedMixC(bg,g,.07),s2=hedMixC(bg,tx,.1),s3=hedMixC(bg,tx,.17),ln=hedMixC(bg,g,.28);
 var css='--hb:'+hedMixC(bg,g,.035)+';--hs:'+s1+';--hs2:'+s2+';--hs3:'+s3+';--hl:'+ln+';--ht:rgb('+Math.round(tx.r)+','+Math.round(tx.g)+','+Math.round(tx.b)+');--hm:'+hedMixC(bg,tx,.6)+';--hg:'+gc+';--hgt:'+(hedLum(g)>.55?'#1b1b1b':'#ffffff')+';--hpv:'+hedMixC(bg,dark?{r:0,g:0,b:0}:tx,dark?.45:.16);
 return{css:css,g:gc,b:hedMixC(bg,g,.035),dark:dark}}
/* ---- css ---- */
function hedCss(){if($('#hedcss'))return;var s=D.createElement('style');s.id='hedcss';s.textContent=HEDCSS;D.head.appendChild(s)}
/* ---- shell ---- */
function hedView(){hedCss();hedStopEls();HED.pl=0;HED.t=0;HED.els={};HED.pop='';HED.th={g:stAcc(),b:'#000'};HED.nf=hedNF();HED.tk='';
 app.innerHTML='<div class="hed" id="hed"><div class="hedhd"><button class="ib" data-ha="home" aria-label="back">'+ic('l')+'</button><span class="hedhi">'+hi('layers')+'</span><b class="hednm">'+esc(HED.p.nm||hedt('nm'))+'</b><span class="hedsp"></span><button type="button" class="hedxb" id="hedxbtn" data-ha="pop:exp">'+hi('export')+'<span>'+hedt('b_exp')+'</span></button></div>'
 +'<div class="hedpbar"><button type="button" class="hedsel hedddb" data-dd="res" id="hedres"></button><button type="button" class="hedsel hedddb" data-dd="fps" id="hedfpss"></button><button type="button" class="hedsel hedddb" data-dd="ratio" id="hedrat"></button><span class="hedsp"></span><button type="button" class="hedib" data-ha="fs" aria-label="fullscreen">'+hi('full')+'</button></div>'
 +'<div class="hedpv" id="hedpv"><canvas id="hedcv"></canvas><canvas id="hedov" class="hedovc"></canvas><button type="button" class="hedrecp" id="hedrecp" data-ha="rec">'+hi('stop')+'<span>'+hedt('rec_stop')+'</span></button><button type="button" class="hedib hedfsx" data-ha="fs" aria-label="close">'+hi('close')+'</button></div><div class="hedspl" id="hedspl"><i></i></div>'
 +'<div class="hedtp"><span class="hedtm" id="hedtm"></span><span class="hedtc2"><button type="button" class="hedib" data-ha="prev" aria-label="prev">'+hi('prev')+'</button><button type="button" class="hedplay" id="hedplay" data-ha="play" aria-label="play">'+hi('play')+'</button><button type="button" class="hedib" data-ha="next" aria-label="next">'+hi('next')+'</button></span><span class="hedur"><button type="button" class="hedib" id="hedun" data-ha="undo" aria-label="undo">'+hi('undo')+'</button><button type="button" class="hedib" id="hedrd" data-ha="redo" aria-label="redo">'+hi('redo')+'</button></span></div>'
 +'<div class="hedtb"><button type="button" class="hedib" id="hedsn" data-ha="snap" aria-label="snap">'+hi('magnet')+'</button><button type="button" class="hedib" id="hedms" data-ha="rsm" aria-label="resize mode">'+hi('mouse2')+'</button><span class="hedsp"></span><button type="button" class="hedib" data-ha="zo" aria-label="zoom out">'+hi('minus')+'</button><button type="button" class="hedib" data-ha="zf" aria-label="fit">'+hi('fit')+'</button><button type="button" class="hedib" data-ha="zi" aria-label="zoom in">'+hi('plus')+'</button><button type="button" class="hedib hedkfs" id="hedkfs" data-ha="kfadd" aria-label="keyframe">'+hi('kfp')+'</button></div>'
 +'<div class="hedtl"><div class="hedts" id="hedts"><div class="hedtc" id="hedtc"></div></div><div class="hedphc" id="hedphc"><i></i></div></div>'
 +'<div class="hedbar" id="hedbar"></div><div class="hedpop" id="hedpop"></div>'
 +'<input type="file" id="hedfs" accept=".srt,.vtt,text/plain,text/vtt" hidden><input type="file" id="hedfv" accept="video/*,image/*" multiple hidden><input type="file" id="hedfa" accept="audio/*,video/*" multiple hidden><input type="file" id="hedfr" hidden><div id="hedsh"></div></div>';
 HED.cv=$('#hedcv');HED.ov=$('#hedov');HED.rec=HED.rec||null;hedSizes();hedBind();hedBindRs($('#hed'),$('#hedts'));hedSelFill();hedThemeSync(1);hedThemeWatch();hedFitPv();hedAll()}

function hedThemeSync(force){if(!hedAlive())return;var r=$('#hed');if(!r)return;var g=stAcc(),bs=getComputedStyle(D.body),k=g+'|'+bs.backgroundColor+'|'+(D.documentElement.getAttribute('data-theme')||'')+'|'+D.documentElement.className+D.body.className;if(!force&&HED.tk==k)return;HED.tk=k;var gc=hedRGB(g)||{r:212,g:175,b:55};r.style.setProperty('--hgt',hedLum(gc)>.55?'#1b1b1b':'#ffffff');HED.th={g:g,b:bs.backgroundColor};if(!force){hedTl();hedDrawSoon()}}
function hedThemeWatch(){if(HED.mo)try{HED.mo.disconnect()}catch(e){}clearInterval(HED.ti);if(window.MutationObserver){HED.mo=new MutationObserver(function(){hedThemeSync()});[D.documentElement,D.body].forEach(function(n){HED.mo.observe(n,{attributes:true})});var hd=D.head;if(hd)HED.mo.observe(hd,{childList:true,subtree:true,characterData:true})}HED.ti=setInterval(function(){if(!hedAlive()){clearInterval(HED.ti);if(HED.mo)HED.mo.disconnect();return}hedThemeSync()},1200)}
function hedLoadMedia(p){(p.mm||[]).forEach(function(mm){hedDbGet(mm.id).then(function(b){if(!b||!HED)return;var m=Object.assign({},mm,{blob:b,url:URL.createObjectURL(b)});HED.media[mm.id]=m;
 if(mm.type=='image'){var im=new Image();im.onload=function(){m.img=im;m.w=im.naturalWidth;m.h=im.naturalHeight;hedThumbImg(m);if(hedAlive()){hedTl();hedDrawSoon()}};im.src=m.url}else if(mm.type=='video'){hedThumbs(m);if(hedAlive())hedDrawSoon()}else hedPeaks(m)})})}

function hedFitPv(){var w=$('#hedpv'),cv=HED&&HED.cv;if(!w||!cv)return;var d=hedDims(),fs=w.classList.contains('fs'),asp=d.W/d.H,pad=10,bw,cap,cw,ch,root=$('#hed');
 if(fs){w.style.height='';bw=w.clientWidth;cap=w.clientHeight;cw=Math.min(bw,cap*asp)}
 else{bw=(root?root.clientWidth:innerWidth)-pad*2;cap=Math.max(150,(root?root.clientHeight:innerHeight)*hedSt('pvh',.44));cw=Math.min(bw,cap*asp)}
 ch=cw/asp;if(!fs)w.style.height=Math.round(HED.p.st&&HED.p.st.pvh!=null?cap+pad*2:ch+pad*2)+'px';var dpr=Math.min(2,window.devicePixelRatio||1),pw=Math.min(d.W,Math.round(cw*dpr*hedSt('pq',1)),1600);cv.style.width=cw+'px';cv.style.height=ch+'px';if(cv.width!=pw||cv.height!=Math.round(pw*d.H/d.W)){cv.width=pw;cv.height=Math.round(pw*d.H/d.W)}hedOvFit();hedDrawSoon()}
function hedTimeUi(){var e=$('#hedtm'),du=hedDur(),f=HED.p.fps;if(e)e.innerHTML='<b>'+hedFmtD(HED.t,du,f)+'</b> <i>/ '+hedFmtD(du,du,f)+'</i>';var u=$('#hedun'),r=$('#hedrd');if(u)u.disabled=!HED.un.length;if(r)r.disabled=!HED.re.length;var s=$('#hedsn');if(s)s.classList.toggle('on',hedSt('snap',1)!=0);var ms=$('#hedms');if(ms)ms.classList.toggle('on',!!hedSt('rs',0));if(HED.pop=='kf'||HED.pop=='xf'||HED.pop=='opa')hedKfRefresh();hedKfBtn();hedKfWatch()}
function hedKfBtn(){var b=$('#hedkfs');if(!b)return;var c=hedSelC(),ok=!!c&&c.k!='audio'&&HED.t>=c.s-1e-6&&HED.t<=c.s+c.d+1e-6,on=ok&&hedKfAt(c,hedC(HED.t-c.s,0,c.d))>=0;b.disabled=!ok;b.classList.toggle('on',on);var h=hi(on?'kfm':'kfp');if(b.innerHTML!=h)b.innerHTML=h}
function hedKfWatch(){var c=hedSelC(),on=false;if(c&&c.kf&&c.kf.length&&c.k!='audio'){var lt=HED.t-c.s;on=lt>=-.001&&lt<=c.d+.001&&hedKfAt(c,hedC(lt,0,c.d))>=0}HED.kfOn=on}

function hedKfRefresh(){var c=hedSelC(),p=$('#hedpop');if(!c||!p)return;var lt=hedC(HED.t-c.s,0,c.d),v=c.kf&&c.kf.length?hedKfEval(c,lt):c;p.querySelectorAll('.hedr[data-hep]').forEach(function(i){var k=i.dataset.hep;if(k=='x'||k=='y'||k=='sc'||k=='rot'||k=='op'){i.value=v[k];var o=i.parentNode.querySelector('output');if(o)o.textContent=hedR(v[k],2)+(o.dataset.u||'')}});var sk=p.querySelector('#hedseek');if(sk&&D.activeElement!==sk)sk.value=HED.t;var d=p.querySelector('#hedkfd');if(d){var on=hedKfAt(c,lt)>=0;d.classList.toggle('on',on);d.innerHTML=hi(on?'kff':'kf')}}
/* ---- timeline ---- */
var HEDHW=66,HEDRH=26,HEDTH=48;
function hedRows(){var v=HED.p.tr.filter(function(x){return x.k=='v'}).reverse(),a=HED.p.tr.filter(function(x){return x.k=='a'});return v.concat(a)}
function hedTicks(pps,lw){var st=[.1,.2,.5,1,2,5,10,15,30,60,120,300,600].filter(function(s){return s*pps>=62})[0]||600,h='',n=Math.ceil(lw/pps/st),i;for(i=0;i<=n;i++){var x=i*st*pps,s=i*st;h+='<span class="hedtk" style="left:'+x+'px">'+(s>=60?Math.floor(s/60)+':'+hedPad(Math.round(s%60)):(st<1?hedR(s,1):s)+'s')+'</span>'}return h}
function hedTl(){var ts=$('#hedts'),tc=$('#hedtc');if(!ts||!tc)return;var pps=HED.z,dur=hedDur(),vw=ts.clientWidth,pad=Math.max(0,Math.round((vw-HEDHW)/2)),lw=(dur+4)*pps,rows=hedRows(),h='',prev='',sp='<div class="hedpad" style="width:'+pad+'px"></div>';HED.pad=pad;
 h+='<div class="hedrow hedruw"><div class="hedtn hedcorner"><span class="hedrg">'+hi('move')+'</span></div>'+sp+'<div class="hedru" id="hedru" style="width:'+lw+'px">'+hedTicks(pps,lw)+'</div>'+sp+'</div>';
 rows.forEach(function(tr){var cs='',jn='',cl=HED.p.cl.filter(function(c){return c.tr==tr.id}).sort(function(a,b){return a.s-b.s});
  cl.forEach(function(c){var sel=c.id==HED.sel,kd='';if(sel&&c.kf)c.kf.forEach(function(k,ki){kd+='<i class="hedkd" data-ha="kfj:'+ki+'" style="left:'+(k.t*pps)+'px"><b></b></i>'});cs+='<div class="hedcl k-'+c.k+(c.k=='audio'?' ak-'+hedAK(c):'')+(sel?' sel':'')+(tr.lk||c.lk?' lk':'')+(c.g?' grp':'')+(hedClipLoading(c)?' hedld':'')+'" data-c="'+c.id+'" style="left:'+c.s*pps+'px;width:'+Math.max(6,c.d*pps)+'px"><canvas class="hedcc"></canvas>'+hedBadges(c)+'<span class="hedcn">'+(c.k=='text'?'<b>T</b>':'')+esc(hedCName(c))+'</span>'+kd+'</div>'+(sel&&!hedLocked(c)?'<i class="hedh l" data-c="'+c.id+'" style="left:'+(c.s*pps-16)+'px"></i><i class="hedh r" data-c="'+c.id+'" style="left:'+((c.s+c.d)*pps)+'px"></i>':'')});
  if(tr.r=='vid'||tr.r=='ovl'){var jb=function(k,id,x,ty){var w=ty?34:22;return'<button type="button" class="hedjn'+(ty?' hedjs':'')+'" data-ha="jn:'+k+':'+id+'" style="left:'+(x-w/2)+'px" aria-label="animation">'+(ty?hedAnGlyph(ty):hi('plus'))+'</button>'};
   cl.forEach(function(c,i){var nx=cl[i+1],pv=cl[i-1],sel=c.id==HED.sel,aN=nx&&Math.abs(c.s+c.d-nx.s)<.06,aP=pv&&Math.abs(pv.s+pv.d-c.s)<.06;if(!aP&&!sel)jn+=jb('in',c.id,c.s*pps,c.ai);if(aN){if(!sel&&nx.id!=HED.sel)jn+=jb('mid',c.id+':'+nx.id,(c.s+c.d)*pps,c.ao||nx.ai)}else if(!sel)jn+=jb('out',c.id,(c.s+c.d)*pps,c.ao)})}
  var sub=prev==tr.r;prev=tr.r;
  h+='<div class="hedrow"><div class="hedtn'+(tr.hid?' off':'')+(sub?' sub':'')+'" data-tn="'+tr.id+'" data-r="'+tr.r+'"><button type="button" class="hedtv" data-ha="tv:'+tr.id+'" aria-label="track">'+hi(HEDRI[tr.r]||'layers')+'</button><button type="button" class="hedtp2" data-ha="trp:'+tr.id+'" aria-label="add">'+hi('plus')+'</button></div>'+sp+'<div class="hedlane'+(tr.hid?' hid':'')+'" data-tr="'+tr.id+'" style="width:'+lw+'px">'+cs+jn+'</div>'+sp+'</div>'});
 tc.style.width=(HEDHW+pad*2+lw)+'px';tc.style.height=(HEDRH+rows.length*HEDTH)+'px';tc.innerHTML=h;HED.lw=lw;var ph=$('#hedphc');if(ph)ph.style.left=(HEDHW+pad)+'px';
 tc.querySelectorAll('.hedcl').forEach(function(el){hedArt(el)});hedPhUp()}
function hedCName(c){if(c.k=='text')return(c.tx&&c.tx.s||'').split('\n')[0]||hedt('b_txt');if(c.k=='shape')return c.nm||hedt('b_shp');return c.nm||''}
function hedArt(el){var c=hedCl(el.dataset.c),cv=el.querySelector('canvas');if(!c||!cv)return;var cw=Math.max(4,c.d*HED.z),h=HEDTH-11,m=HED.media[c.m],dpr=Math.min(2,window.devicePixelRatio||1),vs=0,ve=cw,ts=$('#hedts'),i,g;
 if(cw>2000&&ts){var er=el.getBoundingClientRect(),tr=ts.getBoundingClientRect();vs=Math.max(0,Math.floor(tr.left-er.left-500));ve=Math.min(cw,Math.ceil(tr.right-er.left+500));if(ve<=vs){vs=Math.max(0,Math.min(vs,cw-800));ve=Math.min(cw,vs+1000)}}
 var w=Math.max(2,ve-vs);el._win=cw>2000?1:0;el._vs=vs;el._ve=ve;el._cw=cw;cv.style.left=vs+'px';cv.style.top='0';cv.style.width=w+'px';cv.style.height='100%';
 cv.width=Math.max(1,Math.round(w*dpr));cv.height=Math.max(1,Math.round(h*dpr));var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,-vs*dpr,0);
 if(c.k=='video'||c.k=='image'){x.fillStyle=c.k=='video'?'#2c5fd0':'#d9831f';x.fillRect(vs,0,w,h);if(m&&m.th&&m.th.length){var tw=Math.max(20,Math.round(h*16/9));for(var px=Math.floor(vs/tw)*tw;px<ve;px+=tw){var tt=c.k=='image'?0:Math.floor(hedC((c.i+(px+tw/2)/cw*c.d*c.sp)/(m.dur||1),0,.9999)*m.th.length);x.drawImage(m.th[Math.min(tt,m.th.length-1)],px,0,tw,h)}}g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(0,0,0,.05)');g.addColorStop(1,'rgba(0,0,0,.45)');x.fillStyle=g;x.fillRect(vs,0,w,h)}
 else if(c.k=='audio'){hedWaveArt(c,x,cw,h,m,vs,ve)}
 else if(c.k=='shape'){var s=c.sh;g=x.createLinearGradient(0,0,cw,h);g.addColorStop(0,s.c);g.addColorStop(1,s.c2||s.c);x.fillStyle=g;x.fillRect(vs,0,w,h);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(vs,h*.55,w,h*.45)}
 else{x.fillStyle=HED.th.g;x.fillRect(vs,0,w,h);x.fillStyle='rgba(255,255,255,.18)';x.fillRect(vs,0,w,h/2)}}
function hedArtSoon(){if(!HED||HED._as)return;HED._as=requestAnimationFrame(function(){if(!HED)return;HED._as=0;var ts=$('#hedts');if(!ts)return;var tr=ts.getBoundingClientRect();D.querySelectorAll('#hedtc .hedcl').forEach(function(el){if(!el._win)return;var er=el.getBoundingClientRect(),a=tr.left-er.left,b=tr.right-er.left;if((a<el._vs+150&&el._vs>0)||(b>el._ve-150&&el._ve<el._cw-1))hedArt(el)})})}
function hedWaveArt(c,x,cw,h,m,vs,ve){var k=HEDAKC[hedAK(c)],cs=k.split(',').map(Number),n=m&&m.pk?m.pk.length:0,dd=(m&&m.dur)||1,w=ve-vs,g=x.createLinearGradient(0,0,0,h),stp=3,bw=1.8;
 g.addColorStop(0,'rgba('+k+',.30)');g.addColorStop(1,'rgba('+k+',.16)');x.fillStyle=g;x.fillRect(vs,0,w,h);x.fillStyle='rgba('+k+',.9)';x.fillRect(vs,0,w,1.5);x.fillStyle='rgba(255,255,255,.16)';x.fillRect(vs,h/2-.5,w,1);
 var lt='rgb('+Math.min(255,cs[0]+90)+','+Math.min(255,cs[1]+60)+','+Math.min(255,cs[2]+60)+')',lg=x.createLinearGradient(0,0,0,h);lg.addColorStop(0,lt);lg.addColorStop(.5,'rgb('+k+')');lg.addColorStop(1,lt);x.fillStyle=lg;
 for(var i=Math.floor(vs/stp)*stp;i<ve;i+=stp){var a=h*.07;if(n){var q0=c.i+i/cw*c.d*c.sp,q1=c.i+(i+stp)/cw*c.d*c.sp,j0=hedC(Math.floor(q0/dd*n),0,n-1),j1=hedC(Math.ceil(q1/dd*n),0,n-1),mx=0;for(var j=j0;j<=j1;j++)if(m.pk[j]>mx)mx=m.pk[j];a=Math.max(h*.06,Math.min(h*.88,Math.pow(Math.min(1,mx*1.15),.6)*h*.88))}
  var y=(h-a)/2;x.beginPath();if(x.roundRect)x.roundRect(i,y,bw,a,bw/2);else x.rect(i,y,bw,a);x.fill()}}
function hedPhUp(){var ts=$('#hedts');if(!ts)return;var x=Math.max(0,HED.t*HED.z);if(Math.abs(ts.scrollLeft-x)>.5){HED.sl=x;ts.scrollLeft=x}HED.sl=ts.scrollLeft}
function hedOnScroll(){hedArtSoon();var ts=$('#hedts');if(!ts||HED.xo)return;if(Math.abs(ts.scrollLeft-(HED.sl||0))<1.5)return;HED.sl=ts.scrollLeft;if(HED.pl)hedPause();var t=hedC(ts.scrollLeft/HED.z,0,hedDur());HED.t=t;hedSync(t,false);hedDrawSoon();hedTimeUi()}
function hedZoom(f){HED.z=hedC(HED.z*f,6,400);hedTl()}
function hedZFit(){var ts=$('#hedts');if(!ts)return;HED.z=hedC((ts.clientWidth-HEDHW-24)/hedDur(),6,400);hedTl()}
function hedRowAt(y){var rows=D.querySelectorAll('#hedtc .hedlane'),i,r;for(i=0;i<rows.length;i++){r=rows[i].getBoundingClientRect();if(y>=r.top&&y<r.bottom)return hedTr(rows[i].dataset.tr)}return null}
function hedSnapT(s,c,ign){if(hedSt('snap',1)==0)return s;var th=9/HED.z,best=null,bd=th,pts=[0,HED.t];HED.p.cl.forEach(function(x){if(x.id!=c.id){pts.push(x.s,x.s+x.d)}});pts.forEach(function(q){var d=Math.abs(q-s);if(d<bd){bd=d;best=q}if(!ign){var d2=Math.abs(q-(s+c.d));if(d2<bd){bd=d2;best=q-c.d}}});return best==null?s:best}
function hedScrubUnused(){}
function hedTlMove(e){if(HED.tps&&HED.tps[e.pointerId])HED.tps[e.pointerId]=[e.clientX,e.clientY];if(HED.pz){var ks=Object.keys(HED.tps);if(ks.length==2){var a=HED.tps[ks[0]],b=HED.tps[ks[1]],d=Math.hypot(a[0]-b[0],a[1]-b[1])||1,nz=hedC(HED.pz.z*d/HED.pz.d,6,400);if(Math.abs(nz-HED.z)/HED.z>.04){HED.z=nz;hedTl()}}return}
 var g=HED.drag;HED.lpx=e.clientX;HED.lpy=e.clientY;if(!g)return;if(g.k=='lp'){if(Math.abs(e.clientX-g.x0)+Math.abs(e.clientY-g.y0)>9){clearTimeout(g.timer);HED.drag=null}return}var dxp=e.clientX-g.x0;if(!g.moved&&Math.abs(dxp)+Math.abs(e.clientY-g.y0)<5)return;g.moved=1;if(g.k=='tap'||g.k=='bg')return;var c=g.c,pps=HED.z,ds=dxp/pps;
 if(!g.h){hedHist();g.h=1;if(g.k=='trl'||g.k=='trr'){var tk=hedTr(g.c.tr);if(tk&&tk.r=='vid')g.rip=HED.p.cl.filter(function(x){return x.tr==g.c.tr&&x.id!=g.c.id&&x.s>=g.s0+g.d0-1e-6}).map(function(x){return{c:x,s0:x.s}})}if(g.k=='mv'){var t0=hedTr(g.tr0);if(t0&&t0.r!='vid'&&!HED.p.tr.some(function(x){return x.r==t0.r&&x.id!=t0.id&&!HED.p.cl.some(function(q){return q.tr==x.id&&q.id!=c.id})})){hedNewTrack(t0.k,t0.r,1);hedTl();g.el=D.querySelector('.hedcl[data-c="'+c.id+'"]')}}}
 if(g.k=='mv'){c.s=Math.max(0,hedSnapT(g.s0+ds,c));g.el.style.left=c.s*pps+'px';var row=hedRowAt(e.clientY),r0=(hedTr(g.tr0)||{}).r;if(row&&row.r==r0&&!row.lk&&row.id!=c.tr){var ln=D.querySelector('.hedlane[data-tr="'+row.id+'"]');if(ln){ln.appendChild(g.el);D.querySelectorAll('.hedh[data-c="'+c.id+'"]').forEach(function(h){ln.appendChild(h)});c.tr=row.id}}}
 else if(g.k=='trl'&&g.rip){var mn2=(hedHasSnd(c)&&!(c.rv&&c.k=='video'))?-(g.i0/c.sp):-30,d3=hedC(hedSnapT(g.s0+ds,c,1)-g.s0,mn2,g.d0-.1);c.s=g.s0;c.d=g.d0-d3;if(hedHasSnd(c)&&!(c.rv&&c.k=='video'))c.i=g.i0+d3*c.sp;if(g.kf0)c.kf=g.kf0.map(function(k){return Object.assign({},k,{t:k.t-d3})});hedRipUpd(g,-d3,pps);g.el.style.left=c.s*pps+'px';g.el.style.width=c.d*pps+'px'}
 else if(g.k=='trl'){var mn=-(g.i0/c.sp);if(c.k=='image'||c.k=='text'||c.k=='shape')mn=-g.s0;var pe=0;HED.p.cl.forEach(function(x){if(x.tr==c.tr&&x.id!=c.id&&x.s+x.d<=g.s0+1e-6)pe=Math.max(pe,x.s+x.d)});mn=Math.max(mn,pe-g.s0,-g.s0);var d2=hedC(hedSnapT(g.s0+ds,c,1)-g.s0,mn,g.d0-.1);c.s=g.s0+d2;c.d=g.d0-d2;if(hedHasSnd(c)&&!(c.rv&&c.k=='video'))c.i=g.i0+d2*c.sp;if(g.kf0)c.kf=g.kf0.map(function(k){return Object.assign({},k,{t:k.t-d2})});g.el.style.left=c.s*pps+'px';g.el.style.width=c.d*pps+'px'}
 else if(g.k=='trr'){var nx=1e9;HED.p.cl.forEach(function(x){if(x.tr==c.tr&&x.id!=c.id&&x.s>=g.s0+g.d0-1e-6)nx=Math.min(nx,x.s)});var e2=hedSnapT(g.s0+g.d0+ds,c,1);c.d=hedC(e2-g.s0,.1,(g.rip?(c.rv&&c.k=='video'?36000:hedMaxD(c)):Math.min(c.rv&&c.k=='video'?36000:hedMaxD(c),nx-g.s0)));if(c.rv&&c.k=='video')c.i=Math.max(0,g.i0+(g.d0-c.d)*c.sp);if(g.rip)hedRipUpd(g,c.d-g.d0,pps);g.el.style.width=c.d*pps+'px'}
 hedHPos(c);hedDrawSoon();hedTimeUi()}
function hedTlUp(e){if(HED.tps)delete HED.tps[e.pointerId];if(HED.pz){if(!Object.keys(HED.tps||{}).length)HED.pz=null;return}var g=HED.drag;HED.drag=null;if(!g)return;clearTimeout(g.timer);HED.lpOn=0;if(g.el)g.el.classList.remove('lift');
 if((g.k=='tap'||g.k=='lp')&&!g.moved){HED.sel=g.c.id;HED.kfOn=null;hedTl();hedPanel();hedDrawSoon();return}
 if(g.k=='bg'&&!g.moved){var t0=e.target;if(t0.closest&&!t0.closest('.hedcl,.hedjn,.hedtn,.hedru,.hedkd,.hedh,.hedhpo')&&HED.sel){HED.sel='';hedTl();hedPanel();hedDrawSoon()}return}
 if((g.k=='trl'||g.k=='trr')&&!g.moved){hedHandlePop(g.c,g.k=='trl'?'l':'r');return}
 if(g.k=='mv'&&g.moved){var c=g.c,p=hedFreePos(c.tr,c.s,c.d,c.id);if(p==null){c.tr=g.tr0;c.s=g.s0;p=hedFreePos(c.tr,c.s,c.d,c.id);if(p!=null)c.s=p}else c.s=p;hedAll();return}
 if((g.k=='trl'||g.k=='trr')&&g.moved)hedAll()}
/* ---- panel builders ---- */
var hedPC=null;
function hSl(path,lab,mn,mx,st,def,unit){var v=hedGet(hedPC,path,def);return'<div class="hedsr"><label>'+lab+'</label><button type="button" class="hedst" data-hst="'+path+'|-1" aria-label="-">'+hi('minus')+'</button><input type="range" class="hedr" data-hep="'+path+'" min="'+mn+'" max="'+mx+'" step="'+st+'" value="'+v+'"><button type="button" class="hedst" data-hst="'+path+'|1" aria-label="+">'+hi('plus')+'</button><output data-u="'+(unit||'')+'">'+hedR(v,2)+(unit||'')+'</output></div>'}
function hCh(path,list,cur){return'<div class="hedchs">'+list.map(function(x){return'<button type="button" class="hedchip'+(String(x[0])==String(cur)?' on':'')+'" data-hepv="'+path+'|'+x[0]+'">'+x[1]+'</button>'}).join('')+'</div>'}
function hCol(path,lab,def,off){var v=hedGet(hedPC,path,def);return'<div class="hedsr hedcr"><label>'+lab+'</label><input type="color" class="hedcol" data-hep="'+path+'" value="'+hedHex(v||def)+'">'+(off?'<button type="button" class="hedchip'+(v?'':' on')+'" data-hepv="'+path+'|">'+hedt('off')+'</button>':'')+'</div>'}
function hTog(path,lab){var v=hedGet(hedPC,path,0);return'<label class="hedtg"><span>'+lab+'</span><input type="checkbox" data-hep="'+path+'"'+(v?' checked':'')+'><i></i></label>'}

function hBtn(a,ic2,lab,cls){return'<button type="button" class="hedbt'+(cls?' '+cls:'')+'" data-ha="'+a+'">'+hi(ic2)+'<span>'+lab+'</span></button>'}
function hTile(a,ic2,lab){return'<button type="button" class="hedtile" data-ha="'+a+'"><span class="hedtic">'+hi(ic2)+'</span><span>'+lab+'</span></button>'}
var HEDPRE=[['none',{}],['vivid',{sa:35,ct:12}],['warm',{te:45,sa:10}],['cool',{te:-45}],['bw',{sa:-100,ct:10}],['cine',{ct:18,sa:-10,te:-20,br:-5}],['fade',{ct:-15,br:8,sa:-25}],['dusk',{te:30,ti:25,br:-8,ct:8}],['pop',{ct:25,sa:50,br:5}]];
var HEDAN=['','fade','sl','sr','su','sd','zi','zo','spin','blur','pop','rev'];
var HEDBM=['source-over','multiply','screen','overlay','lighten','darken','soft-light','difference'];
var HEDSTK=['ﷲ','ﷺ','﷽','۞','﴾','﴿','✦','❖','☪','✿','★','♥'];
var HEDTP=[['classic',{c:'#ffffff',b:1,sh:45,st:0,bg:'',f:'site'}],['gold',{c:'GOLD',b:1,sh:55,st:0,bg:'',f:'site'}],['outline',{c:'#ffffff',b:1,sh:0,st:9,sc:'#000000',bg:''}],['box',{c:'#ffffff',b:1,sh:0,st:0,bg:'#000000',bo:72}],['neon',{c:'#ffffff',b:1,st:6,sc:'GOLD',sh:90,sk:'GOLD',bg:''}],['quran',{c:'GOLD',b:0,sh:35,st:0,bg:'',f:'hafs',z:10}],['sub',{c:'#ffffff',b:1,sh:0,st:0,bg:'#000000',bo:65,z:5.2,w:90,Y:36}],['soft',{c:'#222222',b:1,sh:0,st:0,bg:'#ffffff',bo:88}]];
var HEDRZ=[['wd',16,9,'wd'],['st',9,16,'st'],['sq',1,1,'sq'],['p45',4,5,'p45'],['p34',3,4,'p34'],['c:21:9',21,9,'cin'],['c:4:3',4,3,'cls'],['c:3:2',3,2,'ph'],['c:2:3',2,3,'tall']];
var HEDSW=['#000000','#ffffff','#0f3d3a','#0b1f3a','#4a0f1f','#2e1a47','#f3ead2','GOLD'];
var HEDTT={kf:'b_kf',filter:'b_filter',adjust:'b_adjust',mask:'b_mask',layers:'b_layers',resize:'b_resize',anall:'b_anall',settings:'b_settings',jn:'anim',mus:'b_music',sfx:'b_sfx',trim:'b_trim',speed:'b_speed',vol:'volume',anim:'anim',trn:'b_trn',opa:'b_opa',xf:'b_xf',crop:'b_crop',color:'tb_color',fx:'tb_fx',txt:'b_txt',tst:'b_tst',shp:'b_shp',more:'b_more',add:'b_add',ovl:'b_ovl',exp:'b_exp',canvas:'b_canvas'};
function hedPopOk(k,c){if(!k)return false;if(/^(add|ovl|exp|canvas|settings|layers|anall|mus|sfx|resize|reset)$/.test(k))return true;if(!c)return false;if(k=='txt'||k=='tst')return c.k=='text';if(k=='shp')return c.k=='shape';if(k=='vol'||k=='speed')return hedHasSnd(c);if(k=='crop')return c.k=='video'||c.k=='image';if(/^(filter|adjust|fx|anim|opa|xf|trn|kf|mask|jn)$/.test(k))return c.k!='audio';return true}
function hAnTile(ty,cur,act,out){return'<button type="button" class="hedant'+(String(cur)==String(ty)?' on':'')+'" data-ha="'+act+ty+'"><span class="hedanv"><i class="hedanb a-'+(ty||'none')+(out?' out':'')+'"></i></span><span>'+hedt('an_'+(ty||'none'))+'</span></button>'}
function hAnGrid(cur,act,out){return'<div class="hedang">'+HEDAN.map(function(v){return hAnTile(v,cur,act,out)}).join('')+'</div>'}
function hSeg(path,list,cur){return'<div class="hedseg">'+list.map(function(x){return'<button type="button" class="'+(x[0]==cur?'on':'')+'" data-ha="'+path+x[0]+'">'+x[1]+'</button>'}).join('')+'</div>'}
function hedCssF(col){var a=[],f=col||{};if(f.br)a.push('brightness('+(100+f.br)+'%)');if(f.ct)a.push('contrast('+(100+f.ct)+'%)');if(f.sa)a.push('saturate('+(100+f.sa)+'%)');if(f.hu)a.push('hue-rotate('+f.hu+'deg)');if(f.te>0)a.push('sepia('+Math.round(f.te*.45)+'%) saturate(1.25)');else if(f.te<0)a.push('hue-rotate('+Math.round(f.te*.2)+'deg) saturate(1.1)');if(f.ti>0)a.push('hue-rotate('+Math.round(-f.ti*.25)+'deg)');else if(f.ti<0)a.push('hue-rotate('+Math.round(-f.ti*.25)+'deg)');return a.join(' ')||'none'}
function hedSnapSmall(c){try{var cv=D.createElement('canvas'),d=hedDims();cv.width=112;cv.height=Math.round(112*d.H/d.W);var x=cv.getContext('2d'),k=cv.width/d.W,sv=[c.col,c.ef,c.ai,c.ao];c.col={};c.ef={};c.ai=c.ao='';x.setTransform(k,0,0,k,0,0);hedDraw(x,d.W,d.H,hedTNow(),{u:k});c.col=sv[0];c.ef=sv[1];c.ai=sv[2];c.ao=sv[3];return cv.toDataURL('image/jpeg',.7)}catch(e){return''}}
/* ---- bottom tool bar (changes with the selected clip) ---- */
function gcdF(a,b){a=Math.round(a);b=Math.round(b);while(b){var t=b;b=a%b;a=t}return a||1}
function hedTool(a,ic2,lab,cls,on){return'<button type="button" class="hedtool'+(cls?' '+cls:'')+(on?' on':'')+'" data-ha="'+a+'"><span class="hedtic">'+hi(ic2)+'</span><span>'+lab+'</span></button>'}
function hedBar(){var el=$('#hedbar');if(!el)return;var c=hedSelC(),h='',P=function(k,i,l,cls){return hedTool('pop:'+k,i,hedt(l),cls,HED.pop==k)};
 if(!c){h=P('layers','layers','b_layers')+P('resize','resize','b_resize')+P('anall','anim2','b_anall')+P('canvas','canvas','b_canvas')+P('reset','rst','b_reset')+P('settings','gear','b_settings')}
 else{var snd=hedHasSnd(c),vis=c.k!='audio',med=c.k=='video'||c.k=='image';h+=hedTool('split','split',hedt('b_split'))+P('trim','cut','b_trim')+hedTool('dup','copy',hedt('b_dup'))+hedTool('del','trash',hedt('b_del'),'dng');
  if(vis)h+=P('anim','wand','anim')+P('mask','mask','b_mask')+P('xf','move','b_xf')+(med?hedTool('ff',c.fit=='fill'?'fit2':'fill2',hedt(c.fit=='fill'?'fit':'fill')):'')+P('filter','filter','b_filter')+P('fx','sliders','tb_fx')+P('opa','opacity','b_opa')+hedTool('rot','rotate',hedt('b_rot'));
  if(c.k=='text')h+=P('txt','text','b_txt')+P('tst','color','b_tst');if(c.k=='shape')h+=P('shp','shape','b_shp');
  if(snd)h+=P('vol','vol','volume')+P('speed','speed','b_speed');if(med)h+=P('crop','crop','b_crop');if(c.k=='video')h+=hedTool('freeze','camera',hedt('b_freeze'))+hedTool('detach','audio',hedt('detach'))}
 if(c){h+=P('layers','layers','b_layers');if(c.k!='audio')h+=hedTool('grpgo','group2',hedt('b_group'),'',!!c.g);if(c.k=='video'||c.k=='image'||c.k=='audio')h+=hedTool('rpl','repl',hedt('b_replace'));if(c.k=='video'||c.k=='audio')h+=(c._rv!=null?hedTool('rvstop','stop',hedt('x_stop'),'dng',true):hedTool('rev','rev2',hedt('b_reverse'),'',!!c.rv))}
 var sc=el.scrollLeft;el.innerHTML=h;el.scrollLeft=sc;var rp=$('#hedrecp');if(rp)rp.classList.toggle('on',!!HED.rec)}
/* ---- popup (does not push the layout) ---- */
function hedPanel(){var c=hedSelC();HED.ddl={};hedPC=c;hedBar();var p=$('#hedpop');if(!p)return;if(HED.pop&&!hedPopOk(HED.pop,c))HED.pop='';if(!HED.pop){p.classList.remove('on');p.innerHTML='';var hr0=$('#hed');if(hr0)hr0.classList.remove('xpop');hedBar();hedTimeUi();return}
 var o=p.querySelector('.hedpbody'),sc=o?o.scrollTop:0;p.innerHTML='<div class="hedphd"><b>'+hedt(HED.pop=='jn'&&HED.jn&&HED.jn.k=='mid'?'b_trn':(HEDTT[HED.pop]||'b_more'))+'</b><span class="hedsp"></span>'+(HED.pop=='layers'?'<button type="button" class="hedib'+(HED.lsm?' on':'')+'" data-ha="lsm" aria-label="select">'+hi('check')+'</button>':'')+'<button type="button" class="hedib" data-ha="popx" aria-label="close">'+hi('dn')+'</button></div><div class="hedpbody">'+hedPopBody(HED.pop,c)+'</div>';p.classList.add('on');p.classList.toggle('big',HED.pop=='layers');var hr=$('#hed');if(hr)hr.classList.toggle('xpop',HED.pop=='exp');var pbx=p.querySelector('.hedpbody');if(pbx){var fx=HED.pop=='exp'&&HED.xs&&HED.xh;pbx.classList.toggle('xfix',!!fx);pbx.style.minHeight=fx?HED.xh+'px':''}var n=p.querySelector('.hedpbody');if(n)n.scrollTop=sc;hedBar();hedTimeUi()}
function hedPopBody(k,c){var h='',x;switch(k){
 case'add':h='<div class="hedtiles">'+hTile('addv','video',hedt('b_media'))+hTile('addaud','music',hedt('b_music'))+hTile('addt','text',hedt('b_txt'))+hTile('pop:ovl','overlay',hedt('b_ovl'))+hTile('addbg','bg',hedt('bgn'))+hTile('rec','mic',HED.rec?hedt('rec_stop'):hedt('b_rec'))+hTile('addsrt','srt',hedt('b_srt'))+hTile('pop:canvas','canvas',hedt('b_canvas'))+'</div><h5>'+hedt('tracks')+'</h5><div class="hedtiles">'+hTile('addtr:txt','text',hedt('tr_t'))+hTile('addtr:ovl','overlay',hedt('tr_o'))+hTile('addtr:vid','video',hedt('tr_v'))+hTile('addtr:aud','music',hedt('tr_a'))+'</div>';break;
 case'ovl':h='<div class="hedtiles">'+hTile('addvo','video',hedt('ovl_media'))+hTile('addbg','bg',hedt('bgn'))+'</div><h5>'+hedt('b_shp')+'</h5><div class="hedtiles">'+[['rect','s_rect'],['round','s_round'],['ellipse','s_ell'],['tri','s_tri'],['dia','s_dia'],['star5','s_st5'],['star8','s_st8'],['heart','s_heart']].map(function(q){return hTile('adds:'+q[0],'shape',hedt(q[1]))}).join('')+'</div><h5>'+hedt('stk')+'</h5><div class="hedstk">'+HEDSTK.map(function(ch){return'<button type="button" data-ha="addst:'+ch+'">'+ch+'</button>'}).join('')+'</div>';break;
case'canvas':hedPC=HED.p;h='<h5>'+hedt('b_exp')+'</h5>'+hCh('@res',[1,2,3,4].map(function(i){return[i,['720P','1080P','2K','4K'][i-1]+(hedWeak(i)?hi('warn2','hedwi'):'')]}),hedC(HED.p.res||2,1,4))+hCh('@fps',[[24,'24 FPS'],[30,'30 FPS'],[60,'60 FPS']],HED.p.fps)+'<h5>'+hedt('bgc')+'</h5>'+hCol('@bg',hedt('bgc'),'#000000')+'<div class="hedsw">'+HEDSW.map(function(q){var v=q=='GOLD'?hedHex(stAcc()):q;return'<button type="button" style="background:'+v+'" data-ha="bg:'+v+'" aria-label="'+v+'"></button>'}).join('')+'</div>';hedPC=c;break;
 case'exp':hedPC=HED.p;h=hedXBody();hedPC=c;break;
 case'trim':h='<div class="hedgr2">'+hBtn('trimL','cut',hedt('trim_l'))+hBtn('trimR','cut',hedt('trim_r'))+'</div><div class="hednum"><label>'+hedt('t_start')+'<input type="number" class="hedn" data-hen="s" step="0.1" min="0" value="'+hedR(c.s,2)+'"></label><label>'+hedt('t_dur')+'<input type="number" class="hedn" data-hen="d" step="0.1" min="0.1" value="'+hedR(c.d,2)+'"></label></div>';break;
 case'speed':h='<div class="hedsr"><label>'+hedt('b_speed')+'</label><button type="button" class="hedst" data-hst="sp|-1" aria-label="-">'+hi('minus')+'</button><input type="range" class="hedr" data-hen="sp" data-hep="sp" min="0.25" max="4" step="0.05" value="'+c.sp+'"><button type="button" class="hedst" data-hst="sp|1" aria-label="+">'+hi('plus')+'</button><output>'+hedR(c.sp,2)+'x</output></div><div class="hedchs">'+[.5,1,1.5,2,3].map(function(v){return'<button type="button" class="hedchip'+(c.sp==v?' on':'')+'" data-ha="spd:'+v+'">'+v+'x</button>'}).join('')+'</div>';break;
 case'vol':h=hSl('vol',hedt('volume'),0,200,1,100,'%')+hSl('fi',hedt('fadein'),0,10,.1,0,'s')+hSl('fo',hedt('fadeout'),0,10,.1,0,'s')+hTog('mu',hedt('mute'))+(c.k=='video'?'<div class="hedgr2">'+hBtn('detach','audio',hedt('detach'))+'</div>':'');break;
 case'opa':h=hSl('op',hedt('b_opa'),0,100,1,100,'%');break;
 case'xf':h=hSl('x','X',-150,150,.5,0,'%')+hSl('y','Y',-150,150,.5,0,'%')+hSl('sc',hedt('scale'),5,500,1,100,'%')+hSl('rot',hedt('rotn'),-180,180,1,0,'°')+'<div class="hedgr2">'+hBtn('flx','flx',hedt('flipx'),c.flx?'on':'')+hBtn('fly','fly',hedt('flipy'),c.fly?'on':'')+hBtn('rstxf','rotate',hedt('reset'))+'</div>'+(c.k=='video'||c.k=='image'?hCh('fit',[['fit',hedt('fit')],['fill',hedt('fill')]],c.fit):'')+'<h5>'+hedt('al_h')+'</h5><div class="hedalg">'+['l','c','r','t','m','b'].map(function(q){return'<button type="button" data-ha="al:'+q+'">'+hi('al'+q.toUpperCase())+'</button>'}).join('')+'</div>';break;
 case'crop':h=hSl('cr.0',hedt('c_l'),0,90,1,0,'%')+hSl('cr.1',hedt('c_t'),0,90,1,0,'%')+hSl('cr.2',hedt('c_r'),0,90,1,0,'%')+hSl('cr.3',hedt('c_b'),0,90,1,0,'%')+hBtn('rstcr','rotate',hedt('reset'));break;
case'filter':var ft=HED.ft||'pre';h=hSeg('ftab:',[['pre',hedt('ft_pre')],['adj',hedt('ft_adj')]],ft);if(ft=='pre'){var cur=JSON.stringify(c.col||{}),snap=hedSnapSmall(c);h+='<div class="hedfl">'+HEDPRE.map(function(q){return'<button type="button" class="hedfi'+(JSON.stringify(q[1])==cur?' on':'')+'" data-ha="pre:'+q[0]+'"><img alt="" src="'+snap+'" style="filter:'+hedCssF(q[1])+'"><span>'+hedt('p_'+q[0])+'</span></button>'}).join('')+'</div>'+(HED.nf?'<p class="hedhint">'+hedt('nofilter')+'</p>':'')}else{h+=hSl('col.br',hedt('br'),-100,100,1,0,'')+hSl('col.ct',hedt('ct'),-100,100,1,0,'')+hSl('col.sa',hedt('sa'),-100,100,1,0,'')+hSl('col.hu',hedt('hu'),-180,180,1,0,'°')+hSl('col.te',hedt('te'),-100,100,1,0,'')+hSl('col.ti',hedt('ti'),-100,100,1,0,'')+hBtn('rstcol','rotate',hedt('reset'))}break;
 case'adjust':h=hSl('col.br',hedt('br'),-100,100,1,0,'')+hSl('col.ct',hedt('ct'),-100,100,1,0,'')+hSl('col.sa',hedt('sa'),-100,100,1,0,'')+hSl('col.hu',hedt('hu'),-180,180,1,0,'°')+hSl('col.te',hedt('te'),-100,100,1,0,'')+hSl('col.ti',hedt('ti'),-100,100,1,0,'')+hBtn('rstcol','rotate',hedt('reset'));break;
case'fx':h=hSl('ef.bl',hedt('blur'),0,40,.5,0,'')+hSl('ef.vg',hedt('vig'),0,100,1,0,'%')+hSl('ef.gr',hedt('grain'),0,100,1,0,'%')+hSl('ef.gl',hedt('glow'),0,100,1,0,'%')+hSl('ef.px',hedt('pixel'),0,100,1,0,'%')+'<div class="hedgr2">'+hTog('ef.gs',hedt('gray'))+hTog('ef.sp',hedt('sepia'))+hTog('ef.inv',hedt('invert'))+(c.k=='video'||c.k=='image'?hTog('ef.mi',hedt('mirror')):'')+'</div>'+hSelO('bm',hedt('blend'),HEDBM.map(function(v){return[v,hedt('bm_'+v)]}),c.bm)+(c.k=='video'||c.k=='image'?'<h5>'+hedt('kb')+'</h5>'+hCh('kb',[['',hedt('none')],['in',hedt('kb_in')],['out',hedt('kb_out')],['l',hedt('kb_l')],['r',hedt('kb_r')]],c.kb):'')+hBtn('rstfx','rotate',hedt('reset'));break;
case'anim':var at=HED.at||'in';h=hSeg('antab:',[['in',hedt('an_in')],['out',hedt('an_out')]],at)+hAnGrid(at=='in'?c.ai:c.ao,at=='in'?'ani:':'ano:',at=='out')+hSl('ad',hedt('an_dur'),.1,3,.1,.6,'s');break;
case'trn':h=hAnGrid(c.ai,'trn:',false)+hSl('ad',hedt('an_dur'),.1,3,.1,.6,'s');break;
 case'jn':var j=HED.jn||{k:'in'},cu=j.k=='out'?c.ao:c.ai;h=hAnGrid(cu,'jns:',j.k=='out')+hSl('ad',hedt('an_dur'),.1,3,.1,.6,'s');break;
 case'anall':var aa=HED.at||'in';hedPC=HED;h=hSeg('antab:',[['in',hedt('an_in')],['mid',hedt('b_trn')],['out',hedt('an_out')]],aa)+hAnGrid(hedAnCur(aa),'ala:',aa=='out')+'<p class="hedhint">'+hedt('an_note')+'</p>'+hSl('#aad',hedt('an_dur'),.1,3,.1,.6,'s');hedPC=c;break;
 case'kf':var lt=hedC(HED.t-c.s,0,c.d),on=hedKfAt(c,lt)>=0;h='<input type="range" class="hedr hedseek" id="hedseek" min="'+c.s+'" max="'+(c.s+c.d)+'" step="'+(1/HED.p.fps)+'" value="'+hedC(HED.t,c.s,c.s+c.d)+'"><div class="hedkfb"><button type="button" class="hedib" data-ha="kfprev" aria-label="prev">'+hi('prev')+'</button><button type="button" class="hedkfd'+(on?' on':'')+'" id="hedkfd" data-ha="kfadd">'+hi(on?'kff':'kf')+'</button><button type="button" class="hedib" data-ha="kfnext" aria-label="next">'+hi('next')+'</button></div><p class="hedhint">'+hedt('kf_h')+'</p>'+hSl('x','X',-150,150,.5,0,'%')+hSl('y','Y',-150,150,.5,0,'%')+hSl('sc',hedt('scale'),5,500,1,100,'%')+hSl('rot',hedt('rotn'),-180,180,1,0,'°')+hSl('op',hedt('b_opa'),0,100,1,100,'%')+hCh('kfe',[['l',hedt('kf_lin')],['s',hedt('kf_smo')]],c.kfe||'l')+(c.kf&&c.kf.length?'<div class="hedgr2">'+hBtn('kfclr','trash',hedt('kf_clr'),'dng')+'</div>':'');break;
 case'mask':var mk=c.mk||{};h=hCh('mk.t',[['',hedt('none')],['rect',hedt('s_rect')],['round',hedt('s_round')],['ellipse',hedt('s_ell')],['tri',hedt('s_tri')],['dia',hedt('s_dia')],['star5',hedt('s_st5')],['star8',hedt('s_st8')],['heart',hedt('s_heart')]],mk.t||'')+(mk.t?hSl('mk.w',hedt('width'),5,200,1,60,'%')+hSl('mk.h',hedt('height'),5,200,1,60,'%')+hSl('mk.x','X',-100,100,1,0,'%')+hSl('mk.y','Y',-100,100,1,0,'%')+hSl('mk.rot',hedt('rotn'),-180,180,1,0,'°')+(mk.t=='round'?hSl('mk.rr',hedt('radius'),0,50,1,25,'%'):'')+hTog('mk.inv',hedt('m_inv')):'');break;
case'reset':h='<div class="hedrzo"><button type="button" class="hedrzb" data-ha="rst:fx"><span class="hedtic">'+hi('rst')+'</span><span><b>'+hedt('rst_fx')+'</b><small>'+hedt('rst_fx_d')+'</small></span></button><button type="button" class="hedrzb" data-ha="rst:all"><span class="hedtic">'+hi('trash')+'</span><span><b>'+hedt('rst_all')+'</b><small>'+hedt('rst_all_d')+'</small></span></button></div>';break;
 case'resize':h=hedResizeBody();break;
 case'layers':h=hedLayersBody();break;
 case'settings':hedPC=HED.p;var gd=HED.p.gd||[];h=hTog('@st.snap',hedt('set_snap'))+hSl('@master',hedt('master'),0,200,1,100,'%')+'<h5>'+hedt('set_adv')+'</h5>'+hTog('@st.msnap',hedt('set_msnap'))+hTog('@st.sg',hedt('set_sg'))+hTog('@st.gsnap',hedt('set_gsnap'))+hSl('@st.sens',hedt('set_sens'),1,10,1,5,'')+'<label class="hedtg"><span>'+hedt('set_tmp')+'</span><input type="checkbox" data-hep="#snapTmp"'+(HED.snapTmp?' checked':'')+'><i></i></label><p class="hedhint">'+hedt('set_tmp_h')+'</p>'+hTog('@st.smart',hedt('set_smart'))
  +'<h5>'+hedt('set_gd')+'</h5>'+hTog('@st.gshow',hedt('set_gshow'))+gd.map(function(q,i){return'<div class="hedgdr">'+hSl('@gd.'+i+'.v',hedt(q.a=='v'?'set_gdv':'set_gdh'),0,100,.5,50,'%')+'<button type="button" class="hedib dng" data-ha="gdx:'+i+'" aria-label="delete">'+hi('trash')+'</button></div>'}).join('')+'<div class="hedgr2">'+hBtn('gdadd:v','plus',hedt('set_gdv'))+hBtn('gdadd:h','plus',hedt('set_gdh'))+(gd.length?hBtn('gdclr','trash',hedt('set_gdc'),'dng'):'')+'</div>'
  +'<h5>'+hedt('set_pq')+'</h5>'+hCh('@st.pq',[[1,hedt('pq_h')],[.6,hedt('pq_m')],[.4,hedt('pq_l')]],hedSt('pq',1))+'<div class="hedgr2">'+hBtn('addsrt','srt',hedt('b_srt'))+'</div><div class="hedgr2">'+hBtn('rstset','rst',hedt('rst_set'),'dng')+'</div><p class="hedhint">Studio V'+STUDIO_JS_VERSION+'</p>';hedPC=c;break;
 case'mus':h='<div class="hedtiles">'+hTile('rec','mic',hedt('rec_l'))+hTile('addaud','music',hedt('b_music'))+hTile('pop:sfx','spk',hedt('b_sfx'))+'</div>';break;
 case'sfx':h='<div class="hedsfx">'+HEDSFX.map(function(q){return'<div class="hedsf"><button type="button" class="hedsfa" data-ha="sfxa:'+q+'"><span class="hedtic">'+hi('spk')+'</span><span>'+hedt('sfx_'+q)+'</span></button><button type="button" class="hedib" data-ha="sfxp:'+q+'" aria-label="play">'+hi('play')+'</button></div>'}).join('')+'</div>';break;
 case'txt':x=c.tx;h='<div class="hedchs hedscroll">'+HEDTP.map(function(q,i){var v=q[1];return'<button type="button" class="hedtpr" data-ha="tpre:'+i+'" style="color:'+(v.c=='GOLD'?'var(--g)':v.c)+';background:'+(v.bg||'rgba(127,127,127,.16)')+';font-weight:'+(v.b?800:500)+';'+(v.st?'-webkit-text-stroke:1px '+(v.sc=='GOLD'?'var(--g)':v.sc)+';':'')+'">Aa</button>'}).join('')+'</div><textarea class="hedta" data-hep="tx.s" rows="3" dir="auto">'+esc(x.s)+'</textarea>'+hSelO('tx.f',hedt('font'),HEDF.map(function(f){return[f[0],f[0]=='site'?hedt('f_site'):HEDFN[f[0]]]}),x.f)+hSl('tx.z',hedt('size'),2,40,.5,8,'')+hCh('tx.al',[['l',hedt('al_l')],['c',hedt('al_c')],['r',hedt('al_r')]],x.al)+'<div class="hedgr2">'+hTog('tx.b',hedt('bold'))+hTog('tx.i',hedt('italic'))+'</div>'+hSl('tx.w',hedt('width'),20,100,1,80,'%')+hSl('tx.ls',hedt('lsp'),-5,40,.5,0,'')+hSl('tx.lh',hedt('lhn'),.8,2.5,.05,1.35,'');break;
 case'tst':h=hCol('tx.c',hedt('c_fill'),'#ffffff')+hCol('tx.sc',hedt('c_str'),'#000000')+hSl('tx.st',hedt('strw'),0,30,.5,0,'')+hCol('tx.sk',hedt('c_shd'),'#000000')+hSl('tx.sh',hedt('shw'),0,100,1,35,'')+hCol('tx.bg',hedt('c_box'),'#000000',1)+hSl('tx.bo',hedt('boxo'),0,100,1,70,'%');break;
 case'shp':var s=c.sh;h=hCh('sh.t',[['rect',hedt('s_rect')],['round',hedt('s_round')],['ellipse',hedt('s_ell')],['tri',hedt('s_tri')],['dia',hedt('s_dia')],['star5',hedt('s_st5')],['star8',hedt('s_st8')],['heart',hedt('s_heart')]],s.t)+hSl('sh.w',hedt('width'),2,100,1,40,'%')+hSl('sh.h',hedt('height'),2,100,1,40,'%')+hCol('sh.c',hedt('c_fill'),'#d4af37')+hCol('sh.c2',hedt('c_grad'),'#0a1a2f',1)+hSl('sh.an',hedt('angle'),0,360,1,90,'°')+hSl('sh.r',hedt('radius'),0,50,1,20,'%')+hSl('sh.sw',hedt('strw'),0,30,.5,0,'')+hCol('sh.sc',hedt('c_str'),'#ffffff');break;
 case'more':h=hSelO('bm',hedt('blend'),HEDBM.map(function(v){return[v,hedt('bm_'+v)]}),c.bm)+'<div class="hedgr2">'+hBtn('rstall','rotate',hedt('reset_all'))+'</div>';break}
 return h}
/* ---- confirm dialog + voice record ---- */
function hedSheet(h){var s=$('#hedsh');if(!s)return;s.innerHTML=h?'<div class="hedov"><div class="hedmd">'+h+'</div></div>':''}
function hedConfirm(msg,yes){hedSheet('<p class="hedmq">'+esc(msg)+'</p><div class="hedgr2"><button type="button" class="hedbt" data-ha="shx">'+hedt('no')+'</button><button type="button" class="hedbt hedgo" data-ha="cfy">'+hedt('yes')+'</button></div>');HED.cfy=yes}
function hedRecToggle(){if(HED.rec){HED.rec.stop();return}if(!(navigator.mediaDevices&&window.MediaRecorder)){toast(hedt('err_rec'));return}navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){var ch=[],mr=new MediaRecorder(st),at=HED.t;mr.ondataavailable=function(e){if(e.data&&e.data.size)ch.push(e.data)};mr.onstop=function(){st.getTracks().forEach(function(k){k.stop()});HED.rec=null;hedPanel();var ty=mr.mimeType||'audio/webm',f=new File(ch,'voice-'+hedPad(new Date().getMinutes())+hedPad(new Date().getSeconds())+'.webm',{type:ty});if(HED&&hedAlive())hedAddFile(f,at,{role:'aud',ak:'rec'})};mr.start();HED.rec=mr;hedPanel()}).catch(function(){toast(hedt('err_rec'))})}
/* ---- events ---- */
var HEDKB=0,HEDHS=0;

function hedVal(x){return/^-?\d+(\.\d+)?$/.test(x)?parseFloat(x):x}
function hedApply(x,fin){var path=x.dataset.hep,v,o,key;if(!path)return;if(x.type=='checkbox')v=x.checked?1:0;else if(x.type=='range'||x.type=='number')v=parseFloat(x.value);else{v=x.value;if(x.dataset.num)v=parseFloat(v)}
 var c=null;if(path.charAt(0)=='@'){o=HED.p;key=path.slice(1)}else if(path.charAt(0)=='#'){o=HED;key=path.slice(1)}else{c=hedSelC();if(!c)return;o=c;key=path}
 if(path.charAt(0)!='#')hedHist('p:'+path+(c?c.id:''));hedSetP(o,key,v);if(c&&c.kf&&c.kf.length&&/^(x|y|sc|rot|op)$/.test(key))hedKfUpsert(c);if(path=='@st.pq')hedFitPv();if(path=='@st.snap')hedTimeUi();
 if(key=='master'&&!HED.pl)hedSync(HED.t,false);if(path=='sp'||path=='sh.t'){}
 var out=x.parentNode&&x.parentNode.querySelector('output');if(out)out.textContent=hedR(v,2)+(out.dataset.u||'');
 if(path=='@ratio'||path=='@res'||path=='@fps'){hedSelFill();hedFitPv();hedTimeUi()}hedDrawSoon();hedSaveSoon();
 if(path=='tx.s'){var lb=D.querySelector('.hedcl.sel .hedcn');if(lb)lb.innerHTML='<b>T</b>'+esc((v||'').split('\n')[0]||hedt('b_txt'))}
 if(fin){if(path.indexOf('tx.')==0||path.indexOf('sh.')==0||path=='@fps'||path=='@ratio'||path=='@res')hedTl();if(path.charAt(0)=='@'&&x.tagName=='SELECT'&&!x.closest('#hedpop'))hedPanel()}}
function hedNum(x){var c=hedSelC();if(!c)return;var k=x.dataset.hen,v=parseFloat(x.value);if(!isFinite(v))return;hedHist();
 if(k=='s'){var p=hedFreePos(c.tr,Math.max(0,v),c.d,c.id);if(p!=null)c.s=p}
 else if(k=='d'){var nx=1e9;HED.p.cl.forEach(function(q){if(q.tr==c.tr&&q.id!=c.id&&q.s>=c.s+c.d-1e-6)nx=Math.min(nx,q.s)});c.d=hedC(v,.1,Math.min(hedMaxD(c),nx-c.s))}
 else if(k=='sp')hedSetSpeed(c,hedC(v,.25,4));hedTl();hedBar();hedTimeUi();hedFitPv();hedDrawSoon();hedSaveSoon()}
function hedStep(a){var q=a.split('|'),inp=D.querySelector('#hed [data-hep="'+q[0]+'"]');if(!inp)return;var st=parseFloat(inp.step)||1,mn=parseFloat(inp.min),mx=parseFloat(inp.max),v=hedC(Math.round((parseFloat(inp.value)+parseInt(q[1])*st)/st)*st,mn,mx);inp.value=v;if(inp.dataset.hen){var o=inp.parentNode.querySelector('output');if(o)o.textContent=hedR(v,2)+'x';hedNum(inp)}else{hedApply(inp,false);hedSaveSoon()}}
function hedPV(a){var i=a.indexOf('|'),path=a.slice(0,i),v=hedVal(a.slice(i+1)),c=null,o;if(path.charAt(0)=='@'){o=HED.p;path=path.slice(1)}else if(path.charAt(0)=='#'){o=HED;path=path.slice(1)}else{c=hedSelC();if(!c)return;o=c}if(o===HED.p&&path=='ratio'){hedSetRatio(v);return}hedHist();
 if(path=='mk.t'){if(v==='')delete c.mk;else c.mk=Object.assign({x:0,y:0,w:60,h:60,rot:0,rr:25,inv:0},c.mk||{},{t:v})}else hedSetP(o,path,v);if(o===HED.p&&path=='res'&&v>stMaxRes())toast(hedt('weak'));if(c&&path.indexOf('tx.')==0)c._tl=null;
 if(path=='res'||path=='ratio'||path=='fps'||path=='st.pq'){hedSelFill();hedFitPv()}hedPanel();hedTl();hedDrawSoon();hedSaveSoon()}
function hedTrPlus(id){var tr=hedTr(id);if(!tr)return;var f=function(r,inp){HED.addCtx={tr:id,role:r};$(inp).click()};if(tr.r=='txt')hedAddText(id);else if(tr.r=='ovl'){HED.addCtx={tr:id,role:'ovl'};HED.pop='ovl';hedPanel()}else if(tr.r=='vid')f('vid','#hedfv');else{HED.addCtx={tr:id,role:'aud'};HED.pop='mus';hedPanel()}}
function hedTxtPre(i){var c=hedSelC();if(!c||c.k!='text')return;var p=HEDTP[i][1],gold=hedHex(stAcc());hedHist();Object.keys(p).forEach(function(k){if(k=='Y'){c.y=p[k];return}var v=p[k];if(v=='GOLD')v=gold;c.tx[k]=v});if(p.bg===undefined||p.bg==='')c.tx.bg='';c._tl=null;hedPanel();hedDrawSoon();hedSaveSoon()}
function hedTrn(ty){var c=hedSelC();if(!c)return;hedHist();c.ai=ty;HED.p.cl.forEach(function(x){if(x.tr==c.tr&&x.id!=c.id&&Math.abs(x.s+x.d-c.s)<.06){x.ao=ty;x.ad=c.ad}});hedPanel();hedDrawSoon();hedSaveSoon()}
function hedAct(a){var q=a.split(':'),k=q[0],g=q.slice(1).join(':'),c=hedSelC();switch(k){
 case'play':HED.pl?hedPause():hedPlay();break;case'prev':hedPrevCut();break;case'next':hedNextCut();break;case'undo':hedUndo();break;case'redo':hedRedo();break;
 case'pop':HED.pop=HED.pop==g?'':g;if(g=='resize')HED.rzm='';if(g!='layers'){HED.lsm=0;HED.ms=[]}hedPanel();break;case'popx':HED.pop='';HED.lsm=0;HED.ms=[];HED.rzm='';hedPanel();break;
 case'home':if(HED.job){toast(hedt('x_busy'));break}hedSaveNow();hedPause();if(HEDHS>0)history.back();else hedGoList();break;
 case'split':hedSplit();break;case'del':if(c)hedDelClip(c);break;case'dup':hedDup();break;case'freeze':hedFreeze();break;
 case'rot':if(c){hedHist();c.rot=((c.rot+90+180)%360)-180;hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'flx':case'fly':if(c){hedHist();c[k]=c[k]?0:1;hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'rstxf':if(c){hedHist();c.x=c.y=0;c.sc=100;c.rot=0;c.flx=c.fly=0;hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'rstcr':if(c){hedHist();c.cr=[0,0,0,0];hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'rstcol':if(c){hedHist();c.col={};hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'rstfx':if(c){hedHist();c.ef={};c.kb='';c.ai=c.ao='';hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'rstall':if(c){hedHist();Object.assign(c,{x:0,y:0,sc:100,rot:0,flx:0,fly:0,op:100,cr:[0,0,0,0],col:{},ef:{},kb:'',bm:'source-over',ai:'',ao:''});hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'pre':if(c){hedHist();var pr=HEDPRE.filter(function(x){return x[0]==g})[0];c.col=Object.assign({},pr[1]);hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'spd':if(c){hedHist();hedSetSpeed(c,parseFloat(g));hedAll()}break;
 case'trimL':hedTrimTo('l');break;case'trimR':hedTrimTo('r');break;case'detach':hedDetach();break;
 case'tpre':hedTxtPre(parseInt(g));break;case'trn':hedTrn(g);break;
 case'bg':hedHist();HED.p.bg=g;hedPanel();hedDrawSoon();hedSaveSoon();break;
 case'snap':hedHist();hedSetP(HED.p,'st.snap',hedSt('snap',1)?0:1);hedTimeUi();hedPanel();hedSaveSoon();break;case'zi':hedZoom(1.35);break;case'zo':hedZoom(1/1.35);break;case'zf':hedZFit();break;
 case'tv':var tr=hedTr(g);if(tr){hedHist();tr.hid=tr.hid?0:1;hedSync(HED.t,!!HED.pl);hedAll()}break;
 case'trp':hedTrPlus(g);break;
 case'addv':HED.addCtx={role:'vid'};HED.pop='';hedPanel();$('#hedfv').click();break;case'addvo':HED.addCtx=Object.assign({},HED.addCtx||{},{role:'ovl'});$('#hedfv').click();break;
 case'addaud':HED.addCtx={role:'aud'};HED.pop='';hedPanel();$('#hedfa').click();break;
 case'addt':HED.pop='';hedAddText();break;case'adds':hedAddShape(g,HED.addCtx&&HED.addCtx.tr);break;case'addst':hedAddSticker(g);break;case'addbg':HED.pop='';hedAddShape('bg');break;case'addtr':HED.pop='';hedAddTrack(g);break;
 case'rec':HED.pop='';hedPanel();hedRecToggle();break;
 case'fs':$('#hedpv').classList.toggle('fs');setTimeout(hedFitPv,60);break;
 case'exv':hedExport('vid');break;case'exp':hedExport(g);break;case'cancel':if(HED.job){HED.job.cancel=1;HED.job.pz=0}break;
 case'shx':hedSheet('');break;case'cfy':hedSheet('');if(HED.cfy)HED.cfy();break;
 case'antab':HED.at=g;hedPanel();break;case'ani':if(c){hedHist();c.ai=g;hedPanel();hedDrawSoon();hedSaveSoon();hedTl();hedAnPrev(c,'in')}break;case'ano':if(c){hedHist();c.ao=g;hedPanel();hedDrawSoon();hedSaveSoon();hedTl();hedAnPrev(c,'out')}break;
 case'jn':hedJn(g);break;case'jns':hedJns(g);break;case'ala':hedAnimAll(g);break;
 case'kfadd':hedKfToggle();break;case'kfprev':hedKfGo(-1);break;case'kfnext':hedKfGo(1);break;case'kfclr':if(c){hedHist();c.kf=[];hedTl();hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'rsz':if(c){hedHist();c.sc=parseFloat(g);if(c.kf&&c.kf.length)hedKfUpsert(c);hedPanel();hedDrawSoon();hedSaveSoon()}break;
 case'trx':hedTrDel(g);break;case'tlk':var tl=hedTr(g);if(tl){hedHist();tl.lk=tl.lk?0:1;hedAll()}break;
 case'ftab':HED.ft=g;hedPanel();break;case'kfj':hedKfJump(parseInt(g));break;
 case'rz':hedRzApply(g);break;
 case'rzc':hedRzCustom();break;
 case'selc':hedSelClip(g);break;
 case'chid':hedToggleHid(g);break;
 case'lup':hedLayer(1,g);break;case'ldn':hedLayer(-1,g);break;
 case'sfxa':hedSfxAdd(g);break;case'sfxp':hedSfxPlay(g);break;case'addsrt':HED.pop='';hedPanel();$('#hedfs').click();break;default:hedAct2(k,g,c)}}
function hedJn(g){var q=g.split(':'),k=q[0],a=hedCl(q[1]),b=q[2]?hedCl(q[2]):null;if(!a)return;HED.jn={k:k,a:a.id,b:b?b.id:''};HED.sel=k=='mid'&&b?b.id:a.id;HED.kfOn=null;HED.pop='jn';hedTl();hedPanel();hedDrawSoon()}
function hedJns(ty){var j=HED.jn;if(!j)return;var a=hedCl(j.a),b=j.b?hedCl(j.b):null;if(!a)return;hedHist();var ad=(hedSelC()||a).ad;if(j.k=='in'){a.ai=ty}else if(j.k=='out'){a.ao=ty}else if(b){a.ao=ty;b.ai=ty;a.ad=b.ad=ad}hedPanel();hedTl();hedDrawSoon();hedSaveSoon();if(ty){if(j.k=='in')hedAnPrev(a,'in');else if(j.k=='out')hedAnPrev(a,'out');else if(b){var ad2=a.ad||.6;hedPrevRange(b.s-ad2-.3,b.s+ad2+.4)}}}
function hedLayer(dir,cid){var c=cid?hedCl(cid):hedSelC();if(!c||c.k=='audio')return;var tr=hedTr(c.tr);if(!tr||tr.r=='vid')return;var L=HED.p.tr.filter(function(x){return x.r==tr.r}),i=L.indexOf(tr),t=L[i+dir];hedHist();if(!t)t=hedNewTrack('v',tr.r,1,dir>0);var p=hedFreePos(t.id,c.s,c.d,c.id);if(p==null){toast(hedt('split_err'));return}c.tr=t.id;c.s=p;hedAll()}
function hedTrDel(id){var tr=hedTr(id);if(!tr)return;if(HED.p.cl.some(function(c){return c.tr==id})){toast(hedt('l_busy'));return}if(HED.p.tr.filter(function(x){return x.r==tr.r}).length<2){toast(hedt('l_last'));return}hedHist();HED.p.tr=HED.p.tr.filter(function(x){return x.id!=id});hedAll()}

function hedStopEls(){if(!HED)return;Object.keys(HED.els||{}).forEach(function(k){var e=HED.els[k];try{e.pause();e.removeAttribute('src');e.load()}catch(x){}});HED.els={}}
function hedBind(){var r=$('#hed'),ts=$('#hedts'),cv=HED.cv;
 r.addEventListener('touchmove',function(e){if(e.touches&&e.touches.length>1&&e.cancelable)e.preventDefault()},{passive:false});ts.addEventListener('touchmove',function(e){if(HED.lpOn&&e.cancelable)e.preventDefault()},{passive:false});ts.addEventListener('contextmenu',function(e){e.preventDefault()});var pvx=$('#hedpv');if(pvx)pvx.addEventListener('click',function(e){if(e.target===pvx&&HED.sel&&!HED.cg){HED.sel='';hedTl();hedPanel();hedDrawSoon()}});['gesturestart','gesturechange','gestureend'].forEach(function(n){r.addEventListener(n,function(e){e.preventDefault()})});
 r.addEventListener('click',function(e){var tg=e.target;if(tg.classList&&tg.classList.contains('hedov')){hedSheet('');return}if(HED.dd&&!(tg.closest&&tg.closest('.heddd,[data-dd]')))hedDdClose();var b=tg.closest&&tg.closest('[data-ha],[data-hepv],[data-hst],[data-dd]');if(!b||!r.contains(b))return;if(b.dataset.dd){hedDd(b);return}var inDd=!!b.closest('.heddd');if(b.dataset.ha)hedAct(b.dataset.ha);else if(b.dataset.hepv)hedPV(b.dataset.hepv);else hedStep(b.dataset.hst);if(inDd)hedDdClose()});
 r.addEventListener('input',function(e){var x=e.target;if(x.id=='hedseek'){hedGo(parseFloat(x.value));return}if(x.dataset&&x.dataset.hen&&x.type=='range'){var o=x.parentNode.querySelector('output');if(o)o.textContent=hedR(parseFloat(x.value),2)+'x';return}if(x.id=='hedname'){HED.xn=x.value;return}if(x.dataset&&x.dataset.hep&&(x.type=='range'||x.type=='color'||x.tagName=='TEXTAREA'||x.type=='text'))hedApply(x,false)});
 r.addEventListener('change',function(e){var x=e.target;if(x.id=='hedfr'){var rf=x.files&&x.files[0];x.value='';if(rf)hedReplace(HED.rpl,rf);return}if(x.id=='hedfs'){var sf=x.files&&x.files[0];x.value='';if(sf&&sf.text)sf.text().then(hedSrtAdd);return}if(x.id=='hedfv'||x.id=='hedfa'){var fs=Array.prototype.slice.call(x.files||[]);x.value='';var t0=HED.t,pr=Promise.resolve(),cx=HED.addCtx||{};HED.addCtx=null;fs.forEach(function(f){pr=pr.then(function(){return hedAddFile(f,t0,cx).then(function(c){if(c){t0=c.s+c.d;cx={role:cx.role}}})})});return}
  if(x.dataset&&x.dataset.hen){hedNum(x);return}if(x.dataset&&x.dataset.hep)hedApply(x,true)});
 ts.addEventListener('scroll',hedOnScroll,{passive:true});ts.addEventListener('pointerdown',hedTlDown);ts.addEventListener('pointermove',hedTlMove);ts.addEventListener('pointerup',hedTlUp);ts.addEventListener('pointercancel',function(e){if(HED.tps)delete HED.tps[e.pointerId];if(HED.drag&&HED.drag.timer)clearTimeout(HED.drag.timer);HED.drag=null;HED.lpOn=0;if(HED.pz&&!Object.keys(HED.tps||{}).length)HED.pz=null});
 cv.addEventListener('pointerdown',hedCvDown);cv.addEventListener('pointermove',hedCvMove);cv.addEventListener('pointerup',hedCvUp);cv.addEventListener('pointercancel',hedCvUp);
 r.addEventListener('contextmenu',function(e){var tn=e.target&&e.target.tagName;if(tn!='TEXTAREA'&&tn!='INPUT'){e.preventDefault();e.stopPropagation()}});window.addEventListener('resize',function(){if(hedAlive()){hedFitPv();hedTl()}});
 if(!HEDKB){HEDKB=1;D.addEventListener('visibilitychange',function(){if(D.hidden&&HED&&(HED.pl||HED.gate))hedPause()});D.addEventListener('keydown',hedKey);D.addEventListener('keyup',function(e){if(HED)HED.mod=e.altKey||e.ctrlKey||e.metaKey});window.addEventListener('popstate',hedPopState,true)}
 if(D.fonts&&!HED.fl){HED.fl=1;D.fonts.addEventListener&&D.fonts.addEventListener('loadingdone',function(){if(HED){HED.p.cl.forEach(function(c){c._tl=null});if(hedAlive())hedDrawSoon()}})}}
function hedKey(e){if(!hedAlive())return;HED.mod=e.altKey||e.ctrlKey||e.metaKey;var tg=e.target,tn=tg&&tg.tagName;if(tn=='INPUT'||tn=='TEXTAREA'||tn=='SELECT')return;var k=e.key,ctl=e.ctrlKey||e.metaKey;
 if(k==' '){e.preventDefault();HED.pl?hedPause():hedPlay()}else if(ctl&&(k=='z'||k=='Z')){e.preventDefault();e.shiftKey?hedRedo():hedUndo()}else if(ctl&&k=='y'){e.preventDefault();hedRedo()}else if(ctl&&k=='d'){e.preventDefault();hedDup()}
 else if(k=='s'||k=='S'){hedSplit()}else if(k=='Delete'||k=='Backspace'){var c=hedSelC();if(c){e.preventDefault();hedDelClip(c)}}else if(e.altKey&&/^Arrow(Left|Right|Up|Down)$/.test(k)){e.preventDefault();hedNudge(k,e.shiftKey)}else if(k=='ArrowLeft'){hedGo(HED.t-(e.shiftKey?1:1/HED.p.fps))}else if(k=='ArrowRight'){hedGo(HED.t+(e.shiftKey?1:1/HED.p.fps))}else if(k=='Home')hedGo(0);else if(k=='End')hedGo(hedDur())}
/* ---- preview gestures: move / scale / rotate / pinch ---- */
function hedCvPt(e){var d=hedDims(),r=HED.cv.getBoundingClientRect(),s=d.W/r.width;return[(e.clientX-r.left)*s,(e.clientY-r.top)*s,s,d]}
function hedCvDown(e){var q=hedCvPt(e),px=q[0],py=q[1],s=q[2];if(e.isPrimary){HED.cp={};HED.cg=null}HED.cp=HED.cp||{};HED.cp[e.pointerId]=[px,py];var ks=Object.keys(HED.cp);try{HED.cv.setPointerCapture(e.pointerId)}catch(x){}
 if(ks.length==2){var c0=hedSelC();if(c0){var a=HED.cp[ks[0]],b=HED.cp[ks[1]];hedHist();HED.cg={k:'pinch',c:c0,d0:Math.hypot(a[0]-b[0],a[1]-b[1])||1,a0:Math.atan2(b[1]-a[1],b[0]-a[0]),sc0:c0.sc,r0:c0.rot,h:1}}return}
 var c=hedSelC(),t=hedTNow(),rad=15*s;
 if(c&&!hedLocked(c)&&HED.hp&&c._m){var m=c._m;var hr=20*s;if(Math.hypot(px-HED.hp.r[0],py-HED.hp.r[1])<hr){hedHist();HED.cg={k:'rot',c:c,h:1,a0:Math.atan2(py-m.cy,px-m.cx),r0:c.rot};return}
  if(HED.hp.m&&Math.hypot(px-HED.hp.m[0],py-HED.hp.m[1])<hr){HED.cg={k:'mv',c:c,px0:px,py0:py,x0:c.x,y0:c.y,h:0,W:q[3].W,H:q[3].H};hedMvInit(HED.cg);return}
  var sdk=HED.hp.sd;if(sdk){for(var sk in sdk){if(Math.hypot(px-sdk[sk][0],py-sdk[sk][1])<hr){hedHist();HED.cg=hedSideStart(c,sk,px,py);return}}}
  for(var i=0;i<4;i++)if(Math.hypot(px-HED.hp.c[i][0],py-HED.hp.c[i][1])<rad){hedHist();HED.cg={k:'sc',c:c,d0:Math.hypot(px-m.cx,py-m.cy)||1,sc0:c.sc,h:1};return}}
 var act=hedActive(t),hit=null,i2;for(i2=act.length-1;i2>=0;i2--){var cc=act[i2];if(cc._m&&!hedLocked(cc)&&hedHit(cc._m,px,py)){hit=cc;break}}
 if(hit){if(HED.sel!=hit.id){HED.sel=hit.id;HED.kfOn=null;hedTl();hedPanel()}HED.cg={k:'mv',c:hit,px0:px,py0:py,x0:hit.x,y0:hit.y,h:0,W:q[3].W,H:q[3].H};hedMvInit(HED.cg);hedDrawSoon()}
 else{HED.cg={k:'tapbg',x:e.clientX,y:e.clientY}}}
function hedCvMove(e){if(HED.cg&&!HED.cg.fx&&HED.hp)HED.cg.fx={r:HED.hp.r.slice(),m:HED.hp.m.slice(),below:HED.hp.below};var g=HED.cg;if(!g)return;var q=hedCvPt(e),px=q[0],py=q[1];if(HED.cp&&HED.cp[e.pointerId])HED.cp[e.pointerId]=[px,py];var c=g.c;
 if(g.k=='pinch'){var ks=Object.keys(HED.cp);if(ks.length<2)return;var a=HED.cp[ks[0]],b=HED.cp[ks[1]];c.sc=hedSnapScale(c,hedC(g.sc0*Math.hypot(a[0]-b[0],a[1]-b[1])/g.d0,5,600));var dr=(Math.atan2(b[1]-a[1],b[0]-a[0])-g.a0)*180/Math.PI,nr=g.r0+dr;c.rot=hedSnapRot(c,((nr+540)%360)-180)}
 else if(g.k=='sd'){hedSideMove(g,px,py)}
 else if(g.k=='sc'){c.sc=hedSnapScale(c,hedC(g.sc0*(Math.hypot(px-c._m.cx,py-c._m.cy)||1)/g.d0,5,600))}
 else if(g.k=='rot'){var an=g.r0+(Math.atan2(py-c._m.cy,px-c._m.cx)-g.a0)*180/Math.PI;an=((an+540)%360)-180;an=hedSnapRot(c,an);c.rot=an;HED.sg={rot:an}}
 else if(g.k=='mv'){if(!g.h&&Math.hypot(px-g.px0,py-g.py0)<4*q[2])return;if(!g.h){hedHist();g.h=1}c.x=g.x0+(px-g.px0)/g.W*100;c.y=g.y0+(py-g.py0)/g.H*100;hedSnapMove(g,q[2])}
 if(c&&c.kf&&c.kf.length&&(g.k=='pinch'||g.k=='sc'||g.k=='rot'||(g.k=='mv'&&g.h)))hedKfUpsert(c);hedDrawSoon()}
function hedCvUp(e){if(HED.cp)delete HED.cp[e.pointerId];var g=HED.cg;if(HED.cp&&Object.keys(HED.cp).length)return;HED.cg=null;HED.sg=null;hedDrawSoon();if(!g)return;if(g.k=='tapbg'){if(Math.hypot(e.clientX-g.x,e.clientY-g.y)<14&&HED.sel){HED.sel='';hedTl();hedPanel();hedDrawSoon()}return}if(g.h){hedPanel();hedSaveSoon()}}


/* ---- export ---- */

function hedSleep(ms){return new Promise(function(r){setTimeout(r,ms)})}
function hedSeekW(el,tm){return new Promise(function(ok){var go=function(){if(el.readyState<1){var to=setTimeout(ok,5000);el.onloadedmetadata=function(){clearTimeout(to);el.onloadedmetadata=null;go()};return}
 tm=hedC(tm,0,Math.max(0,(el.duration||1e9)-.001));if(Math.abs(el.currentTime-tm)<.0006){if(el.readyState>=2)return ok();var t1=setTimeout(ok,3000);el.onloadeddata=function(){clearTimeout(t1);el.onloadeddata=null;ok()};return}
 var t2=setTimeout(function(){el.onseeked=null;ok()},5000);el.onseeked=function(){clearTimeout(t2);el.onseeked=null;ok()};try{el.currentTime=tm}catch(e){clearTimeout(t2);ok()}};go()})}
function hedPrep(t,xe){var ps=[];HED.p.cl.forEach(function(c){var tr=hedTr(c.tr);if(c.k!='video'||!tr||tr.hid||!(t>=c.s-1e-6&&t<c.s+c.d))return;var el=hedEl(c,{els:xe});if(el)ps.push(hedSeekW(el,c.rv?c.i+(c.d-(t-c.s))*c.sp:c.i+(t-c.s)*c.sp))});return Promise.all(ps)}
function hedFontsReady(){var ps=[];HED.p.cl.forEach(function(c){if(c.k=='text'&&D.fonts&&D.fonts.load){ps.push(D.fonts.load('40px '+hedFam(c.tx.f),c.tx.s).catch(function(){}))}});return Promise.all(ps).then(function(){HED.p.cl.forEach(function(c){c._tl=null})})}
function hedMix(tot){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,items=[];HED.p.cl.forEach(function(c){var tr=hedTr(c.tr);if(!hedHasSnd(c)||c.mu||!tr||tr.hid)return;var m=HED.media[c.m];if(m&&c.vol>0)items.push([c,m])});if(!OC||!items.length)return Promise.resolve(null);
 return Promise.all(items.map(function(it){return hedBuf(it[1])})).then(function(bufs){var any=bufs.some(function(b){return!!b});if(!any)return null;var oc=new OC(2,Math.max(1,Math.ceil(tot*48000)),48000),mst=(HED.xp||HED.p).master/100;
  items.forEach(function(it,i){var b=bufs[i],c=it[0];if(!b)return;var src=oc.createBufferSource(),g=oc.createGain(),base=c.vol/100*mst,t0=c.s,fi=Math.min(c.fi,c.d/2),fo=Math.min(c.fo,c.d/2);src.buffer=b;src.playbackRate.value=hedC(c.sp,.0625,16);
   g.gain.setValueAtTime(fi>0?0:base,t0);if(fi>0)g.gain.linearRampToValueAtTime(base,t0+fi);if(fo>0){g.gain.setValueAtTime(base,t0+c.d-fo);g.gain.linearRampToValueAtTime(0,t0+c.d)}
   src.connect(g);g.connect(oc.destination);try{src.start(t0,c.i,c.d*c.sp)}catch(e){}});
  return new Promise(function(ok){var r=oc.startRendering(function(b){ok(b)});if(r&&r.then)r.then(ok,function(){ok(null)})})}).catch(function(){return null})}
function hedExName(ext){var n=(HED.xn||'').replace(/[\\\/:*?"<>|]+/g,' ').trim()||'multi-editor';return n+' '+stTs()+'.'+ext}
async function hedExport(kind){if(HED.job)return;hedPause();var d=hedDims(),W=d.W,H=d.H,fps=HED.p.fps,job=HED.job={cancel:0,pz:0},xe={},cv=D.createElement('canvas'),wl=null,snap=JSON.parse(JSON.stringify(HED.p)),sw=function(f){var lv=HED.p;HED.p=snap;try{return f()}finally{HED.p=lv}};cv.width=W;cv.height=H;var ctx=cv.getContext('2d');HED.xp=snap;var pb0=$('#hedpop .hedpbody');HED.xh=(HED.pop=='exp'&&pb0)?pb0.offsetHeight:0;
 try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(l){wl=l}).catch(function(){})}catch(e){}
 try{hedProg(.02,hedt('x_prep'));await hedFontsReady();
  if(kind=='png'||kind=='jpg'){var t=hedTNow();await sw(function(){return hedPrep(t,xe)});sw(function(){hedDraw(ctx,W,H,t,{u:1,els:xe})});var c2=cv;if(kind=='jpg'){c2=D.createElement('canvas');c2.width=W;c2.height=H;var x2=c2.getContext('2d');x2.fillStyle='#000';x2.fillRect(0,0,W,H);x2.drawImage(cv,0,0)}
   var bl=await new Promise(function(ok){c2.toBlob(ok,kind=='jpg'?'image/jpeg':'image/png',.95)});if(!bl)throw new Error('x');stSave(bl,hedExName(kind),'Multi Editor');hedProg(1,hedt('x_ok_s'),'ok');return}
  var tot=hedDur(),N=Math.max(1,Math.ceil(tot*fps));hedProg(.04,hedt('x_audio'));var mix=await sw(function(){return hedMix(tot)});if(job.cancel){hedProg(null);return}
  var wc=null;try{wc=await stWcRec(W,H,!!mix,mix,[],[0],tot,fps)}catch(e){wc=null}var res=null;
  if(wc){var fin=new Promise(function(ok){wc.onstop=ok});if(wc.start)wc.start();
   for(var k=0;k<N;k++){while(job.pz&&!job.cancel)await hedSleep(120);if(job.cancel){try{wc.stop()}catch(e){}hedProg(null);return}var tm=k/fps;await sw(function(){return hedPrep(tm,xe)});sw(function(){hedDraw(ctx,W,H,tm,{u:1,els:xe})});while(wc.q()>6)await hedSleep(8);wc.pushAt(cv,k);if(k%2==0){hedProg(.06+.92*k/N,hedt('x_busy'));await hedSleep(0)}}
   wc.stop();await fin;if(!wc.blob)throw new Error('x');res={blob:wc.blob,ext:'mp4'}}
  else res=await hedExportMr(W,H,tot,fps,mix,job);
  if(!res){hedProg(null);return}stSave(res.blob,hedExName(res.ext),'Multi Editor');hedProg(1,hedt('x_ok_s'),'ok')}
 catch(e){hedProg(1,hedt('x_err_s'),'err');toast(hedt('x_err'))}
 finally{try{if(wl)wl.release()}catch(e){}Object.keys(xe).forEach(function(k){try{xe[k].pause();xe[k].removeAttribute('src');xe[k].load()}catch(e){}});HED.job=null;HED.xp=null;HED.xo=null;HED.xm=0;cv.width=cv.height=1;hedXUi(1)}}
/* real-time fallback (browsers without WebCodecs): records the live preview */
function hedExportMr(W,H,tot,fps,mix,job){return new Promise(function(ok,no){if(!(window.MediaRecorder&&HTMLCanvasElement.prototype.captureStream)){no(new Error('x'));return}
 var cv=D.createElement('canvas');cv.width=Math.min(W,1280);cv.height=Math.round(cv.width*H/W);cv.width-=cv.width%2;cv.height-=cv.height%2;var stm=stCap(cv,fps),ac=null,asrc=null,mimes=['video/mp4;codecs=avc1.42E01E','video/mp4','video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'],mime=mimes.filter(function(m){return MediaRecorder.isTypeSupported(m)})[0]||'',opt={videoBitsPerSecond:5e6};if(mime)opt.mimeType=mime;
 if(mix){try{var AC=window.AudioContext||window.webkitAudioContext;ac=new AC();var dst=ac.createMediaStreamDestination();asrc=ac.createBufferSource();asrc.buffer=mix;asrc.connect(dst);dst.stream.getAudioTracks().forEach(function(tr){stm.addTrack(tr)})}catch(e){ac=null}}
 var ch=[],rec=new MediaRecorder(stm,opt),t0=performance.now(),done=0;job.onpz=function(z){try{if(z){hedPause();rec.pause()}else{rec.resume();hedPlay()}}catch(e){}};rec.ondataavailable=function(e){if(e.data&&e.data.size)ch.push(e.data)};
 var end=function(){if(done)return;done=1;HED.onend=null;hedPause();try{rec.stop()}catch(e){}};
 rec.onstop=function(){try{stm.getTracks().forEach(function(k){k.stop()})}catch(e){}try{if(ac)ac.close()}catch(e){}HED.xo=null;HED.xm=0;if(job.cancel){ok(null);return}var ty=(rec.mimeType||mime||'video/webm').split(';')[0];stFixDur(new Blob(ch,{type:ty}),(performance.now()-t0)/1000,ty).then(function(b){ok({blob:b,ext:ty.indexOf('mp4')>=0?'mp4':'webm'})})};
 HED.xm=1;HED.xo={cv:cv,stm:stm,after:function(){if(stm._rf){try{stm._rf.requestFrame()}catch(e){}}hedProg(.06+.92*Math.min(1,HED.t/tot),hedt('x_busy_rt'));if(job.cancel)end()}};HED.onend=end;HED.t=0;rec.start(500);t0=performance.now();if(asrc){try{asrc.start(0)}catch(e){}}hedSync(0,false);hedPlay()})}
/* ---- translations (ta, en, si, ar) ---- */
var HEDT={
nm:['Multi Editor','Multi Editor','Multi Editor','Multi Editor'],nm_d:['வீடியோ, படம், ஒலி, எழுத்து — ஒரே இடத்தில் திருத்து','Edit video, images, audio and text in one place','වීඩියෝ, රූප, ශබ්ද සහ පෙළ එකම තැනක සංස්කරණය කරන්න','حرّر الفيديو والصور والصوت والنص في مكان واحد'],
b_exp:['ஏற்றுமதி','Export','අපනයනය','تصدير'],tb_edit:['திருத்து','Edit','සංස්කරණය','تحرير'],tb_color:['நிறம்','Color','වර්ණ','اللون'],tb_fx:['விளைவுகள்','Effects','ආචරණ','المؤثرات'],tb_audio:['ஒலி','Audio','ශබ්ද','الصوت'],tb_exp:['ஏற்றுமதி','Export','අපනයනය','تصدير'],
txtdef:['உங்கள் எழுத்து','Your text','ඔබේ පෙළ','نصّك هنا'],tv_:['வீடியோ','Video','වීඩියෝ','فيديو'],ta_:['ஒலி','Audio','ශබ්ද','صوت'],err_file:['கோப்பைத் திறக்க முடியவில்லை','Could not open file','ගොනුව විවෘත කළ නොහැක','تعذّر فتح الملف'],
split_err:['பிளேஹெட்டை கிளிப்புக்குள் வையுங்கள்','Place the playhead inside a clip','ධාවන ඉඳිකටුව ක්ලිපය තුළ තබන්න','ضع مؤشر التشغيل داخل المقطع'],bgn:['பின்னணி','Background','පසුබිම','خلفية'],
sel_clip:['திருத்த, காலவரிசையில் ஒரு கிளிப்பைத் தொடவும்','Tap a clip on the timeline to edit it','සංස්කරණයට කාල රේඛාවේ ක්ලිපයක් ඔබන්න','المس مقطعًا في الخط الزمني لتحريره'],
b_add:['சேர்','Add','එක් කරන්න','إضافة'],b_txt:['எழுத்து','Text','පෙළ','نص'],b_rec:['குரல் பதிவு','Voice','හඬ','تسجيل صوت'],b_undo:['செயல்தவிர்','Undo','පසුගමනය','تراجع'],
b_trim:['வெட்டு','Trim','කප්පාදුව','قص'],b_split:['பிரி','Split','බෙදන්න','تقسيم'],b_del:['நீக்கு','Delete','මකන්න','حذف'],b_dup:['நகல்','Duplicate','අනුපිටපත','تكرار'],b_speed:['வேகம்','Speed','වේගය','السرعة'],b_opa:['ஒளிபுகாமை','Opacity','පාරාන්ධතාව','التعتيم'],b_xf:['மாற்றம்','Transform','පරිණාමනය','تحويل'],b_crop:['க்ராப்','Crop','කපන්න','اقتصاص'],b_rot:['சுழற்று','Rotate','කරකවන්න','تدوير'],b_tst:['பாணி','Style','විලාසය','النمط'],b_shp:['வடிவம்','Shape','හැඩය','شكل'],b_more:['மேலும்','More','තව','المزيد'],
trim_l:['தொடக்கத்தை இங்கே வெட்டு','Trim start here','ආරම්භය මෙතැනින් කපන්න','قص البداية هنا'],trim_r:['முடிவை இங்கே வெட்டு','Trim end here','අවසානය මෙතැනින් කපන්න','قص النهاية هنا'],t_start:['தொடக்கம் (வி)','Start (s)','ආරම්භය (තත්)','البداية (ث)'],t_dur:['நீளம் (வி)','Length (s)','දිග (තත්)','المدة (ث)'],
scale:['அளவு','Scale','පරිමාණය','الحجم'],rotn:['சுழற்சி','Rotation','භ්‍රමණය','الدوران'],flipx:['இடம்-வலம்','Flip H','තිරස් පෙරළන්න','قلب أفقي'],flipy:['மேல்-கீழ்','Flip V','සිරස් පෙරළන්න','قلب عمودي'],reset:['மீட்டமை','Reset','යළි පිහිටුවන්න','إعادة ضبط'],fit:['பொருத்து','Fit','ගැළපෙන්න','احتواء'],fill:['நிரப்பு','Fill','පුරවන්න','ملء'],
c_l:['இடம்','Left','වම','يسار'],c_t:['மேல்','Top','ඉහළ','أعلى'],c_r:['வலம்','Right','දකුණ','يمين'],c_b:['கீழ்','Bottom','පහළ','أسفل'],
font:['எழுத்துரு','Font','අකුරු','الخط'],f_site:['தளத்தின் எழுத்துரு','Site font','අඩවියේ අකුරු','خط الموقع'],size:['அளவு','Size','ප්‍රමාණය','الحجم'],al_l:['இடம்','Left','වම','يسار'],al_c:['நடு','Center','මැද','وسط'],al_r:['வலம்','Right','දකුණ','يمين'],bold:['தடிமன்','Bold','තද','عريض'],italic:['சாய்வு','Italic','ඇල','مائل'],width:['அகலம்','Width','පළල','العرض'],lsp:['எழுத்து இடைவெளி','Letter gap','අකුරු පරතරය','تباعد الأحرف'],lhn:['வரி உயரம்','Line height','පේළි උස','ارتفاع السطر'],
c_fill:['நிரப்பு நிறம்','Fill color','පිරවුම් වර්ණය','لون التعبئة'],c_str:['ஓர நிறம்','Outline color','දාර වර්ණය','لون الحدود'],strw:['ஓரத் தடிமன்','Outline width','දාර ඝනකම','سُمك الحدود'],c_shd:['நிழல் நிறம்','Shadow color','සෙවණැලි වර්ණය','لون الظل'],shw:['நிழல்','Shadow','සෙවණැල්ල','الظل'],c_box:['பெட்டி நிறம்','Box color','පෙට්ටි වර්ණය','لون الصندوق'],boxo:['பெட்டி ஒளிபுகாமை','Box opacity','පෙට්ටි පාරාන්ධතාව','تعتيم الصندوق'],off:['இல்லை','Off','නැත','إيقاف'],height:['உயரம்','Height','උස','الارتفاع'],
s_rect:['சதுரம்','Rectangle','සෘජුකෝණාස්‍රය','مستطيل'],s_round:['வளைவுச் சதுரம்','Rounded','වටකුරු','مستدير الزوايا'],s_ell:['வட்டம்','Ellipse','ඉලිප්සය','بيضوي'],s_tri:['முக்கோணம்','Triangle','ත්‍රිකෝණය','مثلث'],s_dia:['வைரம்','Diamond','දියමන්තිය','معيّن'],s_st5:['ஐங்கோண நட்சத்திரம்','Star','තරුව','نجمة'],s_st8:['எண்கோண நட்சத்திரம்','8-point star','අට-කොන තරුව','نجمة ثمانية'],
c_grad:['இரண்டாம் நிறம்','Second color','දෙවන වර්ණය','اللون الثاني'],angle:['கோணம்','Angle','කෝණය','الزاوية'],radius:['வளைவு','Radius','අරය','نصف القطر'],blend:['கலப்பு முறை','Blend mode','මිශ්‍ර ක්‍රමය','وضع المزج'],
'bm_source-over':['இயல்பு','Normal','සාමාන්‍ය','عادي'],
detach:['ஒலியைப் பிரி','Detach audio','ශබ්දය වෙන් කරන්න','فصل الصوت'],reset_all:['அனைத்தும் மீட்டமை','Reset all','සියල්ල යළි පිහිටුවන්න','إعادة ضبط الكل']};
Object.assign(HEDT,{
'bm_multiply':['பெருக்கல்','Multiply','ගුණ කරන්න','ضرب'],'bm_screen':['திரை','Screen','තිරය','شاشة'],'bm_overlay':['மேல்பூச்சு','Overlay','උඩින්','تراكب'],'bm_lighten':['ஒளிர்வு','Lighten','ආලෝකමත්','تفتيح'],'bm_darken':['இருள்','Darken','අඳුරු','تغميق'],'bm_soft-light':['மென்ஒளி','Soft light','මෘදු ආලෝකය','ضوء ناعم'],'bm_difference':['வேறுபாடு','Difference','වෙනස','فرق'],
p_none:['இயல்பு','Normal','සාමාන්‍ය','عادي'],p_vivid:['பிரகாசம்','Vivid','සජීවී','نابض'],p_warm:['வெப்பம்','Warm','උණුසුම්','دافئ'],p_cool:['குளிர்','Cool','සිසිල්','بارد'],p_bw:['கருப்பு-வெள்ளை','B&W','කළු-සුදු','أبيض وأسود'],p_cine:['சினிமா','Cinema','සිනමා','سينمائي'],p_fade:['மங்கல்','Faded','අඳුරු','باهت'],p_dusk:['மாலை','Dusk','සන්ධ්‍යා','الغسق'],p_pop:['பளிச்','Pop','ජවසම්පන්න','لافت'],
br:['ஒளிர்வு','Brightness','දීප්තිය','السطوع'],ct:['மாறுபாடு','Contrast','ප්‍රතිවිරුද්ධතාව','التباين'],sa:['செறிவு','Saturation','සංතෘප්තිය','التشبع'],hu:['சாயல்','Hue','වර්ණ ස්වභාවය','الصبغة'],te:['வெப்பநிலை','Warmth','උණුසුම','الدفء'],ti:['நிறச்சாயல்','Tint','ඡායාව','الدرجة'],
nofilter:['இந்த உலாவி நிற வடிப்பான்களை ஆதரிக்கவில்லை; Chrome பயன்படுத்தவும்','This browser does not support color filters; use Chrome','මෙම බ්‍රව්සරය වර්ණ පෙරහන් සහාය නොදක්වයි; Chrome භාවිතා කරන්න','هذا المتصفح لا يدعم مرشحات الألوان؛ استخدم Chrome'],
blur:['மங்கலாக்கு','Blur','බොඳ කරන්න','تمويه'],vig:['ஓர இருள்','Vignette','දාර අඳුර','تظليل الحواف'],grain:['தானியம்','Grain','ඇට','حبيبات'],glow:['ஒளிர்வு','Glow','දීප්තිය','توهج'],pixel:['பிக்சல்','Pixelate','පික්සල්','بكسلة'],gray:['சாம்பல்','Grayscale','අළු පැහැ','رمادي'],sepia:['செபியா','Sepia','සෙපියා','بني قديم'],invert:['தலைகீழ்','Invert','ප්‍රතිලෝම','عكس'],mirror:['கண்ணாடி','Mirror','දර්පණය','مرآة'],
kb:['மெதுவான நகர்வு','Slow motion move','මන්දගාමී චලනය','حركة بطيئة'],none:['இல்லை','None','නැත','بلا'],kb_in:['உள்ளே','Zoom in','විශාල කරන්න','تقريب'],kb_out:['வெளியே','Zoom out','කුඩා කරන්න','تبعيد'],kb_l:['இடமாக','Pan left','වමට','يسارًا'],kb_r:['வலமாக','Pan right','දකුණට','يمينًا'],
anim:['அசைவூட்டம்','Animation','සජීවීකරණය','الحركة'],an_in:['உள்வருகை','In','ඇතුල් වීම','دخول'],an_out:['வெளியேற்றம்','Out','පිටවීම','خروج'],an_none:['இல்லை','None','නැත','بلا'],an_fade:['மங்கல்','Fade','මැකී','تلاشي'],an_sl:['இடமிருந்து','Slide left','වමෙන්','انزلاق يسار'],an_sr:['வலமிருந்து','Slide right','දකුණෙන්','انزلاق يمين'],an_su:['மேலிருந்து','Slide up','ඉහළින්','انزلاق علوي'],an_sd:['கீழிருந்து','Slide down','පහළින්','انزلاق سفلي'],an_zi:['பெரிதாக்கு','Zoom in','විශාල','تكبير'],an_zo:['சிறிதாக்கு','Zoom out','කුඩා','تصغير'],an_spin:['சுழற்சி','Spin','කරකැවීම','دوران'],an_blur:['மங்கல் வெளிப்பாடு','Blur','බොඳ','ضبابي'],an_pop:['துள்ளல்','Pop','පොප්','ظهور'],an_rev:['திரை விலகல்','Reveal','හෙළි කිරීම','كشف'],an_dur:['கால அளவு','Duration','කාලය','المدة'],
volume:['ஒலியளவு','Volume','හඬ ප්‍රමාණය','مستوى الصوت'],fadein:['மெல்ல தொடக்கம்','Fade in','මැකී ඇරඹුම','تلاشٍ داخل'],fadeout:['மெல்ல முடிவு','Fade out','මැකී අවසානය','تلاشٍ خارج'],mute:['ஒலி நிறுத்து','Mute','නිශ්ශබ්ද','كتم'],sel_snd:['ஒலி உள்ள கிளிப்பைத் தேர்ந்தெடுக்கவும்','Select a clip with sound','ශබ්ද සහිත ක්ලිපයක් තෝරන්න','اختر مقطعًا يحتوي على صوت'],master:['மொத்த ஒலி','Master volume','ප්‍රධාන හඬ','المستوى العام'],
rec_stop:['பதிவை நிறுத்து','Stop recording','පටිගත කිරීම නවත්වන්න','إيقاف التسجيل'],add_aud:['ஒலிக்கோப்பு','Audio file','ශබ්ද ගොනුව','ملف صوتي'],fname:['கோப்புப் பெயர்','File name','ගොනු නම','اسم الملف'],bgc:['பின்னணி நிறம்','Background','පසුබිම් වර්ණය','لون الخلفية'],
x_vid:['வீடியோ ஏற்றுமதி','Export video','වීඩියෝ අපනයනය','تصدير فيديو'],x_png:['சட்டம் PNG','Frame PNG','රාමුව PNG','إطار PNG'],x_jpg:['சட்டம் JPG','Frame JPG','රාමුව JPG','إطار JPG'],newp:['புதிய திட்டம்','New project','නව ව්‍යාපෘතිය','مشروع جديد'],
add_vi:['வீடியோ / படம்','Video / Image','වීඩියෝ / රූප','فيديو / صورة'],tracks:['தடங்கள்','Tracks','ධාවන පථ','المسارات'],tr_v:['வீடியோ தடம்','Video track','වීඩියෝ පථය','مسار فيديو'],tr_a:['ஒலித் தடம்','Audio track','ශබ්ද පථය','مسار صوت'],
no:['இல்லை','No','නැත','لا'],yes:['ஆம்','Yes','ඔව්','نعم'],newp_q:['தற்போதைய திட்டம் அழிக்கப்படும். தொடரவா?','The current project will be cleared. Continue?','වත්මන් ව්‍යාපෘතිය මැකෙනු ඇත. ඉදිරියට යන්නද?','سيتم مسح المشروع الحالي. هل تتابع؟'],
err_rec:['மைக்ரோஃபோனைப் பயன்படுத்த முடியவில்லை','Could not use the microphone','මයික්‍රෆෝනය භාවිතා කළ නොහැක','تعذّر استخدام الميكروفون'],x_prep:['தயார் செய்கிறது…','Preparing…','සූදානම් වෙමින්…','جارٍ التحضير…'],x_audio:['ஒலியை இணைக்கிறது…','Mixing audio…','ශබ්දය මිශ්‍ර කරමින්…','جارٍ دمج الصوت…'],x_busy:['ஏற்றுமதி','Exporting','අපනයනය','جارٍ التصدير'],x_busy_rt:['நேரடிப் பதிவு — திரையை விட்டு நீங்க வேண்டாம்','Recording live — stay on this screen','සජීවී පටිගත කිරීම — මෙම තිරයේ රැඳී සිටින්න','تسجيل مباشر — ابقَ في هذه الشاشة'],x_done:['பதிவிறக்கம் முடிந்தது','Download complete','බාගැනීම අවසන්','اكتمل التنزيل'],x_err:['ஏற்றுமதி தோல்வி','Export failed','අපනයනය අසාර්ථකයි','فشل التصدير']});
Object.assign(HEDT,{
b_trn:['மாற்றம் விளைவு','Transition','සංක්‍රමණය','انتقال'],b_ovl:['ஓவர்லே','Overlay','උඩු ස්තරය','طبقة علوية'],b_canvas:['திரை','Canvas','තිරය','اللوحة'],b_freeze:['சட்டம் நிறுத்து','Freeze','ශීත රාමුව','تجميد'],
b_media:['வீடியோ / படம்','Media','මාධ්‍ය','وسائط'],b_music:['இசை','Music','සංගීතය','موسيقى'],stk:['அடையாளங்கள்','Symbols','සංකේත','رموز'],
tr_t:['எழுத்துத் தடம்','Text track','පෙළ පථය','مسار نص'],tr_o:['ஓவர்லே தடம்','Overlay track','උඩු ස්තර පථය','مسار علوي'],ovl_media:['ஓவர்லே வீடியோ / படம்','Overlay video / image','උඩු ස්තර වීඩියෝ / රූප','فيديو / صورة علوية'],cancel:['ரத்து','Cancel','අවලංගු','إلغاء']});

Object.assign(HEDT,{
b_kf:['கீஃப்ரேம்','Keyframe','කීෆ්‍රේම්','إطار رئيسي'],b_filter:['ஃபில்டர்கள்','Filters','පෙරහන්','فلاتر'],b_adjust:['சரிசெய்','Adjust','සීරුමාරු','ضبط'],b_mask:['மாஸ்க்','Mask','වෙස්මුහුණ','قناع'],b_layers:['அடுக்குகள்','Layers','ස්තර','الطبقات'],b_resize:['அளவு மாற்று','Resize','ප්‍රමාණය','تغيير الحجم'],b_anall:['அனைத்து அனிமேஷன்','Animate all','සියලු සජීවීකරණ','تحريك الكل'],b_settings:['அமைப்புகள்','Settings','සැකසුම්','الإعدادات'],b_sfx:['ஒலி விளைவு','Sound effect','ශබ්ද ආචරණ','مؤثر صوتي'],rec_l:['பதிவு','Record','පටිගත','تسجيل'],
kf_h:['நேரத்தை நகர்த்தி ◆ அழுத்தி கீஃப்ரேம் சேர்க்கவும்; பிறகு மதிப்புகளை மாற்றவும்','Move the time, tap ◆ to add a keyframe, then change the values','වේලාව ගෙන ගොස් ◆ ඔබා කීෆ්‍රේම් එක් කර අගයන් වෙනස් කරන්න','حرّك الوقت واضغط ◆ لإضافة إطار رئيسي ثم غيّر القيم'],kf_lin:['நேர்கோடு','Linear','රේඛීය','خطي'],kf_smo:['மென்மை','Smooth','සුමට','ناعم'],kf_clr:['அனைத்தையும் நீக்கு','Clear all','සියල්ල ඉවත් කරන්න','مسح الكل'],m_inv:['தலைகீழ்','Invert','ප්‍රතිලෝම','عكس'],s_heart:['இதயம்','Heart','හදවත','قلب'],
l_fwd:['மேலே கொண்டு வா','Bring forward','ඉදිරියට','إلى الأمام'],l_bwd:['கீழே அனுப்பு','Send backward','පසුපසට','إلى الخلف'],l_trk:['தடங்கள்','Tracks','පථ','المسارات'],l_busy:['தடத்தில் கிளிப்புகள் உள்ளன','The track has clips','පථයේ ක්ලිප් ඇත','المسار يحتوي مقاطع'],l_last:['இந்த வகையின் கடைசித் தடம்','Last track of this kind','මෙම වර්ගයේ අවසන් පථය','آخر مسار من هذا النوع'],
set_snap:['ஒட்டுதல் (snap)','Snap','ඇලවීම','الالتصاق'],set_grid:['வழிகாட்டிக் கோடுகள்','Guides','මාර්ගෝපදේශ','خطوط إرشاد'],set_pq:['முன்னோட்டத் தரம்','Preview quality','පෙරදසුන් ගුණාත්මකභාවය','جودة المعاينة'],pq_h:['உயர்','High','ඉහළ','عالية'],pq_m:['நடுத்தர','Medium','මධ්‍යම','متوسطة'],pq_l:['குறைவு','Low','අඩු','منخفضة'],
b_srt:['வசனம் (.srt)','Subtitles','උපසිරැසි','ترجمة'],srt_err:['வசனக் கோப்பைப் படிக்க முடியவில்லை','Could not read the subtitle file','උපසිරැසි ගොනුව කියවිය නොහැක','تعذّرت قراءة ملف الترجمة'],
sfx_ding:['டிங்','Ding','ඩිං','رنين'],sfx_bell:['மணி','Bell','සීනුව','جرس'],sfx_pop:['பாப்','Pop','පොප්','فقاعة'],sfx_click:['கிளிக்','Click','ක්ලික්','نقرة'],sfx_whoosh:['ஹூஷ்','Whoosh','හූෂ්','صفير'],sfx_rise:['ஏற்றம்','Rise','ඉහළ යාම','صعود'],sfx_drum:['டிரம்','Drum','බෙරය','طبل'],sfx_ok:['வெற்றி','Success','සාර්ථක','نجاح'],sfx_alert:['எச்சரிக்கை','Alert','අවවාදය','تنبيه'],sfx_drop:['துளி','Drop','බිංදුව','قطرة']});

Object.assign(HEDT,{
ft_pre:['முன்னமைவுகள்','Presets','පෙර සැකසුම්','إعدادات جاهزة'],ft_adj:['சரிசெய்','Adjust','සීරුමාරු','ضبط'],
rz_wd:['அகலத்திரை','Widescreen','පුළුල් තිරය','شاشة عريضة'],rz_st:['ஸ்டோரி / ரீல்','Story / Reel','කථා / රීල්','ستوري / ريل'],rz_sq:['சதுரம்','Square','චතුරස්‍රය','مربع'],rz_p45:['நிமிர்வு','Portrait','සිරස්','عمودي'],rz_p34:['உயர் நிமிர்வு','Tall portrait','උස සිරස්','عمودي طويل'],rz_cin:['சினிமா','Cinema','සිනමා','سينما'],rz_cls:['கிளாசிக்','Classic','සම්භාව්‍ය','كلاسيكي'],rz_ph:['புகைப்படம்','Photo','ඡායාරූප','صورة'],rz_tall:['உயரம்','Tall','උස','طويل'],
rz_custom:['தனிப்பயன் விகிதம்','Custom ratio','අභිරුචි අනුපාතය','نسبة مخصصة'],rz_apply:['பயன்படுத்து','Apply','යොදන්න','تطبيق'],rz_bad:['விகிதம் 1:4 முதல் 4:1 வரை இருக்க வேண்டும்','The ratio must be between 1:4 and 4:1','අනුපාතය 1:4 සිට 4:1 දක්වා විය යුතුය','يجب أن تكون النسبة بين 1:4 و4:1']});
/* ================= Huda Studio 4.0.0 — projects, pickers, sizes (own code, no libraries) ================= */
Object.assign(HEDI,{dots3:'<circle cx="12" cy="5" r="1.9" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.9" fill="currentColor" stroke="none"/>',
grip:'<circle cx="9" cy="6" r="1.6" fill="currentColor" stroke="none"/><circle cx="15" cy="6" r="1.6" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="9" cy="18" r="1.6" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r="1.6" fill="currentColor" stroke="none"/>',
pen2:'<path d="M4 20l1.2-4.4L16.5 4.3a1.8 1.8 0 012.5 0l.7.7a1.8 1.8 0 010 2.5L8.4 18.8z"/><path d="M14.5 6.5l3 3"/>',
group2:'<rect x="3.5" y="3.5" width="11" height="11" rx="2"/><rect x="9.5" y="9.5" width="11" height="11" rx="2"/>',
ungroup2:'<rect x="3" y="3" width="9" height="9" rx="2"/><rect x="12" y="12" width="9" height="9" rx="2" stroke-dasharray="2.6 2.2"/>',
repl:'<path d="M4 8h12l-3-3.5M20 16H8l3 3.5"/>',rev2:'<path d="M11 6v12l-8-6zM21 6v12l-8-6z"/>',
mouse2:'<rect x="6.5" y="3" width="11" height="18" rx="5.5"/><path d="M12 3v6.5"/>',
kfp:'<path d="M12 2.5l9.5 9.5-9.5 9.5L2.5 12z"/><path d="M12 8.5v7M8.5 12h7"/>',kfm:'<path d="M12 2.5l9.5 9.5-9.5 9.5L2.5 12z" fill="currentColor" fill-opacity=".28"/><path d="M8.5 12h7"/>',
warn2:'<path d="M12 3.2l9.6 16.8H2.4z"/><path d="M12 10v4.6M12 17.4v.2"/>',magoff:'<path d="M5 4v8a7 7 0 0014 0V4h-4v8a3 3 0 01-6 0V4z"/><path d="M3 3l18 18"/>',
alL:'<path d="M4 3v18"/><rect x="7" y="6" width="13" height="4.5" rx="1"/><rect x="7" y="13.5" width="8" height="4.5" rx="1"/>',alC:'<path d="M12 3v18"/><rect x="5" y="6" width="14" height="4.5" rx="1"/><rect x="8" y="13.5" width="8" height="4.5" rx="1"/>',alR:'<path d="M20 3v18"/><rect x="4" y="6" width="13" height="4.5" rx="1"/><rect x="9" y="13.5" width="8" height="4.5" rx="1"/>',
alT:'<path d="M3 4h18"/><rect x="6" y="7" width="4.5" height="13" rx="1"/><rect x="13.5" y="7" width="4.5" height="8" rx="1"/>',alM:'<path d="M3 12h18"/><rect x="6" y="5" width="4.5" height="14" rx="1"/><rect x="13.5" y="8" width="4.5" height="8" rx="1"/>',alB:'<path d="M3 20h18"/><rect x="6" y="4" width="4.5" height="13" rx="1"/><rect x="13.5" y="9" width="4.5" height="8" rx="1"/>',
chev:'<path d="M6 9l6 6 6-6"/>'});
function hedHgtSet(r){var gc=hedRGB(stAcc())||{r:212,g:175,b:55};r.style.setProperty('--hgt',hedLum(gc)>.55?'#1b1b1b':'#ffffff')}
function hedStDef(p){p.st=p.st||{};var d={snap:1,msnap:1,sg:1,gsnap:0,sens:5,smart:1,gshow:1};Object.keys(d).forEach(function(k){if(p.st[k]===undefined)p.st[k]=d[k]});p.gd=p.gd||[];return p}
/* ---- project list (each project saved under its own key; media shared in IndexedDB) ---- */
var HEDL=null,HEDM={m:0};
function hedLSave(){try{P('hedpl',HEDL)}catch(e){}}
function hedLoadList(){if(HEDL)return HEDL;var l=S('hedpl',null);
 if(!Array.isArray(l)){l=[];var old=S('hedp',null);if(old&&old.tr&&old.cl&&(old.cl.length||(old.mm&&old.mm.length))){old.id=old.id||hedU();old.nm=hedt('proj')+' 1';try{P('hedp_'+old.id,old)}catch(e){}l.push({id:old.id,nm:old.nm,ts:Date.now(),dur:0,rt:old.ratio||'wd',th:''})}try{P('hedpl',l)}catch(e){}}
 return HEDL=l}
function hedLEnt(id){return hedLoadList().filter(function(e){return e.id==id})[0]||null}
function hedDbDel(id){return hedDbOp('readwrite',function(s){return s.delete(id)})}
function hedThumbOf(){try{var p=HED.p,d=hedDims(),w=140,h=Math.round(140*d.H/d.W);if(h>140){h=140;w=Math.round(140*d.W/d.H)}var cv=D.createElement('canvas');cv.width=w;cv.height=h;var x=cv.getContext('2d');x.fillStyle=p.bg||'#000';x.fillRect(0,0,w,h);var c0=null;p.cl.forEach(function(c){if(!c0&&(c.k=='video'||c.k=='image'))c0=c});
 if(c0){var m=HED.media[c0.m],s=m&&m.th&&m.th[0];if(s){var r=Math.max(w/s.width,h/s.height);x.drawImage(s,(w-s.width*r)/2,(h-s.height*r)/2,s.width*r,s.height*r)}}
 else p.cl.forEach(function(c){if(c.k=='shape'){x.fillStyle=c.sh.c;x.fillRect(w*.25,h*.25,w*.5,h*.5)}else if(c.k=='text'&&c.tx){x.fillStyle=c.tx.c||'#fff';x.font='700 '+Math.round(h*.22)+'px sans-serif';x.textAlign='center';x.fillText((c.tx.s||'').split('\n')[0].slice(0,14),w/2,h/2)}});
 return cv.toDataURL('image/jpeg',.6)}catch(e){return''}}
function hedSaveNow(){if(!HED||!HED.p||!HED.p.id)return;try{var p=HED.p,l=hedLoadList(),e=hedLEnt(p.id);P('hedp_'+p.id,p);if(!e){e={id:p.id};l.unshift(e)}e.nm=p.nm;e.ts=Date.now();e.dur=hedDur();e.rt=p.ratio;var th=hedThumbOf();if(th)e.th=th;hedLSave()}catch(x){}}
function hedLeave(){if(!HED)return;try{hedSaveNow()}catch(e){}hedPause();hedStopEls();clearInterval(HED.ti);try{if(HED.mo)HED.mo.disconnect()}catch(e){}Object.keys(HED.media||{}).forEach(function(k){try{URL.revokeObjectURL(HED.media[k].url)}catch(e){}});clearTimeout(HED._sv);HED=null}
function hedGoList(){hedLeave();hedHome()}
function hedOpenProject(id,keep){var p=S('hedp_'+id,null),e=hedLEnt(id);if(!p||!p.tr||!p.cl){p=hedBlank();p.nm=e?e.nm:hedt('proj')}p.id=id;if(!p.nm)p.nm=e?e.nm:hedt('proj');hedRoleFix(p);hedStDef(p);hedLeave();
 HED={p:p,media:{},els:{},sel:'',t:0,z:40,snap:1,tab:'edit',sub:'',un:[],re:[],lk:'',lt:0,xn:'',job:null,th:null,ms:[],lsm:0,view:'ed'};hedLoadMedia(p);
 if(!keep){try{history.pushState({v:'studio',t:'plus',he:1},'');HEDHS++}catch(x){}}hedView()}
function hedNewProject(){var l=hedLoadList(),p=hedBlank(),n=l.length+1,has=function(s){return l.some(function(e){return e.nm==s})};while(has(hedt('proj')+' '+n))n++;hedStDef(p);p.nm=hedt('proj')+' '+n;try{P('hedp_'+p.id,p)}catch(e){}l.unshift({id:p.id,nm:p.nm,ts:Date.now(),dur:0,rt:p.ratio,th:''});hedLSave();hedOpenProject(p.id)}
function hedDupProject(id,sfx){var p=S('hedp_'+id,null);if(!p)return null;var np=JSON.parse(JSON.stringify(p)),e=hedLEnt(id),l=hedLoadList();np.id=hedU();np.nm=(p.nm||hedt('proj'))+' '+(sfx||hedt('copy'));try{P('hedp_'+np.id,np)}catch(x){}l.unshift({id:np.id,nm:np.nm,ts:Date.now(),dur:e?e.dur:0,rt:np.ratio,th:e?e.th:''});hedLSave();return np.id}
function hedDelProject(id){var l=hedLoadList(),p=S('hedp_'+id,null),mm=(p&&p.mm||[]).map(function(m){return m.id});HEDL=l.filter(function(e){return e.id!=id});hedLSave();try{localStorage.removeItem('dd_hedp_'+id)}catch(e){}
 var keep={};HEDL.forEach(function(e){var q=S('hedp_'+e.id,null);(q&&q.mm||[]).forEach(function(m){keep[m.id]=1})});mm.forEach(function(m){if(!keep[m])hedDbDel(m)})}
function hedRenameProject(id,nm){var e=hedLEnt(id);if(!e)return;e.nm=nm;hedLSave();var p=S('hedp_'+id,null);if(p){p.nm=nm;try{P('hedp_'+id,p)}catch(x){}}}
function hedMin(s){s=Math.max(0,Math.round(s||0));return hedPad(Math.floor(s/60))+':'+hedPad(s%60)}
function hedHome(){hedCss();hedLoadList();HEDM.m=0;var l=HEDL.slice().sort(function(a,b){return(b.ts||0)-(a.ts||0)});
 var cards=l.map(function(e){var rl=STR[e.rt]?STR[e.rt][2]:String(e.rt||'').replace(/^c:/,''),th=e.th?'<img alt="" src="'+e.th+'">':'<span class="hedpth0">'+hi('video')+'</span>';
  return'<div class="hedpc" data-hpl="op:'+e.id+'"><div class="hedpth">'+th+'<span class="hedpdu">'+hedMin(e.dur)+'</span><button type="button" class="hedpdt" data-hpl="mn:'+e.id+'" aria-label="menu">'+hi('dots3')+'</button></div><b>'+esc(e.nm||hedt('proj'))+'</b><small>'+hedLDate(e.ts)+' · '+esc(rl)+'</small></div>'}).join('');
 app.innerHTML='<div class="hed hedhm" id="hedlist"><div class="hedhd"><button class="ib" data-hpl="back" aria-label="back">'+ic('l')+'</button><span class="hedhi">'+hi('layers')+'</span><b>'+hedt('nm')+'</b></div><div class="hedhb"><button type="button" class="hednp" data-hpl="new"><span class="hednpi">'+hi('plus')+'</span><span class="hednpt"><b>'+hedt('newp')+'</b><small>'+hedt('newp_d')+'</small></span></button><h4>'+hedt('projs')+(l.length?' · '+l.length:'')+'</h4>'+(l.length?'<div class="hedpg">'+cards+'</div>':'<p class="hedemp">'+hedt('no_proj')+'</p>')+'</div><div id="hedlm"></div></div>';
 var r=$('#hedlist');hedHgtSet(r);r.addEventListener('click',hedLClick)}
function hedLDate(ts){var d=new Date(ts||Date.now());return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()}
function hedLClose(){var m=$('#hedlm');if(m)m.innerHTML='';HEDM.m=0}
function hedLModal(h){var m=$('#hedlm');if(!m)return;m.innerHTML='<div class="hedov" data-hpl="mx"><div class="hedmd" data-hpl="nop">'+h+'</div></div>';HEDM.m=1}
function hedLMenu(id,btn){var m=$('#hedlm'),root=$('#hedlist');if(!m||!root)return;var r=btn.getBoundingClientRect(),rr=root.getBoundingClientRect(),top=r.bottom-rr.top+4,left=Math.max(8,Math.min(rr.width-178,r.right-rr.left-170));
 m.innerHTML='<div class="hedmnb" data-hpl="mx"></div><div class="heddd hedmn" style="top:'+top+'px;left:'+left+'px"><button type="button" class="heddi" data-hpl="dup:'+id+'">'+hi('copy')+'<span>'+hedt('dup')+'</span></button><button type="button" class="heddi" data-hpl="rn:'+id+'">'+hi('pen2')+'<span>'+hedt('ren')+'</span></button><button type="button" class="heddi dng" data-hpl="dl:'+id+'">'+hi('trash')+'<span>'+hedt('del')+'</span></button></div>';HEDM.m=1}
function hedLClick(e){var b=e.target.closest&&e.target.closest('[data-hpl]');if(!b)return;var a=b.dataset.hpl.split(':'),k=a[0],id=a[1];
 switch(k){case'nop':return;case'back':if(history.state&&history.state.t=='plus'&&history.length>1)history.back();else{hedLeave();stHome()}break;case'new':hedNewProject();break;case'op':hedOpenProject(id);break;
 case'mn':e.stopPropagation();hedLMenu(id,b);break;case'mx':hedLClose();break;
 case'dup':hedLClose();hedDupProject(id);hedHome();break;
 case'rn':var en=hedLEnt(id);hedLModal('<p class="hedmq">'+hedt('pname')+'</p><input type="text" class="hedn" id="hedrn" maxlength="60" value="'+esc(en?en.nm:'')+'"><div class="hedgr2"><button type="button" class="hedbt" data-hpl="mx">'+hedt('cancel')+'</button><button type="button" class="hedbt hedgo" data-hpl="rnok:'+id+'">'+hedt('okb')+'</button></div>');setTimeout(function(){var i=$('#hedrn');if(i){i.focus();i.select()}},60);break;
 case'rnok':var v=(($('#hedrn')||{}).value||'').trim();if(v)hedRenameProject(id,v.slice(0,60));hedHome();break;
 case'dl':hedLModal('<p class="hedmq">'+hedt('del_q')+'</p><div class="hedgr2"><button type="button" class="hedbt" data-hpl="mx">'+hedt('cancel')+'</button><button type="button" class="hedbt hedgo dng2" data-hpl="dlok:'+id+'">'+hedt('del')+'</button></div>');break;
 case'dlok':hedDelProject(id);hedHome();break}}
function hedOpen(push){if(push===true){HEDHS=0;try{history.pushState({v:'studio',t:'plus',he:1},'');HEDHS=1}catch(e){}}hedLeave();hedHome()}
function hedPopState(e){var ed=hedAlive(),ls=!!$('#hedlist');if(!ed&&!ls)return;
 if(ls&&!ed){if(HEDM.m){e.stopImmediatePropagation();try{history.pushState({v:'studio',t:'plus',he:1},'')}catch(x){}hedLClose();return}HEDHS=0;hedLeave();return}
 var pv=$('#hedpv'),sh=$('#hedsh'),open=HED.pop||HED.dd||(pv&&pv.classList.contains('fs'))||(sh&&sh.firstChild);
 if(!open&&HED.job){e.stopImmediatePropagation();try{history.pushState({v:'studio',t:'plus',he:1},'')}catch(x){}toast(hedt('x_busy'));return}
 if(!open){e.stopImmediatePropagation();HEDHS=Math.max(0,HEDHS-1);hedGoList();return}
 e.stopImmediatePropagation();try{history.pushState({v:'studio',t:'plus',he:1},'')}catch(x){}
 if(HED.dd)hedDdClose();else if(sh&&sh.firstChild)hedSheet('');else if(pv&&pv.classList.contains('fs')){pv.classList.remove('fs');setTimeout(hedFitPv,60)}else if(HED.pop){HED.pop='';HED.lsm=0;HED.ms=[];hedPanel()}}
/* ---- pickers (resolution / fps / ratio / any list) open right at the button, in the editor's own style ---- */
function hedWeak(i){return i>stMaxRes()}
function hedDdSpec(k){var p=HED.p,mx=stMaxRes(),nm=['720P','1080P','2K','4K'];
 if(k=='res')return{path:'@res',cur:p.res,list:[1,2,3,4].map(function(i){return[i,nm[i-1],hedWeak(i)]})};
 if(k=='fps')return{path:'@fps',cur:p.fps,list:[24,30,60].map(function(v){return[v,v+' FPS']})};
 if(k=='ratio'){var L=HEDRZ.map(function(q){return[q[0],hedt('rz_'+q[3])+' · '+q[1]+':'+q[2]]});if(!HEDRZ.some(function(q){return q[0]==p.ratio}))L.push([p.ratio,String(p.ratio).replace(/^c:/,'')]);return{path:'@ratio',cur:p.ratio,list:L}}
 var o=HED.ddl&&HED.ddl[k];return o||null}
function hedSelFill(){var p=HED.p,nm=['720P','1080P','2K','4K'],r=$('#hedres'),f=$('#hedfpss'),a=$('#hedrat');if(!r)return;var cv=hedC(p.res||2,1,4);
 r.innerHTML=(hedWeak(cv)?hi('warn2','hedwi'):'')+'<span>'+nm[cv-1]+'</span>'+hi('chev');f.innerHTML='<span>'+p.fps+' FPS</span>'+hi('chev');
 var rl=STR[p.ratio]?STR[p.ratio][2]:String(p.ratio).replace(/^c:/,'');a.innerHTML='<span>'+rl+'</span>'+hi('chev')}
function hedDdClose(){var m=$('#heddd');if(m)m.remove();HED.dd=0}
function hedDd(btn){var had=HED.dd&&btn.classList.contains('open');hedDdClose();D.querySelectorAll('#hed .hedddb.open').forEach(function(x){x.classList.remove('open')});if(had)return;var sp=hedDdSpec(btn.dataset.dd);if(!sp)return;var root=$('#hed'),rr=root.getBoundingClientRect(),r=btn.getBoundingClientRect();
 var m=D.createElement('div');m.id='heddd';m.className='heddd';m.innerHTML=sp.list.map(function(x){return'<button type="button" class="heddi'+(String(x[0])==String(sp.cur)?' on':'')+'" data-hepv="'+sp.path+'|'+x[0]+'"><span>'+x[1]+'</span>'+(x[2]?hi('warn2','hedwi'):String(x[0])==String(sp.cur)?hi('check'):'')+'</button>'}).join('');
 root.appendChild(m);var mw=Math.max(150,Math.min(rr.width-16,m.offsetWidth)),left=Math.max(8,Math.min(rr.width-mw-8,r.left-rr.left)),top=r.bottom-rr.top+4;m.style.left=left+'px';m.style.minWidth=Math.max(mw,r.width)+'px';
 if(top+m.offsetHeight>rr.height-8){var t2=r.top-rr.top-m.offsetHeight-4;top=t2>8?t2:Math.max(8,rr.height-m.offsetHeight-8)}m.style.top=top+'px';btn.classList.add('open');HED.dd=1}
function hSelO(path,lab,list,cur,num){var id='d'+(HED.ddn=(HED.ddn||0)+1),cl='';HED.ddl=HED.ddl||{};HED.ddl[id]={path:path,cur:cur,list:list};list.forEach(function(x){if(String(x[0])==String(cur))cl=x[1]});return'<div class="hedsr hedcr"><label>'+lab+'</label><button type="button" class="hedsel hedddb" data-dd="'+id+'"><span>'+cl+'</span>'+hi('chev')+'</button></div>'}
/* ---- resizable work areas (the mouse button): preview height, track height, track-name width ---- */
function hedSizes(){var r=$('#hed');HEDHW=hedSt('hw',66);HEDTH=hedSt('th',48);if(r){r.style.setProperty('--hhw',HEDHW+'px');r.style.setProperty('--hth',HEDTH+'px');r.classList.toggle('rsm',!!hedSt('rs',0))}}
function hedTlSoon(){if(HED._ts)return;HED._ts=requestAnimationFrame(function(){HED._ts=0;if(hedAlive())hedTl()})}
function hedBindRs(r,ts){
 r.addEventListener('pointerdown',function(e){var t=e.target.closest&&e.target.closest('.hedcorner,.hedspl');if(!t||!hedSt('rs',0))return;e.preventDefault();HED.rg={k:t.classList.contains('hedspl')?'pv':'tl',x0:e.clientX,y0:e.clientY,hw:HEDHW,th:HEDTH,pv:hedSt('pvh',.44)};try{t.setPointerCapture(e.pointerId)}catch(x){}});
 r.addEventListener('pointermove',function(e){var g=HED.rg;if(!g)return;var dx=e.clientX-g.x0,dy=e.clientY-g.y0;if(g.k=='pv'){hedSetP(HED.p,'st.pvh',hedC(g.pv+dy/(r.clientHeight||600),.18,.72));hedFitPv()}else{hedSetP(HED.p,'st.hw',hedC(Math.round(g.hw+dx),44,140));hedSetP(HED.p,'st.th',hedC(Math.round(g.th+dy),32,110));hedSizes();hedTlSoon()}});
 var up=function(){if(HED&&HED.rg){HED.rg=null;hedTl();hedSaveSoon()}};r.addEventListener('pointerup',up);r.addEventListener('pointercancel',up);
 ts.addEventListener('wheel',function(e){if(e.ctrlKey||e.metaKey){e.preventDefault();hedZoom(e.deltaY<0?1.12:1/1.12)}},{passive:false});
 var pp=$('#hedpop');pp.addEventListener('pointerdown',hedLDown);pp.addEventListener('pointermove',hedLMove);pp.addEventListener('pointerup',hedLUp);pp.addEventListener('pointercancel',hedLUp);var sn=$('#hedsnoff');if(sn){var on=function(e){e.preventDefault();HED.snapHold=1;sn.classList.add('on');try{sn.setPointerCapture(e.pointerId)}catch(x){}},off=function(){if(HED){HED.snapHold=0;sn.classList.remove('on')}};sn.addEventListener('pointerdown',on);sn.addEventListener('pointerup',off);sn.addEventListener('pointercancel',off)}}

/* ================= 4.0.0 — layers (Canva-style), groups, lock, reverse, replace, audio colours ================= */
var HEDAKC={mus:'34,197,94',rec:'251,113,133',sfx:'34,211,238'},HEDAKI={mus:'music',rec:'mic',sfx:'spk'};
function hedAK(c){if(c.ak&&HEDAKC[c.ak])return c.ak;var n=String(c.nm||'');if(/^voice-/i.test(n))return'rec';if(HEDSFX.indexOf(n.replace(/\.wav$/i,''))>=0)return'sfx';return'mus'}
/* ---- draw order: tracks by default; once a layer is dragged in the panel every layer gets an explicit z ---- */
function hedLocked(c){var tr=hedTr(c.tr);return!!(c.lk||(tr&&tr.lk))}
function hedGrp(c){return c.g?HED.p.cl.filter(function(x){return x.g==c.g}):[c]}
function hedGrpClean(){var n={};HED.p.cl.forEach(function(c){if(c.g)n[c.g]=(n[c.g]||0)+1});HED.p.cl.forEach(function(c){if(c.g&&n[c.g]<2)delete c.g})}
function hedGC(g){return'hsl('+(parseInt(String(g).slice(0,4),36)%360)+',78%,58%)'}
function hedLThumb(c){var m=HED.media[c.m],s=m&&m.th&&m.th[0];
 if((c.k=='video'||c.k=='image')&&s){try{if(!m.thu)m.thu=s.toDataURL('image/jpeg',.6)}catch(e){}if(m.thu)return'<span class="hedlth" style="background-image:url('+m.thu+')"></span>'}
 if(c.k=='text'){var x=c.tx||{};return'<span class="hedlth t" style="color:'+(x.c||'#fff')+';background:'+(x.bg||'#1c2530')+'">Aa</span>'}
 if(c.k=='shape'){var s2=c.sh;return'<span class="hedlth" style="background:linear-gradient(135deg,'+s2.c+','+(s2.c2||s2.c)+')"></span>'}
 if(c.k=='audio'){var ak=hedAK(c),k=HEDAKC[ak];return'<span class="hedlth a" style="background:rgba('+k+',.22);color:rgb('+k+')">'+hi(HEDAKI[ak])+'</span>'}
 return'<span class="hedlth">'+hi(c.k=='image'?'image':'video')+'</span>'}
function hedLRow(c,vis){var sel=c.id==HED.sel,ms=HED.ms.indexOf(c.id)>=0,off=c.k=='audio'?c.mu:c.hid,lk=hedLocked(c);
 return'<div class="hedlr'+(vis?' vis':'')+(sel?' on':'')+(off?' off':'')+(c.g?' ing':'')+(lk?' lkd':'')+'" data-lid="'+c.id+'"'+(c.g?' style="--gc:'+hedGC(c.g)+'"':'')+'>'
 +(HED.lsm?'<button type="button" class="hedlck'+(ms?' on':'')+'" data-ha="lms:'+c.id+'" aria-label="select">'+(ms?hi('check'):'')+'</button>':(vis?'<span class="hedlh" aria-label="drag">'+hi('grip')+'</span>':'<span class="hedlh nd"></span>'))
 +'<button type="button" class="hedlsel" data-ha="selc:'+c.id+'">'+hedLThumb(c)+'<span class="hedlnm"><b>'+esc(hedCName(c)||hedt('b_txt'))+'</b><small>'+(c.g?hi('group2','hedlgi')+' ':'')+hedFmtD(c.s,hedDur(),HED.p.fps)+' · '+hedFmtD(c.d,hedDur(),HED.p.fps)+'</small></span></button>'
 +'<button type="button" class="hedib" data-ha="chid:'+c.id+'" aria-label="hide">'+hi(c.k=='audio'?(c.mu?'volx':'vol'):(c.hid?'eyeoff':'eye'))+'</button><button type="button" class="hedib'+(lk?' on':'')+'" data-ha="clk:'+c.id+'" aria-label="lock">'+hi(lk?'lock':'unlock')+'</button></div>'}
function hedLayersBody(){var vis=hedVisAll().reverse(),au=HED.p.cl.filter(function(c){return c.k=='audio'}).sort(function(a,b){return a.s-b.s});if(!vis.length&&!au.length)return'<p class="hedhint">'+hedt('sel_clip')+'</p>';
 var h='<div class="hedlist" id="hedll">';if(vis.length)h+='<h5 class="hedlt">'+hedt('b_layers')+' · '+vis.length+'</h5>'+vis.map(function(c){return hedLRow(c,1)}).join('');if(au.length)h+='<h5 class="hedlt">'+hedt('l_aud')+' · '+au.length+'</h5>'+au.map(function(c){return hedLRow(c,0)}).join('');h+='</div>';
 if(HED.lsm){var n=HED.ms.length,gv=hedMsClips().filter(function(c){return c.k!='audio'}).length;h+='<div class="hedlab"><span class="hedlcn">'+n+'</span>'+[['lgrp','group2','l_grp',gv<2],['lungrp','ungroup2','l_ungrp',!n],['lhid','eyeoff','l_hide',!n],['llk','lock','l_lock',!n],['ldel','trash','l_del',!n,1]].map(function(q){return'<button type="button" class="hedlb'+(q[4]?' dng':'')+'" data-ha="'+q[0]+'"'+(q[3]?' disabled':'')+'>'+hi(q[1])+'<span>'+hedt(q[2])+'</span></button>'}).join('')+'</div>'}
 return h}
function hedMsClips(){return HED.ms.map(hedCl).filter(Boolean)}
function hedSelClip(id){var c=hedCl(id);if(!c)return;if(HED.lsm){var i=HED.ms.indexOf(id);if(i>=0)HED.ms.splice(i,1);else HED.ms.push(id);hedPanel();return}HED.sel=id;HED.kfOn=null;if(HED.t<c.s-1e-6||HED.t>c.s+c.d)hedGo(c.s+.001);hedTl();hedPanel();hedDrawSoon()}
function hedToggleHid(id){var c=hedCl(id);if(!c)return;hedHist();var L=c.k=='audio'?[c]:hedGrp(c),k=c.k=='audio'?'mu':'hid',v=c[k]?0:1;L.forEach(function(x){x[k]=v});hedSync(HED.t,!!HED.pl);hedPanel();hedDrawSoon();hedSaveSoon()}
function hedToggleLk(id){var c=hedCl(id);if(!c)return;hedHist();var L=c.k=='audio'?[c]:hedGrp(c),v=c.lk?0:1;L.forEach(function(x){x.lk=v});hedPanel();hedTl();hedDrawSoon();hedSaveSoon()}
function hedLDown(e){var h=e.target.closest&&e.target.closest('.hedlh');if(!h||h.classList.contains('nd')||HED.lsm)return;var row=h.closest('.hedlr'),body=h.closest('.hedpbody');if(!row||!body)return;e.preventDefault();HED.ld={id:row.dataset.lid,row:row,y0:e.clientY,body:body,sc0:body.scrollTop,moved:0,idx:-1};try{h.setPointerCapture(e.pointerId)}catch(x){}row.classList.add('drag')}
function hedLMove(e){var g=HED.ld;if(!g)return;var dy=e.clientY-g.y0+(g.body.scrollTop-g.sc0);g.moved=1;g.row.style.transform='translateY('+dy+'px)';var br=g.body.getBoundingClientRect();if(e.clientY<br.top+36)g.body.scrollTop-=9;else if(e.clientY>br.bottom-36)g.body.scrollTop+=9;
 var rows=[].slice.call(D.querySelectorAll('#hedll .hedlr.vis')).filter(function(r){return r!==g.row}),my=g.row.getBoundingClientRect().top+g.row.offsetHeight/2,idx=0;rows.forEach(function(r){var b=r.getBoundingClientRect();if(my>b.top+b.height/2)idx++});g.idx=idx;
 D.querySelectorAll('#hedll .insb,#hedll .inst').forEach(function(r){r.classList.remove('insb');r.classList.remove('inst')});if(idx<rows.length)rows[idx].classList.add('insb');else if(rows.length)rows[rows.length-1].classList.add('inst')}
function hedLUp(e){var g=HED.ld;if(!g)return;HED.ld=null;g.row.classList.remove('drag');g.row.style.transform='';if(!g.moved||g.idx<0){hedPanel();return}
 var top=hedVisAll().reverse(),c=hedCl(g.id);if(!c)return;var blk=hedGrp(c).map(function(x){return x.id}),rest=top.filter(function(x){return blk.indexOf(x.id)<0}),mv=top.filter(function(x){return blk.indexOf(x.id)>=0});
 var out=rest.slice(0,g.idx).concat(mv,rest.slice(g.idx));hedHist();HED.p.zon=1;out.slice().reverse().forEach(function(x,i){x.z=i});hedPanel();hedDrawSoon();hedSaveSoon()}
function hedBulk(act){var L=hedMsClips();if(!L.length)return;
 if(act=='lgrp'){L=L.filter(function(c){return c.k!='audio'});if(L.length<2){toast(hedt('l_need2'));return}hedHist();var g=hedU();L.forEach(function(c){c.g=g});hedGrpClean();HED.ms=[];HED.lsm=0}
 else if(act=='lungrp'){var gs={};L.forEach(function(c){if(c.g)gs[c.g]=1});if(!Object.keys(gs).length){toast(hedt('l_nogrp'));return}hedHist();HED.p.cl.forEach(function(c){if(c.g&&gs[c.g])delete c.g});HED.ms=[];HED.lsm=0}
 else if(act=='lhid'){hedHist();var all=L.every(function(c){return c.k=='audio'?c.mu:c.hid});L.forEach(function(c){if(c.k=='audio')c.mu=all?0:1;else c.hid=all?0:1});hedSync(HED.t,!!HED.pl)}
 else if(act=='llk'){hedHist();var al=L.every(function(c){return c.lk});L.forEach(function(c){c.lk=al?0:1})}
 else if(act=='ldel'){hedHist();var ids={};L.forEach(function(c){ids[c.id]=1;var e=HED.els[c.id];if(e){try{e.pause();e.removeAttribute('src');e.load()}catch(x){}delete HED.els[c.id]}});HED.p.cl=HED.p.cl.filter(function(c){return!ids[c.id]});hedGrpClean();if(ids[HED.sel])HED.sel='';HED.ms=[];HED.lsm=0}
 hedAll()}
/* ---- reverse / replace ---- */
function hedWavSt(b,rev){var ch=Math.min(2,b.numberOfChannels),n=b.length,sr=b.sampleRate,ab=new ArrayBuffer(44+n*ch*2),v=new DataView(ab),w=function(p,s){for(var i=0;i<s.length;i++)v.setUint8(p+i,s.charCodeAt(i))},d=[],i,j;for(j=0;j<ch;j++)d.push(b.getChannelData(j));
 w(0,'RIFF');v.setUint32(4,36+n*ch*2,true);w(8,'WAVE');w(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,ch,true);v.setUint32(24,sr,true);v.setUint32(28,sr*ch*2,true);v.setUint16(32,ch*2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*ch*2,true);
 var o=44;for(i=0;i<n;i++){var s=rev?n-1-i:i;for(j=0;j<ch;j++){v.setInt16(o,Math.max(-1,Math.min(1,d[j][s]))*32767,true);o+=2}}return new Blob([ab],{type:'audio/wav'})}
function hedRegMedia(file){return hedMeta(file).then(function(m){var id=hedU();m.id=id;m.name=file.name||'media';m.blob=file;HED.media[id]=m;HED.p.mm.push({id:id,type:m.type,name:m.name,dur:m.dur,w:m.w,h:m.h});setTimeout(function(){hedDbPut(id,file)},m.type=='video'?1800:0);if(m.type=='video')setTimeout(function(){hedThumbs(m)},900);else if(m.type=='audio')hedPeaks(m);else hedThumbImg(m);return m})}
function hedReplace(id,file){var c=hedCl(id);if(!c||!file)return;hedRegMedia(file).then(function(m){var ok=c.k=='audio'?m.type=='audio':(m.type=='video'||m.type=='image');if(!ok){toast(hedt('rpl_bad'));return}hedHist();var e=HED.els[c.id];if(e){try{e.pause();e.removeAttribute('src');e.load()}catch(x){}delete HED.els[c.id]}
  c.m=m.id;c.k=m.type;c.nm=m.name;c.i=0;c.rv=0;if(m.type!='image'&&m.dur){var nx=1e9;HED.p.cl.forEach(function(q){if(q.tr==c.tr&&q.id!=c.id&&q.s>=c.s+c.d-1e-6)nx=Math.min(nx,q.s)});c.d=hedC(Math.min(c.d,m.dur/c.sp),.1,nx-c.s)}hedAll()}).catch(function(){toast(hedt('err_file'))})}
function hedAlign(k){var c=hedSelC();if(!c||c.k=='audio'||hedLocked(c))return;var b=hedBox(c),d=hedDims();if(!b)return;hedHist();var dx=0,dy=0;
 if(k=='l')dx=-b.l;else if(k=='r')dx=d.W-b.r;else if(k=='c')dx=d.W/2-(b.l+b.r)/2;else if(k=='t')dy=-b.t;else if(k=='b')dy=d.H-b.b;else dy=d.H/2-(b.t+b.b)/2;
 hedGrp(c).forEach(function(q){q.x+=dx/d.W*100;q.y+=dy/d.H*100;if(q.kf&&q.kf.length)hedKfUpsert(q)});hedPanel();hedDrawSoon();hedSaveSoon()}

/* ================= 4.0.0 — export card, resize flow, smart guides & magnetic snapping ================= */
function hedXSvg(){var pts=[[6,30],[20,12],[34,26],[48,8],[62,22],[76,6],[90,24]],h='<svg class="hedxsv" viewBox="0 0 96 36" preserveAspectRatio="xMidYMid meet" aria-hidden="true">',i;
 for(i=0;i<pts.length-1;i++)h+='<line pathLength="1" x1="'+pts[i][0]+'" y1="'+pts[i][1]+'" x2="'+pts[i+1][0]+'" y2="'+pts[i+1][1]+'" style="animation-delay:'+(i*.32).toFixed(2)+'s"/>';
 for(i=0;i<pts.length;i++)h+=(i%3==1?'<path class="st" d="M'+pts[i][0]+' '+(pts[i][1]-3.4)+'l.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9z" style="animation-delay:'+(i*.3).toFixed(2)+'s"/>':'<circle cx="'+pts[i][0]+'" cy="'+pts[i][1]+'" r="'+(i%2?1.3:.9)+'" style="animation-delay:'+(i*.3).toFixed(2)+'s"/>');
 return h+'</svg>'}
function hedProg(p,msg,st){if(!HED)return;if(p==null){HED.xs=null;hedXUi(1);return}var s=HED.xs,ns=st||'run',chg=!s||s.st!=ns;HED.xs={st:ns,p:p,msg:msg,pz:ns=='run'&&s&&s.pz?1:0};hedXUi(chg)}
/* ---- resize flow (Duplicate & Resize / Smart Resize) ---- */
function hedSmartAdj(a,b){var s=Math.min(b.W/a.W,b.H/a.H);HED.p.cl.forEach(function(c){if(c.k=='text'&&c.tx){c.tx.z=hedR(hedC(c.tx.z*s*a.H/b.H,1,80),2);c._tl=null}else if(c.k=='shape'&&c.sh&&!(c.sh.w>=99&&c.sh.h>=99)){c.sh.w=hedR(hedC(c.sh.w*s*a.W/b.W,1,100),2);c.sh.h=hedR(hedC(c.sh.h*s*a.H/b.H,1,100),2)}})}
function hedSetRatio(r,keepSmart){var d0=hedDims();hedHist();HED.p.ratio=r;var d1=hedDims();if(hedSt('smart',1)!=0&&(d0.W!=d1.W||d0.H!=d1.H))hedSmartAdj(d0,d1);hedSelFill();hedFitPv();hedPanel();hedTl();hedDrawSoon();hedSaveSoon()}
function hedRzApply(r){if(HED.rzm=='dup'){hedSaveNow();var id=hedDupProject(HED.p.id,hedt('rz_copy_s'));if(!id)return;HED.pop='';hedOpenProject(id,true);hedSetRatio(r);toast(hedt('rz_done'));return}hedSetRatio(r)}
function hedRzCustom(){var w=parseFloat(($('#hedrzw')||{}).value),h=parseFloat(($('#hedrzh')||{}).value);if(!(w>0&&h>0)||w/h>4||h/w>4){toast(hedt('rz_bad'));return}hedRzApply('c:'+hedR(w,2)+':'+hedR(h,2))}
function hedResizeBody(){var cr=HED.p.ratio,d0=hedDims(),gg=gcdF(d0.W,d0.H);
 if(!HED.rzm)return'<div class="hedrzo"><button type="button" class="hedrzb" data-ha="rzmode:dup"><span class="hedtic">'+hi('copy')+'</span><span><b>'+hedt('rz_dup')+'</b><small>'+hedt('rz_dup_d')+'</small></span></button><button type="button" class="hedrzb" data-ha="rzmode:smart"><span class="hedtic">'+hi('resize')+'</span><span><b>'+hedt('rz_smart')+'</b><small>'+hedt('rz_smart_d')+'</small></span></button></div>';
 return'<div class="hedrzh"><button type="button" class="hedbt" data-ha="rzback">'+hi('l')+'<span>'+hedt('rz_back')+'</span></button><b>'+hedt(HED.rzm=='dup'?'rz_dup':'rz_smart')+'</b></div>'+(HED.rzm=='smart'?(hedPC=HED.p,hTog('@st.smart',hedt('set_smart'))):'')
 +'<div class="hedrz">'+HEDRZ.map(function(q){var mx=Math.max(q[1],q[2]),bw=Math.max(8,Math.round(q[1]/mx*46)),bh=Math.max(8,Math.round(q[2]/mx*46));return'<button type="button" class="hedrzc'+(cr==q[0]?' on':'')+'" data-ha="rz:'+q[0]+'"><span class="hedrzv"><i style="width:'+bw+'px;height:'+bh+'px"></i></span><b>'+hedt('rz_'+q[3])+'</b><em>'+q[1]+':'+q[2]+'</em></button>'}).join('')+'</div><h5>'+hedt('rz_custom')+'</h5><div class="hednum"><label>'+hedt('width')+'<input type="number" class="hedn" id="hedrzw" min="1" max="100" step="1" inputmode="decimal" value="'+Math.round(d0.W/gg)+'"></label><label>'+hedt('height')+'<input type="number" class="hedn" id="hedrzh" min="1" max="100" step="1" inputmode="decimal" value="'+Math.round(d0.H/gg)+'"></label></div><div class="hedgr2">'+hBtn('rzc','check',hedt('rz_apply'),'hedgo')+'</div><p class="hedhint">'+d0.W+'×'+d0.H+'</p>'}
/* ---- smart guides, magnetic snapping, spacing indicators ---- */
function hedBox(c){var m=c._m;if(!m)return null;var r=m.lr,Q=[hedPt(m,r[0],r[1]),hedPt(m,r[0]+r[2],r[1]),hedPt(m,r[0]+r[2],r[1]+r[3]),hedPt(m,r[0],r[1]+r[3])],l=1e9,t=1e9,rr=-1e9,b=-1e9;Q.forEach(function(q){l=Math.min(l,q[0]);rr=Math.max(rr,q[0]);t=Math.min(t,q[1]);b=Math.max(b,q[1])});return{l:l,t:t,r:rr,b:b}}
function hedDimOf(c){var b=hedBox(c);return b?{cx:(b.l+b.r)/2,y:b.b,text:Math.round(b.r-b.l)+' × '+Math.round(b.b-b.t)}:null}
function hedSnapOn(){return hedSt('snap',1)!=0&&!HED.snapTmp&&!HED.snapHold&&!HED.mod}
function hedMvInit(g){var gm=hedGrp(g.c).filter(function(x){return x.k!='audio'&&!hedLocked(x)&&!x.hid});if(gm.indexOf(g.c)<0)gm.push(g.c);g.gm=gm.map(function(x){return{c:x,x0:x.x,y0:x.y}});g.ids={};var bb=null;gm.forEach(function(x){g.ids[x.id]=1;var b=hedBox(x);if(!b)return;bb=bb?{l:Math.min(bb.l,b.l),t:Math.min(bb.t,b.t),r:Math.max(bb.r,b.r),b:Math.max(bb.b,b.b)}:b});g.bb0=bb}
function hedSnapMove(g,s){var d=hedDims(),W=d.W,H=d.H,bb=g.bb0;g.gm.forEach(function(q){if(q.c!==g.c){q.c.x=q.x0+(g.c.x-g.x0);q.c.y=q.y0+(g.c.y-g.y0)}});if(!bb){HED.sg=null;return}
 var ddx=(g.c.x-g.x0)/100*W,ddy=(g.c.y-g.y0)/100*H,box={l:bb.l+ddx,r:bb.r+ddx,t:bb.t+ddy,b:bb.b+ddy},on=hedSnapOn(),mag=on&&hedSt('msnap',1)!=0,sgOn=hedSt('sg',1)!=0,gs=hedSt('gsnap',0)!=0,th=(3+hedSt('sens',5)*1.7)*s,eps=Math.max(.75,.9*s),sg={v:[],h:[],sp:[],grid:gs,dim:null};
 var oth=hedVisAt(hedTNow()).filter(function(x){return!g.ids[x.id]}).map(function(x){return hedBox(x)}).filter(function(b){return b&&!(b.r-b.l>=W*.98&&b.b-b.t>=H*.98)});
 var gd=HED.p.gd||[],gstep=Math.max(8,Math.min(W,H)/12);
 var cands=function(ax){var out=[],L=ax=='x'?W:H,i;[0,L/2,L].forEach(function(v){out.push({v:v,full:1})});gd.forEach(function(q){if((q.a=='v')==(ax=='x'))out.push({v:L*q.v/100,full:1})});if(gs&&mag)for(i=0;i*gstep<=L+1;i++)out.push({v:i*gstep,full:1,grid:1});
  oth.forEach(function(b){var a=ax=='x'?[b.l,(b.l+b.r)/2,b.r]:[b.t,(b.t+b.b)/2,b.b];a.forEach(function(v){out.push({v:v,b:b})})});return out};
 var axis=function(ax){var cs=cands(ax),ms=ax=='x'?[box.l,(box.l+box.r)/2,box.r]:[box.t,(box.t+box.b)/2,box.b],best=null;
  if(mag)cs.forEach(function(c){ms.forEach(function(m){var df=c.v-m;if(Math.abs(df)<=th&&(best===null||Math.abs(df)<Math.abs(best)))best=df})});
  if(best!==null){if(ax=='x'){box.l+=best;box.r+=best}else{box.t+=best;box.b+=best}ms=ax=='x'?[box.l,(box.l+box.r)/2,box.r]:[box.t,(box.t+box.b)/2,box.b]}
  if(sgOn)cs.forEach(function(c){if(c.grid)return;ms.forEach(function(m){if(Math.abs(c.v-m)<=eps){var ln=ax=='x'?{p:c.v,a:c.full?0:Math.min(box.t,c.b.t),z:c.full?H:Math.max(box.b,c.b.b)}:{p:c.v,a:c.full?0:Math.min(box.l,c.b.l),z:c.full?W:Math.max(box.r,c.b.r)};(ax=='x'?sg.v:sg.h).push(ln)}})});
  return best!==null};
 var sx=axis('x'),sy=axis('y');
 /* equal spacing + distance labels */
 var spc=function(ax){var lo=ax=='x'?'l':'t',hi2=ax=='x'?'r':'b',olo=ax=='x'?'t':'l',ohi=ax=='x'?'b':'r',Lmax=ax=='x'?W:H,ov=oth.filter(function(b){return b[olo]<box[ohi]&&b[ohi]>box[olo]}),A=null,B=null;
  ov.forEach(function(b){if(b[hi2]<=box[lo]+eps){if(!A||b[hi2]>A[hi2])A=b}else if(b[lo]>=box[hi2]-eps){if(!B||b[lo]<B[lo])B=b}});
  var ga=A?box[lo]-A[hi2]:box[lo],gb=B?B[lo]-box[hi2]:Lmax-box[hi2],eq=false,done=ax=='x'?sx:sy;
  if(A&&B&&!done&&mag&&Math.abs(ga-gb)<=th){var sh=(gb-ga)/2;box[lo]+=sh;box[hi2]+=sh;ga+=sh;gb-=sh;eq=true}
  else if(A&&B&&Math.abs(ga-gb)<=eps)eq=true;
  else if(!done&&mag){var AA=null,BB=null;ov.forEach(function(b){if(A&&b!==A&&b[hi2]<=A[lo]+eps&&(!AA||b[hi2]>AA[hi2]))AA=b;if(B&&b!==B&&b[lo]>=B[hi2]-eps&&(!BB||b[lo]<BB[lo]))BB=b});
   if(A&&AA&&Math.abs(ga-(A[lo]-AA[hi2]))<=th){var sh2=(A[lo]-AA[hi2])-ga;box[lo]+=sh2;box[hi2]+=sh2;ga+=sh2;gb-=sh2;eq=true}else if(B&&BB&&Math.abs(gb-(BB[lo]-B[hi2]))<=th){var sh3=gb-(BB[lo]-B[hi2]);box[lo]+=sh3;box[hi2]+=sh3;ga+=sh3;gb-=sh3;eq=true}}
  if(!sgOn)return;var mid=ax=='x'?(Math.max(box.t,A?A.t:box.t,B?B.t:box.t)+Math.min(box.b,A?A.b:box.b,B?B.b:box.b))/2:(Math.max(box.l,A?A.l:box.l,B?B.l:box.l)+Math.min(box.r,A?A.r:box.r,B?B.r:box.r))/2;
  var seg=function(p1,p2,eqf){if(p2-p1<2)return;sg.sp.push({ax:ax,p1:p1,p2:p2,m:mid,t:Math.round(p2-p1),eq:eqf})};
  seg(A?A[hi2]:0,box[lo],eq);seg(box[hi2],B?B[lo]:Lmax,eq)};
 spc('x');spc('y');
 g.gm.forEach(function(q){q.c.x=q.x0+(box.l-bb.l)/W*100;q.c.y=q.y0+(box.t-bb.t)/H*100});
 sg.dim={cx:(box.l+box.r)/2,y:box.b,text:Math.round(box.r-box.l)+' × '+Math.round(box.b-box.t)};HED.sg=sg;
 g.gm.forEach(function(q){if(q.c!==g.c&&q.c.kf&&q.c.kf.length)hedKfUpsert(q.c)})}
function hedPill(x,u,cx,cy,t,col){x.save();x.font='700 '+(11*u)+'px sans-serif';var w=x.measureText(t).width+10*u,h=17*u,l=cx-w/2,tp=cy-h/2;x.fillStyle=col;x.beginPath();if(x.roundRect)x.roundRect(l,tp,w,h,8*u);else x.rect(l,tp,w,h);x.fill();x.fillStyle='#fff';x.textAlign='center';x.textBaseline='middle';x.fillText(t,cx,cy+.5*u);x.restore()}
function hedSgDraw(x,d,s){var u=1/s,g=HED.sg,gd=HED.p.gd||[],PK='#ff2d87',c0=hedSelC();
 if(gd.length&&hedSt('gshow',1)!=0){x.save();x.strokeStyle='rgba(0,200,255,.9)';x.lineWidth=u;x.setLineDash([6*u,4*u]);gd.forEach(function(q){x.beginPath();if(q.a=='v'){x.moveTo(d.W*q.v/100,0);x.lineTo(d.W*q.v/100,d.H)}else{x.moveTo(0,d.H*q.v/100);x.lineTo(d.W,d.H*q.v/100)}x.stroke()});x.restore()}
 if(c0&&c0.g&&!HED.cg){x.save();x.strokeStyle=HED.th.g;x.lineWidth=u*1.5;x.setLineDash([5*u,4*u]);hedGrp(c0).forEach(function(q){if(q===c0||q.hid||!q._m||!(HED.t>=q.s&&HED.t<q.s+q.d))return;var b=hedBox(q);if(b)x.strokeRect(b.l,b.t,b.r-b.l,b.b-b.t)});x.restore()}
 if(!g)return;x.save();
 if(g.grid){var gs=Math.max(8,Math.min(d.W,d.H)/12),i;x.strokeStyle='rgba(255,255,255,.16)';x.lineWidth=u;x.beginPath();for(i=gs;i<d.W;i+=gs){x.moveTo(i,0);x.lineTo(i,d.H)}for(i=gs;i<d.H;i+=gs){x.moveTo(0,i);x.lineTo(d.W,i)}x.stroke()}
 x.strokeStyle=PK;x.fillStyle=PK;x.lineWidth=1.4*u;
 (g.v||[]).forEach(function(l){x.beginPath();x.moveTo(l.p,l.a);x.lineTo(l.p,l.z);x.stroke()});(g.h||[]).forEach(function(l){x.beginPath();x.moveTo(l.a,l.p);x.lineTo(l.z,l.p);x.stroke()});
 (g.sp||[]).forEach(function(q){var h=q.ax=='x';x.beginPath();if(h){x.moveTo(q.p1,q.m);x.lineTo(q.p2,q.m);x.moveTo(q.p1,q.m-5*u);x.lineTo(q.p1,q.m+5*u);x.moveTo(q.p2,q.m-5*u);x.lineTo(q.p2,q.m+5*u)}else{x.moveTo(q.m,q.p1);x.lineTo(q.m,q.p2);x.moveTo(q.m-5*u,q.p1);x.lineTo(q.m+5*u,q.p1);x.moveTo(q.m-5*u,q.p2);x.lineTo(q.m+5*u,q.p2)}x.stroke();hedPill(x,u,h?(q.p1+q.p2)/2:q.m,h?q.m:(q.p1+q.p2)/2,String(q.t)+(q.eq?' =':''),PK)});
 if(g.dim)hedPill(x,u,g.dim.cx,Math.min(d.H-12*u,g.dim.y+16*u),g.dim.text,'rgba(20,20,20,.82)');
 if(g.rot!=null&&HED.hp)hedPill(x,u,HED.hp.r[0],HED.hp.r[1]+(HED.hp.below?1:-1)*HED.hp.R*1.9,Math.round(g.rot)+'°','rgba(20,20,20,.82)');
 x.restore()}
function hedNudge(k,sh){var c=hedSelC();if(!c||c.k=='audio'||hedLocked(c))return;var d=hedDims(),st=sh?10:1;hedHist('nudge');hedGrp(c).forEach(function(q){if(k=='ArrowLeft')q.x-=st/d.W*100;else if(k=='ArrowRight')q.x+=st/d.W*100;else if(k=='ArrowUp')q.y-=st/d.H*100;else q.y+=st/d.H*100;if(q.kf&&q.kf.length)hedKfUpsert(q)});hedDrawSoon();hedSaveSoon()}
function hedAct2(k,g,c){switch(k){
 case'lsm':HED.lsm=HED.lsm?0:1;var sc=HED.sel?hedCl(HED.sel):null;HED.ms=HED.lsm&&sc?hedGrp(sc).map(function(x){return x.id}):[];hedPanel();break;
 case'lms':hedSelClip(g);break;case'lgrp':case'lungrp':case'lhid':case'llk':case'ldel':hedBulk(k);break;case'clk':hedToggleLk(g);break;
 case'grpgo':if(c){HED.lsm=1;HED.ms=hedGrp(c).map(function(x){return x.id});HED.pop='layers';hedPanel()}break;
 case'rpl':if(c){HED.rpl=c.id;var fi=$('#hedfr');fi.accept=c.k=='audio'?'audio/*':'video/*,image/*';fi.click()}break;case'rev':hedReverse();break;case'hgo':hedHandleGo(g);break;case'hex':hedExtend(g,'clip');break;case'hexp':hedExtend(g,'tl');break;case'rvstop':hedRvStop();break;case'rstset':hedConfirm(hedt('rst_set_q'),hedResetSettings);break;case'rst':hedConfirm(hedt(g=='fx'?'rst_fx_q':'rst_all_q'),function(){if(g=='fx')hedResetFx();else hedResetAll()});break;case'ff':hedFillFit(c);break;
 case'rzmode':HED.rzm=g;hedPanel();break;case'rzback':HED.rzm='';hedPanel();break;
 case'xpause':if(HED.job){HED.job.pz=HED.job.pz?0:1;if(HED.xs)HED.xs.pz=HED.job.pz;if(HED.job.onpz)HED.job.onpz(HED.job.pz);hedXUi(1)}break;
 case'xok':HED.xs=null;HED.xh=0;hedXUi(1);break;
 case'rsm':hedSetP(HED.p,'st.rs',hedSt('rs',0)?0:1);hedSizes();hedFitPv();hedTimeUi();hedSaveSoon();break;
 case'al':hedAlign(g);break;
 case'gdadd':hedHist();(HED.p.gd=HED.p.gd||[]).push({a:g,v:50});hedPanel();hedDrawSoon();hedSaveSoon();break;
 case'gdx':hedHist();HED.p.gd.splice(parseInt(g),1);hedPanel();hedDrawSoon();hedSaveSoon();break;
 case'gdclr':hedHist();HED.p.gd=[];hedPanel();hedDrawSoon();hedSaveSoon();break}}

/* ---- 4.0.0 translations (ta, en, si, ar) ---- */
Object.assign(HEDT,{
proj:['திட்டம்','Project','ව්‍යාපෘතිය','مشروع'],projs:['என் திட்டங்கள்','My projects','මගේ ව්‍යාපෘති','مشاريعي'],
newp_d:['புதிய வெற்றுத் திட்டத்தைத் தொடங்கு','Start a new blank project','නව හිස් ව්‍යාපෘතියක් අරඹන්න','ابدأ مشروعًا فارغًا جديدًا'],
no_proj:['இன்னும் திட்டங்கள் இல்லை. மேலே புதிய திட்டத்தை உருவாக்குங்கள்.','No projects yet. Create a new one above.','තවම ව්‍යාපෘති නැත. ඉහළින් අලුත් එකක් සාදන්න.','لا توجد مشاريع بعد. أنشئ مشروعًا جديدًا أعلاه.'],
copy:['நகல்','copy','පිටපත','نسخة'],dup:['நகலெடு','Duplicate','අනුපිටපත් කරන්න','تكرار'],ren:['மறுபெயரிடு','Rename','නම වෙනස් කරන්න','إعادة تسمية'],del:['நீக்கு','Delete','මකන්න','حذف'],
del_q:['இந்தத் திட்டத்தை நீக்கவா? இதைத் திரும்பப் பெற முடியாது.','Delete this project? This cannot be undone.','මෙම ව්‍යාපෘතිය මකන්නද? එය ආපසු ගත නොහැක.','حذف هذا المشروع؟ لا يمكن التراجع عن ذلك.'],
pname:['திட்டத்தின் பெயர்','Project name','ව්‍යාපෘතියේ නම','اسم المشروع'],okb:['சரி','OK','හරි','حسنًا'],
weak:['இந்தச் சாதனத்துக்கு இந்தத் தரம் அதிகம்: ஏற்றுமதி மெதுவாகலாம் அல்லது தோல்வியடையலாம். 1080P பரிந்துரைக்கப்படுகிறது.','This quality is heavy for this device: export may be slow or fail. 1080P is recommended.','මෙම උපාංගයට මෙම ගුණත්වය බරයි: අපනයනය මන්දගාමී විය හැකිය හෝ අසාර්ථක විය හැකිය. 1080P නිර්දේශයි.','هذه الجودة ثقيلة على هذا الجهاز: قد يكون التصدير بطيئًا أو يفشل. يُنصح بـ 1080P.'],
x_rt_note:['இந்த உலாவியில் WebCodecs இல்லை; ஏற்றுமதி நேரடி வேகத்தில் நடக்கும், தரம் குறையலாம்.','This browser has no WebCodecs: export runs in real time at a reduced size.','මෙම බ්‍රවුසරයේ WebCodecs නැත: අපනයනය තත්‍ය කාලයෙන් අඩු ප්‍රමාණයකින් සිදුවේ.','هذا المتصفح لا يدعم WebCodecs: يتم التصدير في الوقت الحقيقي بحجم أصغر.'],
l_aud:['ஒலி','Audio','ශබ්ද','الصوت'],l_grp:['குழு','Group','කණ්ඩායම','تجميع'],l_ungrp:['குழுவை நீக்கு','Ungroup','කණ්ඩායම ඉවත් කරන්න','فك التجميع'],l_hide:['மறை','Hide','සඟවන්න','إخفاء'],l_lock:['பூட்டு','Lock','අගුළු','قفل'],l_del:['நீக்கு','Delete','මකන්න','حذف'],
l_need2:['ஒலி தவிர குறைந்தது 2 அடுக்குகளைத் தேர்ந்தெடுக்கவும்','Select at least 2 layers (not audio)','ශබ්ද නොවන ස්තර 2ක් වත් තෝරන්න','اختر طبقتين على الأقل (غير الصوت)'],l_nogrp:['குழுவாக்கப்பட்டவை தேர்வில் இல்லை','No grouped layers selected','තෝරාගත් කණ්ඩායම් නැත','لا توجد مجموعات محددة'],
b_group:['குழு','Group','කණ්ඩායම','تجميع'],b_replace:['மாற்று','Replace','ප්‍රතිස්ථාපනය','استبدال'],b_reverse:['தலைகீழ்','Reverse','ප්‍රතිවර්ත','عكس'],
rev_note:['தலைகீழ் வீடியோவின் ஒலி முடக்கப்பட்டது; ஒலியைத் தனியே பிரித்துத் தலைகீழாக்கலாம்','Reversed video is muted; detach its audio and reverse that separately','ප්‍රතිවර්ත වීඩියෝව නිශ්ශබ්දයි; ශබ්දය වෙන් කර වෙනම ප්‍රතිවර්ත කරන්න','الفيديو المعكوس صامت؛ افصل صوته واعكسه على حدة'],
rev_wait:['ஒலியைத் தலைகீழாக்குகிறது…','Reversing audio…','ශබ්දය ප්‍රතිවර්ත කරමින්…','جارٍ عكس الصوت…'],rev_long:['15 நிமிடத்துக்கு மேற்பட்ட ஒலியைத் தலைகீழாக்க முடியாது','Audio longer than 15 min cannot be reversed','මිනිත්තු 15කට වැඩි ශබ්දය ප්‍රතිවර්ත කළ නොහැක','لا يمكن عكس صوت أطول من 15 دقيقة'],
rpl_bad:['இந்த வகைக் கோப்பு இந்த அடுக்குக்குப் பொருந்தாது','This file type does not fit this layer','මෙම ගොනු වර්ගය මෙම ස්තරයට නොගැළපේ','هذا النوع من الملفات لا يناسب هذه الطبقة'],
rz_dup:['நகலெடுத்து அளவு மாற்று','Duplicate & Resize','අනුපිටපත් කර ප්‍රමාණය වෙනස් කරන්න','تكرار وتغيير الحجم'],rz_dup_d:['பழைய திட்டம் அப்படியே இருக்கும்; புதிய அளவில் நகல் உருவாகும்','Keeps the old project and makes a copy in the new size','පරණ ව්‍යාපෘතිය තබා නව ප්‍රමාණයෙන් පිටපතක් සාදයි','يحتفظ بالمشروع القديم وينشئ نسخة بالحجم الجديد'],
rz_smart:['ஸ்மார்ட் மறு அளவு','Smart Resize','ස්මාර්ට් ප්‍රමාණ වෙනස','تغيير ذكي للحجم'],rz_smart_d:['இந்தத் திட்டத்தையே புதிய அளவுக்கு மாற்றும் (Resize this design)','Changes this project itself to the new size (Resize this design)','මෙම ව්‍යාපෘතියම නව ප්‍රමාණයට වෙනස් කරයි (Resize this design)','يغيّر هذا المشروع نفسه إلى الحجم الجديد (Resize this design)'],
rz_back:['பின்','Back','ආපසු','رجوع'],rz_copy_s:['புதிய அளவு','resized','නව ප්‍රමාණය','حجم جديد'],rz_done:['புதிய அளவில் நகல் உருவானது; அசல் பாதுகாப்பாக உள்ளது','Copy created in the new size; the original is safe','නව ප්‍රමාණයෙන් පිටපත සාදා ඇත; මුල් එක ආරක්ෂිතයි','تم إنشاء نسخة بالحجم الجديد؛ الأصل محفوظ'],
set_smart:['மறு அளவில் அடுக்குகளைத் தானாகப் பொருத்து','Smart-adjust layers when resizing','ප්‍රමාණය වෙනස් කිරීමේදී ස්තර ස්වයංක්‍රීයව සකසන්න','ضبط الطبقات تلقائيًا عند تغيير الحجم'],
set_adv:['மேம்பட்ட கட்டுப்பாடுகள்','Advanced Controls','උසස් පාලන','عناصر تحكم متقدمة'],set_msnap:['காந்த ஸ்னாப்பிங்','Magnetic snapping','චුම්බක ස්නැප්','الالتصاق المغناطيسي'],set_sg:['ஸ்மார்ட் வழிகாட்டிகள்','Smart Guides','ස්මාර්ට් මඟපෙන්වන','إرشادات ذكية'],
set_gsnap:['கிரிட் ஸ்னாப்பிங்','Grid snapping','ජාල ස්නැප්','الالتصاق بالشبكة'],set_sens:['ஸ்னாப் உணர்திறன்','Snap sensitivity','ස්නැප් සංවේදීතාව','حساسية الالتصاق'],set_tmp:['ஸ்னாப்பிங்கைத் தற்காலிகமாக நிறுத்து','Temporarily disable snapping','ස්නැප් තාවකාලිකව අක්‍රිය කරන්න','تعطيل الالتصاق مؤقتًا'],
set_tmp_h:['இழுக்கும்போது காந்த-நிறுத்த பொத்தானை (அல்லது Alt/Ctrl) அழுத்திப் பிடித்தாலும் தற்காலிகமாக நிற்கும்','Or hold the magnet-off button (or Alt/Ctrl) while dragging','ඇදගෙන යන විට චුම්බක-නැවතුම් බොත්තම (හෝ Alt/Ctrl) අල්ලාගෙන සිටින්න','أو اضغط مطولًا زر إيقاف المغناطيس (أو Alt/Ctrl) أثناء السحب'],
set_gd:['தனிப்பயன் வழிகாட்டிகள்','Custom guides','අභිරුචි මඟපෙන්වන','إرشادات مخصصة'],set_gshow:['வழிகாட்டிகளைக் காட்டு','Show custom guides','අභිරුචි මඟපෙන්වන පෙන්වන්න','إظهار الإرشادات المخصصة'],set_gdv:['நெடுவரி வழிகாட்டி','Vertical guide','සිරස් මඟපෙන්වන','إرشاد عمودي'],set_gdh:['கிடைவரி வழிகாட்டி','Horizontal guide','තිරස් මඟපෙන්වන','إرشاد أفقي'],set_gdc:['அனைத்தையும் நீக்கு','Clear all','සියල්ල ඉවත් කරන්න','مسح الكل'],
al_h:['சீரமை','Align','පෙළගැස්ම','محاذاة']});

/* ================= 4.1.0 — crisp overlay, export card, fill/fit, long-music waveform ================= */
Object.assign(HEDI,{fill2:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><rect x="8.5" y="8.5" width="7" height="7" rx="1.2"/>',fit2:'<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/>',
opacity:'<path d="M12 3.5c3.6 4.3 6.2 7.2 6.2 10.3a6.2 6.2 0 01-12.4 0c0-3.1 2.6-6 6.2-10.3z"/><path d="M12 8v11.6"/>'});
function hedOvFit(){var ov=HED.ov,cv=HED.cv;if(!ov||!cv)return;var d=hedDims();ov.style.width=cv.style.width;ov.style.height=cv.style.height;ov.style.left=cv.offsetLeft+'px';ov.style.top=cv.offsetTop+'px';ov._l=cv.offsetLeft;ov._t=cv.offsetTop;
 var cw=parseFloat(cv.style.width)||cv.clientWidth,dpr=Math.min(2,window.devicePixelRatio||1),pw=Math.max(2,Math.round(cw*dpr)),ph=Math.round(pw*d.H/d.W);if(ov.width!=pw||ov.height!=ph){ov.width=pw;ov.height=ph}}
function hedOvDraw(d,t){var ov=HED.ov,cv=HED.cv;if(!ov){hedSelDraw(cv.getContext('2d'),d.W,t,cv.width/d.W);return}
 if(ov.style.width!=cv.style.width||ov.style.height!=cv.style.height||ov._l!=cv.offsetLeft||ov._t!=cv.offsetTop)hedOvFit();
 var o=ov.getContext('2d'),s=ov.width/d.W;o.setTransform(1,0,0,1,0,0);o.clearRect(0,0,ov.width,ov.height);o.setTransform(s,0,0,s,0,0);hedSelDraw(o,d.W,t,s);hedSgDraw(o,d,s)}
/* wave: bars use the max of the peaks they cover; canvas is capped at 3000px so bars are scaled for long clips */
function hedFillFit(c){if(!c||!(c.k=='video'||c.k=='image'))return;hedHist();c.fit=c.fit=='fill'?'fit':'fill';hedBar();hedPanel();hedDrawSoon();hedSaveSoon()}
function hedXBody(){var xs=HED.xs,d=hedDims(),mx=stMaxRes(),nm=['720P','1080P','2K','4K'];
 if(xs&&xs.st=='run'){var pc=Math.round(xs.p*100);return'<div class="hedxc run"><div class="hedxsvw">'+hedXSvg()+'</div><div class="hedxrow"><b id="hedxp">'+pc+'%</b><span id="hedxm">'+esc(xs.msg||'')+'</span></div><div class="hedxbar"><i id="hedxf" style="width:'+pc+'%"></i></div><p class="hedxn">'+hedt(HED.xo?'x_busy_rt':'x_note')+'</p><div class="hedgr2"><button type="button" class="hedbt" data-ha="xpause">'+hi(xs.pz?'play':'pause')+'<span>'+hedt(xs.pz?'x_resume':'x_pause')+'</span></button><button type="button" class="hedbt dng2" data-ha="cancel">'+hi('stop')+'<span>'+hedt('x_stop')+'</span></button></div></div>'}
 if(xs&&(xs.st=='ok'||xs.st=='err'))return'<div class="hedxc '+xs.st+'"><div class="hedxrow"><span class="hedxck">'+hi(xs.st=='ok'?'check':'close')+'</span><span id="hedxm" class="hedxms">'+esc(xs.msg||'')+'</span><button type="button" class="hedbt hedxok" data-ha="xok">'+hedt('okb')+'</button></div><div class="hedxbar"><i style="width:100%"></i></div></div>';
 var res=[1,2,3,4].map(function(i){return[i,nm[i-1]+(hedWeak(i)?hi('warn2','hedwi'):'')]}),weak=hedC(HED.p.res||2,1,4)>mx,rt=!(window.VideoEncoder&&window.AudioEncoder&&window.VideoFrame&&window.AudioData);
 return'<div class="hedsr hedcr"><label>'+hedt('fname')+'</label><input type="text" class="hedn hedname" id="hedname" placeholder="Multi Editor" value="'+esc(HED.xn)+'"></div>'+hCh('@res',res,hedC(HED.p.res||2,1,4))+hCh('@fps',[[24,'24'],[30,'30'],[60,'60']],HED.p.fps)
  +(weak?'<p class="hedwarn">'+hi('warn2')+'<span>'+hedt('weak')+'</span></p>':'')+(rt?'<p class="hedwarn">'+hi('warn2')+'<span>'+hedt('x_rt_note')+'</span></p>':'')
  +'<p class="hedhint">'+d.W+'×'+d.H+' · '+hedFmt(hedDur(),HED.p.fps)+'</p><div class="hedgr2">'+hBtn('exv','export',hedt('x_vid'),'hedgo')+hBtn('exp:png','image',hedt('x_png'))+hBtn('exp:jpg','image',hedt('x_jpg'))+'</div>'}
function hedXUi(full){if(!HED)return;var b=$('#hedxbtn'),xs=HED.xs;if(b){var run=!!(xs&&xs.st=='run'),ok=!!(xs&&xs.st=='ok'),er=!!(xs&&xs.st=='err'),pc=run?Math.round(xs.p*100):0,key=run?'r':ok?'o':er?'e':'n';b.classList.toggle('busy',run);b.classList.toggle('done',ok);b.classList.toggle('bad',er);
  if(b._k!=key){b._k=key;b.dataset.ha=(ok||er)?'xok':'pop:exp';b.innerHTML=run?'<i class="hedxbf"></i><span class="hedxbt"></span>':ok?hi('check')+'<span>'+hedt('x_ok_s')+'</span>':er?hi('close')+'<span>'+hedt('x_err_s')+'</span>':hi('export')+'<span>'+hedt('b_exp')+'</span>'}
  if(run){var f=b.querySelector('.hedxbf'),t=b.querySelector('.hedxbt');if(f)f.style.width=pc+'%';if(t)t.textContent=pc+'%'}}
 if(HED.pop!='exp')return;if(full){hedPanel();return}if(!xs||xs.st!='run')return;var f2=$('#hedxf'),p2=$('#hedxp'),m2=$('#hedxm');if(f2)f2.style.width=Math.round(xs.p*100)+'%';if(p2)p2.textContent=Math.round(xs.p*100)+'%';if(m2)m2.textContent=xs.msg||'';var n2=$('.hedxn');if(n2)n2.textContent=hedt(HED.xo?'x_busy_rt':'x_note')}
Object.assign(HEDT,{
an_nospot:['இங்கே "+" அனிமேஷன் இடங்கள் இல்லை','No animation (+) spots here','මෙහි "+" ඇනිමේෂන් ස්ථාන නැත','لا توجد مواضع (+) للحركة هنا'],an_note:['"+" பொத்தான் உள்ள இடங்களுக்கு மட்டுமே பொருந்தும்: தொடக்கம், இடைப்பகுதி (இணைப்பு), முடிவு','Applies only where a "+" button exists: start, between clips, end','"+" බොත්තම ඇති ස්ථානවලට පමණක්: ආරම්භය, අතර, අවසානය','يُطبَّق فقط حيث يوجد زر "+": البداية، بين المقاطع، النهاية'],
x_ok_s:['முடிந்தது','Done','අවසන්','تم'],x_err_s:['தோல்வி','Failed','අසාර්ථකයි','فشل'],x_pause:['இடைநிறுத்து','Pause','විරාමය','إيقاف مؤقت'],x_resume:['தொடர்','Resume','දිගටම','متابعة'],x_stop:['நிறுத்து','Stop','නවත්වන්න','إيقاف'],
x_note:['இந்தப் பலகையை மூடலாம் அல்லது பின்னணியில் வேறு வேலை செய்யலாம்; நடக்கும் ஏற்றுமதி பாதிக்கப்படாது, புதிய மாற்றங்கள் அதில் சேராது.','You can close this card or keep editing; the running export is not affected and new edits are not added to it.','මෙම කාඩ්පත වසා දැමිය හැක හෝ සංස්කරණය දිගටම කළ හැක; ධාවනය වන අපනයනයට බලපාන්නේ නැත, නව වෙනස්කම් එයට එක් නොවේ.','يمكنك إغلاق هذه البطاقة أو متابعة التحرير؛ لن يتأثر التصدير الجاري ولن تُضاف إليه التعديلات الجديدة.']});
HEDT.b_settings=['அமைப்பு','Settings','සැකසුම්','الإعدادات'];

/* ================= 4.2.0 — long-press move, outer trim handles, canva-style move/rotate handles, reset, reverse progress ================= */
Object.assign(HEDI,{rst:'<path d="M3.5 12a8.5 8.5 0 102.6-6.1"/><path d="M3.5 4v5h5"/>'});
function hedHPos(c){var pps=HED.z;D.querySelectorAll('.hedh[data-c="'+c.id+'"]').forEach(function(h){h.style.left=(h.classList.contains('l')?c.s*pps-16:(c.s+c.d)*pps)+'px'})}
function hedTlDown(e){var t=e.target,ts=$('#hedts');if(!t.closest)return;if(e.isPrimary){if(HED.drag&&HED.drag.timer)clearTimeout(HED.drag.timer);HED.tps={};HED.pz=null;HED.drag=null;HED.lpOn=0}HED.tps=HED.tps||{};HED.tps[e.pointerId]=[e.clientX,e.clientY];HED.lpx=e.clientX;HED.lpy=e.clientY;var ks=Object.keys(HED.tps);
 if(ks.length==2){if(HED.drag&&HED.drag.timer)clearTimeout(HED.drag.timer);var a=HED.tps[ks[0]],b=HED.tps[ks[1]];HED.pz={d:Math.hypot(a[0]-b[0],a[1]-b[1])||1,z:HED.z};HED.drag=null;return}
 var po=$('#hedhpo');if(po){if(t.closest('#hedhpo'))return;po.remove()}
 if(t.closest('.hedtn')||t.closest('.hedru')||t.closest('.hedjn')||t.closest('.hedkd')){HED.drag=null;return}
 var hh=t.closest('.hedh');if(hh){if(HED.pl||HED.gate)hedPause();var c=hedCl(hh.dataset.c);if(c&&!hedLocked(c)){HED.drag={k:hh.classList.contains('l')?'trl':'trr',kf0:c.kf?JSON.parse(JSON.stringify(c.kf)):null,c:c,x0:e.clientX,y0:e.clientY,s0:c.s,i0:c.i,d0:c.d,tr0:c.tr,moved:0,el:D.querySelector('.hedcl[data-c="'+c.id+'"]')};try{ts.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault()}return}
 var el=t.closest('.hedcl');if(el){if(HED.pl||HED.gate)hedPause();var c2=hedCl(el.dataset.c);if(!c2)return;var g={k:hedLocked(c2)?'tap':'lp',kf0:c2.kf?JSON.parse(JSON.stringify(c2.kf)):null,c:c2,x0:e.clientX,y0:e.clientY,s0:c2.s,i0:c2.i,d0:c2.d,tr0:c2.tr,moved:0,el:el};HED.drag=g;if(g.k=='lp')g.timer=setTimeout(function(){hedLpGo(g)},260);try{ts.setPointerCapture(e.pointerId)}catch(x){}return}
 HED.drag={k:'bg',x0:e.clientX,y0:e.clientY}}
/* small VN-style pop-over beside a trim handle */
function hedHandleGo(side){var c=hedCl(HED.hpoC);var po=$('#hedhpo');if(po)po.remove();if(!c)return;hedGo(side=='l'?c.s:c.s+c.d);hedTl()}
function hedMainAppend(m,ctx,s){if(m.type=='audio'||(ctx.role||'vid')!='vid')return s;var vt=ctx.tr?hedTr(ctx.tr):HED.p.tr.filter(function(x){return x.r=='vid'})[0];if(!vt)return s;var en=0;HED.p.cl.forEach(function(c){if(c.tr==vt.id)en=Math.max(en,c.s+c.d)});return s>en-1e-6?en:s}
/* ---- fit / fill ---- */
function hedFillFit(c){if(!c||!(c.k=='video'||c.k=='image'))return;hedHist();c.fit=c.fit=='fill'?'fit':'fill';c.x=0;c.y=0;c.sc=100;c.rot=0;if(c.kf&&c.kf.length)c.kf=[];hedBar();hedPanel();hedDrawSoon();hedSaveSoon()}
/* ---- reset ---- */
function hedResetFx(){hedHist();var ks=['x','y','sc','rot','flx','fly','op','fit','cr','col','ef','ai','ao','ad','kb','bm','mk','kf'];HED.p.cl.forEach(function(c){var def=hedClip(c.k,c.tr,c.s,c.d,{});ks.forEach(function(k){if(def[k]===undefined)delete c[k];else c[k]=JSON.parse(JSON.stringify(def[k]))});if(c.k=='audio'){c.vol=100;c.fi=0;c.fo=0;c.mu=0}c._tl=null});HED.p.zon=0;HED.p.cl.forEach(function(c){delete c.z});HED.pop='';toast(hedt('rst_done'));hedAll()}
function hedResetAll(){hedHist();Object.keys(HED.els).forEach(function(k){var e=HED.els[k];try{e.pause();e.removeAttribute('src');e.load()}catch(x){}delete HED.els[k]});HED.p.cl=[];HED.p.zon=0;HED.sel='';HED.ms=[];HED.pop='';hedPause();HED.t=0;toast(hedt('rst_done'));hedAll()}
/* ---- reverse with visible progress on the layer ---- */
function hedRvProg(id,p){var c=hedCl(id);if(c)c._rv=p;var el=D.querySelector('.hedcl[data-c="'+id+'"]');if(!el)return;var b=el.querySelector('.hedrvp');if(p==null){if(b)b.remove();return}if(!b){b=D.createElement('div');b.className='hedrvp';b.innerHTML='<i></i><span></span>';el.appendChild(b)}b.firstChild.style.width=p+'%';b.lastChild.textContent=hedt('rev_prog')+' '+Math.round(p)+'%'}
function hedRvDone(id){hedRvProg(id,100);setTimeout(function(){var c=hedCl(id);if(c)delete c._rv;D.querySelectorAll('.hedcl[data-c="'+id+'"] .hedrvp').forEach(function(b){b.remove()});if(HED)hedBar()},400)}
function hedWavStA(b,rev,cb){var ch=Math.min(2,b.numberOfChannels),n=b.length,sr=b.sampleRate,ab=new ArrayBuffer(44+n*ch*2),v=new DataView(ab),w=function(p,s){for(var i=0;i<s.length;i++)v.setUint8(p+i,s.charCodeAt(i))},d=[],j;for(j=0;j<ch;j++)d.push(b.getChannelData(j));
 w(0,'RIFF');v.setUint32(4,36+n*ch*2,true);w(8,'WAVE');w(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,ch,true);v.setUint32(24,sr,true);v.setUint32(28,sr*ch*2,true);v.setUint16(32,ch*2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*ch*2,true);
 var o=44,i=0,CH=240000;return new Promise(function(ok){var step=function(){var e=Math.min(n,i+CH);for(;i<e;i++){var s=rev?n-1-i:i;for(j=0;j<ch;j++){v.setInt16(o,Math.max(-1,Math.min(1,d[j][s]))*32767,true);o+=2}}if(cb)cb(i/n);if(i<n)setTimeout(step,0);else ok(new Blob([ab],{type:'audio/wav'}))};step()})}
/* ---- animate-all helpers ---- */
function hedAnCur(mode){var vals=[];HED.p.tr.forEach(function(tr){if(tr.r!='vid'&&tr.r!='ovl')return;var cl=HED.p.cl.filter(function(c){return c.tr==tr.id}).sort(function(a,b){return a.s-b.s});cl.forEach(function(c,i){var nx=cl[i+1],pv=cl[i-1],aN=nx&&Math.abs(c.s+c.d-nx.s)<.06,aP=pv&&Math.abs(pv.s+pv.d-c.s)<.06;if(mode=='in'&&!aP)vals.push(c.ai||'');else if(mode=='out'&&!aN)vals.push(c.ao||'');else if(mode=='mid'&&aN)vals.push(c.ao||'')})});
 if(!vals.length)return null;return vals.every(function(v){return v==vals[0]})?vals[0]:null}
function hedPrevRange(a,b){if(b-a<.2)b=a+.2;hedPause();HED.stopAt=Math.min(b,hedDur());hedGo(Math.max(0,a));hedPlay()}
function hedAnPrev(c,k){if(!c)return;var ad=c.ad||.6;if(k=='in'&&c.ai)hedPrevRange(c.s-.15,c.s+ad+.5);else if(k=='out'&&c.ao)hedPrevRange(c.s+c.d-ad-.5,c.s+c.d+.15)}
/* ---- snapping while scaling / rotating: match the size and angle of other layers ---- */
function hedSnapRot(c,an){if(!hedSnapOn()||hedSt('msnap',1)==0)return an;var th=2+hedSt('sens',5)*.7,best=null,bd=th,cs=[-180,-135,-90,-45,0,45,90,135,180];hedVisAt(hedTNow()).forEach(function(o){if(o.id!=c.id&&o.k!='audio')cs.push(((o.rot+540)%360)-180)});cs.forEach(function(v){var d=Math.abs(an-v);if(d<bd){bd=d;best=v}});return best==null?an:best}
function hedSnapScale(c,ns){HED.sg={dim:hedDimOf(c)};if(!hedSnapOn()||hedSt('msnap',1)==0||!c._m)return ns;var b=hedBox(c),d=hedDims(),W=d.W,H=d.H;if(!b||!c.sc)return ns;var cx=(b.l+b.r)/2,cy=(b.t+b.b)/2,wc=b.r-b.l,hc=b.b-b.t,k0=ns/c.sc,kc=W/((HED.ov&&HED.ov.clientWidth)||W),th=(3+hedSt('sens',5)*1.7)*kc,
  oth=hedVisAt(hedTNow()).filter(function(x){return x.id!=c.id&&x.k!='audio'&&!(c.g&&x.g==c.g)}).map(hedBox).filter(function(q){return q&&!(q.r-q.l>=W*.98&&q.b-q.t>=H*.98)}),cand=[],gd=HED.p.gd||[];
 var addX=function(v,src){if(v<cx&&cx-b.l>1)cand.push({k:(cx-v)/(cx-b.l),ax:'x',v:v,src:src});if(v>cx&&b.r-cx>1)cand.push({k:(v-cx)/(b.r-cx),ax:'x',v:v,src:src})},addY=function(v,src){if(v<cy&&cy-b.t>1)cand.push({k:(cy-v)/(cy-b.t),ax:'y',v:v,src:src});if(v>cy&&b.b-cy>1)cand.push({k:(v-cy)/(b.b-cy),ax:'y',v:v,src:src})};
 [0,W].forEach(function(v){addX(v)});[0,H].forEach(function(v){addY(v)});gd.forEach(function(q){if(q.a=='v')addX(W*q.v/100);else addY(H*q.v/100)});
 oth.forEach(function(q){addX(q.l,q);addX(q.r,q);addX(q.l+(q.r-q.l)/2,q);addY(q.t,q);addY(q.b,q);addY(q.t+(q.b-q.t)/2,q);if(wc>1)cand.push({k:(q.r-q.l)/wc,ax:'w',src:q});if(hc>1)cand.push({k:(q.b-q.t)/hc,ax:'h',src:q})});
 var best=null,be=th;cand.forEach(function(q){var e=Math.abs(q.k-k0)*Math.max(wc,hc);if(e<be&&q.k>.05){be=e;best=q}});if(!best)return ns;var k=best.k;
 var sg={v:[],h:[],sp:[],dim:null},nb={l:cx-(cx-b.l)*k,r:cx+(b.r-cx)*k,t:cy-(cy-b.t)*k,b:cy+(b.b-cy)*k};
 if(best.ax=='x'){sg.v.push({p:best.v,a:best.src?Math.min(nb.t,best.src.t):0,z:best.src?Math.max(nb.b,best.src.b):H})}else if(best.ax=='y'){sg.h.push({p:best.v,a:best.src?Math.min(nb.l,best.src.l):0,z:best.src?Math.max(nb.r,best.src.r):W})}
 sg.dim={cx:(nb.l+nb.r)/2,y:nb.b,text:Math.round(nb.r-nb.l)+' × '+Math.round(nb.b-nb.t)+((best.ax=='w'||best.ax=='h')?' =':'')};HED.sg=sg;return c.sc*k}
Object.assign(HEDT,{
h_gos:['தொடக்கம்','Start','ආරම්භය','البداية'],h_goe:['முடிவு','End','අවසානය','النهاية'],h_exs:['மூலத் தொடக்கம் வரை','Extend to start','ආරම්භය දක්වා දිගු කරන්න','تمديد إلى البداية'],h_exe:['வீடியோ முடிவு வரை','Extend to end','අවසානය දක්වා දිගු කරන්න','تمديد إلى النهاية'],h_none:['இனி நீட்ட இடமில்லை','No more room to extend','තවත් දිගු කළ නොහැක','لا مجال للتمديد'],
rev_prog:['பின்னோக்கி மாற்றப்படுகிறது…','Reversing…','ප්‍රතිවර්තනය වෙමින්…','جارٍ العكس…'],
b_reset:['மீட்டமை','Reset','යළි සකසන්න','إعادة ضبط'],rst_fx:['அடுக்கு மாற்றங்களை மீட்டமை','Reset layer edits','ස්ථර සංස්කරණ යළි සකසන්න','إعادة ضبط تعديلات الطبقات'],rst_fx_d:['நிலை, அளவு, சுழற்சி, வடிகட்டி, ஒளிபுகாமை, அனிமேஷன், கீ-பிரேம் இயல்புக்கு வரும்; கிளிப்களும் நேரமும் அப்படியே','Position, size, rotation, filters, opacity, animation and keyframes go back to default; clips and timing stay','ස්ථානය, ප්‍රමාණය, භ්‍රමණය, පෙරහන්, ඇනිමේෂන් සහ කීෆ්‍රේම් පෙරනිමියට; ක්ලිප් සහ කාලය එලෙසම','يعود الموضع والحجم والدوران والفلاتر والشفافية والحركة والإطارات المفتاحية للوضع الافتراضي؛ تبقى المقاطع والتوقيت'],
rst_all:['முழுத் திட்டத்தையும் அழி','Clear whole project','මුළු ව්‍යාපෘතියම හිස් කරන්න','مسح المشروع بالكامل'],rst_all_d:['எல்லா அடுக்குகளும் நீக்கப்படும் (செயல்தவிர்ப்பு மூலம் மீட்கலாம்)','All layers are removed (you can bring them back with Undo)','සියලු ස්ථර ඉවත් වේ (Undo මගින් ආපසු ගත හැක)','تُحذف كل الطبقات (يمكن استرجاعها بالتراجع)'],
rst_fx_q:['எல்லா அடுக்குகளின் மாற்றங்களையும் மீட்டமைக்கவா?','Reset the edits of all layers?','සියලු ස්ථරවල සංස්කරණ යළි සකසන්නද?','إعادة ضبط تعديلات كل الطبقات؟'],rst_all_q:['திட்டத்தில் உள்ள எல்லா அடுக்குகளையும் நீக்கவா?','Remove every layer from the project?','ව්‍යාපෘතියේ සියලු ස්ථර ඉවත් කරන්නද?','حذف كل الطبقات من المشروع؟'],rst_done:['மீட்டமைக்கப்பட்டது','Done','යළි සකසන ලදී','تمت إعادة الضبط'],
an_mixed:['அடுக்குகளில் வெவ்வேறு அனிமேஷன்கள் உள்ளன','Layers currently have different animations','ස්ථරවල විවිධ ඇනිමේෂන් ඇත','الطبقات تحتوي حاليًا على حركات مختلفة']});
HEDTT.reset='b_reset';

/* ================= 4.3.0 — video engine (load states, frame callbacks, pooled elements), ripple main track, handle options ================= */
var HEDVF=(typeof HTMLVideoElement!='undefined'&&HTMLVideoElement.prototype&&('requestVideoFrameCallback' in HTMLVideoElement.prototype));
function hedElReady(el){return!!el&&el.readyState>=2&&(el.videoWidth>0||el.tagName=='AUDIO')}
function hedLdMark(id,on){var e=D.querySelector('.hedcl[data-c="'+id+'"]');if(e)e.classList.toggle('hedld',!!on)}
function hedClipLoading(c){var m=HED.media[c.m];if(c.k=='video'){var el=HED.els[c.id];return!!((m&&m.thBusy)||(el&&!hedElReady(el)))}if(c.k=='image')return!!(m&&!m.img);if(c.k=='audio')return!!(m&&m.bp&&m.buf===undefined);return false}
function hedVfOff(el){if(el&&el._vf&&el.cancelVideoFrameCallback){try{el.cancelVideoFrameCallback(el._vf)}catch(e){}}if(el)el._vf=0}
function hedVfBind(el){if(!HEDVF||el._vf)return;var cb=function(){if(!HED||!HED.pl){el._vf=0;return}HED.vfDirty=1;el._vf=el.requestVideoFrameCallback(cb)};el._vf=el.requestVideoFrameCallback(cb)}
function hedElKill(id){var e=HED.els[id];if(!e)return;hedVfOff(e);try{e.pause();e.removeAttribute('src');e.load()}catch(x){}delete HED.els[id]}
function hedNear(c,t,a,b){return c.s-t<=a&&t-(c.s+c.d)<=b}
function hedVidCount(){return Object.keys(HED.els).filter(function(k){return HED.els[k].tagName=='VIDEO'}).length}
function hedEvict(keep){if(hedVidCount()<5)return;var t=HED.t,ids=Object.keys(HED.els).filter(function(k){var c=hedCl(k);return k!=keep&&HED.els[k].tagName=='VIDEO'&&(!c||!hedNear(c,t,2,.5))}).sort(function(a,b){return(HED.els[a]._lu||0)-(HED.els[b]._lu||0)});while(ids.length&&hedVidCount()>=5)hedElKill(ids.shift())}
function hedReleaseFar(a,b){if(!HED)return;var t=HED.t;Object.keys(HED.els).forEach(function(k){var c=hedCl(k),e=HED.els[k];if(!c){hedElKill(k);return}if(e.paused&&!hedNear(c,t,a,b))hedElKill(k)})}
function hedEl(c,o){var map=o&&o.els||HED.els,el=map[c.id],m=HED.media[c.m];if(el){el._lu=performance.now();return el}if(!m||!m.url)return null;var main=map===HED.els;if(main)hedEvict(c.id);
 el=D.createElement(c.k=='audio'?'audio':'video');el.preload='auto';el.playsInline=true;el.setAttribute('playsinline','');el.setAttribute('webkit-playsinline','');el._lu=performance.now();
 if(main){var cid=c.id,ready=function(){if(!HED||HED.els[cid]!==el)return;if(hedElReady(el))hedLdMark(cid,0);hedDrawSoon()};
  el.addEventListener('loadedmetadata',function(){if(!HED||HED.els[cid]!==el||el._ini)return;el._ini=1;if(!HED.pl)hedSync(HED.t,false)});
  ['loadeddata','canplay','seeked'].forEach(function(n){el.addEventListener(n,ready)});
  el.addEventListener('seeked',function(){if(el._pend!=null){var t=el._pend;el._pend=null;try{el.currentTime=t}catch(x){}}});
  el.addEventListener('waiting',function(){if(HED&&HED.pl&&HED.els[cid]===el)hedLdMark(cid,1)});el.addEventListener('playing',function(){hedLdMark(cid,0)});el.addEventListener('error',function(){hedLdMark(cid,0)});
  if(c.k=='video')hedLdMark(cid,1)}
 el.src=m.url;map[c.id]=el;return el}
function hedSeek(el,t){if(!el||el.readyState<1)return;t=hedC(t,0,Math.max(0,(el.duration||1e9)-.001));if(el.seeking){el._pend=t;return}if(Math.abs(el.currentTime-t)<.012)return;try{el.currentTime=t}catch(e){}}
/* media sync: only touches the DOM when something changed; drift is checked 4x a second */
function hedSync(tm,playing){var p=HED.p,mst=p.master/100,now=performance.now(),cl=p.cl,i;
 for(i=0;i<cl.length;i++){var c=cl[i];if(c.k!='video'&&c.k!='audio')continue;var tr=hedTr(c.tr),el=HED.els[c.id],on=tm>=c.s&&tm<c.s+c.d&&!(tr&&tr.hid);
  if(!on){if(el&&!el.paused){el.pause();hedVfOff(el)}if(c.k=='video'&&c.s>tm&&c.s-tm<1.2&&!c.rv){if(!el)el=hedEl(c);if(el&&el.paused)hedSeek(el,c.i)}continue}
  el=hedEl(c);if(!el)continue;var lt=tm-c.s,rvv=c.rv&&c.k=='video',src=rvv?c.i+(c.d-lt)*c.sp:c.i+lt*c.sp,fi=c.fi>0&&lt<c.fi?lt/c.fi:1,fo=c.fo>0&&c.d-lt<c.fo?(c.d-lt)/c.fo:1,v=hedC(c.vol/100*mst*fi*fo,0,1),mu=!!(c.mu||HED.xm||(tr&&tr.hid)),rate=hedC(c.sp,.0625,16);
  if(el._v!==v){try{el.volume=v}catch(e){}el._v=v}if(el._mu!==mu){el.muted=mu;el._mu=mu}if(el.playbackRate!=rate)el.playbackRate=rate;
  if(rvv){if(!el.paused)el.pause();hedSeek(el,src);continue}
  if(playing){if(el.paused){if(Math.abs(el.currentTime-src)>.1)hedSeek(el,src);var pr=el.play();if(pr&&pr.catch)pr.catch(function(){});el._dc=now}else if(now-(el._dc||0)>250){el._dc=now;if(Math.abs(el.currentTime-src)>.35)hedSeek(el,src)}if(c.k=='video'&&HEDVF&&!el._vf)hedVfBind(el)}
  else{if(!el.paused)el.pause();hedSeek(el,src)}}}
/* ---- cached draw order (re-sorted only when the project really changed) ---- */
function hedHash(s){var h=0,i;for(i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return h}
function hedSig(){var p=HED.p,n=p.cl.length,h=(n*131+p.tr.length*17+(p.zon?7:0))|0,i;for(i=0;i<n;i++){var c=p.cl[i];h=(h*31+((c.s*1000)|0)+((c.d*1000)|0)*3+(c.z||0)*5+(c.hid?11:0)+hedHash(c.tr)+hedHash(c.id))|0}for(i=0;i<p.tr.length;i++)h=(h*17+(p.tr[i].hid?3:1)+hedHash(p.tr[i].id))|0;return h}
function hedVisList(){var sg=hedSig();if(HED._va&&HED._va.sg===sg&&HED._va.p===HED.p)return HED._va.l;var p=HED.p,L=[];p.tr.forEach(function(tr,ti){if(tr.k!='v')return;p.cl.forEach(function(c){if(c.tr==tr.id)L.push([c,ti])})});
 if(p.zon)L.sort(function(a,b){var za=a[0].z==null?1e6+a[1]:a[0].z,zb=b[0].z==null?1e6+b[1]:b[0].z;return za-zb||a[1]-b[1]||a[0].s-b[0].s});else L.sort(function(a,b){return a[1]-b[1]||a[0].s-b[0].s});
 var l=L.map(function(x){return x[0]});HED._va={sg:sg,p:HED.p,l:l};return l}
function hedVisAll(){return hedVisList().slice()}
function hedVisAt(t){var l=hedVisList(),o=[],i;for(i=0;i<l.length;i++){var c=l[i],tr=hedTr(c.tr);if(tr&&!tr.hid&&!c.hid&&t>=c.s-1e-6&&t<c.s+c.d)o.push(c)}return o}
/* ---- play / pause / tick: clock, media sync, rendering and timeline UI are separate steps ---- */
function hedAnimated(c){return!!(c.ai||c.ao||(c.kf&&c.kf.length)||c.ef||c.mk)}
function hedNeedDraw(tm){var v=hedVisAt(tm),sig='',an=false,vid=false,i;for(i=0;i<v.length;i++){sig+=v[i].id+',';if(hedAnimated(v[i]))an=true;if(v[i].k=='video')vid=true}if(sig!==HED._sig){HED._sig=sig;return true}if(an)return true;if(vid&&!HEDVF)return true;return!!HED.vfDirty}
function hedPlUi(){var b=$('#hedplay');if(b)b.innerHTML=hi((HED.pl||HED.gate)?'pause':'play')}
function hedPlay(){if(HED.gate){HED.gate=0;hedPlUi();return}if(HED.pl)return;if(HED.t>=hedDur()-.02)HED.t=0;hedSync(HED.t,false);
 var wait=[];hedVisAt(HED.t).forEach(function(c){if(c.k=='video'&&!c.rv){var el=hedEl(c);if(el&&el.readyState<3)wait.push(el)}});
 var go=function(){if(!HED||!HED.gate&&wait.length)return;HED.gate=0;if(!hedAlive())return;HED.pl=1;HED.p0=HED.t;HED.t0=performance.now();HED.vfDirty=1;hedPlUi();hedTick()};
 if(!wait.length){go();return}HED.gate=1;hedPlUi();var fired=0,fin=function(){if(fired)return;fired=1;go()};wait.forEach(function(el){el.addEventListener('canplay',function(){if(wait.every(function(x){return x.readyState>=3}))fin()},{once:true})});setTimeout(fin,900)}
function hedPause(){if(!HED)return;HED.stopAt=null;HED.gate=0;if(!HED.pl){hedPlUi();return}HED.pl=0;cancelAnimationFrame(HED.raf);Object.keys(HED.els).forEach(function(k){hedVfOff(HED.els[k])});hedPlUi();hedSync(HED.t,false);hedDrawSoon();hedReleaseFar(8,3)}
function hedPlEnd(){var du=hedDur();HED.t=du;hedSync(du,false);HED.pl=0;cancelAnimationFrame(HED.raf);Object.keys(HED.els).forEach(function(k){hedVfOff(HED.els[k])});hedDrawPv();hedTimeUi();hedPhUp(1);hedPlUi();hedReleaseFar(0,0);if(HED.onend)HED.onend()}
function hedTick(){if(!hedAlive()){hedStopAll();return}if(!HED.pl)return;var now=performance.now(),tm=HED.p0+(now-HED.t0)/1000,du=hedDur();if(tm>=du){hedPlEnd();return}
 if(HED.stopAt!=null&&tm>=HED.stopAt){HED.stopAt=null;HED.t=tm;hedPause();hedTimeUi();hedPhUp(1);return}
 HED.t=tm;hedSync(tm,true);if(hedNeedDraw(tm)){hedDrawPv();HED.vfDirty=0}
 if(now-(HED._ui||0)>45){HED._ui=now;hedTimeUi();hedPhUp(1)}if(now-(HED._rl||0)>4000){HED._rl=now;hedReleaseFar(8,3)}
 HED.raf=requestAnimationFrame(hedTick)}
function hedStopAll(){if(!HED)return;HED.pl=0;HED.gate=0;cancelAnimationFrame(HED.raf);Object.keys(HED.els).forEach(function(k){hedVfOff(HED.els[k])});hedStopEls();hedSaveNow()}
function hedGo(t,keep){var was=HED.pl;HED.t=hedC(t,0,hedDur());if(was){HED.p0=HED.t;HED.t0=performance.now();HED.vfDirty=1;Object.keys(HED.els).forEach(function(k){HED.els[k]._dc=0})}else hedSync(HED.t,false);hedDrawSoon();hedTimeUi();hedPhUp()}
/* ---- long-press pick-up: snap either edge to the centre line ---- */
function hedLpGo(g){if(HED.drag!==g||g.moved||!hedAlive())return;var c=g.c;if(hedLocked(c))return;
 if(HED.sel!=c.id){HED.sel=c.id;HED.kfOn=null;hedTl();hedPanel();hedDrawSoon();g.el=D.querySelector('.hedcl[data-c="'+c.id+'"]')}
 var t=HED.t,th=Math.max(.05,28/HED.z),eEnd=Math.abs(c.s+c.d-t),eSt=Math.abs(c.s-t),ok=function(ns){if(ns<-1e-6)return false;var fp=hedFreePos(c.tr,Math.max(0,ns),c.d,c.id);return fp!=null&&Math.abs(fp-Math.max(0,ns))<.004},order=eEnd<=eSt?['e','s']:['s','e'];
 for(var i=0;i<2;i++){var k=order[i];if(k=='e'&&eEnd<=th&&ok(t-c.d)){c.s=Math.max(0,t-c.d);break}if(k=='s'&&eSt<=th&&ok(t)){c.s=t;break}}
 g.k='mv';g.s0=c.s;g.x0=HED.lpx;g.y0=HED.lpy;HED.lpOn=1;if(g.el){g.el.style.left=c.s*HED.z+'px';g.el.classList.add('lift')}hedHPos(c);try{if(navigator.vibrate)navigator.vibrate(18)}catch(e){}hedDrawSoon();hedTimeUi()}
/* ---- trim-handle pop-over: Start / Extend to Clip Start / Extend to Timeline Start (mirrored on the right) ---- */
function hedHandlePop(c,side){var old=$('#hedhpo');if(old)old.remove();var h=D.querySelector('.hedh.'+side+'[data-c="'+c.id+'"]'),tc=$('#hedtc');if(!h||!tc)return;var hr=h.getBoundingClientRect(),tr=tc.getBoundingClientRect(),po=D.createElement('div'),ic2=side=='l'?'prev':'next',L=side=='l';po.id='hedhpo';po.className='hedhpo';
 po.innerHTML='<button type="button" data-ha="hgo:'+side+'">'+hi(ic2)+'<span>'+hedt(L?'h_gos':'h_goe')+'</span></button><button type="button" data-ha="hex:'+side+'">'+hi(ic2)+hi(ic2)+'<span>'+hedt(L?'h_cs':'h_ce')+'</span></button><button type="button" data-ha="hexp:'+side+'">'+hi(ic2)+hi(ic2)+hi(ic2)+'<span>'+hedt(L?'h_ts':'h_te')+'</span></button>';
 HED.hpoC=c.id;tc.appendChild(po);var pw=po.offsetWidth,ph=po.offsetHeight,ts=$('#hedts'),left=hr.left-tr.left+(L?-pw+16:0),top=hr.top-tr.top-ph-6;left=Math.max(ts.scrollLeft+6,Math.min(ts.scrollLeft+ts.clientWidth-pw-6,left));if(top<2)top=hr.bottom-tr.top+6;po.style.left=left+'px';po.style.top=top+'px'}
function hedRipple(c,delta){if(Math.abs(delta)<1e-6)return;HED.p.cl.forEach(function(x){if(x.tr==c.tr&&x.id!=c.id&&x.s>=c.s+c.d-delta-1e-6)x.s=Math.max(0,x.s+delta)})}
/* ---- reverse can be stopped ---- */
function hedRvStop(){var c=hedSelC();if(!c||c._rv==null)return;HED.rvX=HED.rvX||{};HED.rvX[c.id]=1;toast(hedt('rev_stop'))}
/* ---- settings reset ---- */
function hedResetSettings(){var p=HED.p;p.st={};hedStDef(p);p.gd=[];p.master=100;HED.snapTmp=0;hedSizes();hedFitPv();hedSelFill();hedTimeUi();hedPanel();hedDrawSoon();hedSaveSoon();toast(hedt('rst_done'))}
Object.assign(HEDT,{h_cs:['கிளிப் தொடக்கம் வரை நீட்டு','Extend to Clip Start','ක්ලිප් ආරම්භය දක්වා දිගු කරන්න','تمديد إلى بداية المقطع'],h_ce:['கிளிப் முடிவு வரை நீட்டு','Extend to Clip End','ක්ලිප් අවසානය දක්වා දිගු කරන්න','تمديد إلى نهاية المقطع'],h_ts:['டைம்லைன் தொடக்கம் வரை நீட்டு','Extend to Timeline Start','ටයිම්ලයින් ආරම්භය දක්වා දිගු කරන්න','تمديد إلى بداية الخط الزمني'],h_te:['டைம்லைன் முடிவு வரை நீட்டு','Extend to Timeline End','ටයිම්ලයින් අවසානය දක්වා දිගු කරන්න','تمديد إلى نهاية الخط الزمني'],
rev_stop:['Reverse நிறுத்தப்படுகிறது…','Stopping reverse…','ප්‍රතිවර්තනය නවත්වමින්…','جارٍ إيقاف العكس…'],rst_set:['அமைப்புகளை மீட்டமை','Reset settings','සැකසුම් යළි සකසන්න','إعادة ضبط الإعدادات'],rst_set_q:['எல்லா அமைப்புகளையும் இயல்புக்கு மீட்டமைக்கவா? (ஒட்டுதல், வழிகாட்டிகள், தரம், ஒலி அளவு, அமைப்பு அளவுகள்)','Reset all settings to default? (snapping, guides, quality, volume, panel sizes)','සියලු සැකසුම් පෙරනිමියට යළි සකසන්නද?','إعادة ضبط كل الإعدادات إلى الافتراضي؟']});

function hedRipUpd(g,delta,pps){(g.rip||[]).forEach(function(q){q.c.s=Math.max(0,q.s0+delta);var el=D.querySelector('.hedcl[data-c="'+q.c.id+'"]');if(el)el.style.left=q.c.s*pps+'px'})}
function hedReverse(){var c=hedSelC();if(!c||!(c.k=='video'||c.k=='audio'))return;if(c._rv!=null){hedRvStop();return}var id=c.id;HED.rvX=HED.rvX||{};HED.rvX[id]=0;
 if(c.k=='video'){var prev={rv:c.rv,mu:c.mu,rvm:c.rvm};hedHist();c.rv=c.rv?0:1;if(c.rv&&!c.mu){c.mu=1;c.rvm=1;toast(hedt('rev_note'))}else if(!c.rv&&c.rvm){c.mu=0;c.rvm=0}var e=HED.els[c.id];if(e)try{e.pause()}catch(x){}hedRvProg(id,1);hedAll();
  var el=hedEl(c,{}),n=Math.max(4,Math.min(16,Math.ceil(c.d/2)+3)),i=0,run=function(){var cc=hedCl(id);if(!cc||!hedAlive())return;
   if(HED.rvX[id]){HED.rvX[id]=0;cc.rv=prev.rv;cc.mu=prev.mu;cc.rvm=prev.rvm;delete cc._rv;hedRvProg(id,null);hedAll();return}
   if(i>=n||!el){hedRvDone(id);hedSync(HED.t,false);hedDrawSoon();return}var f=(n-1-i)/(n-1||1),tm=cc.i+Math.max(0,(cc.d*f))*cc.sp;hedRvProg(id,Math.round((i+1)/n*100));i++;hedSeekW(el,tm).then(function(){setTimeout(run,0)})};setTimeout(run,30);return}
 var m=HED.media[c.m];if(!m)return;if(m.dur>900){toast(hedt('rev_long'));return}hedRvProg(id,2);hedTl();hedBar();var tm=setInterval(function(){var cc=hedCl(id);if(!cc||cc._rv==null||cc._rv>=38){clearInterval(tm);return}hedRvProg(id,cc._rv+2)},250);
 var fail=function(quiet){clearInterval(tm);hedRvProg(id,null);var cc=hedCl(id);if(cc)delete cc._rv;if(HED)hedBar();if(!quiet)toast(hedt('err_file'))},stopped=function(){return HED&&HED.rvX&&HED.rvX[id]};
 hedBuf(m).then(function(b){clearInterval(tm);if(stopped())return fail(true);if(!b||!hedAlive())return fail();hedRvProg(id,40);return hedWavStA(b,true,function(p){hedRvProg(id,40+p*50)}).then(function(bl){if(stopped())return fail(true);hedRvProg(id,93);var f=new File([bl],'rev-'+String(m.name||'audio').replace(/\.[^.]+$/,'')+'.wav',{type:'audio/wav'});return hedRegMedia(f).then(function(nm){var cc=hedCl(id);if(!cc)return;if(stopped()){delete HED.media[nm.id];return fail(true)}hedHist();var dur=m.dur||b.duration,ni=Math.max(0,dur-(cc.i+cc.d*cc.sp)),e2=HED.els[cc.id];if(e2){hedElKill(cc.id)}cc.m=nm.id;cc.i=ni;cc.rv=cc.rv?0:1;cc.ak=cc.ak||hedAK(cc);hedAll();hedRvDone(id)})})}).catch(function(){fail()})}

/* ================= 4.4.0 — fast media load with clear errors, side handles, op icons, static animation glyphs ================= */
Object.assign(HEDI,{rev2:'<circle cx="12" cy="12" r="9"/><path d="M14.6 8v8L8.8 12z" fill="currentColor" fill-opacity=".85"/>'});
var HEDMETA_TO=15000;
function hedBusy(txt,on){var b=$('#hedbz');if(!on){if(b)b.remove();return}var r=$('#hed');if(!r)return;if(!b){b=D.createElement('div');b.id='hedbz';b.className='hedbz';b.innerHTML='<i></i><span></span>';r.appendChild(b)}b.lastChild.textContent=txt}
function hedMeta(file){return new Promise(function(ok,no){var ty=file.type||'',nm=file.name||'',aud0=/^audio/.test(ty),vid=!aud0&&(/^video/.test(ty)||/\.(mp4|webm|mov|m4v|3gp|mkv|ogv)$/i.test(nm)),aud=aud0||(!vid&&/\.(mp3|wav|ogg|m4a|aac|opus|flac|weba)$/i.test(nm)),img=/^image/.test(ty)||/\.(png|jpe?g|webp|gif|bmp|avif)$/i.test(nm),url=URL.createObjectURL(file),el,tmo,dead=0;
 var fin=function(o){if(dead)return;dead=1;clearTimeout(tmo);ok(Object.assign({url:url},o))},bad=function(w){if(dead)return;dead=1;clearTimeout(tmo);try{URL.revokeObjectURL(url)}catch(e){}if(el&&el.removeAttribute){try{el.removeAttribute('src');if(el.load)el.load()}catch(x){}}no({why:w})};
 tmo=setTimeout(function(){bad('timeout')},HEDMETA_TO);
 if(img){el=new Image();el.onload=function(){fin({type:'image',img:el,w:el.naturalWidth,h:el.naturalHeight,dur:0})};el.onerror=function(){bad('error')};el.src=url}
 else if(vid||aud){el=D.createElement(vid?'video':'audio');el.preload='metadata';el.muted=true;var g=function(){fin({type:vid?'video':'audio',w:el.videoWidth||0,h:el.videoHeight||0,dur:isFinite(el.duration)?el.duration:0})};
  el.onloadedmetadata=function(){if(!isFinite(el.duration)){el.ontimeupdate=function(){el.ontimeupdate=null;try{el.currentTime=0}catch(e){}g()};try{el.currentTime=1e101}catch(e){g()}}else g()};el.onerror=function(){bad(el.error&&el.error.code==4?'format':'error')};el.src=url}
 else bad('error')})}
function hedMetaErr(e,file){var w=e&&e.why,n=file&&file.name?' ('+file.name+')':'';return hedt(w=='format'?'ld_fmt':w=='timeout'?'ld_to':'ld_err')+n}
/* ---- animation sample on a layer: a small STATIC two-colour box (never animated, never taller than the layer) ---- */
function hedAnGlyph(ty){var G='var(--g)',F='rgba(255,255,255,.14)',bg={fade:'linear-gradient(90deg,'+G+','+F+')',sl:'linear-gradient(90deg,'+F+' 0 38%,'+G+' 38%)',sr:'linear-gradient(90deg,'+G+' 0 62%,'+F+' 62%)',su:'linear-gradient(180deg,'+F+' 0 38%,'+G+' 38%)',sd:'linear-gradient(180deg,'+G+' 0 62%,'+F+' 62%)',zi:'radial-gradient(circle,'+G+' 0 30%,'+F+' 31%)',zo:'radial-gradient(circle,'+F+' 0 30%,'+G+' 31%)',spin:'conic-gradient('+G+' 0 25%,'+F+' 25% 50%,'+G+' 50% 75%,'+F+' 75%)',blur:'radial-gradient(circle,'+G+' 0,'+F+' 85%)',pop:'radial-gradient(circle,'+G+' 0 45%,'+F+' 46% 70%,transparent 71%)',rev:'linear-gradient(90deg,'+G+' 0 50%,'+F+' 50%)'};return'<span class="hedag" style="background:'+(bg[ty]||'linear-gradient(90deg,'+G+','+F+')')+'"></span>'}
/* ---- small icons for what has been done to a layer ---- */
function hedOps(c){var a=[],has=function(o){return o&&Object.keys(o).some(function(k){return o[k]})};if(c.hid)a.push('eyeoff');if(c.rv)a.push('rev2');if(c.op<100)a.push('opacity');if(c.sp&&c.sp!=1)a.push('speed');if((c.k=='video'||c.k=='audio')&&(c.mu||(c.vol!=null&&c.vol!=100)))a.push(c.mu?'volx':'vol');if(has(c.col))a.push('filter');if(has(c.ef))a.push('fx');if(c.mk&&c.mk.t)a.push('mask');if(c.cr&&c.cr.some(function(v){return v>0}))a.push('crop');if(c.flx||c.fly)a.push('flx');if(c.bm&&c.bm!='source-over')a.push('layers');return a.slice(0,5)}
function hedBadges(c){var o=hedOps(c);return(c.k=='audio'?'<i class="hedak">'+hi(HEDAKI[hedAK(c)])+'</i>':'')+(c.lk?'<i class="hedakl">'+hi('lock')+'</i>':'')+(o.length?'<span class="hedop">'+o.map(function(n){return'<i>'+hi(n)+'</i>'}).join('')+'</span>':'')+(c._rv!=null?'<div class="hedrvp"><i style="width:'+Math.round(c._rv)+'%"></i><span>'+hedt('rev_prog')+' '+Math.round(c._rv)+'%</span></div>':'')}
/* ---- Animate All: apply, refresh the timeline, and play the first affected spot ---- */
function hedAnimAll(ty){hedHist();var mode=HED.at||'in',ad=HED.aad||.6,n=0,spots=[];HED.p.tr.forEach(function(tr){if(tr.r!='vid'&&tr.r!='ovl')return;var cl=HED.p.cl.filter(function(c){return c.tr==tr.id}).sort(function(a,b){return a.s-b.s});
 cl.forEach(function(c,i){var nx=cl[i+1],pv=cl[i-1],aN=nx&&Math.abs(c.s+c.d-nx.s)<.06,aP=pv&&Math.abs(pv.s+pv.d-c.s)<.06;
  if(mode=='in'&&!aP){c.ai=ty;c.ad=ad;n++;spots.push(c.s)}else if(mode=='out'&&!aN){c.ao=ty;c.ad=ad;n++;spots.push(c.s+c.d)}else if(mode=='mid'&&aN){c.ao=ty;nx.ai=ty;c.ad=nx.ad=ad;n++;spots.push(nx.s)}})});
 if(!n)toast(hedt('an_nospot'));hedPanel();hedTl();hedDrawSoon();hedSaveSoon();
 if(n&&ty){spots.sort(function(a,b){return a-b});var t0=spots[0];if(mode=='in')hedPrevRange(t0-.15,t0+ad+.5);else if(mode=='out')hedPrevRange(t0-ad-.5,t0+.15);else hedPrevRange(t0-ad-.3,t0+ad+.4)}}
/* ---- trim-handle "Extend to Clip …": measured against the main layer under that spot (like VN) ---- */
function hedExtend(side,mode){var c=hedCl(HED.hpoC),po=$('#hedhpo');if(po)po.remove();if(!c)return;var tr=hedTr(c.tr),main=!!(tr&&tr.r=='vid'),m=HED.media[c.m],media=(c.k=='video'||c.k=='audio')&&m&&m.dur,rv=c.rv&&c.k=='video',L=HED.p.cl.filter(function(x){return x.tr==c.tr&&x.id!=c.id}),none=function(){toast(hedt('h_none'))},lim=false;
 var mains=HED.p.cl.filter(function(x){var t=hedTr(x.tr);return t&&t.r=='vid'&&x.id!=c.id}).sort(function(a,b){return a.s-b.s});
 if(mode=='clip'&&!main){
  if(!mains.length){none();return}var T=null,e=side=='r'?c.s+c.d:c.s;
  if(side=='r'){mains.forEach(function(x){if(T==null&&x.s<=e+.02&&x.s+x.d>e+.02)T=x.s+x.d})}else{for(var i=mains.length-1;i>=0;i--){var x=mains[i];if(x.s<e-.02&&x.s+x.d>=e-.02){T=x.s;break}}}
  if(T==null){none();return}hedHist();
  if(side=='r'){var nx=1e9,av=media?(rv?c.i/c.sp:(m.dur-c.i)/c.sp):1e9;L.forEach(function(x){if(x.s>=c.s+c.d-1e-6)nx=Math.min(nx,x.s)});var nd=Math.min(T-c.s,c.d+av,nx-c.s);if(nd<T-c.s-.02)lim=true;if(nd<=c.d+.02){none();return}var dl=nd-c.d;if(rv)c.i=Math.max(0,c.i-dl*c.sp);c.d=nd}
  else{var pe=0,av2=media?(rv?(m.dur-c.i-c.d*c.sp)/c.sp:c.i/c.sp):1e9;L.forEach(function(x){if(x.s+x.d<=c.s+1e-6)pe=Math.max(pe,x.s+x.d)});var ext=Math.min(c.s-T,av2,c.s-pe);if(ext<c.s-T-.02)lim=true;if(ext<=.02){none();return}c.s-=ext;c.d+=ext;if(media&&!rv)c.i=Math.max(0,c.i-ext*c.sp);if(c.kf)c.kf.forEach(function(k){k.t+=ext})}
  if(lim)toast(hedt('h_lim'));hedAll();return}
 if(mode=='clip'&&!media){none();return}hedHist();
 if(side=='r'){var avail=media?(rv?c.i/c.sp:(m.dur-c.i)/c.sp):1e9,nx2=1e9,tlEnd=0;L.forEach(function(x){if(x.s>=c.s+c.d-1e-6)nx2=Math.min(nx2,x.s)});HED.p.cl.forEach(function(x){if(x.id!=c.id&&(!main||x.tr!=c.tr))tlEnd=Math.max(tlEnd,x.s+x.d)});
  var nd2=c.d+avail;if(mode=='tl')nd2=Math.min(nd2,tlEnd-c.s);if(!main)nd2=Math.min(nd2,nx2-c.s);if(nd2>1e8||nd2<=c.d+.02){none();return}var dl2=nd2-c.d;if(rv)c.i=Math.max(0,c.i-dl2*c.sp);c.d=nd2;if(main)hedRipple(c,dl2)}
 else{var availL=media?(rv?(m.dur-c.i-c.d*c.sp)/c.sp:c.i/c.sp):1e9,pe2=0;L.forEach(function(x){if(x.s+x.d<=c.s+1e-6)pe2=Math.max(pe2,x.s+x.d)});
  if(main){var ex=mode=='tl'?(c.s>1e-6?0:availL):availL;if(ex>1e8||ex<=.02){none();return}if(!rv&&media)c.i=Math.max(0,c.i-ex*c.sp);c.d+=ex;hedRipple(c,ex)}
  else{var ex2=Math.min(availL,c.s-pe2);if(ex2>1e8||ex2<=.02){none();return}c.s-=ex2;c.d+=ex2;if(media&&!rv)c.i=Math.max(0,c.i-ex2*c.sp);if(c.kf)c.kf.forEach(function(k){k.t+=ex2})}}
 hedAll()}
/* ---- selection overlay: small Canva-style rotate/move buttons, mid-edge handles for width/height ---- */
function hedRR(ctx,x,y,w,h,r){ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x,y,w,h,r);else ctx.rect(x,y,w,h)}
function hedSelDraw(ctx,W,t,s){HED.hp=null;var c=hedSelC();if(!c||c.k=='audio'||!c._m||!(t>=c.s&&t<c.s+c.d))return;var tr=hedTr(c.tr);if(!tr||tr.hid)return;var m=c._m,r=m.lr,P=[hedPt(m,r[0],r[1]),hedPt(m,r[0]+r[2],r[1]),hedPt(m,r[0]+r[2],r[1]+r[3]),hedPt(m,r[0],r[1]+r[3])],lw=2/s,H=hedDims().H,k=W/((HED.ov&&HED.ov.clientWidth)||W),L=1e9,T=1e9,Rr=-1e9,Bb=-1e9;
 P.forEach(function(q){L=Math.min(L,q[0]);Rr=Math.max(Rr,q[0]);T=Math.min(T,q[1]);Bb=Math.max(Bb,q[1])});
 var lk=hedLocked(c),SD={},ex=Math.abs(m.sx),ey=Math.abs(m.sy),minL=46*k;
 if(!lk){if(c.k=='text'||r[3]*ey>=minL){SD.l=hedPt(m,r[0],r[1]+r[3]/2);SD.r=hedPt(m,r[0]+r[2],r[1]+r[3]/2)}if(c.k!='text'&&r[2]*ex>=minL){SD.t=hedPt(m,r[0]+r[2]/2,r[1]);SD.b=hedPt(m,r[0]+r[2]/2,r[1]+r[3])}}
 var R=10*k,sp=24*k,gap=26*k,pts=P.concat(Object.keys(SD).map(function(q){return SD[q]})),need=R+14*k,clear=function(bx,by){for(var i=0;i<pts.length;i++){if(Math.hypot(bx-sp-pts[i][0],by-pts[i][1])<need||Math.hypot(bx+sp-pts[i][0],by-pts[i][1])<need)return false}return true};
 var mx=Math.max(sp+R+6*k,Math.min(W-sp-R-6*k,(L+Rr)/2)),by=Bb+gap+R,below=1;if(by+R>H-4*k){by=T-gap-R;below=0;if(by-R<4*k){by=Math.min(H-R-8*k,Math.max(R+8*k,Bb-gap-R));below=1}}
 for(var n=0;n<8&&!clear(mx,by);n++)by+=(below?1:-1)*8*k;
 var rp=[mx-sp,by],mp=[mx+sp,by],gf=HED.cg&&HED.cg.c===c&&HED.cg.fx;if(gf){var gx=0,gy=0;if(HED.cg.k=='mv'){gx=(c.x-HED.cg.x0)/100*W;gy=(c.y-HED.cg.y0)/100*H}rp=[gf.r[0]+gx,gf.r[1]+gy];mp=[gf.m[0]+gx,gf.m[1]+gy];below=gf.below}
 ctx.save();ctx.strokeStyle=HED.th.g;ctx.fillStyle=HED.th.g;ctx.lineWidth=lw;ctx.beginPath();P.forEach(function(q,i){i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])});ctx.closePath();ctx.stroke();
 Object.keys(SD).forEach(function(q){var pp=SD[q],hor=(q=='t'||q=='b'),len=22*k,th=7*k;ctx.save();ctx.translate(pp[0],pp[1]);ctx.rotate(m.rot);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=5/s;if(hor)hedRR(ctx,-len/2,-th/2,len,th,th/2);else hedRR(ctx,-th/2,-len/2,th,len,th/2);ctx.fillStyle='#fff';ctx.fill();ctx.shadowColor='transparent';ctx.lineWidth=1.5*k;ctx.strokeStyle=HED.th.g;ctx.stroke();ctx.restore()});
 P.forEach(function(q){ctx.beginPath();ctx.arc(q[0],q[1],7*k,0,6.2832);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=2.2*k;ctx.strokeStyle=HED.th.g;ctx.stroke()});
 if(!lk){[rp,mp].forEach(function(q,i){ctx.save();ctx.shadowColor='rgba(0,0,0,.38)';ctx.shadowBlur=8/s;ctx.shadowOffsetY=2/s;ctx.beginPath();ctx.arc(q[0],q[1],R,0,6.2832);ctx.fillStyle='#fff';ctx.fill();ctx.restore();ctx.beginPath();ctx.arc(q[0],q[1],R,0,6.2832);ctx.lineWidth=1/s;ctx.strokeStyle='rgba(0,0,0,.15)';ctx.stroke();
  ctx.save();ctx.translate(q[0],q[1]);ctx.strokeStyle='#1f1f1f';ctx.fillStyle='#1f1f1f';ctx.lineWidth=1.5*k;ctx.lineCap='round';ctx.lineJoin='round';
  if(i==0){var a=1.5,rr=.5*R;ctx.beginPath();ctx.arc(0,0,rr,-2.3,a);ctx.stroke();var px=rr*Math.cos(a),py=rr*Math.sin(a),tx=-Math.sin(a),ty=Math.cos(a),nx=Math.cos(a),ny=Math.sin(a);ctx.beginPath();ctx.moveTo(px+tx*.34*R,py+ty*.34*R);ctx.lineTo(px+nx*.26*R,py+ny*.26*R);ctx.lineTo(px-nx*.26*R,py-ny*.26*R);ctx.closePath();ctx.fill()}
  else{var e=.58*R;ctx.beginPath();ctx.moveTo(-e,0);ctx.lineTo(e,0);ctx.moveTo(0,-e);ctx.lineTo(0,e);ctx.stroke();[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(dv){var tx2=dv[0]*e,ty2=dv[1]*e,bx=dv[0]*.3*R,by2=dv[1]*.3*R,px2=-dv[1]*.2*R,py2=dv[0]*.2*R;ctx.beginPath();ctx.moveTo(tx2,ty2);ctx.lineTo(bx+px2,by2+py2);ctx.lineTo(bx-px2,by2-py2);ctx.closePath();ctx.fill()})}
  ctx.restore()})}
 ctx.restore();HED.hp={c:P,r:rp,m:mp,below:below,R:R,lk:lk,sd:SD}}
function hedSideStart(c,side,px,py){var m=c._m,r=m.lr,ex=Math.abs(m.sx)||1,ey=Math.abs(m.sy)||1,sgx=m.sx<0?-1:1,sgy=m.sy<0?-1:1,co=Math.cos(m.rot),si=Math.sin(m.rot),ax=[co*sgx,si*sgx],ay=[-si*sgy,co*sgy],u=side=='r'?ax:side=='l'?[-ax[0],-ax[1]]:side=='b'?ay:[-ay[0],-ay[1]],hor=side=='l'||side=='r';
 return{k:'sd',c:c,side:side,hor:hor,u:u,px0:px,py0:py,h:1,x0:c.x,y0:c.y,sz0:hor?r[2]*ex:r[3]*ey,es:hor?ex:ey,cr0:(c.cr||[0,0,0,0]).slice(),sh0:c.sh?{w:c.sh.w,h:c.sh.h}:null,tw0:c.tx?c.tx.w:0,nw0:r[2],nh0:r[3]}}
function hedSideMove(g,px,py){var c=g.c,d=hedDims(),W=d.W,H=d.H,dp=(px-g.px0)*g.u[0]+(py-g.py0)*g.u[1];
 if(c.k=='shape'&&c.sh){var base=g.hor?g.sh0.w/100*W:g.sh0.h/100*H,npx=Math.max(10,base*g.es+dp),loc=npx/g.es;if(g.hor)c.sh.w=hedR(hedC(loc/W*100,1,400),2);else c.sh.h=hedR(hedC(loc/H*100,1,400),2);var after=(g.hor?c.sh.w/100*W:c.sh.h/100*H)*g.es,eff=after-base*g.es;c.x=g.x0+(eff/2*g.u[0])/W*100;c.y=g.y0+(eff/2*g.u[1])/H*100}
 else if(c.k=='text'&&c.tx&&g.hor){var q=Math.max(.15,(g.sz0+dp)/g.sz0);c.tx.w=hedR(hedC(g.tw0*q,5,100),1);c._tl=null;var eq=(c.tx.w/g.tw0-1)*g.sz0;c.x=g.x0+(eq/2*g.u[0])/W*100;c.y=g.y0+(eq/2*g.u[1])/H*100}
 else if(c.cr&&(c.k=='video'||c.k=='image')){var idx=g.side=='l'?0:g.side=='t'?1:g.side=='r'?2:3,opp=(idx+2)%4,nb=g.hor?(g.nw0/(1-(g.cr0[0]+g.cr0[2])/100)):(g.nh0/(1-(g.cr0[1]+g.cr0[3])/100)),pct=100/(nb*g.es),cr=g.cr0.slice();cr[idx]=hedR(hedC(g.cr0[idx]-dp*pct,0,95-g.cr0[opp]),2);c.cr=cr}
 HED.sg={dim:hedDimOf(c)};if(c.kf&&c.kf.length)hedKfUpsert(c)}
Object.assign(HEDT,{ld_prep:['கோப்பு தயாராகிறது…','Preparing file…','ගොනුව සූදානම් වෙමින්…','جارٍ تجهيز الملف…'],
ld_fmt:['மன்னிக்கவும்! இந்த வீடியோவின் வடிவத்தை (எ.கா. H.265/HEVC) இந்தச் சாதனத்தின் உலாவியால் இயக்க முடியவில்லை.','Sorry! This device\'s browser cannot play this video format (e.g. H.265/HEVC).','සමාවෙන්න! මෙම උපාංගයේ බ්‍රවුසරයට මෙම වීඩියෝ ආකෘතිය (උදා. H.265/HEVC) ධාවනය කළ නොහැක.','عذرًا! لا يستطيع متصفح هذا الجهاز تشغيل صيغة الفيديو هذه (مثل H.265/HEVC).'],
ld_to:['மன்னிக்கவும்! ஏற்றுவது மிக நீண்ட நேரம் ஆனதால் நிறுத்தினேன். மீண்டும் முயலுங்கள் அல்லது சிறிய கோப்பைப் பயன்படுத்துங்கள்.','Sorry! Loading took too long so I stopped it. Try again or use a smaller file.','සමාවෙන්න! පූරණය වැඩි වේලාවක් ගත වූ නිසා නවත්වා ඇත. නැවත උත්සාහ කරන්න හෝ කුඩා ගොනුවක් භාවිතා කරන්න.','عذرًا! استغرق التحميل وقتًا طويلًا فتم إيقافه. حاول مرة أخرى أو استخدم ملفًا أصغر.'],
ld_err:['மன்னிக்கவும்! இந்தக் கோப்பை ஏற்ற முடியவில்லை.','Sorry! This file could not be loaded.','සමාවෙන්න! මෙම ගොනුව පූරණය කළ නොහැක.','عذرًا! تعذر تحميل هذا الملف.'],
h_lim:['ஊடக நீளம் அல்லது அடுத்த கிளிப் காரணமாக இங்கு வரை மட்டுமே நீட்ட முடிந்தது','Extended as far as the media / next clip allows','මාධ්‍ය දිග හෝ ඊළඟ ක්ලිප් නිසා හැකි තරම් දිගු කළා','تم التمديد بقدر ما يسمح به الوسيط أو المقطع التالي']});

var HEDCSS=`
.hed{--hbh:94px;--hgt:#1b1b1b;position:fixed;inset:0;z-index:900;display:flex;flex-direction:column;background:var(--bg);color:var(--tx);font-family:inherit;padding-top:env(safe-area-inset-top);-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;overflow:hidden}
.hed *{box-sizing:border-box}.hed button{font-family:inherit;color:inherit;cursor:pointer}.hed button:disabled{opacity:.35;pointer-events:none}
.hedsp{flex:1}.hedic{width:20px;height:20px;flex:0 0 auto}
.hedhd{display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--cd);border-bottom:1px solid var(--bd)}.hedhd b{font-size:16px;font-weight:800;letter-spacing:.2px}.hedhi{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)}.hedhi .hedic{width:18px;height:18px}
.hedxb{display:flex;align-items:center;gap:6px;border:0;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)!important;font-weight:800;font-size:13px;padding:9px 16px;border-radius:13px;box-shadow:0 5px 16px rgba(var(--gr),.4)}.hedxb .hedic{width:17px;height:17px}
.hedjb{position:absolute;left:0;right:0;top:0;height:0;overflow:hidden;z-index:60;background:var(--cd);transition:height .2s;box-shadow:0 4px 14px rgba(0,0,0,.25)}.hedjb.on{height:34px}.hedjb i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,var(--g),var(--g2));transition:width .2s}.hedjb.ok i{background:#22a55a;width:100%!important}.hedjb.err i{background:#d23b3b;width:100%!important}
.hedjb span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12.5px;font-weight:800;color:var(--hgt);text-shadow:0 0 5px rgba(var(--gr),.8)}.hedjb.ok span,.hedjb.err span{color:#fff;text-shadow:none}.hedjb button{position:absolute;right:6px;top:4px;width:26px;height:26px;border:0;background:rgba(0,0,0,.28);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff}.hedjb button .hedic{width:14px;height:14px}
.hedpbar{display:flex;align-items:center;gap:8px;padding:8px 10px}
.hedsel{height:34px;border-radius:11px;padding:0 28px 0 12px;border:1.5px solid var(--ln);color:var(--tx);font-size:13px;font-weight:700;font-family:inherit;accent-color:var(--g);-webkit-appearance:none;appearance:none;flex:0 0 auto;background:var(--cd) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%23a7780a' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 10px center}
.hed select.hedsel{width:auto!important;min-width:0;flex:0 0 auto}.hedpbar .hedsel{height:34px}
.hedib{width:38px;height:38px;border-radius:12px;border:0;background:transparent;display:flex;align-items:center;justify-content:center;flex:0 0 auto}.hedib.on{background:rgba(var(--gr),.2);color:var(--gt,var(--g))}.hedib:active{background:rgba(var(--gr),.2)}
.hedpv{flex:0 0 auto;min-height:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(rgba(127,127,127,.1),rgba(127,127,127,.2));position:relative;overflow:hidden}.hedpv canvas{border-radius:8px;box-shadow:0 8px 28px rgba(0,0,0,.35);touch-action:none;background:#000}
.hedpv.fs{height:auto!important;position:fixed;inset:0;z-index:40;padding-top:env(safe-area-inset-top);background:#000}.hedfsx{display:none!important;position:absolute;top:calc(8px + env(safe-area-inset-top));right:8px;background:rgba(0,0,0,.5)!important;color:#fff}.hedpv.fs .hedfsx{display:flex!important}
.hedtp{display:flex;align-items:center;justify-content:space-between;padding:6px 10px;gap:6px;background:var(--cd);border-top:1px solid var(--bd)}.hedtm{direction:ltr;unicode-bidi:isolate;font-variant-numeric:tabular-nums;font-size:11.5px;min-width:0;white-space:nowrap}.hedtm b{font-size:13px;font-weight:800}.hedtm i{font-style:normal;color:var(--mt)}.hedtc2{display:flex;align-items:center;gap:6px}.hedur{display:flex;gap:2px}
.hedplay{width:46px;height:46px;border-radius:50%;border:0;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)!important;display:flex;align-items:center;justify-content:center;}.hedplay .hedic{width:22px;height:22px}
.hedtb{display:flex;align-items:center;gap:2px;padding:2px 8px;background:var(--cd)}
.hedtl{flex:1 1 0;min-height:130px;overflow:hidden;border-top:1px solid var(--bd);background:linear-gradient(rgba(127,127,127,.07),rgba(127,127,127,.13));position:relative}
.hedts{overflow:auto;height:100%;position:relative;overscroll-behavior:contain;direction:ltr;scrollbar-width:thin}.hedtc{position:relative}
.hedrow{display:flex;height:48px;border-bottom:1px solid rgba(127,127,127,.18);position:relative}.hedruw{height:26px}
.hedtn{position:sticky;left:0;z-index:20;width:66px;flex:0 0 66px;background:var(--cd);border-right:1px solid var(--ln);display:flex;align-items:center;justify-content:center;gap:5px;padding:0 4px}
.hedtv{width:30px;height:30px;border-radius:10px;border:0;padding:0;display:grid;place-items:center;background:rgba(var(--gr),.18);color:var(--gt,var(--g))}.hedtv .hedic{width:18px;height:18px}.hedtn.off .hedtv{opacity:.35}
.hedtp2{width:24px;height:24px;border-radius:50%;border:0;padding:0;display:grid;place-items:center;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)!important}.hedtp2 .hedic{width:14px;height:14px;stroke-width:2.6}
.hedcorner{height:26px;background:var(--cd)}
.hedru{position:relative;height:26px;touch-action:none;background:var(--cd);border-bottom:1px solid var(--ln)}.hedtk{position:absolute;top:6px;font-size:10px;font-weight:600;color:var(--mt);padding-left:3px;border-left:1px solid var(--ln);height:14px;line-height:1;pointer-events:none}
.hedlane{position:relative;height:48px;flex:0 0 auto}.hedlane.hid{opacity:.4}
.hedcl{position:absolute;top:4px;height:40px;border-radius:10px;overflow:hidden;border:1.5px solid rgba(255,255,255,.4);touch-action:pan-x pan-y;box-shadow:0 2px 6px rgba(0,0,0,.25)}
.hedcl.k-video{background:#2c5fd0}.hedcl.k-image{background:#d9831f}.hedcl.k-audio{background:#0b7a58}.hedcl.k-shape{background:#7c3aed}.hedcl.k-text{background:var(--g)}
.hedcl.sel{border-color:#fff;box-shadow:0 0 0 3px var(--g),0 4px 12px rgba(0,0,0,.35);touch-action:none;z-index:3}.hedcl.lk{opacity:.65}
.hedcc{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.hedcn{position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:11px;font-weight:700;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.9);pointer-events:none;max-width:calc(100% - 14px);overflow:hidden;white-space:nowrap}.hedcn b{display:inline-grid;place-items:center;width:15px;height:15px;border-radius:4px;background:rgba(0,0,0,.28);margin-inline-end:5px;font-size:10px}.hedcl.sel .hedcn{left:22px;max-width:calc(100% - 44px)}.hedcl.k-text .hedcn{color:var(--hgt);text-shadow:none}.hedcl.k-text .hedcn b{background:rgba(255,255,255,.35)}
.hedh{position:absolute;top:0;bottom:0;width:18px;background:var(--g);z-index:4;touch-action:none}.hedh.l{left:0;border-radius:8px 0 0 8px}.hedh.r{right:0;border-radius:0 8px 8px 0}.hedh:after{content:"";position:absolute;left:50%;top:28%;bottom:28%;width:2.5px;margin-left:-1.25px;background:var(--hgt);border-radius:2px}
.hedbar{flex:0 0 auto;display:flex;gap:4px;overflow-x:auto;padding:8px 8px calc(8px + env(safe-area-inset-bottom));background:var(--cd);border-top:1px solid var(--ln);scrollbar-width:none;overscroll-behavior-x:contain;height:calc(var(--hbh) + env(safe-area-inset-bottom));z-index:31;align-items:flex-start}.hedbar::-webkit-scrollbar{display:none}
.hedtool{flex:0 0 auto;width:68px;height:78px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:4px;background:none;border:0;font-size:10.5px;font-weight:700;color:var(--tx);padding:0;line-height:1.1;text-align:center}
.hedtic{flex:0 0 44px;width:44px;height:44px;min-height:44px;border-radius:15px;display:grid;place-items:center;background:rgba(var(--gr),.17);color:var(--gt,var(--g));border:1px solid rgba(var(--gr),.28)}.hedtic .hedic{width:21px;height:21px}
.hedtool.on .hedtic{background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt);border-color:transparent;box-shadow:0 4px 12px rgba(var(--gr),.4)}.hedtool.dng .hedtic{background:rgba(220,60,60,.16);color:#d23b3b;border-color:rgba(220,60,60,.3)}
.hedpop{position:absolute;left:0;right:0;bottom:calc(var(--hbh) + env(safe-area-inset-bottom));z-index:30;background:var(--cd);border-radius:22px 22px 0 0;box-shadow:0 -12px 40px rgba(0,0,0,.35);border:1px solid var(--ln);border-bottom:0;max-height:min(38%,320px);display:none;flex-direction:column}.hedpop.on{display:flex}
.hedphd{display:flex;align-items:center;padding:6px 8px 0 18px;position:relative}.hedphd:before{content:"";position:absolute;left:50%;top:6px;width:38px;height:4px;margin-left:-19px;border-radius:4px;background:var(--ln)}.hedphd b{font-size:15px;font-weight:800;padding-top:10px}
.hedpbody{overflow:auto;padding:6px 16px 16px;overscroll-behavior:contain;-webkit-user-select:text;user-select:text}
.hedtiles{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:6px 0}.hedtile{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:0;font-size:11px;font-weight:700;text-align:center;line-height:1.15;padding:2px 0;color:var(--tx)}.hedtile .hedtic{width:52px;height:52px;border-radius:17px}.hedtile .hedtic .hedic{width:24px;height:24px}
.hedstk{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin:6px 0}.hedstk button{height:46px;border-radius:13px;background:rgba(var(--gr),.14);border:1px solid rgba(var(--gr),.3);font-size:24px;line-height:1;padding:0;font-family:'Amiri','KFGQPC Uthman Taha Naskh',serif}
.hedgr2{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
.hedbt{border:1.5px solid var(--ln);background:var(--cd);border-radius:13px;padding:9px 14px;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:7px;font-size:12.5px;font-weight:700;min-height:40px;text-align:center}.hedbt.on{border-color:var(--g);color:var(--gt,var(--g))}.hedbt.hedgo{background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)!important;border-color:transparent;box-shadow:0 5px 16px rgba(var(--gr),.4)}.hedbt.dng{color:#d23b3b;border-color:rgba(220,60,60,.4)}
.hedsr{display:flex;align-items:center;gap:6px;margin:7px 0}.hedsr label{flex:0 0 84px;font-size:12px;font-weight:600;color:var(--mt);line-height:1.2}.hedr{flex:1;min-width:0;accent-color:var(--g);height:28px}.hedsr output{flex:0 0 50px;text-align:right;font-size:12px;font-weight:700;font-variant-numeric:tabular-nums}.hedcr{justify-content:space-between}.hedcr label{flex:1}
.hedst{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--ln);background:var(--cd);display:flex;align-items:center;justify-content:center;padding:0;flex:0 0 auto;color:var(--gt,var(--g))}.hedst .hedic{width:13px;height:13px;stroke-width:2.6}
.hedchs{display:flex;gap:7px;flex-wrap:wrap;margin:7px 0}.hedscroll{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}.hedchip{border:1.5px solid var(--ln);background:var(--cd);border-radius:999px;padding:7px 14px;font-size:12px;font-weight:700;white-space:nowrap}.hedchip.on{background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)!important;border-color:transparent}
.hedchs .hedtpr{flex:0 0 auto;width:52px;height:40px;border-radius:11px;border:1.5px solid var(--ln);font-size:19px;padding:0}
.hedtg{display:flex;align-items:center;justify-content:space-between;gap:10px;flex:1 1 130px;font-size:12.5px;font-weight:600;padding:6px 0}.hedtg input{display:none}.hedtg i{width:42px;height:24px;border-radius:12px;background:rgba(127,127,127,.3);position:relative;flex:0 0 auto;transition:background .15s}.hedtg i:after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.35);transition:all .15s}.hedtg input:checked+i{background:var(--g)}.hedtg input:checked+i:after{left:21px}
.hedn{height:36px;border-radius:11px;border:1.5px solid var(--ln);background:var(--cd);color:var(--tx);padding:0 10px;font-size:13px;width:100%;font-family:inherit;accent-color:var(--g)}.hednum{display:flex;gap:10px}.hednum label{flex:1;font-size:12px;color:var(--mt);display:flex;flex-direction:column;gap:4px;font-weight:600}.hedname{width:62%}
.hedta{width:100%;border-radius:12px;border:1.5px solid var(--ln);background:var(--cd);color:var(--tx);padding:9px 11px;font-size:14px;font-family:inherit;resize:vertical;margin-bottom:6px}.hedcol{width:50px;height:32px;border:1.5px solid var(--ln);border-radius:9px;padding:0;background:none;accent-color:var(--g)}
.hedsw{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px}.hedsw button{width:32px;height:32px;border-radius:50%;border:2px solid var(--ln);padding:0}
.hedhint{font-size:12px;color:var(--mt);margin:4px 0 8px;font-weight:600}.hedpbody h5{margin:12px 0 4px;font-size:12px;color:var(--gt,var(--g));font-weight:800;text-transform:uppercase;letter-spacing:.4px}
.hedov{position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:50;display:flex;align-items:center;justify-content:center;padding:24px}.hedmd{width:100%;max-width:340px;background:var(--cd);border-radius:20px;padding:20px;border:1px solid var(--ln);box-shadow:0 20px 50px rgba(0,0,0,.45)}.hedmq{margin:0 0 10px;font-size:14px;font-weight:700;line-height:1.5}

.hedseek{width:100%;margin:0 0 6px}
.hedpad{flex:0 0 auto;height:100%}
.hedphc{position:absolute;top:0;bottom:0;width:0;z-index:8;pointer-events:none}.hedphc:before{content:"";position:absolute;top:0;bottom:0;left:-1px;width:2px;background:var(--g);box-shadow:0 0 0 1px rgba(0,0,0,.3),0 0 10px rgba(var(--gr),.8)}.hedphc i{position:absolute;top:0;left:-8px;width:16px;height:15px;background:var(--g);clip-path:polygon(0 0,100% 0,100% 55%,50% 100%,0 55%);filter:drop-shadow(0 1px 1px rgba(0,0,0,.4))}
.hedtn.sub .hedtv{opacity:.55;transform:scale(.82)}
.hedjn{position:absolute;top:13px;width:22px;height:22px;border-radius:50%;border:2px solid var(--cd);padding:0;display:grid;place-items:center;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)!important;z-index:6;box-shadow:0 2px 6px rgba(0,0,0,.35)}.hedjn .hedic{width:12px;height:12px;stroke-width:3}

.hedseg{display:flex;background:rgba(127,127,127,.16);border-radius:12px;padding:3px;margin:4px 0 10px}.hedseg button{flex:1;border:0;background:none;border-radius:9px;padding:8px;font-size:12.5px;font-weight:800}.hedseg button.on{background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)}
.hedang{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:4px 0 8px}.hedant{border:1.5px solid var(--ln);background:var(--cd);border-radius:13px;padding:6px 2px 7px;display:flex;flex-direction:column;align-items:center;gap:5px;font-size:10.5px;font-weight:700;line-height:1.1;text-align:center}.hedant.on{border-color:var(--g);box-shadow:0 0 0 2px rgba(var(--gr),.35)}
.hedanv{width:100%;height:42px;display:grid;place-items:center;overflow:hidden;border-radius:9px;background:rgba(127,127,127,.14)}.hedanb{display:block;width:24px;height:18px;border-radius:5px;background:linear-gradient(135deg,var(--g),var(--g2));animation-duration:1.6s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}.hedanb.out{animation-direction:reverse}
.hedanb.a-fade{animation-name:hA_fade}.hedanb.a-sl{animation-name:hA_sl}.hedanb.a-sr{animation-name:hA_sr}.hedanb.a-su{animation-name:hA_su}.hedanb.a-sd{animation-name:hA_sd}.hedanb.a-zi{animation-name:hA_zi}.hedanb.a-zo{animation-name:hA_zo}.hedanb.a-spin{animation-name:hA_spin}.hedanb.a-blur{animation-name:hA_blur}.hedanb.a-pop{animation-name:hA_pop}.hedanb.a-rev{animation-name:hA_rev}
@keyframes hA_fade{0%{opacity:0}60%,100%{opacity:1}}@keyframes hA_sl{0%{transform:translateX(-22px);opacity:0}60%,100%{transform:none;opacity:1}}@keyframes hA_sr{0%{transform:translateX(22px);opacity:0}60%,100%{transform:none;opacity:1}}@keyframes hA_su{0%{transform:translateY(-20px);opacity:0}60%,100%{transform:none;opacity:1}}@keyframes hA_sd{0%{transform:translateY(20px);opacity:0}60%,100%{transform:none;opacity:1}}
@keyframes hA_zi{0%{transform:scale(.3);opacity:0}60%,100%{transform:none;opacity:1}}@keyframes hA_zo{0%{transform:scale(1.9);opacity:0}60%,100%{transform:none;opacity:1}}@keyframes hA_spin{0%{transform:rotate(-180deg) scale(.2);opacity:0}60%,100%{transform:none;opacity:1}}@keyframes hA_blur{0%{filter:blur(7px);opacity:0}60%,100%{filter:none;opacity:1}}@keyframes hA_pop{0%{transform:scale(0)}40%{transform:scale(1.25)}60%,100%{transform:scale(1)}}@keyframes hA_rev{0%{clip-path:inset(0 100% 0 0)}60%,100%{clip-path:inset(0 0 0 0)}}
.hedfl{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:4px 0 8px}.hedfi{border:1.5px solid var(--ln);background:var(--cd);border-radius:13px;padding:5px 5px 7px;display:flex;flex-direction:column;align-items:center;gap:5px;font-size:11px;font-weight:700}.hedfi img{width:100%;border-radius:8px;display:block;background:#000}.hedfi.on{border-color:var(--g);box-shadow:0 0 0 2px rgba(var(--gr),.35)}
.hedkfb{display:flex;align-items:center;justify-content:center;gap:18px;margin:2px 0 4px}.hedkfd{width:58px;height:58px;border-radius:18px;border:2px solid var(--g);background:rgba(var(--gr),.14);color:var(--gt,var(--g));display:grid;place-items:center;padding:0}.hedkfd .hedic{width:28px;height:28px}.hedkfd.on{background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt)}
.hedlist{margin:4px 0 8px}.hedli{display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid rgba(127,127,127,.2)}.hedli .hedtic{width:34px;height:34px;border-radius:11px}.hedli b{font-size:13px}
.hedsfx{display:grid;grid-template-columns:1fr 1fr;gap:8px}.hedsf{display:flex;align-items:center;gap:4px;border:1.5px solid var(--ln);border-radius:14px;padding:4px 4px 4px 6px;background:var(--cd)}.hedsfa{flex:1;display:flex;align-items:center;gap:8px;background:none;border:0;font-size:12px;font-weight:700;text-align:left;padding:0;min-width:0}.hedsfa .hedtic{width:34px;height:34px;border-radius:11px;flex:0 0 auto}
.hedtool>span:last-child{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-width:100%;word-break:break-word}
.hedtn.sub .hedtp2{display:none}
.hedkd{position:absolute;bottom:0;width:28px;height:24px;margin-left:-14px;z-index:5;display:grid;place-items:center}.hedkd b{width:11px;height:11px;background:#fff;border:2px solid var(--g);transform:rotate(45deg);box-shadow:0 1px 3px rgba(0,0,0,.55);display:block}
.hedrz{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.hedrzc{border:1.5px solid var(--ln);background:var(--cd);border-radius:14px;padding:8px 4px;display:flex;flex-direction:column;align-items:center;gap:5px;font-size:11px}.hedrzc b{font-weight:800;line-height:1.1}.hedrzc em{font-style:normal;color:var(--mt);font-size:10.5px;font-weight:700}.hedrzc.on{border-color:var(--g);box-shadow:0 0 0 2px rgba(var(--gr),.35)}
.hedrzv{width:52px;height:52px;display:grid;place-items:center;border-radius:10px;background:rgba(127,127,127,.14)}.hedrzv i{display:block;border-radius:3px;background:linear-gradient(135deg,var(--g),var(--g2))}
.hedrecp{display:none;position:absolute;left:10px;top:10px;z-index:6;align-items:center;gap:6px;border:0;border-radius:999px;background:#d23b3b;color:#fff!important;font-weight:800;font-size:12px;padding:8px 14px}.hedrecp.on{display:flex}.hedrecp .hedic{width:14px;height:14px}
.hedlg{display:flex;align-items:center;gap:6px;padding:6px 0 2px;margin-top:4px;border-top:1px solid rgba(127,127,127,.25)}.hedlg .hedtic{width:34px;height:34px;border-radius:11px}
.hedli{display:flex;align-items:center;gap:2px;padding:2px 0 2px 10px}.hedli.off{opacity:.5}.hedli.on .hedlsel{background:rgba(var(--gr),.18);border-radius:12px}.hedlsel{flex:1;min-width:0;display:flex;align-items:center;gap:8px;border:0;background:none;padding:4px;text-align:left}.hedlsel .hedtic{width:34px;height:34px;border-radius:11px}.hedlsel b{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12.5px}.hedlsel small{color:var(--mt);font-weight:700;font-size:11px}
`;
HEDCSS+=`
.hedhm .hedhb{flex:1;overflow:auto;padding:14px 14px calc(24px + env(safe-area-inset-bottom));-webkit-user-select:none;user-select:none}
.hednp{display:flex;align-items:center;gap:14px;width:100%;text-align:left;border:1.5px dashed rgba(var(--gr),.55);background:rgba(var(--gr),.08);border-radius:20px;padding:16px}.hednpi{width:54px;height:54px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt);box-shadow:0 6px 18px rgba(var(--gr),.4);flex:0 0 auto}.hednpi .hedic{width:28px;height:28px;stroke-width:2.6}.hednpt b{display:block;font-size:16px;font-weight:800}.hednpt small{display:block;color:var(--mt);font-size:12px;margin-top:3px;font-weight:600}
.hedhb h4{margin:20px 2px 10px;font-size:13px;font-weight:800;color:var(--gt,var(--g));letter-spacing:.4px;text-transform:uppercase}.hedemp{color:var(--mt);font-size:13px;font-weight:600;text-align:center;margin:30px 10px}
.hedpg{display:grid;grid-template-columns:1fr 1fr;gap:12px}.hedpc{background:var(--cd);border:1px solid var(--ln);border-radius:16px;padding:8px 8px 10px;position:relative}.hedpc b{display:block;font-size:13px;font-weight:800;margin:8px 2px 2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hedpc small{display:block;font-size:11px;color:var(--mt);font-weight:600;margin:0 2px}
.hedpth{position:relative;aspect-ratio:16/10;border-radius:11px;overflow:hidden;background:rgba(127,127,127,.18);display:grid;place-items:center}.hedpth img{width:100%;height:100%;object-fit:contain;background:#000}.hedpth0{opacity:.5}.hedpth0 .hedic{width:30px;height:30px}
.hedpdu{position:absolute;left:6px;bottom:6px;background:rgba(0,0,0,.62);color:#fff;font-size:10.5px;font-weight:800;padding:2px 7px;border-radius:7px;font-variant-numeric:tabular-nums}
.hedpdt{position:absolute;right:5px;top:5px;width:30px;height:30px;border-radius:50%;border:0;background:rgba(0,0,0,.55);color:#fff;display:grid;place-items:center;padding:0}.hedpdt .hedic{width:16px;height:16px}
.hedmnb{position:absolute;inset:0;z-index:60}.heddd{position:absolute;z-index:70;background:var(--cd);border:1px solid var(--ln);border-radius:14px;box-shadow:0 14px 34px rgba(0,0,0,.42);padding:5px;min-width:150px;max-height:48%;overflow:auto}.hedmn{width:170px}
.heddi{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;border:0;background:none;padding:10px 12px;border-radius:10px;font-size:13px;font-weight:700;text-align:left}.heddi .hedic{width:17px;height:17px;flex:0 0 auto}.hedmn .heddi{justify-content:flex-start}.heddi.on{background:rgba(var(--gr),.18);color:var(--gt,var(--g))}.heddi.dng{color:#d23b3b}.heddi .hedwi{color:#e0a020}
.hed button.hedsel{background-image:none;display:flex;align-items:center;gap:6px;padding:0 10px;white-space:nowrap;text-align:left}.hedsel .hedic{width:13px;height:13px;stroke-width:2.6;flex:0 0 auto}.hedsel.open{border-color:var(--g)}.hedsel .hedwi{color:#e0a020}.hedcr .hedsel{height:36px}
.hedwi{color:#e0a020}.hedchip .hedwi{width:14px;height:14px;vertical-align:-2px;margin-left:4px}
.hedrow{height:var(--hth,48px)}.hedruw{height:26px}
.hedtn{width:var(--hhw,66px);flex:0 0 var(--hhw,66px)}.hedlane{height:var(--hth,48px)}.hedcl{height:calc(var(--hth,48px) - 8px)}.hedjn{top:calc(var(--hth,48px)/2 - 11px)}
.hedkd{top:50%;bottom:auto;margin-top:-12px}.hedkd b{width:12px;height:12px;border-radius:3px;background:linear-gradient(135deg,#fff,var(--g));border:1.5px solid #fff;box-shadow:0 0 0 1.5px rgba(0,0,0,.45),0 0 9px rgba(var(--gr),.95)}
.hedcl.ak-mus:not(.sel){border-color:rgba(74,222,128,.75)}.hedcl.ak-rec:not(.sel){border-color:rgba(251,113,133,.85)}.hedcl.ak-sfx:not(.sel){border-color:rgba(34,211,238,.85)}.hedcl.k-audio{background:#101a17;box-shadow:none}.hedcl.ak-rec{background:#20121a}.hedcl.ak-sfx{background:#0d1c22}
.hedak,.hedakl{position:absolute;top:3px;right:4px;z-index:3;width:16px;height:16px;border-radius:50%;display:grid;place-items:center;background:rgba(0,0,0,.55);color:#fff;pointer-events:none}.hedakl{right:auto;left:4px}.hedak .hedic,.hedakl .hedic{width:10px;height:10px}.hedcl.ak-mus .hedak{color:#4ade80}.hedcl.ak-rec .hedak{color:#fb7185}.hedcl.ak-sfx .hedak{color:#22d3ee}.hedcl.grp:not(.sel){outline:2px dashed rgba(var(--gr),.8);outline-offset:-3px}
.hedrg{display:none;place-items:center;width:100%;height:100%;color:var(--gt,var(--g));touch-action:none;cursor:nwse-resize}.hedrg .hedic{width:15px;height:15px}.rsm .hedrg{display:grid}.rsm .hedcorner{touch-action:none}
.hedspl{display:none;height:18px;align-items:center;justify-content:center;background:var(--cd);touch-action:none;cursor:ns-resize;border-top:1px solid var(--ln);border-bottom:1px solid var(--ln)}.hedspl i{width:54px;height:5px;border-radius:5px;background:var(--g);box-shadow:0 0 8px rgba(var(--gr),.7)}.rsm .hedspl{display:flex}
.rsm .hedpv{outline:1.5px dashed rgba(var(--gr),.6);outline-offset:-3px}.rsm .hedts{outline:1.5px dashed rgba(var(--gr),.5);outline-offset:-3px}
#hedms.on{background:rgba(var(--gr),.22);color:var(--gt,var(--g));position:relative}#hedms.on:after{content:"";position:absolute;right:4px;top:5px;width:8px;height:8px;border-radius:50%;background:#22a55a;box-shadow:0 0 0 2px var(--cd)}
.hedxb.busy{min-width:78px;justify-content:center}.hedxb.busy .hedic{animation:hXs 1.2s linear infinite}@keyframes hXs{to{transform:translateY(-3px)}}
.hedpop.big{max-height:min(68%,540px)}
.hedlt{margin:10px 0 2px!important}.hedlr{display:flex;align-items:center;gap:2px;padding:3px 0;border-radius:14px;position:relative;background:var(--cd);transition:background .15s}.hedlr.on{background:rgba(var(--gr),.16)}.hedlr.off .hedlsel{opacity:.45}.hedlr.ing{box-shadow:inset 3px 0 0 var(--gc,var(--g))}.hedlr.drag{z-index:5;box-shadow:0 10px 26px rgba(0,0,0,.45);background:var(--cd);outline:2px solid var(--g);pointer-events:none}
.hedlr.insb:before,.hedlr.inst:after{content:"";position:absolute;left:8px;right:8px;height:3px;border-radius:3px;background:var(--g);box-shadow:0 0 8px rgba(var(--gr),.9)}.hedlr.insb:before{top:-2px}.hedlr.inst:after{bottom:-2px}
.hedlh{width:34px;height:44px;display:grid;place-items:center;color:var(--mt);flex:0 0 auto;touch-action:none;cursor:grab}.hedlh.nd{width:10px}.hedlh .hedic{width:18px;height:18px}
.hedlck{width:26px;height:26px;margin:0 8px;border-radius:50%;border:2px solid var(--ln);background:none;padding:0;display:grid;place-items:center;flex:0 0 auto;color:var(--hgt)}.hedlck.on{background:linear-gradient(135deg,var(--g),var(--g2));border-color:transparent}.hedlck .hedic{width:14px;height:14px;stroke-width:3}
.hedlsel{flex:1;min-width:0;display:flex;align-items:center;gap:10px;border:0;background:none;padding:2px;text-align:left}.hedlth{width:50px;height:38px;border-radius:9px;flex:0 0 auto;background:#222 center/cover no-repeat;display:grid;place-items:center;font-weight:800;font-size:13px;color:#fff;overflow:hidden}.hedlth .hedic{width:18px;height:18px}.hedlth.t{font-family:serif}.hedlth.a{border:1px solid currentColor}
.hedlnm{flex:1;min-width:0}.hedlnm b{display:block;font-size:12.5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.hedlnm small{display:flex;align-items:center;gap:4px;color:var(--mt);font-size:10.5px;font-weight:700;margin-top:2px}.hedlgi{width:11px;height:11px}
.hedlr .hedib{width:34px;height:40px}.hedlr .hedib.on{color:var(--gt,var(--g))}
.hedlab{position:sticky;bottom:-16px;margin:8px -16px -16px;padding:8px 12px calc(10px + env(safe-area-inset-bottom));background:var(--cd);border-top:1px solid var(--ln);display:flex;align-items:center;gap:6px;z-index:4}.hedlcn{min-width:26px;height:26px;border-radius:13px;background:linear-gradient(135deg,var(--g),var(--g2));color:var(--hgt);font-weight:800;font-size:12px;display:grid;place-items:center;padding:0 7px}
.hedlb{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:none;font-size:10px;font-weight:700;padding:4px 0}.hedlb .hedic{width:20px;height:20px}.hedlb.dng{color:#d23b3b}
.hedxc{position:relative;border-radius:18px;padding:12px 14px;border:1px solid var(--ln);background:rgba(127,127,127,.08);margin:6px 0;overflow:hidden}.hedxsvw{height:54px;margin:-4px 0 4px}.hedxsv{width:100%;height:100%}
.hedxsv line{stroke:var(--g);stroke-width:.45;stroke-dasharray:1;stroke-dashoffset:1;opacity:0;animation:hXl 3.4s ease-in-out infinite}.hedxsv circle{fill:var(--g);opacity:0;transform-box:fill-box;transform-origin:center;animation:hXd 3.4s ease-in-out infinite}.hedxsv .st{fill:var(--gt,var(--g));opacity:0;transform-box:fill-box;transform-origin:center;animation:hXt 3.4s ease-in-out infinite}
@keyframes hXl{0%{stroke-dashoffset:1;opacity:0}15%{opacity:.9}45%{stroke-dashoffset:0;opacity:.9}80%,100%{stroke-dashoffset:0;opacity:0}}@keyframes hXd{0%{opacity:0;transform:scale(0)}18%{opacity:1;transform:scale(1.9)}35%{transform:scale(1)}75%{opacity:1}100%{opacity:0;transform:scale(.3)}}@keyframes hXt{0%{opacity:0;transform:scale(0) rotate(0)}25%{opacity:1;transform:scale(1.6) rotate(45deg)}60%{opacity:1;transform:scale(1) rotate(90deg)}100%{opacity:0;transform:scale(.2) rotate(180deg)}}
.hedxbar{height:12px;border-radius:8px;background:rgba(127,127,127,.25);overflow:hidden}.hedxbar i{display:block;height:100%;border-radius:8px;background:linear-gradient(90deg,var(--g),var(--g2));transition:width .25s}.hedxc.ok{background:rgba(34,165,90,.13);border-color:rgba(34,165,90,.6)}.hedxc.ok .hedxbar i{background:#22a55a}.hedxc.err{background:rgba(210,59,59,.12);border-color:rgba(210,59,59,.6)}.hedxc.err .hedxbar i{background:#d23b3b}
.hedxrow{display:flex;align-items:center;gap:8px;margin-top:10px}.hedxrow b{font-size:18px;font-weight:800;font-variant-numeric:tabular-nums;min-width:52px}.hedxrow span{flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--mt)}.hedxms{color:var(--tx)!important;font-size:13.5px!important}.hedxi{width:42px;height:42px;border-radius:50%;background:rgba(127,127,127,.18)}.hedxi.dng{color:#d23b3b}
.hedxck{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto!important;color:#fff;background:#22a55a}.hedxc.err .hedxck{background:#d23b3b}.hedxck .hedic{width:18px;height:18px;stroke-width:3}
.hedwarn{display:flex;gap:8px;align-items:flex-start;font-size:12px;font-weight:700;line-height:1.35;color:#c98a10;background:rgba(224,160,32,.12);border:1px solid rgba(224,160,32,.4);border-radius:12px;padding:8px 10px;margin:8px 0}.hedwarn .hedic{width:17px;height:17px;flex:0 0 auto;margin-top:1px}
.hedrzo{display:grid;gap:10px}.hedrzb{display:flex;align-items:center;gap:12px;text-align:left;border:1.5px solid var(--ln);background:var(--cd);border-radius:16px;padding:12px}.hedrzb:active{border-color:var(--g)}.hedrzb b{display:block;font-size:14px;font-weight:800}.hedrzb small{display:block;color:var(--mt);font-size:11.5px;font-weight:600;margin-top:3px;line-height:1.3}
.hedrzh{display:flex;align-items:center;gap:10px;margin-bottom:8px}.hedrzh b{font-size:14px;font-weight:800}.hedrzh .hedbt{min-height:34px;padding:6px 12px}
.hedalg{display:flex;gap:6px;margin:6px 0}.hedalg button{flex:1;height:40px;border-radius:11px;border:1.5px solid var(--ln);background:var(--cd);display:grid;place-items:center;padding:0}.hedalg .hedic{width:20px;height:20px}
.hedgdr{display:flex;align-items:center;gap:4px}.hedgdr .hedsr{flex:1}.hedbt.dng2{background:#d23b3b!important;box-shadow:none!important;color:#fff!important}

.hednm{min-width:0;max-width:44%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
`;

HEDCSS+=`
.hed button{-webkit-tap-highlight-color:transparent}
.hedhd .ib,.hedhd .ib:active,.hedxb,.hedxb:active{box-shadow:none!important;filter:none!important}
.hedhm .hedhd .ib{box-shadow:none!important}
.hed .hedpdt,.hed .hedpdt:active{background:rgba(0,0,0,.62)!important;color:#fff!important;box-shadow:none!important}.hed .hedpdt .hedic,.hed .hedpdt .hedic *{stroke:#fff!important;color:#fff!important}.hed .hedpdt .hedic circle{fill:#fff!important}
.hed .hedfsx{background:rgba(0,0,0,.62)!important;color:#fff!important;border-radius:50%;box-shadow:none!important}.hed .hedfsx .hedic,.hed .hedfsx .hedic *{stroke:#fff!important;color:#fff!important}
.hedpv canvas.hedovc{position:absolute;pointer-events:none;background:transparent;box-shadow:none;border-radius:0;touch-action:none}
.hedtool{padding:0 1px;box-sizing:border-box}.hedtool>span:last-child{display:block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hedtool .hedtic,.hedtool:active .hedtic,.hedtool:focus .hedtic,.hedtool:hover .hedtic{transition:none;background-image:none;outline:none}
.hedtool:not(.on):not(.dng) .hedtic,.hedtool:not(.on):not(.dng):active .hedtic,.hedtool:not(.on):not(.dng):hover .hedtic,.hedtool:not(.on):not(.dng):focus .hedtic{background:rgba(var(--gr),.17)!important;color:var(--gt,var(--g))!important;border-color:rgba(var(--gr),.28)!important;box-shadow:none}
.hedtic .hedic{width:22px;height:22px;shape-rendering:geometricPrecision;stroke-width:1.9}.hedtool:focus{outline:none}
.hedxb.busy{min-width:78px;justify-content:center}.hedxb.busy .hedic{animation:none}
.hedxc{padding:14px;margin:4px 0}.hedpbody.xfix{display:flex;flex-direction:column;justify-content:center}
.hedxc.run{background:#fff;border-color:#e6dcb8;color:#222}.hedxc.run .hedxrow b{color:#1b1b1b}.hedxc.run .hedxrow span{color:#666}.hedxc.run .hedxbar{background:#ece7d6}.hedxc.run .hedxbar i{background:linear-gradient(90deg,#f0c43a,#e0a800)}.hedxc.run .hedxn{color:#6b6b6b;font-size:11.5px;font-weight:600;line-height:1.4;margin:10px 0 2px}
.hedxc.run .hedbt{background:#f4efe0;color:#222;border:1px solid #e2d8b8;box-shadow:none}.hedxc.run .hedbt.dng2{background:#d23b3b!important;color:#fff!important;border-color:#d23b3b}
.hedxc.ok{background:#1f9d55;border-color:#1f9d55;color:#fff}.hedxc.ok .hedxms{color:#fff!important;font-size:14px!important}.hedxc.ok .hedxbar{background:rgba(255,255,255,.3)}.hedxc.ok .hedxbar i{background:#fff}.hedxc.ok .hedxck{background:rgba(255,255,255,.25)}.hedxc.ok .hedxok{background:#fff!important;color:#1f9d55!important;border:0;box-shadow:none!important;min-height:36px;padding:6px 18px}
.hedxc.err .hedxok{min-height:36px;padding:6px 18px}
.hedxc .hedxrow{margin:0 0 10px}.hedxc.ok .hedxrow{margin:0 0 12px}.hedxc.run .hedxrow{margin:0 0 10px}

.hedxc.ok .hedxck{color:#fff}.hedxc.ok .hedxck .hedic{stroke:#fff}.hedpdt{width:32px!important;height:32px!important}.hedpdt .hedic{width:18px!important;height:18px!important}
`;

HEDCSS+=`
.hed,.hedhm{touch-action:pan-x pan-y}
.hed.xpop .hedbar{visibility:hidden}.hed.xpop .hedpop{bottom:0;max-height:min(78%,560px)}.hed.xpop .hedpbody{padding-bottom:calc(18px + env(safe-area-inset-bottom))}
.hedtic{background:rgba(var(--gr),.17);border-color:rgba(var(--gr),.28)}
.hedtic .hedic{width:24px!important;height:24px!important;stroke-width:2!important;shape-rendering:geometricPrecision}
@supports (background:color-mix(in srgb,red,blue)){.hedtool:not(.on):not(.dng) .hedtic,.hedtool:not(.on):not(.dng):active .hedtic,.hedtool:not(.on):not(.dng):hover .hedtic,.hedtool:not(.on):not(.dng):focus .hedtic{background:color-mix(in srgb,var(--g) 17%,var(--cd))!important;border-color:color-mix(in srgb,var(--g) 32%,var(--cd))!important}.hedtool.dng .hedtic{background:color-mix(in srgb,#dc3c3c 16%,var(--cd))!important;border-color:color-mix(in srgb,#dc3c3c 32%,var(--cd))!important}}
.hedbar,.hedtool{transform:none;will-change:auto;backface-visibility:visible}
.hedxb{min-width:98px;justify-content:center;position:relative;overflow:hidden;box-shadow:none!important}.hedxb>*{position:relative;z-index:1}
.hedxb.busy{background:#fff!important;color:#222!important;border:1px solid #e6dcb8}.hedxb.busy .hedxbf{position:absolute;z-index:0;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,#f6cf4a,#e5ab00);transition:width .25s}.hedxb.busy .hedxbt{font-weight:800;font-variant-numeric:tabular-nums;color:#1b1b1b}
.hedxb.done{background:#1f9d55!important;color:#fff!important;border:0}.hedxb.bad{background:#d23b3b!important;color:#fff!important;border:0}.hedxb.done .hedic,.hedxb.bad .hedic{stroke:#fff}
.hedcc{right:auto;bottom:auto}
`;
HEDCSS+=`
.hedcl.sel{touch-action:pan-x pan-y}.hedcl{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.hedcl.lift{transform:scale(1.025);box-shadow:0 0 0 3px var(--g),0 10px 22px rgba(0,0,0,.5);z-index:8}
.hedh{position:absolute;top:4px;bottom:auto;height:calc(var(--hth,48px) - 8px);width:16px;background:#fff;z-index:6;touch-action:none;display:grid;place-items:center;box-shadow:0 1px 5px rgba(0,0,0,.4)}.hedh.l{border-radius:9px 0 0 9px}.hedh.r{border-radius:0 9px 9px 0}.hedh:after{content:"";position:static;width:3px;height:42%;margin:0;background:#2a2a2a;border-radius:3px}
.hedhpo{position:absolute;z-index:40;display:flex;gap:4px;background:var(--cd);border:1px solid var(--ln);border-radius:14px;padding:4px;box-shadow:0 8px 22px rgba(0,0,0,.4)}.hedhpo button{display:flex;align-items:center;gap:4px;border:0;background:rgba(var(--gr),.14);color:var(--tx);border-radius:10px;padding:7px 10px;font-size:11.5px;font-weight:700;white-space:nowrap}.hedhpo .hedic{width:15px;height:15px;margin-right:-2px}.hedhpo button:active{background:rgba(var(--gr),.35)}
.hedrvp{position:absolute;inset:0;z-index:7;background:rgba(0,0,0,.84);display:flex;align-items:center;padding:0 8px;overflow:hidden}.hedrvp i{position:absolute;left:0;bottom:0;height:4px;width:0;background:linear-gradient(90deg,#f6cf4a,#e5ab00)}.hedrvp span{position:relative;color:#fff;font-size:10.5px;font-weight:800;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}
.hedant.on{border-color:var(--g);background:rgba(var(--gr),.16);box-shadow:0 0 0 2px rgba(var(--gr),.55);position:relative}.hedant.on:after{content:"✓";position:absolute;right:4px;top:3px;width:16px;height:16px;border-radius:50%;background:var(--g);color:var(--hgt);font-size:10px;font-weight:900;display:grid;place-items:center}
`;

HEDCSS+=`
.hedcl.hedld:after{content:"";position:absolute;inset:0;z-index:5;pointer-events:none;background:linear-gradient(100deg,transparent 25%,rgba(255,255,255,.5) 50%,transparent 75%);background-size:220% 100%;animation:hShim 1.05s linear infinite}@keyframes hShim{0%{background-position:160% 0}100%{background-position:-60% 0}}
.hedhpo{flex-direction:column;gap:3px;padding:5px;min-width:180px}.hedhpo button{justify-content:flex-start;width:100%}
.hedrvb{position:absolute;left:4px;bottom:3px;z-index:3;width:16px;height:16px;border-radius:50%;display:grid;place-items:center;background:rgba(0,0,0,.6);color:#fff;pointer-events:none}.hedrvb .hedic{width:10px;height:10px}
.hedjs{width:38px!important;height:26px!important;border-radius:9px!important;padding:0!important;overflow:hidden;top:11px!important;background:var(--cd)!important;border:1.5px solid var(--g)!important}.hedjs .hedanv{width:100%;height:100%;border-radius:0;background:rgba(var(--gr),.12)}.hedjs .hedanb{width:16px;height:12px;border-radius:4px}
`;

HEDCSS+=`
.hedag{display:block;width:22px;height:14px;border-radius:4px;border:1.5px solid rgba(var(--gr),.75);box-sizing:border-box}
.hedjs{width:34px!important;height:24px!important;max-height:calc(var(--hth,48px) - 10px);top:50%!important;margin-top:-12px;display:grid!important;place-items:center;border-radius:8px!important;padding:0!important;overflow:hidden;background:var(--cd)!important;border:1.5px solid var(--g)!important}
.hedop{position:absolute;left:3px;bottom:2px;z-index:3;display:flex;gap:2px;pointer-events:none;max-width:calc(100% - 6px);overflow:hidden}.hedop i{width:15px;height:15px;border-radius:50%;background:rgba(0,0,0,.62);color:#fff;display:grid;place-items:center;flex:0 0 auto}.hedop .hedic{width:9px;height:9px}
.hedbz{position:absolute;left:50%;top:96px;transform:translateX(-50%);z-index:55;display:flex;gap:9px;align-items:center;background:var(--cd);border:1px solid var(--ln);border-radius:22px;padding:8px 15px;font-size:12px;font-weight:700;box-shadow:0 8px 22px rgba(0,0,0,.35);max-width:88%}.hedbz span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hedbz i{flex:0 0 auto;width:15px;height:15px;border-radius:50%;border:2.5px solid var(--g);border-top-color:transparent;animation:hSp .8s linear infinite}@keyframes hSp{to{transform:rotate(360deg)}}
`;

/* ---- open ---- */

D.addEventListener('click',function(e){var b=e.target&&e.target.closest&&e.target.closest('[data-hed]');if(!b)return;e.preventDefault();stAdmGate(function(){hedOpen(true)})});
/* ================= /Huda Editor ================= */
function stHome(){STPN='';var adm=wdIsAdm(),last=S('stlast',''),cs=[['vid','video','st_qv','st_qv_d',0,0],['img','pic','st_qi','st_qi_d',0,0],['cal','cal','st_ccal','',0,0]];if(adm)cs.push(['plus','plus','ed_nm','ed_nm_d',0,1],['code','code','st_hc','st_hc_d',0,1],['font','font','st_hf','st_hf_d',0,1],['dec','shield','wd_nm','',0,1]);wdWarm();
 app.innerHTML='<div class="sthm"><div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic('sparkle')+'</span><b>'+t('st_stud')+'</b></div><p class="sthms">'+t('st_hm_s')+'</p><div class="sthg">'+cs.map(function(x,i){var tag=x[4]?t('st_soon'):x[5]?t('st_adm'):(last==x[0]?t('st_last'):'');return'<button type="button" class="stcd'+(x[5]?' adm':'')+(x[4]?' soon':'')+'" '+(x[4]?'data-stso="1"':x[0]=='plus'?'data-hed="1"':'data-stt="'+x[0]+'"')+' style="animation-delay:'+(i*70)+'ms"><span class="stci">'+ic(x[1])+'</span><b>'+hedtx(x[2])+'</b>'+(x[3]?'<small>'+hedtx(x[3])+'</small>':'')+(tag?'<span class="stct">'+tag+'</span>':'')+'</button>'}).join('')+'</div><p style="text-align:center;font-size:11px;opacity:.55;margin:16px 0 6px">Studio V'+STUDIO_JS_VERSION+'</p></div>'}
function studiov(st){if(stIsHome(st)){stHome();return}if(st.t=='cal'){hcView();return}if(st.t=='code'){stAdmGate(cdrView);return}if(st.t=='font'){stAdmGate(hdfView);return}if(st.t=='plus'){stAdmGate(hedOpen);return}if(st.t=='dec'){wdView();return}var tab=st.t=='vid'?'vid':'img';P('stlast',tab);
 if(st.src=='q'){STSRC='q';STO.n=st.n;STO.f=STO.t=st.a||1}
 else if(st.src=='h'){if(STH){STSRC='h';STO.ht=STH.trs.length?0:-1}else STSRC=''}
 else if(st.n>0){STSRC='q';STO.n=st.n;STO.f=STO.t=1}
 P('sto',STO);var hd=STSRC=='h'&&STH;
 STPN='';
 app.innerHTML='<div class="stbar'+(tab=='vid'?' vm':'')+'"><div class="sthd"><button class="ib" data-back="1" aria-label="back">'+ic('l')+'</button><span class="sthi">'+ic(tab=='vid'?'video':'pic')+'</span><b>'+t(tab=='vid'?'st_qv':'st_qi')+'</b>'+stCrBtn()+'</div><div class="stpv"><canvas id="stpv"></canvas><div id="stwv"><canvas id="stwvc" width="720" height="240"></canvas></div><div class="stgd" id="stgd"></div>'+(tab=='vid'?'':'<span class="stpl">'+t('st_prev')+'</span>')+'<button class="stpx" data-stpx="1" aria-label="close">'+ic('x')+'</button><div id="stout"></div><button class="stpz" data-stpz="1" aria-label="size"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></button></div><div class="mstr" id="mstr"></div>'+stBarHtml(tab=='vid')+'</div><div class="stpn" id="stpn" hidden></div>';
 var so=$('#stout'),pvw=$('.stpv');if(so&&pvw)new MutationObserver(function(){pvw.classList.toggle('hasout',so.childNodes.length>0);pvw.classList.toggle('hasdone',!!so.querySelector('video,img,canvas'));stPnFit()}).observe(so,{childList:true});
 stPsApply();stSumTxt();stPv();msTrRender();msHInit();if(!SURS)stJ('/surah').then(function(d0){SURS=d0;stSumTxt()}).catch(function(){});
 if(!STSRC){STPN='aud';D.querySelectorAll('.tlb[data-sttl]').forEach(function(b){b.classList.toggle('on',b.dataset.sttl=='aud')});stPanel()}}
function stVs(f,to){var n=+$('#stsn').value,cnt=(SURS[n-1]||{}).numberOfAyahs||1;f=Math.min(Math.max(f||1,1),cnt);to=Math.min(Math.max(to||f,f),Math.min(cnt,f+getMaxAyahLimit()-1));var a='',b='';for(var i=1;i<=cnt;i++)a+='<option value="'+i+'"'+(i==f?' selected':'')+'>'+i+'</option>';for(i=f;i<=Math.min(cnt,f+getMaxAyahLimit()-1);i++)b+='<option value="'+i+'"'+(i==to?' selected':'')+'>'+i+'</option>';$('#stfa').innerHTML=a;$('#stta').innerHTML=b}
function stSelFill(){var vid=cur.t=='vid',hd=STSRC=='h'&&STH;
 var ld=function(l){return stJ('/edition?format=text&type=translation&language='+l).catch(function(){return[]})};
 var pr=hd?Promise.resolve():Promise.all([SURS?SURS:stJ('/surah').then(function(d0){return SURS=d0}),STE?STE:Promise.all([ld('ta'),ld('si'),ld('en')]).then(function(r){return STE=r})]);
 pr.then(function(){var el=$('#acb-sel');if(!el)return;var o=STO,html=vzTxtHtml()+'<label>'+t('st_font')+'</label>'+stFoUi(o.fo||C.af);
  if(hd){html+='<div class="mu">'+esc(STH.ref)+'</div><label>'+t('st_hsel')+'</label><select id="stht"><option value="-1">'+t('st_none')+'</option>'+STH.trs.map(function(x,i){return'<option value="'+i+'"'+(o.ht==i?' selected':'')+'>'+esc(x.src||x.lang)+'</option>'}).join('')+'</select>'}
  else{var GL=[['தமிழ்',0],['සිංහල',1],['English',2]],trO='<option value="">'+t('st_none')+'</option>'+GL.map(function(g){var L2=STE[g[1]].filter(function(e){return STOK.indexOf(e.identifier)>=0});return L2.length?'<optgroup label="'+g[0]+'">'+L2.map(function(e){return'<option value="'+esc(e.identifier)+'"'+(o.tr==e.identifier?' selected':'')+'>'+esc(e.name||e.englishName)+' · '+t('st_pd')+'</option>'}).join('')+'</optgroup>':''}).join('')+'<option value="'+HUDA_ID+'"'+(o.tr==HUDA_ID?' selected':'')+'>'+HUDA_ED.name+'</option><option value="__own"'+(o.tr=='__own'?' selected':'')+'>'+t('st_own')+'</option>';
   html+='<label>'+t('st_sura')+'</label><select id="stsn">'+SURS.map(function(s2){return'<option value="'+s2.number+'"'+(s2.number==o.n?' selected':'')+'>'+s2.number+'. '+esc(s2.englishName)+' — '+s2.name+'</option>'}).join('')+'</select><div class="two"><div><label>'+t('st_from')+'</label><select id="stfa"></select></div><div><label>'+t('st_to')+'</label><select id="stta"></select></div></div><label>'+t('st_tr')+'</label><select id="sttr">'+trO+'</select><textarea id="sttro" rows="5" style="width:100%;margin-top:8px"'+(o.tr=='__own'?'':' hidden')+' placeholder="'+esc(t('st_own_h'))+'">'+esc(S('stown',''))+'</textarea><div id="stws"></div>'}
  
  el.innerHTML=html;if(!hd)stVs(o.f,o.t);stSumTxt();stCaUi();stWsUi()})}
var STPV={t:0,raf:0,c:{}};
function stDimP(o,sh){var r=STR[o.ratio]||STR.sq,w,h;if(r[0]>=r[1]){h=sh;w=Math.round(sh*r[0]/r[1])}else{w=sh;h=Math.round(sh*r[1]/r[0])}return[w,h,sh/1080]}
function stPvSoon(){clearTimeout(STPV.t);STPV.t=setTimeout(stPv,80)}
function stPvData(vid){if(!STSRC)return Promise.resolve(null);var hd=STSRC=='h'&&STH,key=hd?'h|'+STO.ht+'|'+vid:[STO.n,STO.f,STO.t,STO.tr,STO.vn,vid?1:0].join('|');if(!STPV.c[key])STPV.c[key]=stData(STO,vid).catch(function(){return null});return STPV.c[key]}
STRAFV=0;
var STLY=[null,null,null];
STWD=null;
function stLayer(W,H,k){var c=STLY[k];if(!c)c=STLY[k]=D.createElement('canvas');if(c.width!=W||c.height!=H){c.width=W;c.height=H}return c}
function stLayerFree(){STLY.forEach(function(c){if(c)stCvFree(c)});STLY=[null,null,null]}
function stAnOpts(){return[['fade',t('st_an_fade')],['slide',t('st_an_slide')],['pan',t('st_an_pan')],['tilt',t('st_an_tilt')],['roll',t('st_an_roll')]]}
function stAnimV(tm,s,e){var d1=Math.min(.7,Math.max(.25,(e-s)*.35)),d2=Math.min(.55,Math.max(.2,(e-s)*.3)),z=function(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)},pi=z((tm-s)/d1),po=z((tm-(e-d2))/d2);return po>0?po:-(1-pi)}
function stCard(c,pr,reg,th,u,o,al,v){var m=o.an||'fade';
 if(m=='fade'||Math.abs(v)<.003){stDraw(c,pr,reg,th,u,o,al);return}
 var W=c.canvas.width,H=c.canvas.height,L=stLayer(W,H,0),lc=L.getContext('2d');lc.setTransform(1,0,0,1,0,0);lc.globalAlpha=1;lc.clearRect(0,0,W,H);stDraw(lc,pr,reg,th,u,o,1);
 var rh=reg.bot-reg.top,t0=reg.top+Math.max(0,(rh-pr.total)/2)+(o.oy||0)/100*rh,pad=14*u,x0=reg.x0-pad,x1=reg.x1+pad,y0=t0-pad,y1=t0+pr.total+pad,pvx=reg.cx,pvy=(y0+y1)/2,mg=Math.max(8,W*.025),a=Math.abs(v);
 c.save();
 if(m=='slide'){c.globalAlpha=al;c.drawImage(L,-v*W*.7,0);c.restore();return}
 var cs=[[x0-pvx,y0-pvy],[x1-pvx,y0-pvy],[x1-pvx,y1-pvy],[x0-pvx,y1-pvy]],
 fit=function(P,s){P.forEach(function(p){var dx=p[0],dy=p[1];if(dx>0)s=Math.min(s,(W-mg-pvx)/dx);else if(dx<0)s=Math.min(s,(mg-pvx)/dx);if(dy>0)s=Math.min(s,(H-mg-pvy)/dy);else if(dy<0)s=Math.min(s,(mg-pvy)/dy)});return Math.max(.2,s)};
 if(m=='roll'){var ang=Math.max(-1.1,Math.min(1.1,v*.62*1)),cn=Math.cos(ang),sn=Math.sin(ang),s0=fit(cs.map(function(p){return[p[0]*cn-p[1]*sn,p[0]*sn+p[1]*cn]}),1-.22*a);c.globalAlpha=al;c.translate(pvx,pvy);c.rotate(ang);c.scale(s0,s0);c.translate(-pvx,-pvy);c.drawImage(L,0,0);c.restore();return}
 var th2=Math.max(-1.25,Math.min(1.25,v*1.08*1)),c2=Math.cos(th2),s2=Math.sin(th2),f=Math.max(W,H)*1.1,pan=m=='pan',
 pj=function(dx,dy){var Z=pan?dx*s2:dy*s2,k=f/(f-Z);return[(pan?dx*c2:dx)*k,(pan?dy:dy*c2)*k,k]},
 s=fit(cs.map(function(p){var q=pj(p[0],p[1]);return[q[0],q[1]]}),1),L2=stLayer(W,H,2),l2=L2.getContext('2d');l2.setTransform(1,0,0,1,0,0);l2.clearRect(0,0,W,H);
 var N=Math.max(24,Math.ceil((pan?x1-x0:y1-y0)/6)),j,a0,a1,q0,q1,qc,kc;
 for(j=0;j<N;j++){
  if(pan){a0=x0+(x1-x0)*j/N;a1=x0+(x1-x0)*(j+1)/N;q0=pj(a0-pvx,0);q1=pj(a1-pvx,0);kc=pj((a0+a1)/2-pvx,0)[2];var xl=pvx+s*q0[0],xr=pvx+s*q1[0];l2.drawImage(L,a0,0,a1-a0,H,Math.min(xl,xr),pvy+s*(0-pvy)*kc,Math.abs(xr-xl)+.8,s*H*kc)}
  else{a0=y0+(y1-y0)*j/N;a1=y0+(y1-y0)*(j+1)/N;q0=pj(0,a0-pvy);q1=pj(0,a1-pvy);kc=pj(0,(a0+a1)/2-pvy)[2];var yt=pvy+s*q0[1],yb=pvy+s*q1[1];l2.drawImage(L,0,a0,W,a1-a0,pvx+s*(0-pvx)*kc,Math.min(yt,yb),s*W*kc,Math.abs(yb-yt)+.8)}}
 c.globalAlpha=al;c.drawImage(L2,0,0);c.restore()}
function stBgDraw(c,m,W,Hh){if(!m)return;if(m.c){c.drawImage(m.c,0,0);return}var v=m.v;if(v&&v.readyState>1&&v.videoWidth){var s=Math.max(W/v.videoWidth,Hh/v.videoHeight),w=v.videoWidth*s,h=v.videoHeight*s;c.drawImage(v,(W-w)/2,(Hh-h)/2,w,h)}else if(m.lc)c.drawImage(m.lc,0,0);c.fillStyle='rgba(0,0,0,'+m.dim+')';c.fillRect(0,0,W,Hh);if(m.ov)c.drawImage(m.ov,0,0)}
function stBgMix(c,bg,vb,i,last,W,Hh,st,lt){var pv=i>0?vb[i-1]:null,xf=.6;
 if(!pv||!vb[i]||lt>=xf){stVbFrame(c,vb,i,last,W,Hh,st);return}
 var L=stLayer(W,Hh,1),l=L.getContext('2d');l.setTransform(1,0,0,1,0,0);l.globalAlpha=1;l.clearRect(0,0,W,Hh);l.drawImage(bg,0,0);stVbFrame(l,vb,i,last,W,Hh,st);
 stBgDraw(c,pv,W,Hh);var p=Math.max(0,lt/xf);p=p*p*(3-2*p);c.save();c.globalAlpha=p;c.drawImage(L,0,0);c.restore()}
function stAyW(a,o){var w=a.text.split(' ');if(o.n!=1&&o.n!=9&&a.numberInSurah==1&&w.length>4&&w[0].replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g,'')=='بسم')w=w.slice(4);return w}
function stSel(o){return(o.wsk==o.n+':'+o.f+':'+o.t&&Array.isArray(o.ws))?o.ws:null}
function stWsUi(){var e=$('#stws');if(!e)return;if(STSRC!='q'||!$('#stsn')){e.innerHTML='';return}
 var o=STO,sig=o.n+':'+o.f+':'+o.t;if(o.wsk!=sig){o.wsk=sig;o.ws=null;P('sto',STO)}
 var go=function(d){var sl=stSel(o),h='<h4>'+t('st_ws')+'</h4><p class="mu">'+t('st_wsh')+'</p><div class="stwc" style="font-family:'+(o.fo||C.af)+'">';
  d.forEach(function(x){h+='<span class="stwn">'+x.num+'</span>';x.w.forEach(function(w,wi){var k=x.num+'.'+wi;h+='<button type="button" class="stch stw'+((!sl||sl.indexOf(k)>=0)?' on':'')+'" data-stw="'+k+'">'+esc(w)+'</button>'})});
  e.innerHTML=h+'</div><div class="two"><button class="btn" data-stwa="1">'+t('st_wsa')+'</button><button class="btn" data-stwa="0">'+t('st_wsc')+'</button></div>'};
 if(STWD&&STWD.k==sig){go(STWD.d);return}
 e.innerHTML='<p class="mu">'+t('st_busy')+'</p>';
 stJ('/surah/'+o.n+'/editions/quran-uthmani').then(function(dt){var ay=dt[0].ayahs.slice(o.f-1,o.t),d=ay.map(function(a){return{num:a.numberInSurah,w:stAyW(a,o)}});STWD={k:sig,d:d};if($('#stws'))go(d)}).catch(function(){var e2=$('#stws');if(e2)e2.innerHTML=''})}
function hcShareCy(i){hcSt(hct('busy'));hcLibs(false).then(function(){return hcCanvas(i)}).then(function(cv){hcSt('');cv.toBlob(function(b){if(b)cyShareFile(b,hc2('ஹிஜ்ரி காலண்டர்','Hijri calendar'),'image')},'image/png')}).catch(function(){hcSt(hct('ldf'));toast(hct('ldf'))})}
var VZN=48,VZP=['classic','wave','circle','particles','chladni','constellation','nebula','pulse','geometric','line','frequency','matrix','spirograph','voronoi','polar','fractal','mesh','neural','blend','flow','pitch','ribbon','aurora','ripples','starfield'],
VZNM={classic:'Classic',wave:'Wave',circle:'Circle',particles:'Particles',chladni:'Chladni plate',constellation:'Constellation',nebula:'Nebula',pulse:'Pulse',geometric:'Islamic geometric',line:'Line',frequency:'Frequency',matrix:'Matrix',spirograph:'Spirograph',voronoi:'Voronoi',polar:'Polar',fractal:'Fractal',mesh:'3D mesh terrain',neural:'Neural',blend:'Color blend',flow:'Abstract flow',pitch:'Pitch Frequency',ribbon:'3D Ribbon Wave',aurora:'Aurora',ripples:'Ripples',starfield:'Starfield'},
VZB={classic:1,wave:1,line:1,pulse:1,frequency:1},VZD={vz:'classic',vzo:0,vzc:'default',vzc1:'#E3B341',vzc2:'#F7DE8E',vzs:100,vzz:100,vza:100,vzp:'auto',vzd:150,vzg:45,vzv:100,vzb:0,vzar:1,vztr:1,vzm:2},VZFT=null,
VZNP={classic:['#E3B341','#F7DE8E'],wave:['#9b7bff','#ff8fd0','#6fd3ff'],circle:['#f2e6ff','#b69cff'],particles:['#fff4d6','#ffd36b'],chladni:['#f0d9a0','#c4a15a'],constellation:['#ffffff','#8fb8ff'],nebula:['#ff4fa0','#7b5cff','#3fb6ff','#ffb347'],pulse:['#ffe9a8','#E3B341'],geometric:['#f0dfb0','#c9a54b'],line:['#E3B341','#fff0bd'],frequency:['#f2f2f8','#9aa3c7'],matrix:['#2dffc0','#2e8bff','#ffb347'],spirograph:['#efe4ff','#a98bff','#ff9bd2'],voronoi:['#f4e8c8','#d9b865'],polar:['#e8cf8a','#E3B341'],fractal:['#ffffff','#9fd0ff'],mesh:['#f1eee4','#8d96a8'],neural:['#f4efe2','#E3B341'],blend:['#ff4f81','#ffa24d','#ffe34d','#5de08a','#4da6ff','#a066ff'],flow:['#ff5fa2','#ffb347','#7a5cff','#3fd6ff'],pitch:['#E3B341','#fff0bd'],ribbon:['#fff0c8','#e3a43f','#ff8f6b'],aurora:['#4dffb0','#4d9bff','#b36bff'],ripples:['#8ad8ff','#eafaff'],starfield:['#ffffff','#a8c8ff']};
function vzRnd(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function vzRgb(h){var m=String(h||'').match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!m)return[227,179,65];var s=m[1];if(s.length==3)s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2];return[parseInt(s.substr(0,2),16),parseInt(s.substr(2,2),16),parseInt(s.substr(4,2),16)]}
function vzPal(o,th,fx,id){var m=o.vzc||'default',L;
 if(fx)L=fx;
 else if(m=='default')L=VZNP[id]||VZNP.classic;
 else if(m=='all')L=STT.filter(function(x){return x.n!='photo'}).map(function(x){return x.ac}).filter(function(v,i,a){return a.indexOf(v)==i});
 else if(m=='custom')L=[o.vzc1||'#E3B341',o.vzc2||'#F7DE8E'];
 else{var x=m=='auto'?th:(STT.filter(function(z){return z.n==m})[0]||th);L=[x.ac,x.tx]}
 var P=L.map(vzRgb),bg=vzRgb((th.g&&th.g[0])||'#111'),T={},lt=(bg[0]*.3+bg[1]*.6+bg[2]*.1)>=150;if(P.length<2)P.push(P[0]);
 if(lt&&m=='default')P=P.map(function(p){var l=(p[0]*.3+p[1]*.6+p[2]*.1)/255;if(l<=.5)return p;var f=.5/l;return[p[0]*f,p[1]*f,p[2]*f]});
 function mix(x){x=Math.max(0,Math.min(1,x))*(P.length-1);var i=Math.floor(x),j=Math.min(P.length-1,i+1),q=x-i;return[P[i][0]+(P[j][0]-P[i][0])*q,P[i][1]+(P[j][1]-P[i][1])*q,P[i][2]+(P[j][2]-P[i][2])*q]}
 T.c=function(x,al){var m2=mix(x);al=al<0?0:al>1?1:al;return'rgba('+(m2[0]|0)+','+(m2[1]|0)+','+(m2[2]|0)+','+(Math.round(al*1000)/1000)+')'};
 T.a=function(al){return T.c(0,al)};T.b=function(al){return T.c(1,al)};
 T.gco=lt?'source-over':'lighter';return T}
function vzFft(re,im){var n=2048,i,j,k,t1,h,st,c,s,u,v,a,b,len;
 if(!VZFT){var rv=new Uint16Array(n),cs=new Float32Array(n/2),sn=new Float32Array(n/2);for(i=0;i<n;i++){var r=0;for(j=0;j<11;j++)if(i&(1<<j))r|=1<<(10-j);rv[i]=r}for(i=0;i<n/2;i++){cs[i]=Math.cos(2*Math.PI*i/n);sn[i]=-Math.sin(2*Math.PI*i/n)}VZFT={rv:rv,cs:cs,sn:sn}}
 var rv2=VZFT.rv,cs2=VZFT.cs,sn2=VZFT.sn;
 for(i=0;i<n;i++){j=rv2[i];if(j>i){t1=re[i];re[i]=re[j];re[j]=t1;t1=im[i];im[i]=im[j];im[j]=t1}}
 for(len=2;len<=n;len<<=1){h=len>>1;st=n/len;for(i=0;i<n;i+=len)for(k=0;k<h;k++){c=cs2[k*st];s=sn2[k*st];a=i+k;b=a+h;u=re[b]*c-im[b]*s;v=re[b]*s+im[b]*c;re[b]=re[a]-u;im[b]=im[a]-v;re[a]+=u;im[a]+=v}}}
function vzAud(src,sens){
 var seg=[],N=2048,re=new Float32Array(N),im=new Float32Array(N),hw=new Float32Array(N),rw=new Float32Array(N),mag=new Float32Array(N/2),i;
 if(src){if(src.single)seg.push({b:src.single,t:(src.offs&&src.offs[0])||0});else if(src.bufs)src.bufs.forEach(function(b,k){if(b)seg.push({b:b,t:src.offs[k]})})}
 for(i=0;i<N;i++)hw[i]=.5-.5*Math.cos(2*Math.PI*i/(N-1));
 var A={has:seg.length>0,b:new Float32Array(VZN),w:new Float32Array(128),lv:0,bs:0,md:0,hi:0,bt:0,pf:0,pv:0,p:0,pk:null,env:.4,wp:.1,wr:.05,avb:0,lb:-9};
 function fin(tm,dt,bsr){var s=A.b,x,a=0,m=0,h=0;for(x=0;x<10;x++)a+=s[x];for(x=10;x<28;x++)m+=s[x];for(x=28;x<VZN;x++)h+=s[x];A.bs=a/10;A.md=m/18;A.hi=h/20;
  A.avb=A.avb*.94+bsr*.06;if(bsr>A.avb*1.35&&bsr>.28&&tm-A.lb>.16){A.bt=1;A.lb=tm}else A.bt*=Math.pow(.86,dt*30)}
 A.step=function(tm,dt){var s=null,k,j,sr=44100,d0,d1,st0,v;
  for(k=0;k<seg.length;k++)if(tm>=seg[k].t&&tm<seg[k].t+seg[k].b.duration){s=seg[k];break}
  if(s){d0=s.b.getChannelData(0);d1=s.b.numberOfChannels>1?s.b.getChannelData(1):null;sr=s.b.sampleRate;st0=Math.floor((tm-s.t)*sr)-N/2;
   for(j=0;j<N;j++){var ix=st0+j;v=0;if(ix>=0&&ix<d0.length)v=d1?(d0[ix]+d1[ix])*.5:d0[ix];rw[j]=v;re[j]=v*hw[j];im[j]=0}
   vzFft(re,im);for(j=0;j<N/2;j++)mag[j]=Math.sqrt(re[j]*re[j]+im[j]*im[j])*4/N}
  else{rw.fill(0);mag.fill(0)}
  var bw=sr/N,mx=0,vals=new Float32Array(VZN),ra=1,att=1-Math.pow(.35,dt*30),dec=1-Math.pow(.84,dt*30);
  for(j=0;j<VZN;j++){var f0=80*Math.pow(6500/80,j/VZN),f1=80*Math.pow(6500/80,(j+1)/VZN),lo=Math.floor(f0/bw),hi=Math.max(lo,Math.floor(f1/bw)),m=0;for(k=lo;k<=hi;k++)if(mag[k]>m)m=mag[k];
   var lv=Math.max(0,Math.min(1,(20*Math.log10(m+1e-7)+64)/52));lv=Math.pow(lv,1.2);vals[j]=lv;if(lv>mx)mx=lv}
  A.env=Math.max(mx,A.env*Math.pow(.992,dt*30));var gain=Math.max(.7,Math.min(2.2,.8/Math.max(.2,A.env)))*sens,bsr=0;
  for(j=0;j<VZN;j++){var t2=Math.min(1.2,vals[j]*gain);A.b[j]+=(t2-A.b[j])*(t2>A.b[j]?att:dec);if(j<10)bsr+=t2}
  bsr/=10;
  var pk=0,sq=0;for(j=0;j<N;j++){var av=Math.abs(rw[j]);if(av>pk)pk=av;sq+=rw[j]*rw[j]}
  A.wp=Math.max(pk,A.wp*Math.pow(.995,dt*30));var rms=Math.sqrt(sq/N);A.wr=Math.max(rms,A.wr*Math.pow(.995,dt*30));
  for(j=0;j<128;j++){var q=0;for(k=0;k<16;k++)q+=rw[(j*16+k)];A.w[j]=Math.max(-1,Math.min(1,q/16/Math.max(.06,A.wp)*1.6*sens))}
  var tl=Math.max(0,Math.min(1,rms/Math.max(.04,A.wr)))*(rms>.003?1:0);A.lv+=(tl-A.lv)*(tl>A.lv?att:dec);
  /* pitch: strongest spectral peak 80-800 Hz (parabolic interpolation) */
  var pa=Math.ceil(80/bw),pz=Math.floor(800/bw),pm=0,pi=pa;for(j=pa;j<=pz;j++)if(mag[j]>pm){pm=mag[j];pi=j}
  if(pm>.004&&A.lv>.1&&pi>pa&&pi<pz){var y1=mag[pi-1],y2=mag[pi],y3=mag[pi+1],dd=(y1-2*y2+y3),pp=pi+(dd?.5*(y1-y3)/dd:0);A.pv=1;A.pf=A.pf?A.pf*.45+pp*bw*.55:pp*bw}else A.pv=0;
  fin(tm,dt,bsr)};
 A.demo=function(tm,dt){var e=.55+.45*Math.sin(tm*1.9),cn=14+11*Math.sin(tm*.9),j,f;
  for(j=0;j<VZN;j++){var bump=Math.exp(-Math.pow((j-cn)/8,2))+.5*Math.exp(-Math.pow((j-(cn*1.9+4))/6,2)),nz=.5+.5*Math.sin(tm*(5+j*.31)+j*1.7),v=Math.min(1,(.08+.82*bump*e)*(.7+.3*nz)+.06*nz);A.b[j]=A.b[j]*.5+v*.5}
  for(j=0;j<128;j++){f=j/127;A.w[j]=(Math.sin(f*18+tm*9)*.5+Math.sin(f*41-tm*13)*.3+Math.sin(f*7+tm*4)*.2)*e*.9*Math.sin(f*Math.PI)}
  A.lv=.25+e*.55;A.pf=150+70*Math.sin(tm*.8)+25*Math.sin(tm*2.3);A.pv=Math.sin(tm*1.1)>-.6?1:0;
  var bsr=0;for(j=0;j<10;j++)bsr+=A.b[j];fin(tm,dt,bsr/10);var ph=(tm*1.9)%1;A.bt=Math.max(A.bt,Math.max(0,1-ph*3.2)*(ph<.31?1:0))};
 A.demoPk=function(n){var pk=new Float32Array(n);for(var j=0;j<n;j++)pk[j]=Math.max(.08,Math.min(1,.28+.6*Math.abs(Math.sin(j*.37)*Math.cos(j*.11+1))+.14*Math.sin(j*1.7)));return pk};
 A.timeline=function(n,tot){if(!seg.length)return null;var pk=new Float32Array(n),j,m=0;for(j=0;j<n;j++){var t0=tot*j/n,t1=tot*(j+1)/n,mx=0;seg.forEach(function(q){var a=Math.max(t0,q.t),b=Math.min(t1,q.t+q.b.duration);if(b<=a)return;var d=q.b.getChannelData(0),sr=q.b.sampleRate,s=Math.max(0,Math.floor((a-q.t)*sr)),e=Math.min(d.length,Math.floor((b-q.t)*sr)),stp=Math.max(1,Math.floor((e-s)/60));for(var x=s;x<e;x+=stp){var v=Math.abs(d[x]);if(v>mx)mx=v}});pk[j]=mx;if(mx>m)m=mx}
  for(j=0;j<n;j++)pk[j]=m?Math.pow(pk[j]/m,.7):0;return pk};
 return A}
function vzMap(S,x){var f=Math.max(0,Math.min(1,x))*(VZN-1),i=Math.floor(f),j=Math.min(VZN-1,i+1),q=f-i;return S.b[i]*(1-q)+S.b[j]*q}
function vzRr(c,x,y,w,h,r){r=Math.min(r,w/2,h/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();c.fill()}
var VZF={};
VZF.classic=function(c,R,S,T,st,dt){var n=R.bars||Math.round(61*Math.min(1.8,.5+R.d*.55)),pk=S.pk,bw=R.w/n,p=S.p,mid=R.y+R.h/2,i;
 for(i=0;i<n;i++){var f=i/(n-1),x=R.x+(i+.5)*bw,pv=pk?pk[Math.floor(f*(pk.length-1))]:vzMap(S,Math.abs(f*2-1)),live=Math.max(0,1-Math.abs(f-p)*9)*S.lv*.45,hh=Math.max(.05,Math.min(1,pv*.82+live+.04))*R.h*.86;c.fillStyle=f<=p?T.c(f*.9,1):'rgba(150,150,150,.4)';vzRr(c,x-bw*.3,mid-hh/2,bw*.6,hh,bw*.3)}
 c.fillStyle=T.a(.9);c.fillRect(R.x+p*R.w-R.u,R.y+R.h*.03,2*R.u,R.h*.94)};
VZF.wave=function(c,R,S,T,st,dt){var mid=R.y+R.h/2,NL=Math.round(3+R.d*2.4),i,L;st.ph=(st.ph||0)+dt*2.2;
 for(L=0;L<NL;L++){var a=L/(NL-1),pts=[];c.beginPath();for(i=0;i<128;i++){var f=i/127,x=R.x+f*R.w,env=Math.sin(f*Math.PI),v=S.w[i]*(1-a*.5)+Math.sin(f*(9+L*2)+st.ph*(1+L*.3)+L)*.12*S.lv,y=mid-v*env*R.h*.46*(1-a*.3);i?c.lineTo(x,y):c.moveTo(x,y)}
  if(!L){c.lineTo(R.x+R.w,mid);c.lineTo(R.x,mid);c.closePath();var g=c.createLinearGradient(0,R.y,0,R.y+R.h);g.addColorStop(0,T.a(.28));g.addColorStop(.5,T.a(.02));g.addColorStop(1,T.a(.28));c.fillStyle=g;c.fill();c.beginPath();for(i=0;i<128;i++){f=i/127;x=R.x+f*R.w;env=Math.sin(f*Math.PI);y=mid-(S.w[i]+Math.sin(f*9+st.ph)*.12*S.lv)*env*R.h*.46;i?c.lineTo(x,y):c.moveTo(x,y)}}
  c.lineWidth=(L?1.2:3)*R.u;c.strokeStyle=T.c(a,L?.6:1);c.stroke()}};
VZF.circle=function(c,R,S,T,st,dt){var cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.min(R.w,R.h)*.5,r0=m*.46,u=R.u,i;st.r2=(st.r2||0)+(S.lv-(st.r2||0))*Math.min(1,dt*6);st.rot=(st.rot||0)+dt*(.15+S.lv*.5);
 c.lineWidth=2.4*u;c.strokeStyle=T.a(1);c.beginPath();c.arc(cx,cy,r0*(1+S.bs*.22),0,7);c.stroke();
 c.lineWidth=1.5*u;c.strokeStyle=T.b(.8);c.beginPath();c.arc(cx,cy,r0*(.8+st.r2*.2),0,7);c.stroke();
 c.strokeStyle=T.c(.5,.4);c.beginPath();c.arc(cx,cy,r0*(.62+st.r2*.12),0,7);c.stroke();
 var n=Math.round(72*R.d),rb=r0*(1+S.bs*.22)+4*u;c.lineWidth=Math.max(1.4,2.6*u*(1.5/R.d+.3));
 for(i=0;i<n;i++){var a=i/n*Math.PI*2-Math.PI/2+st.rot,v=vzMap(S,Math.abs(i/n*2-1)),r2=rb+v*m*.42+2*u;c.strokeStyle=T.c(i/n,.9);c.beginPath();c.moveTo(cx+Math.cos(a)*rb,cy+Math.sin(a)*rb);c.lineTo(cx+Math.cos(a)*r2,cy+Math.sin(a)*r2);c.stroke()}
 for(i=0;i<n;i+=2){var a2=i/n*Math.PI*2-st.rot*1.5,v2=vzMap(S,Math.abs(i/n*2-1)),r3=r0*.58*(1-v2*.18);c.strokeStyle=T.b(.35+v2*.4);c.beginPath();c.moveTo(cx+Math.cos(a2)*r3,cy+Math.sin(a2)*r3);c.lineTo(cx+Math.cos(a2)*(r3-v2*m*.14-2*u),cy+Math.sin(a2)*(r3-v2*m*.14-2*u));c.stroke()}
 if(S.bt>.05){c.strokeStyle=T.a(S.bt*.5);c.lineWidth=1.4*u;c.beginPath();c.arc(cx,cy,r0*(1.25+(1-S.bt)*.6),0,7);c.stroke()}};
VZF.particles=function(c,R,S,T,st,dt){var n=Math.round(150*R.k*R.d)+20,cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.max(R.w,R.h)*.55,i;
 if(!st.p){st.r=vzRnd(11);st.p=[];for(i=0;i<n;i++)st.p.push({a:st.r()*6.283,d:st.r(),s:.05+st.r()*.12,z:st.r()})}
 var P=st.p,sp=1+S.lv*2.8+S.bt*2;c.globalCompositeOperation=T.gco;
 for(i=0;i<P.length;i++){var q=P[i],d0=q.d;q.d+=q.s*dt*.5*sp*(.4+q.d);q.a+=dt*.1*(q.z-.5);if(q.d>1){q.d=0;d0=0;q.a=st.r()*6.283}var ca=Math.cos(q.a),sa=Math.sin(q.a),r=q.d*m,r0=Math.max(0,r-m*(.02+S.lv*.06)*(.5+q.d)),sz=(.8+q.z*2.2+S.b[(i*7)%VZN]*3)*R.u*(.4+q.d),al=Math.min(1,q.d*3)*(.35+.65*(1-q.d));
  c.strokeStyle=T.c(q.z,al*.7);c.lineWidth=sz*.9;c.beginPath();c.moveTo(cx+ca*r0,cy+sa*r0);c.lineTo(cx+ca*r,cy+sa*r);c.stroke();c.fillStyle=T.c(q.z,al);c.beginPath();c.arc(cx+ca*r,cy+sa*r,sz,0,7);c.fill()}
 var g=c.createRadialGradient(cx,cy,0,cx,cy,m*.3*(1+S.bs));g.addColorStop(0,T.a(.18+S.bs*.2));g.addColorStop(1,T.a(0));c.fillStyle=g;c.fillRect(cx-m,cy-m,m*2,m*2)};
VZF.chladni=function(c,R,S,T,st,dt){var n=Math.round(1500*R.d*Math.min(1,R.k*R.k+.18)),m=Math.min(R.w,R.h),sx=R.x+(R.w-m)/2,sy=R.y+(R.h-m)/2,i;
 if(!st.p){st.r=vzRnd(5);st.p=new Float32Array(n*2);for(i=0;i<n*2;i++)st.p[i]=st.r();st.n1=3;st.m1=5;st.t=0}
 st.t+=dt;if((S.bt>.95&&st.t>.9)||st.t>3.4){st.t=0;st.n1=2+Math.floor(S.md*4+st.r()*3);st.m1=st.n1+1+Math.floor(st.r()*4)}
 var a=st.n1*Math.PI,b=st.m1*Math.PI,P=st.p,amp=.004+S.lv*.03,stp=dt*30*.0015,sz=Math.max(1,1.7*R.u);c.fillStyle=T.a(.92);
 for(i=0;i<P.length/2;i++){var x=P[i*2],y=P[i*2+1],ca=Math.cos(a*x),sa=Math.sin(a*x),cb=Math.cos(b*y),sb=Math.sin(b*y),cb2=Math.cos(b*x),sb2=Math.sin(b*x),ca2=Math.cos(a*y),sa2=Math.sin(a*y),
  f=ca*cb-cb2*ca2,fx=-a*sa*cb+b*sb2*ca2,fy=-b*ca*sb+a*cb2*sa2;
  x-=f*fx*stp+(st.r()-.5)*amp;y-=f*fy*stp+(st.r()-.5)*amp;if(x<0||x>1||y<0||y>1){x=st.r();y=st.r()}P[i*2]=x;P[i*2+1]=y;c.fillRect(sx+x*m,sy+y*m,sz,sz)}};
VZF.constellation=function(c,R,S,T,st,dt){var n=Math.round(56*R.d*Math.min(1.2,R.k+.25)),i,j,q;
 if(!st.p){st.r=vzRnd(21);st.t0=0;st.p=[];for(i=0;i<n;i++)st.p.push({x:st.r(),y:st.r(),vx:(st.r()-.5)*.03,vy:(st.r()-.5)*.03,z:st.r()})}
 var P=st.p,W=R.w,H=R.h,th=Math.min(W,H)*(.2+.05*R.d),mv=1+S.lv*3;st.t0+=dt*2;
 for(i=0;i<P.length;i++){q=P[i];q.x+=q.vx*dt*mv;q.y+=q.vy*dt*mv;if(q.x<0||q.x>1)q.vx*=-1;if(q.y<0||q.y>1)q.vy*=-1}
 c.lineWidth=R.u;for(i=0;i<P.length;i++)for(j=i+1;j<P.length;j++){var dx=(P[i].x-P[j].x)*W,dy=(P[i].y-P[j].y)*H,d=Math.sqrt(dx*dx+dy*dy);if(d<th){c.strokeStyle=T.a((1-d/th)*(.25+S.md*.6));c.beginPath();c.moveTo(R.x+P[i].x*W,R.y+P[i].y*H);c.lineTo(R.x+P[j].x*W,R.y+P[j].y*H);c.stroke()}}
 for(i=0;i<P.length;i++){q=P[i];var tw=.6+.4*Math.sin(st.t0+q.z*20);c.fillStyle=T.c(q.z,.55+.45*tw);c.beginPath();c.arc(R.x+q.x*W,R.y+q.y*H,(1.2+q.z*2.2+S.b[i%VZN]*3.5)*R.u,0,7);c.fill()}};
VZF.nebula=function(c,R,S,T,st,dt){var cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.min(R.w,R.h)*.5,i,k;
 if(!st.p){st.r=vzRnd(8);st.p=[];st.rot=0;var n=Math.round(300*R.d*Math.min(1.2,R.k+.2));for(i=0;i<n;i++){var d=Math.pow(st.r(),.6);st.p.push({d:d,a:(i%3)*2.094+d*5+(st.r()-.5)*.6,z:st.r()})}}
 st.rot+=dt*(.12+S.lv*.6);c.globalCompositeOperation=T.gco;
 var nb=Math.round(5+R.d*2);for(k=0;k<nb;k++){var a=st.rot*(1+k*.2)+k*1.3,r=m*(.18+.14*k/nb)*(1+S.bs*.5),x=cx+Math.cos(a)*m*.25*(k%2?1:.6),y=cy+Math.sin(a)*m*.2*(k%2?.6:1),g=c.createRadialGradient(x,y,0,x,y,r*2.4);g.addColorStop(0,T.c(k/(nb-1),.07+S.lv*.06));g.addColorStop(1,T.c(k/(nb-1),0));c.fillStyle=g;c.fillRect(x-r*2.4,y-r*2.4,r*4.8,r*4.8)}
 var g2=c.createRadialGradient(cx,cy,0,cx,cy,m*.35);g2.addColorStop(0,T.b(.06+S.bs*.08));g2.addColorStop(1,T.b(0));c.fillStyle=g2;c.fillRect(cx-m,cy-m,m*2,m*2);
 for(i=0;i<st.p.length;i++){var q=st.p[i],ang=q.a+st.rot*(1.4-q.d),rr=q.d*m*(1+S.b[i%VZN]*.12),sz=(.8+q.z*1.9)*R.u;c.fillStyle=T.c(q.d,.4+.6*q.z);c.fillRect(cx+Math.cos(ang)*rr,cy+Math.sin(ang)*rr*.62,sz,sz)}};
VZF.pulse=function(c,R,S,T,st,dt){var mid=R.y+R.h/2,n=150,i;if(!st.h){st.h=new Float32Array(n);st.a=0;st.i=0}
 st.a+=dt;while(st.a>=1/36){st.a-=1/36;st.i++;var sg=st.i%3==0?-1:st.i%3==1?1:.35,v=S.lv>.05?Math.min(1,S.bt*.85*S.lv+S.lv*.12*Math.sin(st.i*1.3)+S.bs*.1):0;st.h.copyWithin(0,1);st.h[n-1]=v*sg}
 c.beginPath();for(i=0;i<n;i++){var x=R.x+R.w*i/(n-1),y=mid-st.h[i]*R.h*.48;i?c.lineTo(x,y):c.moveTo(x,y)}
 c.lineWidth=5*R.u;c.strokeStyle=T.a(.18);c.stroke();c.lineWidth=2.2*R.u;c.strokeStyle=T.a(1);c.stroke();c.strokeStyle=T.b(.25);c.lineWidth=R.u;c.beginPath();c.moveTo(R.x,mid);c.lineTo(R.x+R.w,mid);c.stroke()};
VZF.geometric=function(c,R,S,T,st,dt){var cols=Math.max(3,Math.round(R.w/(R.h>R.w?R.w:R.h)*3*R.d)),s=R.w/cols,rows=Math.ceil(R.h/s),cx0=R.x+R.w/2,cy0=R.y+R.h/2,mx=Math.hypot(R.w,R.h)/2,gx,gy,k;st.t=(st.t||0)+dt*(1+S.lv*3);
 c.save();c.beginPath();c.rect(R.x,R.y,R.w,R.h);c.clip();
 for(gy=0;gy<=rows;gy++)for(gx=0;gx<=cols;gx++){var x=R.x+gx*s+s/2,y=R.y+gy*s+s/2,dd=Math.hypot(x-cx0,y-cy0)/mx,w=.5+.5*Math.sin(dd*8-st.t*2.2),r=s*.46*(1+S.b[(gx*3+gy*5)%VZN]*.1);
  c.lineWidth=(1+w*1.6*(.5+S.lv))*R.u;c.strokeStyle=T.c(dd,.3+.55*w);
  for(k=0;k<2;k++){var rot=k*Math.PI/4+Math.PI/8;c.beginPath();for(var j=0;j<4;j++){var a=rot+j*Math.PI/2+Math.PI/4;j?c.lineTo(x+Math.cos(a)*r*1.08,y+Math.sin(a)*r*1.08):c.moveTo(x+Math.cos(a)*r*1.08,y+Math.sin(a)*r*1.08)}c.closePath();c.stroke()}
  c.beginPath();c.arc(x,y,r*.34,0,7);c.stroke();
  var x2=x+s/2,y2=y+s/2,r2=s*.2;c.beginPath();for(j=0;j<8;j++){var a2=j*Math.PI/4,rr=j%2?r2*.5:r2;j?c.lineTo(x2+Math.cos(a2)*rr,y2+Math.sin(a2)*rr):c.moveTo(x2+Math.cos(a2)*rr,y2+Math.sin(a2)*rr)}c.closePath();c.stroke()}
 c.restore()};
VZF.line=function(c,R,S,T,st,dt){var mid=R.y+R.h/2,n=200,L,i,NL=Math.round(2+R.d*1.6);st.ph=(st.ph||0)+dt*(1.5+S.lv*5);
 c.strokeStyle=T.a(.25);c.lineWidth=R.u;c.beginPath();c.moveTo(R.x,mid);c.lineTo(R.x+R.w,mid);c.stroke();
 for(L=0;L<NL;L++){var a=L/(NL-1);c.beginPath();for(i=0;i<=n;i++){var f=i/n,x=R.x+f*R.w,g=Math.exp(-Math.pow((f-.5)/(.16+.1*S.md+.03*L),2)),y=mid+Math.sin(f*(26+L*5)+st.ph*(L%2?-1:1)*(1+L*.15)+L*2)*g*R.h*.42*(.25+S.lv*1.1)*(1-a*.55);i?c.lineTo(x,y):c.moveTo(x,y)}c.lineWidth=(L?1.2:2.4)*R.u;c.strokeStyle=T.c(a,L?.6:1);c.stroke()}};
VZF.frequency=function(c,R,S,T,st,dt){var L=Math.round(10+R.d*7),n=120,i,k;if(!st.h){st.h=[];for(k=0;k<L;k++)st.h.push(new Float32Array(n));st.a=0}
 st.a+=dt;if(st.a>.05){st.a=0;var l=st.h.pop();for(i=0;i<n;i++)l[i]=vzMap(S,i/(n-1));st.h.unshift(l)}
 var gap=R.h/(L+1);for(k=L-1;k>=0;k--){var y0=R.y+R.h*.2+k*gap*.78,h=st.h[k];c.beginPath();for(i=0;i<n;i++){var f=i/(n-1),x=R.x+f*R.w,y=y0-h[i]*Math.sin(f*Math.PI)*R.h*.34;i?c.lineTo(x,y):c.moveTo(x,y)}c.lineWidth=1.4*R.u;c.strokeStyle=T.c(k/(L-1),.9-k*.045);c.stroke()}};
VZF.matrix=function(c,R,S,T,st,dt){var cw=Math.max(7,16*R.u/Math.max(.7,R.d*.8)),cols=Math.max(4,Math.floor(R.w/cw)),rows=Math.ceil(R.h/cw),G='ابتثجحخدذرزسشصضطظعغفقكلمنهوي٠١٢٣٤٥٦٧٨٩01',i,j;
 if(!st.c||st.c.length<cols){st.r=st.r||vzRnd(3);st.c=[];for(i=0;i<cols;i++)st.c.push({y:st.r()*rows,s:6+st.r()*10,l:6+Math.floor(st.r()*10)})}
 c.font=(cw*.9)+'px monospace';c.textAlign='center';c.textBaseline='middle';var sp=.6+S.lv*2.2+S.bt*1.5;
 for(i=0;i<cols;i++){var q=st.c[i];q.y+=q.s*dt*sp*(.5+S.b[i%VZN]);if(q.y-q.l>rows){q.y=0;q.s=6+st.r()*10}
  for(j=0;j<q.l;j++){var yy=Math.floor(q.y)-j;if(yy<0||yy>=rows)continue;c.fillStyle=j==0?T.b(1):T.a((1-j/q.l)*.85);c.fillText(G.charAt((i*7+yy*13+Math.floor(q.y*.5+j))%G.length),R.x+i*cw+cw/2,R.y+yy*cw+cw/2)}}};
VZF.spirograph=function(c,R,S,T,st,dt){var cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.min(R.w,R.h)*.46,L,i,NL=Math.round(1+R.d*1.6);st.t=(st.t||0)+dt*(.2+S.lv);st.ph=(st.ph||0)+dt*.3;
 for(L=0;L<NL;L++){var r=.32+.08*Math.sin(st.t*.3+L)+S.md*.06+L*.035,d=.55+S.bs*.35+.12*Math.sin(st.t*.5+L),k=(1-r)/r,ca=Math.cos(st.ph*(L%2?-1:1)*(1+L*.2)),sa=Math.sin(st.ph*(L%2?-1:1)*(1+L*.2));c.beginPath();for(i=0;i<=720;i++){var th=i/720*Math.PI*2*8,x=(1-r)*Math.cos(th)+d*r*Math.cos(k*th),y=(1-r)*Math.sin(th)-d*r*Math.sin(k*th),X=cx+(x*ca-y*sa)*m*1.12,Y=cy+(x*sa+y*ca)*m*1.12;i?c.lineTo(X,Y):c.moveTo(X,Y)}c.lineWidth=(L?1:1.8)*R.u;c.strokeStyle=T.c(L/Math.max(1,NL-1),L?.6:.95);c.stroke()}};
function vzClip(P,a,b,c0){var o=[],n=P.length;for(var i=0;i<n;i++){var p=P[i],q=P[(i+1)%n],dp=a*p[0]+b*p[1]-c0,dq=a*q[0]+b*q[1]-c0;if(dp<=0)o.push(p);if((dp<0&&dq>0)||(dp>0&&dq<0)){var t=dp/(dp-dq);o.push([p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t])}}return o}
VZF.voronoi=function(c,R,S,T,st,dt){var n=Math.round(22*R.d*Math.min(1.3,R.k+.35)),i,j;if(!st.p){st.r=vzRnd(17);st.t=0;st.p=[];for(i=0;i<n;i++)st.p.push({s:.02+st.r()*.04,ph:st.r()*6.28})}
 st.t+=dt;var pts=st.p.map(function(q){var sp=q.s*(1+S.lv*3);return[R.x+(.5+.46*Math.sin(st.t*sp*3+q.ph)*Math.cos(q.ph*2+st.t*.1))*R.w,R.y+(.5+.46*Math.cos(st.t*sp*2.3+q.ph*1.3))*R.h]});
 c.lineJoin='round';for(i=0;i<pts.length;i++){var poly=[[R.x,R.y],[R.x+R.w,R.y],[R.x+R.w,R.y+R.h],[R.x,R.y+R.h]],p=pts[i];
  for(j=0;j<pts.length&&poly.length;j++){if(j==i)continue;var q=pts[j];poly=vzClip(poly,2*(q[0]-p[0]),2*(q[1]-p[1]),q[0]*q[0]+q[1]*q[1]-p[0]*p[0]-p[1]*p[1])}
  if(poly.length<3)continue;c.beginPath();poly.forEach(function(v,k){k?c.lineTo(v[0],v[1]):c.moveTo(v[0],v[1])});c.closePath();c.fillStyle=T.c(i/pts.length,.05+S.b[i%VZN]*.3);c.fill();c.lineWidth=1.6*R.u;c.strokeStyle=T.a(.9);c.stroke();
  c.fillStyle=T.b(.95);c.beginPath();c.arc(p[0],p[1],2.2*R.u,0,7);c.fill()}};
VZF.polar=function(c,R,S,T,st,dt){var cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.min(R.w,R.h)*.46,u=R.u,k,i;st.a=(st.a||0)+dt*(1.2+S.lv);
 c.lineWidth=u;c.strokeStyle=T.b(.28);var rk=Math.round(4*Math.max(1,R.d*.9));for(k=1;k<=rk;k++){c.beginPath();c.arc(cx,cy,m*k/rk,0,7);c.stroke()}
 var sk=Math.round(12*Math.max(1,R.d));for(k=0;k<sk;k++){var a=k*Math.PI*2/sk;c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+Math.cos(a)*m,cy+Math.sin(a)*m);c.stroke()}
 for(k=0;k<24;k++){var a0=st.a-k*.045;c.fillStyle=T.a(.22*(1-k/24));c.beginPath();c.moveTo(cx,cy);c.arc(cx,cy,m,a0-.045,a0);c.closePath();c.fill()}
 c.strokeStyle=T.a(1);c.lineWidth=1.6*u;c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+Math.cos(st.a)*m,cy+Math.sin(st.a)*m);c.stroke();
 var n=96,f,aa,v,r;c.beginPath();for(i=0;i<=n;i++){f=i/n;aa=f*Math.PI*2-Math.PI/2;v=vzMap(S,Math.abs(f*2-1));r=m*(.22+v*.74);var x=cx+Math.cos(aa)*r,y=cy+Math.sin(aa)*r;i?c.lineTo(x,y):c.moveTo(x,y)}
 c.closePath();c.fillStyle=T.c(.5,.18);c.fill();c.strokeStyle=T.b(.95);c.lineWidth=1.8*u;c.stroke();
 for(i=0;i<n;i+=8){f=i/n;aa=f*Math.PI*2-Math.PI/2;v=vzMap(S,Math.abs(f*2-1));if(v>.45){r=m*(.22+v*.74);c.fillStyle=T.a(1);c.beginPath();c.arc(cx+Math.cos(aa)*r,cy+Math.sin(aa)*r,3*u,0,7);c.fill()}}};
function vzBranch(c,x,y,a,l,dep,sp){if(dep<=0||l<2)return;var ca=Math.cos(a),sa=Math.sin(a),x2=x+ca*l,y2=y+sa*l,xm=x+ca*l*.45,ym=y+sa*l*.45,sd=.9+sp*.5;c.moveTo(x,y);c.lineTo(x2,y2);
 vzBranch(c,xm,ym,a-sd,l*.5,dep-1,sp);vzBranch(c,xm,ym,a+sd,l*.5,dep-1,sp);vzBranch(c,x2,y2,a-sd*.55,l*.55,dep-1,sp);vzBranch(c,x2,y2,a+sd*.55,l*.55,dep-1,sp)}
VZF.fractal=function(c,R,S,T,st,dt){var cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.min(R.w,R.h)*.5,L,k;st.a=(st.a||0)+dt*.12;var dep=R.k<.4?3:(R.d>1.6?5:4);
 for(L=0;L<2;L++){c.beginPath();for(k=0;k<6;k++)vzBranch(c,cx,cy,st.a*(L?-1:1)+k*Math.PI/3,m*(.62+S.bs*.3)*(L?.62:1),dep,S.md+L*.2);c.lineWidth=(L?1:1.6)*R.u;c.strokeStyle=L?T.b(.6):T.a(.95);c.stroke()}};
VZF.mesh=function(c,R,S,T,st,dt){var gx=Math.round(36*Math.min(1.7,R.d)),gz=Math.round(18*Math.min(1.7,R.d)),i,z;if(!st.h){st.h=[];for(z=0;z<gz;z++)st.h.push(new Float32Array(gx));st.a=0}
 st.a+=dt;if(st.a>.07){st.a=0;var l=st.h.pop();for(i=0;i<gx;i++)l[i]=vzMap(S,i/(gx-1));st.h.unshift(l)}
 var cx=R.x+R.w/2,w=R.w*.92,y0=R.y+R.h*.2,base=R.y+R.h*.9;
 function P(ix,iz){var X=ix/(gx-1)-.5,Z=iz/(gz-1),sc=1/(1+Z*1.6),h=st.h[iz][ix]*Math.pow(Math.sin(Math.PI*ix/(gx-1)),.6);return[cx+X*w*sc,y0+(base-y0)*sc-h*R.h*.7*sc,Z]}
 for(z=gz-1;z>=0;z--){c.beginPath();for(i=0;i<gx;i++){var p=P(i,z);i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1])}c.lineWidth=1.3*R.u;c.strokeStyle=T.c(1-z/gz,.95-z/gz*.8);c.stroke()}
 c.lineWidth=R.u;for(i=0;i<gx;i+=2){c.beginPath();for(z=0;z<gz;z++){var q=P(i,z);z?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])}c.strokeStyle=T.a(.28);c.stroke()}};
VZF.neural=function(c,R,S,T,st,dt){var q0=Math.min(1.7,.6+R.d*.4),Ls=[5,8,8,5].map(function(x){return Math.round(x*q0)}),nodes=[],u=R.u,l,i,j;st.t=(st.t||0)+dt;
 for(l=0;l<Ls.length;l++){var arr=[];for(i=0;i<Ls[l];i++)arr.push({x:R.x+R.w*(.1+.8*l/(Ls.length-1)),y:R.y+R.h*(.12+.76*i/Math.max(1,Ls[l]-1)),v:S.b[(l*9+i*3)%VZN]});nodes.push(arr)}
 c.lineWidth=u;for(l=0;l<nodes.length-1;l++)for(i=0;i<nodes[l].length;i++)for(j=0;j<nodes[l+1].length;j++){var a=nodes[l][i],b=nodes[l+1][j],w=(a.v+b.v)*.5;c.strokeStyle=T.a(.08+w*.5);c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke();
  if(w>.18){var ph=(st.t*(.6+S.lv*1.4)+(i*3+j*5+l*7)*.137)%1;c.fillStyle=T.b(.9);c.beginPath();c.arc(a.x+(b.x-a.x)*ph,a.y+(b.y-a.y)*ph,1.8*u,0,7);c.fill()}}
 for(l=0;l<nodes.length;l++)nodes[l].forEach(function(n){var r=(4+n.v*8)*u;c.fillStyle=T.a(.25+n.v*.4);c.beginPath();c.arc(n.x,n.y,r*1.6,0,7);c.fill();c.fillStyle=T.c(n.v,1);c.beginPath();c.arc(n.x,n.y,r,0,7);c.fill()})};
VZF.blend=function(c,R,S,T,st,dt){var cx=R.x+R.w/2,cy=R.y+R.h/2,m=Math.max(R.w,R.h),k;st.t=(st.t||0)+dt*(.25+S.lv*.8);c.globalCompositeOperation='source-over';
 var nbl=Math.round(4+R.d*2.4);for(k=0;k<nbl;k++){var a=st.t*(.7+k*.13)+k*1.1,x=cx+Math.cos(a)*R.w*.3*(1+(k%2)*.2),y=cy+Math.sin(a*1.3+k)*R.h*.3,r=m*(.28+.09*Math.sin(st.t*1.7+k)+S.b[k*6%VZN]*.22),g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,T.c(k/(nbl-1),.4));g.addColorStop(1,T.c(k/(nbl-1),0));c.fillStyle=g;c.fillRect(R.x,R.y,R.w,R.h)}};
VZF.flow=function(c,R,S,T,st,dt){var n=Math.round(5+R.d*3),k,L,i;st.t=(st.t||0)+dt*(.5+S.lv*1.6);c.globalCompositeOperation=T.gco;c.lineCap='round';
 for(k=0;k<n;k++)for(L=0;L<3;L++){c.beginPath();for(i=0;i<=60;i++){var f=i/60,x=R.x+f*R.w,y=R.y+R.h*(.5+(k-(n-1)/2)*.045*7/n)+Math.sin(f*5+st.t+k*.5)*R.h*(.12+S.md*.16)*Math.sin(f*Math.PI*.9+.1)+Math.sin(f*11-st.t*1.3+k)*R.h*.04*(1+S.hi*2)+(L-1)*R.h*.012;i?c.lineTo(x,y):c.moveTo(x,y)}
  c.lineWidth=Math.max(1,(R.h*.05-L*R.h*.014)*(.7+S.lv*.6));c.strokeStyle=T.c(k/(n-1),.18+L*.2);c.stroke()}};
VZF.pitch=function(c,R,S,T,st,dt){var n=Math.round(140*Math.min(1.6,R.d)),u=R.u,i,v,x,y;if(!st.h){st.h=new Float32Array(n).fill(-1);st.a=0}
 st.a+=dt;while(st.a>=.04){st.a-=.04;st.h.copyWithin(0,1);st.h[n-1]=S.pv&&S.pf>70?Math.max(0,Math.min(1,Math.log(S.pf/70)/Math.log(10))):-1}
 var gx=R.x+R.w*.08,gy=R.y+R.h*.06,gw=R.w*.88,gh=R.h*.84;c.lineWidth=.8*u;c.strokeStyle=T.b(.22);c.fillStyle=T.b(.6);c.font=(9*u)+'px sans-serif';c.textAlign='right';c.textBaseline='middle';
 [100,150,200,300,500].forEach(function(f){var yy=gy+gh*(1-Math.log(f/70)/Math.log(10));c.beginPath();c.moveTo(gx,yy);c.lineTo(gx+gw,yy);c.stroke();c.fillText(f,gx-3*u,yy)});
 for(i=0;i<=8;i++){x=gx+gw*i/8;c.beginPath();c.moveTo(x,gy);c.lineTo(x,gy+gh);c.stroke()}
 c.beginPath();var pen=false;for(i=0;i<n;i++){v=st.h[i];if(v<0){pen=false;continue}x=gx+gw*i/(n-1);y=gy+gh*(1-v);if(pen)c.lineTo(x,y);else c.moveTo(x,y);pen=true}c.strokeStyle=T.a(.55);c.lineWidth=1.4*u;c.stroke();
 for(i=0;i<n;i++){v=st.h[i];if(v<0)continue;c.fillStyle=T.a(.4+.6*i/n);c.beginPath();c.arc(gx+gw*i/(n-1),gy+gh*(1-v),2.2*u,0,7);c.fill()}};
VZF.ribbon=function(c,R,S,T,st,dt){st.t=(st.t||0)+dt*(.6+S.lv*1.5);var n=Math.round(60+R.d*30),cy=R.y+R.h/2,k,i,NR=Math.round(2+R.d*1.3);c.globalCompositeOperation=T.gco;
 for(k=0;k<NR;k++){var pts=[];for(i=0;i<=n;i++){var f=i/n,amp=R.h*(.16+S.md*.14)*Math.sin(f*Math.PI),tw=f*7+st.t*.8+k;pts.push([R.x+f*R.w,cy+Math.sin(f*6+st.t+k*1.4)*amp+(k-1)*R.h*.05,R.h*(.07+S.lv*.08)*Math.sin(f*Math.PI*.98+.02)*Math.cos(tw),Math.sin(tw)])}
  for(i=0;i<n;i++){var a=pts[i],b=pts[i+1];c.beginPath();c.moveTo(a[0],a[1]-a[2]);c.lineTo(b[0],b[1]-b[2]);c.lineTo(b[0],b[1]+b[2]);c.lineTo(a[0],a[1]+a[2]);c.closePath();c.fillStyle=T.c((k+(a[3]+1)/2)/NR,.14+.4*Math.abs(a[3]));c.fill()}
  c.beginPath();pts.forEach(function(p,j){j?c.lineTo(p[0],p[1]+p[2]):c.moveTo(p[0],p[1]+p[2])});c.lineWidth=1.2*R.u;c.strokeStyle=T.c(k/Math.max(1,NR-1),.7);c.stroke()}};
VZF.aurora=function(c,R,S,T,st,dt){var k,i,j;st.t=(st.t||0)+dt*(.3+S.lv*.8);c.globalCompositeOperation=T.gco;
 var NA=Math.round(3+R.d);for(k=0;k<NA;k++){c.beginPath();var n=48;for(i=0;i<=n;i++){var f=i/n,x=R.x+f*R.w,y=R.y+R.h*(.3+k*.05)+Math.sin(f*4+st.t*(1+k*.2)+k*1.7)*R.h*(.07+S.md*.1)+Math.sin(f*9-st.t*1.4+k)*R.h*.03;i?c.lineTo(x,y):c.moveTo(x,y)}
  c.lineTo(R.x+R.w,R.y+R.h*.92);c.lineTo(R.x,R.y+R.h*.92);c.closePath();var g=c.createLinearGradient(0,R.y+R.h*.2,0,R.y+R.h*.92);g.addColorStop(0,T.c(k/(NA-1),.15+S.b[k*10%VZN]*.4));g.addColorStop(1,T.c(k/(NA-1),0));c.fillStyle=g;c.fill()}
 if(!st.s){st.r=vzRnd(9);st.s=[];for(j=0;j<Math.round(70*R.d);j++)st.s.push([st.r(),st.r()*.6,st.r()])}
 st.s.forEach(function(q){c.fillStyle=T.b(.5*(.4+.6*Math.abs(Math.sin(st.t*2+q[2]*20))));c.fillRect(R.x+q[0]*R.w,R.y+q[1]*R.h,1.5*R.u,1.5*R.u)})};
VZF.ripples=function(c,R,S,T,st,dt){var i,k;if(!st.p){st.p=[];st.r=vzRnd(4);st.cd=0}st.cd-=dt;
 if((S.bt>.9||S.lv>.55)&&st.cd<=0&&st.p.length<Math.round(8+R.d*4)){st.p.push({x:.15+st.r()*.7,y:.2+st.r()*.6,t:0,a:S.lv});st.cd=.3}
 for(i=st.p.length-1;i>=0;i--){var q=st.p[i];q.t+=dt;if(q.t>2.6){st.p.splice(i,1);continue}var cx=R.x+q.x*R.w,cy=R.y+q.y*R.h,m=Math.min(R.w,R.h);
  for(k=0;k<4;k++){var tt=q.t-k*.2;if(tt<=0)continue;c.strokeStyle=T.c(k/2,Math.max(0,1-tt/2.4)*.85);c.lineWidth=Math.max(.4,(2.4-k*.6)*R.u*(1-tt/3));c.beginPath();c.ellipse(cx,cy,tt*m*.3*(1+q.a*.5),tt*m*.3*(1+q.a*.5)*.55,0,0,7);c.stroke()}}};
VZF.starfield=function(c,R,S,T,st,dt){var n=Math.round(220*R.d*Math.min(1.3,R.k+.3)),cx=R.x+R.w/2,cy=R.y+R.h/2,i;if(!st.p){st.r=vzRnd(2);st.p=[];for(i=0;i<n;i++)st.p.push({a:st.r()*6.283,d:st.r(),z:st.r()})}
 var sp=.25+S.lv*1.8+S.bt*1.2;c.lineCap='round';c.globalCompositeOperation=T.gco;
 for(i=0;i<st.p.length;i++){var q=st.p[i],d0=q.d;q.d+=dt*sp*(.3+q.d*1.6)*.6;if(q.d>1.05){q.d=st.r()*.05;q.a=st.r()*6.283;d0=q.d}var ca=Math.cos(q.a),sa=Math.sin(q.a),r1=q.d*q.d,r0=Math.max(0,r1-(.012+S.lv*.05)*(.4+q.d));
  c.strokeStyle=T.c(q.z,Math.min(1,q.d*1.6));c.lineWidth=(.6+q.d*2.2)*R.u;c.beginPath();c.moveTo(cx+ca*r0*R.w*.55,cy+sa*r0*R.h*.55);c.lineTo(cx+ca*r1*R.w*.55,cy+sa*r1*R.h*.55);c.stroke()}};
function vzReg(o,W,H,id){var p=o.vzp||'auto';if(p=='auto')p=VZB[id]?'bottom':'full';var r=p=='bottom'?{x:.06*W,y:.62*H,w:.88*W,h:.32*H}:p=='center'?{x:.06*W,y:.3*H,w:.88*W,h:.4*H}:p=='top'?{x:.06*W,y:.06*H,w:.88*W,h:.32*H}:{x:0,y:0,w:W,h:H},z=Math.max(.3,Math.min(1.4,(o.vzz||100)/100));
 r.x+=r.w*(1-z)/2;r.y+=r.h*(1-z)/2;r.w*=z;r.h*=z;return r}
function vzMake(o,src,W,H,u,th,tot){
 if(!o||!o.vzo)return null;var id=VZF[o.vz]?o.vz:'classic',fn=VZF[id],T=vzPal(o,th,null,id),A=vzAud(src,Math.max(.3,Math.min(2,(o.vzs||100)/100))),demo=!A.has,R=vzReg(o,W,H,id),V={st:{},last:-1},op=Math.max(.1,Math.min(1,(o.vza==null?100:o.vza)/100)),
 gl=Math.max(0,Math.min(1,(o.vzg==null?45:o.vzg)/100)),dim=Math.max(0,Math.min(.85,(o.vzb||0)/100)),spd=Math.max(.2,Math.min(3,(o.vzv||100)/100)),
 L=document.createElement('canvas'),G=document.createElement('canvas'),lc,gc,gw=Math.max(24,Math.round(W/6)),gh=Math.max(24,Math.round(H/6));
 L.width=W;L.height=H;G.width=gw;G.height=gh;lc=L.getContext('2d');gc=G.getContext('2d');gc.imageSmoothingQuality='high';
 R.u=u;R.k=Math.max(.15,Math.min(1.2,Math.sqrt(R.w*R.h)/620));R.d=Math.max(.4,Math.min(3,(o.vzd||150)/100));A.pk=demo?A.demoPk(61):A.timeline(61,tot||1);
 return{draw:function(c,tm,tt){var dt=tm-V.last;if(!(dt>0&&dt<.25))dt=1/30;V.last=tm;if(demo)A.demo(tm,dt);else A.step(tm,dt);A.p=Math.max(0,Math.min(1,tm/(tt||tot||1)));
  if(dim>0){c.save();c.globalAlpha=1;c.fillStyle='rgba(0,0,0,'+dim+')';c.fillRect(0,0,W,H);c.restore()}
  lc.setTransform(1,0,0,1,0,0);lc.globalAlpha=1;lc.globalCompositeOperation='source-over';lc.clearRect(0,0,W,H);lc.save();lc.lineCap='round';lc.lineJoin='round';try{fn(lc,R,A,T,V.st,dt*spd)}catch(e){}lc.restore();
  c.save();c.globalCompositeOperation='source-over';c.globalAlpha=op;c.drawImage(L,0,0);
  if(gl>0){gc.setTransform(1,0,0,1,0,0);gc.globalCompositeOperation='copy';gc.drawImage(L,0,0,gw,gh);c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';var dk=T.gco=='lighter';c.globalCompositeOperation=dk?'lighter':'source-over';c.globalAlpha=op*gl*(dk?1.15:.45);c.drawImage(G,0,0,W,H)}
  c.restore()}}}
Object.keys(VZD).forEach(function(k){if(STD[k]===undefined)STD[k]=VZD[k];if(STO[k]===undefined)STO[k]=VZD[k]});
var VZPN={q:0,tab:'p'};
function vzPvSrc(){return STPV.aud||null}
function vzPanelStop(){VZPN.q++}
function vzIt(){return STO.vzo&&cur.t=='vid'}
function vzPrep(c,u,o,reg,it,fam,tfam,tl){var pr=stPrep(c,u,o,reg,it,fam,tfam,tl);if(!(o.vzo&&cur.t=='vid'))return pr;
 if(o.vzar===0){pr.aF=Object.assign({},pr.aF,{ls:[]});pr.aH=0;pr.gap=0}
 if(o.vztr===0){pr.tF=null;pr.tH=0;pr.gap=0}
 pr.total=pr.aH+(pr.tF?pr.gap+pr.tH:0);return pr}
function vzTxtHtml(){if(!STO.vzo||cur.t!='vid')return'';return'<div class="vztx"><b>'+t('vz_txt')+'</b><small>'+t('vz_txh')+'</small>'+aoChk('vzar',t('vz_ar'))+aoChk('vztr',t('vz_trn'))+'</div>'}
function vzTh(){var th=stTh(STO);return{g:['#0b0c0f'],ac:th.ac,tx:th.tx}}
function vzThumb(cv,id){var W=cv.width,H=cv.height,c=cv.getContext('2d'),lt=id=='classic'&&(STO.vzc||'default')=='default',T=vzPal(STO,vzTh(),null,id),A=vzAud(null,1),R={x:0,y:0,w:W,h:H,u:.8*W/144,k:Math.max(.15,Math.min(1.2,W/620)),d:1.1,bars:17},st={},N=id=='chladni'?100:42,f;
 if(lt)T.gco='source-over';A.pk=A.demoPk(61);A.p=.42;
 for(f=0;f<N;f++){A.demo(2.2+f/30,1/30);c.setTransform(1,0,0,1,0,0);c.globalCompositeOperation='source-over';c.globalAlpha=1;c.fillStyle=lt?'#f4f1e8':'#14151a';c.fillRect(0,0,W,H);c.save();c.lineCap='round';c.lineJoin='round';try{VZF[id](c,R,A,T,st,1/30)}catch(e){}c.restore()}}
function vzThumbs(){var q=++VZPN.q,L=[].slice.call(D.querySelectorAll('canvas[data-vzid]'));(function step(){if(q!==VZPN.q||!L.length)return;for(var i=0;i<3&&L.length;i++){var cv=L.shift();vzThumb(cv,cv.dataset.vzid)}requestAnimationFrame(step)})()}
function vzCsList(){var nm=lang=='ta'?STN.ta:STN.en,all=STT.filter(function(x){return x.n!='photo'}).map(function(x){return x.ac}).filter(function(v,i,a){return a.indexOf(v)==i}),th=stTh(STO);
 return[['default',t('vz_def'),'linear-gradient(90deg,#E3B341,#ff4fa0,#7b5cff,#3fb6ff,#2dffc0)'],['auto',t('vz_auto'),'linear-gradient(90deg,'+th.ac+','+th.tx+')'],['all',t('vz_all'),'linear-gradient(90deg,'+all.join(',')+')']].concat(STT.map(function(x,i){return x.n=='photo'?null:[x.n,nm[i],'linear-gradient(90deg,'+x.ac+','+x.tx+')']}).filter(Boolean),[['custom',t('vz_cus'),'conic-gradient(#E3B341,#F7DE8E,#8EC5FF,#c2410c,#E3B341)']])}
function vzSub(){var cs=vzCsList().filter(function(x){return x[0]==(STO.vzc||'default')})[0];return esc(VZNM[STO.vz]||'')+' · '+esc(cs?cs[1]:'')}
function vzPanelHtml(){var o=STO,tb=VZPN.tab,h='<div class="stav vzp'+(o.vzo?'':' off')+'"><div class="vzcard"><div class="vzh"><span class="vzi">'+ic('viz')+'</span><div class="vzx"><b>'+t('vz_t')+'</b><small id="vzsub">'+vzSub()+'</small></div><label class="vzsw"><input type="checkbox" data-ao="vzo"'+(o.vzo?' checked':'')+' aria-label="on/off"><i></i></label></div>'+
 '<div class="vzseg" role="tablist">'+[['p','vz_tp'],['c','vz_tc'],['s','vz_ts']].map(function(x){return'<button type="button" role="tab" class="'+(tb==x[0]?'on':'')+'" data-vzt="'+x[0]+'">'+t(x[1])+'</button>'}).join('')+'</div></div>';
 h+='<div class="vzpane" data-pane="p"'+(tb=='p'?'':' hidden')+'><div class="vzg">'+VZP.map(function(id){return'<button type="button" class="vzc'+(o.vz==id?' on':'')+'" data-vzp="'+id+'"><span class="vzt"><canvas width="144" height="144" data-vzid="'+id+'"></canvas></span><small>'+VZNM[id]+'</small></button>'}).join('')+'</div><div class="vzact"><button type="button" class="vzbt" data-vzrnd="1">'+t('vz_rnd')+'</button></div></div>';
 h+='<div class="vzpane" data-pane="c"'+(tb=='c'?'':' hidden')+'><div class="vzcg">'+vzCsList().map(function(x){return'<button type="button" class="vzco'+((o.vzc||'default')==x[0]?' on':'')+'" data-vzcs="'+x[0]+'"><i class="vzbar" style="background:'+x[2]+'"></i><span>'+esc(x[1])+'</span></button>'}).join('')+'</div><div id="vzcus" class="two"'+(o.vzc=='custom'?'':' hidden')+'><div>'+aoCol('vzc1',t('vz_c1'))+'</div><div>'+aoCol('vzc2',t('vz_c2'))+'</div></div></div>';
 h+='<div class="vzpane" data-pane="s"'+(tb=='s'?'':' hidden')+'><h4>'+t('vz_look')+'</h4>'+aoRng('vzd',t('vz_dens'),40,300,10)+aoRng('vzg',t('vz_glow'),0,100,5)+aoRng('vza',t('vz_op'),20,100,5)+aoRng('vzb',t('vz_dim'),0,80,5)+
 '<h4>'+t('vz_mot')+'</h4>'+aoRng('vzv',t('vz_spd'),30,250,10)+aoRng('vzs',t('vz_sens'),30,200,5)+
 '<h4>'+t('vz_lay')+'</h4>'+aoRng('vzz',t('vz_size'),40,130,5)+'<div class="stchs">'+[['auto','vz_pa'],['bottom','vz_pb'],['center','vz_pc'],['top','vz_pt'],['full','vz_pf']].map(function(x){return'<button type="button" class="stch'+(o.vzp==x[0]?' on':'')+'" data-vzpos="'+x[0]+'">'+t(x[1])+'</button>'}).join('')+'</div>'+
 vzTxtHtml()+'<div class="vzact"><button type="button" class="vzbt" data-vzrs="1">'+t('vz_rst')+'</button></div></div></div>';return h}
function vzUi(){vzThumbs()}
function vzOn(){STO.vzo=1;STO.vzar=0;STO.vztr=0;var sw=D.querySelector('[data-ao=vzo]');if(sw)sw.checked=true;var pp=D.querySelector('.vzp');if(pp)pp.classList.remove('off')}
D.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-vzp],[data-vzcs],[data-vzpos],[data-vzt],[data-vzrnd],[data-vzrs]');if(!b)return;var d=b.dataset;
 if(d.vzt){VZPN.tab=d.vzt;D.querySelectorAll('.vzseg button').forEach(function(x){x.classList.toggle('on',x===b)});D.querySelectorAll('.vzpane').forEach(function(p){p.hidden=p.dataset.pane!=d.vzt});return}
 if(d.vzrs){['vzc','vzc1','vzc2','vzs','vzz','vza','vzp','vzd','vzg','vzv','vzb'].forEach(function(k){STO[k]=VZD[k]});P('sto',STO);stPanel();stPvSoon();return}
 var k=d.vzp||d.vzrnd?'vz':d.vzcs?'vzc':'vzp',v=d.vzrnd?VZP[Math.floor(Math.random()*VZP.length)]:(d.vzp||d.vzcs||d.vzpos);STO[k]=v;if((k=='vz')&&!STO.vzo)vzOn();P('sto',STO);
 if(d.vzrnd){D.querySelectorAll('.vzc').forEach(function(x){x.classList.toggle('on',x.dataset.vzp==v)})}
 else[].forEach.call(b.parentNode.querySelectorAll('[data-vzp],[data-vzcs],[data-vzpos]'),function(x){x.classList.toggle('on',x===b)});
 if(k=='vzc'){var cu=$('#vzcus');if(cu)cu.hidden=v!='custom';vzThumbs()}
 var sb=$('#vzsub');if(sb)sb.innerHTML=vzSub();stPvSoon()});
var PA={ac:null,srcs:[]};
function stPaStop(){PA.srcs.forEach(function(s){try{s.stop()}catch(e){}});PA.srcs=[]}
function stPaSync(tm){stPaStop();var A0=STPV.aud;if(STPV.pause||STPV.sk||!A0||!PA.ac||D.querySelector('.stbar.wvm'))return;var ac=PA.ac;try{ac.resume()}catch(e){}var now=ac.currentTime+.04;
 function go(b,t0){if(!b)return;var rel=tm-t0;if(rel>=b.duration)return;var s=ac.createBufferSource();s.buffer=b;s.connect(ac.destination);if(rel>=0)s.start(now,rel);else s.start(now-rel);PA.srcs.push(s)}
 if(A0.single)go(A0.single,A0.offs[0]);else A0.bufs.forEach(function(b,i){go(b,A0.offs[i])})}
function stPvBuf(a,rc){STPV.bc=STPV.bc||{};var k=rc+'|'+a.number;if(!STPV.bc[k])STPV.bc[k]=stGetBuf(PA.ac,a,rc).catch(function(){return null});return STPV.bc[k]}
function stPvCab(){if(!STCA)return null;var k=STCA.s+'|'+STCA.e+'|'+STCA.buf.length+'|'+(STCA.marks?STCA.marks.join(','):'');if(STPV.cak!==k){STPV.cak=k;try{STPV.cab=stCaBuf()}catch(e){STPV.cab=null}}return STPV.cab}
function stPv(){var cv=$('#stpv');if(!cv)return;cancelAnimationFrame(STPV.raf);stPaStop();STPV.aud=null;var vid=cur.t=='vid',o=STO,gen=STPV.gen=(STPV.gen||0)+1;
 stPvData(vid).then(function(dt){var cv2=$('#stpv');if(!cv2)return;
  if(!dt)dt=vid?{items:[],hd:{name:'',sub:'',num:'',tcr:'',src:''},tl:lang,ays:[]}:{items:[{ar:'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',tr:t('st_samp')}],hd:{name:'الفاتحة',sub:'Al-Fatihah · 1:1',num:'1:1',tcr:'',src:''},tl:lang};
  var fam=stFam(o.fo||C.af),tfam=stTf(dt.tl),items=dt.items.slice(0,vid?12:1);
  return Promise.all([stPhotoImg(o),Promise.all(items.map(function(it){return stFonts(fam,tfam,it)}))]).then(function(rs){var cv3=$('#stpv');if(!cv3||cv3!==cv2||gen!==STPV.gen)return;
   var sz=stDimP(o,420),W=sz[0],Hh=sz[1],u=sz[2];cv3.width=W;cv3.height=Hh;var c=cv3.getContext('2d'),th=stTh(o),bg=D.createElement('canvas');bg.width=W;bg.height=Hh;
   var reg=stBase(bg.getContext('2d'),W,Hh,u,o,th,rs[0],Object.assign({},dt.hd)),prs=items.map(function(it){return vzPrep(c,u,o,reg,it,fam,tfam,dt.tl)});
   if(!vid){c.drawImage(bg,0,0);stDraw(c,prs[0],reg,th,u,o,1);return}
   var vbs=items.map(function(it,ix){return stVbItem(ix,W,Hh,u,o,Object.assign({},dt.hd))}),lp=-2,offs=[],tot=10,rc=stRcSafe(o),vzp=null;
   if(STPV.vb)STPV.vb.forEach(function(x){if(x&&x.v)try{x.v.pause()}catch(e){}});STPV.vb=vbs;
   function tl(bufs,single){var off=[],t0=.6,lens=dt.items.map(function(it){return it.ar.length+1}),sl=lens.reduce(function(a,b){return a+b},0),cuts=single?stCutsM(single,dt.items.length):null;
    items.forEach(function(it,i){off.push(t0);var dd=single?(cuts?cuts[i+1]-cuts[i]:single.duration*lens[i]/sl):(bufs&&bufs[i]?bufs[i].duration:(3+it.ar.length*.06));t0+=dd+(single?0:.8)});if(single&&items.length==dt.items.length)t0+=.8;return{offs:off,tot:t0}}
   if(items.length){var T0=tl(null,null);offs=T0.offs;tot=T0.tot}
   function mkViz(){vzp=vzMake(o,STPV.aud,W,Hh,u,th,tot)}mkViz();
   var AC=window.AudioContext||window.webkitAudioContext;if(AC&&!PA.ac){try{PA.ac=new AC()}catch(e){}}
   if(PA.ac&&(items.length||(rc=='custom'&&STCA))){var pr;
    if(rc=='custom'&&STCA){var sb=stPvCab();pr=Promise.resolve(sb?{bufs:items.map(function(){return null}),single:sb}:null)}
    else if(dt.ays&&dt.ays.length)pr=Promise.all(items.map(function(it,i){return dt.ays[i]?stPvBuf(dt.ays[i],rc):null})).then(function(b){return b.some(Boolean)?{bufs:b,single:null}:null});
    else pr=Promise.resolve(null);
    pr.then(function(au){if(!au||gen!==STPV.gen)return;
     if(items.length){var T1=tl(au.bufs,au.single);offs=T1.offs;tot=T1.tot}else{offs=[0];tot=au.single.duration+.4}
     STPV.aud={bufs:au.bufs,single:au.single,offs:offs};if(STPV.pause==null)STPV.pause=true;STPV.rs=1;mkViz()})}
   var lpz=null,lsk=null,ltm=0;
   (function fr(){if($('#stpv')!==cv3||cur.v!='studio'||gen!==STPV.gen){stPaStop();vbs.forEach(function(x){if(x&&x.v)try{x.v.pause()}catch(e){}});return}if(STPV.hold){stPaStop();lpz=null;STPV.raf=requestAnimationFrame(fr);return}
    var tm=stPvClock(tot),pz=!!STPV.pause,sk=!!STPV.sk;if(pz!==lpz||sk!==lsk||STPV.rs||(!sk&&tm<ltm-.4)){lpz=pz;lsk=sk;STPV.rs=0;stPaSync(tm)}ltm=tm;
    var i=-1;for(var k=0;k<offs.length;k++)if(tm>=offs[k])i=k;
    c.globalAlpha=1;c.drawImage(bg,0,0);stBgMix(c,bg,vbs,i,lp,W,Hh,false,i>=0?tm-offs[i]:9);lp=i;if(vzp)vzp.draw(c,tm,tot);
    if(i>=0&&prs[i]){var end=(i+1<offs.length?offs[i+1]:tot)-.2,al=Math.max(0,Math.min(1,(tm-offs[i])/.5,(end-tm)/.4));stCard(c,prs[i],reg,vbs[i]?vbs[i].th:th,u,o,al,stAnimV(tm,offs[i],end))}
    if(o.vp){c.fillStyle=th.ac;c.fillRect(0,Hh-6*u,W*(tm/tot),6*u)}
    STPV.raf=requestAnimationFrame(fr)})()})})}
LZ.f={stUp:stUp,stLibUi:stLibUi,stSave:stSave,stDl:stDl,stShare:stShare,stVdl:stVdl,stWmRead:stWmRead,stOpen:stOpen,stCaLoad:stCaLoad,stCreate:stCreate,stGather:stGather,aoSet:aoSet,stPrevSoon:stPrevSoon,stSumTxt:stSumTxt,studiov:studiov,stVs:stVs,stSelFill:stSelFill,stPvSoon:stPvSoon,stWsUi:stWsUi,vzThumbs:vzThumbs};

/* CHANGELOG
4.4.0 — New: Canva-style mid-edge handles (width/height; crop on media), smaller rotate/move buttons kept clear of the corner dots, small icons on layers for applied edits, static animation samples, Extend to Clip Start/End measured against the main layer. Fixed: gallery video loading (15 s timeout with a clear apology message, busy chip, deferred save, lighter thumbnails), tapping a layer stops playback, Animate All plays a preview, animation changes refresh the timeline at once, clearer reverse icon.
4.3.0 — New: video engine rebuilt (load states, requestVideoFrameCallback with rAF fallback, first-frame placeholder, loading shimmer on the loading layer only, pooled video elements released when idle/closed, separate clock/media-sync/render/timeline-UI steps); trim-handle pop-over with Start / Extend to Clip / Extend to Timeline; main-layer ripple trimming; animation sample shown where an animation exists; '+' half inside the clip; Reset settings; reverse can be stopped and shows a badge; handles farther/frozen while held. Fixed: tool open flicker after Multi Editor (back now pops history), pick-up snap on both clip edges.
4.2.0 — New: Reset on the main toolbar; long-press to move a layer; trim handles outside the clip with a VN-style pop-over (go to start/end, extend to media start/end); Canva-style rotate + move handles that relocate near edges; snapping to sizes/angles of other layers while scaling/rotating; reverse shows per-layer progress; animation previews play after choosing; Animate All shows the chosen animation. Fixed: back button returns to the project list, stuck layer toolbar, Fit/Fill, plus buttons attached to the clip, main track appends without gaps. Also: Animate All has a Between (transition) tab and applies only where a "+" animation button exists (video/overlay tracks). Fixed: page pinch-zoom disabled inside the editor, export card hides the toolbars, header Export button shows progress (white→yellow→green, check icon, tap to reset), pixel-exact crisp tool icons with opaque tiles, timeline waveform/thumbnails drawn at device resolution for only the visible window (no stretching at full zoom).
4.1.0 — New: single Fill/Fit button on video & overlay toolbars. Fixed: project-menu dots and full-screen close icon visibility, shadows behind back/Export buttons, selection handles/guides stay sharp at any preview quality, toolbar icons uniform + crisp, one-line ellipsis labels, 'அமைப்பு' label, long-music waveform, export card fixed size / white→green / Stop+Pause with words / snapshot so later edits never enter a running export, removed non-working snap-hold button.
4.0.0 — Multi Editor: project manager (new/duplicate/rename/delete), in-place pickers, in-card export (pause/cancel, 4K for all devices + weak-device warning), Canva-style Layers (drag order, hide, lock, multi-select, group/ungroup), layer tools Replace/Reverse, recording lands on the audio track at the playhead, per-kind waveform colours, keyframe button +/-, no keyframe pop-up, resize mode (mouse button), Duplicate & Resize / Smart Resize, smart guides, magnetic snapping, spacing indicators, advanced snapping settings; removed the always-on guide-lines option.
*/
