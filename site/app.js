(function(){
const B=window.BP, V=window.BPV, $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const chip=s=>B.statusKey[s]?`<span class="chip c-${s}" title="${esc(B.statusKey[s][1])}">${esc(B.statusKey[s][0])}</span>`:"";
const M=Object.fromEntries(B.modules.map(m=>[m.id,m]));
const F=Object.fromEntries(V.flows.map(f=>[f.id,f]));
const SHORT={M0:"Account & access",M1:"One record per man",M2:"Moving in",M3:"Saving introductions",M4:"Monday call list",M5:"Holds, terms, payments",M6:"108 Days enrollment",M7:"Bookings",M9a:"Montana pre-sale",M8:"108 Minutes weekly",M9b:"Retreat intake",M10:"1:1 admin",M11:"Website",M12:"Testimonials",M13:"Thursday email",M14:"Your assistant",M15:"Library"};
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const table=(head,rows,mono=[])=>`<div class="tablewrap"><table><thead><tr>${head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td class="${mono.includes(i)?'mono':''}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const aud=to=>to==="You"?"you":(to==="Ryan"||to==="Robert")?"team":"men";
const flowsFor=id=>V.flows.filter(f=>f.piece.split(/\s*\/\s*/).includes(id));

$("#t").textContent=B.meta.title;
$("#sub").textContent=`The blueprint · ${B.meta.version} · ${B.meta.date}`;
$("#foot").textContent=B.meta.basis;

const tabs=[["plan","The plan"],["how","How it works"],["workflows","Workflows"],["pieces","The pieces"],["design","System design"],["moving","Moving in"],["tests","Tests"],["timeline","Timeline"],["scope","Scope & price"],["decisions","Your decisions"],["internal","For Tanay"]];
const secHtml=tabs.map(([id,l],i)=>`<a href="#${id}" data-t="${id}" class="${id==='internal'?'int':''}"><span class="num" aria-hidden="true">${i+1}</span>${l}</a>`).join("");
/* Inside the brain map, sync-blueprint.js adds window.WD_MAP: the map's pages and brand, so both share one header.
   The header is one row (☰ menu, brand, ? and light/dark), and the blueprint's sections sit on a pinned row beneath it.
   On its own, the blueprint keeps its sections in the header row. */
const MAP=window.WD_MAP;
if(MAP){
  const menu=$("#mapmenu"),mb=$("#menuBtn");
  menu.innerHTML=MAP.groups.map(g=>`<div class="mgroup${g.items.length>4?" big":""}"><span class="mhead">${esc(g.h)}</span>${g.items.map(x=>`<a href="${esc(x.href)}"${x.sec?` data-t="${esc(x.sec)}"`:""}>${x.n?`<span class="num" aria-hidden="true">${x.n}</span>`:""}${x.color?`<span class="dot" style="background:var(--${x.color})"></span>`:""}${esc(x.l)}</a>`).join("")}</div>`).join("")+(MAP.later||"");
  menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false);});
  const setMenu=open=>{menu.hidden=!open;mb.setAttribute("aria-expanded",String(open));if(open){const a=menu.querySelector("a.on")||menu.querySelector("a");if(a)a.focus({preventScroll:true});}};
  mb.hidden=false;mb.addEventListener("click",e=>{e.stopPropagation();setMenu(menu.hidden);});
  document.addEventListener("click",e=>{if(!menu.hidden&&!menu.contains(e.target))setMenu(false);});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!menu.hidden){setMenu(false);mb.focus();}});
  const br=$("#brand");br.href=MAP.home;br.setAttribute("aria-label","Working Deep home");br.removeAttribute("title");
  br.querySelector(".brand-text").innerHTML=`<b>${esc(MAP.brand[0])}</b><i id="here">Stage 2 · The blueprint</i>`;
  $("#nav").hidden=true;$("#sections").innerHTML=secHtml;$("#sections").hidden=false;$("#help").hidden=false;
  document.querySelector(".top").classList.add("has-map");
}else $("#nav").innerHTML=secHtml;
/* Sticky offsets follow the real heights of the pinned header (and, inside the map, the section row under it). */
const topBar=document.querySelector(".top"),secBar=$("#sections"),setTopH=()=>{const h=topBar.offsetHeight,r=document.documentElement.style;r.setProperty("--hdrh",h+"px");r.setProperty("--toph",(h+(MAP?secBar.offsetHeight:0))+"px");};
setTopH();if(window.ResizeObserver){const ro=new ResizeObserver(setTopH);ro.observe(topBar);ro.observe(secBar);}
const keyHtml=`<div class="key">${Object.keys(B.statusKey).map(k=>`<span>${chip(k)} ${esc(B.statusKey[k][1])}</span>`).join("")}</div>`;
const S={};

/* ================================================================ flowchart */
const ICON={trigger:"▶",action:"⚙",email:"✉",person:"✎",wait:"⏱",decision:"<span>?</span>",end:"■"};
function whoLabel(s){
  switch(s.t){
    case "trigger": return "When";
    case "action": return "The system";
    case "email": return "Email → "+s.to;
    case "person": return s.to==="You"?"You do this":s.to+" does this";
    case "wait": return "Wait";
    case "decision": return "Check";
    case "end": return "Result";
  }
}
function nodeHtml(s){
  const cls=["node","n-"+s.t]; if(s.to){const a=aud(s.to); if(a!=="men") cls.push("to-"+a);}
  let h=`<div class="${cls.join(" ")}"><span class="ic">${ICON[s.t]}</span><span class="lbl"><span class="who">${esc(whoLabel(s))}</span>${esc(s.x)}</span></div>`;
  if(s.t==="decision"){
    h+=`<div class="branches" style="--n:${s.branches.length}">${s.branches.map(b=>`<div class="branch"><span class="bl">${esc(b.label)}</span>${flowHtml(b.steps)}</div>`).join("")}</div>`;
  }
  return h;
}
function flowHtml(steps){ return `<div class="flow">${steps.map((s,i)=>(i?'<div class="conn"></div>':'')+nodeHtml(s)).join("")}</div>`; }
const legend=`<div class="legend">${[["trigger","What starts it"],["action","The system does it"],["decision","A check, with branches"],["wait","A wait"],["email","Email to men"],["email to-you","Email to you"],["email to-team","Email to Ryan / Robert"],["person to-team","A person does it"]].map(([c,l])=>`<span class="sw"><span class="node n-${c.split(" ")[0]} ${c.split(" ")[1]||""}" style="padding:2px 6px;border-left-width:4px"><span class="ic" style="flex:0 0 16px;height:16px;font-size:9px">${ICON[c.split(" ")[0]]}</span></span>${l}</span>`).join("")}</div>`;
function recipients(f){const r=new Set();(function walk(st){st.forEach(s=>{if(s.t==="email")r.add(s.to);if(s.branches)s.branches.forEach(b=>walk(b.steps))})})(f.steps);return [...r]}

/* ================================================================ COVER */
S.cover=`<div class="letter">${B.cover.letter.map(p=>`<p>${esc(p)}</p>`).join("")}</div>
<div class="callout"><strong>The return test.</strong> ${esc(B.cover.returnTest)}</div>
<div class="grid" style="margin-top:20px">
  <div class="card stat"><div class="n">${B.modules.length}</div><div class="l">pieces · ${B.modules.filter(m=>m.part==="A").length} before 1 Dec</div></div>
  <div class="card stat"><div class="n">${V.flows.length}</div><div class="l">workflows, each drawn step by step</div></div>
  <div class="card stat"><div class="n">5</div><div class="l">short check-ins with you</div></div>
  <div class="card stat"><div class="n">${B.decisions.confirm.length+B.decisions.decide.length}</div><div class="l">answers I need from you</div></div>
</div>
<h3>What the marks mean</h3>${keyHtml}`;

/* ================================================================ PLAN */
const op=B.onePage;
S.plan=`<h2>The plan on one page</h2><p class="lead">${esc(op.headline)}</p>
<div class="mtrack">${op.milestones.map(m=>`<div class="mt ${m.id==="—"?"sell":""}"><div class="w">${esc(m.when)}</div><div class="n">${esc(m.name)}</div></div>`).join("")}</div>
<div class="grid">${op.pillars.map(p=>`<div class="card"><div style="margin-bottom:6px">${chip(p.s)}</div><div style="font:500 18px var(--serif);margin-bottom:4px">${esc(p.t)}</div><div>${esc(p.d)}</div></div>`).join("")}</div>
<h3>Each step, and its check-in with you</h3>
<div class="card">${op.milestones.map(m=>`<div class="q" style="grid-template-columns:110px 1fr"><div class="k" style="color:var(--accent)">${esc(m.when)}</div><div><div style="font:500 17px var(--serif)">${m.id!=="—"?esc(m.id)+" · ":""}${esc(m.name)}</div><div>${esc(m.what)}</div>${m.mods.length?`<div style="margin-top:6px">${m.mods.map(x=>{const id=x.split(" ")[0];return `<span class="tag ${M[id]?"link":""}" data-mod="${id}">${esc(id)} ${esc(SHORT[id]||"")}</span>`}).join("")}</div>`:""}${m.check?`<div class="src" style="margin-top:4px">Check-in: ${esc(m.check)}</div>`:""}</div></div>`).join("")}</div>
<h3>What stays exactly as it is</h3>
<div class="card"><ul class="items">${op.protects.map(p=>`<li><span style="color:var(--accent)">♥</span><div>${esc(p)}</div></li>`).join("")}</ul></div>
<div class="callout"><strong>The return test.</strong> ${esc(B.cover.returnTest)}</div>
<h3>What the marks mean</h3>${keyHtml}`;

/* ================================================================ HOW IT WORKS */
function box(x,y,w,h,cls,title,sub,link){
  const lines=[`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/>`];
  const cx=x+w/2;
  if(sub){lines.push(`<text class="t" x="${cx}" y="${y+h/2-4}" text-anchor="middle">${esc(title)}</text><text class="s" x="${cx}" y="${y+h/2+13}" text-anchor="middle">${esc(sub)}</text>`)}
  else lines.push(`<text class="t" x="${cx}" y="${y+h/2+5}" text-anchor="middle">${esc(title)}</text>`);
  return link?`<g class="click" data-${link[0]}="${link[1]}"><title>Open ${link[1]}</title>${lines.join("")}</g>`:lines.join("");
}
const arrow=(d,dash)=>`<path class="ar ${dash?"dash":""}" d="${d}" marker-end="url(#ah)"/>`;
function systemMap(){
  const L=[],ins=[["Phone button","Introductions","M3"],["Website","Pages and landing pages","M11"],["108 Minutes sign-up","First visit · drop-in · member","M8"],["15-minute call","Booked from the site","M7"],["Content (planned)","Insight Timer · YouTube · Substack",null]];
  const offs=[["108 Minutes","Weekly circle","M8"],["108 Days","15½-week cohort","M6"],["Retreats","3–4 days in person","M9b"],["1:1 Coaching","Private, 3 months","M10"]];
  const ext=[["Stripe","Cards","M5","ext"],["Google Calendar","Your calendar","M7","ext"],["Zoom","Your room","M7","ext"],["Spotify","Playlists",null,"ext"],["Signal","By hand","M6","manual"]];
  L.push(`<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--line2)"/></marker></defs>`);
  L.push(`<text class="cap" x="20" y="186">How men come in</text><text class="cap" x="790" y="186">Runs your offerings</text><text class="cap" x="520" y="600" text-anchor="middle">Connected tools, staying as they are</text>`);
  L.push(box(400,10,240,56,"you","You (Speed)","Teach · sell · decide · talk"));
  L.push(box(370,96,300,56,"asst","Your assistant","Answers · finds · acts · suggests",["mod","M14"]));
  L.push(arrow("M520,66 L520,94")); L.push(arrow("M520,152 L520,198"));
  L.push(`<rect class="core" x="300" y="200" width="440" height="270" rx="14"/><text class="h" x="520" y="232" text-anchor="middle">Working Deep CRM</text><text class="s" x="520" y="250" text-anchor="middle">GoHighLevel · one place that remembers every man</text>`);
  const pills=[["One record per man","M1"],["Holds & payments","M5"],["Forms & e-sign","M6"],["Bookings","M7"],["Emails & reminders","M8"],["Library (Feb)","M15"]];
  pills.forEach((p,i)=>{const cx=330+(i%2)*200,cy=272+Math.floor(i/2)*56;L.push(`<g class="click" data-mod="${p[1]}"><title>Open ${p[1]}</title><rect class="pill" x="${cx}" y="${cy}" width="180" height="42" rx="8"/><text x="${cx+90}" y="${cy+26}" text-anchor="middle">${esc(p[0])}</text></g>`)});
  ins.forEach((b,i)=>{const y=200+i*56;L.push(box(20,y,230,46,b[2]?"box":"manual",b[0],b[1],b[2]?["mod",b[2]]:null));L.push(arrow(`M250,${y+23} L298,${Math.min(Math.max(y+23,214),456)}`,!b[2]))});
  offs.forEach((b,i)=>{const y=200+i*62;L.push(box(790,y,230,52,"off",b[0],b[1],["mod",b[2]]));L.push(arrow(`M740,${y+26} L788,${y+26}`))});
  L.push(box(790,450,230,52,"team","Ryan · Robert","Boards and Monday notes",["mod","M6"]));L.push(arrow("M740,450 C760,450 765,476 788,476"));
  ext.forEach((b,i)=>{const x=105+i*170;L.push(box(x,530,150,50,b[3],b[0],b[1],b[2]?["mod",b[2]]:null));L.push(`<path class="ar ${b[3]==="manual"?"dash":""}" d="M${x+75},528 L${Math.min(Math.max(x+75,330),710)},472" marker-start="url(#ah)"/>`)});
  return `<div class="map scrollx"><svg viewBox="0 0 1040 610" style="min-width:760px" role="img" aria-label="System map">${L.join("")}</svg></div>`;
}
S.how=`<h2>How it works</h2><p class="lead">One picture of the whole system, the path a man takes through it, and what a normal week looks like once it's running. Click anything to see the detail behind it.</p>
<h3>The system on one page</h3><div class="card">${systemMap()}<div class="hint" style="margin:8px 0 0">Dashed lines are things that stay manual or are planned for later. Signal can't be connected, so Ryan still adds men by hand.</div></div>
<h3>A man's path through the system</h3><p class="hint">Each step is driven by a workflow. Click a step to see it drawn out.</p>
<div class="journey">${V.journey.map((j,i)=>`<button class="jstep" ${j.wf?`data-wf="${j.wf}"`:`data-mod="${j.piece}"`}><span class="n">${i+1}</span><span class="t">${esc(j.t)}</span><span class="d">${esc(j.d)}</span></button>`).join("")}</div>
<h3>A normal week, once it's running</h3>
<div class="key" style="margin-top:0"><span class="ev a-you" style="display:inline-block;width:auto;margin:0">Comes to you</span><span class="ev a-team" style="display:inline-block;width:auto;margin:0">To Ryan / Robert</span><span class="ev a-men" style="display:inline-block;width:auto;margin:0">To the men</span><span class="ev a-sys" style="display:inline-block;width:auto;margin:0">System, silently</span><span class="ev a-person" style="display:inline-block;width:auto;margin:0">Done by a person, as now</span></div>
<div class="scrollx"><div class="week">${V.week.map(d=>`<div class="day"><div class="dn">${d.d}</div>${d.items.map(it=>{const a=it[2]==="You"?"you":(it[2]==="Ryan"||it[2]==="Robert")?"team":it[2]==="System"?"sys":it[2]==="Person"?"person":"men";return `<button class="ev a-${a}" ${it[3]?`data-wf="${it[3]}"`:""}>${it[0]?`<span class="tm">${esc(it[0])}</span>`:""}${esc(it[1])}</button>`}).join("")}</div>`).join("")}</div></div>
<h3>How a man moves through each offering</h3><div class="card">${B.design.pipelines.map(p=>pipeHtml(p)).join("")}</div>`;
function pipeHtml(p){return `<div style="margin:4px 0 14px"><strong>${esc(p[0])}</strong><div class="pipe">${p[1].map(s=>`<span class="${/Completed|Renewed|Attended|Enrolled \(/.test(s)?"end":/Dropped|Cancelled|Not a fit/.test(s)?"bad":""}">${esc(s)}</span>`).join("")}</div></div>`}

