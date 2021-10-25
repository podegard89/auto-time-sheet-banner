import React from 'react';
import { MDBBtn } from "mdb-react-ui-kit";
import './DayOffButton.css';

const { Sheet } = require('../../Data/Sheet');
const { TimeStamp } = require('../../Data/TimeStamp');

function DayOffButton() {
    const sheet = new Sheet();

    const appendSpreadsheet = async (row) => {
        await sheet.load();
        await sheet.addRows(row);
    }

    let timeStamp = new TimeStamp();

    const handleDayOffClick = async () => {
        timeStamp.setStartTime();
        timeStamp.setEndTimeAndHours();
        timeStamp.hours = 0;
        await appendSpreadsheet(timeStamp);
        timeStamp = new TimeStamp();
    }

    return (
        <div className="submitTimerDiv">
            <MDBBtn onClick={handleDayOffClick} floating className="submitButton" color="warning">Day off!</MDBBtn>
        </div>
    )
}

export default DayOffButton;