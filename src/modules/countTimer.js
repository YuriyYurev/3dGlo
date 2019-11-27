const countTimer = (deadline) => {
  let timeHours = document.querySelector('#timer-hours'),
      timeMinutes = document.querySelector('#timer-minutes'),
      timeSeconds = document.querySelector('#timer-seconds');
      
      const checkTenTime = (parseTime , targetTime) => { 
        if (targetTime < 0) {
          return (parseTime = '00');
        } else if (parseTime < 10) {
          return (parseTime = '0' + parseInt(parseTime));
        } else {
          return parseTime;
        }
      };
     
      const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return {timeRemaining, hours, minutes, seconds};
      };

      const updateClock = () => {
        let interval = setInterval(function() {
          let timer = getTimeRemaining();
          timeHours.textContent = checkTenTime(timer.hours, timer.timeRemaining);
          timeMinutes.textContent = checkTenTime(timer.minutes, timer.timeRemaining);
          timeSeconds.textContent = checkTenTime(timer.seconds, timer.timeRemaining);
          if (timer.timeRemaining < 0) {
            clearInterval(interval);
          }
        }, 1000);
      };

      updateClock();
};

export default countTimer;