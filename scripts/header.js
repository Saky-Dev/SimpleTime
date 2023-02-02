let navbar_visivility = false

let btn_hamburguer_menu = document.querySelector('button#hamburguer_menu')

/* Code to change the visibility of navbar in
 * portrait mode and change the class of the button
 * of the menu
 */
btn_hamburguer_menu.addEventListener('click', e => {
  navbar_visivility = !navbar_visivility
  btn_hamburguer_menu.className = `${navbar_visivility ? 'visible' : 'hidden'}`
})