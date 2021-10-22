class TimeStamp {

    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.hours = null;
    }
    setStartTime() {
        this.startTime = new Date();
        this.currDate = this.startTime.toLocaleDateString();
        this.startTimeString = `${TimeStamp.hourCheck(this.startTime.getHours())}:${this.startTime.getMinutes()}:${this.startTime.getSeconds()}`
    }

    setEndTimeAndHours() {
        this.endTime = new Date();
        this.endTimeString = `${TimeStamp.hourCheck(this.endTime.getHours())}:${this.endTime.getMinutes()}:${this.endTime.getSeconds()}`
        const timeElapsedMilliseconds = this.endTime - this.startTime;
        this.hours = TimeStamp.msToTime(timeElapsedMilliseconds);
    }

    static msToTime(duration) {
        let calcSeconds = Math.floor((duration / 1000) % 60),
            calcMinutes = Math.floor((duration / (1000 * 60)) % 60),
            calcHours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        calcHours = (calcHours < 10) ? "0" + calcHours : calcHours;
        calcMinutes = (calcMinutes < 10) ? "0" + calcMinutes : calcMinutes;
        calcSeconds = (calcSeconds < 10) ? "0" + calcSeconds : calcSeconds;

        return calcHours + ":" + calcMinutes + ":" + calcSeconds;
    }

    static hourCheck(hour) {
        return hour > 12 ? hour - 12 : hour;
    }
}

module.exports = {
    TimeStamp
}
// const timeStamp = new TimeStamp();
// timeStamp.setEndTime();
// timeStamp.setHours();
// console.log(timeStamp);
