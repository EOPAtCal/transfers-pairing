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
async function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    await initMatch();
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

function selectMentee(user) {
  return new Promise((resolve, reject) => {
    if (defaults) {
      resolve({
        email: user[defaults.menteeEmail],
        college: user[defaults.menteeCollege],
        major: user[defaults.menteeMajor],
        get id() {
          return this.email;
        }
      });
    } else {
      reject(`Error finding defaults`);
    }
  });
}

function selectMentor(user) {
  return new Promise((resolve, reject) => {
    if (defaults) {
      resolve({
        email: user[defaults.mentorEmail],
        college: user[defaults.mentorCollege],
        major: user[defaults.mentorMajor],
        get id() {
          return this.email;
        }
      });
    } else {
      reject(`Error finding defaults`);
    }
  });
}

function initMatch() {
  fetchData({
    spreadsheetId: defaults.mentorSpreadsheetId,
    range: defaults.mentorRange,
    selector: selectMentor
  }).then(mentors => {
    fetchData({
      spreadsheetId: defaults.menteeSpreadsheetId,
      range: defaults.menteeRange,
      selector: selectMentee
    }).then(mentees => {
      const matchResults = match({
        mentors,
        mentees
      });
      matches = matchResults.matches;
      unmatchedMentees = matchResults.unmatchedMentees;
      unmatchedMentors = matchResults.unmatchedMentors;
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

const gapi = window.gapi;
let defaults;
let matches, unmatchedMentees, unmatchedMentors;
/**
 *  On load, called to load the auth2 library and API client library.
 */
async function handleClientLoad(d) {
  defaults = d;
  await gapi.load('client:auth2', initClient);
  return {
    matches,
    unmatchedMentees,
    unmatchedMentors
  };
}

export default handleClientLoad;
