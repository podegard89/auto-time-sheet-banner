const { GoogleSpreadsheet } = require('google-spreadsheet');
const { TimeStamp } = require('./TimeStamp.js')

class Sheet {
    constructor() {
        let sheetUrl = require('../../sheeturl.json').url;
        this.doc = new GoogleSpreadsheet(sheetUrl);
    }

    async load() {
        // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
        await this.doc.useServiceAccountAuth(require('../../credentials.json'));

        await this.doc.loadInfo(); // loads document properties and worksheets
    }

    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0]; // use first sheet
        await sheet.addRows(rows);
    }
}

(async function () {
    const sheet = new Sheet();
    await sheet.load();
    let timeStamp = new TimeStamp();
    timeStamp.setEndTime();
    timeStamp.setHours();
    await sheet.addRows([timeStamp])
})()