/* ================================================================ WORKFLOWS */
const groups=[...new Set(V.flows.map(f=>f.group))];
const rowsAud=[["You","you",["You"]],["Ryan","team",["Ryan"]],["Robert","team",["Robert"]],["One man","men",["The man"]],["Groups of men","men",["Men","Members"]]];
function matrix(){
  return `<div class="tablewrap"><table class="matrix"><thead><tr><th class="rl">Who gets an email</th>${V.flows.map(f=>`<th><button data-wf="${f.id}" title="${esc(f.name)}">${f.id.replace("WF-","")}</button></th>`).join("")}</tr></thead><tbody>${rowsAud.map(([l,c,keys])=>`<tr><td class="rl">${l}</td>${V.flows.map(f=>{const r=recipients(f);return `<td>${keys.some(k=>r.includes(k))?`<span class="dot ${c}" data-wf="${f.id}" title="${esc(f.id+" · "+f.name)}"></span>`:""}</td>`}).join("")}</tr>`).join("")}</tbody></table></div>`;
}
S.workflows=`<h2>Workflows</h2><p class="lead">Everything the system does on its own, drawn step by step. Pick one on the left. Each starts with what sets it off, and every email says exactly who it goes to.</p>
<div class="card">${legend}</div>
<details class="card" style="padding:0"><summary style="padding:14px 18px;cursor:pointer;font-weight:600">Who hears from the system, and from which workflow <span class="src">(click a dot)</span></summary><div style="padding:0 18px 14px">${matrix()}<p class="hint" style="margin-top:10px">You get ${V.flows.filter(f=>recipients(f).includes("You")).length} kinds of email, mostly Monday morning and Saturday afternoon. Nothing ever goes to a man in your name without your approval, except the routine welcome, reminders and links.</p></div></details>
<div class="filters" id="wff"><button data-g="all" class="on">All</button>${groups.map(g=>`<button data-g="${esc(g)}">${esc(g)}</button>`).join("")}<button data-g="A">Part A only</button></div>
<div class="wfwrap"><div class="wflist" id="wflist"></div><div class="wfdetail card" id="wfdetail"></div></div>`;
let wfSel=V.flows[0].id, wfFilter="all";
function renderWFList(){
  const list=V.flows.filter(f=>wfFilter==="all"||f.group===wfFilter||(wfFilter==="A"&&f.part==="A"));
  const gs=[...new Set(list.map(f=>f.group))];
  $("#wflist").innerHTML=gs.map(g=>`<div class="grp">${esc(g)}</div>${list.filter(f=>f.group===g).map(f=>`<button data-sel="${f.id}" class="${f.id===wfSel?"on":""}"><span class="wid">${f.id}</span><span>${esc(f.name)}</span><span class="pa">${f.part}</span></button>`).join("")}`).join("");
}
function renderWF(){
  const f=F[wfSel], i=V.flows.indexOf(f), r=recipients(f);
  $("#wfdetail").innerHTML=`<div class="head"><span class="mid">${f.id}</span><h3>${esc(f.name)}</h3><span class="part">Part ${f.part} · ${f.piece.split(/\s*\/\s*/).map(p=>`<span class="tag link" data-mod="${p}">${p} ${esc(SHORT[p]||"")}</span>`).join("")}</span></div>
  <div class="plain">${esc(f.plain)}</div>
  ${r.length?`<div class="src" style="margin-bottom:12px">Emails go to: ${r.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div>`:""}
  ${flowHtml(f.steps)}
  <div class="wfnav"><button class="btn" data-sel="${V.flows[(i-1+V.flows.length)%V.flows.length].id}">← Previous</button><button class="btn" data-sel="${V.flows[(i+1)%V.flows.length].id}">Next →</button></div>`;
  $$("#wflist button").forEach(b=>b.classList.toggle("on",b.dataset.sel===wfSel));
}
function openWF(id){ wfSel=id; wfFilter="all"; $$("#wff button").forEach(b=>b.classList.toggle("on",b.dataset.g==="all")); location.hash="workflows"; renderWFList(); renderWF(); }

/* ================================================================ PIECES */
function dag(){
  const ids=B.modules.map(m=>m.id), layer={};
  const L=id=>layer[id]!=null?layer[id]:(layer[id]=V.deps[id].length?1+Math.max(...V.deps[id].map(L)):0);
  ids.forEach(L);
  const cols=Math.max(...Object.values(layer))+1, byCol=[...Array(cols)].map(()=>[]);
  ids.forEach(id=>byCol[layer[id]].push(id));
  byCol.forEach(c=>c.sort((a,b)=>(M[a].part>M[b].part)-(M[a].part<M[b].part)||ids.indexOf(a)-ids.indexOf(b)));
  const W=180,H=44,CX=215,RY=56,PX=10,PY=34, pos={};
  byCol.forEach((c,ci)=>c.forEach((id,ri)=>pos[id]={x:PX+ci*CX,y:PY+ri*RY}));
  const rows=Math.max(...byCol.map(c=>c.length)), w=PX*2+cols*CX-(CX-W), h=PY+rows*RY+6;
  const edges=[],nodes=[];
  ids.forEach(id=>V.deps[id].forEach(d=>{const a=pos[d],b=pos[id];const x1=a.x+W,y1=a.y+H/2,x2=b.x,y2=b.y+H/2,mx=(x1+x2)/2;edges.push(`<path data-from="${d}" data-to="${id}" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2-2},${y2}"/>`)}));
  ids.forEach(id=>{const p=pos[id],m=M[id];nodes.push(`<g class="n p${m.part}" data-mod="${id}" data-node="${id}"><title>${esc(m.title)}</title><rect x="${p.x}" y="${p.y}" width="${W}" height="${H}" rx="8"/><text class="id" x="${p.x+10}" y="${p.y+18}">${id}</text><text x="${p.x+10}" y="${p.y+34}">${esc(SHORT[id])}</text></g>`)});
  const heads=["Start here","Then","Then","Then","Last"].slice(0,cols).map((t,i)=>`<text class="col" x="${PX+i*CX}" y="18">${i+1}. ${t}</text>`);
  return `<div class="dag scrollx"><svg viewBox="0 0 ${w} ${h}" style="min-width:${Math.min(w,900)}px">${heads.join("")}${edges.join("")}${nodes.join("")}</svg></div>`;
}
const Q=[["what","What it is"],["why","Which problem it solves"],["order","Where it comes in the order"],["changes","What changes for you"],["need","What I need from you, and when"],["success","How we'll know it works"],["fence","What's not included"]];
const modHtml=m=>{const fl=flowsFor(m.id);return `<details class="mod" id="mod-${m.id}" data-part="${m.part}" data-status="${m.status}">
<summary><span class="mid">${m.id}</span><span class="mtitle">${esc(m.title)}</span>${chip(m.status)}<span class="part">Part ${m.part} · ${m.ms}</span></summary>
<div class="mbody">${m.blockedBy?`<p class="blocked">Waiting on: ${esc(m.blockedBy)}</p>`:""}
${Q.map(([k,l])=>`<div class="q"><div class="k">${l}</div><div>${esc(m.plain[k])}</div></div>`).join("")}
${fl.length?`<div class="modflows">Workflows in this piece: ${fl.map(f=>`<span class="tag link" data-wf="${f.id}">${f.id} ${esc(f.name)}</span>`).join("")}</div>`:""}
<details class="spec"><summary>Technical detail (for me, and whoever maintains this)</summary><div class="inner">${table(["Part","Specification",""],m.spec.map(r=>[`<strong>${esc(r[0])}</strong>`,esc(r[1]),chip(r[2])]))}</div></details>
</div></details>`};
S.pieces=`<h2>The pieces</h2><p class="lead">Seventeen pieces, built in this order because each one leans on the ones to its left. Hover a piece to see what it depends on; click to open it.</p>
<div class="card">${dag()}<div class="key" style="margin:10px 0 0"><span><span class="chip" style="background:var(--accent-soft);color:var(--partA)">Part A</span> by ≈1 Dec</span><span><span class="chip" style="background:var(--men-bg);color:var(--partB)">Part B</span> by ≈15 Jan / Feb</span></div></div>
<div class="filters" id="f"><button data-f="all" class="on">All</button><button data-f="A">Part A · by 1 Dec</button><button data-f="B">Part B · Jan–Feb</button><button data-f="wait">Waiting on you</button><button data-f="expand">Open all</button></div>
<div id="mods">${B.modules.map(modHtml).join("")}</div>${keyHtml}`;

/* ================================================================ DESIGN */
const d=B.design;
S.design=`<h2>System design</h2><p class="lead">${esc(d.intro)}</p>
<div class="subnav">${["Fields","Enrollment fields","Pipelines","Tags","Products","Calendars","Forms","Emails","Who sees what","Connections"].map((x,i)=>`<a href="#design" data-jump="d${i}">${x}</a>`).join("")}<a href="#workflows">Workflows ↗</a></div>
<h3 id="d0">Fields on every man's record</h3><div class="card">${table(["Group","Field","Key","Type","Options / notes","","Source"],d.fields.map(f=>[esc(f[0]),`<strong>${esc(f[1])}</strong>`,esc(f[2]),esc(f[3]),esc(f[4]),chip(f[5]),`<span class="src">${esc(f[6])}</span>`]),[2])}</div>
<h3 id="d1">Fields on each enrollment</h3><div class="card">${table(["Field","Type","Notes"],d.enrolmentFields.map(f=>[`<strong>${esc(f[0])}</strong>`,esc(f[1]),esc(f[2])]))}</div>
<h3 id="d2">Pipelines</h3><div class="card">${d.pipelines.map(pipeHtml).join("")}</div>
<h3 id="d3">Tags</h3><div class="card">${table(["Tag","Meaning","Set by"],d.tags.map(t=>[esc(t[0]),esc(t[1]),esc(t[2])]),[0])}</div>
<h3 id="d4">Products and prices</h3><div class="card">${table(["Product","Price",""],d.products.map(p=>[`<strong>${esc(p[0])}</strong>`,esc(p[1]),chip(p[2])]))}</div>
<h3 id="d5">Calendars</h3><div class="card">${table(["Calendar","Length","Where","Who can book",""],d.calendars.map(c=>[`<strong>${esc(c[0])}</strong>`,esc(c[1]),esc(c[2]),esc(c[3]),chip(c[4])]))}</div>
<h3 id="d6">Forms and documents</h3><div class="card">${table(["ID","Form","Contents","Piece",""],d.forms.map(f=>[esc(f[0]),`<strong>${esc(f[1])}</strong>`,esc(f[2]),esc(f[3]),chip(f[4])]),[0])}</div>
<h3 id="d7">Emails</h3><div class="card">${table(["ID","Email","To","From","Workflow"],d.emails.map(e=>[esc(e[0]),`<strong>${esc(e[1])}</strong>`,esc(e[2]),esc(e[3]),F[e[4]]?`<span class="tag link" data-wf="${e[4]}">${e[4]}</span>`:esc(e[4])]),[0])}</div>
<h3 id="d8">Who sees what</h3><div class="card">${table(["Person","Sees","Notes"],d.roles.map(r=>[`<strong>${esc(r[0])}</strong>`,esc(r[1]),esc(r[2])]))}</div>
<h3 id="d9">Connections</h3><div class="card">${table(["Tool","What for","Notes",""],d.integrations.map(r=>[`<strong>${esc(r[0])}</strong>`,esc(r[1]),esc(r[2]),chip(r[3])]))}</div>`;

/* ================================================================ MOVING IN */
const owners=[...new Set(B.migration.map(r=>r[1]))];
S.moving=`<h2>Moving in</h2><p class="lead">Everything that exists today, who has it, and when I need it. It all lands in one record per man.</p>
<div class="card fan"><div class="src-col">${owners.map(o=>`<div class="own"><b>${esc(o)}</b>${B.migration.filter(r=>r[1]===o).map(r=>`<div><span>${esc(r[0])}</span><span>${esc(r[5])}</span></div>`).join("")}</div>`).join("")}</div><div class="arrow">➜</div><div class="target">One record per man<div class="src" style="font-family:var(--sans);margin-top:6px">${B.migration.length} sources · nothing merged when in doubt</div></div></div>
<h3>Field by field</h3>
<div class="card">${table(["Source","Who has it","What's in it","Where it goes","How","By"],B.migration.map(r=>[`<strong>${esc(r[0])}</strong>`,esc(r[1]),esc(r[2]),esc(r[3]),esc(r[4]),esc(r[5])]))}</div>
<div class="callout">Squarespace members keep paying on Squarespace until Part B, so nobody is charged twice. Uncertain matches go on a short list for Ryan or me to check by hand.</div>`;

/* ================================================================ TESTS */
const byMod={};B.tests.forEach(t=>t[1].split(/,\s*/).forEach(m=>byMod[m]=(byMod[m]||0)+1));
S.tests=`<h2>How we'll know it works</h2><p class="lead">Each piece is done when its test passes, not when it's built. I run these before each check-in and show you the results.</p>
<div class="grid"><div class="card stat"><div class="n">${B.tests.length}</div><div class="l">tests</div></div><div class="card stat"><div class="n">${B.tests.filter(t=>/M[0-7]\b|M9a/.test(t[1])).length}</div><div class="l">must pass before selling opens</div></div></div>
<div class="card">${table(["Test","Piece","Do this","Pass when"],B.tests.map(t=>[esc(t[0]),t[1].split(/,\s*/).map(m=>M[m]?`<span class="tag link" data-mod="${m}">${m}</span>`:esc(m)).join(""),esc(t[2]),esc(t[3])]),[0])}</div>`;

/* ================================================================ TIMELINE (Gantt) */
function gantt(){
  const g=V.gantt, t0=+new Date(g.start), t1=+new Date(g.end), pc=dt=>Math.max(0,Math.min(100,(+new Date(dt)-t0)/(t1-t0)*100));
  const months=[];for(let dt=new Date(g.start);dt<=new Date(g.end);dt.setMonth(dt.getMonth()+1)){const m=new Date(dt.getFullYear(),dt.getMonth(),1);months.push([m<new Date(g.start)?g.start:m.toISOString().slice(0,10),m.toLocaleString("en-GB",{month:"short",year:m.getMonth()===0||months.length===0?"numeric":undefined})])}
  const fmt=s=>new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"short"});
  const row=(lbl,inner,cls="")=>`<div class="g-row ${cls}"><div class="g-lbl">${lbl}</div><div class="g-track">${inner}</div></div>`;
  let h=`<div class="gantt"><div class="g-head"><div></div><div class="g-months">${months.map(([dt,l])=>`<span style="left:${pc(dt)}%">${l}</span>`).join("")}</div></div>`;
  h+=row("<b>You</b> what your season looks like",g.bands.map(b=>`<div class="g-band ${b.kind}" style="left:${pc(b.from)}%;width:${pc(b.to)-pc(b.from)}%" title="${esc(b.label)}">${esc(b.label)}</div>`).join(""));
  g.rows.forEach(r=>{const m=M[r.id],lbl=m?`<b>${r.id}</b>${esc(SHORT[r.id])}`:`<b>·</b>${esc(r.label)}`;h+=row(lbl,`<div class="g-bar p${r.part}" ${m?`data-mod="${r.id}"`:""} style="left:${pc(r.from)}%;width:${Math.max(.8,pc(r.to)-pc(r.from))}%" title="${esc((m?m.title:r.label)+": "+fmt(r.from)+" – "+fmt(r.to))}"></div>`)});
  h+=`<div style="position:absolute;left:230px;right:0;top:26px;bottom:0;pointer-events:none">${g.marks.map(k=>`<div class="g-vl" style="left:${pc(k.d)}%"></div>`).join("")}<div class="g-vl today" style="left:${pc(g.today)}%"><span>Today</span></div></div>`;
  h+=row("<b>◆</b> Check-ins and dates",g.marks.map((k,i)=>`<span style="position:absolute;left:${pc(k.d)}%;top:${i%2?24:4}px;transform:translateX(-50%);font-size:11px;font-weight:600;white-space:nowrap;background:var(--surface);padding:0 4px;border:1px solid var(--line);border-radius:4px" title="${fmt(k.d)}">◆ ${esc(k.t)}</span>`).join(""),"marks");
  return h+`</div>`;
}
S.timeline=`<h2>Timeline</h2><p class="lead">The build fitted around your November rest, December selling and the January cohort. Click a bar to open that piece.</p>
<div class="card"><div class="scrollx">${gantt()}</div><div class="key" style="margin:12px 0 0"><span><span class="chip" style="background:var(--partA);color:var(--bg)">Part A</span></span><span><span class="chip" style="background:var(--partB);color:var(--bg)">Part B</span></span><span><span class="chip" style="background:var(--partS);color:var(--bg)">Blueprint</span></span><span style="color:var(--B)">│ today</span><span>┆ check-ins and key dates</span></div></div>
<h3>Dates in detail</h3>
<div class="card">${B.timeline.map(e=>`<div class="q" style="grid-template-columns:130px 1fr"><div class="k" style="color:var(--accent)">${esc(e[0])}</div><div>${esc(e[1])} ${chip(e[3])}${e[2]?`<div class="src">${esc(e[2])}</div>`:""}</div></div>`).join("")}</div>`;

