
/* 
* Return the current day of week
* 
*/
exports.getCurrentDayAndTime = () => {
    const DAYS = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const today = new Date()
    let utcHours = today.getHours()
    let utcMinutes = today.getMinutes()
    const AM_PM = utcHours <= 12 ? "AM" : "PM"
    utcHours = utcHours % 12
    utcHours = utcHours ? utcHours : 12
    utcMinutes = utcHours < 10 ? "0" + utcMinutes : utcMinutes
    return {
      day: DAYS[today.getDay()],
      time: `${utcHours}:${utcMinutes} ${AM_PM}`
    }
  }

/* 
* Return the Greeting based on the time
* 
*/
exports.getGreeting = () => {
const today = new Date()
const utcHours = today.getHours()
if (utcHours < 12) {
    return "Good Morning!"
} else if (utcHours < 18) {
    return "Good Afternoon!"
} else {
    return "Good Evening!"
}
}