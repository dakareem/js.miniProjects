
window.onload = function () {

      let seconds = 00;
      let tens = 00;

      let appendTens =
            document.getElementById("tens")

      let appendSeconds =
            document.getElementById("seconds")

      let buttonStart =
            document.getElementById("button-start")

      let buttonStop =
            document.getElementById("button-stop")

      let buttonRest =
            document.getElementById("button-rest")

      let Interval =

            buttonStart.onclick = function () {

                  clearInterval(Interval);
                  Interval = setInterval(startTimer, 10)
            }

      buttonStop.onclick = function () {
            clearInterval(Interval);
      }

      buttonRest.onclick = function () {
            clearInterval(Interval);
            appendTens.innerHTML = "00";
            appendSeconds.innerHTML = "00";

      }

      function startTimer() {
            tens++;
            if (tens <= 9) {
                  appendTens.innerHTML = "0" + tens;
            }
            if (tens > 9) {
                  appendTens.innerHTML = tens;
            }

            if (tens > 99) {
                  console.log("seconds");
                  seconds++;
                  appendSeconds.innerHTML = "0" + seconds;
                  tens = 0;
                  appendTens.innerHTML = "0" + 0;
            }

            if (seconds > 9) {
                  appendSeconds.innerHTML = seconds;
            }
      }

}