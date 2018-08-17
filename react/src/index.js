import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Page from './Page';
import matchesSPMP from './data/defaultsSPMP.json';
import matchesMI from './data/defaultsMI.json';

UIkit.use(Icons);
window.UIkit = UIkit;

class App extends PureComponent {
  state = {
    matchesMI,
    matchesSPMP
  };

  render() {
    const { matches } = this.state;
    return (
      <div>
        <ul className="uk-subnav uk-subnav-pill uk-flex-center" uk-switcher="">
          <li key="matchesSPMP">
            <a>starting point mentorship program</a>
          </li>
          <li key="matchesMi">
            <a>major insights</a>
          </li>
        </ul>

        <ul className="uk-switcher uk-margin">
          <li key="matchesSPMP">
            <Page matches={matchesSPMP} />
          </li>
          <li key="matchesMi">
            <Page matches={matchesMI} />
          </li>
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