/* ================================================================ SCOPE & PRICE */
const sc=B.scope,pr=B.price;
S.scope=`<h2>Scope and price</h2><p class="lead">${esc(sc.inScope)}</p>
<h3>Not included</h3><div class="card"><ul class="items">${sc.out.map(o=>`<li><span>•</span><div>${esc(o)}</div></li>`).join("")}</ul></div>
${sc.since?`<div class="callout"><strong>New since 2 Nov.</strong> ${esc(sc.since)}</div>`:""}<div class="callout"><strong>If something new comes up.</strong> ${esc(sc.change)}</div>
<h3>Policies the build depends on</h3><div class="card">${table(["Policy","Owner","Where it's used",""],B.policies.map(p=>[`<strong>${esc(p[0])}</strong>`,esc(p[1]),esc(p[2]),chip(p[3])]))}</div>
<h3>Price</h3><div class="card"><p style="margin-top:0">${esc(pr.note)}</p><p style="font:500 22px var(--serif)">${esc(pr.fixed)}</p>${table(["Running cost","Detail"],pr.system.map(r=>[`<strong>${esc(r[0])}</strong>`,esc(r[1])]))}</div>
<h3>Risks I'm watching</h3><div class="card">${table(["Risk","What I'll do","Pieces"],B.risks.map(r=>r.map(esc)))}</div>`;

