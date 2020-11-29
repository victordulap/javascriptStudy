let startCountDown = startTime => {
   let timeText = document.getElementById("timer");
   let toCountFromNSeconds = startTime;
   let startButton = document.getElementById('startCounter');
   startButton.disabled = true;

   let countInterval = setInterval(() => {
      timeText.innerText = toCountFromNSeconds;
      toCountFromNSeconds--;

      if (toCountFromNSeconds < 0) {
         startButton.disabled = false;
         alert('Count down ended!');
         clearInterval(countInterval);
      }
   }, 1000);
}