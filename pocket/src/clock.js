import {htmlGenerator} from "./warmup";

export default class Clock {
  constructor() {
    let currentTime = new Date ();

    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    setInterval(this._tick.bind(this), 1000);
    
  }

  printTime(clockElement) {
    let currentTime = [this.hours, this.minutes, this.seconds].join(":");
    currentTime = currentTime.split(":").map((el) => {
      if (el.length === 1) {
        return "0" + el;
      }
      return el; 
    });

    currentTime = currentTime.join(":");
    htmlGenerator(currentTime, clockElement);
  }

  _tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}