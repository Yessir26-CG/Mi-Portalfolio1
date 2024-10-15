
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

/*Cuando vayamos a una seccion en el menu se ilumine la parte de la pagina que estamos*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
 sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
       navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
       });
    };

 });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    



};


/*==================== scroll reveal ==================== configuracion para que el texto salga
como apareciendo de la nada, para esto usamos ScrollRevealJS usando ScrollReveal({ reset: true }); y customizandolo
y ScrollReveal().reveal('.tagline', { delay: 500 }); quitando tagline por los contenidos y delay por origin y top*/
ScrollReveal({ 
  // reset: true, 
   distance: '80px',
   duration: 2000,
   delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-conntent', { origin: 'right' });

/*==================== typed js ==================== para mostrar los textos de abajos pero que se vayan cambiando 
entre si*/

const typed= new Typed('.multiple-text', {
    strings: ['Desarrollador Web en proceso','Tecnico en Mantenimiento'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop : true
});