/* ================================================================ DECISIONS */
const dc=B.decisions, saved=store.get("wd-decisions")||{}, partAQ=dc.decide.filter(q=>q.partA);
S.decisions=`<h2>Your decisions</h2><p class="lead">The one thing I need back. Tick or change each line. Your answers stay on this computer until you press Copy and send them to me, or just send me a voice note instead.</p>
<div class="card" id="progress"></div>
<h3>My answers of 22 October: yes, or change?</h3><div class="card">${dc.confirm.map(c=>`<div class="dec" data-id="${c.id}"><div class="t">${c.id}. ${esc(c.t)} <span class="src">· ${esc(c.affects)}</span></div><div class="opts"><label><input type="radio" name="${c.id}" value="Yes"> Yes</label><label><input type="radio" name="${c.id}" value="Change"> Change</label></div><textarea placeholder="If change, how?"></textarea></div>`).join("")}</div>
<h3>Decisions only you can make</h3><div class="card">${dc.decide.map(q=>`<div class="dec" data-id="${q.id}"><div class="t">${q.id}. ${esc(q.t)} ${q.partA?'<span class="chip c-B">Needed for Part A</span>':'<span class="chip c-O">Part B</span>'}</div><div class="opts">${q.opts.map(o=>`<label><input type="checkbox" value="${esc(o)}"> ${esc(o)}</label>`).join("")}</div><textarea placeholder="Anything to add"></textarea><div class="src">Holds up: ${esc(q.blocks)}</div></div>`).join("")}</div>
<h3>What I'll need, and when</h3><div class="card">${table(["What","From","By","Piece"],dc.inputs.map(i=>[esc(i.t),esc(i.from),esc(i.by),esc(i.mod)]))}</div>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><button class="btn primary" id="copy">Copy my answers</button><button class="btn" id="clear">Clear</button></div>
<pre class="out" id="out" hidden></pre>`;

