import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';

import Icons from 'uikit/dist/js/uikit-icons';
import Page from './components/Page';
import handleClientLoad from './api';
import defaultsSPMP from './data/defaultsSPMP.json';
import defaultsMI from './data/defaultsMI.json';

UIkit.use(Icons);
window.UIkit = UIkit;

class App extends PureComponent {
  state = {
    matchesMI: [],
    matchesSPMP: [],
    unmatchedMenteesMI: [],
    unmatchedMenteesSPMP: [],
    unmatchedMentorsMI: [],
    unmatchedMentorsSPMP: []
  };

  loadScript() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    document.body.appendChild(script);
  }

  async componentDidMount() {
    await this.loadScript();
    const {
      matches: matchesSPMP,
      unmatchedMentees: unmatchedMenteesSPMP,
      unmatchedMentors: unmatchedMentorsSPMP
    } = await handleClientLoad(defaultsSPMP);

    const {
      matches: matchesMI,
      unmatchedMentees: unmatchedMenteesMI,
      unmatchedMentors: unmatchedMentorsMI
    } = await handleClientLoad(defaultsMI);

    this.setState({
      matchesMI,
      matchesSPMP,
      unmatchedMenteesMI,
      unmatchedMenteesSPMP,
      unmatchedMentorsMI,
      unmatchedMentorsSPMP
    });
  }
  render() {
    const { matchesMI = [], matchesSPMP = [] } = this.state;
    return (
      <div className="uk-section uk-section-small uk-section-muted">
        <div className="uk-container">
          {/* Add buttons to initiate auth sequence and sign out */}
          <button id="authorize_button" style={{ display: 'none' }}>
            Authorize
          </button>
          <button id="signout_button" style={{ display: 'none' }}>
            Sign Out
          </button>
          <ul
            className="uk-subnav uk-subnav-pill uk-flex-center"
            uk-switcher=""
          >
            <li>
              <a>starting point mentorship program</a>
            </li>
            <li>
              <a>major insights</a>
            </li>
          </ul>
          <ul className="uk-switcher uk-margin">
            <li>
              <Page matches={matchesSPMP} defaults={defaultsSPMP} />
            </li>
            <li>
              <Page matches={matchesMI} defaults={defaultsMI} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
