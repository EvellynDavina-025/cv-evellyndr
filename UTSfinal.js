/* =========================
FILE: script.js
========================= */

/* CURSOR */

const cursor =
document.querySelector('.cursor');

const blur =
document.querySelector('.cursor-blur');

window.addEventListener('mousemove',(e)=>{

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  blur.style.left = e.clientX + 'px';
  blur.style.top = e.clientY + 'px';

});

/* DARK MODE */

const themeToggle =
document.getElementById('theme-toggle');

if(localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark');
}

themeToggle.addEventListener('click',()=>{

  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    localStorage.setItem('theme','dark');
  }else{
    localStorage.setItem('theme','light');
  }

});

/* MOBILE MENU */

const menuBtn =
document.getElementById('menu-btn');

const mobileMenu =
document.getElementById('mobile-menu');

menuBtn.addEventListener('click',()=>{

  mobileMenu.classList.toggle('active');

});

/* TYPING */

const typingText =
"Web Developer & UI Designer";

const typingEl =
document.querySelector('.typing');

let index = 0;

function type(){

  typingEl.textContent =
  typingText.slice(0,index);

  index++;

  if(index <= typingText.length){
    setTimeout(type,80);
  }

}

type();

/* REVEAL */

const reveals =
document.querySelectorAll('.reveal');

function reveal(){

  reveals.forEach(el=>{

    const top =
    el.getBoundingClientRect().top;

    const windowHeight =
    window.innerHeight;

    if(top < windowHeight - 100){
      el.classList.add('active');
    }

  });

}

window.addEventListener('scroll',reveal);

reveal();

/* COUNTER */

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter=>{

  const update = ()=>{

    const target =
    +counter.getAttribute('data-target');

    const current =
    +counter.innerText;

    const increment =
    target / 100;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(update,20);

    }else{
      counter.innerText = target;
    }

  };

  update();

});

/* NAVBAR SHRINK */

const navbar =
document.getElementById('navbar');

window.addEventListener('scroll',()=>{

  if(window.scrollY > 50){

    navbar.style.padding = '0';

    navbar.style.background =
    'rgba(255,255,255,.75)';

  }else{

    navbar.style.background =
    'rgba(255,255,255,.4)';

  }

});