/* ================================================================ INTERNAL */
const maxH=Math.max(...B.modules.map(m=>m.hours)), tot=p=>B.modules.filter(m=>!p||m.part===p).reduce((a,m)=>a+m.hours,0);
S.internal=`<h2>For Tanay</h2><p class="lead">Working notes. Hidden when printed; remove before sending to Speed.</p>
<div class="card"><ul class="items">${B.internal.map(i=>`<li><span>•</span><div>${esc(i)}</div></li>`).join("")}</ul></div>
<h3>Effort by piece (build hours)</h3>
<div class="card">${B.modules.map(m=>`<div class="hbar"><div><b style="color:var(--accent)">${m.id}</b> ${esc(SHORT[m.id])}</div><div><div class="b p${m.part}" style="width:${m.hours/maxH*100}%"></div></div><div class="v">${m.hours} h</div></div>`).join("")}
<div class="grid" style="margin-top:14px"><div class="stat"><div class="n">${tot("A")} h</div><div class="l">Part A</div></div><div class="stat"><div class="n">${tot("B")} h</div><div class="l">Part B</div></div><div class="stat"><div class="n">${tot()+15} h</div><div class="l">Total incl. ≈15 h testing and hand-over</div></div></div></div>`;

/* ================================================================ mount */
$("#main").innerHTML=tabs.map(([id])=>`<section id="s-${id}">${S[id]}</section>`).join("");
renderWFList(); renderWF();

