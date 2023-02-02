let twelve_hours_format = false
let time_increment = undefined
let time = new Date()

let spn_clock = document.querySelector('span#clock')
let btn_switch = document.querySelector('button#switch')
let spn_midday = document.querySelector('span#midday')

const func_get_now = () => {
  let hrs = twelve_hours_format ? time.getHours() - 12 : time.getHours()
  let min = `${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`
  let sec = `${time.getSeconds() < 10 ? '0' : ''}${time.getSeconds()}`

  hrs = `${hrs < 10 ? '0' : ''}${hrs}`

  return `${hrs}:${min}:${sec}`
}

const func_update_time = () => spn_clock.innerHTML = func_get_now()

time_increment = setInterval(() => {
  time.setTime(time.getTime() + 1000)
  func_update_time()
}, 1000)

btn_switch.addEventListener('click', () => {
  twelve_hours_format = !twelve_hours_format

  btn_switch.className = twelve_hours_format ? 'on' : 'off'
  spn_midday.className = twelve_hours_format ? 'visible' : 'hidden'

  func_update_time()
})

;(() => {
  func_update_time()
})()