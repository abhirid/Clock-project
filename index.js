const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".min");
const secondEl=document.querySelector(".sec");
//console.log(hours);
function updateClock(){
    const currDate = new Date();
    //setTimeout(updateClock,1000);
    const hour=currDate.getHours();
    const minute=currDate.getMinutes();
    const second=currDate.getSeconds();
   // console.log(hour,minute,second);
    const hourDeg=(hour/12) * 360;
    hourEl.style.transform=`rotate(${hourDeg}deg)`;
    const minuteDeg=(minute/60) * 360;
    minuteEl.style.transform=`rotate(${minuteDeg}deg)`;
    const secondDeg=(second/60) * 360;
    secondEl.style.transform=`rotate(${secondDeg}deg)`;



    
}
//updateClock()
setInterval(updateClock,1000);