/* dag hover */
$$(".dag g.n").forEach(g=>{
  g.addEventListener("mouseenter",()=>{const id=g.dataset.node;$$(".dag path").forEach(p=>p.classList.toggle("hl",p.dataset.to===id||p.dataset.from===id))});
  g.addEventListener("mouseleave",()=>$$(".dag path").forEach(p=>p.classList.remove("hl")));
});

/* decisions */
$$(".dec").forEach(el=>{const v=saved[el.dataset.id];if(!v)return;el.querySelectorAll("input").forEach(i=>{if((v.picks||[]).includes(i.value))i.checked=true});el.querySelector("textarea").value=v.note||""});
const collect=()=>{const o={};$$(".dec").forEach(el=>{o[el.dataset.id]={picks:[...el.querySelectorAll("input:checked")].map(i=>i.value),note:el.querySelector("textarea").value}});return o};
function progress(){
  const o=collect(), all=[...dc.confirm,...dc.decide], done=all.filter(x=>o[x.id]&&(o[x.id].picks.length||o[x.id].note.trim())).length, a=partAQ.filter(x=>o[x.id]&&(o[x.id].picks.length||o[x.id].note.trim())).length;
  $$(".dec").forEach(el=>{const v=o[el.dataset.id];el.classList.toggle("done",!!(v&&(v.picks.length||v.note.trim())))});
  $("#progress").innerHTML=`<div class="prog-row"><span><strong>${done} of ${all.length}</strong> answered</span><span class="src">${all.length-done} to go</span></div><div class="progress"><div style="width:${done/all.length*100}%"></div></div>
  <div class="prog-row" style="margin-top:14px"><span><strong>${a} of ${partAQ.length}</strong> Part A decisions</span><span class="src">${a===partAQ.length?"Part A can be finished":"these hold up building before 1 Dec"}</span></div><div class="progress"><div style="width:${a/partAQ.length*100}%;background:var(--B)"></div></div>`;
}
progress();
document.addEventListener("input",e=>{if(e.target.closest(".dec")){store.set("wd-decisions",collect());progress()}});

