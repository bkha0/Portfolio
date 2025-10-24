// === Start of Navigation Menu Toggle ===
const menu = document.querySelector('.menu');
const menuBtn = document.getElementById('menuBtn');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    menuIcon.classList.replace('bx-menu-alt-right', 'bx-x');
  } else {
    menuIcon.classList.replace('bx-x', 'bx-menu-alt-right');
  }
});

// === Close Menu When Link Is Clicked ===
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    menuIcon.classList.replace('bx-x', 'bx-menu-alt-right');
  });
});

// === Close Menu When Clicking Outside ===
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove('show');
    menuIcon.classList.replace('bx-x', 'bx-menu-alt-right');
  }
});