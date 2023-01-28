twelveHoursFormat = false

btn_switch = document.querySelector('button#switch')
spn_midday = document.querySelector('span#midday')

btn_switch.addEventListener('click', () => {
  twelveHoursFormat = !twelveHoursFormat

  btn_switch.className = twelveHoursFormat ? 'on' : 'off'
  spn_midday.className = twelveHoursFormat ? 'visible' : 'hidden'
})
