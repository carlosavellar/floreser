"use strict";var countDate=new Date("March, 02, 2019, 19:00:00").getTime(),numDias=void 0,numHoras=void 0,numMin=void 0,numSeg=void 0,distance=void 0,formtDigits=function(e){return e<10&&(e="0"+e),e},updateClock=function(){var e=(new Date).getTime();distance=countDate-e,console.log(t-6);var t=Math.floor(),o=Math.floor(distance/864e5),n=Math.floor(distance%864e5/36e5),i=Math.floor(distance%36e5/6e4),l=Math.floor(distance%6e4/1e3);document.querySelector(".dias").innerHTML=formtDigits(o),document.querySelector(".horas").innerHTML=formtDigits(n),document.querySelector(".minutos").innerHTML=formtDigits(i),document.querySelector(".segundos").innerHTML=formtDigits(l)};setInterval(updateClock,1e3),updateClock(),distance<0&&(clearInterval(updateClock),console.log("___setInterval cleared-"));var btnPlay=document.getElementById("playBtn"),fullVideo=document.getElementById("myVideo-full"),myVideo=document.getElementById("myVideo"),btnClose=document.getElementById("closeBot");btnPlay.addEventListener("click",function(){myVideo.pause()}),document.getElementById("closeBot").addEventListener("click",function(){myVideo.play()}),fullVideo.controls=!0,document.addEventListener("scroll",function(){500<window.scrollY?(console.log("Maior que 100"),myVideo.pause()):myVideo.play()}),console.log("Total love");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb3VudERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsIm51bURpYXMiLCJudW1Ib3JhcyIsIm51bU1pbiIsIm51bVNlZyIsImRpc3RhbmNlIiwiZm9ybXREaWdpdHMiLCJ2YWwiLCJub3ciLCJjb25zb2xlIiwibnVtTWVzIiwiTWF0aCIsImZsb29yIiwidXBkYXRlQ2xvY2siLCJkb2N1bWVudCIsImlubmVySFRNTCIsInNldEludGVydmFsIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRCeUlkIiwiY2xlYXJJbnRlcnZhbCIsImJ0bkNsb3NlIiwiYnRuUGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJteVZpZGVvIiwicGF1c2UiLCJmdWxsVmlkZW8iLCJsb2ciXSwibWFwcGluZ3MiOiJhQUFBLElBQUlBLFVBQVksSUFBSUMsS0FBSyw2QkFBNkJDLFVBQ2xEQyxhQUFBQSxFQUFTQyxjQUFBQSxFQUFVQyxZQUFBQSxFQUFRQyxZQUFBQSxFQUFRQyxjQUFBQSxFQURuQ1AsWUFBZ0JDLFNBQUFBLEdBQ1dLLE9BQTNCSCxFQUFBQSxLQUFTQyxFQUFBQSxJQUFBQSxHQUFrQkUsR0FDekJFLFlBQWMsV0FDaEIsSUFBSUMsR0FBTSxJQUFJUixNQUFBQyxVQUNWTyxTQUFNVCxVQUFOVSxFQUVKQyxRQUFPRixJQUFQRyxFQUFBLEdBSkosSUFBQUEsRUFBQUMsS0FBQUMsUUFNTUMsRUFBY0YsS0FBQUMsTUFBZEMsU0FBQUEsT0FDRUwsRUFBVVQsS0FBSmEsTUFBV1osU0FBQUEsTUFBQUEsTUFDckJLLEVBQVdQLEtBQUFBLE1BQVlVLFNBQUFBLEtBQUFBLEtBQ3ZCSixFQUFBTyxLQUFBQyxNQUFBUCxTQUFBQSxJQUFBLEtBRUFTLFNBQUlKLGNBQVMsU0FBYkssVUFBQVQsWUFBQUwsR0FDQWEsU0FBSWIsY0FBZVcsVUFBTVAsVUFBbUJDLFlBQTlCSixHQUNkWSxTQUFJWixjQUFnQlUsWUFBT1AsVUFBWUMsWUFBYkgsR0FDMUJXLFNBQUlYLGNBQVMsYUFBd0JZLFVBQVlULFlBQVNGLElBUTlEWSxZQUFZSCxZQUFhLEtBTHJCQyxjQUNBQSxTQUFTRyxJQUNUSCxjQUFTRyxhQUNUSCxRQUFBQSxJQUFTRyw0QkFJYixJQUFJWixRQUFKUyxTQUFrQkksZUFBQSxXQUNkQyxVQUFjTixTQUFBQSxlQUFkLGdCQUNBSixRQUFZSyxTQUFBSSxlQUFBLFdBQ2ZFLFNBQUFOLFNBQUFJLGVBQUEsWUFPREcsUUFBUUMsaUJBQWlCLFFBQVMsV0FMbENDLFFBQUFDLFVBRUFWLFNBQU1XLGVBQVlYLFlBQVNJLGlCQUFlLFFBQTFDLFdBQ01LLFFBQUFBLFNBR0ZBLFVBQUFBLFVBQUEsRUFDSFQsU0FGRFEsaUJBQUEsU0FBQSxXQUd3QixJQUF4QlIsT0FBU0ksU0FDTEssUUFBQUcsSUFBQSxpQkFESkgsUUFBQUMsU0FLQVYsUUFBU1EsU0FJSmIsUUFIRGlCLElBR08iLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvdW50RGF0ZSA9IG5ldyBEYXRlKFwiTWFyY2gsIDAyLCAyMDE5LCAxOTowMDowMFwiKS5nZXRUaW1lKCk7XG5sZXQgbnVtRGlhcywgbnVtSG9yYXMsIG51bU1pbiwgbnVtU2VnLCBkaXN0YW5jZTtcbmNvbnN0IGZvcm10RGlnaXRzID0gKHZhbCkgPT4ge1xuICAgIGlmICh2YWwgPCAxMCkge1xuICAgICAgICB2YWwgPSBcIjBcIiArIHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbn07XG5jb25zdCB1cGRhdGVDbG9jayA9ICgpID0+IHtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgZGlzdGFuY2UgPSBjb3VudERhdGUgLSBub3c7XG4gICAgLy8gbGV0IG51bU1lcyA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICBjb25zb2xlLmxvZyhudW1NZXMgLSA2KTtcbiAgICBsZXQgbnVtTWVzID0gTWF0aC5mbG9vcigpO1xuICAgIGxldCBudW1EaWFzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgbGV0IG51bUhvcmFzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgbGV0IG51bU1pbiA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoKDEwMDAgKiA2MCkpKTtcbiAgICBsZXQgbnVtU2VnID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFzJykuaW5uZXJIVE1MID0gZm9ybXREaWdpdHMobnVtRGlhcyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvcmFzJykuaW5uZXJIVE1MID0gZm9ybXREaWdpdHMobnVtSG9yYXMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51dG9zJykuaW5uZXJIVE1MID0gZm9ybXREaWdpdHMobnVtTWluKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VndW5kb3MnKS5pbm5lckhUTUwgPSBmb3JtdERpZ2l0cyhudW1TZWcpO1xufTtcbnNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcbnVwZGF0ZUNsb2NrKCk7XG5pZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVDbG9jaylcbiAgICBjb25zb2xlLmxvZygnX19fc2V0SW50ZXJ2YWwgY2xlYXJlZC0nKTtcbn1cblxuLy8vLyBWaWRlb1xuY29uc3QgYnRuUGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ0blwiKTtcbmNvbnN0IGZ1bGxWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlWaWRlby1mdWxsXCIpO1xuY29uc3QgbXlWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlWaWRlb1wiKTtcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZUJvdFwiKTtcbmJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbXlWaWRlby5wYXVzZSgpO1xufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlQm90XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG15VmlkZW8ucGxheSgpO1xuXG59KTtcbmZ1bGxWaWRlby5jb250cm9scyA9IHRydWU7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1MDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWlvciBxdWUgMTAwXCIpO1xuICAgICAgICBteVZpZGVvLnBhdXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlWaWRlby5wbGF5KCk7XG4gICAgfVxufSk7XG5cbmNvbnNvbGUubG9nKCdUb3RhbCBsb3ZlJyk7XG4vLyBMb2FkIDFcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
