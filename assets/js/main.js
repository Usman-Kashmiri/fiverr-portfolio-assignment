var header = document.getElementById('header'),
  menuBtn = document.getElementById("hamburger-icon"),
  sideNav = document.getElementById("navigation"),

  // svgs for menuBtn:
  hamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`,
  closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`;

// Defaults:
sideNav.style.right = "-400px";
menuBtn.innerHTML = hamburgerIcon;

// this function is for sidenav on small screen devices
menuBtn.onclick = () => {
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

  // this function will be excuted after 0.5s... so it doesn't look a glitch
  setTimeout(() => {
    // this condition checks if the window has scrolled down by 10px
    if (window.scrollY > 10) {
      // then this adds the fixed-navbar class
      header.classList.add('fixed-navbar');
    } else {
      header.classList.remove('fixed-navbar');
    }
  }, 500);
});

// expandable 
// the parameters here gets the expandable parent div id and it's child's div id 
function expand(h_id, b_id) {

  // storing those id in variables
  var head = document.getElementById(h_id),
    body = document.getElementById(b_id),

    // to get the sibling elements of parent expandale div
    nextSiblingElement = head.nextElementSibling,
    previousSiblingElement = head.previousElementSibling;

  // this will help us in close the other expandable while one of them is open.
  if (nextSiblingElement != undefined) {
    nextSiblingElement.classList.remove("active")
  } else {
    previousSiblingElement.classList.remove("active")
  }

  // this code block toggles active class... which allow us switching between display block & none
  body.classList.toggle("active");
  head.classList.toggle("active");
}