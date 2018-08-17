import React from 'react';
import Options from './Options';
import Main from './Main';

const Page = ({ matches, defaults }) => (
  <div className="uk-container uk-text-center">
    <div>
      <ul className="uk-subnav uk-subnav-pill" uk-switcher="">
        <li>
          <a>Main</a>
        </li>
        <li>
          <a>Options</a>
        </li>
      </ul>

      <ul className="uk-switcher uk-margin">
        <li>
          <Main matches={matches} />
        </li>
        <li>
          <Options defaults={defaults} />
        </li>
      </ul>
    </div>
  </div>
);

export default Page;
