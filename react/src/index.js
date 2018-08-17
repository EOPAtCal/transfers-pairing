import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Page from './Page';

UIkit.use(Icons);
window.UIkit = UIkit;

class App extends PureComponent {
  state = {
    matches1: [],
    matches2: []
  };

  render() {
    const { matches1, matches2 } = this.state;
    return (
      <div>
        <ul class="uk-subnav uk-subnav-pill uk-flex-center" uk-switcher="">
          <li>
            <a>starting point mentorship program</a>
          </li>
          <li>
            <a>major insights</a>
          </li>
        </ul>

        <ul class="uk-switcher uk-margin">
          <li>
            <Page matches={matches1} />
          </li>
          <li>
            <Page matches={matches2} />
          </li>
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
