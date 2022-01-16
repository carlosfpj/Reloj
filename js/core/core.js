export default function init(){
  var interval = setInterval(displayTime, 1000)
  console.log(interval);
}

function displayTime() {
  const rawDate = new Date()
  console.log(rawDate);
  const hours = rawDate.getHours()
  const minutes = rawDate.getMinutes()
  const seconds = rawDate.getSeconds()
  // console.log("la hora es: " + hours + " horas\n" + minutes + " minutos\n" + seconds + " segundos");
  const display = document.querySelector('.display')
  const template = `${hours}:${minutes}:${seconds}`
  display.textContent = template;
}