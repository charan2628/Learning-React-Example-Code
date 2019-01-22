const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12: clockTime.hours 
})

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM" 
})

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ? "0" + clockTime[key] : clockTime[key] 
})

const formatClock = format => clockTime => 
    format.replace("hh", clockTime.hours)
    .replace("mm", clockTime.minutes)
    .replace("ss", clockTime.seconds)
    .replace("tt", clockTime.ampm)

const display = target => clockTime => target(clockTime)

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg)

const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime)

const doubleDigits = civilianTime => 
                compose(
                    prependZero("hours"), 
                    prependZero("minutes"), 
                    prependZero("seconds")
                    )(civilianTime)

const startTicking = () => setInterval(
    compose(
        clear,
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt"),
        display(log)
    ),
    oneSecond()
)

const getClockTime = compose(getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits)

startTicking()

export default getClockTime