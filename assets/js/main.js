
// This will fix the navbar on top on scroll
window.addEventListener('scroll', ()=> {
    setTimeout(() => {
        if (window.scrollY > 10) {
            document.querySelector('header').classList.add('fixed-navbar');
          } else {
              document.querySelector('header').classList.remove('fixed-navbar');
          }
    }, 500);
  });