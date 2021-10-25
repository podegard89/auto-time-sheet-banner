This app has a simple React front end with 3 buttons that allow me to clock in, clock out, take a day off, and save shift data to a Google Sheets. I can then automatically crawl my employers Banner time sheet web app and input necessary data via Puppeteer.

Priorities:
-Clean up secrets JSON files for single source of truth
-Add Express.js to the project to allow communication between the puppeteer script and the front end buttons

Long term goals:
-Track gross income based on hours, other use of data etc...
-Add more UI components like an on screen timer, display of the time sheet in app
-Host project