/* clicks */
document.addEventListener("click",e=>{
  const t=e.target;
  if(t.id==="copy"){const o=collect(),lines=[];[...dc.confirm,...dc.decide].forEach(x=>{const v=o[x.id];if(v&&(v.picks.length||v.note))lines.push(`${x.id}. ${x.t}\n   → ${v.picks.join(", ")||"none"}${v.note?"  ("+v.note+")":""}`)});
    const txt="Speed's answers to the blueprint\n\n"+(lines.join("\n\n")||"(nothing ticked yet)");const out=$("#out");out.hidden=false;out.textContent=txt;
    Promise.resolve().then(()=>navigator.clipboard.writeText(txt)).then(()=>{t.textContent="Copied";setTimeout(()=>t.textContent="Copy my answers",1500)}).catch(()=>{t.textContent="Select the text below to copy"});return}
  if(t.id==="clear"){$$(".dec input").forEach(i=>i.checked=false);$$(".dec textarea").forEach(x=>x.value="");store.set("wd-decisions",{});$("#out").hidden=true;progress();return}
  const j=t.closest("[data-jump]");if(j){e.preventDefault();document.getElementById(j.dataset.jump).scrollIntoView({behavior:"smooth",block:"start"});return}
  const sel=t.closest("[data-sel]");if(sel){wfSel=sel.dataset.sel;renderWF();if(innerWidth<820)$("#wfdetail").scrollIntoView({behavior:"smooth"});return}
  const gb=t.closest("#wff button");if(gb){wfFilter=gb.dataset.g;$$("#wff button").forEach(b=>b.classList.toggle("on",b===gb));renderWFList();const first=V.flows.find(f=>wfFilter==="all"||f.group===wfFilter||(wfFilter==="A"&&f.part==="A"));if(first){wfSel=first.id;renderWF()}return}
  const w=t.closest("[data-wf]");if(w){openWF(w.dataset.wf);return}
  const md=t.closest("[data-mod]");if(md&&M[md.dataset.mod]){openMod(md.dataset.mod);return}
  const b=t.closest("#f button");if(b){const f=b.dataset.f,mods=$$("#mods>details");
    if(f==="expand"){const open=b.textContent==="Open all";mods.forEach(d=>d.open=open);b.textContent=open?"Close all":"Open all";return}
    $$("#f button:not([data-f=expand])").forEach(x=>x.classList.toggle("on",x===b));
    mods.forEach(d=>d.style.display=(f==="all"||d.dataset.part===f||(f==="wait"&&d.dataset.status==="B"))?"":"none")}
});
function openMod(id){location.hash="pieces";setTimeout(()=>{const el=document.getElementById("mod-"+id);el.style.display="";el.open=true;el.scrollIntoView({behavior:"smooth",block:"start"})},60)}

