const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    const hoursDesign = document.getElementById("hours");
    const minutesDesign = document.getElementById("minutes");
    const secondsDesign = document.getElementById("seconds");
    const sessions = document.getElementById("sessions");

    hoursDesign.innerHTML = hours;
    minutesDesign.innerHTML = minutes;
    secondsDesign.innerHTML = seconds;

    if(hours > 12){
        sessions.innerHTML = "PM";
    }else{
        sessions.innerHTML = "AM";
    }
}

getClock();

setInterval(getClock,"1000");