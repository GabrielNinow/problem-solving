const timeString = "12:00:00AM";

function timeConversion(s) {
    const now = new Date();

    const [time, ampm] = s.match(/(\d{2}:\d{2}:\d{2})(\w{2})/).slice(1);
    const [hours, minutes, seconds] = time.split(':');

    let militaryHours = parseInt(hours, 10);
    if (ampm === 'PM' && militaryHours !== 12) {
        militaryHours += 12;
    } else if (ampm === 'AM' && militaryHours === 12) {
        militaryHours = 0;
    }

    return formatter(militaryHours,minutes,seconds);
}

function formatter(hours, minutes, seconds){
 return `${hours.toString().padStart(2,"0")}:${minutes}:${seconds}`;
}

console.log(timeConversion(timeString));
