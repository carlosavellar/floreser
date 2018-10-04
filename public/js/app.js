{
    const btnPlay = document.getElementById("playBtn2");
    const fullVideo = document.getElementById("myVideo-full");
    const myVideo = document.getElementById("myVideo");
    const btnClose = document.getElementById("closeBot");
    const modalVideo = document.getElementById("exampleModalCenter");
    const btnWhats = document.getElementById('whatspp');
    const btnWhatsElo = document.getElementById("whatspp-elo");
    let countDate = new Date("March, 02, 2019, 19:00:00").getTime();
    let numDias, numHoras, numMin, numSeg, distance;
    
    const formtDigits = (val) => {
        if (val < 10) {
            val = "0" + val;
        }
        return val;
    };
    const updateClock = () => {
        let now = new Date().getTime();
        distance = countDate - now;
        // let numMes = new Date().getMonth();
        let numMes = Math.floor();
        // console.log(numMes - 6);
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
    if (distance < 0) {
        clearInterval(updateClock)
        console.log('___setInterval cleared-');
    }
    //// Video
    fullVideo.controls = true;
    fullVideo.pause();
    fullVideo.loop = false;
    fullVideo.muted = false;
    
    document.addEventListener('click', el => {
        if (el.target === modalVideo) {
            console.log(`no target ${el}`);
            fullVideo.pause();
            myVideo.play();
        } else if (!modalVideo === "clicked") {
            console.log('Fora dele');
            myVideo.play();
        }
    });
    btnPlay.addEventListener('click', () => {
        myVideo.pause();
        fullVideo.play();
    });
    document.getElementById("closeBot").addEventListener('click', () => myVideo.play());
    document.addEventListener("scroll", () => {
        window.scrollY > 500 ? myVideo.pause() : myVideo.play();
    });
    closeBot.addEventListener('click', () => fullVideo.pause());
    !modalVideo.classList.contains(".show") ? fullVideo.pause() : console.log("Show true");
    
    // const responsiveLink = (linkmobile, linkdesktop) => {
    //     console.log('Windows Open');
    //     if (window.innerWidth < 500) {
    //         btnWhats.addEventListener('click', () => {
    //             window.open(linkmobile);
    //         });
    //         console.log("+ Menor");
    //     } else if ( window.innerWidth > 501) {
    //         btnWhats.addEventListener('click', () => {
    //             window.open(linkdesktop);
    //         });
    //         console.log("Maior");
    //     }
    // }
    // responsiveLink('http://api.whatsapp.com/send?1=pt_BR&phone=5501197492-0102', 'http://whats.link/X6bad');
 
    btnWhats.addEventListener('click', () => {
        window.open('https://api.whatsapp.com/send?phone=5511974920102');
    });
    btnWhatsElo.addEventListener('click', () => {
        window.open('https://api.whatsapp.com/send?1=pt_BR&phone=55011969200733');
    });
}