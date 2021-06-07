function classToggle() {
  let navs = document.querySelectorAll('.Nav-items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar_toggleShow'));
}

document.querySelector('.Nav-link-toggle')
  .addEventListener('click', classToggle);