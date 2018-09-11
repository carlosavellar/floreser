
    let countDate = new Date("Dec 01, 2018, 19:00:00").getTime();
    let monthDate = new Date().getMonth();
    let now = new Date().getTime();
    let distance = countDate - now;

    function onReady (){
        setInterval(updateClock, 1000);
        updateClock();
    }

    function updateClock(){
        var dias =  Math.floor(distance / (1000 * 60 * 60 * 24));
        var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / ((1000 * 60)));
        var segundos = Math.floor((distance % (1000 * 60)) / 1000);
        document.querySelector(".dias").textContent = dias;
        document.querySelector(".horas").textContent = horas;
        document.querySelector(".minutos").textContent = minutes;
        document.getElementById("segundos").innerHTML = segundos;
        console.log(dias +' ' + horas + '  ' + minutes);

      }
      if (distance < 0 ){
        clearInterval(timer);
        console.log('___setInterval cleared');
     }
    // document.querySelector('.dias').textContent = days;

window.onload = onReady();