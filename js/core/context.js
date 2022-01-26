import { getTime } from "./display.js";

let hour = {}

export default function init() {
  Clock()
  getHour()
  setLinearBackground()
  setDisplayTime()
}

function Clock() {
  setInterval(getTime, 1000)
}

function getHour() {
  setInterval(() => {
    hour = getTime().hours
    // console.log(hour);
  }, 1000);
}

function setDisplayTime() {
  setInterval(() => {
    let {hours, minutes, seconds} = getTime()
    // console.log(hours, minutes, seconds);
    //  console.log("la hora es: " + hours + " horas\n" + minutes + " minutos\n" + seconds + " segundos");
     const display = document.querySelector('.display')
     const template = `${hours}:${minutes}:${seconds}`
     display.textContent = template;
  }, 1000);
 }

function setLinearBackground() {
  console.log(hour);
  // console.log("time: " + time + "de tipo: " + typeof(time));
  const body = document.querySelector("body")
  const wrapper = document.querySelector(".wrapper")
  const parser = new DOMParser()
  let dayNightImage = "";
  const imageTemplate = `<img src="../../icons/${dayNightImage}png"></img>`
  const HTML = parser.parseFromString(imageTemplate, "text/html")
  let image = HTML.body.firstChild

  if(((hour >= 18) && (hour <= 19)) || ((hour >= 4) && (hour <= 5))) {
    body.style.background = "linear-gradient(var(--edgeNight), var(--white))";
    dayNightImage = "moon"
    wrapper.append(image)
    console.log("edgenight");
  }
  else if((hour >= 20) || (hour <= 4)) {
    body.style.background = "linear-gradient(var(--middleNight), var(--white))";
    dayNightImage = "moon"
    wrapper.appendChild(image)
    console.log("Middlenight");
  }
  else if ((hour >= 6 && hour <= 7) || (hour >= 17 && hour <= 18)) {
    body.style.background = "linear-gradient(var(--edgeDay), var(--white))";
    dayNightImage = "sun"
    wrapper.appendChild(image)
    console.log("edgeDay");
  }
  else if (hour >= 8 && hour <= 16) {
    body.style.background = "linear-gradient(var(--middleDay), var(--white))";
    dayNightImage = "sun"
    wrapper.appendChild(image)
    console.log("middleDay");
 }
}