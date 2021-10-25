import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import './Buttons.css';
const { TimeStamp } = require('../../Data/TimeStamp')
const { Sheet } = require('../../Data/Sheet') 

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
        timeStamp.bannerDateFormat();
        console.log(timeStamp.currDate);
        // setShouldShowClockIn(false);
    }

    const handleEndClick = async () => {
        timeStamp.setEndTimeAndHours();
        console.log(timeStamp.currDate)
        await appendSpreadsheet(timeStamp);
        timeStamp = new TimeStamp();
        // setShouldShowClockIn(true);
    }

    return (
        <div className="buttons">
            {/* {shouldShowClockIn ?
                <button onClick={handleStartClick}>Clock In</button> :
                <button onClick={handleEndClick}>Clock out</button>} */}
            <div className="clockInClockOut">
                <MDBBtn floating className="button" color='danger' onClick={handleStartClick}>Clock In</MDBBtn>
                <MDBBtn floating className="button" color='success' onClick={handleEndClick}>Clock out</MDBBtn>
            </div>
        </div>
    );
}



export default Buttons;