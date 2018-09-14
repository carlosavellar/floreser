let countDate = new Date("March, 02, 2019, 19:00:00").getTime();
let numDias, numHoras, numMin, numSeg, distance;
const formtDigits = (val) =>{  
   if(val < 10){
    val = "0" + val;
    }
    return val;
};
const updateClock = ()=>{
    let now = new Date().getTime();
    distance = countDate - now;
    // let numMes = new Date().getMonth();
    console.log( numMes - 6 );
    let numMes = Math.floor();
    let numDias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let numHoras = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let numMin = Math.floor((distance % (1000 * 60 * 60)) / ((1000 * 60)));
    let numSeg = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.dias').innerHTML = formtDigits(numDias);
    document.querySelector('.horas').innerHTML = formtDigits(numHoras);
    document.querySelector('.minutos').innerHTML = formtDigits(numMin);
    document.querySelector('.segundos').innerHTML = formtDigits(numSeg);  
};
setInterval(updateClock, 1000);
updateClock();
if(distance < 0){
    clearInterval(updateClock) 
    console.log('___setInterval cleared-');
}

// Video Control
const btnPlay =  document.getElementById("playBtn");
const myVideo =  document.getElementById("myVideo");
var btnClose = document.getElementById("closeBot");

btnPlay.addEventListener('click',()=>{
     myVideo.pause();
});
document.getElementById("closeBot").addEventListener('click', ()=>{
    myVideo.play();

});
