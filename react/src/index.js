import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Page from './Page';
import matchesSPMP from './data/matchesSPMP.json';
import matchesMI from './data/matchesMI.json';
import defaultsSPMP from './data/defaultsSPMP.json';
import defaultsMI from './data/defaultsMI.json';

UIkit.use(Icons);
window.UIkit = UIkit;

class App extends PureComponent {
  state = {
    matchesMI,
    matchesSPMP
  };

  render() {
    const { matchesMI, matchesSPMP } = this.state;
    return (
      <div className="uk-section uk-section-small uk-section-muted">
        <div className="uk-container">
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
