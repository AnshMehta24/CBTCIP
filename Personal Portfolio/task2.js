
var typed = new Typed('.text', {
  strings: ['Student', 'Coder', 'Programmer', 'Website Designer','Front-end Developer'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000
});

let circularProgress = document.querySelector(".circular-progress1"),
  progressValue = document.querySelector(".progress-value1");
let progressStartValue = 0,
    progressEndValue = 90,
    speed = 10;

let progress = setInterval(() => {
  progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background =`conic-gradient(#0ef ${progressStartValue*3.6}deg , #ededed 0deg)`
if(progressStartValue == progressEndValue){
  clearInterval(progress);
}
}, speed);

let circular = document.querySelector(".circular-progress2"),
  progressV = document.querySelector(".progress-value2");

  let progressStartValue1 = 0,
  progressEndValue1=80,
  speed1 = 10;
  let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue.textContent = `${progressStartValue1}%`
    circular.style.background = `conic-gradient(#0ef ${progressStartValue1 * 3.6}deg , #ededed 0deg)`
    if(progressStartValue1 == progressEndValue1){
      clearInterval(progress1);
    }
  }, speed1);

  let circularP = document.querySelector(".circular-progress3"),
  progressV2 = document.querySelector(".progress-value3");

  let progressStartValue2 = 0,
  progressEndValue2=85,
  speed2 = 10;
  let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue.textContent = `${progressStartValue2}%`
    circularP.style.background = `conic-gradient(#0ef ${progressStartValue2 * 3.6}deg , #ededed 0deg)`
    if(progressStartValue2 == progressEndValue2){
      clearInterval(progress2);
    }
  }, speed2);

  let circularPs = document.querySelector(".circular-progress4"),
  progressV3 = document.querySelector(".progress-value4");

  let progressStartValue3 = 0,
  progressEndValue3=95,
  speed3 = 10;
  let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue.textContent = `${progressStartValue3}%`
    circularPs.style.background = `conic-gradient(#0ef ${progressStartValue3 * 3.6}deg , #ededed 0deg)`
    if(progressStartValue3 == progressEndValue3){
      clearInterval(progress3);
    }
  }, speed3);
