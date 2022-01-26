export function getTime() {
  const rawDate = new Date()
  const hours = rawDate.getHours()
  const minutes = rawDate.getMinutes()
  const seconds = rawDate.getSeconds()
  // console.log("hours: " + hours + "de tipo" + typeof (hours));
  const time = {hours, minutes, seconds}
  // console.log(time);
  return time
}