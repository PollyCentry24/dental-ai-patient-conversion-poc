import {respondToPatient,checkBooking,demoSlots,sampleFunnel} from './engine.mjs';
const $=id=>document.getElementById(id);
const labels={demo:'Conversation lab',booking:'Booking rules',insights:'Conversion signals',architecture:'System & safeguards'};
const views=[...document.querySelectorAll('.view')];
function navigate(view){if(!labels[view])return;views.forEach(e=>e.classList.toggle('active',e.id==='view-'+view));document.querySelectorAll('.nav-button').forEach(e=>e.classList.toggle('active',e.dataset.view===view));$('breadcrumb').textContent=labels[view];const stepIds={demo:'tour-inquiry',booking:'tour-booking',insights:'tour-impact'};document.querySelectorAll('.tour-step').forEach(e=>{e.classList.toggle('current',e.id===stepIds[view]);if(e.id===stepIds[view])e.setAttribute('aria-current','step');else e.removeAttribute('aria-current');});if(location.hash!=='#'+view)location.hash=view;window.scrollTo(0,0);}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
function prefillConsultation(){
  $('service-select').value='Veneer consultation';
  $('doctor-select').value='Dr. Mira';
  $('day-select').value='Saturday';
  $('time-select').value='11:00';
  $('booking-result').className='result-box';
  $('booking-result').textContent='Example from the veneer conversation: Dr. Mira · Saturday · 11:00. Select Check eligibility to apply the fictional rules. No appointment is confirmed.';
}
function openBooking(){navigate('booking');prefillConsultation();}
$('go-booking').addEventListener('click',openBooking);
$('tour-inquiry').addEventListener('click',()=>{navigate('demo');document.querySelector('.scenario')?.click();});
$('tour-booking').addEventListener('click',openBooking);
$('tour-impact').addEventListener('click',()=>navigate('insights'));
$('go-insights').addEventListener('click',()=>navigate('insights'));
window.addEventListener('hashchange',()=>navigate(location.hash.slice(1)));
function message(kind,value){const el=document.createElement('div');el.className='bubble '+kind;const l=document.createElement('div');l.className='bubble-label';l.textContent=kind==='user'?'PATIENT · EXAMPLE':'DEMO ASSISTANT';const p=document.createElement('p');p.textContent=value;el.append(l,p);$('chat-body').append(el);$('chat-body').scrollTop=$('chat-body').scrollHeight;}
function respond(text){message('user',text);const r=respondToPatient(text);message('assistant',r.reply);$('trace-intent').textContent=r.intent;$('trace-risk').textContent=r.risk==='high'?'Dentist / urgent escalation':r.risk==='medium'?'Staff review':'Approved informational workflow';$('trace-stage').textContent=r.stage;$('trace-match').textContent=r.source||'No retrieved FAQ';}
$('chat-form').addEventListener('submit',e=>{e.preventDefault();const s=$('chat-input').value.trim();if(s){respond(s);$('chat-input').value='';}});
document.querySelectorAll('.scenario').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.scenario').forEach(x=>x.classList.toggle('selected',x===b));$('chat-body').innerHTML='';$('chat-input').value=b.dataset.message;respond(b.dataset.message);}));
function options(id,values){const select=$(id);for(const s of values){const o=document.createElement('option');o.value=o.textContent=s;select.append(o);}}
options('service-select',[...new Set(demoSlots.map(x=>x.service))]);options('doctor-select',[...new Set(demoSlots.map(x=>x.doctor))]);options('day-select',['Wednesday','Friday','Saturday']);options('time-select',['09:30','10:00','11:00','13:30','14:00','15:00']);
$('check-slot').addEventListener('click',()=>{const q={service:$('service-select').value,doctor:$('doctor-select').value,day:$('day-select').value,time:$('time-select').value};const r=checkBooking(q);$('booking-result').className='result-box '+(r.ok?'success':'fail');$('booking-result').textContent=r.status+' — '+r.message;});
for(const s of demoSlots){const e=document.createElement('div');e.className='schedule-item';for(const k of ['service','doctor','day','time']){const t=document.createElement('span');t.textContent=s[k];e.append(t);}$('schedule-table').append(e);}
for(const s of sampleFunnel){const e=document.createElement('div');e.className='funnel-stage';const label=document.createElement('span');label.textContent=s.stage;const track=document.createElement('div');track.className='funnel-track';const bar=document.createElement('div');bar.className='funnel-fill';bar.style.width=100*s.count/sampleFunnel[0].count+'%';track.append(bar);const n=document.createElement('b');n.textContent=s.count;e.append(label,track,n);$('funnel-chart').append(e);}
respond('สนใจทำวีเนียร์ค่ะ ราคาเท่าไหร่');navigate(location.hash.slice(1)||'demo');
