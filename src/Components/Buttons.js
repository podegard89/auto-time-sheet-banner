import React from "react";
import { useState } from "react/cjs/react.development";
const { TimeStamp } = require('../Data/TimeStamp')
const { Sheet } = require('../Data/Sheet')

function Buttons() {
    
    const sheet = new Sheet();

    let timeStamp = new TimeStamp();

    const [shouldShowClockIn, setShouldShowClockIn] = useState(true);

    const appendSpreadsheet = async (row) => {
        await sheet.load();
        await sheet.addRows(row);
    }

    const handleStartClick = () => {
        timeStamp.setStartTime();
        setShouldShowClockIn(false);
    }

    const handleEndClick = async () => {
        timeStamp.setEndTimeAndHours();
        await appendSpreadsheet(timeStamp);
        setShouldShowClockIn(true);
        timeStamp = new TimeStamp(); 
    }

    return (
        <div>
            {shouldShowClockIn ? 
            <button onClick={handleStartClick}>Clock In</button> : 
            <button onClick={handleEndClick}>Clock out</button>}
        </div>
    );
}



export default Buttons;