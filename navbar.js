const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navlists = document.getElementsByClassName('nav__lists')[0]

toggleButton.addEventListener('click', () => {
  navlists.classList.toggle('active')
})