function show(){
  const id=(location.hash||"#plan").slice(1),k=tabs.some(t=>t[0]===id)?id:"plan";
  $$("section").forEach(s=>s.classList.toggle("on",s.id==="s-"+k));
  $$("#nav a[data-t],#sections a[data-t]").forEach(a=>a.classList.toggle("on",a.dataset.t===k));
  centerOn();
  const here=$("#here"),t=tabs.find(x=>x[0]===k);if(MAP&&here&&t)here.textContent="Stage 2 · "+t[1];
  $$("#mapmenu a[data-t]").forEach(a=>{const on=a.dataset.t===k;a.classList.toggle("on",on);if(on)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  window.scrollTo(0,0);
}
/* Like the map: on narrow screens, scroll each tab row so the current tab is in view. */
function centerOn(){document.querySelectorAll("#nav,#sections").forEach(n=>{const a=n.querySelector("a.on");if(a&&n.scrollWidth>n.clientWidth)n.scrollLeft=a.offsetLeft-(n.clientWidth-a.offsetWidth)/2;});}
window.addEventListener("hashchange",show);show();

const root=document.documentElement;
const SUN='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>';
const MOON='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
/* Same rule as the map: follow the device unless a choice is saved (the head script applies a saved one). */
const isDark=()=>root.dataset.theme?root.dataset.theme==="dark":!matchMedia("(prefers-color-scheme: light)").matches;
const paintTheme=()=>{const d=isDark(),b=$("#theme");b.innerHTML=d?SUN:MOON;b.setAttribute("aria-label",d?"Switch to light appearance":"Switch to dark appearance");b.title=b.getAttribute("aria-label")};
paintTheme();matchMedia("(prefers-color-scheme: light)").addEventListener("change",paintTheme);
$("#theme").addEventListener("click",()=>{root.dataset.theme=isDark()?"light":"dark";try{localStorage.setItem("wd-theme",root.dataset.theme)}catch(e){}paintTheme()});
})();
