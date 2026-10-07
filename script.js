const progress=document.getElementById('progress');
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

function updateProgress(){
 const h=document.documentElement;
 const p=h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100;
 if(progress) progress.style.width=p+'%';
}

const projects=[...document.querySelectorAll('.horizontal-project')];
function updateProjects(){
 projects.forEach(section=>{
   const rect=section.getBoundingClientRect();
   const total=Math.max(1,section.offsetHeight-window.innerHeight);
   const p=Math.min(1,Math.max(0,-rect.top/total));
   section.style.setProperty('--progress',p.toFixed(4));
   section.style.setProperty('--slides',section.dataset.slides||1);
 });
}
function onScroll(){updateProgress();updateProjects();}
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('resize',onScroll);
onScroll();

const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
function openLightbox(src,alt){
 lightboxImg.src=src; lightboxImg.alt=alt||''; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeLightbox(){
 lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; document.body.style.overflow='';
}
document.querySelectorAll('[data-full]').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.full,el.querySelector('img')?.alt)));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.querySelector('.close').addEventListener('click',closeLightbox);
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
