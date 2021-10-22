import React from "react";
import { useState } from "react/cjs/react.development";
import { MDBBtn } from "mdb-react-ui-kit";
import './Buttons.css';
const { TimeStamp } = require('../Data/TimeStamp')
const { Sheet } = require('../Data/Sheet')

function Buttons() {

    const sheet = new Sheet();

    let timeStamp = new TimeStamp();

    // const [shouldShowClockIn, setShouldShowClockIn] = useState(true);

    const appendSpreadsheet = async (row) => {
        await sheet.load();
        await sheet.addRows(row);
    }

    const handleStartClick = () => {
        timeStamp.setStartTime();
        // setShouldShowClockIn(false);
    }

    const handleEndClick = async () => {
        timeStamp.setEndTimeAndHours();
        await appendSpreadsheet(timeStamp);
        timeStamp = new TimeStamp();
        // setShouldShowClockIn(true);
    }

    return (
        <div className="buttons">
            {/* {shouldShowClockIn ?
                <button onClick={handleStartClick}>Clock In</button> :
                <button onClick={handleEndClick}>Clock out</button>} */}
                <MDBBtn floating className="button" color='danger' onClick={handleStartClick}>Clock In</MDBBtn>
                <MDBBtn floating className="button" color='success' onClick={handleEndClick}>Clock out</MDBBtn>
        </div>
    );
}



export default Buttons;