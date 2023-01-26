navbarVisivility = false

btn_hamburguer_menu = document.querySelector('#hamburguer_menu')

/* Code to change the visibility of navbar in
 * portrait mode and change the class of the button
 * of the menu
 */
btn_hamburguer_menu.addEventListener('click', e => {
  navbarVisivility = !navbarVisivility
  btn_hamburguer_menu.className = `${navbarVisivility ? 'visible' : 'hidden'}`
})