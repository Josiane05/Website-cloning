function formatDuration (seconds) {
    const minutesInSec = 60;
    const hoursInSec = minutesInSec * 60;
    const dayInSec = hoursInSec * 24;
    const monthsInSec = dayInSec * 30;
    
    if(seconds === 0){
        return "now";
    }
    
    let remainingSec = seconds;
    
    const month = Math.floor(remainingSec/monthsInSec);
    remainingSec = remainingSec%monthsInSec;
    
    const day = Math.floor(remainingSec/dayInSec);
    remainingSec = remainingSec%dayInSec;
    
    const hour = Math.floor(remainingSec/hoursInSec);
    remainingSec = remainingSec%hoursInSec;
    
    const minutes = Math.floor(remainingSec/minutesInSec);
    remainingSec = remainingSec%minutesInSec;
    
    let arr = [];
    if(month > 0) {
        if(month === 1 ){
            arr.push(month + "month")
        }
        else{arr.push(month + "months")
    }
    }
     if(day > 0) {
        if(day === 1 ){
            arr.push(day + "day")
        }else{arr.push(day + "days");
    }
    }
     if(hour > 0) {
        if(hour === 1 ){
            arr.push(hour + "hour")
        }else{arr.push(hour + "hours");
    }
    }
    if(minutes > 0) {
        if(minutes === 1 ){
            arr.push(minutes + " minute")
        }else{arr.push(minutes + "minutes");
    }
    } arr.splice(arr.length-1 , 0 , "and");
    return arr.join(',');
}
console.log(formatDuration(12345678));