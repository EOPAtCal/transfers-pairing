const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'credentials.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), fetchData);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */

function fetchData(auth) {
  const sheets = google.sheets({
    version: 'v4',
    auth
  });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: menteeDetails.spreadsheetId,
      range: menteeDetails.range
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        rows.map(row => {
          wrapMentee(row);
        });
        writeToFile('mentees.json', JSON.stringify(mentees));
      } else {
        console.log('No data found.');
      }
    }
  );

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: mentorDetails.spreadsheetId,
      range: mentorDetails.range
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        rows.map(row => {
          wrapMentor(row);
        });
        writeToFile('mentors.json', JSON.stringify(mentors));
      } else {
        console.log('No data found.');
      }
    }
  );
}

const mentees = [];
const mentors = [];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, 'utf8', function(err, _) {
    if (err) {
      console.error(`unable to write ${fileName}`);
    } else {
      console.log(`wrote ${fileName}`);
    }
  });
}

const wrapMentee = mentee =>
  mentees.push({
    id: mentee[8],
    email: mentee[8],
    college: mentee[9],
    major: mentee[28]
  });

const wrapMentor = mentor =>
  mentors.push({
    id: mentor[3],
    email: mentor[3],
    college: mentor[4],
    major: mentor[19],
    limit: mentor[20]
  });

const menteeDetails = {
  spreadsheetId: '1hRQ5v0pao0zh_LSH3zY9LgsSooDyaVjTaxO7cMOR56g',
  range: 'A2:AC351'
};
const mentorDetails = {
  spreadsheetId: '1BRs3GAmGsz7ehTc7l6fkzmB7klSvDqcpvZGYBlGYnMQ',
  range: 'A2:U61'
};
