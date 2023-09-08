function getWeekDay() {
    const date = new Date();
    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return weekDays[date.getDay()];
}
function getUTCTime() {
    return new Date().getTime();
}
function updateUTCTime() {
    const utcTime = document.querySelector("[data-testid='CurrentUTCTime']");
    utcTime.innerHTML = `${getUTCTime()}`;
    setInterval(() => (utcTime.innerHTML = `${getUTCTime()}`), 1000);
}
function updateWeekDay() {
    const weekDay = document.querySelector("[data-testid='currentDayOfTheWeek']");
    weekDay.innerHTML = `${getWeekDay()}`;
}
updateWeekDay();
updateUTCTime();
