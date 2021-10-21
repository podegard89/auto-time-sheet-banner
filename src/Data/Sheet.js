const { GoogleSpreadsheet } = require('google-spreadsheet');

class Sheet {
    constructor() {
        let sheetUrl = require('../sheeturl.json').url;
        this.doc = new GoogleSpreadsheet(sheetUrl);
    }

    async load() {
        // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
        await this.doc.useServiceAccountAuth(require('../credentials.json'));

        await this.doc.loadInfo(); // loads document properties and worksheets
    }

    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0]; // use first sheet
        await sheet.addRows([rows]);
    }
}

module.exports = { Sheet }