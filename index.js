 const countdownDuration = (30 * 24 * 60 * 60) + (12 * 60 * 60) + (40 * 60) + 1; // in seconds
    let remainingTime = countdownDuration;

    function updateCountdown() {
      const days = Math.floor(remainingTime / (60 * 60 * 24));
      const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
      const seconds = remainingTime % 60;

      document.querySelectorAll('.timer').forEach(el => {
        el.innerHTML = `${days}d: ${hours}h: ${minutes}m: ${seconds}s`;
    });


      if (remainingTime > 0) {
        remainingTime--;
      } else {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "Countdown Complete!";
      }
    }

    // Start countdown
    updateCountdown(); // show immediately
    const timer = setInterval(updateCountdown, 1000);