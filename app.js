
//using js class - centralize all the logic of our clock
class DigitalClock {
    constructor(element){
        this.element = element;
        //to make sure the element class has a refnernce to our main element in html div-to update the values
    }

    //need to now make it run automatically
    start() {
        this.update();

        setInterval(() => {
            this.update();
            //every half second it updates the time
        }, 500);
    }


    update() {
        const parts = this.getTime();
        //so that any minute under 10 has a 0 in front of it
        //log: "8".padStart(2, "0") would log out "08"
        const minuteFormat = parts.minute.toString().padStart(2, "0");
        const timeFormat = `${parts.hour}:${minuteFormat}`;
        //am otherwise its pm
        const amPm = parts.isAm ? "AM" : "PM";

        // console.log(timeFormat);

        //to select the time element in the HTML - grabbing this value and putting it in the clock-time span
        this.element.querySelector(".clock-time").textContent = timeFormat;
        //for the ampm span
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }


    //need to create a method to get the current time
    getTime(){
        const now = new Date();

        //return the new object containing 3 properties
        //23 (24hrs) % 12(hours on clock) = 11 (the time that's not 24hrs)
        return {
            hour: now.getHours() % 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12,
            // second: now.getSeconds()
        };
    }
}

//reference to our clock element
const clockElement = document.querySelector('.clock-container');
const clockObject = new DigitalClock(clockElement);

//calling start rather than update so that it checks the time every half second and updates
clockObject.start();