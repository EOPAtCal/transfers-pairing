import match from './match';

// Client ID and API key from the Developer Console
var CLIENT_ID =
  '189506913922-3lr5j6kj5gr173gh59uh6sm6476mir21.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCjs7WRa3HA1YxFfKCwod-b7pl9WZvFP8o';
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  'https://sheets.googleapis.com/$discovery/rest?version=v4'
];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');
const gapi = window.gapi;
let defaults;
/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad(d) {
  defaults = d;
  gapi.load('client:auth2', initClient);
}
/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .then(function() {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
}
/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    initMatch();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}
/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}
/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

const selectMentee = user => ({
  name: `${user[2]} ${user[3]} ${user[4]}`,
  email: user[9],
  college: user[11],
  major: user[13],
  get id() {
    return this.email;
  }
});
const selectMentor = user => ({
  name: user[1],
  email: user[2],
  major: user[4],
  college: user[5],
  get id() {
    return this.email;
  },
  max: user[8] || 4
});
const menteeDetails = {
  spreadsheetId: '1hYJI9U5R4e1-bOhSdNowPPk-cskxrIX4p3Cqtk29II0',
  range: 'A2:AI376'
};
const mentorDetails = {
  spreadsheetId: '18zmzgEI6DzS-r_GRr9SuE5OSk6fIE2RWuJb7AJv8AgE',
  range: 'A2:I47'
};

function initMatch() {
  fetchData({
    spreadsheetId: mentorDetails.spreadsheetId,
    range: mentorDetails.range,
    selector: selectMentor
  }).then(mentors => {
    fetchData({
      spreadsheetId: menteeDetails.spreadsheetId,
      range: menteeDetails.range,
      selector: selectMentee
    }).then(mentees => {
      match({
        mentors,
        mentees
      });
    });
  });
}

function fetchData({ spreadsheetId, range, selector }) {
  return new Promise((resolve, reject) => {
    gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId,
        range
      })
      .then(
        function(response) {
          var range = response.result;
          if (range.values.length > 0) {
            resolve(getRows(range.values, selector));
          } else {
            reject('No data found.');
          }
        },
        function(response) {
          reject('Error: ' + response.result.error.message);
        }
      );
  });
}

function getRows(values, selector) {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(selector(values[i]));
  }
  return result;
}

export default handleClientLoad;
