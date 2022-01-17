export default function init() {
  var interval = setInterval(displayTime, 1000)
  // console.log("interval: " + interval);
}

function displayTime() {
  const rawDate = new Date()
  const hours = rawDate.getHours()
  console.log("hours: " + hours + "de tipo" + typeof(hours));
  const minutes = rawDate.getMinutes()
  const seconds = rawDate.getSeconds()
  setLinearBackground(hours)
  // console.log("la hora es: " + hours + " horas\n" + minutes + " minutos\n" + seconds + " segundos");
  const display = document.querySelector('.display')
  const template = `${hours}:${minutes}:${seconds}`
  display.textContent = template;
}

function setLinearBackground(time) {
  console.log("time: " + time + "de tipo: " + typeof(time));
  const body = document.querySelector("body")

  if(((time >= 18) && (time <= 19)) || ((time >= 4) && (time <= 5))) {
    body.style.background = "linear-gradient(var(--edgeNight), var(--white))";
    console.log("edgenight");
  }
  else if((time>=20) || (time <= 4)) {
    body.style.background = "linear-gradient(var(--middleNight), var(--white))";
    console.log("Middlenight");
  }
  else if ((time >= 6 && time <= 7) || (time >= 17 && time <= 18)) {
    body.style.background = "linear-gradient(var(--edgeDay), var(--white))";
    console.log("edgeDay");
  }
  else if (time >= 8 && time <= 16) {
    body.style.background = "linear-gradient(var(--middleDay), var(--white))";
    console.log("middleDay");
 }
}