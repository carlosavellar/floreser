var countDate = new Date("Dec, 01, 2018, 19:00:00").getTime();
var numDias, numHoras, numMin, numSeg;

const formtDigits = (val) =>{  
   if(val < 10){
    val = "0" + val;
    }
    return val;
};

const updateClock = ()=>{
    var now = new Date().getTime();
    var distance = countDate - now;

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

  if (distance < 0 ){
    clearInterval(timer);
    console.log('___setInterval cleared');
 }

