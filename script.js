
class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate);
    }

    timeCounter() {
    this.days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.remainingTime % (1000 * 60)) / 1000);
    }
    
  onTimeIntoMarckup() {
    const refs = {
      days: document.querySelector(" [data-value=days]"),
      hours: document.querySelector(" [data-value=hours]"),
      minutes: document.querySelector(" [data-value=mins]"),
      seconds: document.querySelector(" [data-value=secs]")
      };
      
    refs.days.textContent = this.pad(this.days);
    refs.hours.textContent = this.pad(this.hours);
    refs.minutes.textContent = this.pad(this.mins);
    refs.seconds.textContent = this.pad(this.secs);
    }

  startCount() {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
      this.remainingTime = this.targetDate - this.currentTime;
      this.timeCounter(), this.onTimeIntoMarckup();
      if (this.remainingTime < 0) {
        this.stopCount();
      }
    }, 1000);
  } 
  stopCount() {
    clearInterval(this.intervalId);
    this.remainingTime = 0;
    this.timeCounter(this.remainingTime);
    this.onTimeIntoMarckup(this.remainingTime);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}
const timer = new CountdownTimer("#timer-1", "December 27, 2020, 23:00");
timer.startCount();

