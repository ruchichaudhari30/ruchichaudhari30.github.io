const progress=document.getElementById('progress');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>{const h=document.documentElement; const p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100; progress.style.width=p+'%';});
