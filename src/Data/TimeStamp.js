class TimeStamp {

    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.hours = null;
    }

    setStartTime() {
        this.startTime = new Date();
        this.currDate = this.startTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
        this.startTimeString = `${TimeStamp.hourCheck(this.startTime.getHours())}:${this.startTime.getMinutes()}:${this.startTime.getSeconds()}`
    }

    setEndTimeAndHours() {
        this.endTime = new Date();
        this.endTimeString = `${TimeStamp.hourCheck(this.endTime.getHours())}:${this.endTime.getMinutes()}:${this.endTime.getSeconds()}`
        const timeElapsedMilliseconds = this.endTime - this.startTime;
        this.hours = TimeStamp.msToTime(timeElapsedMilliseconds) - 1;
    }

    static msToTime(duration) {
        let calcMinutes = Math.floor((duration / (1000 * 60)) % 60),
            calcHours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        // calcHours = (calcHours < 10) ? "0" + calcHours : calcHours;
        // calcMinutes = (calcMinutes < 10) ? "0" + calcMinutes : calcMinutes;
        // calcSeconds = (calcSeconds < 10) ? "0" + calcSeconds : calcSeconds;

        return `${calcHours + Math.round((calcMinutes / 60) * 2) / 2}`;
    }

    static hourCheck(hour) {
        return hour > 12 ? hour - 12 : hour;
    }

    bannerDateFormat() {
        const date = new Date();
        const monthNames = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        const daysOfWeek = [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ]

        const day = daysOfWeek[date.getDay()];
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = monthNames[date.getMonth()];//January is 0!
        const yyyy = date.getFullYear();

        const formattedDate = day + ' ' + dd + '-' + mm + '-' + yyyy;
        this.currDate = formattedDate;

    }
}

module.exports = { TimeStamp }
// const timeStamp = new TimeStamp();
// timeStamp.setEndTime();
// timeStamp.setHours();
// console.log(timeStamp);
// console.log(TimeStamp.msToTime(27632031.624)); 