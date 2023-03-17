window.sr = ScrollReveal({ reset: true });

sr.reveal('#openingelem', { duration: 2000 });

const seta = document.querySelector('#seta')

seta.addEventListener('click', () =>{
    window.scroll({top: window.outerHeight, behavior: "smooth"})
})