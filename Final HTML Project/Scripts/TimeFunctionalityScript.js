//time functionality
    function getCurrentDateTime() {
            const currentDateAndTime = new Date() // new date() defaults to current time.
            const time = currentDateAndTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: true });
            // Format the date according to locale-specific settings
            // { timeZone: 'America/New_York' } specifies the time zone for formatting (Eastern Time Zone)
            // The default format used is based on the locale 'en-US', which will be MM/DD/YYYY
            const date = currentDateAndTime.toLocaleDateString('en-US', { timeZone: 'America/New_York' });
            return { time, date }; // Return the formatted time and date as an object
    }

    //clock
        updateClock();
        setInterval(updateClock,1000); //calls updateclock every second

        function updateClock(){    // updates html elements with the current time.
            getCurrentDateTime();
            let dateAndTime = getCurrentDateTime();
            document.getElementById("currentDate").innerHTML = dateAndTime.date;
            document.getElementById("currentTime").innerHTML = dateAndTime.time;
        }

    //last visited        
        if(typeof(Storage) !== "undefined") { //checks for local storage
            if (localStorage.getItem("date") !== null && localStorage.getItem("time") !== null) { //checks if date and time key are in storage
                let date = localStorage.getItem("date"); //retrieves name key values
                let time = localStorage.getItem("time")
                let storedDate = JSON.parse(date);      //parse date and time
                let storedTime = JSON.parse(time);      
                document.getElementById("lastDate").innerHTML = storedDate;
                document.getElementById("lastTime").innerHTML = storedTime; 
            } else {
                console.log("No date and time key found");
            }
        } else {
            console.log("No local storage found");
        }

        storeVisitDateAndTime()

        function storeVisitDateAndTime() {
            let dateAndTime = getCurrentDateTime();
            let date = JSON.stringify(dateAndTime.date);
            let time = JSON.stringify(dateAndTime.time);
            localStorage.setItem("date", date);
            localStorage.setItem("time", time);
        }
        
    //morning afternoon or evening greeting
        setGreeting();
        function setGreeting() {
            const currentDateAndTime = new Date();
            const time = currentDateAndTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false }) //24 hour format to properly compare strings
            if (time < "12:00:00") {
                document.getElementById("morningAfternoonOrEvening").innerHTML = "Good Morning" 
            } else if (time > "12:00:00" && time < "18:00:00" ) {
                document.getElementById("morningAfternoonOrEvening").innerHTML = "Good Afternoon"
            } else if (time > "18:00:00") {
                document.getElementById("morningAfternoonOrEvening").innerHTML = "Good Evening"
            } else {
               console.log("This must be the work of an enemy stand")  //I hope somebody reads this because it makes me very happy
            }
        }