// main clock part start

function showTime() {
  var date = new Date()
  var h = date.getHours() // 0-23
  var m = date.getMinutes() // 0-59
  var s = date.getSeconds() // 0-59
  var session = 'AM'

  if (h == 0) {
    h = 12
  }

  if (h > 12) {
    h = h - 12
    session = 'PM'
  }

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  var time = h + ':' + m + ':' + s + '' + session

  document.getElementById('myclock').innerText = time

  document.getElementById('myclock').textContent = time

  setTimeout(showTime, 1000)
}

showTime()

// date part start

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
var today = days[new Date().getDay()]
var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
var date = new Date()
var day = date.getDate()
var monthIndex = date.getMonth()
var year = date.getFullYear()
document.getElementById('demo').innerHTML =
  today + ' ' + day + ' ' + monthNames[monthIndex] + ' ' + year
