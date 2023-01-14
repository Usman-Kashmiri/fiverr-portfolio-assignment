var menuBtn = document.getElementById("hamburger-icon"),
  sideNav = document.getElementById("navigation");
  hamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`,
  closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`;

sideNav.style.right = "-400px";

menuBtn.innerHTML = hamburgerIcon;

menuBtn.onclick = ()=> {
  if (sideNav.style.right == "-400px") {
    sideNav.style.right = "0";
    menuBtn.innerHTML = closeIcon;
  } else {
    sideNav.style.right = "-400px";
    menuBtn.innerHTML = hamburgerIcon;
  }
}

// This will fix the navbar on top on scroll
window.addEventListener('scroll', () => {
  setTimeout(() => {
    if (window.scrollY > 10) {
      document.getElementById('header').classList.add('fixed-navbar');
    } else {
      document.getElementById('header').classList.remove('fixed-navbar');
    }
  }, 500);
});

// expandable 
function expand(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("active") == -1) {
    x.classList.add("active");
  } else {
    x.classList.remove("active");
  }
}
